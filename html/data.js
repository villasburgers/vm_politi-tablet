/* =========================================================
   POLITI TABLET - DATA
   Alt indhold herunder kan frit redigeres af ledelsen.
   ========================================================= */

/* ---------- FORSIDE / NYHEDER ---------- */
const NYHEDER = [
  "HUSK! Skriv personens CPR nummer ind når i KR hvis I tager ham for noget.",
  "Når der er møde skal alle være stille, medmindre de får afvide at de må.",
  "Altid giv rettigheder, når du sætter en i håndjern.",
  "Som Cadet skal du køre med en anden.",
  "Når det er vinter må alle i politiet gå rundt i striktrøjen.",
  "Alle betjente og opefter SKAL bære SMG her for tiden."
];

/* ---------- REGLER ---------- */
const REGLER = [
  "Dit eget og dine kollegaers liv er førsteprioritet. Det betyder at du smider alt, du har i hænderne, hvis din kollega er i fare. (Medmindre du håndterer en civil der bliver truet)",
  "Politiet skal altid samarbejde med Falck uanset hvad, og politiet må ikke forstyrre redderarbejdet. Samtidig må Falck ikke forstyrre politiarbejdet.",
  "Politiet må aldrig nogensinde være korrupt. Dette vil medføre fjernelse fra Politiet.",
  "Husk altid at skrive til en fra ledelsen hvis du er offline i en længere periode.",
  "Du skal læse hele håndbogen igennem, inden du starter på din første træning.",
  "Altid kontakt ham/hende der står for træning/møde hvis du ikke kan komme til møde eller træning.",
  "Det er op til ledelsen hvem der skal forfremmes/fyres. Dog må man gerne komme med forslag, eller sige hvis man ser eller hører noget.",
  "Du må kun bruge dit skydevåben hvis du/dine kollegaer/de civile er i livsfare/eller du føler dig truet.",
  "DU SKAL ALTID FØLGE LOVGIVNINGEN!",
  "Det er kun tilladt at bruge blink/sirene i nødssituationer, eller politi opkald.",
  "Når du kommer ud til en ulykke el.lign. skal du som det første standse ulykken og afspærre, inden du fortsætter.",
  "Du må kun bruge det udstyr, som passer til din rank, medmindre en overordnet giver tilladelse til større våben til fx. bankrøveri.",
  "Maks fængselsstraffen i alt er 20 minutter.",
  "Alle døre på PD skal være lukket, undtagen hovedindgange.",
  "Når du forhandler, skal du informere røveren om at forhandlingerne bliver afvist, før stedet bliver rushet.",
  "Du må ikke have SMG på ryggen - du skal RP'e dig til at du tager det ud af køretøjet, brug /me tager SMG ud af køretøj eller lignende.",
  "Vi skal helst selv køre folk op til fængslet.",
  "Betjente skal HVIS MULIGT altid køre på patrulje.",
  "Elever skal dog altid have en og køre med!!!!",
  "Husk at sigte vedkommende du anholder / tilbageholder.",
  "Du skal have en virkelig god grund til at trække våben - for at trække tjenestepistol. IRL trækker politiet kun pistol hvis der bliver udsat civil eller betjentes liv.",
  "Du skal have push-2-talk på når du sidder i radioen.",
  "Aldrig PIT en på MC eller crosser, medmindre det er blidt og nødvendigt.",
  "Elever må ikke stå for forhandlinger (Helst AKS og Ledelse).",
  "Når du ankommer til røveriet, går du op til døren og siger forhandleren er på vej. Og derefter afspærrer du området.",
  "Rimelige forhandlingskrav (Maks 250.000) pr. civil og maks 350.000 for offentligt ansatte.",
  "Ikke noget med at skyde på bankrøverne medmindre forhandlinger er afbrudt eller de ikke har nogle gidsler.",
  "Civile skal holde sig 100 meter væk fra det afspærrede område - ellers må de blive tilbageholdt, fordi det kunne være en der holder udkig.",
  "Alle civile på tage / huse skal tilbageholdes.",
  "Du må medbringe store våben til bankrøverier.",
  "Ved anholdelse, brug: \"Klokken er XX:XX, og du er sigtet og anholdt for XX. Du har ikke pligt til at udtale dig, kan du erkende din sigtelse?\"",
  "Ved trafiksigtelse, brug: \"Kl. er XX:XX, og du er sigtet for XX. Du har ikke pligt til at udtale dig til politiet, kan du erkende din sigtelse?\"",
  "Ved tilbageholdelse, brug: \"Kl. er XX:XX, og du er tilbageholdt for XX. Du har ikke pligt til at udtale dig.\"",
  "Ved frikendelse, brug: \"Kl. er XX:XX, og du er frikendt.\""
];

