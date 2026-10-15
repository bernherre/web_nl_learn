import { a1SourcePages } from './a1-source-pages.js';
import { a1ExpansionVerbs } from './a1-expansion-verbs.js';
// Original lessons based on topic coverage of the supplied reference photographs.
// This module is the single source for lessons, listening scenes and exercises.
import { findLexiconEntry } from './lexicon.js';
export const a1ExpansionLessons = [
  {
    "id": "persoonlijke-gegevens",
    "themeId": "hallo",
    "title": "Kennismaken en gegevens invullen",
    "referencePhotos": [
      1,
      76
    ],
    "terms": [
      "de naam",
      "de achternaam",
      "de geboortedatum",
      "de postcode"
    ],
    "verbs": [
      "heten",
      "zijn",
      "invullen"
    ],
    "grammarIds": [
      "hebben-zijn",
      "vraagwoorden"
    ],
    "explanation": "Vertel wie je bent met ik heet of ik ben. Gebruik ik woon voor je woonplaats. Op een formulier staan korte veldnamen; schrijf bij geboortedatum dag, maand en jaar.",
    "dialogue": [
      "Goedemiddag, ik heet Eva Bakker.",
      "Dag Eva. Wat is je geboortedatum?",
      "Ik ben geboren op 12 mei 1995.",
      "Dank je. En wat is je postcode?",
      "Mijn postcode is 3512 AB."
    ],
    "question": "Wat is Eva’s achternaam?",
    "answer": "Bakker",
    "distractors": [
      "Eva",
      "Mei"
    ],
    "exerciseIds": [
      "a1-expanded-persoonlijke-gegevens-listening",
      "a1-expanded-persoonlijke-gegevens-vocabulary"
    ],
    "audioId": "a1-dialogue:persoonlijke-gegevens"
  },
  {
    "id": "groeten",
    "themeId": "hallo",
    "title": "Begroeten en beleefd reageren",
    "referencePhotos": [
      4,
      12,
      17,
      53
    ],
    "terms": [
      "goedemorgen",
      "goedenavond",
      "alsjeblieft",
      "dank je wel"
    ],
    "verbs": [
      "groeten",
      "geven",
      "bedanken"
    ],
    "grammarIds": [
      "register"
    ],
    "explanation": "Gebruik u als je iemand beleefd aanspreekt. Bij jij passen alsjeblieft en dank je wel; bij u passen alstublieft en dank u wel. De keuze hangt van de situatie en de persoon af.",
    "dialogue": [
      "Goedemorgen, mevrouw. Wilt u thee?",
      "Ja, graag. Zonder suiker, alstublieft.",
      "Hier is uw thee.",
      "Dank u wel. Wat vriendelijk!"
    ],
    "question": "Wat wil de mevrouw drinken?",
    "answer": "Thee zonder suiker",
    "distractors": [
      "Koffie met suiker",
      "Melk"
    ],
    "exerciseIds": [
      "a1-expanded-groeten-listening",
      "a1-expanded-groeten-vocabulary"
    ],
    "audioId": "a1-dialogue:groeten"
  },
  {
    "id": "familierelaties",
    "themeId": "hallo",
    "title": "Familie en relaties",
    "referencePhotos": [
      5,
      7
    ],
    "terms": [
      "de neef",
      "de nicht",
      "de zwager",
      "de schoonzus"
    ],
    "verbs": [
      "hebben",
      "heten"
    ],
    "grammarIds": [
      "bezittelijk"
    ],
    "explanation": "Neef kan de zoon van je broer of zus zijn, maar ook de zoon van je oom of tante. Nicht heeft dezelfde twee relaties voor een meisje of vrouw. Mijn, jouw en haar geven bezit of een relatie aan.",
    "dialogue": [
      "Dit is mijn zus Nora.",
      "Wie is het meisje naast haar?",
      "Dat is haar dochter Lotte. Lotte is mijn nicht.",
      "En die man?",
      "Dat is Nora’s man, mijn zwager."
    ],
    "question": "Wie is Lotte?",
    "answer": "De dochter van Nora",
    "distractors": [
      "De zus van Nora",
      "De moeder van Nora"
    ],
    "exerciseIds": [
      "a1-expanded-familierelaties-listening",
      "a1-expanded-familierelaties-vocabulary"
    ],
    "audioId": "a1-dialogue:familierelaties"
  },
  {
    "id": "klinkers",
    "themeId": "school",
    "title": "Korte en lange klinkers",
    "referencePhotos": [
      2,
      8
    ],
    "terms": [
      "de maan",
      "de man",
      "de muur",
      "de bus"
    ],
    "verbs": [
      "luisteren",
      "herhalen"
    ],
    "grammarIds": [],
    "explanation": "Luister naar het verschil tussen man en maan, bom en boom, bus en muur. Let op de klank, niet alleen op het aantal letters. In een open lettergreep kan één klinkerletter een lange klank weergeven: ramen.",
    "dialogue": [
      "Hoor je het verschil: man, maan?",
      "Ja, in maan hoor ik een lange klank.",
      "Luister ook naar bom en boom.",
      "Ik zeg de woorden langzaam na."
    ],
    "question": "In welk woord hoor je een lange aa?",
    "answer": "Maan",
    "distractors": [
      "Man",
      "Bus"
    ],
    "exerciseIds": [
      "a1-expanded-klinkers-listening",
      "a1-expanded-klinkers-vocabulary"
    ],
    "audioId": "a1-dialogue:klinkers"
  },
  {
    "id": "lettercombinaties",
    "themeId": "school",
    "title": "Ie, oe, eu, ui, ei en ij",
    "referencePhotos": [
      3,
      6,
      39
    ],
    "terms": [
      "de fiets",
      "het boek",
      "de neus",
      "het huis"
    ],
    "verbs": [
      "spreken",
      "luisteren"
    ],
    "grammarIds": [],
    "explanation": "Ie in fiets en oe in boek zijn geen tweeklanken: twee letters geven één klinker weer. Ui, ei en ij zijn tweeklanken. Ei en ij klinken hetzelfde; au en ou ook. Spreek lettergrepen afzonderlijk en leg de nadruk op de beklemtoonde lettergreep.",
    "dialogue": [
      "Lees eerst fiets en boek.",
      "Daarna lees ik neus en huis.",
      "Klinken trein en ijs met dezelfde klinker?",
      "Ja. Je schrijft ei of ij, maar de klinker klinkt hetzelfde."
    ],
    "question": "Welke twee schrijfwijzen klinken hier hetzelfde?",
    "answer": "Ei en ij",
    "distractors": [
      "Ie en oe",
      "Eu en ui"
    ],
    "exerciseIds": [
      "a1-expanded-lettercombinaties-listening",
      "a1-expanded-lettercombinaties-vocabulary"
    ],
    "audioId": "a1-dialogue:lettercombinaties"
  },
  {
    "id": "instructies",
    "themeId": "school",
    "title": "Instructies en lesmateriaal",
    "referencePhotos": [
      10,
      11,
      14,
      16
    ],
    "terms": [
      "het potlood",
      "de gum",
      "het rondje",
      "het kruisje"
    ],
    "verbs": [
      "lezen",
      "schrijven",
      "kiezen",
      "typen",
      "pakken"
    ],
    "grammarIds": [
      "tegenwoordige-tijd"
    ],
    "explanation": "Een instructie zegt wat je moet doen: lees, schrijf, kies. Een rondje is een cirkel; een kruisje bestaat uit twee lijnen die elkaar kruisen. Met ik lees, jij leest en wij lezen oefen je de persoonsvorm.",
    "dialogue": [
      "Pak je potlood en lees de vraag.",
      "Moet ik het antwoord schrijven?",
      "Nee, kies één antwoord en zet er een rondje om.",
      "En bij een fout antwoord?",
      "Gum het rondje uit en kies opnieuw."
    ],
    "question": "Wat moet de cursist bij het antwoord zetten?",
    "answer": "Een rondje",
    "distractors": [
      "Een streep",
      "Een kruisje"
    ],
    "exerciseIds": [
      "a1-expanded-instructies-listening",
      "a1-expanded-instructies-vocabulary"
    ],
    "audioId": "a1-dialogue:instructies"
  },
  {
    "id": "begrijpen-verstaan",
    "themeId": "school",
    "title": "Hulp vragen en woorden leren",
    "referencePhotos": [
      15,
      77,
      85
    ],
    "terms": [
      "het woordenboek",
      "de betekenis",
      "het voorbeeld",
      "langzaam"
    ],
    "verbs": [
      "begrijpen",
      "verstaan",
      "uitleggen",
      "herhalen",
      "snappen"
    ],
    "grammarIds": [
      "modale-werkwoorden",
      "vraagwoorden"
    ],
    "explanation": "Verstaan gaat over het horen van de gesproken woorden; begrijpen gaat over de betekenis. Vraag naar de betekenis, een voorbeeld of herhaling. Leer een nieuw woord met een voorbeeldzin en woorden die erbij horen.",
    "dialogue": [
      "Sorry, ik versta u niet. Wilt u langzaam praten?",
      "Natuurlijk. Welk woord begrijp je niet?",
      "Wat betekent herhalen?",
      "Het betekent dat je iets nog een keer zegt of doet.",
      "Kunt u een voorbeeld geven?"
    ],
    "question": "Waarom vraagt de cursist om langzaam praten?",
    "answer": "De cursist verstaat de spreker niet",
    "distractors": [
      "De cursist wil weg",
      "De les is afgelopen"
    ],
    "exerciseIds": [
      "a1-expanded-begrijpen-verstaan-listening",
      "a1-expanded-begrijpen-verstaan-vocabulary"
    ],
    "audioId": "a1-dialogue:begrijpen-verstaan"
  },
  {
    "id": "schooldag",
    "themeId": "school",
    "title": "Pauze, dagen en de hoofdzin",
    "referencePhotos": [
      9,
      13,
      26,
      29,
      35
    ],
    "terms": [
      "de pauze",
      "maandag",
      "morgen",
      "de koffie"
    ],
    "verbs": [
      "beginnen",
      "drinken",
      "werken"
    ],
    "grammarIds": [
      "gewone-zin",
      "woordvolgorde",
      "vraagwoorden"
    ],
    "explanation": "In een mededelende hoofdzin staat de persoonsvorm op de tweede zinsplaats: Morgen begint de les. Een ja-neevraag begint ermee: Begint de les morgen? Bij jij na de persoonsvorm vervalt de toegevoegde t: Werk jij?",
    "dialogue": [
      "Wanneer begint de les?",
      "De les begint maandag om negen uur.",
      "En wanneer hebben we pauze?",
      "Om tien uur drinken we koffie.",
      "Werk jij na de les?",
      "Nee, morgen werk ik."
    ],
    "question": "Wanneer drinken ze koffie?",
    "answer": "Om tien uur",
    "distractors": [
      "Om negen uur",
      "Na het werk"
    ],
    "exerciseIds": [
      "a1-expanded-schooldag-listening",
      "a1-expanded-schooldag-vocabulary"
    ],
    "audioId": "a1-dialogue:schooldag"
  },
  {
    "id": "huis-kamers",
    "themeId": "wonen",
    "title": "Een huis en de kamers",
    "referencePhotos": [
      18,
      24
    ],
    "terms": [
      "het dak",
      "de zolder",
      "de woonkamer",
      "de gang"
    ],
    "verbs": [
      "wonen",
      "staan"
    ],
    "grammarIds": [
      "voorzetsels-plaats"
    ],
    "explanation": "Benoem eerst de ruimte en vertel daarna waar die is. Beneden is op een lagere verdieping; boven is op een hogere verdieping. In, naast en tussen verbinden de plaats met een ander voorwerp of een ruimte.",
    "dialogue": [
      "Welkom in mijn huis. De woonkamer is beneden.",
      "Waar is de keuken?",
      "De keuken is naast de woonkamer.",
      "En de slaapkamers?",
      "Die zijn boven. Op zolder staan dozen."
    ],
    "question": "Waar zijn de slaapkamers?",
    "answer": "Boven",
    "distractors": [
      "In de keuken",
      "In de tuin"
    ],
    "exerciseIds": [
      "a1-expanded-huis-kamers-listening",
      "a1-expanded-huis-kamers-vocabulary"
    ],
    "audioId": "a1-dialogue:huis-kamers"
  },
  {
    "id": "meubels-kleuren",
    "themeId": "wonen",
    "title": "Meubels, kleuren en aanwijzen",
    "referencePhotos": [
      22,
      23,
      87
    ],
    "terms": [
      "de bank",
      "de kast",
      "de lamp",
      "het bed"
    ],
    "verbs": [
      "staan",
      "liggen",
      "zien"
    ],
    "grammarIds": [
      "aanwijzend",
      "bepaald-lidwoord"
    ],
    "explanation": "Bij een het-woord wijs je met dit of dat; bij een de-woord en bij meervouden met deze of die. Een kleur na zijn verandert niet: de lamp is groen. Benoem het meubel samen met de of het.",
    "dialogue": [
      "Deze lamp is groen en die kast is bruin.",
      "Staat de lamp naast het bed?",
      "Ja. Het boek ligt op het bed.",
      "En waar staat de blauwe bank?",
      "De bank staat in de woonkamer."
    ],
    "question": "Waar ligt het boek?",
    "answer": "Op het bed",
    "distractors": [
      "In de kast",
      "Onder de bank"
    ],
    "exerciseIds": [
      "a1-expanded-meubels-kleuren-listening",
      "a1-expanded-meubels-kleuren-vocabulary"
    ],
    "audioId": "a1-dialogue:meubels-kleuren"
  },
  {
    "id": "buurt-verdieping",
    "themeId": "wonen",
    "title": "De buurt en rangtelwoorden",
    "referencePhotos": [
      19,
      20,
      21
    ],
    "terms": [
      "de verdieping",
      "de lift",
      "de trap",
      "het dorp"
    ],
    "verbs": [
      "lopen",
      "nemen"
    ],
    "grammarIds": [
      "hoofdtelwoord",
      "voorzetsels-plaats"
    ],
    "explanation": "Een rangtelwoord geeft een plaats in een reeks: eerste, tweede, derde, vierde, vijfde, zesde, zevende, achtste, negende, tiende. Je woont op een verdieping en gaat met de lift of via de trap naar boven.",
    "dialogue": [
      "Woon je in een dorp?",
      "Nee, ik woon in de stad, op de derde verdieping.",
      "Is er een lift?",
      "Ja, maar ik neem vaak de trap.",
      "Is er een park in de buurt?",
      "Ja, naast de winkels."
    ],
    "question": "Op welke verdieping woont de spreker?",
    "answer": "De derde",
    "distractors": [
      "De eerste",
      "De zevende"
    ],
    "exerciseIds": [
      "a1-expanded-buurt-verdieping-listening",
      "a1-expanded-buurt-verdieping-vocabulary"
    ],
    "audioId": "a1-dialogue:buurt-verdieping"
  },
  {
    "id": "woning-zoeken",
    "themeId": "wonen",
    "title": "Een woning zoeken en sleutels vinden",
    "referencePhotos": [
      28,
      30
    ],
    "terms": [
      "de huur",
      "de sleutel",
      "rustig",
      "druk"
    ],
    "verbs": [
      "huren",
      "zoeken",
      "vinden",
      "vergeten"
    ],
    "grammarIds": [
      "vraagwoorden"
    ],
    "explanation": "Vraag naar de huurprijs, het aantal kamers en de buurt. Met waar vraag je naar een plaats; met hoeveel naar een aantal of bedrag. Zoeken is proberen iets te vinden; vinden is het resultaat.",
    "dialogue": [
      "Ik zoek een woning met twee kamers.",
      "Wilt u in een drukke of rustige buurt wonen?",
      "In een rustige buurt. Hoeveel is de huur?",
      "Dat staat in de advertentie. Heeft u de sleutel?",
      "Nee, ik zoek hem nog. O, hij ligt in mijn tas!"
    ],
    "question": "Hoeveel kamers zoekt de spreker?",
    "answer": "Twee",
    "distractors": [
      "Drie",
      "Vier"
    ],
    "exerciseIds": [
      "a1-expanded-woning-zoeken-listening",
      "a1-expanded-woning-zoeken-vocabulary"
    ],
    "audioId": "a1-dialogue:woning-zoeken"
  },
  {
    "id": "markt-betalen",
    "themeId": "eten",
    "title": "Boodschappen en betalen",
    "referencePhotos": [
      31,
      36,
      38,
      41,
      43,
      44
    ],
    "terms": [
      "de bakker",
      "de slager",
      "de kassabon",
      "de munt"
    ],
    "verbs": [
      "kopen",
      "kosten",
      "betalen"
    ],
    "grammarIds": [
      "hoofdtelwoord",
      "vraagwoorden"
    ],
    "explanation": "Je koopt brood bij de bakker en vlees bij de slager. Vraag naar prijs en gewicht. Een kilo is duizend gram, een pond vijfhonderd gram en een ons honderd gram. Een kassabon vermeldt wat je hebt betaald.",
    "dialogue": [
      "Mag ik een pond appels?",
      "Natuurlijk. Dat is vijfhonderd gram.",
      "Hoeveel kost dat?",
      "Twee euro. Wilt u de kassabon?",
      "Ja, graag. Ik betaal met een munt van twee euro."
    ],
    "question": "Hoeveel gram is een pond?",
    "answer": "Vijfhonderd gram",
    "distractors": [
      "Honderd gram",
      "Duizend gram"
    ],
    "exerciseIds": [
      "a1-expanded-markt-betalen-listening",
      "a1-expanded-markt-betalen-vocabulary"
    ],
    "audioId": "a1-dialogue:markt-betalen"
  },
  {
    "id": "koken-bakken",
    "themeId": "eten",
    "title": "Een recept volgen",
    "referencePhotos": [
      25,
      32,
      34
    ],
    "terms": [
      "de pan",
      "de oven",
      "de tomaat",
      "het ei"
    ],
    "verbs": [
      "snijden",
      "koken",
      "bakken"
    ],
    "grammarIds": [
      "modale-werkwoorden"
    ],
    "explanation": "Een recept noemt ingrediënten, hoeveelheden en stappen. Met nodig hebben zeg je wat je gebruikt. Met eerst en daarna geef je de volgorde aan. Gebruik liter voor vloeistof en gram voor gewicht.",
    "dialogue": [
      "Wat hebben we nodig voor de soep?",
      "Tomaten, een ui en water.",
      "Wat doe ik eerst?",
      "Snijd de tomaten. Daarna doen we alles in de pan.",
      "En de taart?",
      "Die bakken we later in de oven."
    ],
    "question": "Wat gaat er in de pan?",
    "answer": "Tomaten, een ui en water",
    "distractors": [
      "Alleen een ei",
      "Brood en kaas"
    ],
    "exerciseIds": [
      "a1-expanded-koken-bakken-listening",
      "a1-expanded-koken-bakken-vocabulary"
    ],
    "audioId": "a1-dialogue:koken-bakken"
  },
  {
    "id": "aan-tafel",
    "themeId": "eten",
    "title": "Eten, drinken en de tafel dekken",
    "referencePhotos": [
      27,
      33
    ],
    "terms": [
      "het bord",
      "de lepel",
      "de vork",
      "het mes"
    ],
    "verbs": [
      "eten",
      "drinken",
      "dekken"
    ],
    "grammarIds": [
      "onbepaald-lidwoord"
    ],
    "explanation": "Bij één onbepaald voorwerp gebruik je een: een bord. Bij meervoud verdwijnt een: twee borden. Vertel wat je vaak, soms of nooit eet. Met graag geef je een voorkeur aan.",
    "dialogue": [
      "Kun je de tafel dekken?",
      "Ja. Ik zet twee borden en twee glazen neer.",
      "Vergeet de vorken en messen niet.",
      "Wil je ook een lepel voor de soep?",
      "Ja, graag. Eet smakelijk!"
    ],
    "question": "Hoeveel borden worden neergezet?",
    "answer": "Twee",
    "distractors": [
      "Eén",
      "Vier"
    ],
    "exerciseIds": [
      "a1-expanded-aan-tafel-listening",
      "a1-expanded-aan-tafel-vocabulary"
    ],
    "audioId": "a1-dialogue:aan-tafel"
  },
  {
    "id": "geen-niet",
    "themeId": "eten",
    "title": "Zeggen wat je niet wilt",
    "referencePhotos": [
      80
    ],
    "terms": [
      "de suiker",
      "de melk",
      "de soep",
      "warm"
    ],
    "verbs": [
      "willen",
      "hebben"
    ],
    "grammarIds": [],
    "explanation": "Geen ontkent een onbepaald zelfstandig naamwoord: geen suiker, geen appel. Niet ontkent onder meer een eigenschap of een bepaald zinsdeel: niet warm, die soep niet. De plaats van niet hangt af van wat je ontkent.",
    "dialogue": [
      "Wil je suiker in je thee?",
      "Nee, ik wil geen suiker. Wel een beetje melk.",
      "Is de soep warm?",
      "Nee, de soep is niet warm.",
      "Wil je hem dan nog?",
      "Nee, ik eet die soep niet."
    ],
    "question": "Wat wil de spreker niet in de thee?",
    "answer": "Suiker",
    "distractors": [
      "Melk",
      "Een beetje melk"
    ],
    "exerciseIds": [
      "a1-expanded-geen-niet-listening",
      "a1-expanded-geen-niet-vocabulary"
    ],
    "audioId": "a1-dialogue:geen-niet"
  },
  {
    "id": "lichaam",
    "themeId": "gezondheid",
    "title": "Het lichaam en meervouden",
    "referencePhotos": [
      37,
      40,
      42,
      47,
      52
    ],
    "terms": [
      "de arm",
      "de hand",
      "het oog",
      "de voet"
    ],
    "verbs": [
      "hebben",
      "zien"
    ],
    "grammarIds": [
      "meervoud",
      "verkleinwoord"
    ],
    "explanation": "Veel meervouden eindigen op -en. De spelling bewaart vaak de klank: arm–armen, been–benen, lip–lippen. Meervouden gebruiken de. Een verkleinwoord in het enkelvoud gebruikt het: het handje.",
    "dialogue": [
      "Waar doet het pijn?",
      "Aan mijn hand, bij mijn vingers.",
      "Kun je beide handen bewegen?",
      "Ja. Mijn arm doet geen pijn.",
      "Wijs met je andere hand de plek aan."
    ],
    "question": "Waar heeft de spreker pijn?",
    "answer": "Aan de hand",
    "distractors": [
      "Aan het oog",
      "Aan de voet"
    ],
    "exerciseIds": [
      "a1-expanded-lichaam-listening",
      "a1-expanded-lichaam-vocabulary"
    ],
    "audioId": "a1-dialogue:lichaam"
  },
  {
    "id": "huisarts-afspraak",
    "themeId": "gezondheid",
    "title": "Bellen voor een afspraak",
    "referencePhotos": [
      48,
      50,
      51
    ],
    "terms": [
      "de huisarts",
      "de assistent",
      "de keelpijn",
      "de afspraak"
    ],
    "verbs": [
      "bellen",
      "voelen",
      "komen"
    ],
    "grammarIds": [
      "hebben-zijn",
      "voorzetsels-tijd"
    ],
    "explanation": "Vertel een klacht met ik heb, bijvoorbeeld ik heb keelpijn. Vertel een toestand met ik ben, bijvoorbeeld ik ben moe. Sinds geeft aan wanneer iets begon. Deze les oefent taal, geen diagnose of behandeling.",
    "dialogue": [
      "Goedemorgen, ik wil een afspraak maken.",
      "Wat is er aan de hand?",
      "Ik heb sinds gisteren keelpijn.",
      "Wanneer kunt u komen?",
      "Vanmiddag kan ik.",
      "Dan noteer ik uw afspraak."
    ],
    "question": "Sinds wanneer heeft de spreker keelpijn?",
    "answer": "Sinds gisteren",
    "distractors": [
      "Sinds maandag",
      "Sinds een maand"
    ],
    "exerciseIds": [
      "a1-expanded-huisarts-afspraak-listening",
      "a1-expanded-huisarts-afspraak-vocabulary"
    ],
    "audioId": "a1-dialogue:huisarts-afspraak"
  },
  {
    "id": "apotheek",
    "themeId": "gezondheid",
    "title": "Vragen bij de apotheek",
    "referencePhotos": [
      46
    ],
    "terms": [
      "de apotheek",
      "de zalf",
      "de druppel",
      "het doosje"
    ],
    "verbs": [
      "vragen",
      "lezen",
      "uitleggen",
      "smeren"
    ],
    "grammarIds": [
      "modale-werkwoorden"
    ],
    "explanation": "Lees het etiket en vraag om uitleg als je de instructie niet begrijpt. Innemen gebruik je bij bepaalde medicijnen; smeren bij zalf. De voorbeelden geven geen dosering: volg de instructies van arts of apotheker.",
    "dialogue": [
      "Ik begrijp het etiket op dit doosje niet.",
      "Welke zin bedoelt u?",
      "Kunt u uitleggen hoe ik dit moet gebruiken?",
      "Ja, ik lees de instructie met u.",
      "Dank u. Wilt u het langzaam herhalen?"
    ],
    "question": "Waarover vraagt de spreker uitleg?",
    "answer": "Over het etiket",
    "distractors": [
      "Over de openingstijd",
      "Over de prijs van brood"
    ],
    "exerciseIds": [
      "a1-expanded-apotheek-listening",
      "a1-expanded-apotheek-vocabulary"
    ],
    "audioId": "a1-dialogue:apotheek"
  },
  {
    "id": "tandarts",
    "themeId": "gezondheid",
    "title": "Bij de tandarts",
    "referencePhotos": [
      45,
      54
    ],
    "terms": [
      "de tandarts",
      "de kies",
      "het gaatje",
      "de tandenborstel"
    ],
    "verbs": [
      "poetsen",
      "vullen"
    ],
    "grammarIds": [
      "bepaald-lidwoord"
    ],
    "explanation": "Leer de en het bij elk nieuw woord: de kies, het gaatje. Bij meervoud gebruik je de: de kiezen, de gaatjes. Beschrijf wat je merkt en vraag om uitleg zonder zelf een diagnose te stellen.",
    "dialogue": [
      "Ik heb pijn aan een kies.",
      "Ik kijk even. Kunt u uw mond openen?",
      "Ja. Kunt u vertellen wat u doet?",
      "Ik bekijk eerst uw kiezen.",
      "Goed, dank u."
    ],
    "question": "Waaraan heeft de patiënt pijn?",
    "answer": "Aan een kies",
    "distractors": [
      "Aan een hand",
      "Aan een oor"
    ],
    "exerciseIds": [
      "a1-expanded-tandarts-listening",
      "a1-expanded-tandarts-vocabulary"
    ],
    "audioId": "a1-dialogue:tandarts"
  },
  {
    "id": "kleren-kleur",
    "themeId": "kleding",
    "title": "Kleding en beschrijvingen",
    "referencePhotos": [
      49,
      58
    ],
    "terms": [
      "de trui",
      "het overhemd",
      "de rok",
      "het shirt"
    ],
    "verbs": [
      "dragen",
      "hebben"
    ],
    "grammarIds": [
      "bijvoeglijk-naamwoord"
    ],
    "explanation": "Voor een zelfstandig naamwoord krijgt het bijvoeglijk naamwoord meestal -e. Bij een onbepaald het-woord in het enkelvoud meestal niet: een wit shirt. Vergelijk het witte shirt. Na zijn blijft het wit.",
    "dialogue": [
      "Wat draag je vandaag?",
      "Een blauwe broek en een wit shirt.",
      "Is dat het nieuwe shirt?",
      "Ja, het nieuwe shirt is wit.",
      "Ik draag liever een rode trui."
    ],
    "question": "Welke kleur heeft het shirt?",
    "answer": "Wit",
    "distractors": [
      "Blauw",
      "Rood"
    ],
    "exerciseIds": [
      "a1-expanded-kleren-kleur-listening",
      "a1-expanded-kleren-kleur-vocabulary"
    ],
    "audioId": "a1-dialogue:kleren-kleur"
  },
  {
    "id": "passen-ruilen",
    "themeId": "kleding",
    "title": "Passen, betalen en ruilen",
    "referencePhotos": [
      61,
      64
    ],
    "terms": [
      "de paskamer",
      "de maat",
      "de broek",
      "kapot"
    ],
    "verbs": [
      "passen",
      "ruilen",
      "meenemen"
    ],
    "grammarIds": [
      "modale-werkwoorden",
      "vergelijking"
    ],
    "explanation": "Vraag met mag ik om toestemming. Te klein betekent kleiner dan gewenst; groter vergelijkt twee maten. Bij ruilen geef je een gekocht artikel terug en krijg je een ander artikel, volgens de voorwaarden van de winkel.",
    "dialogue": [
      "Mag ik deze broek passen?",
      "Ja, de paskamer is daar.",
      "Deze maat is te klein. Heeft u een grotere?",
      "Ja, probeert u deze maar.",
      "En als de rits kapot is?",
      "Kom dan met de kassabon terug."
    ],
    "question": "Waarom wil de klant een andere maat?",
    "answer": "De broek is te klein",
    "distractors": [
      "De broek is blauw",
      "De broek is te groot"
    ],
    "exerciseIds": [
      "a1-expanded-passen-ruilen-listening",
      "a1-expanded-passen-ruilen-vocabulary"
    ],
    "audioId": "a1-dialogue:passen-ruilen"
  },
  {
    "id": "wassen-accessoires",
    "themeId": "kleding",
    "title": "Accessoires en de was",
    "referencePhotos": [
      62,
      63
    ],
    "terms": [
      "de handschoen",
      "de hoofddoek",
      "de bril",
      "droog"
    ],
    "verbs": [
      "wassen",
      "ophangen"
    ],
    "grammarIds": [
      "scheidbaar-hoofdzin"
    ],
    "explanation": "Bij een scheidbaar werkwoord staat het losse deel in een hoofdzin vaak achteraan: ik hang de was op. In de infinitief schrijf je het samen: ophangen. Vies en schoon, nat en droog vormen tegenstellingen.",
    "dialogue": [
      "Zijn de handschoenen schoon?",
      "Nee, ze zijn nog vies.",
      "Ik was ze en hang ze daarna op.",
      "Zijn ze vanavond droog?",
      "Dat weet ik nog niet."
    ],
    "question": "Wat doet de spreker na het wassen?",
    "answer": "De handschoenen ophangen",
    "distractors": [
      "De handschoenen kopen",
      "De handschoenen ruilen"
    ],
    "exerciseIds": [
      "a1-expanded-wassen-accessoires-listening",
      "a1-expanded-wassen-accessoires-vocabulary"
    ],
    "audioId": "a1-dialogue:wassen-accessoires"
  },
  {
    "id": "openingstijden",
    "themeId": "kleding",
    "title": "Openingstijden en online bestellen",
    "referencePhotos": [
      55,
      56,
      57,
      60
    ],
    "terms": [
      "het uur",
      "het kwartier",
      "de bestelling",
      "de winkel"
    ],
    "verbs": [
      "openen",
      "bestellen",
      "ophalen",
      "duren"
    ],
    "grammarIds": [
      "voorzetsels-tijd"
    ],
    "explanation": "Om geeft een tijdstip aan; van … tot … een periode. Half tien is 09:30, kwart over negen 09:15 en kwart voor tien 09:45. Bij online kopen kun je een bestelling soms laten bezorgen of ophalen.",
    "dialogue": [
      "Tot hoe laat is de winkel open?",
      "Vandaag van negen tot zes.",
      "Kan ik mijn bestelling om half tien ophalen?",
      "Ja, om negen uur dertig ligt ze klaar.",
      "Dank u, dan kom ik morgenochtend."
    ],
    "question": "Hoe laat is half tien?",
    "answer": "09:30",
    "distractors": [
      "10:30",
      "09:15"
    ],
    "exerciseIds": [
      "a1-expanded-openingstijden-listening",
      "a1-expanded-openingstijden-vocabulary"
    ],
    "audioId": "a1-dialogue:openingstijden"
  },
  {
    "id": "station-bus",
    "themeId": "reizen",
    "title": "Trein en bus nemen",
    "referencePhotos": [
      59,
      78,
      81
    ],
    "terms": [
      "het spoor",
      "de halte",
      "de vertraging",
      "het kaartje"
    ],
    "verbs": [
      "vertrekken",
      "aankomen",
      "instappen",
      "uitstappen",
      "rennen"
    ],
    "grammarIds": [
      "scheidbaar-hoofdzin"
    ],
    "explanation": "Bij een trein spreek je over het spoor en bij een bus over de halte. Instappen is naar binnen gaan; uitstappen is naar buiten gaan. Vertrekken is weggaan; aankomen is je bestemming bereiken.",
    "dialogue": [
      "Van welk spoor vertrekt de trein?",
      "Van spoor vier, om tien uur.",
      "Moet ik daarna de bus nemen?",
      "Ja, stap bij het station in.",
      "Waar stap ik uit?",
      "Bij de derde halte."
    ],
    "question": "Van welk spoor vertrekt de trein?",
    "answer": "Spoor vier",
    "distractors": [
      "Spoor drie",
      "Spoor tien"
    ],
    "exerciseIds": [
      "a1-expanded-station-bus-listening",
      "a1-expanded-station-bus-vocabulary"
    ],
    "audioId": "a1-dialogue:station-bus"
  },
  {
    "id": "verkeer-route",
    "themeId": "reizen",
    "title": "Veilig de route begrijpen",
    "referencePhotos": [
      65,
      66,
      71,
      72,
      74
    ],
    "terms": [
      "het kruispunt",
      "het stoplicht",
      "links",
      "rechtdoor"
    ],
    "verbs": [
      "oversteken",
      "stoppen",
      "lopen"
    ],
    "grammarIds": [
      "voorzetsels-richting",
      "voorzetsels-plaats"
    ],
    "explanation": "Een route vertelt hoe je ergens komt. Links en rechts geven richting aan; naast en tegenover beschrijven een plaats. Verkeerswoorden oefenen hier taalbegrip; volg buiten altijd de actuele borden en verkeersregels.",
    "dialogue": [
      "Hoe loop ik naar de apotheek?",
      "Ga rechtdoor tot het kruispunt.",
      "En dan?",
      "Sla linksaf. De apotheek is tegenover het park.",
      "Moet ik de straat oversteken?",
      "Ja, gebruik daar de oversteekplaats."
    ],
    "question": "Waar is de apotheek?",
    "answer": "Tegenover het park",
    "distractors": [
      "Naast het station",
      "Achter de school"
    ],
    "exerciseIds": [
      "a1-expanded-verkeer-route-listening",
      "a1-expanded-verkeer-route-vocabulary"
    ],
    "audioId": "a1-dialogue:verkeer-route"
  },
  {
    "id": "nederland-kaart",
    "themeId": "reizen",
    "title": "Plaats, land en windrichting",
    "referencePhotos": [
      67,
      68,
      73,
      86,
      89
    ],
    "terms": [
      "het noorden",
      "het zuiden",
      "het oosten",
      "het westen"
    ],
    "verbs": [
      "liggen",
      "wonen"
    ],
    "grammarIds": [
      "voorzetsels-plaats"
    ],
    "explanation": "Een kaart helpt je plaatsen en richtingen te beschrijven. Gebruik in voor een land of provincie: in Nederland. Gebruik ten noorden van om twee plaatsen te vergelijken. Land, provincie en stad zijn verschillende geografische begrippen.",
    "dialogue": [
      "Waar ligt het noorden op deze kaart?",
      "Bovenaan. Het zuiden ligt onderaan.",
      "En het westen?",
      "Links. Het oosten is rechts.",
      "Woon je in Nederland?",
      "Ja, ik woon in de provincie Utrecht."
    ],
    "question": "Welke richting staat links op deze kaart?",
    "answer": "Het westen",
    "distractors": [
      "Het oosten",
      "Het zuiden"
    ],
    "exerciseIds": [
      "a1-expanded-nederland-kaart-listening",
      "a1-expanded-nederland-kaart-vocabulary"
    ],
    "audioId": "a1-dialogue:nederland-kaart"
  },
  {
    "id": "onderweg-plannen",
    "themeId": "reizen",
    "title": "Tijd, vertraging en twee werkwoorden",
    "referencePhotos": [
      69,
      70,
      79
    ],
    "terms": [
      "de file",
      "de collega",
      "de minuut",
      "op tijd"
    ],
    "verbs": [
      "moeten",
      "kunnen",
      "doorgeven"
    ],
    "grammarIds": [
      "modale-werkwoorden",
      "zinsvolgorde-werkwoordgroep",
      "voorzetsels-tijd"
    ],
    "explanation": "Met twee werkwoorden staat de persoonsvorm vooraan en de infinitief meestal achteraan: ik moet mijn collega bellen. Over tien minuten ligt in de toekomst; sinds negen uur geeft een begin in het verleden aan.",
    "dialogue": [
      "Ik sta in de file en kom niet op tijd.",
      "Kun je je collega bellen?",
      "Ja, ik moet de vertraging doorgeven.",
      "Wanneer kom je aan?",
      "Over twintig minuten, denk ik."
    ],
    "question": "Wat moet de spreker doorgeven?",
    "answer": "De vertraging",
    "distractors": [
      "De prijs",
      "De postcode"
    ],
    "exerciseIds": [
      "a1-expanded-onderweg-plannen-listening",
      "a1-expanded-onderweg-plannen-vocabulary"
    ],
    "audioId": "a1-dialogue:onderweg-plannen"
  },
  {
    "id": "hobbys-sport",
    "themeId": "vrije-tijd",
    "title": "Hobby’s en sport",
    "referencePhotos": [
      75,
      82
    ],
    "terms": [
      "de wedstrijd",
      "het team",
      "de muziek",
      "de hobby"
    ],
    "verbs": [
      "trainen",
      "zwemmen",
      "tekenen"
    ],
    "grammarIds": [
      "tegenwoordige-tijd"
    ],
    "explanation": "Vertel wat je graag doet: ik zwem graag. Bij wij, jullie en zij gebruik je meestal de infinitief als persoonsvorm: wij trainen. Een wedstrijd is een sportieve ontmoeting; trainen is oefenen om beter te worden.",
    "dialogue": [
      "Wat doe jij graag?",
      "Ik zwem en ik teken graag.",
      "Train je met een team?",
      "Nee, maar mijn broer speelt voetbal.",
      "Wanneer heeft hij een wedstrijd?",
      "Zaterdagmiddag."
    ],
    "question": "Wanneer heeft de broer een wedstrijd?",
    "answer": "Zaterdagmiddag",
    "distractors": [
      "Zondagmorgen",
      "Maandagavond"
    ],
    "exerciseIds": [
      "a1-expanded-hobbys-sport-listening",
      "a1-expanded-hobbys-sport-vocabulary"
    ],
    "audioId": "a1-dialogue:hobbys-sport"
  },
  {
    "id": "uitgaan",
    "themeId": "vrije-tijd",
    "title": "Afspreken en uitgaan",
    "referencePhotos": [
      83,
      90
    ],
    "terms": [
      "het museum",
      "het concert",
      "het café",
      "de vriendin"
    ],
    "verbs": [
      "afspreken",
      "kletsen",
      "schoonmaken",
      "bezoeken"
    ],
    "grammarIds": [
      "voegwoorden",
      "modale-werkwoorden"
    ],
    "explanation": "Doe een voorstel met zullen we of wil je. Geef een reden met want; daarna blijft de gewone hoofdzinvolgorde staan. Met liever vergelijk je voorkeuren.",
    "dialogue": [
      "Zullen we zaterdag naar een concert gaan?",
      "Ik ga liever naar het museum.",
      "Dat kan. Wil je daarna iets drinken?",
      "Ja, dan kunnen we in het café kletsen.",
      "Kom je om elf uur?",
      "Liever om twaalf uur, want ik moet eerst schoonmaken."
    ],
    "question": "Waarom komt de spreker liever om twaalf uur?",
    "answer": "De spreker moet eerst schoonmaken",
    "distractors": [
      "Het café is gesloten",
      "Het concert begint vroeg"
    ],
    "exerciseIds": [
      "a1-expanded-uitgaan-listening",
      "a1-expanded-uitgaan-vocabulary"
    ],
    "audioId": "a1-dialogue:uitgaan"
  },
  {
    "id": "dieren",
    "themeId": "vrije-tijd",
    "title": "Dieren beschrijven",
    "referencePhotos": [
      84
    ],
    "terms": [
      "het schaap",
      "de koe",
      "het paard",
      "de vogel"
    ],
    "verbs": [
      "zien",
      "voeren"
    ],
    "grammarIds": [
      "meervoud",
      "aanwijzend"
    ],
    "explanation": "Noem het dier met zijn lidwoord en leer het meervoud erbij. Schaap wordt schapen en vogel wordt vogels. Bij meervouden gebruik je deze of die, ook als het enkelvoud het heeft: dit schaap, deze schapen.",
    "dialogue": [
      "Kijk, daar staan twee schapen.",
      "En naast die schapen staat een koe.",
      "Zie je ook een paard?",
      "Ja, achter het hek.",
      "Welke dieren vind je leuk?",
      "Ik vind vogels leuk."
    ],
    "question": "Welk dier staat naast de schapen?",
    "answer": "Een koe",
    "distractors": [
      "Een vogel",
      "Een hond"
    ],
    "exerciseIds": [
      "a1-expanded-dieren-listening",
      "a1-expanded-dieren-vocabulary"
    ],
    "audioId": "a1-dialogue:dieren"
  },
  {
    "id": "vakantie-weer",
    "themeId": "vrije-tijd",
    "title": "Op vakantie en het weer",
    "referencePhotos": [
      88
    ],
    "terms": [
      "de tent",
      "het strand",
      "de bloem",
      "het zwembad"
    ],
    "verbs": [
      "wandelen",
      "fietsen",
      "regenen"
    ],
    "grammarIds": [
      "onpersoonlijk",
      "voegwoorden"
    ],
    "explanation": "Voor het weer gebruik je vaak het: het regent, het is warm. Verbind twee zinnen met en of maar. Vertel waar je verblijft en wat je elke dag doet, zonder moeilijke zinnen nodig te hebben.",
    "dialogue": [
      "Waar slapen jullie op vakantie?",
      "In een tent, vlak bij het strand.",
      "Wat doen jullie overdag?",
      "We fietsen en wandelen. Soms gaan we naar het zwembad.",
      "Is het mooi weer?",
      "Het is warm, maar vandaag regent het."
    ],
    "question": "Waar slapen ze?",
    "answer": "In een tent",
    "distractors": [
      "In een hotel",
      "In het zwembad"
    ],
    "exerciseIds": [
      "a1-expanded-vakantie-weer-listening",
      "a1-expanded-vakantie-weer-vocabulary"
    ],
    "audioId": "a1-dialogue:vakantie-weer"
  }
];
for (const lesson of a1ExpansionLessons) {
 lesson.sourcePages = a1SourcePages.filter(page => page.lessonId === lesson.id);
 lesson.referencePhotos = lesson.sourcePages.map(page => page.photo);
 lesson.terms = [...new Set([...lesson.terms, ...lesson.sourcePages.flatMap(page => page.terms)])];
 lesson.verbs = [...new Set([...lesson.verbs, ...lesson.sourcePages.flatMap(page => page.verbs)])];
}
export const a1LessonNodeId = (id) => `a1-lesson:${id}`;
export const a1LessonAudio = a1ExpansionLessons.map((lesson) => ({
  id: lesson.audioId, lessonId: lesson.id, language: 'nl-NL', engine: 'speech-synthesis',
  text: lesson.dialogue.join(' '), normalRate: 0.86, slowRate: 0.62,
}));
export const a1ExpansionExercises = a1ExpansionLessons.flatMap((lesson, index) => {
  const definitions = lesson.terms.slice(0, 3).map((term) => {
    const entry = findLexiconEntry(term);
    if (!entry) throw new Error(`Missing canonical A1 word: ${term}`);
    return entry.definition;
  });
  const rotate = (items) => items.slice(index % items.length).concat(items.slice(0, index % items.length));
  return [
    { id: lesson.exerciseIds[0], lessonId: lesson.id, level: 'A1', difficulty: 2, skill: 'luisteren', topic: lesson.title,
      type: 'listening', prompt: lesson.question, audio: lesson.dialogue.join(' '), answer: lesson.answer,
      options: rotate([lesson.answer, ...lesson.distractors]), explanation: `Het gesprek geeft als antwoord: ${lesson.answer}.`, evidence: lesson.dialogue.join(' ') },
    { id: lesson.exerciseIds[1], lessonId: lesson.id, level: 'A1', difficulty: 2, skill: 'woordenschat', topic: lesson.title,
      type: 'choice', prompt: `Wat betekent “${lesson.terms[0]}” in deze les?`, answer: definitions[0],
      options: rotate(definitions), explanation: findLexiconEntry(lesson.terms[0]).example },
  ];
});

