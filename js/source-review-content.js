/**
 * Oorspronkelijke herhalingsmodules op basis van de onderwerpen die in het
 * aangeleverde fotomateriaal zichtbaar zijn. De formuleringen en oefeningen
 * zijn nieuw geschreven en nemen geen boektekst over.
 */

export const sourceReviewGrammarTopics = [
  {
    id: 'bronreview-meervoud-spelling', level: 'A1', title: 'Meervoud en spelling: -en of -s',
    summary: 'Het meervoud verandert soms ook de spelling van de klinker of medeklinker in de stam.',
    rule: 'Meestal -en of -s. Houd de klank gelijk: raam–ramen, kat–katten, brief–brieven, foto–foto’s.',
    examples: ['één raam – twee ramen', 'één kat – twee katten', 'één brief – twee brieven', 'één foto – twee foto’s'],
    connections: ['Zelfstandig naamwoord', 'Korte en lange klinker', 'Spelling'],
  },
  {
    id: 'bronreview-bijvoeglijk-e', level: 'A1', title: 'Wanneer krijgt het bijvoeglijk naamwoord -e?',
    summary: 'Voor een zelfstandig naamwoord krijgt het bijvoeglijk naamwoord bijna altijd -e; de belangrijkste uitzondering is een onbepaald het-woord in het enkelvoud.',
    rule: 'de grote tafel · het grote huis · een grote tafel · maar: een groot huis',
    examples: ['de nieuwe fiets', 'het nieuwe boek', 'een mooie straat', 'een klein kind'],
    connections: ['De en het', 'Onbepaald lidwoord', 'Beschrijving'],
  },
  {
    id: 'bronreview-vergelijking-onregelmatig', level: 'A2', title: 'Vergroten en vergelijken met onregelmatige vormen',
    summary: 'Naast -er en -st bestaan veelgebruikte onregelmatige trappen van vergelijking.',
    rule: 'goed–beter–best · veel–meer–meest · weinig–minder–minst · graag–liever–liefst',
    examples: ['Deze route is beter.', 'Vandaag heb ik meer tijd.', 'Ik reis liever met de trein.', 'Dat kost het minst.'],
    connections: ['Bijvoeglijk naamwoord', 'Hoeveelheid', 'Voorkeur'],
  },
  {
    id: 'bronreview-voornaamwoord-nadruk', level: 'A2', title: 'Volle en gereduceerde voornaamwoorden',
    summary: 'In gesproken Nederlands bestaan beklemtoonde en onbeklemtoonde vormen, bijvoorbeeld jij/je, wij/we en zij/ze.',
    rule: 'Gebruik de volle vorm voor contrast of nadruk; gebruik de gereduceerde vorm wanneer de verwijzing al duidelijk is.',
    examples: ['Jíj doet de ochtenddienst, ik de middagdienst.', 'Je kunt hier wachten.', 'Wij hebben betaald, maar zij nog niet.', 'Ze komen straks.'],
    connections: ['Persoonlijk voornaamwoord', 'Nadruk', 'Uitspraak'],
  },
  {
    id: 'bronreview-ons-onze', level: 'A1', title: 'Ons of onze?',
    summary: 'Bij het bezittelijk voornaamwoord hangt de vorm af van het lidwoord en het getal van het zelfstandig naamwoord.',
    rule: 'ons + enkelvoudig het-woord; onze + de-woord of meervoud: ons huis, onze straat, onze kinderen',
    examples: ['ons adres', 'onze auto', 'onze afspraken', 'ons nieuwe kantoor'],
    connections: ['Bezittelijk voornaamwoord', 'De en het', 'Meervoud'],
  },
  {
    id: 'bronreview-wederkerend', level: 'A2', title: 'Wederkerende werkwoorden en voornaamwoorden',
    summary: 'Bij een wederkerend werkwoord verwijst het voorwerp terug naar het onderwerp.',
    rule: 'ik vergis me · jij vergist je · hij vergist zich · wij vergissen ons · jullie vergissen je · zij vergissen zich',
    examples: ['Ik herinner me die afspraak.', 'Bereid je je goed op het examen voor?', 'Wij vergisten ons in de datum.', 'Zij schaamt zich voor de fout.'],
    connections: ['Persoonlijk voornaamwoord', 'Vaste prepositie', 'Scheidbaar werkwoord'],
  },
  {
    id: 'bronreview-stam-spelling', level: 'A1', title: 'De stam correct spellen',
    summary: 'De ik-vorm is meestal de stam. Bij het verwijderen van -en moet de Nederlandse spelling de oorspronkelijke klank behouden.',
    rule: 'maken→maak · wonen→woon · zetten→zet · reizen→reis · leven→leef',
    examples: ['ik maak – wij maken', 'ik woon – wij wonen', 'ik zet – wij zetten', 'ik reis – wij reizen'],
    connections: ['Tegenwoordige tijd', 'Korte en lange klinker', 'v/f en z/s'],
  },
  {
    id: 'bronreview-t-kofschip', level: 'A2', title: 'Zwak verleden: -te of -de',
    summary: 'De laatste medeklinker van de stam bepaalt bij zwakke werkwoorden de uitgang van verleden tijd en voltooid deelwoord.',
    rule: 'Stemloos in ’t ex-kofschip → -te/-t; anders → -de/-d: werken–werkte–gewerkt, leven–leefde–geleefd.',
    examples: ['wachten – wachtte – gewacht', 'fietsen – fietste – gefietst', 'horen – hoorde – gehoord', 'antwoorden – antwoordde – geantwoord'],
    connections: ['Verleden tijd', 'Voltooid deelwoord', 'Spelling'],
  },
  {
    id: 'bronreview-sterke-patronen', level: 'A2', title: 'Sterke werkwoorden als klankfamilies leren',
    summary: 'Sterke werkwoorden veranderen de klinker. Kleine klankfamilies zijn beter te onthouden dan één lange losse lijst.',
    rule: 'ij–ee–ee: schrijven–schreef–geschreven; i–o–o: drinken–dronk–gedronken; ie–oo–oo: kiezen–koos–gekozen.',
    examples: ['blijven – bleef – gebleven', 'vinden – vond – gevonden', 'spreken – sprak – gesproken', 'rijden – reed – gereden'],
    connections: ['Onregelmatige werkwoorden', 'Uitspraak', 'Perfectum'],
  },
  {
    id: 'bronreview-hebben-zijn-perfectum', level: 'A2', title: 'Hebben of zijn in het perfectum?',
    summary: 'De meeste werkwoorden gebruiken hebben. Zijn komt vooral bij verandering van toestand en gerichte beweging zonder direct object.',
    rule: 'activiteit/handeling → meestal hebben; overgang/richting → vaak zijn. De betekenis van de hele zin beslist.',
    examples: ['Ik heb een uur gefietst.', 'Ik ben naar huis gefietst.', 'De situatie is veranderd.', 'We hebben de planning veranderd.'],
    connections: ['Perfectum', 'Beweging', 'Verandering', 'Transitief'],
  },
  {
    id: 'bronreview-scheidbaar-posities', level: 'A2', title: 'Scheidbare werkwoorden in vier posities',
    summary: 'Het voorvoegsel staat los in een hoofdzin, maar vast in een infinitief, bijzin en voltooid deelwoord.',
    rule: 'ik bel haar op · ik wil haar opbellen · omdat ik haar opbel · ik heb haar opgebeld · om haar op te bellen',
    examples: ['De trein komt om acht uur aan.', 'Ik weet dat de trein om acht uur aankomt.', 'De trein is op tijd aangekomen.', 'We proberen vroeg aan te komen.'],
    connections: ['Woordvolgorde', 'Bijzin', 'Perfectum', 'Te + infinitief'],
  },
  {
    id: 'bronreview-engelse-werkwoorden', level: 'B1', title: 'Engelse leenwerkwoorden vervoegen',
    summary: 'Engelse werkwoorden krijgen in het Nederlands gewone Nederlandse uitgangen; de spelling moet wel leesbaar blijven.',
    rule: 'downloaden–downloadde–gedownload · plannen–plande–gepland · updaten–updatete–geüpdatet',
    examples: ['Ik download het bestand.', 'We hebben de planning geüpdatet.', 'Zij plande de vergadering gisteren.', 'Heb je de gegevens al gescand?'],
    connections: ['Zwakke werkwoorden', 'Spelling', 'Professioneel Nederlands'],
  },
];