/* ---------- RADIO ---------- */
const RADIO = {
  normal: [
    { kald: "Alpha", rolle: "Politi Ledelsen" },
    { kald: "Bravo", rolle: "Normal Betjent" },
    { kald: "Echo", rolle: "Politi Elev" },
    { kald: "Kadet/K", rolle: "Politi Skolen" }
  ],
  special: [
    { kald: "Lima", rolle: "Indsatsleder" },
    { kald: "Mikekilo", rolle: "Civil Betjent" },
    { kald: "Mike", rolle: "Motorcykelbetjent" },
    { kald: "Foxtrot", rolle: "Helikopter" },
    { kald: "Romeo", rolle: "Romeo Styrken" },
    { kald: "Zulu", rolle: "A.K.S" },
    { kald: "Krim", rolle: "Kriminal Teknisk Afdeling" }
  ]
};

/* ---------- 10-KODER ---------- */
const KODER = [
  ["10-0", "Betjent nede, ikke mere information.", "Én betjent er nede / skudt, drop alt og kør derover."],
  ["10-1", "Signal dårligt.", "Bruges til at respondere 10-41."],
  ["10-2", "Signal fint.", "Bruges til at respondere 10-41."],
  ["10-3", "Radiostilhed.", "Når dette bruges tier man stille på radioen."],
  ["10-4", "Melding modtaget.", "Modparten har modtaget din melding og forstået den."],
  ["10-5", "Afvent.", "Vent med at sige din melding."],
  ["10-6", "Kan ikke kaldes, jo mindre det er vigtigt.", "Kan kun komme hvis det er nødvendigt."],
  ["10-16", "Anmoder om betjent til at hente fange.", "Kan bruges hvis du er på motorcykel patrulje."],
  ["10-17", "Er i gang med at tanke.", "Er i gang med at tanke køretøjet op, er derfor ikke tilgængelig."],
  ["10-18", "Kom hurtigt.", "Når én enhed har behov for akut hjælp. Bruges med kode 3."],
  ["10-20", "Lokation?", "Oftest efterfulgt af ting du vil have lokation på fx. betjent eller trafikstop."],
  ["10-23", "Ankommet.", "Oftest efterfulgt af det du er ankommet til fx. trafikstop."],
  ["10-25", "Opdatering på fange.", "Efterfulgt af ét P-nummer."],
  ["10-27", "Eftersøgt person.", "Når du har med én eftersøgt person at gøre."],
  ["10-28", "Tjekker op på køretøj.", "Dette er mest anvendt når I kører 2 & 2, så kan den anden enhed slå mistænkte op."],
  ["10-29", "Tjekker person op i kriminalregisteret.", "Dette er mest anvendt når I kører 2 & 2, så kan den anden enhed slå mistænkte op."],
  ["10-30", "Stop med unødvendig snak på radio.", "Lad være med at snakke om ligegyldige ting nu, bruges når folk RP'er."],
  ["10-31", "Har behov for at blive hentet.", "Man har behov for pickup."],
  ["10-32", "Spottet person med våben.", "Der er altid behov for en ekstra patrulje til dette, så hvis I er tilgængelige meld det."],
  ["10-33", "Har behov for backup (hurtigst muligt).", "Hvis man ikke er i gang med noget, så kører man ud til det."],
  ["10-34", "Har behov for AKS.", "Denne bruges meget sjældent, men primært til bankrøverier."],
  ["10-37", "Mistænkeligt køretøj.", "Når du finder ét køretøj du føler er mistænkeligt."],
  ["10-38", "Bringer mistænkeligt køretøj til standsning.", "Når du bringer det mistænkelige køretøj til standsning, for evt. rutinetjek."],
  ["10-41", "Melder on duty (på vagt).", "Responderes med enten 10-02 eller 10-1, med tilbagemelding om signalet."],
  ["10-42", "Melder off duty (af vagt).", "Responderes med en 10-04 (eller 10-04, tak for en god vagt)."],
  ["10-52", "Har behov for EMS / ambulance (akut).", "Her informerer du vagtcentralen og radioen om at du har behov for lægehjælp."],
  ["10-57", "Drive by.", "Når folk kommer kørende og skyder imens."],
  ["10-59", "Eskortering af fange.", "Person vil gerne have én patrulje til at eskortere fangevognen."],
  ["10-60", "Trafikstop.", "En anden måde at sige korrekt på."],
  ["10-75", "Har øje på mistænkte.", "Efterfølges oftest af en lokation."],
  ["10-77", "Ankommer til lokation XX tid.", "Også kaldt ETA på engelsk (Estimated Time of Arrival - estimerede ankomsttid)."],
  ["10-80", "Igangværende eftersættelse.", "Responderes oftest med - Behov for 10-33?"],
  ["10-85", "Er forsinket grundet...", "Efterfølges med grund for forsinkelse."],
  ["10-90", "Igangværende bankrøveri.", "Erstatter 10-65."],
  ["10-98", "Fængselsflugt.", "Der skal oftest tilkaldes en fugl til denne kode (helikopter assistance)."]
];

