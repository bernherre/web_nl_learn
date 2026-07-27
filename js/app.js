/* Generated browser bundle. Source of truth: learning.js, depth-content.js, supplement-content.js, content.js and main.js. */
(function () {
'use strict';
function normaliseSentence(value) {
  return String(value ?? '')
    .trim()
    .replace(/[.!?]+$/u, '')
    .replace(/\s+/gu, ' ')
    .toLocaleLowerCase('nl-NL');
}

function isCorrectSentence(selectedWords, expectedSentence) {
  const selected = Array.isArray(selectedWords) ? selectedWords.join(' ') : selectedWords;
  return normaliseSentence(selected) === normaliseSentence(expectedSentence);
}

function remainingWords(allWords, selectedWords) {
  const counts = new Map();
  for (const word of selectedWords) counts.set(word, (counts.get(word) ?? 0) + 1);
  return allWords.filter((word) => {
    const count = counts.get(word) ?? 0;
    if (count === 0) return true;
    counts.set(word, count - 1);
    return false;
  });
}

function completionPercentage(completed, total) {
  if (!Number.isFinite(total) || total <= 0) return 0;
  const safeCompleted = Math.max(0, Math.min(Number(completed) || 0, total));
  return Math.round((safeCompleted / total) * 100);
}

function selectDutchVoice(voices = []) {
  const normalized = voices.filter(Boolean);
  return normalized.find((voice) => String(voice.lang).toLowerCase() === 'nl-nl')
    ?? normalized.find((voice) => String(voice.lang).toLowerCase() === 'nl-be')
    ?? normalized.find((voice) => String(voice.lang).toLowerCase().startsWith('nl'))
    ?? null;
}

function filterVocabulary(words, category = 'alle', query = '') {
  const normalizedQuery = String(query).trim().toLocaleLowerCase('nl-NL');
  return words.filter((item) => {
    const categoryMatches = category === 'alle' || item.category === category;
    const searchable = `${item.word} ${item.definition} ${item.example}`.toLocaleLowerCase('nl-NL');
    return categoryMatches && (!normalizedQuery || searchable.includes(normalizedQuery));
  });
}

function getGreeting(hour = new Date().getHours()) {
  if (hour < 12) return 'Goedemorgen';
  if (hour < 18) return 'Goedemiddag';
  return 'Goedenavond';
}

function safeProgress(raw = {}) {
  return {
    minutes: Math.max(0, Number(raw.minutes) || 0),
    completed: Math.max(0, Number(raw.completed) || 0),
    audioPlays: Math.max(0, Number(raw.audioPlays) || 0),
    wordOrderCompleted: Boolean(raw.wordOrderCompleted),
    practiceCompleted: Math.max(0, Number(raw.practiceCompleted) || 0),
    a1Completed: Array.isArray(raw.a1Completed) ? [...new Set(raw.a1Completed.filter((item) => typeof item === 'string'))] : [],
    a2Completed: Array.isArray(raw.a2Completed) ? [...new Set(raw.a2Completed.filter((item) => typeof item === 'string'))] : [],
  };
}

// Original expansion data for the static Dutch-learning application.

const expandedWordGroups = {
  "hallo": {
    "Persoonsgegevens": [
      "de geboortedatum",
      "de geboorteplaats",
      "de burgerlijke staat",
      "het telefoonnummer",
      "het e-mailadres",
      "de handtekening",
      "het formulier",
      "het identiteitsbewijs",
      "het paspoort",
      "de voorletters",
      "de roepnaam",
      "de contactpersoon",
      "de inwoner",
      "de buitenlander",
      "de moedertaal"
    ],
    "Relaties en familie": [
      "de buurman",
      "de buurvrouw",
      "de vriend",
      "de vriendin",
      "de collega",
      "de kennis",
      "de partner",
      "de echtgenoot",
      "de echtgenote",
      "de opa",
      "de oma",
      "de oom",
      "de tante",
      "de neef",
      "de nicht"
    ],
    "Vragen en functiewoorden": [
      "welke",
      "wiens",
      "waarvandaan",
      "waarheen",
      "hoe oud",
      "hoe lang",
      "hoe vaak",
      "al",
      "nog",
      "ook",
      "misschien",
      "natuurlijk",
      "precies",
      "ongeveer",
      "graag"
    ],
    "Communicatiehandelingen": [
      "invullen",
      "ondertekenen",
      "uitleggen",
      "vertellen",
      "herhalen",
      "bevestigen",
      "controleren",
      "verbeteren",
      "vertalen",
      "bedoelen",
      "herkennen",
      "onthouden",
      "vergeten",
      "uitspreken",
      "noteren"
    ]
  },
  "school": {
    "Lesmateriaal": [
      "het woordenboek",
      "het schrift",
      "de pen",
      "het potlood",
      "de gum",
      "de liniaal",
      "het bord",
      "de laptop",
      "de map",
      "het werkboek",
      "de bladzijde",
      "de tekst",
      "de vraag",
      "het antwoord",
      "het voorbeeld"
    ],
    "Schoolorganisatie": [
      "de cursus",
      "het niveau",
      "de docent",
      "de cursist",
      "de groep",
      "het lokaal",
      "de administratie",
      "de inschrijving",
      "het examen",
      "de toets",
      "het cijfer",
      "het diploma",
      "de vakantie",
      "de absentie",
      "de aanwezigheid"
    ],
    "Leerhandelingen": [
      "markeren",
      "onderstrepen",
      "aankruisen",
      "overschrijven",
      "nakijken",
      "samenvatten",
      "opzoeken",
      "oefenen",
      "luisteren",
      "lezen",
      "schrijven",
      "spreken",
      "presenteren",
      "overleggen",
      "samenwerken"
    ],
    "In de klas": [
      "een vraag stellen",
      "om hulp vragen",
      "een fout maken",
      "een antwoord geven",
      "aan de beurt zijn",
      "hardop lezen",
      "stil werken",
      "in tweetallen werken",
      "de opdracht afmaken",
      "de les volgen",
      "een toets maken",
      "huiswerk opgeven",
      "een woord opzoeken",
      "de betekenis raden",
      "een voorbeeld bedenken"
    ]
  },
  "wonen": {
    "Ruimtes en onderdelen": [
      "de hal",
      "de gang",
      "de zolder",
      "de kelder",
      "het balkon",
      "het terras",
      "de tuin",
      "de schuur",
      "de trap",
      "het dak",
      "de muur",
      "het plafond",
      "de vloer",
      "het raam",
      "de deur"
    ],
    "Woning en techniek": [
      "de verwarming",
      "de radiator",
      "de kraan",
      "de afvoer",
      "de elektriciteit",
      "het stopcontact",
      "de meter",
      "de sleutel",
      "het slot",
      "de bel",
      "de lift",
      "de intercom",
      "de rookmelder",
      "de isolatie",
      "het energielabel"
    ],
    "Buurt en service": [
      "de verhuurder",
      "de huurder",
      "de woningcorporatie",
      "de makelaar",
      "de conciërge",
      "de monteur",
      "de reparatie",
      "het onderhoud",
      "de huur",
      "de borg",
      "de servicekosten",
      "de overlast",
      "de buurt",
      "de speeltuin",
      "de parkeerplaats"
    ],
    "Wonen in context": [
      "de huur betalen",
      "een storing melden",
      "de sleutel ophalen",
      "een afspraak maken",
      "de vuilnis buitenzetten",
      "de ramen openen",
      "de verwarming aanzetten",
      "de deur op slot doen",
      "last hebben van",
      "tevreden zijn met",
      "verhuizen naar",
      "wonen bij",
      "tegenover de supermarkt",
      "achter het huis",
      "op de begane grond"
    ]
  },
  "eten": {
    "Boodschappen": [
      "de groente",
      "het fruit",
      "het brood",
      "de rijst",
      "de pasta",
      "het vlees",
      "de vis",
      "de kaas",
      "de yoghurt",
      "de melk",
      "het sap",
      "de koffie",
      "de thee",
      "het water",
      "de kruiden"
    ],
    "Keuken": [
      "de pan",
      "de koekenpan",
      "de oven",
      "de koelkast",
      "de vriezer",
      "het fornuis",
      "de magnetron",
      "het bord",
      "de kom",
      "het glas",
      "de mok",
      "het mes",
      "de vork",
      "de lepel",
      "de snijplank"
    ],
    "Smaak en hoeveelheid": [
      "zoet",
      "zout",
      "zuur",
      "bitter",
      "pittig",
      "vers",
      "rauw",
      "gaar",
      "warm",
      "koud",
      "een beetje",
      "genoeg",
      "te veel",
      "te weinig",
      "per persoon"
    ],
    "Eten in context": [
      "boodschappen doen",
      "de tafel dekken",
      "eten klaarmaken",
      "water koken",
      "groente snijden",
      "soep opwarmen",
      "iets proeven",
      "honger hebben",
      "dorst hebben",
      "vegetarisch eten",
      "allergisch zijn voor",
      "betalen aan de kassa",
      "een tafel reserveren",
      "de rekening vragen",
      "smakelijk eten"
    ]
  },
  "gezondheid": {
    "Het lichaam": [
      "het hoofd",
      "de keel",
      "de rug",
      "de buik",
      "de borst",
      "de arm",
      "de hand",
      "het been",
      "de knie",
      "de voet",
      "het oog",
      "het oor",
      "de neus",
      "de huid",
      "het hart"
    ],
    "Klachten": [
      "de pijn",
      "de koorts",
      "de hoest",
      "de verkoudheid",
      "de hoofdpijn",
      "de buikpijn",
      "de rugpijn",
      "de wond",
      "de uitslag",
      "de zwelling",
      "de misselijkheid",
      "de duizeligheid",
      "de vermoeidheid",
      "de allergie",
      "de infectie"
    ],
    "Zorg": [
      "de huisarts",
      "de apotheek",
      "de tandarts",
      "de fysiotherapeut",
      "de specialist",
      "de assistente",
      "de patiënt",
      "de verzekering",
      "het recept",
      "het medicijn",
      "de tablet",
      "de zalf",
      "de behandeling",
      "het onderzoek",
      "de afspraak"
    ],
    "Gezondheid in context": [
      "een afspraak maken",
      "klachten beschrijven",
      "temperatuur meten",
      "bloed laten prikken",
      "medicijnen innemen",
      "rust houden",
      "veel drinken",
      "een recept ophalen",
      "verzekerd zijn bij",
      "last hebben van",
      "allergisch zijn voor",
      "beter worden",
      "zich ziek melden",
      "naar de spoedpost gaan",
      "de bijsluiter lezen"
    ]
  },
  "kleding": {
    "Kledingstukken": [
      "het T-shirt",
      "de blouse",
      "de trui",
      "het vest",
      "de jas",
      "de broek",
      "de spijkerbroek",
      "de rok",
      "de jurk",
      "het pak",
      "de sok",
      "de schoen",
      "de laars",
      "de muts",
      "de sjaal"
    ],
    "Materiaal en uiterlijk": [
      "katoen",
      "wol",
      "leer",
      "linnen",
      "synthetisch",
      "gestreept",
      "geruit",
      "effen",
      "licht",
      "donker",
      "lang",
      "kort",
      "wijd",
      "strak",
      "waterdicht"
    ],
    "In de winkel": [
      "de maat",
      "de paskamer",
      "de spiegel",
      "de rits",
      "de knoop",
      "de mouw",
      "de korting",
      "de aanbieding",
      "de kassabon",
      "de garantie",
      "het merk",
      "de collectie",
      "de verkoopster",
      "de klant",
      "de voorraad"
    ],
    "Kleding in context": [
      "kleding passen",
      "goed staan",
      "te klein zijn",
      "te groot zijn",
      "een maat groter",
      "een maat kleiner",
      "iets aantrekken",
      "iets uittrekken",
      "bij elkaar passen",
      "in de aanbieding zijn",
      "met pin betalen",
      "de bon bewaren",
      "een artikel ruilen",
      "geld terugkrijgen",
      "zich netjes kleden"
    ]
  },
  "reizen": {
    "Vervoer": [
      "de bus",
      "de trein",
      "de tram",
      "de metro",
      "de fiets",
      "de auto",
      "de taxi",
      "het vliegtuig",
      "de veerboot",
      "de halte",
      "het station",
      "het perron",
      "het spoor",
      "de luchthaven",
      "de parkeerplaats"
    ],
    "Reisdocumenten": [
      "het kaartje",
      "de OV-chipkaart",
      "het abonnement",
      "de dienstregeling",
      "de route",
      "de vertraging",
      "de aansluiting",
      "de reservering",
      "het paspoort",
      "de bagage",
      "de koffer",
      "de rugzak",
      "de vertrekplaats",
      "de bestemming",
      "de enkele reis"
    ],
    "Verkeer en richting": [
      "linksaf",
      "rechtsaf",
      "rechtdoor",
      "voorbij",
      "langs",
      "oversteken",
      "inhalen",
      "parkeren",
      "instappen",
      "uitstappen",
      "overstappen",
      "vertrekken",
      "aankomen",
      "missen",
      "wachten"
    ],
    "Reizen in context": [
      "een kaartje kopen",
      "saldo opladen",
      "op het perron wachten",
      "de trein missen",
      "vertraging hebben",
      "een aansluiting halen",
      "naar spoor vier gaan",
      "bij de volgende halte uitstappen",
      "de weg vragen",
      "de route volgen",
      "met de fiets gaan",
      "in de file staan",
      "een plek reserveren",
      "bagage inchecken",
      "op tijd vertrekken"
    ]
  },
  "vrije-tijd": {
    "Activiteiten": [
      "wandelen",
      "fietsen",
      "zwemmen",
      "hardlopen",
      "voetballen",
      "tennissen",
      "dansen",
      "zingen",
      "tekenen",
      "schilderen",
      "fotograferen",
      "lezen",
      "gamen",
      "tuinieren",
      "koken"
    ],
    "Cultuur en uitgaan": [
      "de film",
      "de bioscoop",
      "het theater",
      "het museum",
      "het concert",
      "het festival",
      "de bibliotheek",
      "het café",
      "het restaurant",
      "het park",
      "de markt",
      "de tentoonstelling",
      "de voorstelling",
      "de kaart",
      "de entree"
    ],
    "Planning en sociaal": [
      "de uitnodiging",
      "de afspraak",
      "het weekend",
      "de hobby",
      "de vereniging",
      "de club",
      "het lid",
      "de training",
      "de wedstrijd",
      "het feest",
      "de verjaardag",
      "het bezoek",
      "de vakantie",
      "het plan",
      "de agenda"
    ],
    "Vrije tijd in context": [
      "zin hebben in",
      "afspreken met",
      "op bezoek gaan",
      "een feestje geven",
      "een kaartje kopen",
      "lid worden van",
      "meedoen aan",
      "tijd besteden aan",
      "genieten van",
      "interesse hebben in",
      "een hobby uitoefenen",
      "samen iets doen",
      "een wandeling maken",
      "naar muziek luisteren",
      "een serie kijken"
    ]
  },
  "verhuizen": {
    "Voorbereiding": [
      "de verhuisdoos",
      "het inpakpapier",
      "de tape",
      "de verhuiswagen",
      "de planning",
      "de checklist",
      "de sleuteloverdracht",
      "de oplevering",
      "het huurcontract",
      "de koopakte",
      "de borg",
      "de verhuizing",
      "de adreswijziging",
      "de meterstand",
      "de verzekering"
    ],
    "Handelingen": [
      "inpakken",
      "uitpakken",
      "opruimen",
      "weggooien",
      "bewaren",
      "demonteren",
      "monteren",
      "tillen",
      "dragen",
      "laden",
      "lossen",
      "schoonmaken",
      "schilderen",
      "ophangen",
      "aansluiten"
    ],
    "Contact en diensten": [
      "de verhuurder",
      "de makelaar",
      "de notaris",
      "de aannemer",
      "de schilder",
      "de loodgieter",
      "de elektricien",
      "de verhuisdienst",
      "de gemeente",
      "het energiebedrijf",
      "de internetprovider",
      "de buur",
      "de beheerder",
      "de woninginspectie",
      "de afspraak"
    ],
    "Verhuizen in context": [
      "een woning bezichtigen",
      "een bod uitbrengen",
      "het contract tekenen",
      "de huur opzeggen",
      "een adres doorgeven",
      "gas en licht regelen",
      "internet aanvragen",
      "de meterstand noteren",
      "de sleutels ontvangen",
      "de woning opleveren",
      "zich inschrijven op",
      "verhuizen van … naar …",
      "rekening houden met",
      "op zoek zijn naar",
      "klaar zijn met"
    ]
  },
  "nederland": {
    "Land en bestuur": [
      "de gemeente",
      "de provincie",
      "de hoofdstad",
      "de regering",
      "het parlement",
      "de verkiezing",
      "de wet",
      "de regel",
      "de belasting",
      "de koning",
      "de minister",
      "de burgemeester",
      "de inwoner",
      "de nationaliteit",
      "de democratie"
    ],
    "Landschap en water": [
      "de dijk",
      "de polder",
      "de kust",
      "de zee",
      "de rivier",
      "het kanaal",
      "het meer",
      "de duin",
      "het bos",
      "de heide",
      "het platteland",
      "de stad",
      "het dorp",
      "de grens",
      "de regio"
    ],
    "Cultuur en gewoonten": [
      "de feestdag",
      "Koningsdag",
      "Sinterklaas",
      "de verjaardag",
      "de kring",
      "de afspraak",
      "de directheid",
      "de gezelligheid",
      "de traditie",
      "de gewoonte",
      "de fiets",
      "de markt",
      "het museum",
      "de sportclub",
      "het vrijwilligerswerk"
    ],
    "Nederland in context": [
      "onder zeeniveau liggen",
      "rekening houden met",
      "gewend zijn aan",
      "verschillen van",
      "lijken op",
      "bekendstaan om",
      "deel uitmaken van",
      "stemmen op",
      "belasting betalen",
      "een afspraak nakomen",
      "op tijd komen",
      "de vlag uithangen",
      "in de rij staan",
      "met de fiets reizen",
      "een mening geven over"
    ]
  },
  "kinderen": {
    "Ontwikkeling": [
      "de taalontwikkeling",
      "de motoriek",
      "de groei",
      "de fase",
      "de peuter",
      "de kleuter",
      "de puber",
      "het gedrag",
      "de concentratie",
      "het zelfvertrouwen",
      "de zelfstandigheid",
      "de emotie",
      "de behoefte",
      "het talent",
      "de achterstand"
    ],
    "School en opvang": [
      "de kinderopvang",
      "de buitenschoolse opvang",
      "de gastouder",
      "de basisschool",
      "de middelbare school",
      "de leerkracht",
      "de mentor",
      "het rapport",
      "de ouderavond",
      "het schoolplein",
      "de klas",
      "het rooster",
      "de vakantie",
      "de studiedag",
      "de leerplicht"
    ],
    "Opvoeding en zorg": [
      "de opvoeding",
      "de regel",
      "de grens",
      "de straf",
      "de beloning",
      "de veiligheid",
      "de verantwoordelijkheid",
      "de toestemming",
      "de vaccinatie",
      "het consultatiebureau",
      "de jeugdarts",
      "de logopedist",
      "de kinderarts",
      "de oppas",
      "de kinderwagen"
    ],
    "Kinderen in context": [
      "een kind aanmelden",
      "naar school brengen",
      "van school ophalen",
      "toestemming geven voor",
      "zich zorgen maken over",
      "rekening houden met",
      "grenzen stellen",
      "regels afspreken",
      "een compliment geven",
      "hulp nodig hebben bij",
      "zich goed gedragen",
      "zelfstandig leren",
      "een oudergesprek voeren",
      "afwezig melden",
      "op iemand passen"
    ]
  },
  "winkels": {
    "Product en keuze": [
      "het artikel",
      "het product",
      "het merk",
      "het model",
      "de kwaliteit",
      "de eigenschap",
      "de maat",
      "de kleur",
      "het materiaal",
      "de prijs",
      "de korting",
      "de aanbieding",
      "de voorraad",
      "de verpakking",
      "de handleiding"
    ],
    "Bestellen en leveren": [
      "de webshop",
      "de winkelmand",
      "de bestelling",
      "de betaling",
      "de bevestiging",
      "de levering",
      "het pakket",
      "de bezorger",
      "het afhaalpunt",
      "de levertijd",
      "de verzendkosten",
      "het adres",
      "de track-and-trace",
      "de retourzending",
      "de ontvangst"
    ],
    "Klacht en service": [
      "de garantie",
      "de kassabon",
      "de klantenservice",
      "de klacht",
      "het gebrek",
      "de schade",
      "de reparatie",
      "de omruiling",
      "de terugbetaling",
      "de medewerker",
      "het filiaal",
      "de oplossing",
      "de termijn",
      "de voorwaarde",
      "het bewijs"
    ],
    "Winkels in context": [
      "op voorraad zijn",
      "uitverkocht zijn",
      "een bestelling plaatsen",
      "online betalen",
      "een pakket volgen",
      "een product retourneren",
      "een artikel ruilen",
      "een klacht indienen",
      "geld terugvragen",
      "gebruikmaken van de garantie",
      "beschadigd aankomen",
      "contact opnemen met",
      "tevreden zijn over",
      "advies vragen aan",
      "een keuze maken tussen"
    ]
  },
  "opleidingen": {
    "Opleidingsstructuur": [
      "de opleiding",
      "de cursus",
      "de studie",
      "het vak",
      "de module",
      "het semester",
      "het studiejaar",
      "het niveau",
      "de toelating",
      "de inschrijving",
      "het diploma",
      "het certificaat",
      "de stage",
      "de richting",
      "het programma"
    ],
    "Leren en beoordelen": [
      "de opdracht",
      "het project",
      "de presentatie",
      "het verslag",
      "de toets",
      "het examen",
      "het cijfer",
      "de beoordeling",
      "de feedback",
      "de deadline",
      "de aanwezigheid",
      "de herkansing",
      "de studievoortgang",
      "het resultaat",
      "de competentie"
    ],
    "Personen en begeleiding": [
      "de student",
      "de cursist",
      "de docent",
      "de mentor",
      "de begeleider",
      "de stagebegeleider",
      "de decaan",
      "de administratie",
      "de klasgenoot",
      "de projectgroep",
      "de examinator",
      "de opleidingscoördinator",
      "de adviseur",
      "de werkgever",
      "de onderwijsinstelling"
    ],
    "Opleiding in context": [
      "zich inschrijven voor",
      "toegelaten worden tot",
      "een opleiding volgen",
      "een vak afronden",
      "een toets halen",
      "voor een examen zakken",
      "een herkansing doen",
      "feedback krijgen op",
      "een verslag inleveren",
      "stage lopen bij",
      "een diploma behalen",
      "vrijstelling aanvragen",
      "studiepunten verzamelen",
      "zich voorbereiden op",
      "ervaring opdoen met"
    ]
  },
  "werk-zoeken": {
    "Vacature en profiel": [
      "de vacature",
      "de functie",
      "het beroep",
      "de sector",
      "het bedrijf",
      "de organisatie",
      "de werkgever",
      "de kandidaat",
      "de ervaring",
      "de opleiding",
      "de vaardigheid",
      "de eigenschap",
      "de eis",
      "de voorkeur",
      "het salaris"
    ],
    "Sollicitatiedocumenten": [
      "het cv",
      "de motivatiebrief",
      "de sollicitatiebrief",
      "het profiel",
      "de referentie",
      "het diploma",
      "het certificaat",
      "de werkervaring",
      "de contactgegevens",
      "de bijlage",
      "de vacaturetekst",
      "het portfolio",
      "de aanbeveling",
      "de handtekening",
      "de beschikbaarheid"
    ],
    "Gesprek en procedure": [
      "het sollicitatiegesprek",
      "de recruiter",
      "de manager",
      "de vraag",
      "het antwoord",
      "de voorbereiding",
      "de eerste indruk",
      "de kleding",
      "de afspraak",
      "de uitnodiging",
      "de afwijzing",
      "het aanbod",
      "het contract",
      "de proeftijd",
      "de startdatum"
    ],
    "Werk zoeken in context": [
      "een vacature zoeken",
      "reageren op",
      "een cv opstellen",
      "een brief schrijven",
      "ervaring hebben met",
      "geschikt zijn voor",
      "zich voorbereiden op",
      "een goede indruk maken",
      "een gesprek voeren",
      "vragen stellen over",
      "beschikbaar zijn vanaf",
      "referenties opgeven",
      "een aanbod accepteren",
      "een aanbod weigeren",
      "uitgenodigd worden voor"
    ]
  },
  "werken": {
    "Werkplek en organisatie": [
      "de afdeling",
      "het team",
      "de leidinggevende",
      "de collega",
      "de klant",
      "de leverancier",
      "het kantoor",
      "de werkplaats",
      "de vergadering",
      "de agenda",
      "de planning",
      "de deadline",
      "het project",
      "de taak",
      "de verantwoordelijkheid"
    ],
    "Arbeidsvoorwaarden": [
      "het contract",
      "de arbeidsovereenkomst",
      "het salaris",
      "het uurloon",
      "de vakantiedag",
      "het verlof",
      "de werktijd",
      "de pauze",
      "de overuren",
      "de proeftijd",
      "de pensioenregeling",
      "de reiskosten",
      "de thuiswerkdag",
      "de cao",
      "de ziekmelding"
    ],
    "Werkhandelingen": [
      "overleggen",
      "afstemmen",
      "plannen",
      "uitvoeren",
      "controleren",
      "rapporteren",
      "opleveren",
      "presenteren",
      "beslissen",
      "verdelen",
      "ondersteunen",
      "verbeteren",
      "oplossen",
      "evalueren",
      "samenwerken"
    ],
    "Werken in context": [
      "verantwoordelijk zijn voor",
      "afspraken maken over",
      "rekening houden met",
      "op tijd opleveren",
      "feedback geven aan",
      "feedback ontvangen van",
      "een probleem oplossen",
      "zich ziek melden",
      "verlof aanvragen",
      "overuren maken",
      "thuiswerken op",
      "deelnemen aan",
      "contact opnemen met",
      "een taak verdelen",
      "prioriteit geven aan"
    ]
  },
  "gemeente": {
    "Documenten en registratie": [
      "de inschrijving",
      "de uitschrijving",
      "de verhuizing",
      "het uittreksel",
      "de geboorteakte",
      "de huwelijksakte",
      "het identiteitsbewijs",
      "het paspoort",
      "de verblijfsvergunning",
      "het rijbewijs",
      "de DigiD",
      "het burgerservicenummer",
      "de aanvraag",
      "het formulier",
      "de handtekening"
    ],
    "Loket en procedure": [
      "het gemeentehuis",
      "het loket",
      "de balie",
      "de afspraak",
      "de ambtenaar",
      "de wachttijd",
      "de behandeling",
      "de beslissing",
      "de termijn",
      "de voorwaarde",
      "het bewijsstuk",
      "de kopie",
      "de betaling",
      "de leges",
      "de bevestiging"
    ],
    "Gemeentelijke diensten": [
      "de afvalinzameling",
      "de parkeervergunning",
      "de bouwvergunning",
      "de bijstand",
      "de belasting",
      "de subsidie",
      "de verkiezing",
      "de openbare ruimte",
      "de melding",
      "de klacht",
      "de jeugdhulp",
      "de schuldhulp",
      "de woningzoekende",
      "de milieustraat",
      "de burgerzaken"
    ],
    "Gemeente in context": [
      "een afspraak maken bij",
      "een aanvraag indienen",
      "een formulier invullen",
      "documenten meenemen",
      "zich inschrijven in",
      "een uittreksel aanvragen",
      "een vergunning nodig hebben",
      "bezwaar maken tegen",
      "een melding doen van",
      "informatie opvragen over",
      "leges betalen voor",
      "binnen acht weken",
      "een beslissing ontvangen",
      "met DigiD inloggen",
      "voldoen aan de voorwaarden"
    ]
  }
};

const deepGrammarTopics = [
  {
    "id": "voorzetsels-plaats",
    "level": "A1",
    "title": "Voorzetsels van plaats",
    "summary": "Voorzetsels tonen waar iemand of iets zich bevindt. De keuze hangt af van ruimte, oppervlak, nabijheid en contact.",
    "rule": "in = binnen · op = op een oppervlak/locatie · aan = bij of bevestigd · bij = in de buurt van",
    "examples": [
      "De sleutels liggen in de la.",
      "De kop staat op tafel.",
      "De fiets staat bij het station.",
      "De jas hangt aan de kapstok."
    ],
    "connections": [
      "Plaats",
      "Wonen",
      "Er + plaats",
      "Woordvolgorde"
    ],
    "sections": [
      {
        "title": "Binnen of op een oppervlak",
        "items": [
          "in de kamer / in Nederland / in de trein",
          "op tafel / op school / op het station",
          "Let op: in de trein, maar op het station."
        ]
      },
      {
        "title": "Positie rond een referentiepunt",
        "items": [
          "voor, achter, naast, tussen, tegenover",
          "boven, onder, bij, tegen",
          "De apotheek ligt tegenover de supermarkt."
        ]
      },
      {
        "title": "Contact en nabijheid",
        "items": [
          "aan de muur = bevestigd of grenzend",
          "bij de dokter = op de locatie van de dokter",
          "tegen de muur = direct contact"
        ]
      }
    ],
    "contrasts": [
      "in de auto ↔ op de fiets",
      "in het ziekenhuis ↔ bij de huisarts",
      "aan zee ↔ op het strand"
    ],
    "mistakes": [
      "Niet: Ik ben in school. Wel: Ik ben op school.",
      "Niet: Het schilderij hangt op de muur. Wel: Het hangt aan de muur."
    ]
  },
  {
    "id": "voorzetsels-richting",
    "level": "A1",
    "title": "Richting en beweging",
    "summary": "Richtingsvoorzetsels tonen een bestemming, oorsprong of route.",
    "rule": "naar + bestemming · uit + oorsprong · door/langs/over + route · tot + eindpunt",
    "examples": [
      "Ik ga naar huis.",
      "Zij komt uit België.",
      "We lopen door het park.",
      "De bus rijdt langs het ziekenhuis."
    ],
    "connections": [
      "Reizen",
      "Werkwoorden van beweging",
      "Waarheen en waarvandaan"
    ],
    "sections": [
      {
        "title": "Bestemming en oorsprong",
        "items": [
          "naar school, naar Amsterdam, naar binnen",
          "uit Colombia, uit de kast, van het werk",
          "van Eindhoven naar Utrecht"
        ]
      },
      {
        "title": "Route",
        "items": [
          "door de tunnel",
          "langs de rivier",
          "over de brug",
          "om het gebouw heen"
        ]
      },
      {
        "title": "Eindpunt en grens",
        "items": [
          "tot het station",
          "tot morgen",
          "tot aan de deur"
        ]
      }
    ],
    "contrasts": [
      "naar huis, maar thuis zijn",
      "uit de trein stappen, maar van de fiets stappen",
      "door het bos lopen, langs het bos rijden"
    ],
    "mistakes": [
      "Niet: Ik ga naar thuis. Wel: Ik ga naar huis / Ik ben thuis."
    ]
  },
  {
    "id": "voorzetsels-tijd",
    "level": "A2",
    "title": "Voorzetsels van tijd",
    "summary": "Tijdvoorzetsels geven een kloktijd, dag, periode, beginpunt, duur of deadline aan.",
    "rule": "om + kloktijd · op + dag/datum · in + maand/jaar/periode · sinds/vanaf + beginpunt",
    "examples": [
      "De les begint om negen uur.",
      "We komen op maandag.",
      "Ik ben in 2021 verhuisd.",
      "Sinds januari werk ik hier."
    ],
    "connections": [
      "Tijd",
      "Perfectum",
      "Planning",
      "Duur"
    ],
    "sections": [
      {
        "title": "Punt in de tijd",
        "items": [
          "om 8.30 uur",
          "op maandag / op 27 juli",
          "in augustus / in 2026 / in de winter"
        ]
      },
      {
        "title": "Begin, einde en duur",
        "items": [
          "sinds vorig jaar = begonnen en nog steeds waar",
          "vanaf morgen = beginpunt in heden of toekomst",
          "van negen tot vijf",
          "tijdens de vergadering"
        ]
      },
      {
        "title": "Vooruit en terugkijken",
        "items": [
          "voor de les",
          "na het werk",
          "binnen twee weken",
          "over drie dagen"
        ]
      }
    ],
    "contrasts": [
      "over drie dagen = drie dagen vanaf nu ↔ binnen drie dagen = uiterlijk na drie dagen",
      "sinds 2024 ↔ vanaf 2024",
      "op tijd ↔ in de tijd"
    ],
    "mistakes": [
      "Niet: in maandag. Wel: op maandag.",
      "Niet: om januari. Wel: in januari."
    ]
  },
  {
    "id": "vaste-voorzetsels",
    "level": "A2",
    "title": "Werkwoord + vast voorzetsel",
    "summary": "Veel werkwoorden vormen samen met één vast voorzetsel een betekenispatroon. Leer de combinatie als één geheel.",
    "rule": "werkwoord + vast voorzetsel + zelfstandig naamwoord / persoon / activiteit",
    "examples": [
      "Ik wacht op de bus.",
      "Zij denkt aan haar examen.",
      "Wij praten over het project.",
      "Hij zorgt voor de kinderen."
    ],
    "connections": [
      "Vaste combinaties",
      "Voorzetselvoorwerp",
      "Er + voorzetsel",
      "Idiomatiek"
    ],
    "sections": [
      {
        "title": "Veelvoorkomende patronen",
        "items": [
          "wachten op · luisteren naar · kijken naar",
          "denken aan · geloven in · zorgen voor",
          "praten over/met · vragen om/naar · deelnemen aan"
        ]
      },
      {
        "title": "Betekenis verandert mee",
        "items": [
          "vragen naar = informatie willen; vragen om = iets verzoeken",
          "denken aan = in gedachten hebben; denken over = mening vormen",
          "zoeken naar = proberen te vinden; zorgen voor = verzorgen"
        ]
      },
      {
        "title": "Met een persoon",
        "items": [
          "Ik wacht op hem.",
          "Zij praat met haar.",
          "Wij luisteren naar de docent."
        ]
      }
    ],
    "contrasts": [
      "vragen naar informatie ↔ vragen om hulp",
      "boos zijn op iemand ↔ boos zijn over iets",
      "praten met iemand ↔ praten over een onderwerp"
    ],
    "mistakes": [
      "Leer niet alleen wachten; leer wachten op.",
      "Gebruik bij personen geen er: Ik wacht op hem, niet Ik wacht erop hem."
    ]
  },
  {
    "id": "er-voorzetsel",
    "level": "B1",
    "title": "Er + voorzetsel",
    "summary": "Bij dingen en ideeën vervangt er vaak het voorzetselvoorwerp. Bij personen gebruik je een persoonlijk voornaamwoord.",
    "rule": "op het plan → erop · aan de afspraak → eraan · met de sleutel → ermee",
    "examples": [
      "Ik wacht erop.",
      "Denk je eraan?",
      "We praten erover.",
      "Ik werk ermee."
    ],
    "connections": [
      "Vaste voorzetsels",
      "Verwijswoorden",
      "Woordvolgorde"
    ],
    "sections": [
      {
        "title": "Samen of gescheiden",
        "items": [
          "Erop, eraan, ermee en ervoor kunnen samen staan.",
          "Met een middenstuk: Ik wacht er al lang op.",
          "In een bijzin: omdat ik er al lang op wacht."
        ]
      },
      {
        "title": "Ding versus persoon",
        "items": [
          "Ik praat over het probleem → Ik praat erover.",
          "Ik praat over mijn collega → Ik praat over hem/haar.",
          "Ik wacht op de uitslag → Ik wacht erop."
        ]
      },
      {
        "title": "Vraagwoorden",
        "items": [
          "Waarop wacht je?",
          "Waarmee open je de deur?",
          "Waaraan denk je?"
        ]
      }
    ],
    "contrasts": [
      "erop ↔ op hem/haar",
      "waarover? ↔ over wie?",
      "daarmee ↔ met die persoon"
    ],
    "mistakes": [
      "Niet: Ik praat over hem als je een ding bedoelt. Gebruik: Ik praat erover."
    ]
  },
  {
    "id": "scheidbaar-hoofdzin",
    "level": "A1",
    "title": "Scheidbare werkwoorden in de hoofdzin",
    "summary": "In een hoofdzin staat de persoonsvorm op plek twee en gaat het losse deel meestal naar het einde.",
    "rule": "onderwerp + werkwoordstam + rest + los deel",
    "examples": [
      "Ik sta om zeven uur op.",
      "Zij belt haar moeder terug.",
      "Wij ruimen de kamer op.",
      "De trein komt om acht uur aan."
    ],
    "connections": [
      "Woordvolgorde",
      "Persoonsvorm",
      "Werkwoordprefix"
    ],
    "sections": [
      {
        "title": "Herken het accent",
        "items": [
          "ópstaan, áánkomen, ópruimen",
          "Het eerste deel draagt vaak de klemtoon.",
          "Niet elk werkwoord met een voorvoegsel is scheidbaar: begrijpen, vertellen."
        ]
      },
      {
        "title": "Inversie",
        "items": [
          "Morgen sta ik vroeg op.",
          "Op het station stapt zij uit.",
          "Na het eten ruimen we de keuken op."
        ]
      },
      {
        "title": "Vraag en bevel",
        "items": [
          "Wanneer sta je op?",
          "Bel je mij terug?",
          "Sta op! · Kom binnen! · Schrijf het op!"
        ]
      }
    ],
    "contrasts": [
      "Ik bel hem op ↔ Ik begrijp hem (niet scheidbaar)",
      "Zij komt aan ↔ Zij ontvangt een brief"
    ],
    "mistakes": [
      "Niet: Ik opsta om zeven uur. Wel: Ik sta om zeven uur op."
    ]
  },
  {
    "id": "scheidbaar-voltooid",
    "level": "A2",
    "title": "Scheidbare werkwoorden met perfectum en infinitief",
    "summary": "In het voltooid deelwoord staat ge meestal tussen het voorvoegsel en de stam. Bij een infinitief blijft het werkwoord samen.",
    "rule": "opbellen → opgebeld · aankomen → aangekomen · moeten opbellen",
    "examples": [
      "Ik heb de dokter opgebeld.",
      "De trein is aangekomen.",
      "Ik moet morgen vroeg opstaan.",
      "Zij wil de kinderen ophalen."
    ],
    "connections": [
      "Perfectum",
      "Modale werkwoorden",
      "Hebben of zijn"
    ],
    "sections": [
      {
        "title": "Voltooid deelwoord",
        "items": [
          "op + ge + bel + d = opgebeld",
          "aan + ge + kom + en = aangekomen",
          "uit + ge + nodig + d = uitgenodigd"
        ]
      },
      {
        "title": "Met een modaal werkwoord",
        "items": [
          "Ik moet vroeg opstaan.",
          "Wij kunnen de kast meenemen.",
          "Zij wil het formulier invullen."
        ]
      },
      {
        "title": "Met te",
        "items": [
          "Ik probeer vroeg op te staan.",
          "Hij vergeet de deur op slot te doen.",
          "We beginnen de kamer op te ruimen."
        ]
      }
    ],
    "contrasts": [
      "Ik heb hem opgebeld ↔ Ik moest hem opbellen",
      "Ik probeer op te staan ↔ omdat ik opsta"
    ],
    "mistakes": [
      "Niet: ge-op-beld. Wel: opgebeld.",
      "Niet: om te opstaan. Wel: om op te staan."
    ]
  },
  {
    "id": "scheidbaar-bijzin",
    "level": "A2",
    "title": "Scheidbare werkwoorden in de bijzin",
    "summary": "In een bijzin staat de vervoegde vorm aan het einde en worden de delen weer samengevoegd.",
    "rule": "voegwoord + onderwerp + rest + scheidbaar werkwoord",
    "examples": [
      "Ik ben moe omdat ik vroeg opsta.",
      "Bel me als de trein aankomt.",
      "Ze zegt dat ze de kinderen ophaalt."
    ],
    "connections": [
      "Bijzin",
      "Voegwoorden",
      "Woordvolgorde"
    ],
    "sections": [
      {
        "title": "Omdat, dat en als",
        "items": [
          "omdat ik vroeg opsta",
          "dat zij haar moeder terugbelt",
          "als de trein aankomt"
        ]
      },
      {
        "title": "Twee werkwoorden aan het einde",
        "items": [
          "omdat ik vroeg moet opstaan",
          "dat zij de kinderen wil ophalen",
          "als hij het formulier kan invullen"
        ]
      },
      {
        "title": "Perfectum in een bijzin",
        "items": [
          "omdat ik hem heb opgebeld",
          "nadat de trein is aangekomen",
          "dat zij de kamer heeft opgeruimd"
        ]
      }
    ],
    "contrasts": [
      "Ik sta vroeg op. ↔ omdat ik vroeg opsta.",
      "Zij haalt hem op. ↔ dat zij hem ophaalt."
    ],
    "mistakes": [
      "Niet: omdat ik sta vroeg op. Wel: omdat ik vroeg opsta."
    ]
  },
  {
    "id": "voegwoorden-nevenschikking",
    "level": "A1",
    "title": "En, maar, want, dus en of",
    "summary": "Nevenschikkende voegwoorden verbinden gelijkwaardige woorden of hoofdzinnen. De woordvolgorde blijft die van een hoofdzin.",
    "rule": "hoofdzin + voegwoord + onderwerp + persoonsvorm + rest",
    "examples": [
      "Ik kook en hij dekt de tafel.",
      "Ik wil gaan, maar ik heb geen tijd.",
      "Ik blijf thuis, want ik ben ziek.",
      "Het regent, dus ik neem een jas mee."
    ],
    "connections": [
      "Hoofdzin",
      "Reden en gevolg",
      "Contrast"
    ],
    "sections": [
      {
        "title": "Betekenis",
        "items": [
          "en = toevoeging",
          "maar = tegenstelling",
          "want = reden",
          "dus = gevolg",
          "of = keuze"
        ]
      },
      {
        "title": "Woordvolgorde",
        "items": [
          "want ik ben ziek",
          "dus ik blijf thuis",
          "maar hij komt later"
        ]
      },
      {
        "title": "Komma en ritme",
        "items": [
          "Voor maar, want en dus staat vaak een komma.",
          "Bij twee korte delen met en is een komma meestal niet nodig."
        ]
      }
    ],
    "contrasts": [
      "want + hoofdzin ↔ omdat + bijzin",
      "dus + hoofdzin ↔ daarom + inversie"
    ],
    "mistakes": [
      "Niet: want ik ziek ben. Wel: want ik ben ziek."
    ]
  },
  {
    "id": "voegwoorden-onderschikking",
    "level": "A2",
    "title": "Omdat, als, dat, terwijl en hoewel",
    "summary": "Onderschikkende voegwoorden beginnen een bijzin. De vervoegde werkwoorden gaan naar het einde.",
    "rule": "voegwoord + onderwerp + rest + werkwoord(en)",
    "examples": [
      "Ik blijf thuis omdat ik ziek ben.",
      "Als het regent, neem ik de bus.",
      "Hij zegt dat hij morgen komt.",
      "Hoewel ze moe is, werkt ze door."
    ],
    "connections": [
      "Bijzin",
      "Werkwoordcluster",
      "Reden",
      "Voorwaarde"
    ],
    "sections": [
      {
        "title": "Reden en gevolg",
        "items": [
          "omdat = reden",
          "doordat = oorzaak die iets veroorzaakt",
          "zodat = bedoeld of werkelijk gevolg"
        ]
      },
      {
        "title": "Tijd en voorwaarde",
        "items": [
          "als = voorwaarde of herhaling",
          "wanneer = tijdstip of formele voorwaarde",
          "voordat, nadat, totdat, zodra"
        ]
      },
      {
        "title": "Contrast en concessie",
        "items": [
          "terwijl = gelijktijdigheid of contrast",
          "hoewel = onverwacht contrast",
          "ook al = concessie in spreektaal"
        ]
      }
    ],
    "contrasts": [
      "want ik ben ziek ↔ omdat ik ziek ben",
      "als het regent ↔ toen het regende",
      "hoewel hij moe is ↔ maar hij is moe"
    ],
    "mistakes": [
      "Niet: omdat ik ben ziek. Wel: omdat ik ziek ben."
    ]
  },
  {
    "id": "voegwoorden-betekenis",
    "level": "B1",
    "title": "Kies het voegwoord op betekenis",
    "summary": "De juiste verbinding hangt af van de logische relatie: reden, oorzaak, doel, gevolg, voorwaarde, tijd, contrast of toevoeging.",
    "rule": "bepaal eerst de relatie, kies daarna de verbindingsvorm en woordvolgorde",
    "examples": [
      "Ik oefen veel zodat ik beter kan spreken.",
      "Tenzij het regent, gaan we fietsen.",
      "Nadat ik had gebeld, stuurde ik een e-mail."
    ],
    "connections": [
      "Tekstopbouw",
      "Argumentatie",
      "Register"
    ],
    "sections": [
      {
        "title": "Reden, oorzaak, doel en gevolg",
        "items": [
          "omdat / want = reden",
          "doordat = oorzaak",
          "om … te / zodat = doel",
          "daardoor / zodat = gevolg"
        ]
      },
      {
        "title": "Voorwaarde en beperking",
        "items": [
          "als / indien = voorwaarde",
          "tenzij = behalve als",
          "mits = alleen als aan een eis is voldaan"
        ]
      },
      {
        "title": "Tekstrelaties",
        "items": [
          "bovendien = toevoeging",
          "echter = formeel contrast",
          "namelijk = uitleg achteraf",
          "daarentegen = sterke tegenstelling"
        ]
      }
    ],
    "contrasts": [
      "zodat ik kan leren = doel/gevolg ↔ omdat ik wil leren = reden",
      "tenzij = behalve als ↔ mits = op voorwaarde dat"
    ],
    "mistakes": [
      "Zet een bijwoordelijke connector vaak op plek 1 met inversie: Daarom blijf ik thuis."
    ]
  },
  {
    "id": "zinsvolgorde-werkwoordgroep",
    "level": "B1",
    "title": "Werkwoorden aan het einde van de zin",
    "summary": "Bij modale werkwoorden, perfectum, passief en bijzinnen kunnen twee of meer werkwoorden samen een werkwoordgroep vormen.",
    "rule": "hoofdzin: finiet op plek 2 · bijzin: werkwoordgroep aan het einde",
    "examples": [
      "Ik wil morgen vroeg vertrekken.",
      "Ik heb de aanvraag moeten invullen.",
      "Hij zegt dat hij morgen wil vertrekken."
    ],
    "connections": [
      "Modale werkwoorden",
      "Perfectum",
      "Bijzin",
      "Scheidbare werkwoorden"
    ],
    "sections": [
      {
        "title": "Hoofdzin",
        "items": [
          "Ik wil het formulier invullen.",
          "Ik heb de aanvraag ingevuld.",
          "Ik ben naar huis gegaan."
        ]
      },
      {
        "title": "Bijzin",
        "items": [
          "omdat ik het formulier wil invullen",
          "omdat ik de aanvraag heb ingevuld",
          "omdat ik naar huis ben gegaan"
        ]
      },
      {
        "title": "Met een scheidbaar werkwoord",
        "items": [
          "Ik moet vroeg opstaan.",
          "omdat ik vroeg moet opstaan",
          "Ik heb vroeg moeten opstaan."
        ]
      }
    ],
    "contrasts": [
      "hoofdzin: ik bel hem op ↔ bijzin: omdat ik hem opbel"
    ],
    "mistakes": [
      "Plaats niet automatisch elk werkwoord helemaal achteraan in een hoofdzin; alleen niet-finiete delen gaan naar het einde."
    ]
  },
  {
    "id": "idiomatische-voorzetsels",
    "level": "B1",
    "title": "Idiomatische voorzetseluitdrukkingen",
    "summary": "Veel alledaagse betekenissen zitten in vaste combinaties die je niet woord voor woord kunt voorspellen.",
    "rule": "leer de hele woordgroep, inclusief lidwoord en voorzetsel",
    "examples": [
      "Ik ben op tijd.",
      "Zij is aan de beurt.",
      "Hij is in de war.",
      "We doen het met de hand."
    ],
    "connections": [
      "Idiomatiek",
      "Vaste combinaties",
      "Spreektaal"
    ],
    "sections": [
      {
        "title": "Toestand",
        "items": [
          "in de war",
          "op de hoogte",
          "onder druk",
          "aan de beurt",
          "in orde"
        ]
      },
      {
        "title": "Manier en middel",
        "items": [
          "met de hand",
          "uit het hoofd",
          "op eigen kracht",
          "per ongeluk",
          "bij toeval"
        ]
      },
      {
        "title": "Tijd en perspectief",
        "items": [
          "voor het eerst",
          "van tijd tot tijd",
          "op den duur",
          "naar mijn mening",
          "uit ervaring"
        ]
      }
    ],
    "contrasts": [
      "op tijd = niet te laat ↔ in de tijd = binnen een historische periode"
    ],
    "mistakes": [
      "Vertaal deze groepen niet letterlijk; onthoud betekenis en gebruik als één blok."
    ]
  }
];

const prepositionEntries = [
  {
    "form": "in",
    "category": "plaats",
    "meaning": "binnen een ruimte, gebied of periode",
    "pattern": "in de kamer · in Nederland",
    "example": "De kinderen spelen in de tuin."
  },
  {
    "form": "op",
    "category": "plaats",
    "meaning": "op een oppervlak, activiteit of institutionele locatie",
    "pattern": "op tafel · op school",
    "example": "Mijn telefoon ligt op het bureau."
  },
  {
    "form": "aan",
    "category": "plaats",
    "meaning": "bij, grenzend aan of bevestigd aan",
    "pattern": "aan de muur · aan zee",
    "example": "De foto hangt aan de muur."
  },
  {
    "form": "bij",
    "category": "plaats",
    "meaning": "in de buurt van of op de locatie van iemand",
    "pattern": "bij het station · bij de dokter",
    "example": "Ik wacht bij de ingang."
  },
  {
    "form": "naast",
    "category": "plaats",
    "meaning": "direct aan de zijkant van",
    "pattern": "naast het huis",
    "example": "De apotheek ligt naast de supermarkt."
  },
  {
    "form": "tussen",
    "category": "plaats",
    "meaning": "in de ruimte die twee of meer zaken scheidt",
    "pattern": "tussen de stoelen",
    "example": "De bank staat tussen de ramen."
  },
  {
    "form": "tegenover",
    "category": "plaats",
    "meaning": "aan de andere kant van",
    "pattern": "tegenover het station",
    "example": "Het café ligt tegenover de bibliotheek."
  },
  {
    "form": "voor",
    "category": "plaats/tijd",
    "meaning": "aan de voorkant van of eerder dan",
    "pattern": "voor de deur · voor de les",
    "example": "We ontmoeten elkaar voor het gebouw."
  },
  {
    "form": "achter",
    "category": "plaats",
    "meaning": "aan de achterkant van",
    "pattern": "achter het huis",
    "example": "Er staat een schuur achter de woning."
  },
  {
    "form": "boven",
    "category": "plaats",
    "meaning": "hoger dan",
    "pattern": "boven de tafel",
    "example": "De lamp hangt boven de tafel."
  },
  {
    "form": "onder",
    "category": "plaats",
    "meaning": "lager dan of onder invloed van",
    "pattern": "onder de stoel · onder druk",
    "example": "De tas ligt onder de stoel."
  },
  {
    "form": "tegen",
    "category": "plaats/relatie",
    "meaning": "in contact met of in oppositie tot",
    "pattern": "tegen de muur · tegen het plan",
    "example": "Zet de fiets tegen de muur."
  },
  {
    "form": "rond",
    "category": "plaats/tijd",
    "meaning": "om iets heen of ongeveer",
    "pattern": "rond het park · rond acht uur",
    "example": "We wandelen rond het meer."
  },
  {
    "form": "binnen",
    "category": "plaats/tijd",
    "meaning": "aan de binnenkant of uiterlijk voor een termijn",
    "pattern": "binnen het gebouw · binnen een week",
    "example": "U krijgt binnen tien dagen antwoord."
  },
  {
    "form": "buiten",
    "category": "plaats",
    "meaning": "niet binnen",
    "pattern": "buiten de stad",
    "example": "De kinderen spelen buiten het huis."
  },
  {
    "form": "naar",
    "category": "richting",
    "meaning": "bestemming",
    "pattern": "naar huis · naar Utrecht",
    "example": "Wij reizen morgen naar Amsterdam."
  },
  {
    "form": "uit",
    "category": "oorsprong",
    "meaning": "van binnen naar buiten of herkomst",
    "pattern": "uit de kast · uit Spanje",
    "example": "Hij komt uit Colombia."
  },
  {
    "form": "van",
    "category": "oorsprong/bezit",
    "meaning": "beginpunt, herkomst of bezit",
    "pattern": "van school · van Maria",
    "example": "Ik kom net van mijn werk."
  },
  {
    "form": "tot",
    "category": "grens",
    "meaning": "eindpunt in ruimte of tijd",
    "pattern": "tot het station · tot vrijdag",
    "example": "De winkel is open tot zes uur."
  },
  {
    "form": "door",
    "category": "route/oorzaak",
    "meaning": "via het binnenste of als oorzaak",
    "pattern": "door de tunnel · door de storm",
    "example": "We rijden door het centrum."
  },
  {
    "form": "langs",
    "category": "route",
    "meaning": "parallel aan en voorbij",
    "pattern": "langs de rivier",
    "example": "De bus rijdt langs het ziekenhuis."
  },
  {
    "form": "over",
    "category": "route/onderwerp",
    "meaning": "van de ene kant naar de andere of betreffende",
    "pattern": "over de brug · over het plan",
    "example": "We lopen over het plein."
  },
  {
    "form": "om",
    "category": "tijd/route/doel",
    "meaning": "kloktijd, rondom of verzoek",
    "pattern": "om negen uur · om het huis",
    "example": "De les begint om half tien."
  },
  {
    "form": "via",
    "category": "route/middel",
    "meaning": "met een tussenpunt of kanaal",
    "pattern": "via Rotterdam · via e-mail",
    "example": "Stuur het document via e-mail."
  },
  {
    "form": "op",
    "category": "tijd",
    "meaning": "dag, datum of specifiek moment",
    "pattern": "op maandag · op 5 mei",
    "example": "De cursus begint op dinsdag."
  },
  {
    "form": "in",
    "category": "tijd",
    "meaning": "maand, jaar, seizoen of duur tot een gebeurtenis",
    "pattern": "in juli · in 2026",
    "example": "Wij verhuizen in september."
  },
  {
    "form": "om",
    "category": "tijd",
    "meaning": "exacte kloktijd",
    "pattern": "om 8.30 uur",
    "example": "De afspraak is om kwart over twee."
  },
  {
    "form": "sinds",
    "category": "tijd",
    "meaning": "beginpunt dat tot nu doorloopt",
    "pattern": "sinds januari",
    "example": "Ik woon hier sinds 2022."
  },
  {
    "form": "vanaf",
    "category": "tijd/plaats",
    "meaning": "beginpunt vanaf nu of een genoemd punt",
    "pattern": "vanaf morgen · vanaf het station",
    "example": "Vanaf maandag werk ik thuis."
  },
  {
    "form": "tijdens",
    "category": "tijd",
    "meaning": "gedurende een gebeurtenis",
    "pattern": "tijdens de vergadering",
    "example": "Tijdens de les staat mijn telefoon uit."
  },
  {
    "form": "na",
    "category": "tijd/volgorde",
    "meaning": "later dan",
    "pattern": "na het werk",
    "example": "Na de lunch bel ik je terug."
  },
  {
    "form": "voor",
    "category": "tijd",
    "meaning": "eerder dan",
    "pattern": "voor de afspraak",
    "example": "Lees de tekst voor de les."
  },
  {
    "form": "binnen",
    "category": "deadline",
    "meaning": "uiterlijk vóór het einde van een termijn",
    "pattern": "binnen twee weken",
    "example": "U moet binnen veertien dagen betalen."
  },
  {
    "form": "over",
    "category": "toekomst",
    "meaning": "een periode gerekend vanaf nu",
    "pattern": "over drie dagen",
    "example": "Over een uur vertrekt de trein."
  },
  {
    "form": "gedurende",
    "category": "tijd formeel",
    "meaning": "tijdens een langere periode",
    "pattern": "gedurende het project",
    "example": "Gedurende de winter is het park gesloten."
  },
  {
    "form": "tegen",
    "category": "tijd",
    "meaning": "ongeveer vlak vóór een tijdstip",
    "pattern": "tegen de avond",
    "example": "Tegen vijf uur ben ik thuis."
  }
];

const fixedPrepositionCombinations = [
  {
    "combination": "wachten op",
    "meaning": "iets of iemand verwachten",
    "example": "Ik wacht op de bus."
  },
  {
    "combination": "luisteren naar",
    "meaning": "aandacht geven aan geluid of spreker",
    "example": "Luister goed naar de uitleg."
  },
  {
    "combination": "kijken naar",
    "meaning": "de ogen richten op",
    "example": "We kijken naar het nieuws."
  },
  {
    "combination": "zoeken naar",
    "meaning": "proberen te vinden",
    "example": "Ik zoek naar een betaalbare woning."
  },
  {
    "combination": "vragen naar",
    "meaning": "informatie willen over",
    "example": "Zij vraagt naar de openingstijden."
  },
  {
    "combination": "vragen om",
    "meaning": "iets verzoeken",
    "example": "Hij vraagt om hulp."
  },
  {
    "combination": "denken aan",
    "meaning": "in gedachten hebben",
    "example": "Denk aan je afspraak."
  },
  {
    "combination": "denken over",
    "meaning": "een mening vormen",
    "example": "Wat denk je over dit plan?"
  },
  {
    "combination": "praten met",
    "meaning": "een gesprek voeren met een persoon",
    "example": "Ik praat met mijn leidinggevende."
  },
  {
    "combination": "praten over",
    "meaning": "een onderwerp bespreken",
    "example": "We praten over de planning."
  },
  {
    "combination": "zorgen voor",
    "meaning": "verzorgen of regelen",
    "example": "Zij zorgt voor de kinderen."
  },
  {
    "combination": "geloven in",
    "meaning": "vertrouwen op bestaan of mogelijkheid",
    "example": "Ik geloof in een goede oplossing."
  },
  {
    "combination": "beginnen met",
    "meaning": "als eerste activiteit doen",
    "example": "We beginnen met hoofdstuk drie."
  },
  {
    "combination": "stoppen met",
    "meaning": "een activiteit beëindigen",
    "example": "Hij stopt met roken."
  },
  {
    "combination": "doorgaan met",
    "meaning": "een activiteit voortzetten",
    "example": "Ga door met de oefening."
  },
  {
    "combination": "deelnemen aan",
    "meaning": "meedoen met",
    "example": "Zij neemt deel aan de cursus."
  },
  {
    "combination": "reageren op",
    "meaning": "antwoord geven op",
    "example": "Ik reageer op de vacature."
  },
  {
    "combination": "solliciteren naar",
    "meaning": "kandidaat worden voor een functie",
    "example": "Hij solliciteert naar een functie als monteur."
  },
  {
    "combination": "schrijven over",
    "meaning": "een onderwerp in tekst behandelen",
    "example": "We schrijven over onze woonplaats."
  },
  {
    "combination": "schrijven aan",
    "meaning": "een brief of bericht richten aan",
    "example": "Ik schrijf aan de gemeente."
  },
  {
    "combination": "horen bij",
    "meaning": "deel zijn van",
    "example": "Deze sleutel hoort bij de voordeur."
  },
  {
    "combination": "passen bij",
    "meaning": "goed combineren of geschikt zijn",
    "example": "Deze jas past bij je schoenen."
  },
  {
    "combination": "afhankelijk zijn van",
    "meaning": "bepaald worden door",
    "example": "De prijs is afhankelijk van het aantal uren."
  },
  {
    "combination": "trots zijn op",
    "meaning": "tevreden zijn over een prestatie",
    "example": "Zij is trots op haar diploma."
  },
  {
    "combination": "bang zijn voor",
    "meaning": "angst voelen voor",
    "example": "Het kind is bang voor honden."
  },
  {
    "combination": "boos zijn op",
    "meaning": "boosheid richten op een persoon",
    "example": "Hij is boos op zijn collega."
  },
  {
    "combination": "boos zijn over",
    "meaning": "boosheid voelen over een situatie",
    "example": "We zijn boos over de vertraging."
  },
  {
    "combination": "tevreden zijn met",
    "meaning": "iets goed genoeg vinden",
    "example": "Ik ben tevreden met het resultaat."
  },
  {
    "combination": "tevreden zijn over",
    "meaning": "positief oordelen over een ervaring",
    "example": "Zij is tevreden over de service."
  },
  {
    "combination": "geïnteresseerd zijn in",
    "meaning": "belangstelling hebben voor",
    "example": "Ik ben geïnteresseerd in techniek."
  },
  {
    "combination": "gewend zijn aan",
    "meaning": "iets normaal vinden door ervaring",
    "example": "Wij zijn gewend aan het weer."
  },
  {
    "combination": "verantwoordelijk zijn voor",
    "meaning": "de plicht hebben iets te regelen",
    "example": "Hij is verantwoordelijk voor het project."
  },
  {
    "combination": "rekening houden met",
    "meaning": "iets meenemen in een beslissing",
    "example": "Houd rekening met de reistijd."
  },
  {
    "combination": "behoefte hebben aan",
    "meaning": "iets nodig hebben",
    "example": "Ik heb behoefte aan duidelijke uitleg."
  },
  {
    "combination": "invloed hebben op",
    "meaning": "een effect hebben op",
    "example": "Slaap heeft invloed op je concentratie."
  },
  {
    "combination": "bestaan uit",
    "meaning": "samengesteld zijn uit",
    "example": "De cursus bestaat uit acht thema’s."
  },
  {
    "combination": "beschikken over",
    "meaning": "iets beschikbaar hebben",
    "example": "Het kantoor beschikt over een lift."
  },
  {
    "combination": "last hebben van",
    "meaning": "hinder ervaren door",
    "example": "Ik heb last van mijn rug."
  },
  {
    "combination": "zich voorbereiden op",
    "meaning": "vooraf oefenen of regelen",
    "example": "Zij bereidt zich voor op het examen."
  },
  {
    "combination": "zich aanmelden voor",
    "meaning": "officieel inschrijven",
    "example": "Ik meld me aan voor de cursus."
  },
  {
    "combination": "zich afmelden voor",
    "meaning": "laten weten dat je niet komt",
    "example": "Hij meldt zich af voor de vergadering."
  },
  {
    "combination": "zich zorgen maken over",
    "meaning": "ongerust zijn over",
    "example": "De ouders maken zich zorgen over hun kind."
  },
  {
    "combination": "zich vergissen in",
    "meaning": "een verkeerde inschatting maken",
    "example": "Ik heb me vergist in de datum."
  },
  {
    "combination": "zich concentreren op",
    "meaning": "aandacht richten op",
    "example": "Concentreer je op de hoofdvraag."
  },
  {
    "combination": "contact opnemen met",
    "meaning": "iemand benaderen",
    "example": "Neem contact op met de klantenservice."
  },
  {
    "combination": "gebruikmaken van",
    "meaning": "iets benutten",
    "example": "U kunt gebruikmaken van de regeling."
  },
  {
    "combination": "kiezen voor",
    "meaning": "een optie selecteren",
    "example": "Wij kiezen voor openbaar vervoer."
  },
  {
    "combination": "twijfelen aan",
    "meaning": "niet zeker zijn van",
    "example": "Ik twijfel aan de juistheid van het adres."
  },
  {
    "combination": "waarschuwen voor",
    "meaning": "iemand attent maken op gevaar",
    "example": "De arts waarschuwt voor bijwerkingen."
  },
  {
    "combination": "beschermen tegen",
    "meaning": "veilig houden voor iets",
    "example": "Deze jas beschermt tegen de regen."
  },
  {
    "combination": "klagen over",
    "meaning": "ontevredenheid uiten over",
    "example": "De klant klaagt over de levering."
  },
  {
    "combination": "informeren naar",
    "meaning": "beleefd informatie vragen",
    "example": "Ik informeer naar de voorwaarden."
  },
  {
    "combination": "verwijzen naar",
    "meaning": "doorsturen of noemen",
    "example": "De huisarts verwijst naar een specialist."
  },
  {
    "combination": "bijdragen aan",
    "meaning": "helpen bij een resultaat",
    "example": "Iedereen draagt bij aan het project."
  },
  {
    "combination": "leiden tot",
    "meaning": "als gevolg hebben",
    "example": "De storing leidt tot vertraging."
  },
  {
    "combination": "vergelijken met",
    "meaning": "naast iets anders beoordelen",
    "example": "Vergelijk de prijs met die van gisteren."
  },
  {
    "combination": "verschillen van",
    "meaning": "niet hetzelfde zijn als",
    "example": "Deze maat verschilt van de vorige."
  },
  {
    "combination": "dromen van",
    "meaning": "sterk verlangen naar",
    "example": "Zij droomt van een eigen bedrijf."
  },
  {
    "combination": "herinneren aan",
    "meaning": "iemand iets opnieuw laten weten",
    "example": "Herinner mij aan de afspraak."
  },
  {
    "combination": "profiteren van",
    "meaning": "voordeel hebben van",
    "example": "Studenten profiteren van de korting."
  },
  {
    "combination": "stemmen op",
    "meaning": "een kandidaat of partij kiezen",
    "example": "Zij stemt op een lokale partij."
  },
  {
    "combination": "betalen voor",
    "meaning": "geld geven voor iets",
    "example": "We betalen voor de reparatie."
  },
  {
    "combination": "betalen aan",
    "meaning": "geld geven aan een ontvanger",
    "example": "Ik betaal de huur aan de verhuurder."
  },
  {
    "combination": "lenen van",
    "meaning": "tijdelijk krijgen van iemand",
    "example": "Ik leen een boor van de buurman."
  },
  {
    "combination": "lenen aan",
    "meaning": "tijdelijk geven aan iemand",
    "example": "Ik leen mijn fiets aan mijn broer."
  },
  {
    "combination": "feliciteren met",
    "meaning": "iemand gelukwensen vanwege iets",
    "example": "Ik feliciteer je met je nieuwe baan."
  },
  {
    "combination": "bedanken voor",
    "meaning": "dank uitspreken vanwege iets",
    "example": "Bedankt voor je hulp."
  },
  {
    "combination": "uitnodigen voor",
    "meaning": "vragen om ergens te komen",
    "example": "We nodigen de buren uit voor koffie."
  },
  {
    "combination": "herstellen van",
    "meaning": "beter worden na ziekte of schade",
    "example": "Hij herstelt van de operatie."
  },
  {
    "combination": "slagen voor",
    "meaning": "een examen succesvol afronden",
    "example": "Zij is geslaagd voor het examen."
  },
  {
    "combination": "zakken voor",
    "meaning": "een examen niet halen",
    "example": "Hij is gezakt voor zijn rijexamen."
  },
  {
    "combination": "werken aan",
    "meaning": "tijd besteden aan verbetering",
    "example": "We werken aan een oplossing."
  },
  {
    "combination": "werken bij",
    "meaning": "in dienst zijn van een organisatie",
    "example": "Zij werkt bij de gemeente."
  },
  {
    "combination": "werken als",
    "meaning": "een beroep uitoefenen",
    "example": "Hij werkt als data-engineer."
  },
  {
    "combination": "wonen in",
    "meaning": "een plaats als woonomgeving hebben",
    "example": "Wij wonen in Noord-Brabant."
  },
  {
    "combination": "wonen bij",
    "meaning": "in hetzelfde huis als iemand",
    "example": "Hij woont bij zijn ouders."
  },
  {
    "combination": "gaan naar",
    "meaning": "bewegen richting bestemming",
    "example": "Ik ga naar de huisarts."
  },
  {
    "combination": "komen uit",
    "meaning": "herkomst hebben",
    "example": "Zij komt uit Duitsland."
  },
  {
    "combination": "vertrekken van",
    "meaning": "een beginpunt verlaten",
    "example": "De trein vertrekt van spoor vijf."
  },
  {
    "combination": "aankomen op",
    "meaning": "een locatie bereiken",
    "example": "We komen aan op het station."
  },
  {
    "combination": "overstappen op",
    "meaning": "een ander vervoermiddel nemen",
    "example": "In Utrecht stappen we over op de trein."
  },
  {
    "combination": "instappen in",
    "meaning": "een vervoermiddel binnengaan",
    "example": "Stap in de bus."
  },
  {
    "combination": "uitstappen bij",
    "meaning": "een vervoermiddel verlaten op een plek",
    "example": "U stapt uit bij de markt."
  }
];

const separableVerbBank = [
  {
    "infinitive": "aankomen",
    "prefix": "aan",
    "meaning": "een bestemming bereiken",
    "example": "De trein komt om acht uur aan.",
    "models": {
      "main": "De trein komt om acht uur aan.",
      "inversion": "Om acht uur komt de trein aan.",
      "modal": "De trein moet op tijd aankomen.",
      "perfect": "De trein is op tijd aangekomen.",
      "subordinate": "Bel me als de trein aankomt.",
      "te": "De trein probeert op tijd aan te komen."
    }
  },
  {
    "infinitive": "aankleden",
    "prefix": "aan",
    "meaning": "kleren aandoen",
    "example": "Ik kleed mijn dochter aan."
  },
  {
    "infinitive": "aanmelden",
    "prefix": "aan",
    "meaning": "inschrijven",
    "example": "Zij meldt zich voor de cursus aan.",
    "models": {
      "main": "Ik meld me vandaag voor de cursus aan.",
      "inversion": "Vandaag meld ik me voor de cursus aan.",
      "modal": "Ik moet me vandaag voor de cursus aanmelden.",
      "perfect": "Ik heb me voor de cursus aangemeld.",
      "subordinate": "Hij vraagt of ik me aanmeld.",
      "te": "Vergeet niet je aan te melden."
    }
  },
  {
    "infinitive": "aanzetten",
    "prefix": "aan",
    "meaning": "een apparaat starten",
    "example": "Zet de verwarming aan."
  },
  {
    "infinitive": "afmaken",
    "prefix": "af",
    "meaning": "voltooien",
    "example": "Ik maak de opdracht vanavond af."
  },
  {
    "infinitive": "afspreken",
    "prefix": "af",
    "meaning": "een afspraak maken",
    "example": "Wij spreken zaterdag af.",
    "models": {
      "main": "Wij spreken zaterdag in de stad af.",
      "inversion": "Zaterdag spreken wij in de stad af.",
      "modal": "Wij moeten een tijd en plaats afspreken.",
      "perfect": "Wij hebben zaterdag afgesproken.",
      "subordinate": "Ik weet waar we zaterdag afspreken.",
      "te": "Wij proberen snel af te spreken."
    }
  },
  {
    "infinitive": "afwassen",
    "prefix": "af",
    "meaning": "servies schoonmaken",
    "example": "Hij wast na het eten af."
  },
  {
    "infinitive": "afzeggen",
    "prefix": "af",
    "meaning": "laten weten dat iets niet doorgaat",
    "example": "Ik zeg de afspraak af."
  },
  {
    "infinitive": "binnenkomen",
    "prefix": "binnen",
    "meaning": "naar binnen gaan",
    "example": "De docent komt het lokaal binnen."
  },
  {
    "infinitive": "binnenbrengen",
    "prefix": "binnen",
    "meaning": "naar binnen brengen",
    "example": "Breng de dozen binnen."
  },
  {
    "infinitive": "doorgaan",
    "prefix": "door",
    "meaning": "niet stoppen",
    "example": "De les gaat na de pauze door."
  },
  {
    "infinitive": "doorwerken",
    "prefix": "door",
    "meaning": "blijven werken",
    "example": "Wij werken nog een uur door."
  },
  {
    "infinitive": "invullen",
    "prefix": "in",
    "meaning": "gegevens schrijven in een formulier",
    "example": "Vul dit formulier in.",
    "models": {
      "main": "Ik vul het formulier online in.",
      "inversion": "Online vul ik het formulier in.",
      "modal": "Ik moet het formulier invullen.",
      "perfect": "Ik heb het formulier ingevuld.",
      "subordinate": "Controleer of je het formulier invult.",
      "te": "Probeer het formulier zelf in te vullen."
    }
  },
  {
    "infinitive": "inleveren",
    "prefix": "in",
    "meaning": "werk of documenten afgeven",
    "example": "Je levert het verslag vrijdag in."
  },
  {
    "infinitive": "inpakken",
    "prefix": "in",
    "meaning": "in papier of dozen doen",
    "example": "We pakken de boeken in."
  },
  {
    "infinitive": "inschrijven",
    "prefix": "in",
    "meaning": "officieel registreren",
    "example": "Ik schrijf me bij de gemeente in."
  },
  {
    "infinitive": "instappen",
    "prefix": "in",
    "meaning": "een vervoermiddel binnengaan",
    "example": "De passagiers stappen in."
  },
  {
    "infinitive": "klaarmaken",
    "prefix": "klaar",
    "meaning": "voorbereiden",
    "example": "Ik maak het eten klaar."
  },
  {
    "infinitive": "langskomen",
    "prefix": "langs",
    "meaning": "een kort bezoek brengen",
    "example": "De monteur komt morgen langs."
  },
  {
    "infinitive": "meebrengen",
    "prefix": "mee",
    "meaning": "met zich meenemen",
    "example": "Breng je paspoort mee."
  },
  {
    "infinitive": "meedoen",
    "prefix": "mee",
    "meaning": "deelnemen",
    "example": "Doe je met de oefening mee?"
  },
  {
    "infinitive": "meegaan",
    "prefix": "mee",
    "meaning": "samen gaan",
    "example": "Mijn buurvrouw gaat mee."
  },
  {
    "infinitive": "meenemen",
    "prefix": "mee",
    "meaning": "bij zich dragen naar een andere plek",
    "example": "Neem een pen mee.",
    "models": {
      "main": "Ik neem morgen mijn paspoort mee.",
      "inversion": "Morgen neem ik mijn paspoort mee.",
      "modal": "Ik moet mijn paspoort meenemen.",
      "perfect": "Ik heb mijn paspoort meegenomen.",
      "subordinate": "Ik controleer of ik mijn paspoort meeneem.",
      "te": "Ik probeer alles mee te nemen."
    }
  },
  {
    "infinitive": "nakijken",
    "prefix": "na",
    "meaning": "controleren",
    "example": "De docent kijkt de toets na."
  },
  {
    "infinitive": "navragen",
    "prefix": "na",
    "meaning": "extra informatie vragen",
    "example": "Ik vraag het bij de administratie na."
  },
  {
    "infinitive": "omdraaien",
    "prefix": "om",
    "meaning": "in de andere richting draaien",
    "example": "Draai de kaart om."
  },
  {
    "infinitive": "omkleden",
    "prefix": "om",
    "meaning": "andere kleding aantrekken",
    "example": "Hij kleedt zich na het werk om."
  },
  {
    "infinitive": "omrijden",
    "prefix": "om",
    "meaning": "een langere alternatieve route nemen",
    "example": "Door de wegwerkzaamheden rijden we om."
  },
  {
    "infinitive": "opbellen",
    "prefix": "op",
    "meaning": "telefonisch contact maken",
    "example": "Ik bel de huisarts op.",
    "models": {
      "main": "Ik bel de huisarts straks op.",
      "inversion": "Straks bel ik de huisarts op.",
      "modal": "Ik moet de huisarts opbellen.",
      "perfect": "Ik heb de huisarts opgebeld.",
      "subordinate": "Ik wacht totdat de huisarts mij opbelt.",
      "te": "Vergeet niet de huisarts op te bellen."
    }
  },
  {
    "infinitive": "ophalen",
    "prefix": "op",
    "meaning": "iemand of iets gaan halen",
    "example": "Zij haalt de kinderen op.",
    "models": {
      "main": "Ik haal de kinderen om vijf uur op.",
      "inversion": "Om vijf uur haal ik de kinderen op.",
      "modal": "Ik moet de kinderen ophalen.",
      "perfect": "Ik heb de kinderen opgehaald.",
      "subordinate": "Zij zegt dat ze de kinderen ophaalt.",
      "te": "Ik beloof de kinderen op te halen."
    }
  },
  {
    "infinitive": "ophangen",
    "prefix": "op",
    "meaning": "aan een haak of muur bevestigen",
    "example": "Hang je jas op."
  },
  {
    "infinitive": "oplossen",
    "prefix": "op",
    "meaning": "een probleem verhelpen",
    "example": "We lossen het probleem samen op."
  },
  {
    "infinitive": "opruimen",
    "prefix": "op",
    "meaning": "ordelijk en schoon maken",
    "example": "Ruim je kamer op.",
    "models": {
      "main": "Ik ruim na het eten de keuken op.",
      "inversion": "Na het eten ruim ik de keuken op.",
      "modal": "Ik moet de keuken opruimen.",
      "perfect": "Ik heb de keuken opgeruimd.",
      "subordinate": "Ik help omdat zij de keuken opruimt.",
      "te": "We beginnen de keuken op te ruimen."
    }
  },
  {
    "infinitive": "opschrijven",
    "prefix": "op",
    "meaning": "noteren",
    "example": "Schrijf het adres op."
  },
  {
    "infinitive": "opstaan",
    "prefix": "op",
    "meaning": "uit bed of stoel komen",
    "example": "Ik sta om zeven uur op.",
    "models": {
      "main": "Ik sta elke dag om zeven uur op.",
      "inversion": "Morgen sta ik extra vroeg op.",
      "modal": "Ik moet opstaan.",
      "perfect": "Ik ben vroeg opgestaan.",
      "subordinate": "Ik ben moe omdat ik vroeg opsta.",
      "te": "Ik probeer vroeg op te staan."
    }
  },
  {
    "infinitive": "overstappen",
    "prefix": "over",
    "meaning": "van vervoermiddel veranderen",
    "example": "In Breda stappen we over."
  },
  {
    "infinitive": "overleggen",
    "prefix": "over",
    "meaning": "samen bespreken",
    "example": "We overleggen eerst met het team."
  },
  {
    "infinitive": "terugbellen",
    "prefix": "terug",
    "meaning": "later opnieuw bellen",
    "example": "Ik bel u vanmiddag terug.",
    "models": {
      "main": "Ik bel de klant vanmiddag terug.",
      "inversion": "Vanmiddag bel ik de klant terug.",
      "modal": "Ik moet terugbellen.",
      "perfect": "Ik heb de klant teruggebeld.",
      "subordinate": "Hij zegt dat hij de klant terugbelt.",
      "te": "Ik beloof u terug te bellen."
    }
  },
  {
    "infinitive": "terugbrengen",
    "prefix": "terug",
    "meaning": "naar de vorige plaats brengen",
    "example": "Breng het boek morgen terug."
  },
  {
    "infinitive": "terugkomen",
    "prefix": "terug",
    "meaning": "weer komen",
    "example": "Wanneer kom je terug?"
  },
  {
    "infinitive": "terugsturen",
    "prefix": "terug",
    "meaning": "retourneren",
    "example": "De klant stuurt het pakket terug."
  },
  {
    "infinitive": "uitdoen",
    "prefix": "uit",
    "meaning": "kleding of apparaat uitschakelen",
    "example": "Doe het licht uit."
  },
  {
    "infinitive": "uitgaan",
    "prefix": "uit",
    "meaning": "voor ontspanning naar buiten gaan",
    "example": "Wij gaan vrijdag uit."
  },
  {
    "infinitive": "uitnodigen",
    "prefix": "uit",
    "meaning": "vragen om te komen",
    "example": "We nodigen de buren uit."
  },
  {
    "infinitive": "uitpakken",
    "prefix": "uit",
    "meaning": "uit verpakking halen",
    "example": "Zij pakt de dozen uit."
  },
  {
    "infinitive": "uitproberen",
    "prefix": "uit",
    "meaning": "testen",
    "example": "Ik probeer de nieuwe app uit."
  },
  {
    "infinitive": "uitschrijven",
    "prefix": "uit",
    "meaning": "registratie beëindigen",
    "example": "Hij schrijft zich bij de opleiding uit."
  },
  {
    "infinitive": "uitstappen",
    "prefix": "uit",
    "meaning": "een vervoermiddel verlaten",
    "example": "We stappen bij het centrum uit.",
    "models": {
      "main": "Ik stap bij de volgende halte uit.",
      "inversion": "Bij de volgende halte stap ik uit.",
      "modal": "Ik moet uitstappen.",
      "perfect": "Ik ben bij de markt uitgestapt.",
      "subordinate": "Kijk goed waar je uitstapt.",
      "te": "Vergeet niet bij de markt uit te stappen."
    }
  },
  {
    "infinitive": "uitzetten",
    "prefix": "uit",
    "meaning": "een apparaat stoppen",
    "example": "Zet de computer uit."
  },
  {
    "infinitive": "vastmaken",
    "prefix": "vast",
    "meaning": "bevestigen",
    "example": "Maak de riem vast."
  },
  {
    "infinitive": "vasthouden",
    "prefix": "vast",
    "meaning": "niet loslaten",
    "example": "Houd de leuning vast."
  },
  {
    "infinitive": "voorbereiden",
    "prefix": "voor",
    "meaning": "klaarmaken voor iets",
    "example": "Ik bereid het gesprek voor.",
    "models": {
      "main": "Ik bereid het gesprek goed voor.",
      "inversion": "Vooraf bereid ik het gesprek goed voor.",
      "modal": "Ik moet het gesprek voorbereiden.",
      "perfect": "Ik heb het gesprek voorbereid.",
      "subordinate": "Ze zegt dat ze het gesprek voorbereidt.",
      "te": "Ik probeer het gesprek goed voor te bereiden."
    }
  },
  {
    "infinitive": "voorlezen",
    "prefix": "voor",
    "meaning": "hardop lezen voor anderen",
    "example": "De ouder leest een verhaal voor."
  },
  {
    "infinitive": "voorstellen",
    "prefix": "voor",
    "meaning": "iemand introduceren of een idee noemen",
    "example": "Ik stel mijn collega voor."
  },
  {
    "infinitive": "wegbrengen",
    "prefix": "weg",
    "meaning": "naar een andere plek brengen",
    "example": "Wij brengen het afval weg."
  },
  {
    "infinitive": "weggaan",
    "prefix": "weg",
    "meaning": "vertrekken",
    "example": "Ik ga om vijf uur weg."
  },
  {
    "infinitive": "weggooien",
    "prefix": "weg",
    "meaning": "in de afvalbak doen",
    "example": "Gooi de verpakking weg."
  },
  {
    "infinitive": "weghalen",
    "prefix": "weg",
    "meaning": "verwijderen",
    "example": "Haal de lege dozen weg."
  },
  {
    "infinitive": "doorgeven",
    "prefix": "door",
    "meaning": "informatie aan een ander geven",
    "example": "Geef de wijziging aan je collega door."
  },
  {
    "infinitive": "doornemen",
    "prefix": "door",
    "meaning": "systematisch bespreken",
    "example": "We nemen de planning samen door."
  },
  {
    "infinitive": "bijhouden",
    "prefix": "bij",
    "meaning": "actueel registreren",
    "example": "Houd je uren goed bij."
  },
  {
    "infinitive": "bijwerken",
    "prefix": "bij",
    "meaning": "actualiseren",
    "example": "Ik werk het document bij."
  },
  {
    "infinitive": "bijwonen",
    "prefix": "bij",
    "meaning": "aanwezig zijn bij",
    "example": "Zij woont de vergadering bij."
  },
  {
    "infinitive": "neerzetten",
    "prefix": "neer",
    "meaning": "op een plaats zetten",
    "example": "Zet de tas hier neer."
  },
  {
    "infinitive": "neerleggen",
    "prefix": "neer",
    "meaning": "op een oppervlak leggen",
    "example": "Leg de sleutel neer."
  },
  {
    "infinitive": "openmaken",
    "prefix": "open",
    "meaning": "openen",
    "example": "Maak het pakket open."
  },
  {
    "infinitive": "dichtdoen",
    "prefix": "dicht",
    "meaning": "sluiten",
    "example": "Doe het raam dicht."
  },
  {
    "infinitive": "schoonmaken",
    "prefix": "schoon",
    "meaning": "reinigen",
    "example": "We maken de keuken schoon."
  },
  {
    "infinitive": "goedkeuren",
    "prefix": "goed",
    "meaning": "officieel accepteren",
    "example": "De manager keurt de aanvraag goed."
  },
  {
    "infinitive": "afkeuren",
    "prefix": "af",
    "meaning": "officieel niet accepteren",
    "example": "De gemeente keurt het plan af."
  },
  {
    "infinitive": "toelichten",
    "prefix": "toe",
    "meaning": "extra uitleg geven",
    "example": "Ik licht mijn keuze toe."
  },
  {
    "infinitive": "toestaan",
    "prefix": "toe",
    "meaning": "toestemming geven",
    "example": "De regel staat parkeren hier niet toe."
  },
  {
    "infinitive": "vaststellen",
    "prefix": "vast",
    "meaning": "officieel bepalen",
    "example": "De arts stelt de oorzaak vast."
  },
  {
    "infinitive": "samenwerken",
    "prefix": "samen",
    "meaning": "met anderen werken",
    "example": "De teams werken goed samen."
  },
  {
    "infinitive": "tegenkomen",
    "prefix": "tegen",
    "meaning": "onverwacht ontmoeten",
    "example": "Ik kom mijn buurman vaak tegen."
  },
  {
    "infinitive": "achterlaten",
    "prefix": "achter",
    "meaning": "niet meenemen",
    "example": "Laat geen afval achter."
  },
  {
    "infinitive": "achterhalen",
    "prefix": "achter",
    "meaning": "door onderzoek vinden",
    "example": "We proberen het adres te achterhalen."
  },
  {
    "infinitive": "voorbijgaan",
    "prefix": "voorbij",
    "meaning": "passeren",
    "example": "De bus gaat het station voorbij."
  },
  {
    "infinitive": "rondkijken",
    "prefix": "rond",
    "meaning": "de omgeving bekijken",
    "example": "We kijken rustig in de winkel rond."
  },
  {
    "infinitive": "rondleiden",
    "prefix": "rond",
    "meaning": "iemand een plaats tonen",
    "example": "De docent leidt ons rond."
  },
  {
    "infinitive": "samenvatten",
    "prefix": "samen",
    "meaning": "kort de hoofdpunten geven",
    "example": "Vat de tekst kort samen."
  },
  {
    "infinitive": "samenstellen",
    "prefix": "samen",
    "meaning": "uit onderdelen vormen",
    "example": "We stellen een team samen."
  },
  {
    "infinitive": "tegenhouden",
    "prefix": "tegen",
    "meaning": "voorkomen dat iets verdergaat",
    "example": "De politie houdt het verkeer tegen."
  },
  {
    "infinitive": "openstaan",
    "prefix": "open",
    "meaning": "beschikbaar of ontvankelijk zijn",
    "example": "De vacature staat nog open."
  },
  {
    "infinitive": "dichtgaan",
    "prefix": "dicht",
    "meaning": "sluiten",
    "example": "De winkel gaat om zes uur dicht."
  },
  {
    "infinitive": "vooruitgaan",
    "prefix": "vooruit",
    "meaning": "verbeteren of naar voren bewegen",
    "example": "Mijn Nederlands gaat snel vooruit."
  },
  {
    "infinitive": "achteruitgaan",
    "prefix": "achteruit",
    "meaning": "slechter worden of naar achteren bewegen",
    "example": "Zijn gezondheid gaat achteruit."
  }
];

const conjunctionBank = [
  {
    "form": "en",
    "type": "nevenschikkend",
    "relation": "toevoeging",
    "wordOrder": "hoofdzin blijft hoofdzin",
    "example": "Ik lees de tekst en ik maak de vragen."
  },
  {
    "form": "maar",
    "type": "nevenschikkend",
    "relation": "tegenstelling",
    "wordOrder": "hoofdzin blijft hoofdzin",
    "example": "Ik wil komen, maar ik moet werken."
  },
  {
    "form": "want",
    "type": "nevenschikkend",
    "relation": "reden",
    "wordOrder": "onderwerp + persoonsvorm",
    "example": "Ik blijf thuis, want ik ben ziek."
  },
  {
    "form": "dus",
    "type": "nevenschikkend",
    "relation": "gevolg",
    "wordOrder": "onderwerp + persoonsvorm",
    "example": "Het regent, dus ik neem de bus."
  },
  {
    "form": "of",
    "type": "nevenschikkend",
    "relation": "keuze",
    "wordOrder": "hoofdzin blijft hoofdzin",
    "example": "Ga je mee of blijf je thuis?"
  },
  {
    "form": "omdat",
    "type": "onderschikkend",
    "relation": "reden",
    "wordOrder": "werkwoord(en) aan het einde",
    "example": "Ik blijf thuis omdat ik ziek ben."
  },
  {
    "form": "doordat",
    "type": "onderschikkend",
    "relation": "oorzaak",
    "wordOrder": "werkwoord(en) aan het einde",
    "example": "De trein is laat doordat er een storing is."
  },
  {
    "form": "zodat",
    "type": "onderschikkend",
    "relation": "doel of gevolg",
    "wordOrder": "werkwoord(en) aan het einde",
    "example": "Ik spreek langzaam zodat iedereen mij begrijpt."
  },
  {
    "form": "dat",
    "type": "onderschikkend",
    "relation": "inhoud",
    "wordOrder": "werkwoord(en) aan het einde",
    "example": "Hij zegt dat hij morgen komt."
  },
  {
    "form": "of",
    "type": "onderschikkend",
    "relation": "indirecte ja/nee-vraag",
    "wordOrder": "werkwoord(en) aan het einde",
    "example": "Ik weet niet of zij komt."
  },
  {
    "form": "als",
    "type": "onderschikkend",
    "relation": "voorwaarde of herhaling",
    "wordOrder": "werkwoord(en) aan het einde",
    "example": "Als het regent, neem ik de auto."
  },
  {
    "form": "wanneer",
    "type": "onderschikkend",
    "relation": "tijd of formele voorwaarde",
    "wordOrder": "werkwoord(en) aan het einde",
    "example": "Bel me wanneer je aankomt."
  },
  {
    "form": "toen",
    "type": "onderschikkend",
    "relation": "eenmalig verleden",
    "wordOrder": "werkwoord(en) aan het einde",
    "example": "Toen ik jong was, woonde ik in Duitsland."
  },
  {
    "form": "terwijl",
    "type": "onderschikkend",
    "relation": "gelijktijdigheid of contrast",
    "wordOrder": "werkwoord(en) aan het einde",
    "example": "Ik kook terwijl hij de tafel dekt."
  },
  {
    "form": "voordat",
    "type": "onderschikkend",
    "relation": "eerder moment",
    "wordOrder": "werkwoord(en) aan het einde",
    "example": "Was je handen voordat je gaat eten."
  },
  {
    "form": "nadat",
    "type": "onderschikkend",
    "relation": "later moment",
    "wordOrder": "werkwoord(en) aan het einde",
    "example": "Nadat ik had gebeld, stuurde ik een bericht."
  },
  {
    "form": "totdat",
    "type": "onderschikkend",
    "relation": "eindpunt in de tijd",
    "wordOrder": "werkwoord(en) aan het einde",
    "example": "Wacht hier totdat de dokter komt."
  },
  {
    "form": "zodra",
    "type": "onderschikkend",
    "relation": "direct na een moment",
    "wordOrder": "werkwoord(en) aan het einde",
    "example": "Ik bel je zodra ik meer weet."
  },
  {
    "form": "hoewel",
    "type": "onderschikkend",
    "relation": "onverwacht contrast",
    "wordOrder": "werkwoord(en) aan het einde",
    "example": "Hoewel hij moe is, werkt hij door."
  },
  {
    "form": "ook al",
    "type": "onderschikkend",
    "relation": "concessie",
    "wordOrder": "werkwoord(en) aan het einde",
    "example": "Ook al regent het, we gaan wandelen."
  },
  {
    "form": "tenzij",
    "type": "onderschikkend",
    "relation": "uitzondering op voorwaarde",
    "wordOrder": "werkwoord(en) aan het einde",
    "example": "We gaan fietsen, tenzij het hard regent."
  },
  {
    "form": "mits",
    "type": "onderschikkend",
    "relation": "strikte voorwaarde",
    "wordOrder": "werkwoord(en) aan het einde",
    "example": "Je mag thuiswerken, mits je bereikbaar bent."
  },
  {
    "form": "aangezien",
    "type": "onderschikkend",
    "relation": "formele reden",
    "wordOrder": "werkwoord(en) aan het einde",
    "example": "Aangezien het laat is, stoppen we nu."
  },
  {
    "form": "indien",
    "type": "onderschikkend",
    "relation": "formele voorwaarde",
    "wordOrder": "werkwoord(en) aan het einde",
    "example": "Neem contact op indien u vragen heeft."
  },
  {
    "form": "zoals",
    "type": "onderschikkend/vergelijkend",
    "relation": "voorbeeld of vergelijking",
    "wordOrder": "afhankelijk van constructie",
    "example": "Doe het zoals de docent het voordoet."
  },
  {
    "form": "alsof",
    "type": "onderschikkend",
    "relation": "niet-werkelijke vergelijking",
    "wordOrder": "werkwoord(en) aan het einde",
    "example": "Hij doet alsof hij alles begrijpt."
  },
  {
    "form": "hoe … hoe",
    "type": "correlatief",
    "relation": "evenredige ontwikkeling",
    "wordOrder": "inversie in tweede deel mogelijk",
    "example": "Hoe meer je oefent, hoe makkelijker het wordt."
  },
  {
    "form": "zowel … als",
    "type": "correlatief",
    "relation": "dubbele toevoeging",
    "wordOrder": "zelfde grammaticale vorm na beide delen",
    "example": "Zowel lezen als luisteren is belangrijk."
  },
  {
    "form": "niet alleen … maar ook",
    "type": "correlatief",
    "relation": "sterke toevoeging",
    "wordOrder": "parallelle structuur",
    "example": "Zij spreekt niet alleen Nederlands, maar ook Duits."
  },
  {
    "form": "of … of",
    "type": "correlatief",
    "relation": "exclusieve keuze",
    "wordOrder": "parallelle structuur",
    "example": "We gaan of met de trein of met de auto."
  },
  {
    "form": "noch … noch",
    "type": "correlatief",
    "relation": "dubbele ontkenning formeel",
    "wordOrder": "parallelle structuur",
    "example": "Hij spreekt noch Nederlands noch Engels."
  },
  {
    "form": "enerzijds … anderzijds",
    "type": "correlatief",
    "relation": "twee kanten van een argument",
    "wordOrder": "vaak inversie na anderzijds",
    "example": "Enerzijds is het goedkoop, anderzijds duurt het lang."
  },
  {
    "form": "daarom",
    "type": "zinsverbindend bijwoord",
    "relation": "gevolg",
    "wordOrder": "op plek 1 volgt inversie",
    "example": "Ik ben ziek. Daarom blijf ik thuis."
  },
  {
    "form": "daardoor",
    "type": "zinsverbindend bijwoord",
    "relation": "oorzaak-gevolg",
    "wordOrder": "op plek 1 volgt inversie",
    "example": "Er was een storing. Daardoor kwam ik te laat."
  },
  {
    "form": "toch",
    "type": "zinsverbindend bijwoord",
    "relation": "onverwacht contrast",
    "wordOrder": "flexibele positie",
    "example": "Het regent. Toch gaan we wandelen."
  },
  {
    "form": "echter",
    "type": "zinsverbindend bijwoord",
    "relation": "formeel contrast",
    "wordOrder": "vaak middenveld of plek 1",
    "example": "De prijs is laag. De kwaliteit is echter goed."
  },
  {
    "form": "bovendien",
    "type": "zinsverbindend bijwoord",
    "relation": "toevoeging",
    "wordOrder": "op plek 1 volgt inversie",
    "example": "Het huis is groot. Bovendien heeft het een tuin."
  },
  {
    "form": "namelijk",
    "type": "zinsverbindend bijwoord",
    "relation": "uitleg achteraf",
    "wordOrder": "meestal in middenveld",
    "example": "Ik ga vroeg weg; ik heb namelijk een afspraak."
  },
  {
    "form": "eerst",
    "type": "zinsverbindend bijwoord",
    "relation": "eerste stap",
    "wordOrder": "op plek 1 volgt inversie",
    "example": "Eerst lees je de tekst."
  },
  {
    "form": "daarna",
    "type": "zinsverbindend bijwoord",
    "relation": "volgende stap",
    "wordOrder": "op plek 1 volgt inversie",
    "example": "Daarna maak je de vragen."
  },
  {
    "form": "vervolgens",
    "type": "zinsverbindend bijwoord",
    "relation": "volgende formele stap",
    "wordOrder": "op plek 1 volgt inversie",
    "example": "Vervolgens controleer je de antwoorden."
  },
  {
    "form": "uiteindelijk",
    "type": "zinsverbindend bijwoord",
    "relation": "eindresultaat",
    "wordOrder": "op plek 1 volgt inversie",
    "example": "Uiteindelijk vond hij een baan."
  },
  {
    "form": "daarentegen",
    "type": "zinsverbindend bijwoord",
    "relation": "sterke tegenstelling",
    "wordOrder": "op plek 1 volgt inversie",
    "example": "De bus is goedkoop. De taxi daarentegen is snel."
  },
  {
    "form": "desondanks",
    "type": "zinsverbindend bijwoord",
    "relation": "concessief gevolg",
    "wordOrder": "op plek 1 volgt inversie",
    "example": "Het was moeilijk. Desondanks slaagde zij."
  }
];

const idiomBank = [
  {
    "expression": "op tijd",
    "meaning": "niet te laat",
    "example": "Ik kom altijd op tijd op mijn werk.",
    "category": "tijd"
  },
  {
    "expression": "aan de beurt",
    "meaning": "de volgende persoon zijn",
    "example": "U bent nu aan de beurt.",
    "category": "situatie"
  },
  {
    "expression": "in de war",
    "meaning": "niet helder kunnen denken",
    "example": "Na de lange reis was ik in de war.",
    "category": "toestand"
  },
  {
    "expression": "op de hoogte",
    "meaning": "goed geïnformeerd",
    "example": "Houd mij op de hoogte van de planning.",
    "category": "informatie"
  },
  {
    "expression": "in orde",
    "meaning": "goed of correct",
    "example": "De documenten zijn in orde.",
    "category": "beoordeling"
  },
  {
    "expression": "onder druk",
    "meaning": "met veel spanning of haast",
    "example": "Het team werkt onder druk.",
    "category": "werk"
  },
  {
    "expression": "met de hand",
    "meaning": "zonder machine",
    "example": "Ik schrijf het formulier met de hand.",
    "category": "manier"
  },
  {
    "expression": "uit het hoofd",
    "meaning": "zonder te lezen",
    "example": "Zij kent het nummer uit het hoofd.",
    "category": "kennis"
  },
  {
    "expression": "per ongeluk",
    "meaning": "zonder bedoeling",
    "example": "Ik heb per ongeluk het verkeerde bestand gestuurd.",
    "category": "manier"
  },
  {
    "expression": "bij toeval",
    "meaning": "niet gepland",
    "example": "We kwamen elkaar bij toeval tegen.",
    "category": "manier"
  },
  {
    "expression": "voor het eerst",
    "meaning": "de eerste keer",
    "example": "Ik bezoek Maastricht voor het eerst.",
    "category": "tijd"
  },
  {
    "expression": "van tijd tot tijd",
    "meaning": "soms",
    "example": "Van tijd tot tijd werk ik op kantoor.",
    "category": "frequentie"
  },
  {
    "expression": "op den duur",
    "meaning": "na een langere periode",
    "example": "Op den duur wordt spreken makkelijker.",
    "category": "tijd"
  },
  {
    "expression": "naar mijn mening",
    "meaning": "volgens wat ik vind",
    "example": "Naar mijn mening is dit de beste optie.",
    "category": "mening"
  },
  {
    "expression": "uit ervaring",
    "meaning": "gebaseerd op wat je hebt meegemaakt",
    "example": "Uit ervaring weet ik dat oefenen helpt.",
    "category": "bron"
  },
  {
    "expression": "in ieder geval",
    "meaning": "zeker, wat er ook gebeurt",
    "example": "Ik bel je in ieder geval morgen.",
    "category": "zekerheid"
  },
  {
    "expression": "op dit moment",
    "meaning": "nu",
    "example": "Op dit moment heb ik geen tijd.",
    "category": "tijd"
  },
  {
    "expression": "in plaats van",
    "meaning": "als vervanging voor",
    "example": "Neem de trein in plaats van de auto.",
    "category": "keuze"
  },
  {
    "expression": "met betrekking tot",
    "meaning": "over, betreffende",
    "example": "Ik heb een vraag met betrekking tot de factuur.",
    "category": "formeel"
  },
  {
    "expression": "ten opzichte van",
    "meaning": "vergeleken met",
    "example": "De prijs is lager ten opzichte van vorig jaar.",
    "category": "vergelijking"
  },
  {
    "expression": "in verband met",
    "meaning": "vanwege of betreffende",
    "example": "De weg is dicht in verband met werkzaamheden.",
    "category": "reden"
  },
  {
    "expression": "aan de hand van",
    "meaning": "met behulp van",
    "example": "We leggen de regel uit aan de hand van voorbeelden.",
    "category": "middel"
  },
  {
    "expression": "op basis van",
    "meaning": "gebaseerd op",
    "example": "De keuze is gemaakt op basis van ervaring.",
    "category": "bron"
  },
  {
    "expression": "in tegenstelling tot",
    "meaning": "anders dan",
    "example": "In tegenstelling tot gisteren is het vandaag droog.",
    "category": "contrast"
  },
  {
    "expression": "in de buurt van",
    "meaning": "dicht bij",
    "example": "Wij wonen in de buurt van Eindhoven.",
    "category": "plaats"
  },
  {
    "expression": "op zoek naar",
    "meaning": "proberen te vinden",
    "example": "Ik ben op zoek naar een nieuwe baan.",
    "category": "doel"
  },
  {
    "expression": "van plan zijn",
    "meaning": "een bedoeling hebben",
    "example": "Wij zijn van plan om te verhuizen.",
    "category": "intentie"
  },
  {
    "expression": "in staat zijn",
    "meaning": "kunnen",
    "example": "Zij is in staat om zelfstandig te werken.",
    "category": "mogelijkheid"
  },
  {
    "expression": "de moeite waard",
    "meaning": "voldoende waardevol",
    "example": "Dit museum is de moeite waard.",
    "category": "beoordeling"
  },
  {
    "expression": "rekening houden met",
    "meaning": "meenemen in een beslissing",
    "example": "Houd rekening met extra reistijd.",
    "category": "handeling"
  },
  {
    "expression": "contact opnemen met",
    "meaning": "benaderen",
    "example": "Neem contact op met de gemeente.",
    "category": "communicatie"
  },
  {
    "expression": "gebruikmaken van",
    "meaning": "benutten",
    "example": "U kunt gebruikmaken van gratis advies.",
    "category": "handeling"
  },
  {
    "expression": "een beroep doen op",
    "meaning": "hulp of recht vragen",
    "example": "Hij doet een beroep op de verzekering.",
    "category": "formeel"
  },
  {
    "expression": "bezwaar maken tegen",
    "meaning": "officieel protesteren",
    "example": "U kunt bezwaar maken tegen de beslissing.",
    "category": "gemeente"
  },
  {
    "expression": "zich houden aan",
    "meaning": "regels volgen",
    "example": "Iedereen moet zich aan de afspraken houden.",
    "category": "regel"
  },
  {
    "expression": "ergens voor zorgen dat",
    "meaning": "een resultaat veroorzaken",
    "example": "Zorg ervoor dat het formulier compleet is.",
    "category": "resultaat"
  },
  {
    "expression": "ergens mee te maken hebben",
    "meaning": "verband houden met",
    "example": "De vertraging heeft met het weer te maken.",
    "category": "verband"
  },
  {
    "expression": "ergens vanuit gaan",
    "meaning": "iets als uitgangspunt nemen",
    "example": "We gaan ervan uit dat iedereen komt.",
    "category": "aanname"
  },
  {
    "expression": "erop aankomen",
    "meaning": "belangrijk zijn",
    "example": "Bij een examen komt het op nauwkeurigheid aan.",
    "category": "belang"
  },
  {
    "expression": "er niet toe doen",
    "meaning": "niet belangrijk zijn",
    "example": "De kleur doet er niet toe.",
    "category": "belang"
  },
  {
    "expression": "een rol spelen",
    "meaning": "invloed hebben",
    "example": "Ervaring speelt een belangrijke rol.",
    "category": "invloed"
  },
  {
    "expression": "een beslissing nemen",
    "meaning": "besluiten",
    "example": "We nemen morgen een beslissing.",
    "category": "handeling"
  },
  {
    "expression": "een afspraak nakomen",
    "meaning": "doen wat is afgesproken",
    "example": "Hij komt zijn afspraak altijd na.",
    "category": "betrouwbaarheid"
  },
  {
    "expression": "een kans krijgen",
    "meaning": "een mogelijkheid ontvangen",
    "example": "Zij krijgt een kans om ervaring op te doen.",
    "category": "mogelijkheid"
  },
  {
    "expression": "een indruk maken",
    "meaning": "een bepaald beeld geven",
    "example": "Je maakt een professionele indruk.",
    "category": "beoordeling"
  },
  {
    "expression": "een klacht indienen",
    "meaning": "officieel klagen",
    "example": "De klant dient een klacht in.",
    "category": "service"
  },
  {
    "expression": "een aanvraag indienen",
    "meaning": "officieel aanvragen",
    "example": "Ik dien online een aanvraag in.",
    "category": "gemeente"
  },
  {
    "expression": "een bijdrage leveren",
    "meaning": "helpen aan een resultaat",
    "example": "Iedereen levert een bijdrage aan het project.",
    "category": "werk"
  },
  {
    "expression": "aandacht besteden aan",
    "meaning": "tijd en focus geven",
    "example": "De cursus besteedt aandacht aan uitspraak.",
    "category": "leren"
  },
  {
    "expression": "antwoord geven op",
    "meaning": "reageren op een vraag",
    "example": "Geef antwoord op de hoofdvraag.",
    "category": "communicatie"
  },
  {
    "expression": "invloed uitoefenen op",
    "meaning": "bewust beïnvloeden",
    "example": "De gemeente oefent invloed uit op het beleid.",
    "category": "formeel"
  },
  {
    "expression": "ter sprake komen",
    "meaning": "besproken worden",
    "example": "Het onderwerp kwam tijdens de vergadering ter sprake.",
    "category": "gesprek"
  },
  {
    "expression": "in aanmerking komen voor",
    "meaning": "mogelijk recht hebben op",
    "example": "U komt mogelijk in aanmerking voor subsidie.",
    "category": "formeel"
  },
  {
    "expression": "tot stand komen",
    "meaning": "ontstaan",
    "example": "De overeenkomst kwam na overleg tot stand.",
    "category": "proces"
  },
  {
    "expression": "op gang komen",
    "meaning": "beginnen te functioneren",
    "example": "Na de pauze kwam het gesprek op gang.",
    "category": "proces"
  },
  {
    "expression": "achter de rug hebben",
    "meaning": "iets afgerond hebben",
    "example": "We hebben het examen achter de rug.",
    "category": "tijd"
  },
  {
    "expression": "onder de knie hebben",
    "meaning": "goed beheersen",
    "example": "Zij heeft de woordvolgorde onder de knie.",
    "category": "leren"
  },
  {
    "expression": "de draad kwijtraken",
    "meaning": "niet meer kunnen volgen",
    "example": "Bij lange zinnen raak ik soms de draad kwijt.",
    "category": "begrip"
  },
  {
    "expression": "de draad weer oppakken",
    "meaning": "na een onderbreking doorgaan",
    "example": "Na de vakantie pakken we de draad weer op.",
    "category": "proces"
  },
  {
    "expression": "een oogje in het zeil houden",
    "meaning": "goed opletten",
    "example": "Houd een oogje in het zeil bij de kinderen.",
    "category": "zorg"
  },
  {
    "expression": "de knoop doorhakken",
    "meaning": "een moeilijke beslissing nemen",
    "example": "Morgen hakken we de knoop door.",
    "category": "beslissing"
  },
  {
    "expression": "iets op een rijtje zetten",
    "meaning": "ordelijk overzicht maken",
    "example": "Ik zet de voor- en nadelen op een rijtje.",
    "category": "denken"
  },
  {
    "expression": "ergens tegenaan lopen",
    "meaning": "een probleem ontmoeten",
    "example": "We liepen tegen een technisch probleem aan.",
    "category": "probleem"
  },
  {
    "expression": "ergens mee zitten",
    "meaning": "zich zorgen maken over",
    "example": "Ik zit met een moeilijke vraag.",
    "category": "toestand"
  },
  {
    "expression": "iets in de gaten houden",
    "meaning": "blijven controleren",
    "example": "Houd de deadline in de gaten.",
    "category": "controle"
  },
  {
    "expression": "aan de slag gaan",
    "meaning": "beginnen met werken",
    "example": "Na de uitleg gaan we aan de slag.",
    "category": "werk"
  },
  {
    "expression": "het eens zijn met",
    "meaning": "dezelfde mening hebben",
    "example": "Ik ben het eens met je voorstel.",
    "category": "mening"
  },
  {
    "expression": "het oneens zijn met",
    "meaning": "een andere mening hebben",
    "example": "Zij is het oneens met de beslissing.",
    "category": "mening"
  },
  {
    "expression": "op eigen initiatief",
    "meaning": "zonder opdracht van een ander",
    "example": "Hij heeft op eigen initiatief geholpen.",
    "category": "manier"
  },
  {
    "expression": "van toepassing zijn op",
    "meaning": "gelden voor",
    "example": "Deze regel is op alle medewerkers van toepassing.",
    "category": "formeel"
  },
  {
    "expression": "in werking treden",
    "meaning": "officieel beginnen te gelden",
    "example": "De nieuwe wet treedt volgend jaar in werking.",
    "category": "formeel"
  },
  {
    "expression": "tot de conclusie komen",
    "meaning": "na denken besluiten",
    "example": "We komen tot de conclusie dat meer tijd nodig is.",
    "category": "denken"
  },
  {
    "expression": "een uitzondering maken voor",
    "meaning": "een regel niet toepassen op",
    "example": "De docent maakt een uitzondering voor ziekte.",
    "category": "regel"
  },
  {
    "expression": "op korte termijn",
    "meaning": "binnen niet veel tijd",
    "example": "We zoeken op korte termijn een oplossing.",
    "category": "tijd"
  },
  {
    "expression": "op lange termijn",
    "meaning": "over een lange periode",
    "example": "Op lange termijn bespaart isolatie geld.",
    "category": "tijd"
  },
  {
    "expression": "in grote lijnen",
    "meaning": "zonder alle details",
    "example": "Leg het plan in grote lijnen uit.",
    "category": "samenvatting"
  },
  {
    "expression": "tot op zekere hoogte",
    "meaning": "gedeeltelijk",
    "example": "Tot op zekere hoogte ben ik het met je eens.",
    "category": "nuance"
  },
  {
    "expression": "wat mij betreft",
    "meaning": "volgens mijn voorkeur",
    "example": "Wat mij betreft beginnen we morgen.",
    "category": "mening"
  },
  {
    "expression": "om eerlijk te zijn",
    "meaning": "eerlijk gezegd",
    "example": "Om eerlijk te zijn vind ik het moeilijk.",
    "category": "spreektaal"
  },
  {
    "expression": "bij wijze van spreken",
    "meaning": "niet letterlijk bedoeld",
    "example": "Ik heb bij wijze van spreken honderd keer gebeld.",
    "category": "spreektaal"
  }
];

const supplementaryWordGroups = {
  "hallo": [
    "formeel aanspreken",
    "informeel aanspreken",
    "zich identificeren",
    "persoonlijke informatie geven",
    "een gesprek beginnen",
    "een gesprek afsluiten",
    "iemand welkom heten",
    "iemand feliciteren",
    "iemand bedanken",
    "excuses aanbieden",
    "om herhaling vragen",
    "langzamer laten spreken",
    "een woord laten spellen",
    "een misverstand uitleggen",
    "een naam verkeerd uitspreken",
    "een telefoonnummer doorgeven",
    "een bericht achterlaten",
    "beschikbaar zijn",
    "bereikbaar zijn",
    "contact houden met",
    "elkaar leren kennen",
    "uit hetzelfde land komen",
    "een taal vloeiend spreken",
    "een beetje Nederlands spreken",
    "iets niet verstaan"
  ],
  "school": [
    "de leerdoelen",
    "de studiewijzer",
    "de aanwezigheidsplicht",
    "de groepsopdracht",
    "de individuele opdracht",
    "de mondelinge toets",
    "de schriftelijke toets",
    "de luisteroefening",
    "de spreekopdracht",
    "de schrijfvaardigheid",
    "de leesvaardigheid",
    "de woordenschat",
    "de grammatica",
    "de uitspraak",
    "de spelling",
    "een planning maken",
    "de stof herhalen",
    "aantekeningen maken",
    "feedback verwerken",
    "een presentatie houden",
    "een bron gebruiken",
    "een deadline missen",
    "een vraag toelichten",
    "zelfstandig studeren",
    "voor een toets leren"
  ],
  "wonen": [
    "de koopwoning",
    "de huurwoning",
    "het rijtjeshuis",
    "de tussenwoning",
    "de hoekwoning",
    "het appartement",
    "de studio",
    "de nieuwbouw",
    "de verbouwing",
    "het bouwjaar",
    "de oppervlakte",
    "de slaapkamer",
    "de badkamer",
    "de keuken",
    "het toilet",
    "een bezichtiging plannen",
    "een bod doen",
    "de huur verhogen",
    "de woning inspecteren",
    "een gebrek doorgeven",
    "geluidsoverlast ervaren",
    "de buren waarschuwen",
    "afval scheiden",
    "de tuin onderhouden",
    "energie besparen"
  ],
  "eten": [
    "het ontbijt",
    "de lunch",
    "het avondeten",
    "het tussendoortje",
    "het voorgerecht",
    "het hoofdgerecht",
    "het nagerecht",
    "de portie",
    "het recept",
    "het ingrediënt",
    "de houdbaarheidsdatum",
    "de voedingswaarde",
    "de allergenen",
    "de verpakkingseenheid",
    "de boodschappenlijst",
    "een maaltijd overslaan",
    "een recept volgen",
    "iets aan de kook brengen",
    "op laag vuur koken",
    "de oven voorverwarmen",
    "iets in stukjes snijden",
    "op smaak brengen",
    "eten bewaren",
    "de restjes invriezen",
    "een dieet volgen"
  ],
  "gezondheid": [
    "de bloeddruk",
    "de hartslag",
    "de ademhaling",
    "de diagnose",
    "de verwijzing",
    "de bijwerking",
    "de dosering",
    "de bijsluiter",
    "de operatie",
    "de spoedeisende hulp",
    "de huisartsenpost",
    "de zorgverzekeraar",
    "het eigen risico",
    "de vergoeding",
    "de controleafspraak",
    "een klacht onderzoeken",
    "een diagnose stellen",
    "een behandeling starten",
    "een specialist raadplegen",
    "een verwijsbrief krijgen",
    "een medicijn voorschrijven",
    "een dosis overslaan",
    "een wond verzorgen",
    "een herstelperiode nodig hebben",
    "een gezonde leefstijl hebben"
  ],
  "kleding": [
    "de onderbroek",
    "de bh",
    "het overhemd",
    "de joggingbroek",
    "de regenjas",
    "de winterjas",
    "de handschoen",
    "de riem",
    "de pet",
    "de tas",
    "de hak",
    "de zool",
    "de kraag",
    "de pasvorm",
    "het label",
    "een outfit kiezen",
    "een broek inkorten",
    "een rits vervangen",
    "een knoop aannaaien",
    "kleding wassen",
    "kleding strijken",
    "een vlek verwijderen",
    "de was ophangen",
    "online kleding bestellen",
    "een maatadvies vragen"
  ],
  "reizen": [
    "de spits",
    "de file",
    "de omleiding",
    "de wegwerkzaamheden",
    "de verkeersregel",
    "het stoplicht",
    "het zebrapad",
    "de rotonde",
    "de snelweg",
    "de afrit",
    "de invoegstrook",
    "de fietsenstalling",
    "de parkeerautomaat",
    "de zone",
    "de maximumsnelheid",
    "een reis plannen",
    "de vertrektijd controleren",
    "een vertraging omroepen",
    "een alternatieve route nemen",
    "een stoel zoeken",
    "een overstap missen",
    "reiskosten declareren",
    "een abonnement verlengen",
    "een boete krijgen",
    "veilig oversteken"
  ],
  "vrije-tijd": [
    "de wandelroute",
    "het natuurgebied",
    "de speeltuin",
    "de sportschool",
    "het zwembad",
    "de vereniging",
    "het abonnement",
    "de repetitie",
    "de training",
    "de competitie",
    "de vrijwilliger",
    "het evenement",
    "de entreeprijs",
    "de openingstijd",
    "de reservering",
    "een activiteit organiseren",
    "zich vervelen",
    "een vrije dag nemen",
    "een weekend weggaan",
    "een evenement bezoeken",
    "een sport beoefenen",
    "een cursus volgen",
    "een instrument bespelen",
    "foto’s delen",
    "een uitnodiging accepteren"
  ],
  "verhuizen": [
    "de tijdelijke opslag",
    "het verhuisbedrijf",
    "de boedel",
    "het meubelstuk",
    "het gereedschap",
    "de boormachine",
    "de ladder",
    "de plattegrond",
    "de aansluiting",
    "de nutsvoorziening",
    "de postcodewijziging",
    "de gemeentelijke registratie",
    "de eindinspectie",
    "de opleverstaat",
    "de verhuisvergoeding",
    "een verhuisdatum kiezen",
    "een verhuisofferte aanvragen",
    "breekbare spullen beschermen",
    "dozen labelen",
    "meubels uit elkaar halen",
    "een busje huren",
    "een lift reserveren",
    "de oude woning leegmaken",
    "de nieuwe woning schoon opleveren",
    "post laten doorsturen"
  ],
  "nederland": [
    "de grondwet",
    "de overheid",
    "de Eerste Kamer",
    "de Tweede Kamer",
    "de politieke partij",
    "het stembureau",
    "de waterschap",
    "de verzorgingsstaat",
    "de vrijheid van meningsuiting",
    "de gelijkheid",
    "de tolerantie",
    "de integratie",
    "de inburgering",
    "de regionale taal",
    "het dialect",
    "een verkiezing houden",
    "een stem uitbrengen",
    "een traditie behouden",
    "een nationale feestdag vieren",
    "zich aanpassen aan",
    "een culturele gewoonte begrijpen",
    "een verschil respecteren",
    "direct communiceren",
    "een compromis sluiten",
    "vrijwilligerswerk doen"
  ],
  "kinderen": [
    "de peuterspeelzaal",
    "de ouderbijdrage",
    "de schoolvakantie",
    "het schoolreisje",
    "de gymles",
    "het leerlingvolgsysteem",
    "de leerprestaties",
    "de thuistaal",
    "de taalachterstand",
    "de ontwikkelingsfase",
    "de slaaproutine",
    "de eetgewoonte",
    "de schermtijd",
    "de speelafspraak",
    "de noodcontactpersoon",
    "een kind troosten",
    "positief gedrag stimuleren",
    "duidelijke grenzen aangeven",
    "een afspraak met de mentor maken",
    "een rapport bespreken",
    "huiswerk begeleiden",
    "een kind ziek melden",
    "een opvangdag ruilen",
    "een allergie doorgeven",
    "een veilige omgeving creëren"
  ],
  "winkels": [
    "de productbeschrijving",
    "de beoordeling",
    "de vergelijking",
    "de betaalmethode",
    "de factuur",
    "de kortingscode",
    "de klantenkaart",
    "de spaarkaart",
    "de bezorgdatum",
    "de bezorgpoging",
    "de retourtermijn",
    "het retourlabel",
    "de reparatietermijn",
    "de gebruiksaanwijzing",
    "de geschillencommissie",
    "prijzen vergelijken",
    "een review lezen",
    "een kortingscode invoeren",
    "een bestelling annuleren",
    "een afleveradres wijzigen",
    "een pakket weigeren",
    "een defect aantonen",
    "een vervangend product ontvangen",
    "een betalingsbewijs bewaren",
    "een klacht schriftelijk bevestigen"
  ],
  "opleidingen": [
    "het collegegeld",
    "de studiefinanciering",
    "de toelatingseis",
    "de vooropleiding",
    "de diplomawaardering",
    "de inschrijfdeadline",
    "de studielast",
    "het studieadvies",
    "de afstudeeropdracht",
    "de scriptie",
    "het onderzoek",
    "de bronvermelding",
    "de plagiaatcontrole",
    "het praktijkexamen",
    "de beroepsopleiding",
    "een studiekeuze maken",
    "een intakegesprek voeren",
    "een leerdoel formuleren",
    "een onderzoeksvraag opstellen",
    "bronnen beoordelen",
    "een planning bewaken",
    "een presentatie beoordelen",
    "een stageplek vinden",
    "een studie onderbreken",
    "een opleiding hervatten"
  ],
  "werk-zoeken": [
    "de arbeidsmarkt",
    "het uitzendbureau",
    "de vacaturebank",
    "het netwerk",
    "de recruiter",
    "de werving",
    "de selectie",
    "de sollicitatieprocedure",
    "de competentie",
    "de salarisindicatie",
    "de arbeidsduur",
    "de contractvorm",
    "de opzegtermijn",
    "de secundaire arbeidsvoorwaarden",
    "de loopbaan",
    "een profiel bijwerken",
    "een netwerk uitbreiden",
    "een open sollicitatie sturen",
    "een motivatie toelichten",
    "een praktijkvoorbeeld geven",
    "over salaris onderhandelen",
    "een referentie laten controleren",
    "een vervolggesprek krijgen",
    "een arbeidsvoorwaarde bespreken",
    "een baan aangeboden krijgen"
  ],
  "werken": [
    "het functioneringsgesprek",
    "het beoordelingsgesprek",
    "de werkdruk",
    "de werksfeer",
    "de veiligheid",
    "het protocol",
    "de procedure",
    "de kwaliteitsnorm",
    "de doelstelling",
    "de prestatie",
    "de samenwerking",
    "de communicatie",
    "de escalatie",
    "de vertrouwenspersoon",
    "de ondernemingsraad",
    "een vergadering voorbereiden",
    "notulen maken",
    "een actiepunt opvolgen",
    "een risico melden",
    "een incident registreren",
    "een proces verbeteren",
    "kennis overdragen",
    "een collega inwerken",
    "een conflict oplossen",
    "een resultaat presenteren"
  ],
  "gemeente": [
    "de basisregistratie personen",
    "de burgerlijke stand",
    "de naturalisatie",
    "de optieprocedure",
    "de omgevingsvergunning",
    "het bestemmingsplan",
    "de WOZ-waarde",
    "de gemeentelijke heffing",
    "de afvalstoffenheffing",
    "de rioolheffing",
    "de kwijtschelding",
    "de bezwaarprocedure",
    "de bezwaartermijn",
    "de beschikking",
    "het dossiernummer",
    "een afspraak verzetten",
    "een machtiging afgeven",
    "een bewijsstuk uploaden",
    "een aanvraag aanvullen",
    "de status controleren",
    "een besluit ontvangen",
    "binnen de termijn reageren",
    "een bezwaar motiveren",
    "een hoorzitting bijwonen",
    "een wijziging doorgeven"
  ]
};

const levels = [
  {
    "id": "A1",
    "title": "De basis",
    "description": "Jezelf voorstellen, dagelijkse situaties begrijpen en ruim 1.000 thematische woorden, taalhandelingen en vaste combinaties actief herkennen.",
    "progress": 42,
    "modules": [
      "Hallo",
      "School",
      "Wonen",
      "Eten en drinken",
      "Gezondheid",
      "Kleding",
      "Reizen",
      "Vrije tijd"
    ]
  },
  {
    "id": "A2",
    "title": "Dagelijks leven",
    "description": "Zelfstandig handelen in wonen, gezin, winkels, opleiding, werk en gemeente met ruim 1.000 woorden, combinaties en grammaticale patronen.",
    "progress": 58,
    "current": true,
    "modules": [
      "Verhuizen",
      "Nederland",
      "Kinderen",
      "Winkels",
      "Opleidingen",
      "Werk zoeken",
      "Werken",
      "De gemeente"
    ]
  },
  {
    "id": "B1",
    "title": "Zelfstandig Nederlands",
    "description": "Ervaringen uitleggen, professioneel schrijven en actief deelnemen aan gesprekken.",
    "progress": 12,
    "modules": [
      "Bijzinnen",
      "Er en verwijswoorden",
      "Werk en vergaderen",
      "Mening en argumentatie",
      "Formele e-mail"
    ]
  },
  {
    "id": "B2",
    "title": "Natuurlijk en professioneel",
    "description": "Nuanceren, overtuigen en complexe onderwerpen helder bespreken.",
    "progress": 0,
    "modules": [
      "Register en stijl",
      "Vaste combinaties",
      "Presenteren",
      "Onderhandelen",
      "Complexe teksten"
    ]
  }
];

const a1Themes = [
  {
    "id": "hallo",
    "number": 1,
    "title": "Hallo",
    "subtitle": "Kennismaken en familie",
    "image": "images/theme-hallo.svg",
    "description": "Begroet mensen, vertel wie je bent en stel eenvoudige vragen over naam, herkomst, taal en familie.",
    "canDo": [
      "Ik kan mezelf uitgebreid voorstellen.",
      "Ik kan persoonsgegevens vragen en spellen.",
      "Ik kan over mijn familie en talen praten."
    ],
    "vocabulary": [
      [
        "de voornaam",
        "De naam die vóór je achternaam staat.",
        "Mijn voornaam is Lina."
      ],
      [
        "de achternaam",
        "De familienaam van een persoon.",
        "Kunt u uw achternaam spellen?"
      ],
      [
        "het adres",
        "De straat, het huisnummer en de woonplaats.",
        "Mijn adres is Marktstraat 12."
      ],
      [
        "de nationaliteit",
        "Het land waarmee iemand officieel verbonden is.",
        "Wat is uw nationaliteit?"
      ],
      [
        "kennismaken",
        "Iemand voor het eerst ontmoeten en iets over elkaar vertellen.",
        "Wij maken vandaag kennis met de buren."
      ],
      [
        "spellen",
        "De letters van een woord één voor één noemen.",
        "Hoe spel je je naam?"
      ],
      [
        "getrouwd",
        "Met iemand in een huwelijk verbonden.",
        "Mijn zus is getrouwd."
      ],
      [
        "aangenaam",
        "Beleefde reactie wanneer je iemand ontmoet.",
        "Aangenaam, ik ben Amir."
      ]
    ],
    "wordGroups": {
      "Zelfstandige naamwoorden": [
        "de naam",
        "de voornaam",
        "de achternaam",
        "het adres",
        "de straat",
        "het huisnummer",
        "de postcode",
        "de woonplaats",
        "het land",
        "de nationaliteit",
        "de taal",
        "de familie",
        "de ouder",
        "de vader",
        "de moeder",
        "de broer",
        "de zus",
        "de man",
        "de vrouw",
        "het kind"
      ],
      "Werkwoorden": [
        "heten",
        "zijn",
        "hebben",
        "komen",
        "wonen",
        "spreken",
        "begrijpen",
        "spellen",
        "vragen",
        "antwoorden",
        "begroeten",
        "voorstellen",
        "kennismaken",
        "ontmoeten",
        "bellen",
        "kennen"
      ],
      "Beschrijvende woorden": [
        "Nederlands",
        "buitenlands",
        "getrouwd",
        "alleenstaand",
        "jong",
        "oud",
        "vriendelijk",
        "nieuw",
        "hetzelfde",
        "anders",
        "samen",
        "alleen"
      ],
      "Vaste combinaties": [
        "goedemorgen",
        "goedemiddag",
        "goedenavond",
        "tot ziens",
        "tot morgen",
        "hoe heet je?",
        "waar kom je vandaan?",
        "aangenaam kennis te maken",
        "hoe gaat het?",
        "het gaat goed",
        "dank je wel",
        "alstublieft"
      ]
    },
    "grammar": [
      [
        "Persoonlijke voornaamwoorden",
        "ik, jij, u, hij, zij, wij, jullie en zij"
      ],
      [
        "Zijn en hebben",
        "ik ben, jij bent, hij is · ik heb, jij hebt, zij heeft"
      ],
      [
        "Vraagwoorden",
        "wie, wat, waar, hoe en hoeveel"
      ]
    ],
    "pronunciation": [
      "aa en a",
      "ui",
      "eu",
      "g en ch"
    ],
    "dialogue": [
      "Hoi, ik ben Sofia.",
      "Hallo Sofia, ik heet Amir.",
      "Waar kom je vandaan?",
      "Ik kom uit Spanje. En jij?"
    ],
    "exercise": {
      "question": "Welke zin gebruik je om naar iemands naam te vragen?",
      "options": [
        "Waar woon je?",
        "Hoe heet je?",
        "Hoe laat is het?"
      ],
      "answer": 1,
      "explanation": "“Hoe heet je?” is de gewone vraag naar iemands naam."
    }
  },
  {
    "id": "school",
    "number": 2,
    "title": "School",
    "subtitle": "Leren, tijd en klas",
    "image": "images/theme-school.svg",
    "description": "Praat over lessen, materialen, opdrachten, planning en wat je wel of niet begrijpt.",
    "canDo": [
      "Ik kan een lesrooster begrijpen.",
      "Ik kan om uitleg of herhaling vragen.",
      "Ik kan over leren en huiswerk praten."
    ],
    "vocabulary": [
      [
        "het lesrooster",
        "Een overzicht van lessen en tijden.",
        "Op het lesrooster staat Nederlands om negen uur."
      ],
      [
        "de opdracht",
        "Werk dat je voor een les moet maken.",
        "Maak opdracht zes op bladzijde twintig."
      ],
      [
        "de uitleg",
        "Informatie waardoor iets duidelijk wordt.",
        "De uitleg van de docent is duidelijk."
      ],
      [
        "de pauze",
        "Een korte periode zonder les of werk.",
        "In de pauze drinken we koffie."
      ],
      [
        "inleveren",
        "Werk aan een docent geven wanneer het klaar is.",
        "Je moet het huiswerk vrijdag inleveren."
      ],
      [
        "herhalen",
        "Iets nog een keer zeggen of doen.",
        "Kunt u de zin herhalen?"
      ],
      [
        "duidelijk",
        "Goed te begrijpen.",
        "De instructie is duidelijk."
      ],
      [
        "op tijd",
        "Niet te vroeg en niet te laat.",
        "Ik ben altijd op tijd voor de les."
      ]
    ],
    "wordGroups": {
      "Zelfstandige naamwoorden": [
        "de school",
        "de klas",
        "de docent",
        "de cursist",
        "de les",
        "het lesrooster",
        "de opdracht",
        "het huiswerk",
        "de oefening",
        "de uitleg",
        "de vraag",
        "het antwoord",
        "het boek",
        "het schrift",
        "de pen",
        "het potlood",
        "het bord",
        "de bladzijde",
        "de pauze",
        "het examen"
      ],
      "Werkwoorden": [
        "leren",
        "lezen",
        "schrijven",
        "luisteren",
        "spreken",
        "begrijpen",
        "uitleggen",
        "herhalen",
        "oefenen",
        "maken",
        "nakijken",
        "inleveren",
        "beginnen",
        "stoppen",
        "onthouden",
        "vergeten"
      ],
      "Beschrijvende woorden": [
        "makkelijk",
        "moeilijk",
        "duidelijk",
        "onduidelijk",
        "goed",
        "fout",
        "stil",
        "druk",
        "klaar",
        "aanwezig",
        "afwezig",
        "op tijd"
      ],
      "Vaste combinaties": [
        "een vraag stellen",
        "antwoord geven",
        "huiswerk maken",
        "een woord opzoeken",
        "in de pauze",
        "op bladzijde tien",
        "wat betekent dit?",
        "kunt u dat herhalen?",
        "ik begrijp het",
        "ik weet het niet",
        "mag ik iets vragen?",
        "tot de volgende les"
      ]
    },
    "grammar": [
      [
        "Tegenwoordige tijd",
        "ik leer, jij leert, wij leren"
      ],
      [
        "Getallen en kalender",
        "dagen, maanden, datum en hoeveelheden"
      ],
      [
        "Beleefd vragen",
        "Kunt u dat herhalen? Wat betekent dit?"
      ]
    ],
    "pronunciation": [
      "sch",
      "ch",
      "ee en e",
      "woordklemtoon"
    ],
    "dialogue": [
      "Goedemorgen. Heeft u een vraag?",
      "Ja. Wat betekent “opdracht”?",
      "Dat is werk dat je moet maken.",
      "Dank u wel."
    ],
    "exercise": {
      "question": "Welke vorm is correct?",
      "options": [
        "Hij leren Nederlands.",
        "Hij leert Nederlands.",
        "Hij leer Nederlands."
      ],
      "answer": 1,
      "explanation": "Bij hij, zij en het krijgt de persoonsvorm meestal een -t."
    }
  },
  {
    "id": "wonen",
    "number": 3,
    "title": "Wonen",
    "subtitle": "Huis, kamers en buurt",
    "image": "images/theme-wonen.svg",
    "description": "Beschrijf je woning, kamers, meubels, voorzieningen en de buurt waar je woont.",
    "canDo": [
      "Ik kan mijn woning en buurt beschrijven.",
      "Ik kan zeggen waar voorwerpen staan of liggen.",
      "Ik kan eenvoudige informatie over huur begrijpen."
    ],
    "vocabulary": [
      [
        "de woning",
        "Een huis of appartement waarin iemand woont.",
        "Wij zoeken een betaalbare woning."
      ],
      [
        "de woonkamer",
        "De kamer waar je zit en ontspant.",
        "De bank staat in de woonkamer."
      ],
      [
        "de verdieping",
        "Een niveau van een gebouw.",
        "Wij wonen op de tweede verdieping."
      ],
      [
        "de huur",
        "Het bedrag dat je betaalt om ergens te wonen.",
        "De huur is inclusief water."
      ],
      [
        "verhuizen",
        "Van de ene woning naar een andere gaan.",
        "Volgende maand verhuizen we naar Waalre."
      ],
      [
        "opruimen",
        "Dingen netjes op hun plaats zetten.",
        "Ik ruim de keuken op."
      ],
      [
        "ruim",
        "Met veel beschikbare plaats.",
        "De woonkamer is licht en ruim."
      ],
      [
        "in de buurt",
        "Dicht bij een bepaalde plaats.",
        "Er is een supermarkt in de buurt."
      ]
    ],
    "wordGroups": {
      "Zelfstandige naamwoorden": [
        "de woning",
        "het huis",
        "het appartement",
        "de kamer",
        "de woonkamer",
        "de slaapkamer",
        "de keuken",
        "de badkamer",
        "het toilet",
        "de tuin",
        "het balkon",
        "de deur",
        "het raam",
        "de trap",
        "de verdieping",
        "de sleutel",
        "de huur",
        "de verhuurder",
        "de buurman",
        "de buurt"
      ],
      "Werkwoorden": [
        "wonen",
        "huren",
        "kopen",
        "verhuizen",
        "slapen",
        "koken",
        "douchen",
        "schoonmaken",
        "opruimen",
        "openen",
        "sluiten",
        "staan",
        "liggen",
        "hangen",
        "zoeken",
        "vinden"
      ],
      "Beschrijvende woorden": [
        "groot",
        "klein",
        "ruim",
        "smal",
        "licht",
        "donker",
        "rustig",
        "druk",
        "schoon",
        "vuil",
        "duur",
        "goedkoop"
      ],
      "Vaste combinaties": [
        "te huur",
        "te koop",
        "op de begane grond",
        "op de eerste verdieping",
        "in de buurt",
        "naast het station",
        "tegenover de school",
        "achter het huis",
        "voor het raam",
        "onder de tafel",
        "een kamer delen",
        "de sleutel kwijt"
      ]
    },
    "grammar": [
      [
        "Plaatsvoorzetsels",
        "in, op, onder, naast, achter, voor en tussen"
      ],
      [
        "Hoofdzin",
        "onderwerp + persoonsvorm + rest"
      ],
      [
        "Rangtelwoorden",
        "eerste, tweede, derde en vierde"
      ]
    ],
    "pronunciation": [
      "oo en o",
      "oe",
      "ui",
      "lange en korte klinkers"
    ],
    "dialogue": [
      "Waar woon je?",
      "Ik woon in Eindhoven.",
      "Is je huis groot?",
      "Nee, maar het heeft een fijne tuin."
    ],
    "exercise": {
      "question": "Welke zin beschrijft een plaats?",
      "options": [
        "De tafel staat naast het raam.",
        "De tafel is morgen.",
        "De tafel heeft lopen."
      ],
      "answer": 0,
      "explanation": "“Naast het raam” vertelt waar de tafel staat."
    }
  },
  {
    "id": "eten",
    "number": 4,
    "title": "Eten en drinken",
    "subtitle": "Boodschappen en maaltijden",
    "image": "images/theme-eten.svg",
    "description": "Doe boodschappen, bespreek maaltijden, hoeveelheden, smaken, prijzen en bestellen.",
    "canDo": [
      "Ik kan boodschappen doen en iets bestellen.",
      "Ik kan hoeveelheden en prijzen begrijpen.",
      "Ik kan over eten, drinken en voorkeuren praten."
    ],
    "vocabulary": [
      [
        "de maaltijd",
        "Eten op een vast moment van de dag.",
        "Het avondeten is onze warme maaltijd."
      ],
      [
        "de aanbieding",
        "Een product dat tijdelijk minder kost.",
        "De koffie is deze week in de aanbieding."
      ],
      [
        "de verpakking",
        "Materiaal dat om een product zit.",
        "Lees de informatie op de verpakking."
      ],
      [
        "de rekening",
        "Het bedrag dat je in een restaurant moet betalen.",
        "Mogen wij de rekening, alstublieft?"
      ],
      [
        "bestellen",
        "In een winkel of restaurant zeggen wat je wilt hebben.",
        "Ik bestel soep en brood."
      ],
      [
        "afrekenen",
        "Betalen wat je hebt gekocht.",
        "U kunt bij de kassa afrekenen."
      ],
      [
        "vers",
        "Kort geleden gemaakt of geoogst.",
        "De groente op de markt is vers."
      ],
      [
        "nog iets anders",
        "Vraag of iemand meer wil bestellen.",
        "Wilt u nog iets anders?"
      ]
    ],
    "wordGroups": {
      "Zelfstandige naamwoorden": [
        "het ontbijt",
        "de lunch",
        "het avondeten",
        "de maaltijd",
        "het brood",
        "de kaas",
        "het vlees",
        "de vis",
        "de groente",
        "het fruit",
        "de appel",
        "de aardappel",
        "het water",
        "de koffie",
        "de thee",
        "de winkel",
        "de supermarkt",
        "de markt",
        "de prijs",
        "de rekening"
      ],
      "Werkwoorden": [
        "eten",
        "drinken",
        "koken",
        "bakken",
        "snijden",
        "proeven",
        "bestellen",
        "betalen",
        "afrekenen",
        "kopen",
        "wegen",
        "nodig hebben",
        "meenemen",
        "bewaren",
        "kiezen",
        "kosten"
      ],
      "Beschrijvende woorden": [
        "lekker",
        "vies",
        "zoet",
        "zout",
        "zuur",
        "bitter",
        "warm",
        "koud",
        "vers",
        "vol",
        "leeg",
        "duur"
      ],
      "Vaste combinaties": [
        "een kilo appels",
        "een liter melk",
        "een pak koffie",
        "een fles water",
        "een stuk kaas",
        "een kopje thee",
        "eet smakelijk",
        "nog iets anders?",
        "de rekening alstublieft",
        "met pin betalen",
        "contant betalen",
        "in de aanbieding"
      ]
    },
    "grammar": [
      [
        "Vraagzin met vraagwoord",
        "Wat eet je? Hoeveel kost het?"
      ],
      [
        "Vraagzin met werkwoord",
        "Drink je koffie? Wilt u een tas?"
      ],
      [
        "Komen en gaan",
        "ik kom, jij komt · ik ga, jij gaat"
      ]
    ],
    "pronunciation": [
      "eu",
      "ui",
      "lettergrepen",
      "intonatie in vragen"
    ],
    "dialogue": [
      "Goedemiddag. Wat wilt u?",
      "Ik wil graag een kilo appels.",
      "Anders nog iets?",
      "Nee, dank u. Hoeveel kost het?"
    ],
    "exercise": {
      "question": "Welke vraag hoort bij een prijs?",
      "options": [
        "Waar woon je?",
        "Hoeveel kost dit?",
        "Wie is dat?"
      ],
      "answer": 1,
      "explanation": "Met “Hoeveel kost dit?” vraag je naar de prijs."
    }
  },
  {
    "id": "gezondheid",
    "number": 5,
    "title": "Gezondheid",
    "subtitle": "Lichaam, klachten en afspraak",
    "image": "images/theme-dokter.svg",
    "description": "Benoem lichaamsdelen, beschrijf eenvoudige klachten, maak afspraken en begrijp adviezen.",
    "canDo": [
      "Ik kan een afspraak bij de huisarts maken.",
      "Ik kan klachten en pijn beschrijven.",
      "Ik kan eenvoudige medische instructies begrijpen."
    ],
    "vocabulary": [
      [
        "de klacht",
        "Een lichamelijk of psychisch probleem.",
        "Wat zijn uw klachten?"
      ],
      [
        "de afspraak",
        "Een afgesproken tijd voor een bezoek.",
        "Ik heb morgen een afspraak bij de huisarts."
      ],
      [
        "het recept",
        "Een document waarmee je medicijnen krijgt.",
        "De dokter schrijft een recept."
      ],
      [
        "de bijsluiter",
        "Papier met informatie over een medicijn.",
        "Lees de bijsluiter goed."
      ],
      [
        "hoesten",
        "Met kracht lucht uit je longen laten komen.",
        "Ik moet veel hoesten."
      ],
      [
        "uitrusten",
        "Rust nemen om te herstellen.",
        "U moet een paar dagen uitrusten."
      ],
      [
        "duizelig",
        "Het gevoel hebben dat alles draait.",
        "Ik ben sinds vanochtend duizelig."
      ],
      [
        "beterschap",
        "Wens aan iemand die ziek is.",
        "Beterschap en neem voldoende rust."
      ]
    ],
    "wordGroups": {
      "Zelfstandige naamwoorden": [
        "het lichaam",
        "het hoofd",
        "de keel",
        "de buik",
        "de rug",
        "de arm",
        "het been",
        "de hand",
        "de voet",
        "de klacht",
        "de pijn",
        "de koorts",
        "de huisarts",
        "de assistente",
        "de apotheek",
        "het medicijn",
        "het recept",
        "de afspraak",
        "de verzekering",
        "de bijsluiter"
      ],
      "Werkwoorden": [
        "bellen",
        "afspreken",
        "hoesten",
        "niezen",
        "slikken",
        "ademen",
        "voelen",
        "meten",
        "onderzoeken",
        "bewegen",
        "uitrusten",
        "slapen",
        "innemen",
        "helpen",
        "genezen",
        "wachten"
      ],
      "Beschrijvende woorden": [
        "ziek",
        "gezond",
        "moe",
        "verkouden",
        "misselijk",
        "duizelig",
        "pijnlijk",
        "benauwd",
        "beter",
        "erger",
        "regelmatig",
        "voorzichtig"
      ],
      "Vaste combinaties": [
        "pijn hebben",
        "koorts hebben",
        "een afspraak maken",
        "aan de beurt zijn",
        "medicijnen innemen",
        "drie keer per dag",
        "voor het eten",
        "na het eten",
        "in de wachtkamer",
        "naar de huisarts",
        "veel water drinken",
        "van harte beterschap"
      ]
    },
    "grammar": [
      [
        "Meervoud",
        "arm–armen, hand–handen, dokter–dokters"
      ],
      [
        "Jij en u",
        "informeel en beleefd aanspreken"
      ],
      [
        "Waarom en omdat",
        "Waarom belt u? Omdat ik pijn heb."
      ]
    ],
    "pronunciation": [
      "oor, eer en eur",
      "klemtoon",
      "duidelijk spellen"
    ],
    "dialogue": [
      "Huisartsenpraktijk De Linde, goedemorgen.",
      "Goedemorgen, ik wil graag een afspraak maken.",
      "Wat zijn uw klachten?",
      "Ik heb sinds gisteren pijn in mijn keel."
    ],
    "exercise": {
      "question": "Welke zin is een duidelijke klacht?",
      "options": [
        "Ik heb pijn in mijn knie.",
        "Ik ben een knie.",
        "Mijn knie heeft dokter."
      ],
      "answer": 0,
      "explanation": "Met “Ik heb pijn in…” beschrijf je eenvoudig waar je pijn hebt."
    }
  },
  {
    "id": "kleding",
    "number": 6,
    "title": "Kleding",
    "subtitle": "Kopen, kleuren en tijd",
    "image": "images/theme-kleding.svg",
    "description": "Praat over kleding, kleuren, maten, materialen, passen, betalen en ruilen.",
    "canDo": [
      "Ik kan kleding en kleuren beschrijven.",
      "Ik kan om een andere maat vragen.",
      "Ik kan iets passen, kopen of ruilen."
    ],
    "vocabulary": [
      [
        "de paskamer",
        "Een kleine ruimte waar je kleding kunt passen.",
        "De paskamers zijn achter in de winkel."
      ],
      [
        "de maat",
        "Een aanduiding van hoe groot kleding is.",
        "Heeft u deze trui in maat M?"
      ],
      [
        "de bon",
        "Het bewijs dat je iets hebt betaald.",
        "Bewaar de bon als je iets wilt ruilen."
      ],
      [
        "de rits",
        "Een sluiting met kleine tandjes.",
        "De rits van mijn jas is kapot."
      ],
      [
        "passen",
        "Kleding aantrekken om te zien of het goed zit.",
        "Mag ik deze broek passen?"
      ],
      [
        "ruilen",
        "Een gekocht product terugbrengen en iets anders nemen.",
        "Ik wil deze trui graag ruilen."
      ],
      [
        "strak",
        "Dicht om het lichaam.",
        "Deze broek zit te strak."
      ],
      [
        "het staat je goed",
        "De kleding ziet er mooi uit bij iemand.",
        "Die blauwe jas staat je goed."
      ]
    ],
    "wordGroups": {
      "Zelfstandige naamwoorden": [
        "de kleding",
        "de jas",
        "de broek",
        "de trui",
        "het shirt",
        "de jurk",
        "de rok",
        "de schoen",
        "de sok",
        "de pet",
        "de maat",
        "de kleur",
        "de stof",
        "de rits",
        "de knoop",
        "de paskamer",
        "de spiegel",
        "de kassa",
        "de bon",
        "de korting"
      ],
      "Werkwoorden": [
        "dragen",
        "aantrekken",
        "uittrekken",
        "passen",
        "kopen",
        "betalen",
        "ruilen",
        "zoeken",
        "kiezen",
        "staan",
        "zitten",
        "openen",
        "sluiten",
        "repareren",
        "wassen",
        "drogen"
      ],
      "Beschrijvende woorden": [
        "rood",
        "blauw",
        "groen",
        "zwart",
        "wit",
        "groot",
        "klein",
        "lang",
        "kort",
        "strak",
        "wijd",
        "kapot"
      ],
      "Vaste combinaties": [
        "welke maat?",
        "welke kleur?",
        "mag ik dit passen?",
        "het zit goed",
        "het is te groot",
        "het is te klein",
        "het staat je goed",
        "in de uitverkoop",
        "met vijftig procent korting",
        "de winkel is open",
        "de winkel is gesloten",
        "de bon bewaren"
      ]
    },
    "grammar": [
      [
        "De en het",
        "de jas, de broek, het shirt"
      ],
      [
        "Welk en welke",
        "welk shirt · welke jas"
      ],
      [
        "Tijd en openingstijden",
        "van negen tot zes · om half tien"
      ]
    ],
    "pronunciation": [
      "aa en a",
      "ie en i",
      "zinsaccent"
    ],
    "dialogue": [
      "Kan ik u helpen?",
      "Ja, heeft u deze jas in maat L?",
      "U kunt hem daar passen.",
      "Dank u. Waar is de paskamer?"
    ],
    "exercise": {
      "question": "Welke vraag gebruik je om kleding te passen?",
      "options": [
        "Mag ik deze jas passen?",
        "Mag ik deze jas eten?",
        "Mag ik deze jas wonen?"
      ],
      "answer": 0,
      "explanation": "Het werkwoord “passen” gebruik je wanneer je kleding aantrekt om de maat te controleren."
    }
  },
  {
    "id": "reizen",
    "number": 7,
    "title": "Reizen",
    "subtitle": "Vervoer, route en kaartje",
    "image": "images/theme-reizen.svg",
    "description": "Gebruik openbaar vervoer, lees tijden, koop een kaartje en vraag de weg.",
    "canDo": [
      "Ik kan een route en vertrektijd begrijpen.",
      "Ik kan een kaartje kopen en inchecken.",
      "Ik kan de weg vragen en eenvoudige aanwijzingen volgen."
    ],
    "vocabulary": [
      [
        "de dienstregeling",
        "Een overzicht van ritten en vertrektijden.",
        "Controleer de dienstregeling in de app."
      ],
      [
        "het perron",
        "De plaats naast het spoor waar reizigers wachten.",
        "De trein staat op perron vier."
      ],
      [
        "de overstap",
        "Het moment waarop je van vervoermiddel verandert.",
        "In Utrecht heb ik een korte overstap."
      ],
      [
        "de vertraging",
        "Extra wachttijd doordat iets later komt.",
        "De trein heeft tien minuten vertraging."
      ],
      [
        "inchecken",
        "Je reis beginnen met een kaart of telefoon.",
        "Vergeet niet in te checken."
      ],
      [
        "uitstappen",
        "Een bus, trein of auto verlaten.",
        "U moet bij de derde halte uitstappen."
      ],
      [
        "rechtdoor",
        "Zonder links of rechts af te slaan.",
        "Ga bij het kruispunt rechtdoor."
      ],
      [
        "hoe kom ik bij…?",
        "Vraag naar een route.",
        "Hoe kom ik bij het station?"
      ]
    ],
    "wordGroups": {
      "Zelfstandige naamwoorden": [
        "de fiets",
        "de auto",
        "de bus",
        "de tram",
        "de metro",
        "de trein",
        "het station",
        "de halte",
        "het spoor",
        "het perron",
        "het kaartje",
        "de ov-chipkaart",
        "de reis",
        "de route",
        "de richting",
        "de overstap",
        "de vertraging",
        "de vertrektijd",
        "de aankomst",
        "de dienstregeling"
      ],
      "Werkwoorden": [
        "reizen",
        "rijden",
        "fietsen",
        "lopen",
        "vertrekken",
        "aankomen",
        "instappen",
        "uitstappen",
        "overstappen",
        "inchecken",
        "uitchecken",
        "wachten",
        "missen",
        "halen",
        "volgen",
        "afslaan"
      ],
      "Beschrijvende woorden": [
        "vroeg",
        "laat",
        "snel",
        "langzaam",
        "druk",
        "rustig",
        "rechtstreeks",
        "vol",
        "leeg",
        "links",
        "rechts",
        "rechtdoor"
      ],
      "Vaste combinaties": [
        "met de trein",
        "op de fiets",
        "naar het station",
        "bij de halte",
        "vanaf spoor vijf",
        "een kaartje kopen",
        "de trein missen",
        "vertraging hebben",
        "op tijd aankomen",
        "links afslaan",
        "rechts afslaan",
        "hoe kom ik bij…?"
      ]
    },
    "grammar": [
      [
        "Modale werkwoorden",
        "Ik moet overstappen. U kunt hier uitstappen."
      ],
      [
        "Scheidbare werkwoorden",
        "instappen, uitstappen, aankomen"
      ],
      [
        "Tijd en volgorde",
        "eerst, daarna, dan en uiteindelijk"
      ]
    ],
    "pronunciation": [
      "ui",
      "ij en ei",
      "stationritme"
    ],
    "dialogue": [
      "Pardon, gaat deze bus naar het centrum?",
      "Ja, maar u moet bij de markt overstappen.",
      "Waar stap ik dan uit?",
      "Bij de vierde halte."
    ],
    "exercise": {
      "question": "Wat betekent “overstappen”?",
      "options": [
        "Een kaartje lezen",
        "Van trein of bus veranderen",
        "Te voet naar huis gaan"
      ],
      "answer": 1,
      "explanation": "Bij overstappen ga je verder met een andere trein, bus, tram of metro."
    }
  },
  {
    "id": "vrije-tijd",
    "number": 8,
    "title": "Vrije tijd",
    "subtitle": "Hobby, weer en afspraak",
    "image": "images/theme-vrije-tijd.svg",
    "description": "Praat over hobby’s, sport, cultuur, het weer, uitnodigingen en plannen.",
    "canDo": [
      "Ik kan over hobby’s en het weekend praten.",
      "Ik kan iemand uitnodigen en een afspraak maken.",
      "Ik kan eenvoudige plannen en weersinformatie begrijpen."
    ],
    "vocabulary": [
      [
        "de vrije tijd",
        "De tijd waarin je niet werkt of naar school gaat.",
        "In mijn vrije tijd speel ik gitaar."
      ],
      [
        "de vereniging",
        "Een groep mensen met dezelfde activiteit of interesse.",
        "Ik ben lid van een sportvereniging."
      ],
      [
        "de voorstelling",
        "Een activiteit in een theater.",
        "De voorstelling begint om acht uur."
      ],
      [
        "de weersverwachting",
        "Informatie over het toekomstige weer.",
        "Volgens de weersverwachting wordt het zonnig."
      ],
      [
        "uitnodigen",
        "Iemand vragen om te komen.",
        "Wij nodigen onze buren uit."
      ],
      [
        "afspreken",
        "Samen een tijd en plaats kiezen.",
        "Zullen we zaterdag afspreken?"
      ],
      [
        "gezellig",
        "Prettig, warm en sociaal.",
        "Het was een gezellige avond."
      ],
      [
        "zin hebben in",
        "Iets graag willen doen.",
        "Heb je zin in een wandeling?"
      ]
    ],
    "wordGroups": {
      "Zelfstandige naamwoorden": [
        "de vrije tijd",
        "de hobby",
        "de sport",
        "de muziek",
        "de film",
        "het boek",
        "het museum",
        "het theater",
        "het concert",
        "de vereniging",
        "de wedstrijd",
        "de wandeling",
        "het park",
        "het bos",
        "het strand",
        "het weekend",
        "de afspraak",
        "de uitnodiging",
        "het weer",
        "de weersverwachting"
      ],
      "Werkwoorden": [
        "wandelen",
        "fietsen",
        "sporten",
        "zwemmen",
        "lezen",
        "kijken",
        "luisteren",
        "dansen",
        "zingen",
        "spelen",
        "bezoeken",
        "uitnodigen",
        "afspreken",
        "beginnen",
        "regenen",
        "schijnen"
      ],
      "Beschrijvende woorden": [
        "leuk",
        "saai",
        "gezellig",
        "interessant",
        "zonnig",
        "bewolkt",
        "droog",
        "nat",
        "warm",
        "koud",
        "graag",
        "liever"
      ],
      "Vaste combinaties": [
        "in mijn vrije tijd",
        "in het weekend",
        "naar de film",
        "naar muziek luisteren",
        "een boek lezen",
        "met vrienden afspreken",
        "iemand uitnodigen",
        "heb je zin in…?",
        "zullen we…?",
        "om zeven uur",
        "het regent",
        "de zon schijnt"
      ]
    },
    "grammar": [
      [
        "Graag en liever",
        "Ik fiets graag. Ik wandel liever."
      ],
      [
        "En, maar en want",
        "Ik ga mee, maar ik kom later."
      ],
      [
        "Voorstel doen",
        "Zullen we…? Wil je…? Heb je zin om…?"
      ]
    ],
    "pronunciation": [
      "z en s",
      "ng en nk",
      "zinsmelodie"
    ],
    "dialogue": [
      "Wat doe je zaterdag?",
      "Ik heb nog geen plannen.",
      "Zullen we naar het park gaan?",
      "Leuk! Om hoe laat spreken we af?"
    ],
    "exercise": {
      "question": "Welke zin is een uitnodiging?",
      "options": [
        "Ik werk op maandag.",
        "Wil je zaterdag bij ons eten?",
        "Het regent vandaag."
      ],
      "answer": 1,
      "explanation": "Met “Wil je…?” kun je iemand uitnodigen of een voorstel doen."
    }
  }
];

const a2Themes = [
  {
    "id": "verhuizen",
    "number": 1,
    "title": "Verhuizen",
    "subtitle": "Nieuwe woning, buren en inrichting",
    "image": "images/a2-verhuizen.svg",
    "description": "Regel een verhuizing, bespreek een woning, maak kennis met buren en los praktische problemen op.",
    "canDo": [
      "Ik kan een verhuizing plannen en uitleggen.",
      "Ik kan contact met buren en een verhuurder opnemen.",
      "Ik kan een woning vergelijken en problemen melden."
    ],
    "vocabulary": [
      [
        "de verhuizing",
        "Het proces waarbij je naar een andere woning gaat.",
        "De verhuizing is gepland voor zaterdag."
      ],
      [
        "de huurovereenkomst",
        "Het contract tussen huurder en verhuurder.",
        "Lees de huurovereenkomst voordat je tekent."
      ],
      [
        "de borg",
        "Geld dat tijdelijk als zekerheid wordt betaald.",
        "De borg is gelijk aan één maand huur."
      ],
      [
        "de oplevering",
        "Het moment waarop een woning officieel wordt overgedragen.",
        "Tijdens de oplevering controleren we alle kamers."
      ],
      [
        "inrichten",
        "Meubels en spullen een plaats geven.",
        "We richten de woonkamer eenvoudig in."
      ],
      [
        "doorgeven",
        "Informatie aan iemand of een organisatie melden.",
        "Geef je nieuwe adres aan de gemeente door."
      ],
      [
        "beschikbaar",
        "Klaar of vrij om te gebruiken.",
        "De verhuiswagen is vrijdag beschikbaar."
      ],
      [
        "rekening houden met",
        "Iets meenemen in je planning of beslissing.",
        "Houd rekening met de smalle trap."
      ]
    ],
    "wordGroups": {
      "Zelfstandige naamwoorden": [
        "de verhuizing",
        "de verhuisdoos",
        "de verhuiswagen",
        "de woning",
        "het huurcontract",
        "de huurovereenkomst",
        "de borg",
        "de sleuteloverdracht",
        "de oplevering",
        "de verhuurder",
        "de huurder",
        "de makelaar",
        "de bezichtiging",
        "de inschrijving",
        "het adres",
        "de bewoner",
        "de buur",
        "de lift",
        "de opslag",
        "de schade"
      ],
      "Werkwoorden": [
        "verhuizen",
        "inpakken",
        "uitpakken",
        "tillen",
        "dragen",
        "inrichten",
        "ophangen",
        "monteren",
        "doorgeven",
        "inschrijven",
        "opzeggen",
        "regelen",
        "afspreken",
        "lenen",
        "beschadigen",
        "controleren"
      ],
      "Beschrijvende woorden": [
        "beschikbaar",
        "geschikt",
        "praktisch",
        "zwaar",
        "licht",
        "breekbaar",
        "compleet",
        "leeg",
        "gemeubileerd",
        "ongemeubileerd",
        "tijdelijk",
        "definitief"
      ],
      "Vaste combinaties": [
        "adres wijzigen",
        "huur opzeggen",
        "borg betalen",
        "sleutel ophalen",
        "dozen inpakken",
        "meubels verplaatsen",
        "kennis maken met de buren",
        "rekening houden met",
        "op tijd doorgeven",
        "een afspraak bevestigen",
        "schade melden",
        "een woning opleveren"
      ]
    },
    "grammar": [
      [
        "Inversie",
        "Volgende week verhuizen wij naar een andere woning."
      ],
      [
        "Er is en er zijn",
        "Er is een lift. Er zijn drie slaapkamers."
      ],
      [
        "Voegwoorden",
        "en, maar, want, dus en of verbinden hoofdzinnen."
      ]
    ],
    "pronunciation": [
      "-lijk",
      "ng en nk",
      "zinsritme bij opsommingen"
    ],
    "dialogue": [
      "Goedemiddag, wij zijn de nieuwe buren.",
      "Welkom! Wanneer zijn jullie verhuisd?",
      "Gisteren. We zijn nog druk aan het uitpakken.",
      "Laat het gerust weten als jullie iets nodig hebben."
    ],
    "exercise": {
      "question": "Welke zin is correct?",
      "options": [
        "Morgen wij verhuizen.",
        "Morgen verhuizen wij.",
        "Morgen wij verhuizen zijn."
      ],
      "answer": 1,
      "explanation": "Na “morgen” staat de persoonsvorm op plek twee: Morgen verhuizen wij."
    }
  },
  {
    "id": "nederland",
    "number": 2,
    "title": "Nederland",
    "subtitle": "Land, gewoonten en samenleving",
    "image": "images/a2-nederland.svg",
    "description": "Praat over regio’s, weer, feestdagen, gewoonten, regels en verschillen tussen landen.",
    "canDo": [
      "Ik kan informatie over Nederland begrijpen.",
      "Ik kan gewoonten en ervaringen vergelijken.",
      "Ik kan mijn mening over een maatschappelijk onderwerp eenvoudig uitleggen."
    ],
    "vocabulary": [
      [
        "de provincie",
        "Een bestuurlijk deel van Nederland.",
        "Noord-Brabant is een provincie in het zuiden."
      ],
      [
        "de gewoonte",
        "Iets wat mensen regelmatig op dezelfde manier doen.",
        "Fietsen is voor veel mensen een dagelijkse gewoonte."
      ],
      [
        "de feestdag",
        "Een officiële of culturele bijzondere dag.",
        "Koningsdag is een bekende feestdag."
      ],
      [
        "de samenleving",
        "Alle mensen die samen in een land of gebied leven.",
        "De Nederlandse samenleving is divers."
      ],
      [
        "verschillen",
        "Niet hetzelfde zijn.",
        "Gewoonten verschillen per regio."
      ],
      [
        "vergelijken",
        "Kijken naar overeenkomsten en verschillen.",
        "Ik vergelijk het openbaar vervoer van twee landen."
      ],
      [
        "typisch",
        "Kenmerkend voor een plaats of groep.",
        "Wat vind jij typisch Nederlands?"
      ],
      [
        "volgens mij",
        "Uitdrukking om je mening te geven.",
        "Volgens mij is fietsen heel praktisch."
      ]
    ],
    "wordGroups": {
      "Zelfstandige naamwoorden": [
        "Nederland",
        "de provincie",
        "de hoofdstad",
        "de regio",
        "de grens",
        "het landschap",
        "de polder",
        "de dijk",
        "de rivier",
        "de kust",
        "het klimaat",
        "de bevolking",
        "de samenleving",
        "de gewoonte",
        "de traditie",
        "de feestdag",
        "de koning",
        "de regering",
        "de regel",
        "het verschil"
      ],
      "Werkwoorden": [
        "wonen",
        "leven",
        "vieren",
        "stemmen",
        "regeren",
        "beschermen",
        "vergelijken",
        "verschillen",
        "lijken op",
        "gewend raken",
        "respecteren",
        "delen",
        "bespreken",
        "reizen",
        "ontdekken",
        "ervaren"
      ],
      "Beschrijvende woorden": [
        "Nederlands",
        "typisch",
        "nationaal",
        "regionaal",
        "druk",
        "dichtbevolkt",
        "vlak",
        "nat",
        "direct",
        "sociaal",
        "gewoon",
        "bijzonder"
      ],
      "Vaste combinaties": [
        "in het noorden",
        "in het zuiden",
        "aan de kust",
        "onder zeeniveau",
        "Koningsdag vieren",
        "de Nederlandse taal",
        "volgens mij",
        "ik vind dat",
        "in vergelijking met",
        "het verschil tussen",
        "gewend zijn aan",
        "rekening houden met"
      ]
    },
    "grammar": [
      [
        "Vergelijken",
        "groot, groter, het grootst · even groot als"
      ],
      [
        "Mening geven",
        "Ik vind dat… Volgens mij…"
      ],
      [
        "Perfectum en imperfectum",
        "Ik heb Nederland bezocht. Vroeger woonde ik elders."
      ]
    ],
    "pronunciation": [
      "Nederlandse plaatsnamen",
      "d en t aan het einde",
      "intonatie bij mening"
    ],
    "dialogue": [
      "Wat vind jij typisch Nederlands?",
      "Volgens mij zijn fietsen en afspraken maken heel typisch.",
      "Was dat anders in jouw land?",
      "Ja, daar gebruikten we vaker de auto."
    ],
    "exercise": {
      "question": "Welke uitdrukking geeft een mening?",
      "options": [
        "Volgens mij is dat handig.",
        "De trein vertrekt om acht uur.",
        "Ik woon op nummer vijf."
      ],
      "answer": 0,
      "explanation": "“Volgens mij” kondigt een persoonlijke mening aan."
    }
  },
  {
    "id": "kinderen",
    "number": 3,
    "title": "Kinderen",
    "subtitle": "Opvoeding, school en opvang",
    "image": "images/a2-kinderen.svg",
    "description": "Bespreek ontwikkeling, opvoeding, school, kinderopvang, gezondheid en contact met professionals.",
    "canDo": [
      "Ik kan over kinderen en opvoeding praten.",
      "Ik kan een gesprek met school of opvang voeren.",
      "Ik kan zorgen, regels en afspraken uitleggen."
    ],
    "vocabulary": [
      [
        "de opvoeding",
        "De manier waarop volwassenen een kind begeleiden.",
        "Ouders maken samen afspraken over de opvoeding."
      ],
      [
        "de kinderopvang",
        "Een plaats waar kinderen worden opgevangen.",
        "Onze dochter gaat twee dagen naar de kinderopvang."
      ],
      [
        "het consultatiebureau",
        "Organisatie die jonge kinderen en ouders begeleidt.",
        "Bij het consultatiebureau wordt de groei gecontroleerd."
      ],
      [
        "de ontwikkeling",
        "De groei van vaardigheden en gedrag.",
        "De taalontwikkeling gaat snel."
      ],
      [
        "ophalen",
        "Iemand of iets op een plaats gaan halen.",
        "Ik haal de kinderen om half zes op."
      ],
      [
        "toestemming geven",
        "Zeggen dat iets mag.",
        "Ouders moeten toestemming geven voor de foto."
      ],
      [
        "zelfstandig",
        "Zonder veel hulp van anderen.",
        "Hij kan zich al zelfstandig aankleden."
      ],
      [
        "zich zorgen maken",
        "Bang zijn dat iets niet goed gaat.",
        "De docent maakt zich zorgen over zijn concentratie."
      ]
    ],
    "wordGroups": {
      "Zelfstandige naamwoorden": [
        "het kind",
        "de ouder",
        "de opvoeding",
        "de ontwikkeling",
        "de kinderopvang",
        "de gastouder",
        "de basisschool",
        "de leerling",
        "de leerkracht",
        "de mentor",
        "de klas",
        "het rapport",
        "het gesprek",
        "de afspraak",
        "de regel",
        "het gedrag",
        "de groei",
        "het consultatiebureau",
        "de vaccinatie",
        "de toestemming"
      ],
      "Werkwoorden": [
        "opvoeden",
        "groeien",
        "leren",
        "spelen",
        "delen",
        "helpen",
        "brengen",
        "ophalen",
        "aanmelden",
        "afmelden",
        "bespreken",
        "oefenen",
        "toestemming geven",
        "zich gedragen",
        "zich zorgen maken",
        "oppassen"
      ],
      "Beschrijvende woorden": [
        "jong",
        "zelfstandig",
        "verlegen",
        "druk",
        "rustig",
        "nieuwsgierig",
        "boos",
        "blij",
        "verdrietig",
        "veilig",
        "verantwoordelijk",
        "duidelijk"
      ],
      "Vaste combinaties": [
        "naar school brengen",
        "van school ophalen",
        "een oudergesprek",
        "zich goed gedragen",
        "regels afspreken",
        "ouders geven toestemming",
        "een kind aanmelden",
        "op tijd afmelden",
        "zich zorgen maken over",
        "hulp nodig hebben",
        "samen spelen",
        "goed voor iemand zorgen"
      ]
    },
    "grammar": [
      [
        "Wederkerende werkwoorden",
        "zich aankleden, zich gedragen, zich zorgen maken"
      ],
      [
        "Omdat en daarom",
        "Hij blijft thuis omdat hij ziek is. Daarom belt zijn moeder school."
      ],
      [
        "Bezittelijke voornaamwoorden",
        "mijn kind, onze school, hun docent"
      ]
    ],
    "pronunciation": [
      "-eren",
      "verkorting in spreektaal",
      "vriendelijke intonatie"
    ],
    "dialogue": [
      "Goedemiddag, ik wil graag iets over Noor bespreken.",
      "Natuurlijk. Hoe gaat het thuis?",
      "Goed, maar ze slaapt de laatste tijd slecht.",
      "Dan houden we daar deze week extra rekening mee."
    ],
    "exercise": {
      "question": "Welke zin gebruikt een wederkerend werkwoord?",
      "options": [
        "Hij kleedt zich aan.",
        "Hij kleedt de jas aan.",
        "Hij is aankleden."
      ],
      "answer": 0,
      "explanation": "Bij “zich aankleden” hoort een wederkerend voornaamwoord: hij kleedt zich aan."
    }
  },
  {
    "id": "winkels",
    "number": 4,
    "title": "Winkels",
    "subtitle": "Kopen, diensten en klachten",
    "image": "images/a2-winkels.svg",
    "description": "Vergelijk producten, vraag advies, bestel online, retourneer aankopen en dien een klacht in.",
    "canDo": [
      "Ik kan producten vergelijken en advies vragen.",
      "Ik kan een aankoop retourneren of ruilen.",
      "Ik kan een eenvoudige klacht duidelijk formuleren."
    ],
    "vocabulary": [
      [
        "de garantie",
        "Belofte dat een product binnen een periode goed moet werken.",
        "Op dit apparaat zit twee jaar garantie."
      ],
      [
        "de kassabon",
        "Bewijs van een aankoop.",
        "Neem de kassabon mee als u iets retourneert."
      ],
      [
        "de klantenservice",
        "Afdeling die klanten met vragen en problemen helpt.",
        "Ik bel de klantenservice over mijn bestelling."
      ],
      [
        "de voorraad",
        "De hoeveelheid producten die beschikbaar is.",
        "Deze maat is niet meer op voorraad."
      ],
      [
        "retourneren",
        "Een gekocht product terugsturen of terugbrengen.",
        "U kunt de schoenen binnen veertien dagen retourneren."
      ],
      [
        "repareren",
        "Iets dat kapot is weer goed maken.",
        "De winkel laat de telefoon repareren."
      ],
      [
        "beschadigd",
        "Niet meer helemaal heel.",
        "Het pakket kwam beschadigd aan."
      ],
      [
        "een klacht indienen",
        "Officieel melden dat iets niet goed is.",
        "Ik wil een klacht indienen over de levering."
      ]
    ],
    "wordGroups": {
      "Zelfstandige naamwoorden": [
        "de winkel",
        "het warenhuis",
        "de webshop",
        "het product",
        "het merk",
        "het model",
        "de kwaliteit",
        "de prijs",
        "de korting",
        "de voorraad",
        "de bestelling",
        "de levering",
        "het pakket",
        "de kassabon",
        "de garantie",
        "de klantenservice",
        "de klacht",
        "de reparatie",
        "de retourzending",
        "de verkoper"
      ],
      "Werkwoorden": [
        "kopen",
        "bestellen",
        "vergelijken",
        "adviseren",
        "betalen",
        "bezorgen",
        "ontvangen",
        "openmaken",
        "controleren",
        "retourneren",
        "ruilen",
        "repareren",
        "klagen",
        "terugbetalen",
        "reserveren",
        "passen"
      ],
      "Beschrijvende woorden": [
        "beschikbaar",
        "uitverkocht",
        "beschadigd",
        "defect",
        "goedkoop",
        "prijzig",
        "betrouwbaar",
        "handig",
        "geschikt",
        "tevreden",
        "ontevreden",
        "vergelijkbaar"
      ],
      "Vaste combinaties": [
        "op voorraad",
        "niet op voorraad",
        "online bestellen",
        "gratis bezorgen",
        "binnen veertien dagen",
        "geld terugkrijgen",
        "een product ruilen",
        "onder garantie",
        "contact opnemen met",
        "een klacht indienen",
        "de kassabon bewaren",
        "waar kan ik terecht?"
      ]
    },
    "grammar": [
      [
        "Betrekkelijk eenvoudig",
        "Het product dat ik kocht, is kapot."
      ],
      [
        "Te + infinitief",
        "Dit apparaat is makkelijk te gebruiken."
      ],
      [
        "Indirecte vraag",
        "Kunt u zeggen wanneer het pakket komt?"
      ]
    ],
    "pronunciation": [
      "samengestelde woorden",
      "klemtoon in merknamen",
      "beleefde klachtintonatie"
    ],
    "dialogue": [
      "Goedemiddag, waarmee kan ik u helpen?",
      "Deze koffiemachine werkt niet meer.",
      "Heeft u de kassabon nog?",
      "Ja, en het product valt nog onder de garantie."
    ],
    "exercise": {
      "question": "Wat heb je meestal nodig om iets te retourneren?",
      "options": [
        "Een paspoort",
        "De kassabon",
        "Een fietskaart"
      ],
      "answer": 1,
      "explanation": "De kassabon is het bewijs dat je het product hebt gekocht."
    }
  },
  {
    "id": "opleidingen",
    "number": 5,
    "title": "Opleidingen",
    "subtitle": "Onderwijs, beroep en ontwikkeling",
    "image": "images/a2-opleidingen.svg",
    "description": "Praat over Nederlandse opleidingen, toelating, stages, vaardigheden en studiekeuzes.",
    "canDo": [
      "Ik kan opleidingsinformatie begrijpen.",
      "Ik kan over ervaring, diploma’s en vaardigheden praten.",
      "Ik kan informatie vragen over toelating en stage."
    ],
    "vocabulary": [
      [
        "de opleiding",
        "Een georganiseerd programma waarin je kennis en vaardigheden leert.",
        "Ik volg een opleiding in de techniek."
      ],
      [
        "de toelatingseis",
        "Voorwaarde waaraan je moet voldoen om te starten.",
        "Een diploma is een van de toelatingseisen."
      ],
      [
        "de stage",
        "Een periode waarin je in de praktijk leert werken.",
        "In het tweede jaar loop ik stage."
      ],
      [
        "het certificaat",
        "Officieel bewijs dat je een cursus hebt afgerond.",
        "Na de cursus ontvang je een certificaat."
      ],
      [
        "zich inschrijven",
        "Je officieel aanmelden voor een opleiding.",
        "Je kunt je online voor de cursus inschrijven."
      ],
      [
        "afronden",
        "Iets volledig voltooien.",
        "Ik wil mijn opleiding volgend jaar afronden."
      ],
      [
        "praktisch",
        "Gericht op doen en toepassen.",
        "De opleiding heeft veel praktische opdrachten."
      ],
      [
        "ervaring opdoen",
        "Door iets te doen nieuwe kennis en vaardigheden krijgen.",
        "Tijdens de stage doe je werkervaring op."
      ]
    ],
    "wordGroups": {
      "Zelfstandige naamwoorden": [
        "de opleiding",
        "het onderwijs",
        "de basisschool",
        "de middelbare school",
        "het mbo",
        "het hbo",
        "de universiteit",
        "de cursus",
        "het vak",
        "de student",
        "de docent",
        "het diploma",
        "het certificaat",
        "de toelatingseis",
        "de inschrijving",
        "het college",
        "de stage",
        "de vaardigheid",
        "de ervaring",
        "het niveau"
      ],
      "Werkwoorden": [
        "studeren",
        "leren",
        "volgen",
        "inschrijven",
        "aanmelden",
        "toelaten",
        "slagen",
        "zakken",
        "afronden",
        "oefenen",
        "onderzoeken",
        "presenteren",
        "samenwerken",
        "stage lopen",
        "ervaring opdoen",
        "kiezen"
      ],
      "Beschrijvende woorden": [
        "theoretisch",
        "praktisch",
        "voltijd",
        "deeltijd",
        "verplicht",
        "optioneel",
        "geschikt",
        "gemotiveerd",
        "zelfstandig",
        "moeilijk",
        "haalbaar",
        "erkend"
      ],
      "Vaste combinaties": [
        "een opleiding volgen",
        "zich inschrijven voor",
        "toelating doen",
        "examen afleggen",
        "voor een examen slagen",
        "voor een examen zakken",
        "een diploma behalen",
        "een stageplaats zoeken",
        "praktijkervaring krijgen",
        "een keuze maken",
        "informatie aanvragen",
        "een afspraak met een studieadviseur"
      ]
    },
    "grammar": [
      [
        "Verleden tijd",
        "Ik studeerde vroeger natuurkunde."
      ],
      [
        "Om te",
        "Ik volg een cursus om beter Nederlands te spreken."
      ],
      [
        "Ervaring beschrijven",
        "Ik heb drie jaar ervaring met…"
      ]
    ],
    "pronunciation": [
      "lange woorden verdelen",
      "-tie en -sion",
      "presentatieritme"
    ],
    "dialogue": [
      "Goedemiddag, ik wil informatie over deze opleiding.",
      "Heeft u al een diploma op dit niveau?",
      "Ja, maar het diploma komt uit het buitenland.",
      "Dan kunt u een diplomawaardering aanvragen."
    ],
    "exercise": {
      "question": "Welke combinatie is correct?",
      "options": [
        "een opleiding volgen",
        "een opleiding rijden",
        "een opleiding drinken"
      ],
      "answer": 0,
      "explanation": "In het Nederlands “volg” je een opleiding of cursus."
    }
  },
  {
    "id": "werk-zoeken",
    "number": 6,
    "title": "Werk zoeken",
    "subtitle": "Vacature, sollicitatie en cv",
    "image": "images/a2-werk-zoeken.svg",
    "description": "Zoek vacatures, maak een cv, schrijf een motivatie en bereid een sollicitatiegesprek voor.",
    "canDo": [
      "Ik kan een vacature globaal begrijpen.",
      "Ik kan mijn ervaring en motivatie beschrijven.",
      "Ik kan vragen tijdens een sollicitatiegesprek beantwoorden."
    ],
    "vocabulary": [
      [
        "de vacature",
        "Een open plaats waarvoor een werkgever iemand zoekt.",
        "Ik heb een interessante vacature gevonden."
      ],
      [
        "het cv",
        "Een overzicht van opleiding en werkervaring.",
        "Mijn cv is twee pagina’s lang."
      ],
      [
        "de motivatiebrief",
        "Een brief waarin je uitlegt waarom je een functie wilt.",
        "Pas je motivatiebrief aan de vacature aan."
      ],
      [
        "de referentie",
        "Iemand die informatie over jouw werk kan geven.",
        "Mijn vorige manager is een referentie."
      ],
      [
        "solliciteren",
        "Reageren op een vacature om een baan te krijgen.",
        "Ik solliciteer naar een functie als data-engineer."
      ],
      [
        "voorbereiden",
        "Zorgen dat je klaar bent voor iets.",
        "Ik bereid het sollicitatiegesprek goed voor."
      ],
      [
        "beschikbaar",
        "In staat om op een bepaald moment te beginnen.",
        "Ik ben vanaf september beschikbaar."
      ],
      [
        "in aanmerking komen",
        "Mogelijk geschikt zijn voor iets.",
        "Met deze ervaring kom je voor de functie in aanmerking."
      ]
    ],
    "wordGroups": {
      "Zelfstandige naamwoorden": [
        "de vacature",
        "de baan",
        "de functie",
        "de werkgever",
        "de kandidaat",
        "het cv",
        "de motivatiebrief",
        "de sollicitatie",
        "het sollicitatiegesprek",
        "de ervaring",
        "de opleiding",
        "de vaardigheid",
        "de referentie",
        "het salaris",
        "het contract",
        "de werktijd",
        "de eis",
        "de voorkeur",
        "de website",
        "de reactie"
      ],
      "Werkwoorden": [
        "zoeken",
        "vinden",
        "solliciteren",
        "reageren",
        "schrijven",
        "versturen",
        "voorbereiden",
        "uitnodigen",
        "beschrijven",
        "benadrukken",
        "verdienen",
        "onderhandelen",
        "beginnen",
        "beschikbaar zijn",
        "in aanmerking komen",
        "afwijzen"
      ],
      "Beschrijvende woorden": [
        "vacant",
        "relevant",
        "gemotiveerd",
        "ervaren",
        "flexibel",
        "nauwkeurig",
        "sociaal",
        "zelfstandig",
        "beschikbaar",
        "geschikt",
        "fulltime",
        "parttime"
      ],
      "Vaste combinaties": [
        "een vacature zoeken",
        "op een vacature reageren",
        "een cv maken",
        "een motivatiebrief schrijven",
        "ervaring hebben met",
        "beschikbaar zijn vanaf",
        "uitgenodigd worden voor",
        "een gesprek voorbereiden",
        "sterke punten noemen",
        "een salarisindicatie geven",
        "voor de functie in aanmerking komen",
        "een afwijzing ontvangen"
      ]
    },
    "grammar": [
      [
        "Perfectum voor ervaring",
        "Ik heb vijf jaar in de IT gewerkt."
      ],
      [
        "Kunnen en willen",
        "Ik kan goed analyseren en ik wil mij verder ontwikkelen."
      ],
      [
        "Formele zinnen",
        "Graag licht ik mijn motivatie toe in een gesprek."
      ]
    ],
    "pronunciation": [
      "formeel woordaccent",
      "afkortingen en letters",
      "zelfverzekerde intonatie"
    ],
    "dialogue": [
      "Kunt u iets over uzelf vertellen?",
      "Ik werk al vijf jaar als data-engineer en ik leer graag nieuwe technologieën.",
      "Waarom wilt u bij ons werken?",
      "Omdat de functie goed aansluit bij mijn ervaring en ambities."
    ],
    "exercise": {
      "question": "Wat staat meestal in een cv?",
      "options": [
        "Opleiding en werkervaring",
        "Een boodschappenlijst",
        "De dienstregeling"
      ],
      "answer": 0,
      "explanation": "Een cv geeft een overzicht van opleiding, werkervaring en relevante vaardigheden."
    }
  },
  {
    "id": "werken",
    "number": 7,
    "title": "Werken",
    "subtitle": "Werkdag, collega’s en afspraken",
    "image": "images/a2-werken.svg",
    "description": "Communiceer op het werk, bespreek taken, planning, veiligheid, verlof en samenwerking.",
    "canDo": [
      "Ik kan over taken en planning praten.",
      "Ik kan om hulp, feedback of verlof vragen.",
      "Ik kan eenvoudige problemen op het werk bespreken."
    ],
    "vocabulary": [
      [
        "de werkplek",
        "De plaats waar iemand werkt.",
        "Mijn werkplek is op de tweede verdieping."
      ],
      [
        "de vergadering",
        "Een gepland gesprek met meerdere collega’s.",
        "De vergadering begint om half tien."
      ],
      [
        "de deadline",
        "Het laatste moment waarop iets klaar moet zijn.",
        "De deadline is aanstaande vrijdag."
      ],
      [
        "het verlof",
        "Toegestane tijd waarin je niet werkt.",
        "Ik wil in augustus verlof aanvragen."
      ],
      [
        "overleggen",
        "Samen praten om een beslissing of plan te maken.",
        "We overleggen vanmiddag met het team."
      ],
      [
        "doorgeven",
        "Informatie aan iemand melden.",
        "Geef wijzigingen direct aan je leidinggevende door."
      ],
      [
        "verantwoordelijk",
        "De taak hebben om voor iets te zorgen.",
        "Zij is verantwoordelijk voor de planning."
      ],
      [
        "afhankelijk zijn van",
        "Iets of iemand nodig hebben voor een resultaat.",
        "De startdatum is afhankelijk van de goedkeuring."
      ]
    ],
    "wordGroups": {
      "Zelfstandige naamwoorden": [
        "het werk",
        "de werkplek",
        "de collega",
        "de leidinggevende",
        "het team",
        "de taak",
        "de planning",
        "de deadline",
        "de vergadering",
        "de afspraak",
        "het overleg",
        "de pauze",
        "het rooster",
        "het verlof",
        "de ziekmelding",
        "het salaris",
        "de veiligheid",
        "de instructie",
        "het probleem",
        "de oplossing"
      ],
      "Werkwoorden": [
        "werken",
        "overleggen",
        "plannen",
        "verdelen",
        "uitvoeren",
        "controleren",
        "doorgeven",
        "melden",
        "aanvragen",
        "goedkeuren",
        "samenwerken",
        "helpen",
        "uitleggen",
        "afronden",
        "verbeteren",
        "oplossen"
      ],
      "Beschrijvende woorden": [
        "druk",
        "rustig",
        "duidelijk",
        "veilig",
        "verantwoordelijk",
        "beschikbaar",
        "flexibel",
        "efficiënt",
        "tevreden",
        "ziek",
        "afwezig",
        "op tijd"
      ],
      "Vaste combinaties": [
        "aan het werk",
        "een taak uitvoeren",
        "een deadline halen",
        "een vergadering bijwonen",
        "verlof aanvragen",
        "zich ziek melden",
        "feedback geven",
        "feedback ontvangen",
        "contact opnemen met",
        "verantwoordelijk zijn voor",
        "afhankelijk zijn van",
        "een probleem oplossen"
      ]
    },
    "grammar": [
      [
        "Aan het + infinitief",
        "Ik ben een rapport aan het schrijven."
      ],
      [
        "Passief met worden",
        "De planning wordt morgen besproken."
      ],
      [
        "Als en wanneer",
        "Als ik klaar ben, stuur ik het document."
      ]
    ],
    "pronunciation": [
      "werkwoorden met be-",
      "tempo in overleg",
      "beleefd onderbreken"
    ],
    "dialogue": [
      "Heb je even tijd om de planning te bespreken?",
      "Ja, maar over tien minuten begint mijn vergadering.",
      "Dan stuur ik eerst de belangrijkste punten per e-mail.",
      "Prima, daarna overleggen we verder."
    ],
    "exercise": {
      "question": "Welke combinatie is correct?",
      "options": [
        "verlof aanvragen",
        "verlof koken",
        "verlof fietsen"
      ],
      "answer": 0,
      "explanation": "Je vraagt verlof aan bij je werkgever of leidinggevende."
    }
  },
  {
    "id": "gemeente",
    "number": 8,
    "title": "De gemeente",
    "subtitle": "Documenten, afval en openbare ruimte",
    "image": "images/a2-gemeente.svg",
    "description": "Regel gemeentelijke zaken, vraag documenten aan, meld problemen en begrijp regels in de openbare ruimte.",
    "canDo": [
      "Ik kan een afspraak bij de gemeente maken.",
      "Ik kan een document aanvragen of een wijziging doorgeven.",
      "Ik kan een probleem in de buurt melden."
    ],
    "vocabulary": [
      [
        "de gemeente",
        "De lokale overheid van een stad of dorp.",
        "De gemeente regelt paspoorten en afvalinzameling."
      ],
      [
        "de balie",
        "Een plaats waar een medewerker bezoekers helpt.",
        "Meld u bij balie vier."
      ],
      [
        "de vergunning",
        "Officiële toestemming voor een activiteit.",
        "Voor de verbouwing is een vergunning nodig."
      ],
      [
        "de afvalinzameling",
        "Het ophalen en verwerken van afval.",
        "De afvalinzameling is deze week op donderdag."
      ],
      [
        "aanvragen",
        "Officieel vragen om een document of dienst.",
        "Ik wil een nieuw paspoort aanvragen."
      ],
      [
        "doorgeven",
        "Informatie officieel melden.",
        "U moet uw verhuizing binnen vijf dagen doorgeven."
      ],
      [
        "geldig",
        "Officieel bruikbaar binnen een bepaalde periode.",
        "Mijn identiteitskaart is nog twee jaar geldig."
      ],
      [
        "een melding maken",
        "Een probleem officieel doorgeven.",
        "Ik wil een melding maken van een kapotte straatlamp."
      ]
    ],
    "wordGroups": {
      "Zelfstandige naamwoorden": [
        "de gemeente",
        "het gemeentehuis",
        "de balie",
        "de ambtenaar",
        "de afspraak",
        "het paspoort",
        "de identiteitskaart",
        "het rijbewijs",
        "de geboorteakte",
        "de inschrijving",
        "de verhuizing",
        "de vergunning",
        "de belasting",
        "het afval",
        "de container",
        "de openbare ruimte",
        "de stoep",
        "de straatlamp",
        "de melding",
        "de DigiD"
      ],
      "Werkwoorden": [
        "aanvragen",
        "verlengen",
        "ophalen",
        "doorgeven",
        "inschrijven",
        "uitschrijven",
        "betalen",
        "scheiden",
        "inzamelen",
        "melden",
        "controleren",
        "ondertekenen",
        "meenemen",
        "inloggen",
        "invullen",
        "toestemming geven"
      ],
      "Beschrijvende woorden": [
        "geldig",
        "ongeldig",
        "officieel",
        "digitaal",
        "persoonlijk",
        "openbaar",
        "verplicht",
        "gratis",
        "beschikbaar",
        "kapot",
        "schoon",
        "veilig"
      ],
      "Vaste combinaties": [
        "een afspraak maken",
        "een paspoort aanvragen",
        "een document ophalen",
        "een verhuizing doorgeven",
        "zich inschrijven bij",
        "een formulier invullen",
        "met DigiD inloggen",
        "afval scheiden",
        "grofvuil laten ophalen",
        "een vergunning aanvragen",
        "een melding maken",
        "een identiteitsbewijs meenemen"
      ]
    },
    "grammar": [
      [
        "Moeten en mogen bij regels",
        "U moet een identiteitsbewijs meenemen. U mag hier parkeren."
      ],
      [
        "Voorwaarden met als",
        "Als u verhuist, moet u uw adres doorgeven."
      ],
      [
        "Formeel verzoek",
        "Ik wil graag een afspraak maken voor…"
      ]
    ],
    "pronunciation": [
      "officiële samenstellingen",
      "DigiD uitspreken",
      "duidelijke baliegesprekken"
    ],
    "dialogue": [
      "Goedemorgen, waarmee kan ik u helpen?",
      "Ik wil mijn verhuizing doorgeven en een nieuw rijbewijs aanvragen.",
      "Heeft u een geldig identiteitsbewijs bij u?",
      "Ja, en ik heb de afspraakbevestiging meegenomen."
    ],
    "exercise": {
      "question": "Wat neem je meestal mee naar een afspraak bij de gemeente?",
      "options": [
        "Een geldig identiteitsbewijs",
        "Een pan",
        "Een sportkaart"
      ],
      "answer": 0,
      "explanation": "Bij veel gemeentelijke diensten moet je een geldig identiteitsbewijs laten zien."
    }
  }
];

const concepts = [
  {
    id: 'grammatica', title: 'Grammatica', icon: '¶', description: 'Hoe woorden samen correcte zinnen vormen.',
    children: ['Woordsoorten', 'Zinsdelen', 'Woordvolgorde', 'Zinsconstructies', 'Lidwoorden', 'Voornaamwoorden'], related: ['werkwoorden', 'semantiek'],
  },
  {
    id: 'werkwoorden', title: 'Werkwoorden', icon: '↻', description: 'Acties, toestanden, tijden en vervoegingen.',
    children: ['Tegenwoordige tijd', 'Verleden tijd', 'Voltooide tijd', 'Modale werkwoorden', 'Scheidbare werkwoorden'], related: ['grammatica', 'communicatie'],
  },
  {
    id: 'semantiek', title: 'Semantiek', icon: '◇', description: 'Betekenis, context en relaties tussen woorden.',
    children: ['Synoniemen', 'Tegenstellingen', 'Collocaties', 'Uitdrukkingen', 'Betekenis in context'], related: ['woordenschat', 'communicatie'],
  },
  {
    id: 'woordenschat', title: 'Woordenschat', icon: '▦', description: 'Woorden leren met beeld, geluid en voorbeeldzinnen.',
    children: ['Kennismaken', 'School', 'Wonen', 'Eten', 'Gezondheid', 'Kleding', 'Reizen', 'Vrije tijd'], related: ['semantiek', 'uitspraak'],
  },
  {
    id: 'uitspraak', title: 'Uitspraak', icon: '◖', description: 'Klanken herkennen, luisteren en duidelijk spreken.',
    children: ['Lange en korte klinkers', 'Tweeklanken', 'G en ch', 'Klemtoon', 'Ritme', 'Intonatie'], related: ['woordenschat', 'communicatie'],
  },
  {
    id: 'communicatie', title: 'Communicatie', icon: '◎', description: 'Luisteren, spreken, lezen en schrijven in echte situaties.',
    children: ['Begroeten', 'Vragen stellen', 'Luisteren', 'Lezen', 'Schrijven', 'Formeel en informeel'], related: ['semantiek', 'uitspraak'],
  },
];

const grammarTopics = [
  { id: 'bepaald-lidwoord', level: 'A1', title: 'De en het', summary: 'Een bekend zelfstandig naamwoord krijgt vaak de of het.', rule: 'de-woord · het-woord · alle meervouden krijgen de', examples: ['de fiets', 'het huis', 'de kinderen'], connections: ['Zelfstandig naamwoord', 'Meervoud', 'Bijvoeglijk naamwoord'] },
  { id: 'onbepaald-lidwoord', level: 'A1', title: 'Een', summary: 'Gebruik een wanneer iets of iemand nog niet specifiek bekend is.', rule: 'een + zelfstandig naamwoord in het enkelvoud', examples: ['een fiets', 'een huis', 'Ik zie een dokter.'], connections: ['De en het', 'Bekend en onbekend'] },
  { id: 'zelfstandig-naamwoord', level: 'A1', title: 'Zelfstandig naamwoord', summary: 'Een woord voor een mens, dier, ding, plaats of idee.', rule: 'leer het woord altijd samen met de of het', examples: ['de docent', 'het kind', 'de school'], connections: ['Lidwoord', 'Meervoud', 'Verkleinwoord'] },
  { id: 'meervoud', level: 'A1', title: 'Meervoud', summary: 'Veel zelfstandige naamwoorden krijgen -en of -s.', rule: 'boek–boeken · tafel–tafels', examples: ['de kinderen', 'de dokters', 'de huizen'], connections: ['Zelfstandig naamwoord', 'De en het'] },
  { id: 'verkleinwoord', level: 'A1', title: 'Verkleinwoord', summary: 'Een verkleinwoord eindigt vaak op -je en is altijd een het-woord.', rule: 'de tafel → het tafeltje', examples: ['het huisje', 'het meisje', 'het kaartje'], connections: ['Het-woord', 'Woordvorming'] },
  { id: 'bijvoeglijk-naamwoord', level: 'A1', title: 'Bijvoeglijk naamwoord', summary: 'Een bijvoeglijk naamwoord beschrijft een zelfstandig naamwoord.', rule: 'de rode jas · het grote huis · een groot huis', examples: ['een blauwe broek', 'de kleine kamer', 'het nieuwe boek'], connections: ['De en het', 'Beschrijving'] },
  { id: 'vergelijking', level: 'A1', title: 'Vergelijken', summary: 'Gebruik -er en -st om dingen te vergelijken.', rule: 'groot · groter · grootst', examples: ['Deze kamer is groter.', 'Dat huis is het grootst.'], connections: ['Bijvoeglijk naamwoord', 'Meer en minder'] },
  { id: 'hoofdtelwoord', level: 'A1', title: 'Getallen', summary: 'Getallen gebruik je voor aantallen, prijzen, tijd en adressen.', rule: 'één, twee, drie · twintig, dertig, veertig', examples: ['twee kinderen', 'vijf euro', 'nummer twaalf'], connections: ['Tijd', 'Datum', 'Hoeveel'] },
  { id: 'persoonlijk-onderwerp', level: 'A1', title: 'Persoonlijk voornaamwoord als onderwerp', summary: 'Het onderwerp vertelt wie of wat iets doet.', rule: 'ik, jij/u, hij/zij/het, wij, jullie, zij', examples: ['Ik woon in Waalre.', 'Zij leert Nederlands.', 'Wij gaan met de trein.'], connections: ['Persoonsvorm', 'Tegenwoordige tijd'] },
  { id: 'persoonlijk-voorwerp', level: 'A1', title: 'Persoonlijk voornaamwoord als voorwerp', summary: 'Een voorwerp verwijst naar iemand of iets dat de handeling ontvangt.', rule: 'mij, jou/u, hem, haar, ons, jullie, hen/ze', examples: ['De docent helpt mij.', 'Ik bel haar.', 'Hij ziet ons.'], connections: ['Onderwerp', 'Werkwoord'] },
  { id: 'bezittelijk', level: 'A1', title: 'Bezittelijk voornaamwoord', summary: 'Deze woorden vertellen bij wie iets hoort.', rule: 'mijn, jouw/uw, zijn, haar, ons/onze, jullie, hun', examples: ['mijn huis', 'onze kinderen', 'haar fiets'], connections: ['De en het', 'Familie'] },
  { id: 'aanwijzend', level: 'A1', title: 'Dit, dat, deze en die', summary: 'Aanwijzende woorden verwijzen naar iets dichtbij of verder weg.', rule: 'dit/dat + het-woord · deze/die + de-woord', examples: ['dit huis', 'dat boek', 'deze jas', 'die fiets'], connections: ['De en het', 'Plaats'] },
  { id: 'vraagwoorden', level: 'A1', title: 'Vraagwoorden', summary: 'Vraagwoorden vragen naar een persoon, ding, plaats, reden, manier of hoeveelheid.', rule: 'wie · wat · waar · wanneer · waarom · hoe · hoeveel', examples: ['Waar woon je?', 'Wie is dat?', 'Hoeveel kost het?'], connections: ['Vraagzin', 'Gesprek'] },
  { id: 'voorzetsels', level: 'A1', title: 'Voorzetsels', summary: 'Voorzetsels geven vaak plaats, richting of tijd aan.', rule: 'in, op, onder, naast, achter, voor, tussen, naar, van, om', examples: ['op tafel', 'naar school', 'om acht uur'], connections: ['Wonen', 'Reizen', 'Tijd'] },
  { id: 'voegwoorden', level: 'A1', title: 'En, maar, want en of', summary: 'Voegwoorden verbinden woorden en korte zinnen.', rule: 'zin + en/maar/want/of + zin', examples: ['Ik drink thee en hij drinkt koffie.', 'Ik ga mee, maar ik kom later.'], connections: ['Hoofdzin', 'Betekenisrelatie'] },
  { id: 'tegenwoordige-tijd', level: 'A1', title: 'Tegenwoordige tijd', summary: 'Gebruik de stam en meestal -t bij jij, u, hij, zij en het.', rule: 'ik werk · jij werkt · wij werken', examples: ['Ik leer Nederlands.', 'Hij woont in Utrecht.', 'Wij maken de opdracht.'], connections: ['Persoonlijk voornaamwoord', 'Persoonsvorm'] },
  { id: 'hebben-zijn', level: 'A1', title: 'Hebben en zijn', summary: 'Twee onregelmatige kernwerkwoorden voor bezit, identiteit en toestand.', rule: 'ik heb/ben · jij hebt/bent · hij heeft/is · wij hebben/zijn', examples: ['Ik heb een afspraak.', 'Zij is thuis.', 'Wij zijn moe.'], connections: ['Kennismaken', 'Gezondheid'] },
  { id: 'modale-werkwoorden', level: 'A1', title: 'Kunnen, moeten, mogen en willen', summary: 'Modale werkwoorden vertellen wat mogelijk, nodig, toegestaan of gewenst is.', rule: 'modaal werkwoord op plek 2 + infinitief aan het einde', examples: ['Ik kan Nederlands spreken.', 'U moet hier wachten.', 'Wij willen betalen.'], connections: ['Werkwoorden', 'Woordvolgorde'] },
  { id: 'onpersoonlijk', level: 'A1', title: 'Onpersoonlijke zinnen', summary: 'Sommige zinnen gebruiken het zonder dat het naar een concreet ding verwijst.', rule: 'het regent · het is koud · het wordt laat', examples: ['Het regent vandaag.', 'Het is negen uur.', 'Het wordt donker.'], connections: ['Weer', 'Tijd'] },
  { id: 'gewone-zin', level: 'A1', title: 'De gewone hoofdzin', summary: 'In een gewone hoofdzin staat de persoonsvorm op de tweede plaats.', rule: 'onderwerp + persoonsvorm + rest', examples: ['Ik woon in Eindhoven.', 'De kinderen spelen buiten.', 'Wij leren Nederlands.'], connections: ['Persoonsvorm', 'Woordvolgorde'] },
  { id: 'woordvolgorde', level: 'A2', title: 'Woordvolgorde met inversie', summary: 'Als tijd of plaats op plek één staat, komt het onderwerp na de persoonsvorm.', rule: 'plek 1 + persoonsvorm + onderwerp + rest', examples: ['Vandaag werk ik thuis.', 'In Eindhoven woont mijn broer.'], connections: ['Hoofdzin', 'Persoonsvorm', 'Nadruk'] },
  { id: 'perfectum', level: 'A2', title: 'De voltooide tijd', summary: 'Gebruik hebben of zijn met een voltooid deelwoord.', rule: 'onderwerp + hebben/zijn + rest + voltooid deelwoord', examples: ['Ik heb vandaag gewerkt.', 'Wij zijn naar huis gegaan.'], connections: ['Hebben of zijn', 'Voltooid deelwoord'] },
  { id: 'bijzin', level: 'B1', title: 'De bijzin', summary: 'In een bijzin staat de persoonsvorm vaak aan het einde.', rule: 'voegwoord + onderwerp + rest + persoonsvorm', examples: ['Ik blijf thuis omdat ik ziek ben.', 'Hij zegt dat hij morgen komt.'], connections: ['Voegwoorden', 'Hoofdzin'] },
  { id: 'er', level: 'B1', title: 'Het woord er', summary: 'Er kan een plaats, hoeveelheid of onbepaald onderwerp aanduiden.', rule: 'de betekenis hangt af van de functie', examples: ['Er staat een fiets buiten.', 'Ik heb er drie gekocht.'], connections: ['Plaats', 'Hoeveelheid'] },
  { id: 'register', level: 'B2', title: 'Formeel en informeel register', summary: 'Kies woorden en zinsbouw die bij de situatie passen.', rule: 'relatie + doel + kanaal bepalen je register', examples: ['Kun je me helpen?', 'Zou u mij hiermee kunnen helpen?'], connections: ['Beleefdheid', 'E-mail'] },
];

const verbs = [
  { infinitive: 'zijn', meaning: 'een toestand of identiteit hebben', auxiliary: 'zijn', present: ['ik ben', 'jij bent', 'hij/zij is', 'wij zijn'], past: ['ik was', 'jij was', 'wij waren'], perfect: 'ik ben geweest', examples: ['Ik ben thuis.', 'Zij is docent.', 'Wij zijn moe.'] },
  { infinitive: 'hebben', meaning: 'iets bezitten of ervaren', auxiliary: 'hebben', present: ['ik heb', 'jij hebt', 'hij/zij heeft', 'wij hebben'], past: ['ik had', 'jij had', 'wij hadden'], perfect: 'ik heb gehad', examples: ['Ik heb een afspraak.', 'Hij heeft koorts.', 'Wij hebben tijd.'] },
  { infinitive: 'heten', meaning: 'een naam hebben', auxiliary: 'hebben', present: ['ik heet', 'jij heet', 'hij/zij heet', 'wij heten'], past: ['ik heette', 'jij heette', 'wij heetten'], perfect: 'ik heb geheten', examples: ['Ik heet Lina.', 'Hoe heet u?', 'Onze docent heet Peter.'] },
  { infinitive: 'komen', meaning: 'naar een plaats bewegen of ergens vandaan zijn', auxiliary: 'zijn', present: ['ik kom', 'jij komt', 'hij/zij komt', 'wij komen'], past: ['ik kwam', 'jij kwam', 'wij kwamen'], perfect: 'ik ben gekomen', examples: ['Ik kom uit Colombia.', 'De bus komt om acht uur.', 'Zij is te laat gekomen.'] },
  { infinitive: 'wonen', meaning: 'op een plaats je huis hebben', auxiliary: 'hebben', present: ['ik woon', 'jij woont', 'hij/zij woont', 'wij wonen'], past: ['ik woonde', 'jij woonde', 'wij woonden'], perfect: 'ik heb gewoond', examples: ['Ik woon in Waalre.', 'Wij wonen bij een park.', 'Hij heeft in Duitsland gewoond.'] },
  { infinitive: 'leren', meaning: 'nieuwe kennis of vaardigheden krijgen', auxiliary: 'hebben', present: ['ik leer', 'jij leert', 'hij/zij leert', 'wij leren'], past: ['ik leerde', 'jij leerde', 'wij leerden'], perfect: 'ik heb geleerd', examples: ['Ik leer Nederlands.', 'De kinderen leren lezen.', 'Wij hebben veel geleerd.'] },
  { infinitive: 'spreken', meaning: 'met woorden communiceren', auxiliary: 'hebben', present: ['ik spreek', 'jij spreekt', 'hij/zij spreekt', 'wij spreken'], past: ['ik sprak', 'jij sprak', 'wij spraken'], perfect: 'ik heb gesproken', examples: ['Ik spreek Spaans.', 'Spreekt u Nederlands?', 'Wij hebben met de docent gesproken.'] },
  { infinitive: 'werken', meaning: 'een taak of beroep uitvoeren', auxiliary: 'hebben', present: ['ik werk', 'jij werkt', 'hij/zij werkt', 'wij werken'], past: ['ik werkte', 'jij werkte', 'wij werkten'], perfect: 'ik heb gewerkt', examples: ['Ik werk vandaag thuis.', 'Hij werkt op kantoor.', 'We hebben samen gewerkt.'] },
  { infinitive: 'gaan', meaning: 'zich naar een andere plaats bewegen', auxiliary: 'zijn', present: ['ik ga', 'jij gaat', 'hij/zij gaat', 'wij gaan'], past: ['ik ging', 'jij ging', 'wij gingen'], perfect: 'ik ben gegaan', examples: ['Wij gaan naar school.', 'Ik ga met de fiets.', 'Zij is naar huis gegaan.'] },
  { infinitive: 'eten', meaning: 'voedsel nemen', auxiliary: 'hebben', present: ['ik eet', 'jij eet', 'hij/zij eet', 'wij eten'], past: ['ik at', 'jij at', 'wij aten'], perfect: 'ik heb gegeten', examples: ['Ik eet een appel.', 'Wat eten jullie?', 'Wij hebben soep gegeten.'] },
  { infinitive: 'drinken', meaning: 'vloeistof nemen', auxiliary: 'hebben', present: ['ik drink', 'jij drinkt', 'hij/zij drinkt', 'wij drinken'], past: ['ik dronk', 'jij dronk', 'wij dronken'], perfect: 'ik heb gedronken', examples: ['Ik drink water.', 'Drinkt u koffie?', 'Hij heeft thee gedronken.'] },
  { infinitive: 'maken', meaning: 'iets doen, produceren of voorbereiden', auxiliary: 'hebben', present: ['ik maak', 'jij maakt', 'hij/zij maakt', 'wij maken'], past: ['ik maakte', 'jij maakte', 'wij maakten'], perfect: 'ik heb gemaakt', examples: ['Ik maak de opdracht.', 'Wij maken soep.', 'Zij heeft een afspraak gemaakt.'] },
  { infinitive: 'willen', meaning: 'een wens of bedoeling hebben', auxiliary: 'hebben', present: ['ik wil', 'jij wilt/wil', 'hij/zij wil', 'wij willen'], past: ['ik wilde', 'jij wilde', 'wij wilden'], perfect: 'ik heb gewild', examples: ['Ik wil graag koffie.', 'Wilt u pinnen?', 'Wij willen Nederlands leren.'] },
  { infinitive: 'kunnen', meaning: 'in staat zijn of een mogelijkheid hebben', auxiliary: 'hebben', present: ['ik kan', 'jij kunt/kan', 'hij/zij kan', 'wij kunnen'], past: ['ik kon', 'jij kon', 'wij konden'], perfect: 'ik heb gekund', examples: ['Ik kan Nederlands spreken.', 'Kunt u dat herhalen?', 'Wij kunnen morgen komen.'] },
  { infinitive: 'moeten', meaning: 'iets noodzakelijk vinden of verplicht zijn', auxiliary: 'hebben', present: ['ik moet', 'jij moet', 'hij/zij moet', 'wij moeten'], past: ['ik moest', 'jij moest', 'wij moesten'], perfect: 'ik heb gemoeten', examples: ['Ik moet overstappen.', 'U moet hier wachten.', 'Wij moeten boodschappen doen.'] },
  { infinitive: 'mogen', meaning: 'toestemming hebben', auxiliary: 'hebben', present: ['ik mag', 'jij mag', 'hij/zij mag', 'wij mogen'], past: ['ik mocht', 'jij mocht', 'wij mochten'], perfect: 'ik heb gemogen', examples: ['Mag ik hier zitten?', 'U mag naar binnen.', 'De kinderen mogen spelen.'] },
  { infinitive: 'begrijpen', meaning: 'de betekenis van iets kennen', auxiliary: 'hebben', present: ['ik begrijp', 'jij begrijpt', 'hij/zij begrijpt', 'wij begrijpen'], past: ['ik begreep', 'jij begreep', 'wij begrepen'], perfect: 'ik heb begrepen', examples: ['Ik begrijp de vraag.', 'Begrijpt u mij?', 'Wij hebben de uitleg begrepen.'] },
  { infinitive: 'schrijven', meaning: 'letters en woorden op papier of een scherm zetten', auxiliary: 'hebben', present: ['ik schrijf', 'jij schrijft', 'hij/zij schrijft', 'wij schrijven'], past: ['ik schreef', 'jij schreef', 'wij schreven'], perfect: 'ik heb geschreven', examples: ['Ik schrijf mijn naam.', 'Zij schrijft een bericht.', 'Wij hebben een e-mail geschreven.'] },
  { infinitive: 'lezen', meaning: 'geschreven taal begrijpen', auxiliary: 'hebben', present: ['ik lees', 'jij leest', 'hij/zij leest', 'wij lezen'], past: ['ik las', 'jij las', 'wij lazen'], perfect: 'ik heb gelezen', examples: ['Ik lees de tekst.', 'Hij leest de krant.', 'Heb je het bericht gelezen?'] },
  { infinitive: 'dragen', meaning: 'kleding aanhebben of iets meenemen', auxiliary: 'hebben', present: ['ik draag', 'jij draagt', 'hij/zij draagt', 'wij dragen'], past: ['ik droeg', 'jij droeg', 'wij droegen'], perfect: 'ik heb gedragen', examples: ['Ik draag een blauwe jas.', 'Wat draagt zij?', 'Hij heeft een pak gedragen.'] },
];

const vocabulary = [
  {
    "word": "de voornaam",
    "article": "de",
    "category": "A1 · hallo",
    "level": "A1",
    "theme": "hallo",
    "image": "images/theme-hallo.svg",
    "alt": "Illustratie bij Hallo",
    "definition": "De naam die vóór je achternaam staat.",
    "example": "Mijn voornaam is Lina."
  },
  {
    "word": "de achternaam",
    "article": "de",
    "category": "A1 · hallo",
    "level": "A1",
    "theme": "hallo",
    "image": "images/theme-hallo.svg",
    "alt": "Illustratie bij Hallo",
    "definition": "De familienaam van een persoon.",
    "example": "Kunt u uw achternaam spellen?"
  },
  {
    "word": "het adres",
    "article": "het",
    "category": "A1 · hallo",
    "level": "A1",
    "theme": "hallo",
    "image": "images/theme-hallo.svg",
    "alt": "Illustratie bij Hallo",
    "definition": "De straat, het huisnummer en de woonplaats.",
    "example": "Mijn adres is Marktstraat 12."
  },
  {
    "word": "de nationaliteit",
    "article": "de",
    "category": "A1 · hallo",
    "level": "A1",
    "theme": "hallo",
    "image": "images/theme-hallo.svg",
    "alt": "Illustratie bij Hallo",
    "definition": "Het land waarmee iemand officieel verbonden is.",
    "example": "Wat is uw nationaliteit?"
  },
  {
    "word": "kennismaken",
    "article": "geen",
    "category": "A1 · hallo",
    "level": "A1",
    "theme": "hallo",
    "image": "images/theme-hallo.svg",
    "alt": "Illustratie bij Hallo",
    "definition": "Iemand voor het eerst ontmoeten en iets over elkaar vertellen.",
    "example": "Wij maken vandaag kennis met de buren."
  },
  {
    "word": "spellen",
    "article": "geen",
    "category": "A1 · hallo",
    "level": "A1",
    "theme": "hallo",
    "image": "images/theme-hallo.svg",
    "alt": "Illustratie bij Hallo",
    "definition": "De letters van een woord één voor één noemen.",
    "example": "Hoe spel je je naam?"
  },
  {
    "word": "getrouwd",
    "article": "geen",
    "category": "A1 · hallo",
    "level": "A1",
    "theme": "hallo",
    "image": "images/theme-hallo.svg",
    "alt": "Illustratie bij Hallo",
    "definition": "Met iemand in een huwelijk verbonden.",
    "example": "Mijn zus is getrouwd."
  },
  {
    "word": "aangenaam",
    "article": "geen",
    "category": "A1 · hallo",
    "level": "A1",
    "theme": "hallo",
    "image": "images/theme-hallo.svg",
    "alt": "Illustratie bij Hallo",
    "definition": "Beleefde reactie wanneer je iemand ontmoet.",
    "example": "Aangenaam, ik ben Amir."
  },
  {
    "word": "het lesrooster",
    "article": "het",
    "category": "A1 · school",
    "level": "A1",
    "theme": "school",
    "image": "images/theme-school.svg",
    "alt": "Illustratie bij School",
    "definition": "Een overzicht van lessen en tijden.",
    "example": "Op het lesrooster staat Nederlands om negen uur."
  },
  {
    "word": "de opdracht",
    "article": "de",
    "category": "A1 · school",
    "level": "A1",
    "theme": "school",
    "image": "images/theme-school.svg",
    "alt": "Illustratie bij School",
    "definition": "Werk dat je voor een les moet maken.",
    "example": "Maak opdracht zes op bladzijde twintig."
  },
  {
    "word": "de uitleg",
    "article": "de",
    "category": "A1 · school",
    "level": "A1",
    "theme": "school",
    "image": "images/theme-school.svg",
    "alt": "Illustratie bij School",
    "definition": "Informatie waardoor iets duidelijk wordt.",
    "example": "De uitleg van de docent is duidelijk."
  },
  {
    "word": "de pauze",
    "article": "de",
    "category": "A1 · school",
    "level": "A1",
    "theme": "school",
    "image": "images/theme-school.svg",
    "alt": "Illustratie bij School",
    "definition": "Een korte periode zonder les of werk.",
    "example": "In de pauze drinken we koffie."
  },
  {
    "word": "inleveren",
    "article": "geen",
    "category": "A1 · school",
    "level": "A1",
    "theme": "school",
    "image": "images/theme-school.svg",
    "alt": "Illustratie bij School",
    "definition": "Werk aan een docent geven wanneer het klaar is.",
    "example": "Je moet het huiswerk vrijdag inleveren."
  },
  {
    "word": "herhalen",
    "article": "geen",
    "category": "A1 · school",
    "level": "A1",
    "theme": "school",
    "image": "images/theme-school.svg",
    "alt": "Illustratie bij School",
    "definition": "Iets nog een keer zeggen of doen.",
    "example": "Kunt u de zin herhalen?"
  },
  {
    "word": "duidelijk",
    "article": "geen",
    "category": "A1 · school",
    "level": "A1",
    "theme": "school",
    "image": "images/theme-school.svg",
    "alt": "Illustratie bij School",
    "definition": "Goed te begrijpen.",
    "example": "De instructie is duidelijk."
  },
  {
    "word": "op tijd",
    "article": "geen",
    "category": "A1 · school",
    "level": "A1",
    "theme": "school",
    "image": "images/theme-school.svg",
    "alt": "Illustratie bij School",
    "definition": "Niet te vroeg en niet te laat.",
    "example": "Ik ben altijd op tijd voor de les."
  },
  {
    "word": "de woning",
    "article": "de",
    "category": "A1 · wonen",
    "level": "A1",
    "theme": "wonen",
    "image": "images/theme-wonen.svg",
    "alt": "Illustratie bij Wonen",
    "definition": "Een huis of appartement waarin iemand woont.",
    "example": "Wij zoeken een betaalbare woning."
  },
  {
    "word": "de woonkamer",
    "article": "de",
    "category": "A1 · wonen",
    "level": "A1",
    "theme": "wonen",
    "image": "images/theme-wonen.svg",
    "alt": "Illustratie bij Wonen",
    "definition": "De kamer waar je zit en ontspant.",
    "example": "De bank staat in de woonkamer."
  },
  {
    "word": "de verdieping",
    "article": "de",
    "category": "A1 · wonen",
    "level": "A1",
    "theme": "wonen",
    "image": "images/theme-wonen.svg",
    "alt": "Illustratie bij Wonen",
    "definition": "Een niveau van een gebouw.",
    "example": "Wij wonen op de tweede verdieping."
  },
  {
    "word": "de huur",
    "article": "de",
    "category": "A1 · wonen",
    "level": "A1",
    "theme": "wonen",
    "image": "images/theme-wonen.svg",
    "alt": "Illustratie bij Wonen",
    "definition": "Het bedrag dat je betaalt om ergens te wonen.",
    "example": "De huur is inclusief water."
  },
  {
    "word": "verhuizen",
    "article": "geen",
    "category": "A1 · wonen",
    "level": "A1",
    "theme": "wonen",
    "image": "images/theme-wonen.svg",
    "alt": "Illustratie bij Wonen",
    "definition": "Van de ene woning naar een andere gaan.",
    "example": "Volgende maand verhuizen we naar Waalre."
  },
  {
    "word": "opruimen",
    "article": "geen",
    "category": "A1 · wonen",
    "level": "A1",
    "theme": "wonen",
    "image": "images/theme-wonen.svg",
    "alt": "Illustratie bij Wonen",
    "definition": "Dingen netjes op hun plaats zetten.",
    "example": "Ik ruim de keuken op."
  },
  {
    "word": "ruim",
    "article": "geen",
    "category": "A1 · wonen",
    "level": "A1",
    "theme": "wonen",
    "image": "images/theme-wonen.svg",
    "alt": "Illustratie bij Wonen",
    "definition": "Met veel beschikbare plaats.",
    "example": "De woonkamer is licht en ruim."
  },
  {
    "word": "in de buurt",
    "article": "geen",
    "category": "A1 · wonen",
    "level": "A1",
    "theme": "wonen",
    "image": "images/theme-wonen.svg",
    "alt": "Illustratie bij Wonen",
    "definition": "Dicht bij een bepaalde plaats.",
    "example": "Er is een supermarkt in de buurt."
  },
  {
    "word": "de maaltijd",
    "article": "de",
    "category": "A1 · eten en drinken",
    "level": "A1",
    "theme": "eten",
    "image": "images/theme-eten.svg",
    "alt": "Illustratie bij Eten en drinken",
    "definition": "Eten op een vast moment van de dag.",
    "example": "Het avondeten is onze warme maaltijd."
  },
  {
    "word": "de aanbieding",
    "article": "de",
    "category": "A1 · eten en drinken",
    "level": "A1",
    "theme": "eten",
    "image": "images/theme-eten.svg",
    "alt": "Illustratie bij Eten en drinken",
    "definition": "Een product dat tijdelijk minder kost.",
    "example": "De koffie is deze week in de aanbieding."
  },
  {
    "word": "de verpakking",
    "article": "de",
    "category": "A1 · eten en drinken",
    "level": "A1",
    "theme": "eten",
    "image": "images/theme-eten.svg",
    "alt": "Illustratie bij Eten en drinken",
    "definition": "Materiaal dat om een product zit.",
    "example": "Lees de informatie op de verpakking."
  },
  {
    "word": "de rekening",
    "article": "de",
    "category": "A1 · eten en drinken",
    "level": "A1",
    "theme": "eten",
    "image": "images/theme-eten.svg",
    "alt": "Illustratie bij Eten en drinken",
    "definition": "Het bedrag dat je in een restaurant moet betalen.",
    "example": "Mogen wij de rekening, alstublieft?"
  },
  {
    "word": "bestellen",
    "article": "geen",
    "category": "A1 · eten en drinken",
    "level": "A1",
    "theme": "eten",
    "image": "images/theme-eten.svg",
    "alt": "Illustratie bij Eten en drinken",
    "definition": "In een winkel of restaurant zeggen wat je wilt hebben.",
    "example": "Ik bestel soep en brood."
  },
  {
    "word": "afrekenen",
    "article": "geen",
    "category": "A1 · eten en drinken",
    "level": "A1",
    "theme": "eten",
    "image": "images/theme-eten.svg",
    "alt": "Illustratie bij Eten en drinken",
    "definition": "Betalen wat je hebt gekocht.",
    "example": "U kunt bij de kassa afrekenen."
  },
  {
    "word": "vers",
    "article": "geen",
    "category": "A1 · eten en drinken",
    "level": "A1",
    "theme": "eten",
    "image": "images/theme-eten.svg",
    "alt": "Illustratie bij Eten en drinken",
    "definition": "Kort geleden gemaakt of geoogst.",
    "example": "De groente op de markt is vers."
  },
  {
    "word": "nog iets anders",
    "article": "geen",
    "category": "A1 · eten en drinken",
    "level": "A1",
    "theme": "eten",
    "image": "images/theme-eten.svg",
    "alt": "Illustratie bij Eten en drinken",
    "definition": "Vraag of iemand meer wil bestellen.",
    "example": "Wilt u nog iets anders?"
  },
  {
    "word": "de klacht",
    "article": "de",
    "category": "A1 · gezondheid",
    "level": "A1",
    "theme": "gezondheid",
    "image": "images/theme-dokter.svg",
    "alt": "Illustratie bij Gezondheid",
    "definition": "Een lichamelijk of psychisch probleem.",
    "example": "Wat zijn uw klachten?"
  },
  {
    "word": "de afspraak",
    "article": "de",
    "category": "A1 · gezondheid",
    "level": "A1",
    "theme": "gezondheid",
    "image": "images/theme-dokter.svg",
    "alt": "Illustratie bij Gezondheid",
    "definition": "Een afgesproken tijd voor een bezoek.",
    "example": "Ik heb morgen een afspraak bij de huisarts."
  },
  {
    "word": "het recept",
    "article": "het",
    "category": "A1 · gezondheid",
    "level": "A1",
    "theme": "gezondheid",
    "image": "images/theme-dokter.svg",
    "alt": "Illustratie bij Gezondheid",
    "definition": "Een document waarmee je medicijnen krijgt.",
    "example": "De dokter schrijft een recept."
  },
  {
    "word": "de bijsluiter",
    "article": "de",
    "category": "A1 · gezondheid",
    "level": "A1",
    "theme": "gezondheid",
    "image": "images/theme-dokter.svg",
    "alt": "Illustratie bij Gezondheid",
    "definition": "Papier met informatie over een medicijn.",
    "example": "Lees de bijsluiter goed."
  },
  {
    "word": "hoesten",
    "article": "geen",
    "category": "A1 · gezondheid",
    "level": "A1",
    "theme": "gezondheid",
    "image": "images/theme-dokter.svg",
    "alt": "Illustratie bij Gezondheid",
    "definition": "Met kracht lucht uit je longen laten komen.",
    "example": "Ik moet veel hoesten."
  },
  {
    "word": "uitrusten",
    "article": "geen",
    "category": "A1 · gezondheid",
    "level": "A1",
    "theme": "gezondheid",
    "image": "images/theme-dokter.svg",
    "alt": "Illustratie bij Gezondheid",
    "definition": "Rust nemen om te herstellen.",
    "example": "U moet een paar dagen uitrusten."
  },
  {
    "word": "duizelig",
    "article": "geen",
    "category": "A1 · gezondheid",
    "level": "A1",
    "theme": "gezondheid",
    "image": "images/theme-dokter.svg",
    "alt": "Illustratie bij Gezondheid",
    "definition": "Het gevoel hebben dat alles draait.",
    "example": "Ik ben sinds vanochtend duizelig."
  },
  {
    "word": "beterschap",
    "article": "geen",
    "category": "A1 · gezondheid",
    "level": "A1",
    "theme": "gezondheid",
    "image": "images/theme-dokter.svg",
    "alt": "Illustratie bij Gezondheid",
    "definition": "Wens aan iemand die ziek is.",
    "example": "Beterschap en neem voldoende rust."
  },
  {
    "word": "de paskamer",
    "article": "de",
    "category": "A1 · kleding",
    "level": "A1",
    "theme": "kleding",
    "image": "images/theme-kleding.svg",
    "alt": "Illustratie bij Kleding",
    "definition": "Een kleine ruimte waar je kleding kunt passen.",
    "example": "De paskamers zijn achter in de winkel."
  },
  {
    "word": "de maat",
    "article": "de",
    "category": "A1 · kleding",
    "level": "A1",
    "theme": "kleding",
    "image": "images/theme-kleding.svg",
    "alt": "Illustratie bij Kleding",
    "definition": "Een aanduiding van hoe groot kleding is.",
    "example": "Heeft u deze trui in maat M?"
  },
  {
    "word": "de bon",
    "article": "de",
    "category": "A1 · kleding",
    "level": "A1",
    "theme": "kleding",
    "image": "images/theme-kleding.svg",
    "alt": "Illustratie bij Kleding",
    "definition": "Het bewijs dat je iets hebt betaald.",
    "example": "Bewaar de bon als je iets wilt ruilen."
  },
  {
    "word": "de rits",
    "article": "de",
    "category": "A1 · kleding",
    "level": "A1",
    "theme": "kleding",
    "image": "images/theme-kleding.svg",
    "alt": "Illustratie bij Kleding",
    "definition": "Een sluiting met kleine tandjes.",
    "example": "De rits van mijn jas is kapot."
  },
  {
    "word": "passen",
    "article": "geen",
    "category": "A1 · kleding",
    "level": "A1",
    "theme": "kleding",
    "image": "images/theme-kleding.svg",
    "alt": "Illustratie bij Kleding",
    "definition": "Kleding aantrekken om te zien of het goed zit.",
    "example": "Mag ik deze broek passen?"
  },
  {
    "word": "ruilen",
    "article": "geen",
    "category": "A1 · kleding",
    "level": "A1",
    "theme": "kleding",
    "image": "images/theme-kleding.svg",
    "alt": "Illustratie bij Kleding",
    "definition": "Een gekocht product terugbrengen en iets anders nemen.",
    "example": "Ik wil deze trui graag ruilen."
  },
  {
    "word": "strak",
    "article": "geen",
    "category": "A1 · kleding",
    "level": "A1",
    "theme": "kleding",
    "image": "images/theme-kleding.svg",
    "alt": "Illustratie bij Kleding",
    "definition": "Dicht om het lichaam.",
    "example": "Deze broek zit te strak."
  },
  {
    "word": "het staat je goed",
    "article": "het",
    "category": "A1 · kleding",
    "level": "A1",
    "theme": "kleding",
    "image": "images/theme-kleding.svg",
    "alt": "Illustratie bij Kleding",
    "definition": "De kleding ziet er mooi uit bij iemand.",
    "example": "Die blauwe jas staat je goed."
  },
  {
    "word": "de dienstregeling",
    "article": "de",
    "category": "A1 · reizen",
    "level": "A1",
    "theme": "reizen",
    "image": "images/theme-reizen.svg",
    "alt": "Illustratie bij Reizen",
    "definition": "Een overzicht van ritten en vertrektijden.",
    "example": "Controleer de dienstregeling in de app."
  },
  {
    "word": "het perron",
    "article": "het",
    "category": "A1 · reizen",
    "level": "A1",
    "theme": "reizen",
    "image": "images/theme-reizen.svg",
    "alt": "Illustratie bij Reizen",
    "definition": "De plaats naast het spoor waar reizigers wachten.",
    "example": "De trein staat op perron vier."
  },
  {
    "word": "de overstap",
    "article": "de",
    "category": "A1 · reizen",
    "level": "A1",
    "theme": "reizen",
    "image": "images/theme-reizen.svg",
    "alt": "Illustratie bij Reizen",
    "definition": "Het moment waarop je van vervoermiddel verandert.",
    "example": "In Utrecht heb ik een korte overstap."
  },
  {
    "word": "de vertraging",
    "article": "de",
    "category": "A1 · reizen",
    "level": "A1",
    "theme": "reizen",
    "image": "images/theme-reizen.svg",
    "alt": "Illustratie bij Reizen",
    "definition": "Extra wachttijd doordat iets later komt.",
    "example": "De trein heeft tien minuten vertraging."
  },
  {
    "word": "inchecken",
    "article": "geen",
    "category": "A1 · reizen",
    "level": "A1",
    "theme": "reizen",
    "image": "images/theme-reizen.svg",
    "alt": "Illustratie bij Reizen",
    "definition": "Je reis beginnen met een kaart of telefoon.",
    "example": "Vergeet niet in te checken."
  },
  {
    "word": "uitstappen",
    "article": "geen",
    "category": "A1 · reizen",
    "level": "A1",
    "theme": "reizen",
    "image": "images/theme-reizen.svg",
    "alt": "Illustratie bij Reizen",
    "definition": "Een bus, trein of auto verlaten.",
    "example": "U moet bij de derde halte uitstappen."
  },
  {
    "word": "rechtdoor",
    "article": "geen",
    "category": "A1 · reizen",
    "level": "A1",
    "theme": "reizen",
    "image": "images/theme-reizen.svg",
    "alt": "Illustratie bij Reizen",
    "definition": "Zonder links of rechts af te slaan.",
    "example": "Ga bij het kruispunt rechtdoor."
  },
  {
    "word": "hoe kom ik bij…?",
    "article": "geen",
    "category": "A1 · reizen",
    "level": "A1",
    "theme": "reizen",
    "image": "images/theme-reizen.svg",
    "alt": "Illustratie bij Reizen",
    "definition": "Vraag naar een route.",
    "example": "Hoe kom ik bij het station?"
  },
  {
    "word": "de vrije tijd",
    "article": "de",
    "category": "A1 · vrije tijd",
    "level": "A1",
    "theme": "vrije-tijd",
    "image": "images/theme-vrije-tijd.svg",
    "alt": "Illustratie bij Vrije tijd",
    "definition": "De tijd waarin je niet werkt of naar school gaat.",
    "example": "In mijn vrije tijd speel ik gitaar."
  },
  {
    "word": "de vereniging",
    "article": "de",
    "category": "A1 · vrije tijd",
    "level": "A1",
    "theme": "vrije-tijd",
    "image": "images/theme-vrije-tijd.svg",
    "alt": "Illustratie bij Vrije tijd",
    "definition": "Een groep mensen met dezelfde activiteit of interesse.",
    "example": "Ik ben lid van een sportvereniging."
  },
  {
    "word": "de voorstelling",
    "article": "de",
    "category": "A1 · vrije tijd",
    "level": "A1",
    "theme": "vrije-tijd",
    "image": "images/theme-vrije-tijd.svg",
    "alt": "Illustratie bij Vrije tijd",
    "definition": "Een activiteit in een theater.",
    "example": "De voorstelling begint om acht uur."
  },
  {
    "word": "de weersverwachting",
    "article": "de",
    "category": "A1 · vrije tijd",
    "level": "A1",
    "theme": "vrije-tijd",
    "image": "images/theme-vrije-tijd.svg",
    "alt": "Illustratie bij Vrije tijd",
    "definition": "Informatie over het toekomstige weer.",
    "example": "Volgens de weersverwachting wordt het zonnig."
  },
  {
    "word": "uitnodigen",
    "article": "geen",
    "category": "A1 · vrije tijd",
    "level": "A1",
    "theme": "vrije-tijd",
    "image": "images/theme-vrije-tijd.svg",
    "alt": "Illustratie bij Vrije tijd",
    "definition": "Iemand vragen om te komen.",
    "example": "Wij nodigen onze buren uit."
  },
  {
    "word": "afspreken",
    "article": "geen",
    "category": "A1 · vrije tijd",
    "level": "A1",
    "theme": "vrije-tijd",
    "image": "images/theme-vrije-tijd.svg",
    "alt": "Illustratie bij Vrije tijd",
    "definition": "Samen een tijd en plaats kiezen.",
    "example": "Zullen we zaterdag afspreken?"
  },
  {
    "word": "gezellig",
    "article": "geen",
    "category": "A1 · vrije tijd",
    "level": "A1",
    "theme": "vrije-tijd",
    "image": "images/theme-vrije-tijd.svg",
    "alt": "Illustratie bij Vrije tijd",
    "definition": "Prettig, warm en sociaal.",
    "example": "Het was een gezellige avond."
  },
  {
    "word": "zin hebben in",
    "article": "geen",
    "category": "A1 · vrije tijd",
    "level": "A1",
    "theme": "vrije-tijd",
    "image": "images/theme-vrije-tijd.svg",
    "alt": "Illustratie bij Vrije tijd",
    "definition": "Iets graag willen doen.",
    "example": "Heb je zin in een wandeling?"
  },
  {
    "word": "de verhuizing",
    "article": "de",
    "category": "A2 · verhuizen",
    "level": "A2",
    "theme": "verhuizen",
    "image": "images/a2-verhuizen.svg",
    "alt": "Illustratie bij Verhuizen",
    "definition": "Het proces waarbij je naar een andere woning gaat.",
    "example": "De verhuizing is gepland voor zaterdag."
  },
  {
    "word": "de huurovereenkomst",
    "article": "de",
    "category": "A2 · verhuizen",
    "level": "A2",
    "theme": "verhuizen",
    "image": "images/a2-verhuizen.svg",
    "alt": "Illustratie bij Verhuizen",
    "definition": "Het contract tussen huurder en verhuurder.",
    "example": "Lees de huurovereenkomst voordat je tekent."
  },
  {
    "word": "de borg",
    "article": "de",
    "category": "A2 · verhuizen",
    "level": "A2",
    "theme": "verhuizen",
    "image": "images/a2-verhuizen.svg",
    "alt": "Illustratie bij Verhuizen",
    "definition": "Geld dat tijdelijk als zekerheid wordt betaald.",
    "example": "De borg is gelijk aan één maand huur."
  },
  {
    "word": "de oplevering",
    "article": "de",
    "category": "A2 · verhuizen",
    "level": "A2",
    "theme": "verhuizen",
    "image": "images/a2-verhuizen.svg",
    "alt": "Illustratie bij Verhuizen",
    "definition": "Het moment waarop een woning officieel wordt overgedragen.",
    "example": "Tijdens de oplevering controleren we alle kamers."
  },
  {
    "word": "inrichten",
    "article": "geen",
    "category": "A2 · verhuizen",
    "level": "A2",
    "theme": "verhuizen",
    "image": "images/a2-verhuizen.svg",
    "alt": "Illustratie bij Verhuizen",
    "definition": "Meubels en spullen een plaats geven.",
    "example": "We richten de woonkamer eenvoudig in."
  },
  {
    "word": "doorgeven",
    "article": "geen",
    "category": "A2 · verhuizen",
    "level": "A2",
    "theme": "verhuizen",
    "image": "images/a2-verhuizen.svg",
    "alt": "Illustratie bij Verhuizen",
    "definition": "Informatie aan iemand of een organisatie melden.",
    "example": "Geef je nieuwe adres aan de gemeente door."
  },
  {
    "word": "beschikbaar",
    "article": "geen",
    "category": "A2 · verhuizen",
    "level": "A2",
    "theme": "verhuizen",
    "image": "images/a2-verhuizen.svg",
    "alt": "Illustratie bij Verhuizen",
    "definition": "Klaar of vrij om te gebruiken.",
    "example": "De verhuiswagen is vrijdag beschikbaar."
  },
  {
    "word": "rekening houden met",
    "article": "geen",
    "category": "A2 · verhuizen",
    "level": "A2",
    "theme": "verhuizen",
    "image": "images/a2-verhuizen.svg",
    "alt": "Illustratie bij Verhuizen",
    "definition": "Iets meenemen in je planning of beslissing.",
    "example": "Houd rekening met de smalle trap."
  },
  {
    "word": "de provincie",
    "article": "de",
    "category": "A2 · nederland",
    "level": "A2",
    "theme": "nederland",
    "image": "images/a2-nederland.svg",
    "alt": "Illustratie bij Nederland",
    "definition": "Een bestuurlijk deel van Nederland.",
    "example": "Noord-Brabant is een provincie in het zuiden."
  },
  {
    "word": "de gewoonte",
    "article": "de",
    "category": "A2 · nederland",
    "level": "A2",
    "theme": "nederland",
    "image": "images/a2-nederland.svg",
    "alt": "Illustratie bij Nederland",
    "definition": "Iets wat mensen regelmatig op dezelfde manier doen.",
    "example": "Fietsen is voor veel mensen een dagelijkse gewoonte."
  },
  {
    "word": "de feestdag",
    "article": "de",
    "category": "A2 · nederland",
    "level": "A2",
    "theme": "nederland",
    "image": "images/a2-nederland.svg",
    "alt": "Illustratie bij Nederland",
    "definition": "Een officiële of culturele bijzondere dag.",
    "example": "Koningsdag is een bekende feestdag."
  },
  {
    "word": "de samenleving",
    "article": "de",
    "category": "A2 · nederland",
    "level": "A2",
    "theme": "nederland",
    "image": "images/a2-nederland.svg",
    "alt": "Illustratie bij Nederland",
    "definition": "Alle mensen die samen in een land of gebied leven.",
    "example": "De Nederlandse samenleving is divers."
  },
  {
    "word": "verschillen",
    "article": "geen",
    "category": "A2 · nederland",
    "level": "A2",
    "theme": "nederland",
    "image": "images/a2-nederland.svg",
    "alt": "Illustratie bij Nederland",
    "definition": "Niet hetzelfde zijn.",
    "example": "Gewoonten verschillen per regio."
  },
  {
    "word": "vergelijken",
    "article": "geen",
    "category": "A2 · nederland",
    "level": "A2",
    "theme": "nederland",
    "image": "images/a2-nederland.svg",
    "alt": "Illustratie bij Nederland",
    "definition": "Kijken naar overeenkomsten en verschillen.",
    "example": "Ik vergelijk het openbaar vervoer van twee landen."
  },
  {
    "word": "typisch",
    "article": "geen",
    "category": "A2 · nederland",
    "level": "A2",
    "theme": "nederland",
    "image": "images/a2-nederland.svg",
    "alt": "Illustratie bij Nederland",
    "definition": "Kenmerkend voor een plaats of groep.",
    "example": "Wat vind jij typisch Nederlands?"
  },
  {
    "word": "volgens mij",
    "article": "geen",
    "category": "A2 · nederland",
    "level": "A2",
    "theme": "nederland",
    "image": "images/a2-nederland.svg",
    "alt": "Illustratie bij Nederland",
    "definition": "Uitdrukking om je mening te geven.",
    "example": "Volgens mij is fietsen heel praktisch."
  },
  {
    "word": "de opvoeding",
    "article": "de",
    "category": "A2 · kinderen",
    "level": "A2",
    "theme": "kinderen",
    "image": "images/a2-kinderen.svg",
    "alt": "Illustratie bij Kinderen",
    "definition": "De manier waarop volwassenen een kind begeleiden.",
    "example": "Ouders maken samen afspraken over de opvoeding."
  },
  {
    "word": "de kinderopvang",
    "article": "de",
    "category": "A2 · kinderen",
    "level": "A2",
    "theme": "kinderen",
    "image": "images/a2-kinderen.svg",
    "alt": "Illustratie bij Kinderen",
    "definition": "Een plaats waar kinderen worden opgevangen.",
    "example": "Onze dochter gaat twee dagen naar de kinderopvang."
  },
  {
    "word": "het consultatiebureau",
    "article": "het",
    "category": "A2 · kinderen",
    "level": "A2",
    "theme": "kinderen",
    "image": "images/a2-kinderen.svg",
    "alt": "Illustratie bij Kinderen",
    "definition": "Organisatie die jonge kinderen en ouders begeleidt.",
    "example": "Bij het consultatiebureau wordt de groei gecontroleerd."
  },
  {
    "word": "de ontwikkeling",
    "article": "de",
    "category": "A2 · kinderen",
    "level": "A2",
    "theme": "kinderen",
    "image": "images/a2-kinderen.svg",
    "alt": "Illustratie bij Kinderen",
    "definition": "De groei van vaardigheden en gedrag.",
    "example": "De taalontwikkeling gaat snel."
  },
  {
    "word": "ophalen",
    "article": "geen",
    "category": "A2 · kinderen",
    "level": "A2",
    "theme": "kinderen",
    "image": "images/a2-kinderen.svg",
    "alt": "Illustratie bij Kinderen",
    "definition": "Iemand of iets op een plaats gaan halen.",
    "example": "Ik haal de kinderen om half zes op."
  },
  {
    "word": "toestemming geven",
    "article": "geen",
    "category": "A2 · kinderen",
    "level": "A2",
    "theme": "kinderen",
    "image": "images/a2-kinderen.svg",
    "alt": "Illustratie bij Kinderen",
    "definition": "Zeggen dat iets mag.",
    "example": "Ouders moeten toestemming geven voor de foto."
  },
  {
    "word": "zelfstandig",
    "article": "geen",
    "category": "A2 · kinderen",
    "level": "A2",
    "theme": "kinderen",
    "image": "images/a2-kinderen.svg",
    "alt": "Illustratie bij Kinderen",
    "definition": "Zonder veel hulp van anderen.",
    "example": "Hij kan zich al zelfstandig aankleden."
  },
  {
    "word": "zich zorgen maken",
    "article": "geen",
    "category": "A2 · kinderen",
    "level": "A2",
    "theme": "kinderen",
    "image": "images/a2-kinderen.svg",
    "alt": "Illustratie bij Kinderen",
    "definition": "Bang zijn dat iets niet goed gaat.",
    "example": "De docent maakt zich zorgen over zijn concentratie."
  },
  {
    "word": "de garantie",
    "article": "de",
    "category": "A2 · winkels",
    "level": "A2",
    "theme": "winkels",
    "image": "images/a2-winkels.svg",
    "alt": "Illustratie bij Winkels",
    "definition": "Belofte dat een product binnen een periode goed moet werken.",
    "example": "Op dit apparaat zit twee jaar garantie."
  },
  {
    "word": "de kassabon",
    "article": "de",
    "category": "A2 · winkels",
    "level": "A2",
    "theme": "winkels",
    "image": "images/a2-winkels.svg",
    "alt": "Illustratie bij Winkels",
    "definition": "Bewijs van een aankoop.",
    "example": "Neem de kassabon mee als u iets retourneert."
  },
  {
    "word": "de klantenservice",
    "article": "de",
    "category": "A2 · winkels",
    "level": "A2",
    "theme": "winkels",
    "image": "images/a2-winkels.svg",
    "alt": "Illustratie bij Winkels",
    "definition": "Afdeling die klanten met vragen en problemen helpt.",
    "example": "Ik bel de klantenservice over mijn bestelling."
  },
  {
    "word": "de voorraad",
    "article": "de",
    "category": "A2 · winkels",
    "level": "A2",
    "theme": "winkels",
    "image": "images/a2-winkels.svg",
    "alt": "Illustratie bij Winkels",
    "definition": "De hoeveelheid producten die beschikbaar is.",
    "example": "Deze maat is niet meer op voorraad."
  },
  {
    "word": "retourneren",
    "article": "geen",
    "category": "A2 · winkels",
    "level": "A2",
    "theme": "winkels",
    "image": "images/a2-winkels.svg",
    "alt": "Illustratie bij Winkels",
    "definition": "Een gekocht product terugsturen of terugbrengen.",
    "example": "U kunt de schoenen binnen veertien dagen retourneren."
  },
  {
    "word": "repareren",
    "article": "geen",
    "category": "A2 · winkels",
    "level": "A2",
    "theme": "winkels",
    "image": "images/a2-winkels.svg",
    "alt": "Illustratie bij Winkels",
    "definition": "Iets dat kapot is weer goed maken.",
    "example": "De winkel laat de telefoon repareren."
  },
  {
    "word": "beschadigd",
    "article": "geen",
    "category": "A2 · winkels",
    "level": "A2",
    "theme": "winkels",
    "image": "images/a2-winkels.svg",
    "alt": "Illustratie bij Winkels",
    "definition": "Niet meer helemaal heel.",
    "example": "Het pakket kwam beschadigd aan."
  },
  {
    "word": "een klacht indienen",
    "article": "een",
    "category": "A2 · winkels",
    "level": "A2",
    "theme": "winkels",
    "image": "images/a2-winkels.svg",
    "alt": "Illustratie bij Winkels",
    "definition": "Officieel melden dat iets niet goed is.",
    "example": "Ik wil een klacht indienen over de levering."
  },
  {
    "word": "de opleiding",
    "article": "de",
    "category": "A2 · opleidingen",
    "level": "A2",
    "theme": "opleidingen",
    "image": "images/a2-opleidingen.svg",
    "alt": "Illustratie bij Opleidingen",
    "definition": "Een georganiseerd programma waarin je kennis en vaardigheden leert.",
    "example": "Ik volg een opleiding in de techniek."
  },
  {
    "word": "de toelatingseis",
    "article": "de",
    "category": "A2 · opleidingen",
    "level": "A2",
    "theme": "opleidingen",
    "image": "images/a2-opleidingen.svg",
    "alt": "Illustratie bij Opleidingen",
    "definition": "Voorwaarde waaraan je moet voldoen om te starten.",
    "example": "Een diploma is een van de toelatingseisen."
  },
  {
    "word": "de stage",
    "article": "de",
    "category": "A2 · opleidingen",
    "level": "A2",
    "theme": "opleidingen",
    "image": "images/a2-opleidingen.svg",
    "alt": "Illustratie bij Opleidingen",
    "definition": "Een periode waarin je in de praktijk leert werken.",
    "example": "In het tweede jaar loop ik stage."
  },
  {
    "word": "het certificaat",
    "article": "het",
    "category": "A2 · opleidingen",
    "level": "A2",
    "theme": "opleidingen",
    "image": "images/a2-opleidingen.svg",
    "alt": "Illustratie bij Opleidingen",
    "definition": "Officieel bewijs dat je een cursus hebt afgerond.",
    "example": "Na de cursus ontvang je een certificaat."
  },
  {
    "word": "zich inschrijven",
    "article": "geen",
    "category": "A2 · opleidingen",
    "level": "A2",
    "theme": "opleidingen",
    "image": "images/a2-opleidingen.svg",
    "alt": "Illustratie bij Opleidingen",
    "definition": "Je officieel aanmelden voor een opleiding.",
    "example": "Je kunt je online voor de cursus inschrijven."
  },
  {
    "word": "afronden",
    "article": "geen",
    "category": "A2 · opleidingen",
    "level": "A2",
    "theme": "opleidingen",
    "image": "images/a2-opleidingen.svg",
    "alt": "Illustratie bij Opleidingen",
    "definition": "Iets volledig voltooien.",
    "example": "Ik wil mijn opleiding volgend jaar afronden."
  },
  {
    "word": "praktisch",
    "article": "geen",
    "category": "A2 · opleidingen",
    "level": "A2",
    "theme": "opleidingen",
    "image": "images/a2-opleidingen.svg",
    "alt": "Illustratie bij Opleidingen",
    "definition": "Gericht op doen en toepassen.",
    "example": "De opleiding heeft veel praktische opdrachten."
  },
  {
    "word": "ervaring opdoen",
    "article": "geen",
    "category": "A2 · opleidingen",
    "level": "A2",
    "theme": "opleidingen",
    "image": "images/a2-opleidingen.svg",
    "alt": "Illustratie bij Opleidingen",
    "definition": "Door iets te doen nieuwe kennis en vaardigheden krijgen.",
    "example": "Tijdens de stage doe je werkervaring op."
  },
  {
    "word": "de vacature",
    "article": "de",
    "category": "A2 · werk zoeken",
    "level": "A2",
    "theme": "werk-zoeken",
    "image": "images/a2-werk-zoeken.svg",
    "alt": "Illustratie bij Werk zoeken",
    "definition": "Een open plaats waarvoor een werkgever iemand zoekt.",
    "example": "Ik heb een interessante vacature gevonden."
  },
  {
    "word": "het cv",
    "article": "het",
    "category": "A2 · werk zoeken",
    "level": "A2",
    "theme": "werk-zoeken",
    "image": "images/a2-werk-zoeken.svg",
    "alt": "Illustratie bij Werk zoeken",
    "definition": "Een overzicht van opleiding en werkervaring.",
    "example": "Mijn cv is twee pagina’s lang."
  },
  {
    "word": "de motivatiebrief",
    "article": "de",
    "category": "A2 · werk zoeken",
    "level": "A2",
    "theme": "werk-zoeken",
    "image": "images/a2-werk-zoeken.svg",
    "alt": "Illustratie bij Werk zoeken",
    "definition": "Een brief waarin je uitlegt waarom je een functie wilt.",
    "example": "Pas je motivatiebrief aan de vacature aan."
  },
  {
    "word": "de referentie",
    "article": "de",
    "category": "A2 · werk zoeken",
    "level": "A2",
    "theme": "werk-zoeken",
    "image": "images/a2-werk-zoeken.svg",
    "alt": "Illustratie bij Werk zoeken",
    "definition": "Iemand die informatie over jouw werk kan geven.",
    "example": "Mijn vorige manager is een referentie."
  },
  {
    "word": "solliciteren",
    "article": "geen",
    "category": "A2 · werk zoeken",
    "level": "A2",
    "theme": "werk-zoeken",
    "image": "images/a2-werk-zoeken.svg",
    "alt": "Illustratie bij Werk zoeken",
    "definition": "Reageren op een vacature om een baan te krijgen.",
    "example": "Ik solliciteer naar een functie als data-engineer."
  },
  {
    "word": "voorbereiden",
    "article": "geen",
    "category": "A2 · werk zoeken",
    "level": "A2",
    "theme": "werk-zoeken",
    "image": "images/a2-werk-zoeken.svg",
    "alt": "Illustratie bij Werk zoeken",
    "definition": "Zorgen dat je klaar bent voor iets.",
    "example": "Ik bereid het sollicitatiegesprek goed voor."
  },
  {
    "word": "beschikbaar",
    "article": "geen",
    "category": "A2 · werk zoeken",
    "level": "A2",
    "theme": "werk-zoeken",
    "image": "images/a2-werk-zoeken.svg",
    "alt": "Illustratie bij Werk zoeken",
    "definition": "In staat om op een bepaald moment te beginnen.",
    "example": "Ik ben vanaf september beschikbaar."
  },
  {
    "word": "in aanmerking komen",
    "article": "geen",
    "category": "A2 · werk zoeken",
    "level": "A2",
    "theme": "werk-zoeken",
    "image": "images/a2-werk-zoeken.svg",
    "alt": "Illustratie bij Werk zoeken",
    "definition": "Mogelijk geschikt zijn voor iets.",
    "example": "Met deze ervaring kom je voor de functie in aanmerking."
  },
  {
    "word": "de werkplek",
    "article": "de",
    "category": "A2 · werken",
    "level": "A2",
    "theme": "werken",
    "image": "images/a2-werken.svg",
    "alt": "Illustratie bij Werken",
    "definition": "De plaats waar iemand werkt.",
    "example": "Mijn werkplek is op de tweede verdieping."
  },
  {
    "word": "de vergadering",
    "article": "de",
    "category": "A2 · werken",
    "level": "A2",
    "theme": "werken",
    "image": "images/a2-werken.svg",
    "alt": "Illustratie bij Werken",
    "definition": "Een gepland gesprek met meerdere collega’s.",
    "example": "De vergadering begint om half tien."
  },
  {
    "word": "de deadline",
    "article": "de",
    "category": "A2 · werken",
    "level": "A2",
    "theme": "werken",
    "image": "images/a2-werken.svg",
    "alt": "Illustratie bij Werken",
    "definition": "Het laatste moment waarop iets klaar moet zijn.",
    "example": "De deadline is aanstaande vrijdag."
  },
  {
    "word": "het verlof",
    "article": "het",
    "category": "A2 · werken",
    "level": "A2",
    "theme": "werken",
    "image": "images/a2-werken.svg",
    "alt": "Illustratie bij Werken",
    "definition": "Toegestane tijd waarin je niet werkt.",
    "example": "Ik wil in augustus verlof aanvragen."
  },
  {
    "word": "overleggen",
    "article": "geen",
    "category": "A2 · werken",
    "level": "A2",
    "theme": "werken",
    "image": "images/a2-werken.svg",
    "alt": "Illustratie bij Werken",
    "definition": "Samen praten om een beslissing of plan te maken.",
    "example": "We overleggen vanmiddag met het team."
  },
  {
    "word": "doorgeven",
    "article": "geen",
    "category": "A2 · werken",
    "level": "A2",
    "theme": "werken",
    "image": "images/a2-werken.svg",
    "alt": "Illustratie bij Werken",
    "definition": "Informatie aan iemand melden.",
    "example": "Geef wijzigingen direct aan je leidinggevende door."
  },
  {
    "word": "verantwoordelijk",
    "article": "geen",
    "category": "A2 · werken",
    "level": "A2",
    "theme": "werken",
    "image": "images/a2-werken.svg",
    "alt": "Illustratie bij Werken",
    "definition": "De taak hebben om voor iets te zorgen.",
    "example": "Zij is verantwoordelijk voor de planning."
  },
  {
    "word": "afhankelijk zijn van",
    "article": "geen",
    "category": "A2 · werken",
    "level": "A2",
    "theme": "werken",
    "image": "images/a2-werken.svg",
    "alt": "Illustratie bij Werken",
    "definition": "Iets of iemand nodig hebben voor een resultaat.",
    "example": "De startdatum is afhankelijk van de goedkeuring."
  },
  {
    "word": "de gemeente",
    "article": "de",
    "category": "A2 · de gemeente",
    "level": "A2",
    "theme": "gemeente",
    "image": "images/a2-gemeente.svg",
    "alt": "Illustratie bij De gemeente",
    "definition": "De lokale overheid van een stad of dorp.",
    "example": "De gemeente regelt paspoorten en afvalinzameling."
  },
  {
    "word": "de balie",
    "article": "de",
    "category": "A2 · de gemeente",
    "level": "A2",
    "theme": "gemeente",
    "image": "images/a2-gemeente.svg",
    "alt": "Illustratie bij De gemeente",
    "definition": "Een plaats waar een medewerker bezoekers helpt.",
    "example": "Meld u bij balie vier."
  },
  {
    "word": "de vergunning",
    "article": "de",
    "category": "A2 · de gemeente",
    "level": "A2",
    "theme": "gemeente",
    "image": "images/a2-gemeente.svg",
    "alt": "Illustratie bij De gemeente",
    "definition": "Officiële toestemming voor een activiteit.",
    "example": "Voor de verbouwing is een vergunning nodig."
  },
  {
    "word": "de afvalinzameling",
    "article": "de",
    "category": "A2 · de gemeente",
    "level": "A2",
    "theme": "gemeente",
    "image": "images/a2-gemeente.svg",
    "alt": "Illustratie bij De gemeente",
    "definition": "Het ophalen en verwerken van afval.",
    "example": "De afvalinzameling is deze week op donderdag."
  },
  {
    "word": "aanvragen",
    "article": "geen",
    "category": "A2 · de gemeente",
    "level": "A2",
    "theme": "gemeente",
    "image": "images/a2-gemeente.svg",
    "alt": "Illustratie bij De gemeente",
    "definition": "Officieel vragen om een document of dienst.",
    "example": "Ik wil een nieuw paspoort aanvragen."
  },
  {
    "word": "doorgeven",
    "article": "geen",
    "category": "A2 · de gemeente",
    "level": "A2",
    "theme": "gemeente",
    "image": "images/a2-gemeente.svg",
    "alt": "Illustratie bij De gemeente",
    "definition": "Informatie officieel melden.",
    "example": "U moet uw verhuizing binnen vijf dagen doorgeven."
  },
  {
    "word": "geldig",
    "article": "geen",
    "category": "A2 · de gemeente",
    "level": "A2",
    "theme": "gemeente",
    "image": "images/a2-gemeente.svg",
    "alt": "Illustratie bij De gemeente",
    "definition": "Officieel bruikbaar binnen een bepaalde periode.",
    "example": "Mijn identiteitskaart is nog twee jaar geldig."
  },
  {
    "word": "een melding maken",
    "article": "een",
    "category": "A2 · de gemeente",
    "level": "A2",
    "theme": "gemeente",
    "image": "images/a2-gemeente.svg",
    "alt": "Illustratie bij De gemeente",
    "definition": "Een probleem officieel doorgeven.",
    "example": "Ik wil een melding maken van een kapotte straatlamp."
  }
];

const listeningScenes = [...a1Themes, ...a2Themes].map((theme) => ({
  id: `${theme.id}-${theme.number}`,
  level: a2Themes.includes(theme) ? 'A2' : 'A1',
  title: theme.title,
  image: theme.image,
  intro: theme.description,
  text: theme.dialogue.join(' '),
  question: theme.exercise.question,
  options: theme.exercise.options,
  answer: theme.exercise.answer,
})).concat([
  {
    id: 'meeting-b1', level: 'B1', title: 'Tijdens een vergadering', image: 'images/scene-meeting.svg',
    intro: 'Collega’s bespreken een technisch project.',
    text: 'We kunnen de nieuwe datapijplijn volgende week testen, maar dan moeten de toegangsrechten uiterlijk donderdag geregeld zijn. Ik stuur vanmiddag de lijst met gebruikers.',
    question: 'Wat moet uiterlijk donderdag geregeld zijn?', options: ['De testresultaten', 'De toegangsrechten', 'De gebruikerslijst'], answer: 1,
  },
]);

const dailyPlan = [
  { label: 'A1- of A2-thema bekijken', duration: 5, page: 'a2' },
  { label: 'Thematische woordenbank', duration: 4, page: 'woordenschat' },
  { label: 'Woordvolgorde', duration: 6, page: 'les' },
  { label: 'Luistermoment', duration: 5, page: 'luisteren' },
];

// Verdieping: extra thematische woordgroepen en uitgebreide grammatica.
for (const theme of [...a1Themes, ...a2Themes]) {
  const additions = expandedWordGroups[theme.id] || {};
  const seen = new Set(Object.values(theme.wordGroups || {}).flat());
  for (const [group, words] of Object.entries(additions)) {
    theme.wordGroups[group] = words.filter((word) => {
      if (seen.has(word)) return false;
      seen.add(word);
      return true;
    });
  }
}

grammarTopics.push(...deepGrammarTopics);

for (const theme of [...a1Themes, ...a2Themes]) {
  const seen = new Set(Object.values(theme.wordGroups || {}).flat());
  const additions = supplementaryWordGroups[theme.id] || [];
  theme.wordGroups['Verdieping en taalhandelingen'] = additions.filter((word) => {
    if (seen.has(word)) return false;
    seen.add(word);
    return true;
  });
}

const STORAGE_KEY = 'nederlands-gewoon-doen-progress-v2';
const SETTINGS_KEY = 'nederlands-gewoon-doen-settings-v2';
const EXERCISE_WORDS = ['Vandaag', 'werk', 'ik', 'thuis'];
const EXPECTED_SENTENCE = 'Vandaag werk ik thuis.';

const state = {
  page: 'vandaag',
  voices: [],
  dutchVoice: null,
  selectedWords: [],
  grammarLevel: 'alle',
  a1Theme: 'hallo',
  a2Theme: 'verhuizen',
  grammarTopic: 'woordvolgorde',
  concept: 'grammatica',
  vocabularyCategory: 'alle',
  vocabularyQuery: '',
  practice: 'order',
  structure: 'voorzetsels',
  practiceSelection: [],
  progress: readProgress(),
  settings: readSettings(),
};

const el = (id) => document.getElementById(id);
const elements = {
  sidebar: el('sidebar'), menuButton: el('menu-button'), pageContext: el('page-context'),
  goalMinutes: el('goal-minutes'), goalBar: el('goal-bar'), toast: el('toast'),
  answerZone: el('answer-zone'), wordBank: el('word-bank'), feedback: el('exercise-feedback'),
  checkAnswer: el('check-answer'), resetExercise: el('reset-exercise'), listenAnswer: el('listen-answer'),
  voiceStatus: el('voice-status'), settingsVoiceStatus: el('settings-voice-status'),
  dailyPlan: el('daily-plan'), dailyVocabulary: el('daily-vocabulary'), levelPath: el('level-path'),
  a1ThemeGrid: el('a1-theme-grid'), a1ThemeDetail: el('a1-theme-detail'),
  a2ThemeGrid: el('a2-theme-grid'), a2ThemeDetail: el('a2-theme-detail'),
  conceptGrid: el('concept-grid'), conceptDetail: el('concept-detail'),
  grammarFilters: el('grammar-filters'), grammarList: el('grammar-list'), grammarDetail: el('grammar-detail'),
  structureTabs: el('structure-tabs'), structureSummary: el('structure-summary'), structureContent: el('structure-content'),
  verbSelect: el('verb-select'), verbMeaning: el('verb-meaning'), verbDetail: el('verb-detail'), speakVerb: el('speak-verb'),
  vocabularyFilters: el('vocabulary-filters'), vocabularyGrid: el('vocabulary-grid'), wordSearch: el('word-search'),
  listeningGrid: el('listening-grid'), practiceStage: el('practice-stage'),
  progressMinutes: el('progress-minutes'), progressCompleted: el('progress-completed'), progressAudio: el('progress-audio'),
  skillProgress: el('skill-progress'), clearProgress: el('clear-progress'),
  settingsDialog: el('settings-dialog'), darkModeSetting: el('dark-mode-setting'),
  speechRate: el('speech-rate'), speechRateOutput: el('speech-rate-output'), themeToggle: el('theme-toggle'),
};

function readProgress() {
  try { return safeProgress(JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')); }
  catch { return safeProgress(); }
}

function saveProgress() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress)); } catch { /* Opslag kan geblokkeerd zijn. */ }
  updateProgressUI();
}

