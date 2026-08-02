/**
 * Handmatig gecontroleerde correcties en didactische metadata.
 *
 * Alleen werkwoorden in deze lijst krijgen het kenmerk `reviewed: true`.
 * Daardoor kan de interface duidelijk onderscheid maken tussen algemene,
 * automatisch opgebouwde atlasinformatie en inhoud die woord voor woord is
 * nagekeken.
 */

const correction = (data) => ({
  reflexive: false,
  fixedPreposition: '',
  relatedWords: [],
  curated: true,
  ...data,
});

export const modalAndCoreVerbCorrections = [
  correction({
    infinitive: 'kunnen', level: 'A1', semantic: 'modaal', semanticLabel: 'mogelijkheid en vermogen',
    regularity: 'onregelmatig', separable: false, auxiliary: 'hebben',
    past: 'kon', pastPlural: 'konden', participle: 'gekund', conjugationClass: 'onregelmatig modaal werkwoord',
    meaning: 'In staat zijn iets te doen, of aangeven dat iets mogelijk is.',
    synonyms: ['in staat zijn', 'de mogelijkheid hebben'],
    usage: 'Met een tweede werkwoord staat het infinitief zonder te aan het einde: Ik kan morgen komen. In het perfectum verschijnt vaak een vervangende infinitief: Ik heb kunnen komen.',
    examples: ['Ik kan goed zwemmen.', 'Dat kan morgen gebeuren.', 'Ik heb de uitleg goed kunnen volgen.'],
    presentForms: ['ik kan', 'jij kunt/kan', 'hij/zij kan', 'wij kunnen', 'jullie kunnen', 'zij kunnen'],
    pastForms: ['ik kon', 'jij kon', 'hij/zij kon', 'wij konden', 'jullie konden', 'zij konden'],
    perfectForms: ['ik heb kunnen zwemmen', 'wij hebben kunnen komen', 'ik heb het gekund'],
    imperative: '—',
    sentencePatterns: {
      hoofdzin: 'Ik kan vandaag komen.',
      verleden: 'Ik kon gisteren niet komen.',
      perfectum: 'Ik heb goed kunnen oefenen.',
      modaal: 'Ik zou morgen kunnen komen.',
      bijzin: '… omdat ik vandaag kan komen.',
      vraag: 'Kun jij mij helpen?'
    }
  }),
  correction({
    infinitive: 'mogen', level: 'A1', semantic: 'modaal', semanticLabel: 'toestemming en mogelijkheid',
    regularity: 'onregelmatig', separable: false, auxiliary: 'hebben',
    past: 'mocht', pastPlural: 'mochten', participle: 'gemogen', conjugationClass: 'onregelmatig modaal werkwoord',
    meaning: 'Toestemming hebben of krijgen; soms uitdrukken dat iets mogelijk of gewenst is.',
    synonyms: ['toestemming hebben', 'toegestaan zijn'],
    usage: 'Met een tweede werkwoord volgt een infinitief zonder te: Je mag naar binnen gaan. Een vraag met mag kan beleefd om toestemming vragen.',
    examples: ['Je mag naar binnen.', 'Mag ik iets vragen?', 'We hebben langer mogen blijven.'],
    presentForms: ['ik mag', 'jij mag', 'hij/zij mag', 'wij mogen', 'jullie mogen', 'zij mogen'],
    pastForms: ['ik mocht', 'jij mocht', 'hij/zij mocht', 'wij mochten', 'jullie mochten', 'zij mochten'],
    perfectForms: ['ik heb mogen kiezen', 'wij hebben langer mogen blijven', 'ik heb het gemogen'],
    imperative: '—',
    sentencePatterns: {
      hoofdzin: 'Je mag hier zitten.',
      verleden: 'Je mocht gisteren langer blijven.',
      perfectum: 'We hebben langer mogen blijven.',
      modaal: 'Je zou hier mogen parkeren.',
      bijzin: '… omdat je hier mag zitten.',
      vraag: 'Mag ik iets vragen?'
    }
  }),
  correction({
    infinitive: 'moeten', level: 'A1', semantic: 'modaal', semanticLabel: 'noodzaak en verplichting',
    regularity: 'onregelmatig', separable: false, auxiliary: 'hebben',
    past: 'moest', pastPlural: 'moesten', participle: 'gemoeten', conjugationClass: 'onregelmatig modaal werkwoord',
    meaning: 'Aangeven dat iets noodzakelijk, verplicht of onvermijdelijk is.',
    synonyms: ['verplicht zijn', 'noodzakelijk zijn'],
    usage: 'Niet moeten betekent meestal dat iets beter niet gebeurt. Niet hoeven betekent dat iets niet nodig is. Met een tweede werkwoord volgt een infinitief zonder te.',
    examples: ['Ik moet vandaag werken.', 'Je hoeft niet te komen, maar je moet wel afbellen.', 'Wij hebben lang moeten wachten.'],
    presentForms: ['ik moet', 'jij moet', 'hij/zij moet', 'wij moeten', 'jullie moeten', 'zij moeten'],
    pastForms: ['ik moest', 'jij moest', 'hij/zij moest', 'wij moesten', 'jullie moesten', 'zij moesten'],
    perfectForms: ['ik heb moeten werken', 'wij hebben lang moeten wachten', 'dat had niet gemoeten'],
    imperative: '—',
    sentencePatterns: {
      hoofdzin: 'Ik moet vandaag werken.',
      verleden: 'Ik moest gisteren werken.',
      perfectum: 'Ik heb vandaag moeten werken.',
      modaal: 'Ik zou morgen moeten werken.',
      bijzin: '… omdat ik vandaag moet werken.',
      negatie: 'Je hoeft niet te komen, maar je moet wel afbellen.'
    }
  }),
  correction({
    infinitive: 'willen', level: 'A1', semantic: 'modaal', semanticLabel: 'wens, bereidheid en bedoeling',
    regularity: 'onregelmatig', separable: false, auxiliary: 'hebben',
    past: 'wilde/wou', pastPlural: 'wilden/wouden', participle: 'gewild', conjugationClass: 'onregelmatig modaal werkwoord',
    meaning: 'Een wens, voorkeur, bereidheid of bedoeling uitdrukken.',
    synonyms: ['wensen', 'van plan zijn'],
    usage: 'Met een tweede werkwoord volgt een infinitief zonder te. Zou willen maakt een verzoek of wens vaak beleefder: Ik zou graag willen betalen.',
    examples: ['Ik wil Nederlands leren.', 'Wilt u even wachten?', 'Zij heeft altijd willen reizen.'],
    presentForms: ['ik wil', 'jij wilt/wil', 'hij/zij wil', 'wij willen', 'jullie willen', 'zij willen'],
    pastForms: ['ik wilde/wou', 'jij wilde/wou', 'hij/zij wilde/wou', 'wij wilden/wouden', 'jullie wilden/wouden', 'zij wilden/wouden'],
    perfectForms: ['ik heb willen helpen', 'wij hebben willen vertrekken', 'ik heb het gewild'],
    imperative: '—',
    sentencePatterns: {
      hoofdzin: 'Ik wil Nederlands leren.',
      verleden: 'Ik wilde Nederlands leren.',
      perfectum: 'Ik heb altijd Nederlands willen leren.',
      modaal: 'Ik zou graag willen betalen.',
      bijzin: '… omdat ik Nederlands wil leren.',
      vraag: 'Wilt u even wachten?'
    }
  }),
  correction({
    infinitive: 'zullen', level: 'A2', semantic: 'modaal', semanticLabel: 'toekomst, voorstel en verwachting',
    regularity: 'onregelmatig', separable: false, auxiliary: '—',
    past: 'zou', pastPlural: 'zouden', participle: '—', conjugationClass: 'onregelmatig modaal werkwoord',
    meaning: 'Een verwachting, belofte, voorstel of toekomstige handeling uitdrukken.',
    synonyms: ['gaan bij een toekomstplan', 'van plan zijn'],
    usage: 'Zullen we…? vormt vaak een voorstel. Zou kan beleefdheid, een voorwaarde of een voorzichtige verwachting uitdrukken. Zullen heeft in gewoon modaal gebruik geen zelfstandig perfectum.',
    examples: ['Ik zal je morgen bellen.', 'Zullen we beginnen?', 'Zou u mij kunnen helpen?'],
    presentForms: ['ik zal', 'jij zult/zal', 'hij/zij zal', 'wij zullen', 'jullie zullen', 'zij zullen'],
    pastForms: ['ik zou', 'jij zou', 'hij/zij zou', 'wij zouden', 'jullie zouden', 'zij zouden'],
    perfectForms: [],
    perfectNote: 'Zullen heeft in het gewone modale gebruik geen zelfstandig perfectum.',
    imperative: '—',
    sentencePatterns: {
      hoofdzin: 'Ik zal je morgen bellen.',
      verleden: 'Ik zou je later bellen.',
      voorstel: 'Zullen we beginnen?',
      voorwaarde: 'Ik zou komen als ik tijd had.',
      bijzin: '… omdat ik je morgen zal bellen.',
      beleefd: 'Zou u mij kunnen helpen?'
    }
  }),
  correction({
    infinitive: 'hoeven', level: 'A2', semantic: 'modaal', semanticLabel: 'afwezigheid van noodzaak',
    regularity: 'regelmatig', separable: false, auxiliary: 'hebben',
    past: 'hoefde', pastPlural: 'hoefden', participle: 'gehoeven', conjugationClass: 'zwak werkwoord met modaal gebruik',
    meaning: 'Aangeven dat iets niet nodig is of slechts in beperkte mate nodig is.',
    synonyms: ['niet nodig zijn', 'niet verplicht zijn'],
    usage: 'Hoeven staat meestal met niet, geen, nauwelijks, niemand of alleen maar. Voor het tweede werkwoord staat te: Je hoeft niet te wachten. In het perfectum wordt vaak hoeven gebruikt in plaats van gehoeven.',
    examples: ['Je hoeft vandaag niet te werken.', 'U hoeft alleen maar te tekenen.', 'We hebben niets hoeven betalen.'],
    presentForms: ['ik hoef', 'jij hoeft', 'hij/zij hoeft', 'wij hoeven', 'jullie hoeven', 'zij hoeven'],
    pastForms: ['ik hoefde', 'jij hoefde', 'hij/zij hoefde', 'wij hoefden', 'jullie hoefden', 'zij hoefden'],
    perfectForms: ['ik heb niet hoeven wachten', 'wij hebben niets hoeven betalen', 'dat had niet gehoeven'],
    imperative: '—',
    sentencePatterns: {
      hoofdzin: 'Je hoeft niet te wachten.',
      verleden: 'Je hoefde niet te wachten.',
      perfectum: 'Je hebt niet hoeven wachten.',
      modaal: 'Je zou niet hoeven wachten.',
      bijzin: '… omdat je niet hoeft te wachten.',
      vraag: 'Hoef ik niets mee te nemen?'
    }
  }),
  correction({
    infinitive: 'durven', level: 'A2', semantic: 'modaal', semanticLabel: 'moed en aarzeling',
    regularity: 'regelmatig', separable: false, auxiliary: 'hebben',
    past: 'durfde', pastPlural: 'durfden', participle: 'gedurfd', conjugationClass: 'zwak werkwoord met modaal gebruik',
    meaning: 'Genoeg moed hebben om iets te doen of te zeggen.',
    synonyms: ['de moed hebben', 'aandurven'],
    usage: 'In de algemene standaardtaal staat meestal te voor het tweede werkwoord: Ik durf het te vragen. Zonder te komt onder meer in Belgisch-Nederlands en in enkele vaste patronen voor.',
    examples: ['Ik durf dat niet te zeggen.', 'Durf jij alleen te reizen?', 'Zij heeft het niet durven vragen.'],
    presentForms: ['ik durf', 'jij durft', 'hij/zij durft', 'wij durven', 'jullie durven', 'zij durven'],
    pastForms: ['ik durfde', 'jij durfde', 'hij/zij durfde', 'wij durfden', 'jullie durfden', 'zij durfden'],
    perfectForms: ['ik heb het niet durven vragen', 'wij hebben dat niet durven zeggen', 'ik heb het gedurfd'],
    imperative: 'durf',
    sentencePatterns: {
      hoofdzin: 'Ik durf het te vragen.',
      verleden: 'Ik durfde het niet te vragen.',
      perfectum: 'Ik heb het niet durven vragen.',
      modaal: 'Ik zou het wel durven vragen.',
      bijzin: '… omdat ik het niet durf te vragen.',
      vraag: 'Durf jij alleen te reizen?'
    }
  }),
  correction({
    infinitive: 'laten', level: 'A2', semantic: 'modaal', semanticLabel: 'toestaan, veroorzaken en ongewijzigd houden',
    regularity: 'onregelmatig', separable: false, auxiliary: 'hebben',
    past: 'liet', pastPlural: 'lieten', participle: 'gelaten', conjugationClass: 'sterk werkwoord met hulpwerkwoordelijk gebruik',
    meaning: 'Toestaan dat iets gebeurt, iemand iets laten doen, iets veroorzaken of iets ongewijzigd achterlaten.',
    synonyms: ['toestaan', 'doen gebeuren', 'achterlaten'],
    usage: 'Met een tweede werkwoord volgt een infinitief zonder te: Ik laat de fiets repareren. In het perfectum staat vaak laten in plaats van gelaten: Ik heb de fiets laten repareren.',
    examples: ['Laat het raam open.', 'Ik laat mijn haar knippen.', 'We hebben hem rustig laten uitpraten.'],
    presentForms: ['ik laat', 'jij laat', 'hij/zij laat', 'wij laten', 'jullie laten', 'zij laten'],
    pastForms: ['ik liet', 'jij liet', 'hij/zij liet', 'wij lieten', 'jullie lieten', 'zij lieten'],
    perfectForms: ['ik heb de fiets laten repareren', 'wij hebben hem laten gaan', 'ik heb het zo gelaten'],
    imperative: 'laat',
    sentencePatterns: {
      hoofdzin: 'Ik laat de fiets repareren.',
      verleden: 'Ik liet de fiets repareren.',
      perfectum: 'Ik heb de fiets laten repareren.',
      modaal: 'Ik kan de fiets laten repareren.',
      bijzin: '… omdat ik de fiets laat repareren.',
      gebiedend: 'Laat het raam open.'
    }
  }),
  correction({
    infinitive: 'aandoen', level: 'A2', semantic: 'handeling', semanticLabel: 'aantrekken, inschakelen, veroorzaken of bezoeken',
    regularity: 'onregelmatig', separable: true, prefix: 'aan', root: 'doen', auxiliary: 'hebben',
    stem: 'doe', past: 'deed aan', pastSubordinate: 'aandeed', pastPlural: 'deden aan', participle: 'aangedaan', conjugationClass: 'sterk scheidbaar werkwoord',
    meaning: 'Kleding aantrekken, een apparaat of licht inschakelen, iemand iets laten ervaren, of onderweg een plaats kort bezoeken.',
    synonyms: ['aantrekken', 'inschakelen', 'veroorzaken', 'bezoeken'],
    synonymNote: 'Aantrekken past bij kleding, inschakelen bij apparaten en licht, veroorzaken bij pijn of schade, en bezoeken bij een plaats; de alternatieven horen dus bij verschillende betekenissen.',
    usage: 'De betekenis hangt af van het object: een jas aandoen, het licht aandoen, iemand pijn aandoen of een haven aandoen.',
    examples: ['Doe je jas aan, want het is koud.', 'Kun je het licht aandoen?', 'Die opmerking heeft haar pijn aangedaan.', 'Het schip deed verschillende havens aan.'],
    presentForms: ['ik doe aan', 'jij doet aan', 'hij/zij doet aan', 'wij doen aan', 'jullie doen aan', 'zij doen aan'],
    pastForms: ['ik deed aan', 'jij deed aan', 'hij/zij deed aan', 'wij deden aan', 'jullie deden aan', 'zij deden aan'],
    perfectForms: ['ik heb mijn jas aangedaan', 'wij hebben het licht aangedaan'],
    imperative: 'doe aan',
    sentencePatterns: {
      hoofdzin: 'Ik doe mijn jas aan.',
      verleden: 'Ik deed mijn jas aan.',
      perfectum: 'Ik heb mijn jas aangedaan.',
      modaal: 'Ik kan mijn jas aandoen.',
      bijzin: '… omdat ik mijn jas aandoe.',
      metTe: 'Ik probeer mijn jas aan te doen.'
    }
  }),
  correction({
    infinitive: 'gaan', level: 'A1', semantic: 'beweging', semanticLabel: 'beweging en toekomstplan',
    regularity: 'onregelmatig', separable: false, auxiliary: 'zijn',
    past: 'ging', pastPlural: 'gingen', participle: 'gegaan', conjugationClass: 'sterk werkwoord',
    meaning: 'Zich naar een andere plaats bewegen; met een infinitief ook een plan of nabije toekomst aangeven.',
    synonyms: ['vertrekken', 'zich begeven'],
    usage: 'Het perfectum wordt met zijn gevormd: Ik ben gegaan. Met een tweede werkwoord volgt een infinitief zonder te: Ik ga koken.',
    examples: ['Wij gaan naar huis.', 'Ik ga vanavond studeren.', 'Zij is vroeg weggegaan.'],
    presentForms: ['ik ga', 'jij gaat', 'hij/zij gaat', 'wij gaan', 'jullie gaan', 'zij gaan'],
    pastForms: ['ik ging', 'jij ging', 'hij/zij ging', 'wij gingen', 'jullie gingen', 'zij gingen'],
    perfectForms: ['ik ben gegaan', 'wij zijn gegaan'],
    imperative: 'ga',
    sentencePatterns: {
      hoofdzin: 'Ik ga naar huis.',
      verleden: 'Ik ging naar huis.',
      perfectum: 'Ik ben naar huis gegaan.',
      modaal: 'Ik kan naar huis gaan.',
      bijzin: '… omdat ik naar huis ga.',
      toekomst: 'Ik ga vanavond studeren.'
    }
  }),
  correction({
    infinitive: 'komen', level: 'A1', semantic: 'beweging', semanticLabel: 'beweging naar een doel',
    regularity: 'onregelmatig', separable: false, auxiliary: 'zijn',
    past: 'kwam', pastPlural: 'kwamen', participle: 'gekomen', conjugationClass: 'sterk werkwoord',
    meaning: 'Zich verplaatsen naar de spreker, naar een genoemde plaats of naar een nieuwe situatie.',
    synonyms: ['aankomen', 'verschijnen'],
    usage: 'Het perfectum wordt met zijn gevormd: Zij is laat gekomen. Met komen + infinitief zonder te wordt vaak een beweging met een doel uitgedrukt: Hij komt helpen.',
    examples: ['Kom je morgen?', 'De trein is op tijd gekomen.', 'Mijn buurman komt vanavond helpen.'],
    presentForms: ['ik kom', 'jij komt', 'hij/zij komt', 'wij komen', 'jullie komen', 'zij komen'],
    pastForms: ['ik kwam', 'jij kwam', 'hij/zij kwam', 'wij kwamen', 'jullie kwamen', 'zij kwamen'],
    perfectForms: ['ik ben gekomen', 'wij zijn gekomen'],
    imperative: 'kom',
    sentencePatterns: {
      hoofdzin: 'Ik kom morgen.',
      verleden: 'Ik kwam gisteren.',
      perfectum: 'Ik ben op tijd gekomen.',
      modaal: 'Ik kan morgen komen.',
      bijzin: '… omdat ik morgen kom.',
      metInfinitief: 'Mijn buurman komt vanavond helpen.'
    }
  }),
  correction({
    infinitive: 'blijven', level: 'A1', semantic: 'toestand', semanticLabel: 'voortdurende plaats, toestand of handeling',
    regularity: 'onregelmatig', separable: false, auxiliary: 'zijn',
    past: 'bleef', pastPlural: 'bleven', participle: 'gebleven', conjugationClass: 'sterk werkwoord',
    meaning: 'Niet vertrekken, in dezelfde toestand verkeren of doorgaan met een handeling.',
    synonyms: ['niet weggaan', 'voortduren'],
    usage: 'Het perfectum wordt met zijn gevormd: Ik ben thuisgebleven. Met een tweede werkwoord volgt een infinitief zonder te: Blijf rustig zitten.',
    examples: ['Ik blijf thuis.', 'Het blijft regenen.', 'We zijn langer gebleven.'],
    presentForms: ['ik blijf', 'jij blijft', 'hij/zij blijft', 'wij blijven', 'jullie blijven', 'zij blijven'],
    pastForms: ['ik bleef', 'jij bleef', 'hij/zij bleef', 'wij bleven', 'jullie bleven', 'zij bleven'],
    perfectForms: ['ik ben gebleven', 'wij zijn gebleven'],
    imperative: 'blijf',
    sentencePatterns: {
      hoofdzin: 'Ik blijf thuis.',
      verleden: 'Ik bleef thuis.',
      perfectum: 'Ik ben thuisgebleven.',
      modaal: 'Ik kan thuisblijven.',
      bijzin: '… omdat ik thuisblijf.',
      metInfinitief: 'Blijf rustig zitten.'
    }
  }),
  correction({
    infinitive: 'zwemmen', level: 'A2', semantic: 'beweging', semanticLabel: 'beweging in water',
    regularity: 'onregelmatig', separable: false, auxiliary: 'hebben/zijn',
    past: 'zwom', pastPlural: 'zwommen', participle: 'gezwommen', conjugationClass: 'sterk werkwoord',
    meaning: 'Zich met arm- en beenbewegingen door het water verplaatsen.',
    synonyms: ['zich door het water bewegen'],
    usage: 'Gebruik meestal hebben voor de activiteit en zijn wanneer een duidelijke verplaatsing of bestemming centraal staat.',
    examples: ['Ik heb een uur gezwommen.', 'We zijn naar de overkant gezwommen.', 'Zij zwemt iedere woensdag.'],
    presentForms: ['ik zwem', 'jij zwemt', 'hij/zij zwemt', 'wij zwemmen', 'jullie zwemmen', 'zij zwemmen'],
    pastForms: ['ik zwom', 'jij zwom', 'hij/zij zwom', 'wij zwommen', 'jullie zwommen', 'zij zwommen'],
    perfectForms: ['ik heb een uur gezwommen', 'wij zijn naar de overkant gezwommen'],
    imperative: 'zwem',
    sentencePatterns: {
      hoofdzin: 'Ik zwem iedere woensdag.',
      verleden: 'Ik zwom gisteren een kilometer.',
      perfectum: 'Ik heb een uur gezwommen.',
      modaal: 'Ik kan goed zwemmen.',
      bijzin: '… omdat ik iedere woensdag zwem.',
      richting: 'We zijn naar de overkant gezwommen.'
    }
  }),
  correction({
    infinitive: 'aannemen', level: 'A2', semantic: 'handeling', semanticLabel: 'accepteren, in dienst nemen of veronderstellen',
    regularity: 'onregelmatig', separable: true, prefix: 'aan', root: 'nemen', auxiliary: 'hebben',
    stem: 'neem', past: 'nam aan', pastSubordinate: 'aannam', pastPlural: 'namen aan', participle: 'aangenomen', conjugationClass: 'sterk scheidbaar werkwoord',
    meaning: 'Iets accepteren, iemand in dienst nemen, of denken dat iets waarschijnlijk waar is.',
    synonyms: ['accepteren', 'aanvaarden', 'veronderstellen'],
    synonymNote: 'Accepteren en aanvaarden passen bij een aanbod of voorstel; veronderstellen past alleen bij aannemen dat. Iemand aannemen betekent daarnaast iemand in dienst nemen.',
    usage: 'De betekenis hangt sterk af van het object of de bijzin: een aanbod aannemen, iemand aannemen of aannemen dat iets klopt.',
    examples: ['Zij heeft het aanbod aangenomen.', 'Het bedrijf neemt twee medewerkers aan.', 'Ik neem aan dat hij morgen komt.'],
    presentForms: ['ik neem aan', 'jij neemt aan', 'hij/zij neemt aan', 'wij nemen aan', 'jullie nemen aan', 'zij nemen aan'],
    pastForms: ['ik nam aan', 'jij nam aan', 'hij/zij nam aan', 'wij namen aan', 'jullie namen aan', 'zij namen aan'],
    perfectForms: ['ik heb het aanbod aangenomen', 'wij hebben nieuwe medewerkers aangenomen'],
    imperative: 'neem aan',
    sentencePatterns: {
      hoofdzin: 'Ik neem het aanbod aan.',
      verleden: 'Ik nam het aanbod aan.',
      perfectum: 'Ik heb het aanbod aangenomen.',
      modaal: 'Ik kan het aanbod aannemen.',
      bijzin: '… omdat ik het aanbod aanneem.',
      metTe: 'Ik besluit het aanbod aan te nemen.'
    }
  }),
  correction({
    infinitive: 'afnemen', level: 'B1', semantic: 'verandering', semanticLabel: 'verminderen, verwijderen of afnemen van een toets',
    regularity: 'onregelmatig', separable: true, prefix: 'af', root: 'nemen', auxiliary: 'hebben/zijn',
    stem: 'neem', past: 'nam af', pastSubordinate: 'afnam', pastPlural: 'namen af', participle: 'afgenomen', conjugationClass: 'sterk scheidbaar werkwoord',
    meaning: 'Minder worden, iets verwijderen, of bij iemand een toets, interview of verhoor uitvoeren.',
    synonyms: ['verminderen', 'dalen', 'wegnemen'],
    synonymNote: 'Verminderen en dalen passen bij kleiner worden; wegnemen past alleen bij de betekenis iets verwijderen en niet bij een toets afnemen.',
    usage: 'Bij minder worden staat meestal zijn in het perfectum: De pijn is afgenomen. Bij een handeling staat hebben: De docent heeft de toets afgenomen.',
    examples: ['De pijn nam langzaam af.', 'De docent neemt morgen een examen af.', 'De belangstelling is sterk afgenomen.'],
    presentForms: ['ik neem af', 'jij neemt af', 'hij/zij neemt af', 'wij nemen af', 'jullie nemen af', 'zij nemen af'],
    pastForms: ['ik nam af', 'jij nam af', 'hij/zij nam af', 'wij namen af', 'jullie namen af', 'zij namen af'],
    perfectForms: ['de pijn is afgenomen', 'ik heb de toets afgenomen'],
    imperative: 'neem af',
    sentencePatterns: {
      hoofdzin: 'De pijn neemt langzaam af.',
      verleden: 'De pijn nam langzaam af.',
      perfectum: 'De pijn is langzaam afgenomen.',
      modaal: 'De docent kan morgen de toets afnemen.',
      bijzin: '… omdat de pijn langzaam afneemt.',
      metTe: 'De docent bereidt zich voor om de toets af te nemen.'
    }
  }),
  correction({
    infinitive: 'opnemen', level: 'A2', semantic: 'handeling', semanticLabel: 'vastleggen, toelaten, beantwoorden of verwerken',
    regularity: 'onregelmatig', separable: true, prefix: 'op', root: 'nemen', auxiliary: 'hebben',
    stem: 'neem', past: 'nam op', pastSubordinate: 'opnam', pastPlural: 'namen op', participle: 'opgenomen', conjugationClass: 'sterk scheidbaar werkwoord',
    meaning: 'Geluid of beeld vastleggen, iemand toelaten, de telefoon beantwoorden of iets in een geheel verwerken.',
    synonyms: ['registreren', 'vastleggen', 'toelaten'],
    usage: 'In een hoofdzin staat op achteraan: Ik neem het gesprek op. In een bijzin en in het infinitief blijft het werkwoord aaneen: omdat ik het opneem; het gesprek opnemen.',
    examples: ['Ik neem het gesprek op.', 'Het ziekenhuis heeft hem opgenomen.', 'Kun je de telefoon opnemen?'],
    presentForms: ['ik neem op', 'jij neemt op', 'hij/zij neemt op', 'wij nemen op', 'jullie nemen op', 'zij nemen op'],
    pastForms: ['ik nam op', 'jij nam op', 'hij/zij nam op', 'wij namen op', 'jullie namen op', 'zij namen op'],
    perfectForms: ['ik heb het gesprek opgenomen', 'wij hebben contact opgenomen'],
    imperative: 'neem op',
    sentencePatterns: {
      hoofdzin: 'Ik neem het gesprek op.',
      verleden: 'Ik nam het gesprek op.',
      perfectum: 'Ik heb het gesprek opgenomen.',
      modaal: 'Ik kan het gesprek opnemen.',
      bijzin: '… omdat ik het gesprek opneem.',
      metTe: 'Ik besluit het gesprek op te nemen.'
    }
  }),
  correction({
    infinitive: 'meenemen', level: 'A1', semantic: 'beweging', semanticLabel: 'iets of iemand met zich laten meegaan',
    regularity: 'onregelmatig', separable: true, prefix: 'mee', root: 'nemen', auxiliary: 'hebben',
    stem: 'neem', past: 'nam mee', pastSubordinate: 'meenam', pastPlural: 'namen mee', participle: 'meegenomen', conjugationClass: 'sterk scheidbaar werkwoord',
    meaning: 'Iets of iemand bij het vertrek met je laten meegaan naar een andere plaats.',
    synonyms: ['met zich nemen', 'bij zich steken', 'meebrengen in passende context'],
    usage: 'Meenemen bekijkt de beweging meestal vanaf de vertrekplaats. Meebrengen bekijkt de beweging vaak naar de spreker of bestemming toe.',
    examples: ['Neem je paspoort mee.', 'Ik heb een jas meegenomen.', 'Kun je morgen je laptop meebrengen?'],
    presentForms: ['ik neem mee', 'jij neemt mee', 'hij/zij neemt mee', 'wij nemen mee', 'jullie nemen mee', 'zij nemen mee'],
    pastForms: ['ik nam mee', 'jij nam mee', 'hij/zij nam mee', 'wij namen mee', 'jullie namen mee', 'zij namen mee'],
    perfectForms: ['ik heb mijn paspoort meegenomen', 'wij hebben de kinderen meegenomen'],
    imperative: 'neem mee',
    sentencePatterns: {
      hoofdzin: 'Ik neem mijn paspoort mee.',
      verleden: 'Ik nam mijn paspoort mee.',
      perfectum: 'Ik heb mijn paspoort meegenomen.',
      modaal: 'Ik kan mijn paspoort meenemen.',
      bijzin: '… omdat ik mijn paspoort meeneem.',
      metTe: 'Ik vergeet mijn paspoort mee te nemen.'
    }
  }),
  correction({
    infinitive: 'doorgaan', level: 'A2', semantic: 'gebeurtenis', semanticLabel: 'verdergaan of plaatsvinden',
    regularity: 'onregelmatig', separable: true, prefix: 'door', root: 'gaan', auxiliary: 'zijn',
    stem: 'ga', past: 'ging door', pastSubordinate: 'doorging', pastPlural: 'gingen door', participle: 'doorgegaan', conjugationClass: 'sterk scheidbaar werkwoord',
    meaning: 'Niet stoppen maar verdergaan, of volgens plan plaatsvinden.',
    synonyms: ['verdergaan', 'voortgaan', 'plaatsvinden'],
    usage: 'Bij een persoon of handeling betekent doorgaan meestal verdergaan. Bij een vergadering, les of evenement betekent het vaak plaatsvinden.',
    examples: ['We gaan na de pauze door.', 'De vergadering gaat morgen door.', 'Ondanks de regen is het concert doorgegaan.'],
    presentForms: ['ik ga door', 'jij gaat door', 'hij/zij gaat door', 'wij gaan door', 'jullie gaan door', 'zij gaan door'],
    pastForms: ['ik ging door', 'jij ging door', 'hij/zij ging door', 'wij gingen door', 'jullie gingen door', 'zij gingen door'],
    perfectForms: ['ik ben doorgegaan', 'de vergadering is doorgegaan'],
    imperative: 'ga door',
    sentencePatterns: {
      hoofdzin: 'We gaan na de pauze door.',
      verleden: 'We gingen na de pauze door.',
      perfectum: 'We zijn na de pauze doorgegaan.',
      modaal: 'We kunnen na de pauze doorgaan.',
      bijzin: '… omdat we na de pauze doorgaan.',
      metTe: 'We besluiten na de pauze door te gaan.'
    }
  }),
  correction({
    infinitive: 'uitgaan', level: 'A1', semantic: 'beweging', semanticLabel: 'op stap gaan, doven of als uitgangspunt nemen',
    regularity: 'onregelmatig', separable: true, prefix: 'uit', root: 'gaan', auxiliary: 'zijn',
    stem: 'ga', past: 'ging uit', pastSubordinate: 'uitging', pastPlural: 'gingen uit', participle: 'uitgegaan', conjugationClass: 'sterk scheidbaar werkwoord',
    meaning: 'Voor ontspanning weggaan, stoppen met branden, of in de vaste combinatie ervan uitgaan iets als uitgangspunt nemen.',
    synonyms: ['op stap gaan', 'doven', 'veronderstellen in ervan uitgaan'],
    usage: 'De betekenis hangt af van het onderwerp en de combinatie: mensen gaan uit, een lamp gaat uit, en iemand gaat ervan uit dat iets klopt.',
    examples: ['Wij gaan zaterdag uit.', 'Het licht is vanzelf uitgegaan.', 'Ik ga ervan uit dat alles klopt.'],
    presentForms: ['ik ga uit', 'jij gaat uit', 'hij/zij gaat uit', 'wij gaan uit', 'jullie gaan uit', 'zij gaan uit'],
    pastForms: ['ik ging uit', 'jij ging uit', 'hij/zij ging uit', 'wij gingen uit', 'jullie gingen uit', 'zij gingen uit'],
    perfectForms: ['ik ben uitgegaan', 'het licht is uitgegaan', 'ik ben ervan uitgegaan dat alles klopte'],
    imperative: 'ga uit',
    sentencePatterns: {
      hoofdzin: 'Wij gaan zaterdag uit.',
      verleden: 'Wij gingen zaterdag uit.',
      perfectum: 'Wij zijn zaterdag uitgegaan.',
      modaal: 'Wij kunnen zaterdag uitgaan.',
      bijzin: '… omdat wij zaterdag uitgaan.',
      metTe: 'Wij besluiten zaterdag uit te gaan.'
    }
  })
];