/* ---------- VÅBENTILLADELSER ---------- */
const VAABEN_ORDEN = {
  columns: ["RANK","TJENESTEPISTOL","TAZER","STAV","HEAVY PISTOL","SMG","CARBINE RIFLE","LOMMELYGTE","VEST","SNIPER","TÅREGAS"],
  rows: [
    ["Politi Ledelsen","-","Tilladt","Tilladt","Ikke Tilladt","Tilladt","Ved Aftale","Tilladt","Tilladt","Tilladt","Ikke Tilladt"],
    ["PolitiKommisær","Tilladt","Tilladt","Tilladt","Ikke Tilladt","Tilladt","Ikke Tilladt","Tilladt","Tilladt","Ikke Tilladt","Ikke Tilladt"],
    ["Indsatsleder","Tilladt","Tilladt","Tilladt","Ikke Tilladt","Tilladt","Ikke Tilladt","Tilladt","Tilladt","Ikke Tilladt","Ikke Tilladt"],
    ["Politiassistent af 1. grad","Tilladt","Tilladt","Tilladt","Ikke Tilladt","Tilladt","Ikke Tilladt","Tilladt","Tilladt","Ikke Tilladt","Ikke Tilladt"],
    ["Politiassistent","Tilladt","Tilladt","Tilladt","Ikke Tilladt","Tilladt","Ikke Tilladt","Tilladt","Tilladt","Ikke Tilladt","Ikke Tilladt"],
    ["Politibetjent","Tilladt","Tilladt","Tilladt","Ikke Tilladt","Ved Aftale","Ikke Tilladt","Tilladt","Tilladt","Ikke Tilladt","Ikke Tilladt"],
    ["Politielev","Tilladt","Tilladt","Tilladt","Ikke Tilladt","Ikke Tilladt","Ikke Tilladt","Tilladt","Tilladt","Ikke Tilladt","Ikke Tilladt"]
  ]
};

const VAABEN_SPECIAL = {
  columns: ["RANK","TJENESTEPISTOL","TAZER","STAV","SMG","CARBINE RIFLE","LOMMELYGTE","VEST","SNIPER","TÅREGAS"],
  rows: [
    ["A.K.S / Romeo","Tilladt","Tilladt","Tilladt","Tilladt","Tilladt","Tilladt","Tilladt","Tilladt","Tilladt"],
    ["Motorcykelbetjent","Tilladt","Tilladt","Tilladt","Ikke Tilladt","Ikke Tilladt","Ikke Tilladt","Tilladt","Tilladt","Ikke Tilladt"],
    ["Hundepatrulje","Tilladt","Tilladt","Tilladt","Ikke Tilladt","Ikke Tilladt","Ikke Tilladt","Tilladt","Tilladt","Ikke Tilladt"],
    ["Civil","Tilladt","Tilladt","Tilladt","Ikke Tilladt","Ikke Tilladt","Ikke Tilladt","Tilladt","Tilladt","Ikke Tilladt"]
  ]
};

/* ---------- BILTILLADELSER ---------- */
const BILER_ORDEN = {
  columns: ["RANK","ALLE POLITI BILER","ARGENTO 5","ARGENTO 4","ID4 / SHORE / HUNDEVOGN","POLGXB"],
  rows: [
    ["Politi Ledelsen","Tilladt","Tilladt","Tilladt","Tilladt","Tilladt"],
    ["Politi Kommisær","Tilladt","Tilladt","Tilladt","Tilladt","Tilladt"],
    ["Politi assistent 1. grad","Tilladt","Tilladt","Tilladt","Tilladt","Tilladt"],
    ["Politi assistent","Tilladt","Tilladt","Tilladt","Tilladt","Tilladt"],
    ["Politi betjent","Tilladt","Tilladt","Tilladt","Tilladt","Tilladt"],
    ["Politi elev","Tilladt","Tilladt","Tilladt","Ikke Tilladt","Ikke Tilladt"]
  ]
};

const BILER_SPECIAL = {
  columns: ["RANK","CIVILE POLITIBILER (1-4)","INDSATSLEDER POLTRANSFER","MC POLCBF400 (CIVIL)"],
  rows: [
    ["AKS","Tilladt","Tilladt","Ved Aftale"],
    ["Romeo","Tilladt","Tilladt","Ved Aftale"],
    ["Indsatsleder","Ikke Tilladt","Tilladt","Ved Aftale"]
  ]
};

const BILER_CIVIL = {
  columns: ["RANK","ALLE CIVILE BILER","SHAFTER","NORMALE POLITIBILER"],
  rows: [
    ["Civil Betjent","Tilladt","Tilladt","Ikke Tilladt"]
  ]
};

/* =========================================================
   BØDETAKSTER  (§ - Forhold - Fængsel - Bøde - Beskrivelse)
   Rækker med tomt "fængsel/bøde" er afsnits-overskrifter.
   ========================================================= */
