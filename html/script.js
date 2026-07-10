/* ============================================================
   VILLAS POLITI TABLET - SCRIPT.JS
   Sager gemmes i MySQL via server.lua (oxmysql).
   Alle betjente ser de samme sager i real-time.
   ============================================================ */

'use strict';

/* ── NUI hjælper ─────────────────────────────────────────────── */

function nuiFetch(action, data) {
    try {
        var name = (typeof GetParentResourceName !== 'undefined')
            ? GetParentResourceName()
            : 'villas_polititablet';
        fetch('https://' + name + '/' + action, {
            method:  'POST',
            headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            body:    JSON.stringify(data || {})
        }).catch(function() {});
    } catch(e) {}
}

/* ── App state ────────────────────────────────────────────────── */

var state = {
    cases:        {},   // id (string) → caseObj - fyldes fra server
    activeCaseId: null,
    activeZone:   50,
    saving:       false
};

/* ── DOM refs ─────────────────────────────────────────────────── */

var app        = document.getElementById('app');
var caseList   = document.getElementById('caseList');
var caseHint   = document.getElementById('caseHint');
var caseForm   = document.getElementById('caseForm');
var caseNavn   = document.getElementById('caseNavn');
var caseId     = document.getElementById('caseId');
var caseTitel  = document.getElementById('caseTitel');
var caseStatus = document.getElementById('caseStatus');
var caseTekst  = document.getElementById('caseTekst');
var caseSearch = document.getElementById('caseSearch');

/* ── NUI Messages fra client.lua ─────────────────────────────── */

window.addEventListener('message', function(evt) {
    var d = evt.data;
    if (!d || !d.action) return;

    switch (d.action) {

        case 'open':
            app.classList.remove('hidden');
            // Bed serveren om alle sager
            nuiFetch('loadCases');
            break;

        case 'close':
            app.classList.add('hidden');
            break;

        // Serveren sender hele saglisten (ved åbn eller refresh)
        case 'loadCases':
            if (Array.isArray(d.cases)) {
                state.cases = {};
                d.cases.forEach(function(c) {
                    if (c && c.id) state.cases[String(c.id)] = c;
                });
                renderCaseList();
            }
            break;

        // Serveren broadcaster gem-bekræftelse til ALLE betjente
        case 'caseSaved':
            if (d.case && d.case.id) {
                var c = d.case;
                state.cases[String(c.id)] = c;
                // Hvis vi gemte denne sag, sæt den aktiv
                if (state.saving) {
                    state.activeCaseId = String(c.id);
                    state.saving = false;
                    openCaseInForm(String(c.id));
                    showGemtFeedback();
                } else {
                    // En anden betjent gemte - bare opdater listen
                    renderCaseList();
                }
            }
            break;

        // Serveren broadcaster sletning til ALLE betjente
        case 'caseDeleted':
            var delId = String(d.id);
            delete state.cases[delId];
            if (state.activeCaseId === delId) {
                hideForm();
            } else {
                renderCaseList();
            }
            break;
    }
});

/* ── Navigation ───────────────────────────────────────────────── */

document.querySelectorAll('.navbtn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var page = btn.dataset.page;
        if (!page) return;
        document.querySelectorAll('.navbtn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
        var target = document.getElementById('page-' + page);
        if (target) target.classList.add('active');
    });
});

/* ── Topbar ───────────────────────────────────────────────────── */

document.getElementById('btnClose').addEventListener('click', function() {
    nuiFetch('closeTablet');
    app.classList.add('hidden');
});

var minimized = false;
document.getElementById('btnMin').addEventListener('click', function() {
    var body = document.querySelector('.body');
    minimized = !minimized;
    body.style.display = minimized ? 'none' : '';
});

var maximized = false;
var tablet = document.querySelector('.tablet');
document.getElementById('btnMax').addEventListener('click', function() {
    maximized = !maximized;
    tablet.style.width  = maximized ? '98vw' : '';
    tablet.style.height = maximized ? '97vh' : '';
});