export const sourceReviewExercises = [
  { id: 'bron-a1-meervoud-01', level: 'A1', difficulty: 2, skill: 'grammatica', topic: 'meervoud en spelling', type: 'input', prompt: 'Schrijf het meervoud van “raam”.', answer: 'ramen', explanation: 'De lange aa blijft in de open lettergreep als één a hoorbaar: raam – ramen.' },
  { id: 'bron-a1-meervoud-02', level: 'A1', difficulty: 2, skill: 'grammatica', topic: 'meervoud en spelling', type: 'choice', prompt: 'Kies het correcte meervoud van “kat”.', answer: 'katten', options: ['katen', 'katten', 'kats'], explanation: 'De medeklinker verdubbelt om de korte a te behouden.' },
  { id: 'bron-a1-adjectief-01', level: 'A1', difficulty: 2, skill: 'grammatica', topic: 'bijvoeglijk naamwoord', type: 'input', prompt: 'Vul aan: een ___ huis (groot).', answer: 'groot', explanation: 'Na een bij een enkelvoudig het-woord krijgt het bijvoeglijk naamwoord meestal geen -e.' },
  { id: 'bron-a1-adjectief-02', level: 'A1', difficulty: 2, skill: 'grammatica', topic: 'bijvoeglijk naamwoord', type: 'choice', prompt: 'Welke vorm is correct?', answer: 'de grote tafel', options: ['de groot tafel', 'de grote tafel', 'het grote tafel'], explanation: 'Tafel is een de-woord; het bijvoeglijk naamwoord krijgt -e.' },
  { id: 'bron-a1-ons-onze-01', level: 'A1', difficulty: 2, skill: 'grammatica', topic: 'bezittelijk voornaamwoord', type: 'input', prompt: 'Vul aan: ___ adres is veranderd.', answer: 'ons', explanation: 'Adres is een enkelvoudig het-woord: ons adres.' },
  { id: 'bron-a1-ons-onze-02', level: 'A1', difficulty: 2, skill: 'grammatica', topic: 'bezittelijk voornaamwoord', type: 'input', prompt: 'Vul aan: ___ kinderen gaan naar school.', answer: 'onze', explanation: 'Voor een meervoud gebruik je onze.' },
  { id: 'bron-a1-stam-01', level: 'A1', difficulty: 2, skill: 'grammatica', topic: 'werkwoordstam', type: 'input', prompt: 'Vul de ik-vorm in: Ik ___ in Eindhoven. (wonen)', answer: 'woon', explanation: 'Verwijder -en en behoud de lange oo: wonen – woon.' },
  { id: 'bron-a1-stam-02', level: 'A1', difficulty: 2, skill: 'grammatica', topic: 'werkwoordstam', type: 'input', prompt: 'Vul de ik-vorm in: Ik ___ de tas op tafel. (zetten)', answer: 'zet', explanation: 'De dubbele t is in een gesloten lettergreep niet nodig: zetten – zet.' },
  { id: 'bron-a2-vergelijking-01', level: 'A2', difficulty: 3, skill: 'grammatica', topic: 'vergelijking', type: 'choice', prompt: 'Deze route is ___ dan de vorige. (goed)', answer: 'beter', options: ['goeder', 'beter', 'best'], explanation: 'Goed heeft de onregelmatige reeks goed – beter – best.' },
  { id: 'bron-a2-vergelijking-02', level: 'A2', difficulty: 3, skill: 'grammatica', topic: 'vergelijking', type: 'input', prompt: 'Vul aan: Ik reis ___ met de trein dan met de auto. (graag)', answer: 'liever', explanation: 'Graag vergelijkt onregelmatig: graag – liever – liefst.' },
  { id: 'bron-a2-voornaamwoord-01', level: 'A2', difficulty: 3, skill: 'grammatica', topic: 'voornaamwoorden en nadruk', type: 'choice', prompt: 'Welke zin legt duidelijk contrast op de personen?', answer: 'Jíj betaalt vandaag; ik betaal morgen.', options: ['Je betaalt vandaag.', 'Jíj betaalt vandaag; ik betaal morgen.', 'Ze betaalt vandaag.'], explanation: 'De volle vorm jij kan nadruk en contrast dragen.' },
  { id: 'bron-a2-wederkerend-01', level: 'A2', difficulty: 3, skill: 'grammatica', topic: 'wederkerende werkwoorden', type: 'input', prompt: 'Vul aan: Wij vergissen ___ in de datum.', answer: 'ons', explanation: 'Bij wij hoort het wederkerend voornaamwoord ons.' },
  { id: 'bron-a2-wederkerend-02', level: 'A2', difficulty: 3, skill: 'grammatica', topic: 'wederkerende werkwoorden', type: 'order', prompt: 'Maak een correcte zin met “zich voorbereiden op”.', answer: 'Zij bereidt zich op het examen voor.', tokens: ['Zij', 'bereidt', 'zich', 'op', 'het', 'examen', 'voor.'], explanation: 'In de hoofdzin staat zich na de persoonsvorm en het losse deel voor aan het einde.' },
  { id: 'bron-a2-verleden-01', level: 'A2', difficulty: 3, skill: 'grammatica', topic: 'zwak verleden', type: 'input', prompt: 'Vul aan: Gisteren ___ ik op de bus. (wachten)', answer: 'wachtte', explanation: 'De stam eindigt op t; het zwakke verleden krijgt -te: wachtte.' },
  { id: 'bron-a2-verleden-02', level: 'A2', difficulty: 3, skill: 'grammatica', topic: 'zwak verleden', type: 'input', prompt: 'Vul aan: Hij ___ de vraag rustig. (antwoorden)', answer: 'antwoordde', explanation: 'De stam eindigt op d en krijgt -de: antwoordde.' },
  { id: 'bron-a2-perfectum-01', level: 'A2', difficulty: 3, skill: 'grammatica', topic: 'hebben of zijn', type: 'choice', prompt: 'Kies: We ___ naar huis gefietst.', answer: 'zijn', options: ['hebben', 'zijn', 'worden'], explanation: 'De zin noemt een duidelijke bestemming; daarom is zijn de gewone keuze.' },
  { id: 'bron-a2-perfectum-02', level: 'A2', difficulty: 3, skill: 'grammatica', topic: 'hebben of zijn', type: 'choice', prompt: 'Kies: We ___ twee uur gefietst.', answer: 'hebben', options: ['hebben', 'zijn', 'worden'], explanation: 'Hier ligt de nadruk op de activiteit en duur, niet op een bestemming.' },
  { id: 'bron-a2-scheidbaar-01', level: 'A2', difficulty: 3, skill: 'grammatica', topic: 'scheidbare werkwoorden', type: 'order', prompt: 'Maak de bijzin met “opbellen”.', answer: 'omdat ik de huisarts opbel.', tokens: ['omdat', 'ik', 'de', 'huisarts', 'opbel.'], explanation: 'In een bijzin staat het scheidbare werkwoord aaneengeschreven aan het einde.' },
  { id: 'bron-a2-scheidbaar-02', level: 'A2', difficulty: 3, skill: 'grammatica', topic: 'scheidbare werkwoorden', type: 'input', prompt: 'Vul aan: Ik probeer de huisarts ___ bellen. (op)', answer: 'op te', explanation: 'Bij een scheidbaar werkwoord staat te tussen het voorvoegsel en het werkwoord: op te bellen.' },
  { id: 'bron-a2-sterk-01', level: 'A2', difficulty: 3, skill: 'grammatica', topic: 'sterke werkwoorden', type: 'input', prompt: 'Vul het verleden in: Zij ___ een lange e-mail. (schrijven)', answer: 'schreef', explanation: 'Schrijven hoort bij de reeks ij – ee – ee: schreef – geschreven.' },
  { id: 'bron-a2-sterk-02', level: 'A2', difficulty: 3, skill: 'grammatica', topic: 'sterke werkwoorden', type: 'input', prompt: 'Vul het deelwoord in: Wij hebben koffie ___. (drinken)', answer: 'gedronken', explanation: 'Drinken verandert i – o – o: dronk – gedronken.' },
  { id: 'bron-b1-leenwerkwoord-01', level: 'B1', difficulty: 4, skill: 'grammatica', topic: 'leenwerkwoorden', type: 'input', prompt: 'Vul aan: We hebben de software ___. (updaten)', answer: 'geüpdatet', explanation: 'Het Nederlandse deelwoord krijgt ge- en -t; de trema houdt de klinkers leesbaar.' },
  { id: 'bron-b1-leenwerkwoord-02', level: 'B1', difficulty: 4, skill: 'grammatica', topic: 'leenwerkwoorden', type: 'input', prompt: 'Vul aan: Gisteren ___ zij de vergadering. (plannen)', answer: 'plande', explanation: 'Plannen heeft de stam plan en krijgt in het verleden -de: plande.' },
  { id: 'bron-b1-register-01', level: 'B1', difficulty: 4, skill: 'schrijven', topic: 'grammaticale uitleg', type: 'selfcheck', prompt: 'Leg in twee eigen zinnen het verschil uit tussen “ik heb gefietst” en “ik ben naar huis gefietst”.', modelAnswer: '“Ik heb gefietst” benadrukt de activiteit. “Ik ben naar huis gefietst” benadrukt de bestemming.', explanation: 'Een goede uitleg benoemt zowel de activiteit als de gerichte verplaatsing.' },
];