const BODE = [
  ["§1","Voldelige forbrydelser","",""," "],
  ["§1.1","Vold","",""," "],
  ["§1.1","Vold","10 måneder","420.000 kr.","Vold mod en civilperson (at spytte er også vold)"],
  ["§1.1","Grov vold","10 måneder","540.000 kr.","Grov vold mod en civilperson - hvor våben benyttes"],
  ["§1.1","Vold mod tjenestemand","10 måneder","570.000 kr.","Vold mod tjenestemand (at spytte er også vold)"],
  ["§1.1","Grov vold mod tjenestemand","10 måneder","600.000 kr.","Vold mod tjenestemand - hvor våben benyttes"],
  ["§1.1","Trusler mod civil","5 måneder","160.000 kr.","Trusler om vold mod en civilperson"],
  ["§1.1","Trusler mod tjenestemand","10 måneder","240.000 kr.","Trusler om vold mod tjenestemand"],

  ["§1.2","Mord, mordforsøg og dødstrusler","",""," "],
  ["§1.2","Mordforsøg","10 måneder","720.000 kr.","Direkte eller indirekte forsøg på at tage en anden persons liv"],
  ["§1.2","Mordforsøg på tjenestemand","10 måneder","780.000 kr.","Direkte eller indirekte forsøg på at tage en tjenestemands liv"],
  ["§1.2","Manddrab","10 måneder","840.000 kr.","Forsætligt forårsager død af en person"],
  ["§1.2","Manddrab på tjenestemand","10 måneder","750.000 kr.","Ved manddrab af tjenestemand - ingen hensyn til forsætligt eller uforsætligt"],
  ["§1.2","Dødstrussel","10 måneder","240.000 kr.","Trussel om at dræbe en person"],
  ["§1.2","Uagtsomt manddrab","10 måneder","450.000 kr.","Uforsætligt forårsager død af en person"],

  ["§1.3","Røveri","",""," "],
  ["§1.3","Butiksrøveri","10 måneder","540.000 kr.","Røveri mod kiosk eller tankstation med slagvåben og uden skydevåben"],
  ["§1.3","Væbnet butiksrøveri","10 måneder","360.000 kr.","Væbnet røveri mod kiosk eller tankstation med skydevåben"],
  ["§1.3","Bankrøveri/juvelrøveri","10 måneder","600.000 kr.","Forsøg på at røve en bank med slagvåben og uden skydevåben"],
  ["§1.3","Væbnet bankrøveri/juvelrøveri","10 måneder","480.000 kr.","Forsøg på at røve en bank med skydevåben"],
  ["§1.3","Røveri mod Nationalbanken","10 måneder","750.000 kr.","Bankrøveri mod Nationalbanken"],
  ["§1.3","Væbnet røveri mod person","10 måneder","420.000 kr.","Væbnet røveri mod person"],

  ["§1.4","Kidnapning","",""," "],
  ["§1.4","Forsøg på kidnapning","10 måneder","510.000 kr.","Et forsøg på at frihedsberøve en eller flere personers evne til at bestemme over eget opholdssted"],
  ["§1.4","Kidnapning","10 måneder","600.000 kr.","At frihedsberøve en eller flere personers evne til at bestemme over eget opholdssted"],

  ["§1.5","Fængselsudbrud","",""," "],
  ["§1.5","Flugt fra fængsel","10 måneder","600.000 kr.","Forlade fængslet ved ulovlige midler, før straffen er ophævet"],
  ["§1.5","Fængselsudbrud (medskyldig i flugt fra fængsel)","10 måneder","540.000 kr.","Deltager i en fængselsflugt, efter dommen er placeret"],

  ["§1.6","Terrorisme","",""," "],
  ["§1.6","Terrorisme","10 måneder","1.500.000 kr.","At dræbe eller skade en gruppe på over fem personer"],
  ["§1.6","Terrortrusler","10 måneder","1.000.000 kr.","Mål om at dræbe eller skade en gruppe på over fem personer"],

  ["§1.7","Brandstiftelse og dyremishandling","",""," "],
  ["§1.7","Brandstiftelse","10 måneder","300.000 kr.","Forsætlig ødelæggelse af ejendom, der resulterer i eksplosion eller brand"],
  ["§1.7","Dyremishandling","5 måneder","160.000 kr.","Udøver af dyremishandling"],

  ["§2","Våbenrelaterede forbrydelser","",""," "],
  ["§2.1","Besiddelse af våben, ammunition og udstyr","",""," "],
  ["§2.1","Besiddelse af ulovlig ammunition","10 måneder","600.000 kr.","Besiddelse af semiautomatisk 9 mm pistol uden gyldig licens"],
  ["§2.1","Besiddelse af klasse 2-våben","10 måneder","720.000 kr.","Besiddelse af våben større end 9 mm og/eller fuldautomatisk våben"],
  ["§2.1","Besiddelse af slagvåben","10 måneder","280.000 kr.","Besiddelse af bat, brækjern, knojern eller golfkølle"],
  ["§2.1","Besiddelse af stikvåben","10 måneder","360.000 kr.","Besiddelse af stikvåben"],
  ["§2.1","Besiddelse af sprængstoffer","10 måneder","660.000 kr.","Besiddelse af eksplosiver herunder flashbangs, molotovcocktails og lign."],
  ["§2.1","Besiddelse af ulovlige magasiner","10 måneder","120.000 kr.","Besiddelse af type 1 og 2 magasiner uden gyldig licens (et magasin er seks skud)"],

  ["§2.2","Våbenhandel og brug af våben","",""," "],
  ["§2.2","Våbenhandel","10 måneder","300.000 kr.","Våbensalg til andre"],
  ["§2.2","Våben affyret","5 måneder","80.000 kr.","Skydevåben affyret"],

  ["§3","Narkorelaterede forbrydelser","",""," "],
  ["§3.1","Hampblade","0,03 måneder","1.500 kr.","Besiddelse af hampblade"],
  ["§3.1","Joint","0,50 måneder","8.625 kr.","Besiddelse af joints"],
  ["§3.1","Kokainblade","0,07 måneder","6.750 kr.","Besiddelse af kokainblade"],
  ["§3.1","Kokain","0,10 måneder","13.125 kr.","Besiddelse af kokain"],
  ["§3.1","Pakket kokain","2 måneder","12.000 kr.","Besiddelse af pakket kokain"],
  ["§3.1","Syre","0,07 måneder","6.750 kr.","Besiddelse af syre"],
  ["§3.1","LSD","0,10 måneder","13.125 kr.","Besiddelse af LSD"],
  ["§3.1","Opium","0,07 måneder","9.000 kr.","Besiddelse af opium"],
  ["§3.1","Morfin","0,07 måneder","6.000 kr.","Besiddelse af morfin"],
  ["§3.1","Heroin","0,10 måneder","19.200 kr.","Besiddelse af heroin"],
  ["§3.1","Metadon","0,07 måneder","1.500 kr.","Besiddelse af metadon"],
  ["§3.1","Svampe","0,10 måneder","5.250 kr.","Besiddelse af svampe"],
  ["§3.1","Svampekasse","0 måneder","24.000 kr.","Besiddelse af svampekasse"],
  ["§3.1","Metamfetamin","0,50 måneder","26.400 kr.","Besiddelse af metamfetamin"],

  ["§4","Økonomisk relaterede forbrydelser","",""," "],
  ["§4.1","Bestikkelse","10 måneder","80.000 kr.","Forsøg på bestikkelse af offentligt ansat (politi, EMS, kommunemedarbejder) i bytte for service eller lign."],
  ["§4.1","Afpresning","10 måneder","300.000 kr.","Ulovlig opnåelse af ejendom ved brug af magt eller trusler"],
  ["§4.1","Hvidvaskning","10 måneder","390.000 kr.","Processen med at tage udbytte fra kriminel aktivitet og gøre dem lovlige (kufferter fra banken)"],

  ["§5","Ordensbekendtgørelsen","",""," "],
  ["§5.1","Indbrud og polititilhold","",""," "],
  ["§5.1","Indbrud","10 måneder","300.000 kr.","Ulovlig indtrængen i bolig eller ejendom og/eller begåelse af forbrydelse på ejendommen"],
  ["§5.1","Ulovlig indtrængen","0 måneder","200.000 kr.","Indtrængen på PD's indhegnede område, 300 meter fra fængslet eller bankboksetage"],
  ["§5.1","Brud af polititilhold","10 måneder","600.000 kr.","Opsøgelse af person, der er krævet polititilhold"],

  ["§5.2","Identifikation","",""," "],
  ["§5.2","Ulovligt erhverv","10 måneder","320.000 kr.","Udførelse af arbejde uden at være ansat i firma (Uber, minearbejder e.g.)"],
  ["§5.2","Manglende identifikation","0 måneder","80.000 kr.","Hvis en person nægter at fremvise gyldig identifikation"],
  ["§5.2","Udgive sig for at være tjenestemand","10 måneder","420.000 kr.","Forsøg på at overbevise en anden person om, at man er tjenestemand (politi, EMS og advokat)"],
  ["§5.2","Falsk rapport","10 måneder","600.000 kr.","Bevidst at lave en falsk erklæring til betjent eller alarmcentral"],
  ["§5.2","Dokumentfalsk","10 måneder","300.000 kr.","Hvis en person laver dokumentfalsk i form af identifikation, lægeerklæring m.m."],

  ["§5.3","Forstyrrelse af ro og orden","",""," "],
  ["§5.3","Forstyrrelse af ro og orden","10 måneder","60.000 kr.","Deltagelse i gadeuorden, der forårsager overdrevet kraftig støj ved at råbe eller spille musik"],
  ["§5.3","Chikane","0 måneder","80.000 kr.","Chikane af civil person eller tjenestemand"],
  ["§5.3","Blufærdighedskrænkelse","10 måneder","200.000 kr.","Befinde sig i offentligt rum uden påklædning (kun iført undertøj eller nøgen)"],

  ["§5.4","Modsættelse af lovens håndhævere","",""," "],
  ["§5.4","Modsættelse af politiets anvisninger","0 måneder","80.000 kr.","Ignorering af politiets anvisninger (efter flere advarsler)"],
  ["§5.4","Foragt for retten","10 måneder","120.000 kr.","Hindring af domstolene i Los Santos' arbejde"],
  ["§5.4","Forstyrrelse af politiets arbejde","5 måneder","120.000 kr.","Forstyrrelse af politiets arbejde f.eks. ved at reklamere for igangværende aktioner"],
  ["§5.4","Udeblivelse af retten","10 måneder","160.000 kr.","Manglende fremmøde ved retssag"],

  ["§5.5","Tyveri og hærværk","",""," "],
  ["§5.5","Tyveri af statens ejendom","10 måneder","300.000 kr.","Besiddelse af statens ejendom (politibil, ambulance, politivåben etc.)"],
  ["§5.5","Tyveri","10 måneder","200.000 kr.","At tage penge eller varer fra en anden person med magt eller intimidering (våben ikke involveret)"],
  ["§5.5","Hærværk","10 måneder","120.000 kr.","Ødelæggelse af en anden persons eller statens ejendom"],
  ["§5.5","Grov hærværk","10 måneder","140.000 kr.","Ødelæggelse af en anden persons eller statens ejendom i særlig alvorlig grad"],

  ["§5.6","Diverse forbrydelser","",""," "],
  ["§5.6","Medvirkende til kriminalitet","Se grundforbrydelse","Se grundforbrydelse","Enhver der bidrager til en kriminel handling - straffes efter grundforbrydelsens takst"],
  ["§5.6","Brud på maskeringsforbuddet","0 måneder","60.000 kr.","Hvis en person bærer maskering offentligt - bøden gives, hvis advarsel ikke følges (gentagne advarsler kan give efterspil)"],

  ["§6","Trafikrelaterede forbrydelser","",""," "],
  ["§6.1","Flugt","",""," "],
  ["§6.1","Flugt fra politiet i bil/på motorcykel","10 måneder","360.000 kr.","Flugt fra politiet i bil/på motorcykel eller andet landgående fartøj"],
  ["§6.1","Flugt fra politiet til fods","10 måneder","240.000 kr.","Flugt fra politiet til fods"],
  ["§6.1","Flugt fra politiet i båd","10 måneder","320.000 kr.","Flugt fra politiet i båd eller andet søgående fartøj"],
  ["§6.1","Flugt fra politiet i helikopter/fly","10 måneder","540.000 kr.","Flugt fra politiet i helikopter/fly eller andet flyvende fartøj"],
  ["§6.1","Flugt fra færdselsuheld med personskade","10 måneder","1.000.000 kr.","Flugt fra ulykkessted hvor en anden er kommet til skade"],

  ["§6.2","Farlig kørsel","",""," "],
  ["§6.2","Kørsel i spirituspåvirket tilstand","10 måneder","80.000 kr.","Betjening af et motorkøretøj under påvirkning af alkohol"],
  ["§6.2","Kørsel i narkopåvirket tilstand","10 måneder","160.000 kr.","Betjening af et motorkøretøj under påvirkning af stoffer"],
  ["§6.2","Hasarderet kørsel","0 måneder","280.000 kr.","En kørsel så vanvittig, at det bringer folks liv og lemmer i fare"],
  ["§6.2","Kørsel uden hjelm","0 måneder","120.000 kr.","Kørsel uden hjelm på en crosser, knallert eller motorcykel"],
  ["§6.2","Overhaling højre om","0 måneder","24.000 kr.","Overhaling inden om/højre om"],
  ["§6.2","Manglende orientering i trafikken","0 måneder","80.000 kr.","Hvis der eksempelvis bakkes ud fra en p-plads uden at orientere sig - kan kombineres med erstatningskrav"],
  ["§6.2","Uagtsom personskade ved hasarderet kørsel","10 måneder","200.000 kr.","Uforsætlig personskade under hasarderet kørsel"],

  ["§6.3","Anvisninger for færdslen","",""," "],
  ["§6.3","Færdselstavle eller pile ikke respekteret","0 måneder","80.000 kr.","Hvis en færdselstavle eller pile på kørebanen ikke respekteres"],
  ["§6.3","Kørsel mod færdselsretning","0 måneder","200.000 kr.","Kørsel i modsatte vejbane imod trafikken"],
  ["§6.3","Overskredet spærrelinje ved overhaling","0 måneder","80.000 kr.","Overhaling over fuldt optrukne linjer"],
  ["§6.3","Kørsel over for rødt lys","0 måneder","30.000 kr.","Kørsel over for rødt lys"],
  ["§6.3","Ulovlig kørsel i nødspor","0 måneder","80.000 kr.","Kørsel i nødspor i en ikke-kritisk situation"],
  ["§6.3","Væddeløbskørsel på offentlig vej","0 måneder","300.000 kr.","Køre om kap eller køre ræs på offentlige veje og ikke en lukket bane"],
  ["§6.3","Kørsel frem for fuldt stop","0 måneder","100.000 kr.","Hvis en bilist vælger at trille eller køre over fuldt stop"],
  ["§6.3","Kørsel over fuldt optrukne linjer","0 måneder","60.000 kr.","Kørsel over fuldt optrukne linjer"],
  ["§6.3","Ulovlig u-vending","0 måneder","60.000 kr.","Foretagelse af u-vending inden for bygrænsen"],

  ["§6.4","Færdselsregler for gående","",""," "],
  ["§6.4","Færden på eller langs kørebanen","0 måneder","80.000 kr.","Unødig færden på kørebanen eller langs kørebanen"],
  ["§6.4","Lyssignal ikke respekteret","0 måneder","60.000 kr.","Undladelse af respekt for rødt lys"],
  ["§6.4","Færden i nødspor","0 måneder","60.000 kr.","Unødig færden i nødspor ved motorvej"],
  ["§6.4","Færden på motorvej","0 måneder","200.000 kr.","Al færden på motorvej"],
  ["§6.4","Fumlegængeri","0 måneder","60.000 kr.","Undlade at benytte fodgængerfelt i byen"],

  ["§6.5","Færdselsregler for cyklende","",""," "],
  ["§6.5","Kørsel over for rødt lys (cykel)","0 måneder","160.000 kr.","Kørsel over for rødt lys på cykel"],
  ["§6.5","Cykle midt på kørebanen","0 måneder","60.000 kr.","Cykling midt på kørebanen til fare for sig selv"],
  ["§6.5","Cykle på fortov","0 måneder","60.000 kr.","Cykling på fortov til fare for gående"],
  ["§6.5","Stuntcykling på offentlig vej","0 måneder","80.000 kr.","Cykelstunts på offentlig vej"],
  ["§6.5","Cykling på motorvej","0 måneder","200.000 kr.","Cykling på motorvej"],
  ["§6.5","Cyklist i fodgængerfelt","0 måneder","60.000 kr.","Hvis en cyklist cykler over et fodgængerfelt"],
  ["§6.5","Kørsel mod færdselsretning på cykel","0 måneder","200.000 kr.","Kørsel i modsatte vejbane imod trafikken på cykel"],

  ["§6.6","Placering, overhaling og vigepligt","",""," "],
  ["§6.6","Motorkøretøj på fortov eller cykelsti","0 måneder","80.000 kr.","Føring af motorkøretøj på fortov eller cykelsti"],
  ["§6.6","Undladt at holde så langt til højre som muligt","0 måneder","120.000 kr.","Undladelse af at holde så langt til højre som muligt"],
  ["§6.6","Fejlplacering i sving","0 måneder","60.000 kr.","Forkert placering i sving"],
  ["§6.6","Ubetinget vigepligt","0 måneder","80.000 kr.","Undladelse af respekt for ubetinget vigepligt"],
  ["§6.6","Højre vigepligt","0 måneder","80.000 kr.","Undladelse af respekt for højre vigepligt"],
  ["§6.6","Manglende vigen for udrykningskøretøj","0 måneder","240.000 kr.","Undlade at vige for udrykningskøretøj med blink og/eller sirene"],
  ["§6.6","Ulovlig parkering","0 måneder","60.000 kr.","Parkering i en vognbane, på et fortov eller ethvert område hvor køretøjet vil være til fare for andre"],
  ["§6.6","Undladt at sikre køretøj","0 måneder","80.000 kr.","Hvis et køretøj efterlades ulåst, så det bliver indblandet i brugstyveri"],

  ["§6.7","Fart, lygter, ruder og horn","",""," "],
  ["§6.7","Hastighedsovertrædelse","0 måneder","60.000 kr.","Se Fart & Trafik for korrekt bødetakst"],
  ["§6.7","Kørsel uden lys","0 måneder","18.000 kr.","Kørsel uden brug af forlygter fra solnedgang indtil daggry, selv ved anvendelse af briller med nattesyn"],
  ["§6.7","Neonlys","0 måneder","80.000 kr.","Hvis en bilist har neonlys under bilen og ikke holder stille (uanset farve)"],
  ["§6.7","Røg og støj","0 måneder","80.000 kr.","Dækafbrænding, hjulspind eller unødig opgasning"],
  ["§6.7","Defekt lygte","0 måneder","60.000 kr.","Føring af køretøj med defekte lygter"],
  ["§6.7","Unødig brug af horn","0 måneder","60.000 kr.","Brug af horn uden fare på færde"],
  ["§6.7","Kørsel med tonede ruder","0 måneder","60.000 kr.","Hvis bilen er udstyret med ruder, der er over 30% tonede"],
  ["§6.7","Ulovligt horn","0 måneder","60.000 kr.","Ulovligt horn (horn skal have én tone, der hverken stiger eller falder)"],

  ["§6.8","Kørekort, uregistreret køretøj og tyveri","",""," "],
  ["§6.8","Kørsel uden førerret","0 måneder","80.000 kr.","Føre ethvert køretøj, fly eller helikopter uden korrekt licens"],
  ["§6.8","Kørsel i/på uregistreret køretøj","0 måneder","120.000 kr.","Føring af køretøj, der ikke er registreret"],
  ["§6.8","Brugstyveri","10 måneder","60.000 kr.","Føring af køretøj uden samtykke fra den registrerede ejer med henblik på at stjæle køretøjet"],
  ["§6.8","Køretøj i uforsvarlig tilstand","0 måneder","120.000 kr.","At føre et køretøj på offentlig vej hvis tilstand er så uforsvarlig, at det kan udsætte andre trafikanters liv for fare"],
  ["§6.8","Kørsel i frakendelsesperioden","0 måneder","60.000 kr.","Kørsel i den periode hvor førerretten er frakendt"]
];