var brightnessSlider = document.getElementById('brightnessSlider');
brightnessSlider.addEventListener('input', function() {
    tablet.style.filter = 'brightness(' + (parseInt(this.value, 10) / 100) + ')';
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !app.classList.contains('hidden')) {
        nuiFetch('closeTablet');
        app.classList.add('hidden');
    }
});

/* ═══════════════════════════════════════════════════════════════
   SAGER / RAPPORTER
   ═══════════════════════════════════════════════════════════════ */

function renderCaseList(filter) {
    filter = (filter || '').toLowerCase();
    caseList.innerHTML = '';

    var sorted = Object.values(state.cases).sort(function(a, b) {
        return (Number(b.id) || 0) - (Number(a.id) || 0);
    });

    var shown = 0;
    sorted.forEach(function(c) {
        if (filter) {
            var hay = [c.navn||'', c.titel||'', c.status||'', c.cpr||'', c.betjent||''].join(' ').toLowerCase();
            if (!hay.includes(filter)) return;
        }
        shown++;

        var div = document.createElement('div');
        div.className = 'case-item' + (String(c.id) === String(state.activeCaseId) ? ' selected' : '');

        var pillCls = statusPillClass(c.status);
        div.innerHTML =
            '<div class="ci-top">' +
              '<span class="ci-name">' + esc(c.navn || '–') + '</span>' +
              '<span class="status-pill ' + pillCls + '">' + esc(c.status || 'Åben') + '</span>' +
            '</div>' +
            '<div class="ci-bottom">' +
              '<span class="ci-title">' + esc(c.titel || 'Ingen titel') + '</span>' +
              '<span class="ci-id">' + esc(c.betjent ? '👮 ' + c.betjent : 'ID: ' + c.id) + '</span>' +
            '</div>';

        div.addEventListener('click', function() { openCase(String(c.id)); });
        caseList.appendChild(div);
    });

    if (shown === 0) {
        var empty = document.createElement('div');
        empty.className = 'empty-hint';
        empty.textContent = filter ? 'Ingen sager matcher søgningen.' : 'Ingen sager endnu — tryk + Ny sag.';
        caseList.appendChild(empty);
    }
}

function statusPillClass(s) {
    if (!s) return 'status-aben';
    var sl = s.toLowerCase();
    if (sl.includes('afslut') || sl.includes('closed')) return 'status-closed';
    if (sl.includes('behandling'))                       return 'status-behandling';
    return 'status-aben';
}

function showForm() {
    if (caseHint) caseHint.style.display = 'none';
    if (caseForm) { caseForm.style.display = 'flex'; caseForm.style.flexDirection = 'column'; }
}

function hideForm() {
    if (caseHint) caseHint.style.display = '';
    if (caseForm) caseForm.style.display = 'none';
    state.activeCaseId = null;
    clearFields();
    renderCaseList(caseSearch ? caseSearch.value : '');
}

function clearFields() {
    if (caseNavn)   caseNavn.value   = '';
    if (caseId)     caseId.value     = '';
    if (caseTitel)  caseTitel.value  = '';
    if (caseStatus) caseStatus.value = 'Åben';
    if (caseTekst)  caseTekst.value  = '';
}

function openCase(id) {
    openCaseInForm(id);
    showForm();
    renderCaseList(caseSearch ? caseSearch.value : '');
}

function openCaseInForm(id) {
    var c = state.cases[String(id)];
    if (!c) return;
    state.activeCaseId = String(id);
    if (caseNavn)   caseNavn.value   = c.navn   || '';
    if (caseId)     caseId.value     = c.cpr    || '';
    if (caseTitel)  caseTitel.value  = c.titel  || '';
    if (caseStatus) caseStatus.value = c.status || 'Åben';
    if (caseTekst)  caseTekst.value  = c.tekst  || '';
}

function showGemtFeedback() {
    var btn = document.getElementById('btnSaveCase');
    if (!btn) return;
    var orig = btn.textContent;
    btn.textContent = '✔ Gemt!';
    btn.disabled = true;
    setTimeout(function() { btn.textContent = orig; btn.disabled = false; }, 1500);
}

/* Knapper */

document.getElementById('btnNewCase').addEventListener('click', function() {
    state.activeCaseId = null;
    clearFields();
    showForm();
    renderCaseList(caseSearch ? caseSearch.value : '');
    if (caseNavn) caseNavn.focus();
});

