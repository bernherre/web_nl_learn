// A0-instaproute: minimale taal om vanaf de eerste minuut contact te maken.
// Alle voorbeelden zijn origineel geschreven voor deze leeromgeving.

export const a0Themes = [
  {
    id: 'groeten-afscheid',
    number: 1,
    title: 'Hallo en tot ziens',
    subtitle: 'Groeten, bedanken en afscheid nemen',
    image: 'images/a0-groeten.svg',
    description: 'Leer de eerste woorden die je nodig hebt om iemand vriendelijk te begroeten, te bedanken en afscheid te nemen.',
    canDo: [
      'Ik kan iemand begroeten.',
      'Ik kan vragen hoe het gaat.',
      'Ik kan bedanken en op verschillende manieren afscheid nemen.'
    ],
    vocabulary: [
      ['hallo', 'Een gewone begroeting voor bijna elke situatie.', 'Hallo, hoe gaat het?'],
      ['goedemorgen', 'Een begroeting in de ochtend.', 'Goedemorgen, mevrouw De Vries.'],
      ['goedemiddag', 'Een begroeting in de middag.', 'Goedemiddag, welkom bij de afspraak.'],
      ['goedenavond', 'Een begroeting in de avond.', 'Goedenavond, alles goed?'],
      ['dank je wel', 'Een informele manier om iemand te bedanken.', 'Dank je wel voor je hulp.'],
      ['dank u wel', 'Een beleefde manier om iemand te bedanken.', 'Dank u wel, meneer.'],
      ['tot ziens', 'Een neutrale manier om afscheid te nemen.', 'Tot ziens en een fijne dag.'],
      ['doei', 'Een informele manier om afscheid te nemen.', 'Doei, tot morgen!']
    ],
    wordGroups: {
      'Begroetingen': ['hallo', 'hoi', 'goedemorgen', 'goedemiddag', 'goedenavond', 'welkom', 'hé', 'dag', 'aangenaam', 'fijn je te zien', 'alles goed?', 'hoe gaat het?'],
      'Antwoorden': ['goed', 'heel goed', 'prima', 'best goed', 'het gaat', 'niet zo goed', 'ook goed', 'dank je', 'dank u', 'en met jou?', 'en met u?', 'ja, hoor'],
      'Bedanken': ['bedankt', 'dank je', 'dank je wel', 'dank u', 'dank u wel', 'heel erg bedankt', 'graag gedaan', 'geen dank', 'alsjeblieft', 'alstublieft', 'dat is aardig', 'fijn, bedankt'],
      'Afscheid': ['tot ziens', 'doei', 'dag', 'tot morgen', 'tot straks', 'tot later', 'tot snel', 'fijne dag', 'fijne avond', 'welterusten', 'goede reis', 'veel plezier']
    },
    grammar: [
      ['Hoe gaat het?', 'Gebruik hoe om naar iemands toestand te vragen. Een kort antwoord is: Goed, dank je.'],
      ['Jij en u', 'Gebruik jij of je informeel. Gebruik u in een beleefde of formele situatie.'],
      ['En met jou?', 'Met en jou vormen samen een korte tegenvraag. In een formele situatie zeg je: En met u?']
    ],
    pronunciation: ['hallo', 'goedemorgen', 'hoe gaat het', 'dank je wel', 'tot ziens', 'doei'],
    dialogue: [
      'Hallo! Hoe gaat het?',
      'Goed, dank je. En met jou?',
      'Ook goed. Fijn je te zien.',
      'Jij ook. Tot ziens!'
    ],
    exercise: {
      question: 'Welke zin gebruik je om beleefd te bedanken?',
      options: ['Dank u wel.', 'Tot morgen.', 'Hoe heet u?'],
      answer: 0,
      explanation: 'Dank u wel is een beleefde manier om iemand te bedanken.'
    }
  },
  {
    id: 'jezelf-voorstellen',
    number: 2,
    title: 'Dit ben ik',
    subtitle: 'Naam, land, taal en woonplaats',
    image: 'images/a0-voorstellen.svg',
    description: 'Vertel wie je bent en begrijp de eerste persoonlijke vragen over naam, herkomst, taal en woonplaats.',
    canDo: [
      'Ik kan mijn naam zeggen.',
      'Ik kan zeggen waar ik vandaan kom en woon.',
      'Ik kan vragen hoe iemand heet.'
    ],
    vocabulary: [
      ['mijn naam is', 'Een vaste zin om je naam te noemen.', 'Mijn naam is Sara.'],
      ['ik heet', 'Een korte manier om je naam te noemen.', 'Ik heet Amir.'],
      ['hoe heet je?', 'Een informele vraag naar iemands naam.', 'Hoi, hoe heet je?'],
      ['hoe heet u?', 'Een beleefde vraag naar iemands naam.', 'Goedemiddag, hoe heet u?'],
      ['ik kom uit', 'Zeggen uit welk land of welke plaats je afkomstig bent.', 'Ik kom uit Colombia.'],
      ['ik woon in', 'Zeggen welke stad, welk dorp of welk land je woonplaats is.', 'Ik woon in Eindhoven.'],
      ['ik spreek', 'Zeggen welke taal of talen je mondeling kunt gebruiken.', 'Ik spreek Spaans en Engels.'],
      ['aangenaam', 'Een beleefde reactie wanneer je iemand ontmoet.', 'Aangenaam, ik ben Noor.']
    ],
    wordGroups: {
      'Naam': ['de naam', 'de voornaam', 'de achternaam', 'ik heet', 'mijn naam is', 'hoe heet je?', 'hoe heet u?', 'dit is', 'ik ben', 'wie ben jij?', 'aangenaam', 'leuk je te ontmoeten'],
      'Herkomst': ['het land', 'de stad', 'het dorp', 'ik kom uit', 'waar kom je vandaan?', 'waar komt u vandaan?', 'Nederland', 'België', 'Duitsland', 'Colombia', 'Spanje', 'Turkije'],
      'Wonen': ['wonen', 'ik woon in', 'waar woon je?', 'waar woont u?', 'hier', 'daar', 'de straat', 'het huis', 'de flat', 'de buurt', 'de plaats', 'het adres'],
      'Talen': ['de taal', 'Nederlands', 'Engels', 'Spaans', 'Duits', 'Frans', 'spreken', 'begrijpen', 'een beetje', 'goed', 'niet goed', 'welke taal spreek je?']
    },
    grammar: [
      ['Ik ben / jij bent / u bent', 'Het werkwoord zijn verandert bij het onderwerp: ik ben, jij bent en u bent.'],
      ['Mijn naam is', 'Mijn laat zien dat de naam bij jou hoort. De vaste zin is: Mijn naam is ...'],
      ['Waar woon je?', 'In een vraag staat het werkwoord meestal vóór het onderwerp: woon je?']
    ],
    pronunciation: ['mijn naam is', 'ik heet', 'aangenaam', 'waar woon je', 'ik kom uit', 'ik spreek Nederlands'],
    dialogue: [
      'Hallo, mijn naam is Eva. Hoe heet je?',
      'Ik heet Luis. Aangenaam.',
      'Waar kom je vandaan?',
      'Ik kom uit Mexico en ik woon in Utrecht.'
    ],
    exercise: {
      question: 'Welke zin gebruik je om je naam te zeggen?',
      options: ['Mijn naam is Lina.', 'Ik woon in Lina.', 'Ik kom uit Lina.'],
      answer: 0,
      explanation: 'Met Mijn naam is ... of Ik heet ... zeg je hoe je heet.'
    }
  },
  {
    id: 'begrijpen-hulp',
    number: 3,
    title: 'Ik begrijp het niet',
    subtitle: 'Herhalen, langzamer spreken en hulp vragen',
    image: 'images/a0-hulp.svg',
    description: 'Gebruik korte zinnen om een gesprek te vertragen, om uitleg te vragen en om een eenvoudig probleem aan te geven.',
    canDo: [
      'Ik kan zeggen dat ik iets niet begrijp.',
      'Ik kan vragen of iemand iets herhaalt.',
      'Ik kan op een eenvoudige manier om hulp vragen.'
    ],
    vocabulary: [
      ['ik begrijp het niet', 'Je zegt dat de betekenis niet duidelijk is.', 'Sorry, ik begrijp het niet.'],
      ['nog een keer', 'Een verzoek om iets te herhalen.', 'Kunt u dat nog een keer zeggen?'],
      ['langzamer, alstublieft', 'Een verzoek om minder snel te spreken.', 'Kunt u iets langzamer spreken, alstublieft?'],
      ['wat betekent dat?', 'Een vraag naar de betekenis van een woord of zin.', 'Ik ken dit woord niet. Wat betekent dat?'],
      ['kunt u mij helpen?', 'Een beleefde vraag om hulp.', 'Kunt u mij helpen met dit formulier?'],
      ['waar is ...?', 'Een basisvraag naar een plaats.', 'Waar is het station?'],
      ['ik zoek ...', 'Een vaste zin wanneer je iets nodig hebt.', 'Ik zoek de uitgang.'],
      ['sorry', 'Een woord om beleefd aandacht te vragen of je te verontschuldigen.', 'Sorry, waar is de bushalte?']
    ],
    wordGroups: {
      'Niet begrijpen': ['ik begrijp het niet', 'ik weet het niet', 'wat betekent dat?', 'wat is dat?', 'hoe zeg je dat?', 'hoe schrijf je dat?', 'ik spreek nog weinig Nederlands', 'dat is moeilijk', 'is dit goed?', 'klopt dat?', 'ik ben nieuw hier', 'sorry'],
      'Herhalen': ['nog een keer', 'kunt u dat herhalen?', 'kun je dat herhalen?', 'zeg dat nog eens', 'langzamer, alstublieft', 'spreek langzaam', 'iets harder', 'iets zachter', 'welk woord?', 'kunt u het opschrijven?', 'kunt u het aanwijzen?', 'laat het zien'],
      'Hulp': ['helpen', 'hulp', 'kunt u mij helpen?', 'kun je mij helpen?', 'ik heb hulp nodig', 'alstublieft', 'alsjeblieft', 'wacht even', 'kom mee', 'hier', 'daar', 'geen probleem'],
      'Plaats en richting': ['waar?', 'links', 'rechts', 'rechtdoor', 'hier', 'daar', 'dichtbij', 'ver weg', 'de ingang', 'de uitgang', 'het station', 'de bushalte']
    },
    grammar: [
      ['Kunt u ...?', 'Kunt u maakt een beleefd verzoek. Het hele werkwoord staat aan het einde: Kunt u dat herhalen?'],
      ['Waar is ...?', 'Gebruik waar om naar een plaats te vragen: Waar is de uitgang?'],
      ['Niet', 'Niet maakt een zin negatief: Ik begrijp het niet. Ik weet het niet.']
    ],
    pronunciation: ['ik begrijp het niet', 'nog een keer', 'langzamer alstublieft', 'kunt u mij helpen', 'waar is het station', 'sorry'],
    dialogue: [
      'Sorry, ik begrijp het niet.',
      'Geen probleem. Zal ik het nog een keer zeggen?',
      'Ja, graag. Langzamer, alstublieft.',
      'Natuurlijk. Ik spreek langzaam.'
    ],
    exercise: {
      question: 'Wat zeg je wanneer iemand te snel spreekt?',
      options: ['Langzamer, alstublieft.', 'Tot morgen.', 'Mijn naam is Sam.'],
      answer: 0,
      explanation: 'Met Langzamer, alstublieft vraag je beleefd om een lager spreektempo.'
    }
  },
  {
    id: 'dagelijkse-basis',
    number: 4,
    title: 'De eerste dagelijkse woorden',
    subtitle: 'Ja, nee, cijfers, tijd en basisbehoeften',
    image: 'images/a0-dagelijks.svg',
    description: 'Leer korte woorden en zinnen voor betalen, tijd, eten, drinken, toilet, telefoon en noodsituaties.',
    canDo: [
      'Ik kan ja en nee antwoorden.',
      'Ik kan een prijs, tijd of nummer begrijpen.',
      'Ik kan een eenvoudige basisbehoefte uitspreken.'
    ],
    vocabulary: [
      ['ja', 'Een positief antwoord.', 'Ja, ik wil graag koffie.'],
      ['nee', 'Een negatief antwoord.', 'Nee, dank u.'],
      ['hoeveel kost het?', 'Een vraag naar de prijs.', 'Hoeveel kost het kaartje naar Utrecht?'],
      ['hoe laat is het?', 'Een vraag naar de tijd.', 'Pardon, hoe laat is het nu?'],
      ['ik wil graag ...', 'Een beleefde manier om iets te vragen.', 'Ik wil graag water.'],
      ['waar is het toilet?', 'Een basisvraag naar het toilet.', 'Pardon, waar is het toilet?'],
      ['ik heb een probleem', 'Een korte zin om aan te geven dat iets niet goed gaat.', 'Ik heb een probleem met mijn kaart.'],
      ['bel 112', 'Een instructie voor een ernstige noodsituatie in Nederland.', 'Bel 112 bij direct gevaar.']
    ],
    wordGroups: {
      'Korte antwoorden': ['ja', 'nee', 'misschien', 'graag', 'nee, dank u', 'ja, graag', 'goed', 'niet goed', 'oké', 'natuurlijk', 'even wachten', 'klaar'],
      'Cijfers': ['nul', 'één', 'twee', 'drie', 'vier', 'vijf', 'zes', 'zeven', 'acht', 'negen', 'tien', 'honderd'],
      'Tijd': ['nu', 'vandaag', 'morgen', 'gisteren', 'vroeg', 'laat', 'hoe laat?', 'om één uur', 'een minuut', 'een uur', 'open', 'gesloten'],
      'Nodig': ['water', 'eten', 'het toilet', 'de telefoon', 'de kaart', 'contant', 'pinnen', 'betalen', 'de dokter', 'de politie', 'het adres', '112']
    },
    grammar: [
      ['Ik wil graag ...', 'Wil is een vorm van willen. Graag maakt het verzoek vriendelijker.'],
      ['Hoeveel en hoe laat', 'Hoeveel vraagt naar een aantal of prijs. Hoe laat vraagt naar een tijdstip.'],
      ['Ja, graag / Nee, dank u', 'Gebruik deze korte antwoorden om beleefd iets te accepteren of te weigeren.']
    ],
    pronunciation: ['ja graag', 'nee dank u', 'hoeveel kost het', 'hoe laat is het', 'waar is het toilet', 'ik heb hulp nodig'],
    dialogue: [
      'Goedemiddag. Ik wil graag een fles water.',
      'Natuurlijk. Dat is twee euro.',
      'Kan ik pinnen?',
      'Ja, dat kan. Dank u wel.'
    ],
    exercise: {
      question: 'Welke zin gebruik je om beleefd water te vragen?',
      options: ['Ik wil graag water.', 'Ik heet water.', 'Waar woon water?'],
      answer: 0,
      explanation: 'Ik wil graag ... is een eenvoudige en beleefde manier om iets te vragen.'
    }
  }
];