const genericMeanings = new Set([
  'Het werkwoord beschrijft vooral een handeling of activiteit.',
  'Het werkwoord beschrijft een toestand, ervaring, houding of waarneming.',
  'Het onderwerp verandert van toestand, omvang, kwaliteit of situatie.',
]);

function validateCorrection(item) {
  const requiredText = ['infinitive', 'level', 'semantic', 'semanticLabel', 'meaning', 'usage', 'regularity', 'auxiliary', 'past', 'pastPlural', 'participle', 'conjugationClass'];
  for (const field of requiredText) {
    if (typeof item[field] !== 'string' || item[field].trim().length === 0) {
      throw new Error(`${item.infinitive || 'onbekend'}: ontbrekende gecontroleerde metadata (${field})`);
    }
  }
  if (item.meaning.trim().length < 20 || genericMeanings.has(item.meaning.trim())) {
    throw new Error(`${item.infinitive}: definitie is te kort of generiek`);
  }
  if (!Array.isArray(item.synonyms) || item.synonyms.filter(Boolean).length === 0) {
    throw new Error(`${item.infinitive}: gecontroleerde synoniemen ontbreken`);
  }
  if (!Array.isArray(item.examples) || item.examples.filter(Boolean).length < 2) {
    throw new Error(`${item.infinitive}: minimaal twee gecontroleerde voorbeelden vereist`);
  }
  if (!Array.isArray(item.presentForms) || item.presentForms.length !== 6) {
    throw new Error(`${item.infinitive}: tegenwoordige tijd moet zes vormen bevatten`);
  }
  if (!Array.isArray(item.pastForms) || item.pastForms.length !== 6) {
    throw new Error(`${item.infinitive}: verleden tijd moet zes vormen bevatten`);
  }
  if (!Array.isArray(item.perfectForms)) {
    throw new Error(`${item.infinitive}: perfectForms moet een lijst zijn`);
  }
  if (item.perfectForms.length === 0 && !item.perfectNote) {
    throw new Error(`${item.infinitive}: perfectum of toelichting ontbreekt`);
  }
  if (!item.sentencePatterns || Object.keys(item.sentencePatterns).length < 5) {
    throw new Error(`${item.infinitive}: minimaal vijf gecontroleerde zinspatronen vereist`);
  }
  for (const sentence of Object.values(item.sentencePatterns)) {
    if (typeof sentence !== 'string' || sentence.trim().length < 8) {
      throw new Error(`${item.infinitive}: ongeldig zinspatroon`);
    }
  }
}

export function applyVerbCorrections(atlas) {
  const seen = new Set();
  for (const item of modalAndCoreVerbCorrections) {
    if (seen.has(item.infinitive)) throw new Error(`${item.infinitive}: dubbele correctie`);
    seen.add(item.infinitive);
    validateCorrection(item);

    let verb = atlas.find((candidate) => candidate.infinitive === item.infinitive);
    if (!verb) {
      verb = { infinitive: item.infinitive };
      atlas.push(verb);
    }

    Object.assign(verb, item, {
      curated: true,
      reviewed: true,
      synonyms: item.synonyms.filter(Boolean),
      examples: item.examples.filter(Boolean),
      relatedWords: item.relatedWords.filter(Boolean),
      sentencePatterns: { ...item.sentencePatterns },
      presentForms: [...item.presentForms],
      pastForms: [...item.pastForms],
      perfectForms: [...item.perfectForms],
    });
  }

  atlas.sort((a, b) => a.infinitive.localeCompare(b.infinitive, 'nl-NL'));
  return atlas;
}