const a1GrammarPractice = [
  {
    "lessonId": "persoonlijke-gegevens",
    "prompt": "Mijn naam ___ Eva.",
    "answer": "is",
    "options": [
      "is",
      "ben",
      "heb"
    ],
    "explanation": "Mijn naam is het onderwerp. Daarbij hoort is, niet ben."
  },
  {
    "lessonId": "groeten",
    "prompt": "Welke reactie past bij “Hier is uw thee, mevrouw”?",
    "answer": "Dank u wel.",
    "options": [
      "Dank u wel.",
      "Hoe heet jij?",
      "Tot morgen?"
    ],
    "explanation": "Dank u wel is een beleefde bedanking en past bij de aanspreekvorm u."
  },
  {
    "lessonId": "familierelaties",
    "prompt": "De dochter van mijn zus is mijn ___.",
    "answer": "nicht",
    "options": [
      "nicht",
      "zwager",
      "tante"
    ],
    "explanation": "Een nicht kan de dochter van je broer of zus zijn."
  },
  {
    "lessonId": "klinkers",
    "prompt": "Welk woord heeft dezelfde lange klinker als maan?",
    "answer": "raam",
    "options": [
      "raam",
      "man",
      "bus"
    ],
    "explanation": "Maan en raam hebben een lange aa-klank; man heeft een korte a."
  },
  {
    "lessonId": "lettercombinaties",
    "prompt": "Welke schrijfwijzen geven dezelfde klinkerklank weer in trein en ijs?",
    "answer": "ei en ij",
    "options": [
      "ei en ij",
      "ie en oe",
      "eu en ui"
    ],
    "explanation": "Ei en ij worden in deze woorden hetzelfde uitgesproken."
  },
  {
    "lessonId": "instructies",
    "prompt": "Welke zin is een instructie?",
    "answer": "Lees de vraag.",
    "options": [
      "Lees de vraag.",
      "Ik lees de vraag.",
      "Zij leest de vraag."
    ],
    "explanation": "Lees is hier een gebiedende wijs: de spreker zegt wat je moet doen."
  },
  {
    "lessonId": "begrijpen-verstaan",
    "prompt": "Je hoort alle woorden, maar de betekenis is niet duidelijk. Wat zeg je?",
    "answer": "Ik begrijp het niet.",
    "options": [
      "Ik begrijp het niet.",
      "Ik ben te laat.",
      "Ik heb geen stem."
    ],
    "explanation": "Begrijpen gaat over de betekenis; verstaan gaat over het herkennen van gesproken woorden."
  },
  {
    "lessonId": "schooldag",
    "prompt": "Welke zin heeft de juiste woordvolgorde?",
    "answer": "Morgen begint de les.",
    "options": [
      "Morgen begint de les.",
      "Morgen de les begint.",
      "Begint morgen de les."
    ],
    "explanation": "Na morgen staat de persoonsvorm begint. Het onderwerp de les volgt daarop."
  },
  {
    "lessonId": "huis-kamers",
    "prompt": "De woonkamer ligt naast de keuken. Welk woord beschrijft de plaats?",
    "answer": "naast",
    "options": [
      "naast",
      "morgen",
      "langzaam"
    ],
    "explanation": "Naast is een plaatsvoorzetsel. Morgen geeft tijd aan en langzaam een manier."
  },
  {
    "lessonId": "meubels-kleuren",
    "prompt": "Vul aan: ___ bed hier is nieuw.",
    "answer": "Dit",
    "options": [
      "Dit",
      "Deze",
      "Die"
    ],
    "explanation": "Bed is een het-woord in het enkelvoud. Dichtbij gebruik je dit."
  },
  {
    "lessonId": "buurt-verdieping",
    "prompt": "Hoe schrijf je 3e in woorden?",
    "answer": "derde",
    "options": [
      "derde",
      "drie",
      "driede"
    ],
    "explanation": "Het rangtelwoord bij drie is derde."
  },
  {
    "lessonId": "woning-zoeken",
    "prompt": "Welke vraag vraagt naar de huurprijs?",
    "answer": "Hoeveel is de huur?",
    "options": [
      "Hoeveel is de huur?",
      "Waar is de sleutel?",
      "Wie woont hier?"
    ],
    "explanation": "Hoeveel vraagt hier naar een bedrag."
  },
  {
    "lessonId": "markt-betalen",
    "prompt": "Hoeveel gram is een ons?",
    "answer": "100 gram",
    "options": [
      "100 gram",
      "500 gram",
      "1000 gram"
    ],
    "explanation": "Een ons is honderd gram; een pond is vijfhonderd gram."
  },
  {
    "lessonId": "koken-bakken",
    "prompt": "Vul aan: Ik ___ twee tomaten nodig.",
    "answer": "heb",
    "options": [
      "heb",
      "ben",
      "is"
    ],
    "explanation": "De vaste combinatie is nodig hebben. Bij ik gebruik je heb."
  },
  {
    "lessonId": "aan-tafel",
    "prompt": "Vul aan: Op tafel staan twee ___.",
    "answer": "borden",
    "options": [
      "borden",
      "bord",
      "bordje"
    ],
    "explanation": "Na twee gebruik je het meervoud borden."
  },
  {
    "lessonId": "geen-niet",
    "prompt": "Vul aan: Ik wil ___ suiker in mijn thee.",
    "answer": "geen",
    "options": [
      "geen",
      "niet",
      "nooit geen"
    ],
    "explanation": "Suiker is hier een onbepaald zelfstandig naamwoord zonder lidwoord; je ontkent het met geen."
  },
  {
    "lessonId": "lichaam",
    "prompt": "Wat is het meervoud van been?",
    "answer": "benen",
    "options": [
      "benen",
      "beenen",
      "bennen"
    ],
    "explanation": "In benen staat de lange ee-klank in een open lettergreep en schrijf je één e."
  },
  {
    "lessonId": "huisarts-afspraak",
    "prompt": "Vul aan: Ik heb ___ gisteren keelpijn.",
    "answer": "sinds",
    "options": [
      "sinds",
      "naar",
      "naast"
    ],
    "explanation": "Sinds geeft aan wanneer een situatie begon en nog voortduurt."
  },
  {
    "lessonId": "apotheek",
    "prompt": "Welke vraag vraagt beleefd om uitleg?",
    "answer": "Kunt u dit uitleggen?",
    "options": [
      "Kunt u dit uitleggen?",
      "U dit uitleggen?",
      "Kan u dit uitleggen niet?"
    ],
    "explanation": "Kunt u is een beleefde vraagvorm; het tweede werkwoord staat achteraan."
  },
  {
    "lessonId": "tandarts",
    "prompt": "Kies het lidwoord: ___ gaatje.",
    "answer": "het",
    "options": [
      "het",
      "de",
      "geen"
    ],
    "explanation": "Gaatje is een verkleinwoord in het enkelvoud en krijgt het."
  },
  {
    "lessonId": "kleren-kleur",
    "prompt": "Kies de juiste combinatie.",
    "answer": "een wit shirt",
    "options": [
      "een wit shirt",
      "een witte shirt",
      "het wit shirt"
    ],
    "explanation": "Shirt is een het-woord: na een staat het bijvoeglijk naamwoord hier zonder -e."
  },
  {
    "lessonId": "passen-ruilen",
    "prompt": "Deze broek is te klein. Je vraagt om een ___ maat.",
    "answer": "grotere",
    "options": [
      "grotere",
      "kleinere",
      "kleinste"
    ],
    "explanation": "Als iets te klein is, heb je een grotere maat nodig."
  },
  {
    "lessonId": "wassen-accessoires",
    "prompt": "Welke hoofdzin gebruikt ophangen correct?",
    "answer": "Ik hang de was op.",
    "options": [
      "Ik hang de was op.",
      "Ik ophang de was.",
      "Ik hang op de was."
    ],
    "explanation": "In deze hoofdzin staat het scheidbare deel op na het object de was."
  },
  {
    "lessonId": "openingstijden",
    "prompt": "Hoe laat is kwart voor tien?",
    "answer": "09:45",
    "options": [
      "09:45",
      "10:15",
      "09:15"
    ],
    "explanation": "Kwart voor tien is vijftien minuten vóór tien uur."
  },
  {
    "lessonId": "station-bus",
    "prompt": "Welke zin gebruikt uitstappen correct?",
    "answer": "Ik stap bij de halte uit.",
    "options": [
      "Ik stap bij de halte uit.",
      "Ik uitstap bij de halte.",
      "Ik stap bij de halte uitstappen."
    ],
    "explanation": "In een hoofdzin worden stap en uit gescheiden."
  },
  {
    "lessonId": "verkeer-route",
    "prompt": "De winkel is tegenover het park. Waar is de winkel?",
    "answer": "Aan de overkant van het park.",
    "options": [
      "Aan de overkant van het park.",
      "In het park.",
      "Achter in het park."
    ],
    "explanation": "Tegenover betekent aan de andere kant, met de voorkanten naar elkaar gericht."
  },
  {
    "lessonId": "nederland-kaart",
    "prompt": "Vul aan: Ik woon ___ Nederland.",
    "answer": "in",
    "options": [
      "in",
      "op",
      "aan"
    ],
    "explanation": "Bij een landnaam gebruik je hier in."
  },
  {
    "lessonId": "onderweg-plannen",
    "prompt": "Welke zin heeft de juiste werkwoordvolgorde?",
    "answer": "Ik moet mijn collega bellen.",
    "options": [
      "Ik moet mijn collega bellen.",
      "Ik moet bel mijn collega.",
      "Ik bellen moet mijn collega."
    ],
    "explanation": "Moet is de persoonsvorm. De infinitief bellen staat achteraan."
  },
  {
    "lessonId": "hobbys-sport",
    "prompt": "Vul aan: Wij ___ elke zaterdag.",
    "answer": "trainen",
    "options": [
      "trainen",
      "traint",
      "train"
    ],
    "explanation": "Bij wij gebruik je in de tegenwoordige tijd de meervoudsvorm trainen."
  },
  {
    "lessonId": "uitgaan",
    "prompt": "Welke zin geeft een reden met want?",
    "answer": "Ik kom later, want ik werk nog.",
    "options": [
      "Ik kom later, want ik werk nog.",
      "Ik kom later, want werk ik nog.",
      "Ik kom later, want ik nog werk."
    ],
    "explanation": "Na want gebruik je de gewone hoofdzinvolgorde: ik werk nog."
  },
  {
    "lessonId": "dieren",
    "prompt": "Vul aan: ___ schapen daar zijn wit.",
    "answer": "Die",
    "options": [
      "Die",
      "Dat",
      "Dit"
    ],
    "explanation": "Schapen is meervoud. Voor iets verder weg gebruik je die."
  },
  {
    "lessonId": "vakantie-weer",
    "prompt": "Vul aan: ___ regent vandaag.",
    "answer": "Het",
    "options": [
      "Het",
      "Hij",
      "Er"
    ],
    "explanation": "Bij het weer gebruik je hier het als onderwerp."
  }
];
for (const [index, item] of a1GrammarPractice.entries()) {
  const lesson = a1ExpansionLessons.find((entry) => entry.id === item.lessonId);
  const id = `a1-expanded-${lesson.id}-grammar`;
  lesson.exerciseIds.push(id);
  const offset = index % item.options.length;
  a1ExpansionExercises.push({ ...item, id, level: 'A1', difficulty: 2, type: 'choice', skill: 'grammatica', topic: lesson.title,
    options: item.options.slice(offset).concat(item.options.slice(0, offset)) });
}