document.getElementById('btnRefreshCases').addEventListener('click', function() {
    nuiFetch('loadCases');
});

document.getElementById('btnSaveCase').addEventListener('click', function() {
    var navn  = caseNavn  ? caseNavn.value.trim()  : '';
    var cpr   = caseId    ? caseId.value.trim()    : '';
    var titel = caseTitel ? caseTitel.value.trim() : '';
    var st    = caseStatus ? caseStatus.value      : 'Åben';
    var tekst = caseTekst ? caseTekst.value.trim() : '';

    if (!titel && !navn) {
        alert('Angiv minimum et navn eller en titel på sagen.');
        return;
    }

    state.saving = true;

    nuiFetch('saveCase', {
        id:     state.activeCaseId || '',
        navn:   navn,
        cpr:    cpr,
        titel:  titel,
        status: st,
        tekst:  tekst
    });

    // Feedback vises når server svarer (caseSaved event)
    // Timeout fallback hvis server ikke svarer
    setTimeout(function() {
        if (state.saving) {
            state.saving = false;
            showGemtFeedback();
        }
    }, 3000);
});

document.getElementById('btnDeleteCase').addEventListener('click', function() {
    if (!state.activeCaseId) { alert('Ingen sag valgt.'); return; }
    var c = state.cases[String(state.activeCaseId)];
    var navn = c ? (c.navn || 'Ukendt') : '?';
    if (!confirm('Slet sagen for ' + navn + '? Dette kan ikke fortrydes.')) return;
    nuiFetch('deleteCase', { id: state.activeCaseId });
});

if (caseSearch) {
    caseSearch.addEventListener('input', function() { renderCaseList(this.value); });
}

/* ═══════════════════════════════════════════════════════════════
   FORSIDE / NYHEDER
   ═══════════════════════════════════════════════════════════════ */

function renderForside() {
    var list = document.getElementById('nyhederList');
    var count = document.getElementById('nyhederCount');
    if (!list) return;
    list.innerHTML = '';
    NYHEDER.forEach(function(txt, i) {
        var div = document.createElement('div');
        div.className = 'news-item';
        div.innerHTML = '<span class="news-num">' + (i+1) + '</span><span class="news-text">' + esc(txt) + '</span>';
        list.appendChild(div);
    });
    if (count) count.textContent = NYHEDER.length + ' nyheder';
}

/* ═══════════════════════════════════════════════════════════════
   BØDETAKSTER
   ═══════════════════════════════════════════════════════════════ */

function renderBodeTable(filter) {
    filter = (filter || '').toLowerCase();
    var tbody = document.getElementById('bodeBody');
    var count = document.getElementById('bodeCount');
    if (!tbody) return;
    tbody.innerHTML = '';
    var shown = 0;

    BODE.forEach(function(row) {
        var par=row[0], forhold=row[1], faengsel=row[2], bode=row[3], besk=row[4];
        if (!bode && !faengsel) {
            if (filter) return;
            var tr = document.createElement('tr');
            tr.className = 'section-row';
            tr.innerHTML = '<td><b>' + esc(par) + '</b></td><td colspan="4">' + esc(forhold) + '</td>';
            tbody.appendChild(tr);
            return;
        }
        if (filter && ![par,forhold,bode,besk].join(' ').toLowerCase().includes(filter)) return;
        var tr = document.createElement('tr');
        tr.innerHTML =
            '<td class="col-par">'      + esc(par)      + '</td>' +
            '<td class="col-forhold">'  + esc(forhold)  + '</td>' +
            '<td class="col-faengsel">' + esc(faengsel) + '</td>' +
            '<td class="col-bode">'     + esc(bode)     + '</td>' +
            '<td class="col-besk">'     + esc(besk)     + '</td>';
        tbody.appendChild(tr);
        shown++;
    });
    if (count) count.textContent = filter ? shown + ' resultater' : '';
}

/* ═══════════════════════════════════════════════════════════════
   FART & TRAFIK
   ═══════════════════════════════════════════════════════════════ */