function readSettings() {
  try {
    const stored = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
    return { theme: stored.theme === 'dark' ? 'dark' : 'light', speechRate: Number(stored.speechRate) || .9 };
  } catch { return { theme: 'light', speechRate: .9 }; }
}

function saveSettings() {
  try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings)); } catch { /* Opslag kan geblokkeerd zijn. */ }
}

function showToast(message) {
  if (!elements.toast) return;
  elements.toast.textContent = message;
  elements.toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => elements.toast.classList.remove('show'), 2600);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", '&#039;');
}

function showPage(page, updateHash = true) {
  const target = document.querySelector(`#page-${page}`);
  if (!target) return;
  state.page = page;
  document.querySelectorAll('.page').forEach((node) => node.classList.toggle('active', node === target));
  document.querySelectorAll('.nav-item').forEach((node) => node.classList.toggle('active', node.dataset.page === page));
  const activeNav = document.querySelector(`.nav-item[data-page="${page}"] span:last-child`);
  elements.pageContext.textContent = activeNav?.textContent || (page === 'les' ? 'Visuele les' : 'Nederlands');
  elements.sidebar?.classList.remove('open');
  elements.menuButton?.setAttribute('aria-expanded', 'false');
  if (updateHash) history.replaceState(null, '', `#${page}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function loadVoices() {
  if (!('speechSynthesis' in window)) {
    updateVoiceStatus('Audio wordt niet ondersteund door deze browser.', false);
    return;
  }
  state.voices = window.speechSynthesis.getVoices();
  state.dutchVoice = selectDutchVoice(state.voices);
  const message = state.dutchVoice
    ? `Stem: ${state.dutchVoice.name} (${state.dutchVoice.lang})`
    : 'Geen specifieke Nederlandse stem gevonden; de browser gebruikt nl-NL als taal.';
  updateVoiceStatus(message, Boolean(state.dutchVoice));
}

function updateVoiceStatus(message, available = true) {
  if (elements.voiceStatus) elements.voiceStatus.textContent = message;
  if (elements.settingsVoiceStatus) elements.settingsVoiceStatus.textContent = message;
  elements.voiceStatus?.classList.toggle('warning', !available);
}

function speak(text, rate) {
  if (!text || !('speechSynthesis' in window)) {
    showToast('Deze browser ondersteunt geen spraaksynthese.');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'nl-NL';
  utterance.rate = Math.min(1.2, Math.max(.5, Number(rate) || state.settings.speechRate));
  utterance.pitch = 1;
  if (state.dutchVoice) utterance.voice = state.dutchVoice;
  utterance.onerror = () => showToast('De uitspraak kon niet worden afgespeeld. Controleer je browserstemmen.');
  window.speechSynthesis.speak(utterance);
  state.progress.audioPlays += 1;
  saveProgress();
}

function vocabularyCard(item) {
  return `<article class="card word-card">
    <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt)}">
    <div class="word-card-body">
      <span class="word-type">${escapeHtml(item.article)}-woord · ${escapeHtml(item.category)}</span>
      <h3>${escapeHtml(item.word)}</h3>
      <p>${escapeHtml(item.definition)}</p>
      <span class="word-example">“${escapeHtml(item.example)}”</span>
      <div class="button-row">
        <button class="sound-button speak" type="button" data-text="${escapeHtml(item.word)}" data-rate="0.85">🔊 Woord</button>
        <button class="sound-button secondary speak" type="button" data-text="${escapeHtml(item.example)}" data-rate="0.9">Zin ▶</button>
      </div>
    </div>
  </article>`;
}

function renderDashboard() {
  const now = new Date();
  el('vandaag-title').textContent = getGreeting(now.getHours());
  el('today-label').textContent = new Intl.DateTimeFormat('nl-NL', { weekday: 'long', day: 'numeric', month: 'long' }).format(now);
  elements.dailyPlan.innerHTML = dailyPlan.map((item, index) => `<button class="plan-item" type="button" data-page="${item.page}"><b>${index + 1}</b><span>${item.label}</span><small>${item.duration} min</small></button>`).join('');
  elements.dailyVocabulary.innerHTML = vocabulary.slice(0, 3).map(vocabularyCard).join('');
}

function renderLevels() {
  elements.levelPath.innerHTML = levels.map((level) => `<article class="card level-card ${level.current ? 'current' : ''} ${level.progress === 100 ? 'done' : ''}">
    <div class="level-badge">${level.id}</div>
    <div><span class="kicker">${level.title}</span><h2>${level.description}</h2><div class="module-tags">${level.modules.map((module) => `<span>${module}</span>`).join('')}</div></div>
    <div class="level-progress"><strong>${level.progress}%</strong><div class="meter"><i style="width:${level.progress}%"></i></div></div>
  </article>`).join('');
}

function themeWordCount(theme) {
  return Object.values(theme.wordGroups || {}).reduce((total, words) => total + words.length, 0);
}

function renderThemeWordGroups(theme) {
  return Object.entries(theme.wordGroups || {}).map(([group, words], index) => `<details class="theme-word-group" ${index === 0 ? 'open' : ''}>
    <summary><span>${escapeHtml(group)}</span><strong>${words.length} woorden</strong></summary>
    <div class="theme-word-chip-grid">${words.map((word) => `<button class="theme-word-chip speak" type="button" data-text="${escapeHtml(word)}" data-rate="0.82"><span>${escapeHtml(word)}</span><small>luister</small></button>`).join('')}</div>
  </details>`).join('');
}

function renderCourseThemeDetail(theme, level, completed) {
  const feedbackId = `${level.toLowerCase()}-feedback`;
  return `<div class="a1-detail-hero course-detail-hero level-${level.toLowerCase()}">
      <img src="${theme.image}" alt="Illustratie bij ${escapeHtml(theme.title)}">
      <div><div class="eyebrow"><span>${level}</span> Thema ${theme.number}</div><h1>${escapeHtml(theme.title)}</h1><p class="lead">${escapeHtml(theme.description)}</p>
      <div class="course-metrics"><span><strong>${themeWordCount(theme)}</strong> woorden</span><span><strong>${theme.grammar.length}</strong> grammaticale doelen</span><span><strong>2</strong> luistersnelheden</span></div>
      <div class="button-row"><button class="sound-button speak" type="button" data-text="${escapeHtml(theme.dialogue.join(' '))}" data-rate="0.9">🔊 Luister naar de dialoog</button><button class="sound-button secondary speak" type="button" data-text="${escapeHtml(theme.dialogue.join(' '))}" data-rate="0.62">🐢 Langzaam</button></div></div>
    </div>
    <div class="a1-detail-body">
      <section class="a1-can-do"><span class="kicker">Na dit thema</span><h2>Dit kun je</h2><ul>${theme.canDo.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>
      <section><div class="section-heading compact"><div><span class="kicker">Betekenis in context</span><h2>Uitgelichte kernwoorden</h2></div><span class="plan-total">${theme.vocabulary.length} uitgebreid</span></div>
        <div class="a1-word-grid">${theme.vocabulary.map(([word, meaning, example]) => `<article><strong>${escapeHtml(word)}</strong><p>${escapeHtml(meaning)}</p><small>${escapeHtml(example)}</small><div><button class="speak" type="button" data-text="${escapeHtml(word)}" data-rate="0.82" aria-label="Luister naar ${escapeHtml(word)}">🔊</button><button class="speak" type="button" data-text="${escapeHtml(example)}" data-rate="0.88" aria-label="Luister naar de voorbeeldzin">Zin ▶</button></div></article>`).join('')}</div>
      </section>
      <section class="full-word-bank"><div class="section-heading compact"><div><span class="kicker">Volledige woordenlijst</span><h2>${themeWordCount(theme)} woorden en vaste combinaties</h2></div><span class="plan-total">klik om te luisteren</span></div><p class="word-bank-intro">De woorden zijn semantisch gegroepeerd. Open een groep, luister en herhaal de woorden hardop.</p>${renderThemeWordGroups(theme)}</section>
      <section><span class="kicker">Grammatica</span><h2>Vorm en betekenis</h2><div class="a1-grammar-grid">${theme.grammar.map(([title, explanation]) => `<article><strong>${escapeHtml(title)}</strong><p>${escapeHtml(explanation)}</p><button class="text-button" type="button" data-page="grammatica" data-grammar-level="${level}">Open in de grammatica-atlas →</button></article>`).join('')}</div></section>
      <section class="a1-sound-panel"><div><span class="kicker">Uitspraak</span><h2>Klanken van dit thema</h2><p>Luister, kijk naar de spelling en spreek de woorden hardop na.</p></div><div class="pronunciation-chips">${theme.pronunciation.map((sound) => `<button class="speak" type="button" data-text="${escapeHtml(sound)}" data-rate="0.68">${escapeHtml(sound)} 🔊</button>`).join('')}</div></section>
      <section class="a1-dialogue"><span class="kicker">Gesprek</span><h2>Lees en luister</h2><div>${theme.dialogue.map((line, index) => `<p><b>${index % 2 === 0 ? 'A' : 'B'}</b><span>${escapeHtml(line)}</span><button class="speak" type="button" data-text="${escapeHtml(line)}" data-rate="0.86">🔊</button></p>`).join('')}</div></section>
      <section class="a1-mini-test"><span class="kicker">Mini-toets</span><h2>${escapeHtml(theme.exercise.question)}</h2><div class="option-list">${theme.exercise.options.map((option, index) => `<button type="button" data-course-answer="${index}" data-course-level="${level}" data-course-theme="${theme.id}">${escapeHtml(option)}</button>`).join('')}</div><p class="feedback" id="${feedbackId}">Kies één antwoord.</p></section>
      <button class="${completed ? 'secondary-button' : 'primary-button'} a1-complete-button" type="button" data-complete-course="${theme.id}" data-course-level="${level}">${completed ? '✓ Thema voltooid' : 'Markeer thema als voltooid'}</button>
    </div>`;
}

function renderCourseThemes(level) {
  const isA1 = level === 'A1';
  const themes = isA1 ? a1Themes : a2Themes;
  const currentId = isA1 ? state.a1Theme : state.a2Theme;
  const grid = isA1 ? elements.a1ThemeGrid : elements.a2ThemeGrid;
  const detail = isA1 ? elements.a1ThemeDetail : elements.a2ThemeDetail;
  const completedValues = isA1 ? state.progress.a1Completed : state.progress.a2Completed;
  if (!grid || !detail) return;
  const completed = new Set(completedValues || []);
  grid.innerHTML = themes.map((theme) => `<button class="card a1-theme-card course-theme-card ${theme.id === currentId ? 'active' : ''} ${completed.has(theme.id) ? 'done' : ''}" type="button" data-course-theme-select="${theme.id}" data-course-level="${level}">
    <img src="${theme.image}" alt="Illustratie bij ${escapeHtml(theme.title)}">
    <span class="a1-theme-number">${completed.has(theme.id) ? '✓' : theme.number}</span>
    <div><small>${level} · ${themeWordCount(theme)} woorden</small><h2>${escapeHtml(theme.title)}</h2><p>${escapeHtml(theme.subtitle)}</p></div>
  </button>`).join('');
  const theme = themes.find((item) => item.id === currentId) || themes[0];
  detail.innerHTML = renderCourseThemeDetail(theme, level, completed.has(theme.id));
}

function renderA1Themes() { renderCourseThemes('A1'); }
function renderA2Themes() { renderCourseThemes('A2'); }

function renderConcepts() {
  elements.conceptGrid.innerHTML = concepts.map((concept) => `<button class="card concept-card ${concept.id === state.concept ? 'active' : ''}" type="button" data-concept="${concept.id}">
    <span class="concept-card-icon">${concept.icon}</span><h2>${concept.title}</h2><p>${concept.description}</p><small>${concept.children.length} kernonderwerpen →</small>
  </button>`).join('');
  renderConceptDetail();
}

function renderConceptDetail() {
  const concept = concepts.find((item) => item.id === state.concept) || concepts[0];
  const related = concept.related.map((id) => concepts.find((item) => item.id === id)?.title).filter(Boolean);
  elements.conceptDetail.innerHTML = `<div class="concept-detail-grid">
    <div><span class="kicker">${concept.icon} ${concept.title}</span><h2>${concept.description}</h2><p>Open een kernonderwerp of volg een verbinding naar een ander taaldomein.</p><div class="connection-tags">${related.map((item) => `<span>verbonden met ${item}</span>`).join('')}</div></div>
    <div class="concept-children">${concept.children.map((child) => `<button type="button" data-concept-child="${escapeHtml(child)}"><strong>${escapeHtml(child)}</strong><br><small>uitleg · voorbeelden · audio</small></button>`).join('')}</div>
  </div>`;
}

function renderGrammarFilters() {
  const filters = ['alle', 'A1', 'A2', 'B1', 'B2'];
  elements.grammarFilters.innerHTML = filters.map((level) => `<button class="${state.grammarLevel === level ? 'active' : ''}" type="button" data-grammar-level="${level}">${level === 'alle' ? 'Alle niveaus' : level}</button>`).join('');
}

function renderGrammar() {
  renderGrammarFilters();
  const filtered = grammarTopics.filter((topic) => state.grammarLevel === 'alle' || topic.level === state.grammarLevel);
  if (!filtered.some((topic) => topic.id === state.grammarTopic)) state.grammarTopic = filtered[0]?.id || grammarTopics[0].id;
  elements.grammarList.innerHTML = filtered.map((topic) => `<button class="topic-button ${topic.id === state.grammarTopic ? 'active' : ''}" type="button" data-grammar-topic="${topic.id}"><small>${topic.level}</small><strong>${topic.title}</strong><span>${topic.summary}</span></button>`).join('');
  const topic = grammarTopics.find((item) => item.id === state.grammarTopic) || grammarTopics[0];
  const sections = (topic.sections || []).map((section) => `<article class="grammar-section-card"><h3>${escapeHtml(section.title)}</h3><ul>${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></article>`).join('');
  const contrasts = (topic.contrasts || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  const mistakes = (topic.mistakes || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  elements.grammarDetail.innerHTML = `<div class="eyebrow"><span>${topic.level}</span> grammatica</div><h1>${escapeHtml(topic.title)}</h1><p class="lead">${escapeHtml(topic.summary)}</p>
    <div class="rule-box"><small>Visueel zinsmodel</small><strong>${escapeHtml(topic.rule)}</strong></div>
    <div class="section-heading compact"><h2>Voorbeelden</h2><button class="sound-button speak" type="button" data-text="${escapeHtml(topic.examples.join(' '))}" data-rate="0.82">🔊 Luister naar alle voorbeelden</button></div>
    <ul class="example-list">${topic.examples.map((example) => `<li><span>${escapeHtml(example)}</span><button class="speak" type="button" data-text="${escapeHtml(example)}" data-rate="0.88" aria-label="Luister naar ${escapeHtml(example)}">🔊</button></li>`).join('')}</ul>
    ${sections ? `<div class="grammar-section-grid">${sections}</div>` : ''}
    ${contrasts ? `<section class="grammar-note contrast"><h3>Betekenisverschillen</h3><ul>${contrasts}</ul></section>` : ''}
    ${mistakes ? `<section class="grammar-note mistake"><h3>Veelgemaakte fouten</h3><ul>${mistakes}</ul></section>` : ''}
    <h3>Gerelateerde concepten</h3><div class="connection-tags">${topic.connections.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div>`;
}

function renderVerbs() {
  const coreOptions = verbs.map((verb) => `<option value="core:${escapeHtml(verb.infinitive)}">${escapeHtml(verb.infinitive)}</option>`).join('');
  const separableOptions = separableVerbBank.map((verb) => `<option value="separable:${escapeHtml(verb.infinitive)}">${escapeHtml(verb.infinitive)} · ${escapeHtml(verb.prefix)} + …</option>`).join('');
  elements.verbSelect.innerHTML = `<optgroup label="Kernwerkwoorden">${coreOptions}</optgroup><optgroup label="Scheidbare werkwoorden">${separableOptions}</optgroup>`;
  renderVerbDetail(`core:${verbs[0].infinitive}`);
}

function renderVerbDetail(value) {
  const [kind, infinitive] = String(value).includes(':') ? String(value).split(':') : ['core', value];
  elements.verbSelect.value = `${kind}:${infinitive}`;
  if (kind === 'separable') {
    const verb = separableVerbBank.find((item) => item.infinitive === infinitive) || separableVerbBank[0];
    const models = verb.models || { main: verb.example };
    const modelLabels = {
      main: 'Hoofdzin', inversion: 'Inversie', modal: 'Met een modaal werkwoord', perfect: 'Voltooide tijd', subordinate: 'Bijzin', te: 'Met te',
    };
    elements.verbMeaning.innerHTML = `<span class="kicker">Scheidbaar werkwoord</span><strong>${escapeHtml(verb.meaning)}</strong><small>Voorvoegsel: ${escapeHtml(verb.prefix)}</small>`;
    elements.speakVerb.dataset.text = verb.infinitive;
    elements.verbDetail.innerHTML = `<div class="section-heading"><div><span class="kicker">Werkwoord + zinspositie</span><h1>${escapeHtml(verb.infinitive)}</h1></div><button class="icon-sound speak" type="button" data-text="${escapeHtml(verb.infinitive)}" data-rate="0.75">🔊</button></div>
      <div class="split-verb-visual"><span>${escapeHtml(verb.prefix)}</span><i>+</i><strong>${escapeHtml(verb.infinitive.slice(verb.prefix.length))}</strong><small>in de hoofdzin vaak uit elkaar</small></div>
      <div class="verb-model-grid">${Object.entries(models).map(([key, sentence]) => `<article><small>${modelLabels[key] || key}</small><p>${escapeHtml(sentence)}</p><button class="speak" type="button" data-text="${escapeHtml(sentence)}" data-rate="0.86">🔊 Luister</button></article>`).join('')}</div>
      ${verb.models ? '<div class="grammar-note contrast"><h3>Zie het patroon</h3><p>Hoofdzin: het losse deel staat aan het einde. Bijzin: het werkwoord komt weer samen. Perfectum: <em>ge</em> staat meestal tussen voorvoegsel en stam. Met <em>te</em>: <em>op te staan</em>.</p></div>' : `<div class="grammar-note"><h3>In context</h3><p>${escapeHtml(verb.example)}</p></div>`}`;
    return;
  }
  const verb = verbs.find((item) => item.infinitive === infinitive) || verbs[0];
  elements.verbMeaning.innerHTML = `<span class="kicker">Betekenis</span><strong>${escapeHtml(verb.meaning)}</strong><small>Hulpwerkwoord: ${escapeHtml(verb.auxiliary)}</small>`;
  elements.speakVerb.dataset.text = verb.infinitive;
  elements.verbDetail.innerHTML = `<div class="section-heading"><div><span class="kicker">Werkwoord</span><h1>${escapeHtml(verb.infinitive)}</h1></div><button class="icon-sound speak" type="button" data-text="${escapeHtml(verb.infinitive)}" data-rate="0.75" aria-label="Luister naar ${escapeHtml(verb.infinitive)}">🔊</button></div>
    <div class="verb-tenses"><div class="tense-card"><h3>Tegenwoordige tijd</h3><ul>${verb.present.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div><div class="tense-card"><h3>Verleden tijd</h3><ul>${verb.past.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div><div class="tense-card"><h3>Voltooide tijd</h3><p>${escapeHtml(verb.perfect)}</p></div></div>
    <div class="verb-perfect"><span class="kicker">In context</span><ul class="example-list">${verb.examples.map((example) => `<li><span>${escapeHtml(example)}</span><button class="speak" type="button" data-text="${escapeHtml(example)}" data-rate="0.88">🔊</button></li>`).join('')}</ul></div>`;
}

function structureAudio(text, label = 'Luister') {
  return `<button class="mini-audio speak" type="button" data-text="${escapeHtml(text)}" data-rate="0.84">🔊 ${label}</button>`;
}

function groupBy(items, key) {
  return items.reduce((groups, item) => {
    const value = item[key] || 'Overig';
    (groups[value] ||= []).push(item);
    return groups;
  }, {});
}

function renderPrepositionStructures() {
  const grouped = groupBy(prepositionEntries, 'category');
  elements.structureSummary.innerHTML = `<div><span class="kicker">Voorzetsels als betekenissysteem</span><h2>${prepositionEntries.length} basisgebruiken + ${fixedPrepositionCombinations.length} vaste combinaties</h2><p>Vergelijk plaats, richting, tijd en vaste verbindingen. Leer niet alleen <em>op</em>, maar hele patronen zoals <em>wachten op</em> en <em>trots zijn op</em>.</p></div><div class="structure-metrics"><span><strong>${Object.keys(grouped).length}</strong> functies</span><span><strong>${fixedPrepositionCombinations.length}</strong> vaste patronen</span></div>`;
  const basic = Object.entries(grouped).map(([category, items]) => `<details class="structure-group" open><summary><span>${escapeHtml(category)}</span><strong>${items.length}</strong></summary><div class="structure-card-grid">${items.map((item) => `<article class="structure-card"><div class="structure-card-head"><strong>${escapeHtml(item.form)}</strong><span>${escapeHtml(item.category)}</span></div><p>${escapeHtml(item.meaning)}</p><small>${escapeHtml(item.pattern)}</small><blockquote>${escapeHtml(item.example)}</blockquote>${structureAudio(item.example)}</article>`).join('')}</div></details>`).join('');
  const fixed = `<details class="structure-group" open><summary><span>Werkwoord, bijvoeglijk naamwoord en zelfstandig naamwoord + vast voorzetsel</span><strong>${fixedPrepositionCombinations.length}</strong></summary><div class="pattern-table">${fixedPrepositionCombinations.map((item) => `<article><div><strong>${escapeHtml(item.combination)}</strong><span>${escapeHtml(item.meaning)}</span></div><p>${escapeHtml(item.example)}</p>${structureAudio(item.example)}</article>`).join('')}</div></details>`;
  elements.structureContent.innerHTML = basic + fixed;
}

function renderSeparableStructures() {
  const featured = separableVerbBank.filter((item) => item.models);
  const grouped = groupBy(separableVerbBank, 'prefix');
  elements.structureSummary.innerHTML = `<div><span class="kicker">Werkwoord en zinspositie</span><h2>${separableVerbBank.length} scheidbare werkwoorden</h2><p>Bekijk het werkwoord in hoofdzin, inversie, perfectum, bijzin, modale constructie en combinatie met <em>te</em>.</p></div><div class="structure-metrics"><span><strong>${featured.length}</strong> volledige modellen</span><span><strong>${Object.keys(grouped).length}</strong> voorvoegsels</span></div>`;
  const featureCards = featured.map((verb) => `<article class="featured-verb-card"><div class="structure-card-head"><strong>${escapeHtml(verb.infinitive)}</strong><span>${escapeHtml(verb.prefix)} + …</span></div><p>${escapeHtml(verb.meaning)}</p><div class="sentence-position-list">${Object.entries(verb.models).map(([kind, sentence]) => `<div><small>${escapeHtml(kind)}</small><span>${escapeHtml(sentence)}</span>${structureAudio(sentence, '')}</div>`).join('')}</div></article>`).join('');
  const bank = Object.entries(grouped).map(([prefix, items]) => `<details class="structure-group"><summary><span>${escapeHtml(prefix)}-</span><strong>${items.length} werkwoorden</strong></summary><div class="verb-bank-grid">${items.map((verb) => `<article><strong>${escapeHtml(verb.infinitive)}</strong><span>${escapeHtml(verb.meaning)}</span><p>${escapeHtml(verb.example)}</p>${structureAudio(verb.example)}</article>`).join('')}</div></details>`).join('');
  elements.structureContent.innerHTML = `<section><div class="section-heading"><div><span class="kicker">Volledige zinsmodellen</span><h2>Hetzelfde werkwoord in zes constructies</h2></div></div><div class="featured-verb-grid">${featureCards}</div></section><section><div class="section-heading"><div><span class="kicker">Werkwoordenbank</span><h2>Gegroepeerd per voorvoegsel</h2></div></div>${bank}</section>`;
}

function renderConjunctionStructures() {
  const grouped = groupBy(conjunctionBank, 'type');
  elements.structureSummary.innerHTML = `<div><span class="kicker">Verbinding en logica</span><h2>${conjunctionBank.length} voegwoorden en zinsverbinders</h2><p>Kies eerst de relatie — reden, gevolg, tijd, voorwaarde, tegenstelling of toevoeging — en pas daarna de juiste woordvolgorde toe.</p></div><div class="structure-metrics"><span><strong>${Object.keys(grouped).length}</strong> typen</span><span><strong>2</strong> hoofdpatronen</span></div>`;
  elements.structureContent.innerHTML = Object.entries(grouped).map(([type, items]) => `<details class="structure-group" open><summary><span>${escapeHtml(type)}</span><strong>${items.length}</strong></summary><div class="conjunction-grid">${items.map((item) => `<article><div class="structure-card-head"><strong>${escapeHtml(item.form)}</strong><span>${escapeHtml(item.relation)}</span></div><p class="word-order-label">${escapeHtml(item.wordOrder)}</p><blockquote>${escapeHtml(item.example)}</blockquote>${structureAudio(item.example)}</article>`).join('')}</div></details>`).join('');
}

function renderIdiomStructures() {
  const grouped = groupBy(idiomBank, 'category');
  elements.structureSummary.innerHTML = `<div><span class="kicker">Chunks in plaats van losse woorden</span><h2>${idiomBank.length} vaste en idiomatische combinaties</h2><p>Deze uitdrukkingen functioneren als één betekenisblok. Leer de hele combinatie, inclusief lidwoord, voorzetsel en vaste woordvolgorde.</p></div><div class="structure-metrics"><span><strong>${Object.keys(grouped).length}</strong> betekenisdomeinen</span><span><strong>${idiomBank.length}</strong> voorbeeldzinnen</span></div>`;
  elements.structureContent.innerHTML = Object.entries(grouped).map(([category, items]) => `<details class="structure-group" ${items.length > 3 ? '' : 'open'}><summary><span>${escapeHtml(category)}</span><strong>${items.length}</strong></summary><div class="idiom-grid">${items.map((item) => `<article><strong>${escapeHtml(item.expression)}</strong><p>${escapeHtml(item.meaning)}</p><blockquote>${escapeHtml(item.example)}</blockquote>${structureAudio(item.example)}</article>`).join('')}</div></details>`).join('');
}

function renderStructures(type = state.structure) {
  state.structure = type;
  elements.structureTabs?.querySelectorAll('[data-structure]').forEach((button) => {
    const active = button.dataset.structure === type;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
  });
  if (type === 'scheidbaar') renderSeparableStructures();
  else if (type === 'voegwoorden') renderConjunctionStructures();
  else if (type === 'idiomatiek') renderIdiomStructures();
  else renderPrepositionStructures();
}

function renderVocabularyFilters() {
  const categories = ['alle', ...new Set(vocabulary.map((item) => item.category))];
  elements.vocabularyFilters.innerHTML = categories.map((category) => `<button class="${category === state.vocabularyCategory ? 'active' : ''}" type="button" data-vocabulary-category="${category}">${category === 'alle' ? 'Alle thema’s' : category}</button>`).join('');
}

function renderVocabulary() {
  renderVocabularyFilters();
  const filtered = filterVocabulary(vocabulary, state.vocabularyCategory, state.vocabularyQuery);
  elements.vocabularyGrid.innerHTML = filtered.length ? filtered.map(vocabularyCard).join('') : '<div class="card panel"><h2>Geen woorden gevonden</h2><p>Probeer een ander thema of een kortere zoekterm.</p></div>';
}

function renderListening() {
  elements.listeningGrid.innerHTML = listeningScenes.map((scene) => `<article class="card listening-card">
    <img src="${scene.image}" alt="Illustratie bij ${scene.title}">
    <div class="listening-body"><div class="eyebrow"><span>${scene.level}</span> luisterscène</div><h2>${scene.title}</h2><p>${scene.intro}</p>
      <div class="listening-controls"><button class="sound-button speak" type="button" data-text="${escapeHtml(scene.text)}" data-rate="0.92">🔊 Normaal</button><button class="sound-button secondary speak" type="button" data-text="${escapeHtml(scene.text)}" data-rate="0.62">🐢 Langzaam</button></div>
      <details><summary>Bekijk het transcript</summary><p>${scene.text}</p></details>
      <div class="comprehension"><strong>${scene.question}</strong><div class="option-list">${scene.options.map((option, index) => `<button type="button" data-listening-scene="${scene.id}" data-option="${index}">${option}</button>`).join('')}</div></div>
    </div></article>`).join('');
}

function renderMainExercise() {
  elements.wordBank.replaceChildren();
  elements.answerZone.replaceChildren();
  if (state.selectedWords.length === 0) {
    const placeholder = document.createElement('span');
    placeholder.className = 'placeholder';
    placeholder.textContent = 'Tik hieronder op het eerste woord';
    elements.answerZone.append(placeholder);
  }
  state.selectedWords.forEach((word, index) => {
    const button = document.createElement('button');
    button.type = 'button'; button.textContent = word;
    button.addEventListener('click', () => { state.selectedWords.splice(index, 1); resetMainExercise(); renderMainExercise(); });
    elements.answerZone.append(button);
  });
  remainingWords(EXERCISE_WORDS, state.selectedWords).forEach((word) => {
    const button = document.createElement('button');
    button.type = 'button'; button.textContent = word;
    button.addEventListener('click', () => { state.selectedWords.push(word); resetMainExercise(); renderMainExercise(); });
    elements.wordBank.append(button);
  });
  elements.checkAnswer.disabled = state.selectedWords.length !== EXERCISE_WORDS.length;
}

function resetMainExercise() {
  elements.answerZone.classList.remove('correct', 'wrong');
  elements.feedback.textContent = 'Tik de woorden in de juiste volgorde aan.';
  elements.checkAnswer.textContent = 'Controleren';
}

function checkMainExercise() {
  const correct = isCorrectSentence(state.selectedWords, EXPECTED_SENTENCE);
  elements.answerZone.classList.remove('correct', 'wrong');
  elements.answerZone.classList.add(correct ? 'correct' : 'wrong');
  if (correct) {
    elements.feedback.textContent = 'Goed gedaan! De persoonsvorm staat op de tweede plaats.';
    elements.checkAnswer.textContent = '✓ Correct';
    if (!state.progress.wordOrderCompleted) {
      state.progress.wordOrderCompleted = true;
      state.progress.completed += 1;
      state.progress.minutes = Math.max(8, state.progress.minutes);
      saveProgress();
    }
    speak('Goed gedaan. Vandaag werk ik thuis.', .86);
  } else {
    elements.feedback.textContent = 'Bijna. Begin met “Vandaag” en zet daarna de persoonsvorm.';
    elements.checkAnswer.textContent = 'Nog eens';
  }
}

function renderPractice(type = state.practice) {
  state.practice = type;
  state.practiceSelection = [];
  document.querySelectorAll('[data-practice]').forEach((button) => {
    const active = button.dataset.practice === type;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
  });
  if (type === 'article') {
    elements.practiceStage.innerHTML = `<div class="practice-question"><img class="visual-prompt" src="images/woord-huis.svg" alt="Een huis"><span class="kicker">Kies het lidwoord</span><h1>___ huis</h1><p>Welk lidwoord hoort bij dit woord?</p><div class="practice-choices"><button type="button" data-practice-answer="de">de</button><button type="button" data-practice-answer="het">het</button></div><p class="feedback" id="practice-feedback">Kijk naar het beeld en kies.</p></div>`;
  } else if (type === 'verb') {
    elements.practiceStage.innerHTML = `<div class="practice-question"><span class="kicker">Vervoeg het werkwoord</span><h1>Vandaag ___ ik thuis.</h1><p>Gebruik het werkwoord <strong>werken</strong>.</p><div class="practice-choices"><button type="button" data-practice-answer="werk">werk</button><button type="button" data-practice-answer="werkt">werkt</button><button type="button" data-practice-answer="werken">werken</button></div><p class="feedback" id="practice-feedback">Kies de juiste persoonsvorm.</p><button class="sound-button speak" type="button" data-text="Vandaag werk ik thuis." data-rate="0.82">🔊 Hoor de volledige zin</button></div>`;
  } else {
    elements.practiceStage.innerHTML = `<div class="practice-question"><span class="kicker">Woordvolgorde</span><h1>Begin met “Morgen”</h1><p>Zet de woorden in de juiste volgorde.</p><div class="practice-order-zone" id="practice-order-zone"><span class="placeholder">Jouw zin verschijnt hier</span></div><div class="practice-choices" id="practice-order-bank">${['Morgen', 'gaat', 'Sara', 'met de trein'].map((word) => `<button type="button" data-order-word="${word}">${word}</button>`).join('')}</div><p class="feedback" id="practice-feedback">De persoonsvorm staat op plek twee.</p><button class="primary-button" type="button" id="check-practice-order" disabled>Controleren</button></div>`;
  }
}

function updatePracticeOrder() {
  const zone = el('practice-order-zone');
  const bank = el('practice-order-bank');
  if (!zone || !bank) return;
  zone.innerHTML = state.practiceSelection.length ? state.practiceSelection.map((word, index) => `<button type="button" data-remove-order="${index}">${word}</button>`).join('') : '<span class="placeholder">Jouw zin verschijnt hier</span>';
  const all = ['Morgen', 'gaat', 'Sara', 'met de trein'];
  bank.innerHTML = remainingWords(all, state.practiceSelection).map((word) => `<button type="button" data-order-word="${word}">${word}</button>`).join('');
  el('check-practice-order').disabled = state.practiceSelection.length !== all.length;
}

function completePractice(message) {
  state.progress.practiceCompleted += 1;
  state.progress.completed += 1;
  state.progress.minutes += 3;
  saveProgress();
  showToast(message);
}

function updateProgressUI() {
  const progress = safeProgress(state.progress);
  const minutes = Math.min(progress.minutes, 20);
  elements.goalMinutes.textContent = String(minutes);
  elements.goalBar.style.width = `${completionPercentage(minutes, 20)}%`;
  elements.progressMinutes.textContent = String(progress.minutes);
  elements.progressCompleted.textContent = String(progress.completed);
  elements.progressAudio.textContent = String(progress.audioPlays);
  const skills = [
    ['Luisteren', Math.min(82, 48 + progress.audioPlays * 2), 'A2+'],
    ['Spreken', 52, 'A2'],
    ['Grammatica', Math.min(78, 55 + progress.completed * 4), 'A2+'],
    ['Woordenschat', 64, 'A2+'],
  ];
  elements.skillProgress.innerHTML = skills.map(([name, value, level]) => `<div class="skill-row"><div><span>${name}</span><b>${level}</b></div><div class="meter"><i style="width:${value}%"></i></div></div>`).join('');
}

function applyTheme(theme) {
  state.settings.theme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = state.settings.theme;
  elements.darkModeSetting.checked = state.settings.theme === 'dark';
  elements.themeToggle.textContent = state.settings.theme === 'dark' ? '☀' : '☾';
  document.querySelector('meta[name="theme-color"]').content = state.settings.theme === 'dark' ? '#0f1d1a' : '#123f38';
  saveSettings();
}

function initializeSettings() {
  applyTheme(state.settings.theme);
  elements.speechRate.value = String(state.settings.speechRate);
  elements.speechRateOutput.textContent = `${state.settings.speechRate.toFixed(2).replace(/0$/, '')}×`;
  el('open-settings').addEventListener('click', () => elements.settingsDialog.showModal());
  elements.themeToggle.addEventListener('click', () => applyTheme(state.settings.theme === 'dark' ? 'light' : 'dark'));
  elements.darkModeSetting.addEventListener('change', (event) => applyTheme(event.target.checked ? 'dark' : 'light'));
  elements.speechRate.addEventListener('input', (event) => {
    state.settings.speechRate = Number(event.target.value);
    elements.speechRateOutput.textContent = `${state.settings.speechRate.toFixed(2).replace(/0$/, '')}×`;
    saveSettings();
  });
}

function handleClick(event) {
  const pageButton = event.target.closest('[data-page]');
  if (pageButton) {
    if (pageButton.dataset.a1Theme) { state.a1Theme = pageButton.dataset.a1Theme; renderA1Themes(); }
    if (pageButton.dataset.a2Theme) { state.a2Theme = pageButton.dataset.a2Theme; renderA2Themes(); }
    if (pageButton.dataset.grammarLevel) { state.grammarLevel = pageButton.dataset.grammarLevel; renderGrammar(); }
    if (pageButton.dataset.topic) {
      state.grammarTopic = pageButton.dataset.topic;
      renderGrammar();
    }
    showPage(pageButton.dataset.page);
    return;
  }
  const courseThemeButton = event.target.closest('[data-course-theme-select]');
  if (courseThemeButton) {
    const level = courseThemeButton.dataset.courseLevel;
    if (level === 'A1') { state.a1Theme = courseThemeButton.dataset.courseThemeSelect; renderA1Themes(); }
    else { state.a2Theme = courseThemeButton.dataset.courseThemeSelect; renderA2Themes(); }
    return;
  }
  const legacyA1ThemeButton = event.target.closest('[data-a1-theme]');
  if (legacyA1ThemeButton) { state.a1Theme = legacyA1ThemeButton.dataset.a1Theme; renderA1Themes(); return; }
  const courseAnswer = event.target.closest('[data-course-answer]');
  if (courseAnswer) {
    const level = courseAnswer.dataset.courseLevel;
    const themes = level === 'A1' ? a1Themes : a2Themes;
    const theme = themes.find((item) => item.id === courseAnswer.dataset.courseTheme);
    const correct = Number(courseAnswer.dataset.courseAnswer) === theme.exercise.answer;
    courseAnswer.parentElement.querySelectorAll('button').forEach((button, index) => {
      button.disabled = true;
      button.classList.toggle('correct', index === theme.exercise.answer);
    });
    courseAnswer.classList.toggle('wrong', !correct);
    const feedback = el(`${level.toLowerCase()}-feedback`);
    feedback.textContent = correct ? `Goed! ${theme.exercise.explanation}` : `Nog niet. ${theme.exercise.explanation}`;
    if (correct) completePractice(`${level}-mini-toets correct.`);
    return;
  }
  const completeCourse = event.target.closest('[data-complete-course]');
  if (completeCourse) {
    const level = completeCourse.dataset.courseLevel;
    const id = completeCourse.dataset.completeCourse;
    const key = level === 'A1' ? 'a1Completed' : 'a2Completed';
    const values = new Set(state.progress[key] || []);
    values.has(id) ? values.delete(id) : values.add(id);
    state.progress[key] = [...values];
    saveProgress();
    level === 'A1' ? renderA1Themes() : renderA2Themes();
    showToast(values.has(id) ? `${level}-thema gemarkeerd als voltooid.` : `${level}-thema opnieuw geopend.`);
    return;
  }
  const structureButton = event.target.closest('[data-structure]');
  if (structureButton) { renderStructures(structureButton.dataset.structure); return; }
  const speechButton = event.target.closest('.speak');
  if (speechButton) { speak(speechButton.dataset.text, speechButton.dataset.rate); return; }
  const conceptButton = event.target.closest('[data-concept]');
  if (conceptButton) { state.concept = conceptButton.dataset.concept; renderConcepts(); return; }
  const conceptChild = event.target.closest('[data-concept-child]');
  if (conceptChild) { showToast(`${conceptChild.dataset.conceptChild}: deze verdiepende les staat klaar voor de volgende inhoudsronde.`); return; }
  const grammarLevel = event.target.closest('[data-grammar-level]');
  if (grammarLevel) { state.grammarLevel = grammarLevel.dataset.grammarLevel; renderGrammar(); return; }
  const grammarTopic = event.target.closest('[data-grammar-topic]');
  if (grammarTopic) { state.grammarTopic = grammarTopic.dataset.grammarTopic; renderGrammar(); return; }
  const vocabularyCategory = event.target.closest('[data-vocabulary-category]');
  if (vocabularyCategory) { state.vocabularyCategory = vocabularyCategory.dataset.vocabularyCategory; renderVocabulary(); return; }
  const listeningOption = event.target.closest('[data-listening-scene]');
  if (listeningOption) {
    const scene = listeningScenes.find((item) => item.id === listeningOption.dataset.listeningScene);
    const correct = Number(listeningOption.dataset.option) === scene.answer;
    listeningOption.parentElement.querySelectorAll('button').forEach((button, index) => button.classList.toggle('correct', index === scene.answer));
    listeningOption.classList.toggle('wrong', !correct);
    if (correct) completePractice('Goed geluisterd!');
    return;
  }
  const practiceTab = event.target.closest('[data-practice]');
  if (practiceTab) { renderPractice(practiceTab.dataset.practice); return; }
  const practiceAnswer = event.target.closest('[data-practice-answer]');
  if (practiceAnswer) {
    const expected = state.practice === 'article' ? 'het' : 'werk';
    const correct = practiceAnswer.dataset.practiceAnswer === expected;
    practiceAnswer.parentElement.querySelectorAll('button').forEach((button) => button.disabled = true);
    practiceAnswer.classList.add(correct ? 'correct' : 'wrong');
    if (!correct) practiceAnswer.parentElement.querySelector(`[data-practice-answer="${expected}"]`)?.classList.add('correct');
    el('practice-feedback').textContent = correct ? 'Goed! Dat is correct.' : `Niet helemaal. Het juiste antwoord is “${expected}”.`;
    if (correct) completePractice('Oefening afgerond.');
    return;
  }
  const orderWord = event.target.closest('[data-order-word]');
  if (orderWord) { state.practiceSelection.push(orderWord.dataset.orderWord); updatePracticeOrder(); return; }
  const removeOrder = event.target.closest('[data-remove-order]');
  if (removeOrder) { state.practiceSelection.splice(Number(removeOrder.dataset.removeOrder), 1); updatePracticeOrder(); return; }
  if (event.target.closest('#check-practice-order')) {
    const correct = isCorrectSentence(state.practiceSelection, 'Morgen gaat Sara met de trein.');
    el('practice-feedback').textContent = correct ? 'Perfect. De persoonsvorm “gaat” staat op plek twee.' : 'Kijk opnieuw: Morgen + gaat + Sara + met de trein.';
    if (correct) completePractice('Woordvolgorde correct.');
  }
}

function initializeEvents() {
  document.addEventListener('click', handleClick);
  elements.menuButton.addEventListener('click', () => {
    const open = elements.sidebar.classList.toggle('open');
    elements.menuButton.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      elements.sidebar.classList.remove('open');
      elements.menuButton.setAttribute('aria-expanded', 'false');
    }
  });
  elements.checkAnswer.addEventListener('click', checkMainExercise);
  elements.resetExercise.addEventListener('click', () => { state.selectedWords = []; resetMainExercise(); renderMainExercise(); });
  elements.listenAnswer.addEventListener('click', () => speak(state.selectedWords.join(' ') || EXPECTED_SENTENCE));
  elements.verbSelect.addEventListener('change', (event) => renderVerbDetail(event.target.value));
  elements.speakVerb.addEventListener('click', () => speak(elements.speakVerb.dataset.text, .75));
  elements.wordSearch.addEventListener('input', (event) => { state.vocabularyQuery = event.target.value; renderVocabulary(); });
  elements.clearProgress.addEventListener('click', () => {
    state.progress = safeProgress();
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* Opslag kan geblokkeerd zijn. */ }
    updateProgressUI();
    renderA1Themes();
    renderA2Themes();
    showToast('De lokale voortgang is gewist.');
  });
  window.addEventListener('hashchange', () => {
    const page = location.hash.slice(1);
    if (document.querySelector(`#page-${page}`)) showPage(page, false);
  });
}

function initialize() {
  renderDashboard();
  renderLevels();
  renderA1Themes();
  renderA2Themes();
  renderConcepts();
  renderGrammar();
  renderStructures();
  renderVerbs();
  renderVocabulary();
  renderListening();
  renderMainExercise();
  renderPractice();
  updateProgressUI();
  initializeSettings();
  initializeEvents();
  loadVoices();
  if ('speechSynthesis' in window) window.speechSynthesis.onvoiceschanged = loadVoices;
  const hashPage = location.hash.slice(1);
  showPage(document.querySelector(`#page-${hashPage}`) ? hashPage : 'vandaag', false);
  if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('./service-worker.js').catch(() => {});
}

initialize();

})();
