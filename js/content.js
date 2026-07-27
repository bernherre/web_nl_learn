export const levels = [
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

export const a1Themes = [
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

export const a2Themes = [
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

export const concepts = [
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

export const grammarTopics = [
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

export const verbs = [
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

export const vocabulary = [
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

export const listeningScenes = [...a1Themes, ...a2Themes].map((theme) => ({
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

export const dailyPlan = [
  { label: 'A1- of A2-thema bekijken', duration: 5, page: 'a2' },
  { label: 'Thematische woordenbank', duration: 4, page: 'woordenschat' },
  { label: 'Woordvolgorde', duration: 6, page: 'les' },
  { label: 'Luistermoment', duration: 5, page: 'luisteren' },
];

// Verdieping: extra thematische woordgroepen en uitgebreide grammatica.
import { expandedWordGroups, deepGrammarTopics } from './depth-content.js';

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

import { supplementaryWordGroups } from './supplement-content.js';
for (const theme of [...a1Themes, ...a2Themes]) {
  const seen = new Set(Object.values(theme.wordGroups || {}).flat());
  const additions = supplementaryWordGroups[theme.id] || [];
  theme.wordGroups['Verdieping en taalhandelingen'] = additions.filter((word) => {
    if (seen.has(word)) return false;
    seen.add(word);
    return true;
  });
}