const a1VerbPracticeContexts = [
  [
    "groeten",
    "De docent ___ de cursisten.",
    "groet"
  ],
  [
    "typen",
    "Eva ___ haar naam op het formulier.",
    "typt"
  ],
  [
    "pakken",
    "Hij ___ zijn sleutel.",
    "pakt"
  ],
  [
    "verstaan",
    "Jij ___ de spreker goed.",
    "verstaat"
  ],
  [
    "smeren",
    "Noor ___ boter op haar brood.",
    "smeert"
  ],
  [
    "duren",
    "De les ___ een uur.",
    "duurt"
  ],
  [
    "vertrekken",
    "De trein ___ om acht uur.",
    "vertrekt"
  ],
  [
    "rennen",
    "Hij ___ naar de bus.",
    "rent"
  ],
  [
    "snappen",
    "De cursist ___ de uitleg.",
    "snapt"
  ],
  [
    "bezoeken",
    "Hij ___ zijn oma.",
    "bezoekt"
  ],
  [
    "kletsen",
    "Sara ___ met haar vriendin.",
    "kletst"
  ],
  [
    "dekken",
    "Hij ___ de tafel.",
    "dekt"
  ]
];
a1VerbPracticeContexts.push(['trouwen','Zij ___ met haar partner.','trouwt'],['sporten','Ik ___ in het park.','sport'],['voetballen','Hij ___ met vrienden.','voetbalt'],['onthouden','Zij ___ het woord.','onthoudt'],['opletten','Hij ___ goed op.','let'],['aanwijzen','Zij ___ dit boek aan.','wijst']);
for (const [index, [infinitive, prompt, answer]] of a1VerbPracticeContexts.entries()) {
  const verb = a1ExpansionVerbs.find((entry) => entry.infinitive === infinitive);
  const lessons = a1ExpansionLessons.filter((lesson) => lesson.verbs.includes(infinitive));
  const lessonId = lessons[0].id;
  const formId = `a1-expanded-verb-${infinitive}-present`;
  const meaningId = `a1-expanded-verb-${infinitive}-meaning`;
  const definitions = [verb.meaning, a1ExpansionVerbs[(index + 1) % a1ExpansionVerbs.length].meaning, a1ExpansionVerbs[(index + 2) % a1ExpansionVerbs.length].meaning];
  const offset = index % definitions.length;
  a1ExpansionExercises.push(
    { id: formId, lessonId, verbId: infinitive, level: 'A1', difficulty: 2, type: 'input', skill: 'grammatica', topic: `Werkwoord: ${infinitive}`,
      prompt: `${prompt} (${infinitive})`, answer, explanation: `De juiste vorm is ${answer}. ${prompt.replace('___', answer)} Bekijk de volledige vervoeging bij ${infinitive}.` },
    { id: meaningId, lessonId, verbId: infinitive, level: 'A1', difficulty: 2, type: 'choice', skill: 'woordenschat', topic: `Werkwoord: ${infinitive}`,
      prompt: `Wat betekent ${infinitive} in deze zin: “${verb.examples[0]}”?`, answer: verb.meaning,
      options: definitions.slice(offset).concat(definitions.slice(0, offset)), explanation: verb.usage },
  );
  for (const lesson of lessons) lesson.exerciseIds.push(formId, meaningId);
}

// Each lesson word has a reachable meaning exercise and explicit source-page links.
for (const lesson of a1ExpansionLessons) {
 const definitions = [...new Set(lesson.terms.map(term => findLexiconEntry(term)?.definition).filter(Boolean))];
 for (const [index, term] of lesson.terms.entries()) {
  const entry = findLexiconEntry(term);
  if (!entry) throw new Error(`Missing source word: ${term}`);
  const options = [entry.definition, ...definitions.filter(d => d !== entry.definition).slice(0, 2)];
  const offset = index % options.length;
  const id = `a1-source-word-${lesson.id}-${index + 1}`;
  a1ExpansionExercises.push({id, lessonId:lesson.id, sourcePageIds:lesson.sourcePages.filter(p=>p.terms.includes(term)).map(p=>p.id), term, level:'A1',difficulty:2,type:'choice',skill:'woordenschat',topic:lesson.title,prompt:`Wat betekent “${term}” in deze zin: “${entry.example}”?`,answer:entry.definition,options:options.slice(offset).concat(options.slice(0,offset)),explanation:`${entry.definition} Voorbeeld: ${entry.example}`});
  lesson.exerciseIds.push(id);
 }
}