function renderFartTable(zone) {
    var tbody = document.getElementById('fartTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    (FART_TABEL[zone] || []).forEach(function(r) {
        var konsek = r.frakendelse ? '🔴 Betinget/ubetinget frakendelse'
                   : r.klip       ? '⚠️ Klip i kørekortet'
                                  : '📋 Bøde kun';
        var tr = document.createElement('tr');
        tr.innerHTML =
            '<td>' + (r.fra === r.til ? r.fra : r.fra + '–' + r.til) + ' km/t</td>' +
            '<td>' + r.bode.toLocaleString('da-DK') + ' kr.</td>' +
            '<td>' + konsek + '</td>';
        tbody.appendChild(tr);
    });
}

function initFart() {
    document.querySelectorAll('.zonebtn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.zonebtn').forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            state.activeZone = parseInt(btn.dataset.zone, 10);
            renderFartTable(state.activeZone);
        });
    });
    renderFartTable(50);

    var btnBeregn = document.getElementById('btnBeregnFart');
    if (!btnBeregn) return;
    btnBeregn.addEventListener('click', function() {
        var zone  = parseInt(document.getElementById('fartZone').value, 10);
        var maalt = parseInt(document.getElementById('fartHastighed').value, 10);
        var result = document.getElementById('fartResult');
        if (!result) return;
        if (isNaN(maalt) || maalt <= 0) {
            result.innerHTML = '<span class="calc-warn">Angiv en gyldig hastighed.</span>';
            return;
        }
        var rows = FART_TABEL[zone] || [];
        var match = null;
        for (var i = 0; i < rows.length; i++) {
            if (maalt >= rows[i].fra && maalt <= rows[i].til) { match = rows[i]; break; }
        }
        if (!match) {
            result.innerHTML = maalt <= zone
                ? '<span class="calc-ok">✅ ' + maalt + ' km/t i en ' + zone + ' km/t zone — ingen bøde.</span>'
                : '<span class="calc-warn">⚠️ Ingen takst fundet for ' + maalt + ' km/t.</span>';
            return;
        }
        var over = maalt - zone;
        var konsek = match.frakendelse ? '🔴 Betinget/ubetinget <b>frakendelse</b>'
                   : match.klip       ? '⚠️ <b>Klip</b> i kørekortet'
                                      : '📋 Bøde kun';
        result.innerHTML =
            '<div class="calc-row-result">' +
              '<div class="calc-res-item"><div class="calc-res-label">Målt</div><div class="calc-res-value">' + maalt + ' km/t</div></div>' +
              '<div class="calc-res-item"><div class="calc-res-label">Zone</div><div class="calc-res-value">' + zone + ' km/t</div></div>' +
              '<div class="calc-res-item"><div class="calc-res-label">For hurtigt</div><div class="calc-res-value">+' + over + ' km/t</div></div>' +
              '<div class="calc-res-item highlight"><div class="calc-res-label">Bøde</div><div class="calc-res-value">' + match.bode.toLocaleString('da-DK') + ' kr.</div></div>' +
            '</div>' +
            '<div class="calc-konsek">' + konsek + '</div>';
    });
}

/* ═══════════════════════════════════════════════════════════════
   REGLER
   ═══════════════════════════════════════════════════════════════ */

function renderRegler() {
    var list = document.getElementById('reglerList');
    var count = document.getElementById('reglerCount');
    if (!list) return;
    list.innerHTML = '';
    REGLER.forEach(function(txt, i) {
        var div = document.createElement('div');
        div.className = 'rule-item';
        div.innerHTML = '<span class="rule-num">' + (i+1) + '</span><span class="rule-text">' + esc(txt) + '</span>';
        list.appendChild(div);
    });
    if (count) count.textContent = REGLER.length + ' regler';
}

/* ═══════════════════════════════════════════════════════════════
   RADIO
   ═══════════════════════════════════════════════════════════════ */

function renderRadio() {
    var normal  = document.getElementById('radioNormalBody');
    var special = document.getElementById('radioSpecialBody');
    if (normal) RADIO.normal.forEach(function(r) {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td><b>' + esc(r.kald) + '</b></td><td>' + esc(r.rolle) + '</td>';
        normal.appendChild(tr);
    });
    if (special) RADIO.special.forEach(function(r) {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td><b>' + esc(r.kald) + '</b></td><td>' + esc(r.rolle) + '</td>';
        special.appendChild(tr);
    });
}