/* =========================================================
   FART & TRAFIK - bødeberegner
   Tabellen er bygget op om "trin" pr. zone (50 / 80 / 130).
   Kan til enhver tid justeres af ledelsen herunder.
   ========================================================= */
const FART_TABEL = {
  50: [
    { fra: 54,  til: 64,  bode: 60000 },
    { fra: 65,  til: 65,  bode: 68000 },
    { fra: 66,  til: 71,  bode: 80000,  klip: true },
    { fra: 72,  til: 74,  bode: 100000,  klip: true },
    { fra: 75,  til: 79,  bode: 120000,  klip: true },
    { fra: 80,  til: 84,  bode: 140000,  frakendelse: true },
    { fra: 85,  til: 89,  bode: 180000,  frakendelse: true },
    { fra: 90,  til: 94,  bode: 200000,  frakendelse: true },
    { fra: 95,  til: 99,  bode: 260000,  frakendelse: true },
    { fra: 100, til: 119, bode: 300000,  frakendelse: true },
    { fra: 120, til: 139, bode: 400000,  frakendelse: true },
    { fra: 140, til: 159, bode: 440000,  frakendelse: true },
    { fra: 160, til: 179, bode: 480000,  frakendelse: true },
    { fra: 180, til: 199, bode: 520000,  frakendelse: true },
    { fra: 200, til: 219, bode: 560000,  frakendelse: true },
    { fra: 220, til: 239, bode: 600000,  frakendelse: true },
    { fra: 240, til: 259, bode: 640000,  frakendelse: true },
    { fra: 260, til: 279, bode: 680000,  frakendelse: true },
    { fra: 280, til: 299, bode: 720000,  frakendelse: true },
    { fra: 300, til: 999, bode: 760000,  frakendelse: true }
  ],
  80: [
    { fra: 84,  til: 95,  bode: 60000 },
    { fra: 96,  til: 103, bode: 80000 },
    { fra: 104, til: 111, bode: 100000,  klip: true },
    { fra: 112, til: 119, bode: 120000,  klip: true },
    { fra: 120, til: 127, bode: 140000,  klip: true },
    { fra: 128, til: 135, bode: 160000,  frakendelse: true },
    { fra: 136, til: 143, bode: 180000,  frakendelse: true },
    { fra: 144, til: 151, bode: 220000,  frakendelse: true },
    { fra: 152, til: 159, bode: 280000,  frakendelse: true },
    { fra: 160, til: 179, bode: 320000,  frakendelse: true },
    { fra: 180, til: 209, bode: 360000,  frakendelse: true },
    { fra: 210, til: 219, bode: 400000,  frakendelse: true },
    { fra: 220, til: 239, bode: 440000,  frakendelse: true },
    { fra: 240, til: 259, bode: 480000,  frakendelse: true },
    { fra: 260, til: 279, bode: 520000,  frakendelse: true },
    { fra: 280, til: 299, bode: 560000,  frakendelse: true },
    { fra: 300, til: 319, bode: 640000,  frakendelse: true },
    { fra: 320, til: 999, bode: 720000,  frakendelse: true }
  ],
  130: [
    { fra: 134, til: 144, bode: 80000 },
    { fra: 145, til: 159, bode: 120000 },
    { fra: 160, til: 179, bode: 160000,  frakendelse: true },
    { fra: 180, til: 199, bode: 200000,  frakendelse: true },
    { fra: 200, til: 209, bode: 340000,  frakendelse: true },
    { fra: 210, til: 219, bode: 400000,  frakendelse: true },
    { fra: 220, til: 239, bode: 440000,  frakendelse: true },
    { fra: 240, til: 246, bode: 480000,  frakendelse: true },
    { fra: 247, til: 259, bode: 520000,  frakendelse: true },
    { fra: 260, til: 279, bode: 560000,  frakendelse: true },
    { fra: 280, til: 299, bode: 600000,  frakendelse: true },
    { fra: 300, til: 319, bode: 640000,  frakendelse: true },
    { fra: 320, til: 339, bode: 680000,  frakendelse: true },
    { fra: 340, til: 385, bode: 720000,  frakendelse: true },
    { fra: 386, til: 399, bode: 800000, frakendelse: true },
    { fra: 400, til: 999, bode: 840000, frakendelse: true }
  ]
};