/* ═══════════════════════════════════════════════════════════════
   KODER
   ═══════════════════════════════════════════════════════════════ */

function renderKoderTable(filter) {
    filter = (filter || '').toLowerCase();
    var tbody = document.getElementById('koderBody');
    var count = document.getElementById('koderCount');
    if (!tbody) return;
    tbody.innerHTML = '';
    var shown = 0;
    KODER.forEach(function(row) {
        var kode=row[0], bet=row[1], fork=row[2];
        if (filter && ![kode,bet,fork].join(' ').toLowerCase().includes(filter)) return;
        var tr = document.createElement('tr');
        tr.innerHTML =
            '<td class="col-kode"><b>' + esc(kode) + '</b></td>' +
            '<td class="col-bet">'     + esc(bet)  + '</td>' +
            '<td class="col-fork">'    + esc(fork) + '</td>';
        tbody.appendChild(tr);
        shown++;
    });
    if (count) count.textContent = filter ? shown + ' resultater' : KODER.length + ' koder';
}

/* ═══════════════════════════════════════════════════════════════
   TILLADELSER
   ═══════════════════════════════════════════════════════════════ */

function renderPermTable(tableEl, data) {
    if (!tableEl || !data) return;
    tableEl.innerHTML = '';
    var thead = document.createElement('thead');
    var hRow  = document.createElement('tr');
    data.columns.forEach(function(col) {
        var th = document.createElement('th');
        th.textContent = col;
        hRow.appendChild(th);
    });
    thead.appendChild(hRow);
    tableEl.appendChild(thead);
    var tbody = document.createElement('tbody');
    data.rows.forEach(function(row) {
        var tr = document.createElement('tr');
        row.forEach(function(cell, i) {
            var td = document.createElement('td');
            td.innerHTML = i === 0 ? '<b>' + esc(cell) + '</b>' : permBadge(cell);
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    tableEl.appendChild(tbody);
}

function permBadge(val) {
    if (!val || val === '–') return '<span class="badge badge-other">–</span>';
    var v = val.toString().toLowerCase();
    if (v === 'ja' || v === 'tilladt')         return '<span class="badge badge-yes">✔ Tilladt</span>';
    if (v === 'nej' || v === 'ikke tilladt')   return '<span class="badge badge-no">✘ Ikke tilladt</span>';
    if (v.includes('aftale')||v.includes('leder')) return '<span class="badge badge-agreement">' + esc(val) + '</span>';
    return '<span class="badge badge-other">' + esc(val) + '</span>';
}

/* ═══════════════════════════════════════════════════════════════
   UTILITY
   ═══════════════════════════════════════════════════════════════ */

function esc(str) {
    if (str == null) return '';
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ═══════════════════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function() {
    // Sager: skjul form til start
    if (caseForm) caseForm.style.display = 'none';
    if (caseHint) caseHint.style.display = '';
    renderCaseList();

    // Søgning
    var bodeSearch = document.getElementById('bodeSearch');
    if (bodeSearch) bodeSearch.addEventListener('input', function() { renderBodeTable(this.value); });
    var koderSearch = document.getElementById('koderSearch');
    if (koderSearch) koderSearch.addEventListener('input', function() { renderKoderTable(this.value); });

    // Render alt statisk indhold
    renderForside();
    renderBodeTable('');
    renderRegler();
    renderRadio();
    renderKoderTable('');
    initFart();

    renderPermTable(document.getElementById('vaabenOrdenTable'),   VAABEN_ORDEN);
    renderPermTable(document.getElementById('vaabenSpecialTable'), VAABEN_SPECIAL);
    renderPermTable(document.getElementById('bilerOrdenTable'),    BILER_ORDEN);
    renderPermTable(document.getElementById('bilerSpecialTable'),  BILER_SPECIAL);
    renderPermTable(document.getElementById('bilerCivilTable'),    BILER_CIVIL);
});
