export const advancedGrammarTopics = [
  {
    id: 'bijwoorden-overzicht', level: 'A1', title: 'Bijwoorden: tijd, plaats, frequentie en graad',
    summary: 'Bijwoorden vertellen wanneer, waar, hoe vaak, in welke mate of met welke houding iets gebeurt.',
    rule: 'Een bijwoord verandert niet van vorm. Het staat vaak in het middenveld of op plek 1 met inversie.',
    examples: ['Ik werk vandaag thuis.', 'Soms ga ik met de trein.', 'Waarschijnlijk komt zij later.', 'Daarom blijf ik thuis.'],
    connections: ['Woordvolgorde', 'Inversie', 'Signaalwoorden', 'Tijd en frequentie'],
  },
  {
    id: 'signaalwoorden-logische-relaties', level: 'B1', title: 'Signaalwoorden per logische relatie',
    summary: 'Verbinders komen uit verschillende woordsoorten, maar drukken dezelfde relaties uit: oorzaak, gevolg, doel, voorwaarde, contrast en tijd.',
    rule: 'Kijk eerst naar de betekenisrelatie en daarna naar het zinstype: hoofdzin, bijzin, voorzetselgroep of verbindend bijwoord.',
    examples: ['Ik blijf thuis omdat ik ziek ben.', 'Ik ben ziek; daarom blijf ik thuis.', 'Vanwege mijn ziekte blijf ik thuis.', 'Ik praat langzaam, zodat iedereen mij begrijpt.'],
    connections: ['Voegwoorden', 'Voorzetsels', 'Bijwoorden', 'Woordvolgorde'],
  },
  {
    id: 'gevolg-zodat-waardoor', level: 'B1', title: 'Gevolg: zodat, waardoor, daardoor en dus',
    summary: 'Deze woorden drukken allemaal gevolg uit, maar verbinden de informatie op een andere manier.',
    rule: 'zodat + bijzin; waardoor + betrekkelijke bijzin over de vorige situatie; daardoor/dus + hoofdzin met mogelijke inversie.',
    examples: ['Ik spreek langzaam, zodat iedereen mij begrijpt.', 'De weg was glad, waardoor er een ongeluk ontstond.', 'De weg was glad. Daardoor ontstond er een ongeluk.', 'De weg was glad, dus reed ik voorzichtig.'],
    connections: ['Bijzin', 'Inversie', 'Oorzaak en gevolg', 'Doel'],
  },
  {
    id: 'oorzaak-doordat-omdat-vanwege', level: 'B1', title: 'Oorzaak: omdat, doordat, want en vanwege',
    summary: 'Omdat geeft vaak een reden, doordat benadrukt een feitelijke oorzaak, want verbindt twee hoofdzinnen en vanwege leidt een naamwoordgroep in.',
    rule: 'omdat/doordat + werkwoord achteraan; want + normale hoofdzin; vanwege + zelfstandig naamwoord.',
    examples: ['Ik vertrek omdat ik moe ben.', 'De trein stopte doordat er een storing was.', 'Ik vertrek, want ik ben moe.', 'Vanwege de storing rijdt de trein niet.'],
    connections: ['Reden', 'Oorzaak', 'Bijzin', 'Voorzetselgroep'],
  },
  {
    id: 'voorwaarden-als-mits-tenzij', level: 'B1', title: 'Voorwaarden: als, wanneer, mits en tenzij',
    summary: 'Voorwaardelijke zinnen tonen wat nodig is voordat iets anders kan gebeuren.',
    rule: 'als/wanneer/mits/tenzij + bijzin. Mits betekent “alleen als”; tenzij betekent “behalve als”.',
    examples: ['Als het regent, blijven we thuis.', 'Je kunt deelnemen, mits je je inschrijft.', 'We gaan wandelen, tenzij het hard regent.'],
    connections: ['Bijzin', 'Zou-constructie', 'Voorwaarde', 'Uitzondering'],
  },
  {
    id: 'hypothetische-voorwaarden', level: 'B2', title: 'Hypothetische en irreële voorwaarden',
    summary: 'Met zou, had en was beschrijf je denkbeeldige situaties, gemiste kansen en gevolgen die niet werkelijk zijn gebeurd.',
    rule: 'Als + verleden tijd, zou + infinitief; als + plusquamperfectum, zou + voltooid infinitief.',
    examples: ['Als ik meer tijd had, zou ik vaker lezen.', 'Als ik dat had geweten, zou ik eerder zijn gekomen.', 'Zonder jouw hulp was het niet gelukt.'],
    connections: ['Zou', 'Plusquamperfectum', 'Voorwaarde', 'Verleden tijd'],
  },
  {
    id: 'voorzetsels-als-verbinding', level: 'B1', title: 'Voorzetsels als logische verbinding',
    summary: 'Voorzetselgroepen kunnen oorzaak, contrast, doel, middel, uitzondering en voorwaarde uitdrukken.',
    rule: 'voorzetsel + naamwoordgroep: vanwege de regen, ondanks het bezwaar, dankzij de hulp, behalve op zondag.',
    examples: ['Vanwege de storm blijven we thuis.', 'Ondanks de kritiek gaat het plan door.', 'Dankzij haar uitleg begrijp ik het.', 'Behalve op zondag is de winkel open.'],
    connections: ['Voorzetsels', 'Signaalwoorden', 'Nominalisatie', 'Contrast'],
  },
  {
    id: 'nuancerende-bijwoorden', level: 'B2', title: 'Nuancerende bijwoorden en houding',
    summary: 'Woorden als waarschijnlijk, kennelijk, vermoedelijk, nauwelijks en betrekkelijk maken een uitspraak preciezer en minder absoluut.',
    rule: 'Kies een bijwoord dat de zekerheid, intensiteit of houding van de schrijver precies weergeeft.',
    examples: ['De maatregel is waarschijnlijk effectief.', 'De resultaten zijn nauwelijks vergelijkbaar.', 'Kennelijk was de informatie onvolledig.', 'Het verschil is betrekkelijk klein.'],
    connections: ['Register', 'Argumentatie', 'Voorbehoud', 'B2-schrijven'],
  },
];

export const logicRelationGroups = [
  {
    id: 'oorzaak', title: 'Oorzaak en reden',
    items: [
      ['omdat', 'onderschikkend voegwoord', 'reden of verklaring', 'Ik vertrek omdat ik moe ben.'],
      ['doordat', 'onderschikkend voegwoord', 'feitelijke oorzaak of proces', 'De weg is glad doordat het heeft gevroren.'],
      ['want', 'nevenschikkend voegwoord', 'reden in een tweede hoofdzin', 'Ik vertrek, want ik ben moe.'],
      ['aangezien', 'onderschikkend voegwoord', 'formele of bekende reden', 'Aangezien de gegevens ontbreken, stellen we de beslissing uit.'],
      ['vanwege', 'voorzetsel', 'oorzaak met een naamwoordgroep', 'Vanwege de storm rijden er minder treinen.'],
      ['dankzij', 'voorzetsel', 'positieve oorzaak', 'Dankzij haar hulp was het werk op tijd klaar.'],
    ],
  },
  {
    id: 'gevolg', title: 'Gevolg en resultaat',
    items: [
      ['dus', 'nevenschikkend voegwoord / bijwoord', 'directe conclusie of gevolg', 'Het regent, dus neem ik een paraplu mee.'],
      ['daarom', 'zinsverbindend bijwoord', 'reden voor een handeling', 'Het regent. Daarom blijf ik thuis.'],
      ['daardoor', 'zinsverbindend bijwoord', 'gevolg van een eerdere situatie', 'De weg was glad. Daardoor ontstond er vertraging.'],
      ['waardoor', 'betrekkelijk bijwoord', 'verbindt een gevolg met de vorige situatie', 'De weg was glad, waardoor er vertraging ontstond.'],
      ['zodat', 'onderschikkend voegwoord', 'bedoeld of werkelijk resultaat', 'Ik spreek langzaam, zodat iedereen mij begrijpt.'],
      ['met als gevolg dat', 'vaste verbinding', 'formeel gevolg', 'De kosten stegen, met als gevolg dat het project werd uitgesteld.'],
    ],
  },
  {
    id: 'doel', title: 'Doel en bedoeling',
    items: [
      ['om ... te', 'infinitiefconstructie', 'doel met hetzelfde onderwerp', 'Ik oefen om beter Nederlands te spreken.'],
      ['zodat', 'onderschikkend voegwoord', 'doel met mogelijk ander onderwerp', 'Ik schrijf het op, zodat jij het niet vergeet.'],
      ['opdat', 'onderschikkend voegwoord', 'formeel doel', 'De regels worden verduidelijkt, opdat iedereen ze correct kan toepassen.'],
      ['met het doel om', 'vaste verbinding', 'expliciete formele bedoeling', 'De campagne start met het doel om energie te besparen.'],
    ],
  },
  {
    id: 'voorwaarde', title: 'Voorwaarde en uitzondering',
    items: [
      ['als', 'onderschikkend voegwoord', 'gewone voorwaarde', 'Als het regent, blijven we thuis.'],
      ['mits', 'onderschikkend voegwoord', 'alleen onder deze voorwaarde', 'Je kunt deelnemen, mits je je inschrijft.'],
      ['tenzij', 'onderschikkend voegwoord', 'behalve als', 'We gaan wandelen, tenzij het hard regent.'],
      ['indien', 'onderschikkend voegwoord', 'formele voorwaarde', 'Indien nodig nemen wij contact met u op.'],
      ['op voorwaarde dat', 'vaste verbinding', 'expliciete voorwaarde', 'U krijgt toegang op voorwaarde dat u zich identificeert.'],
      ['voor het geval dat', 'vaste verbinding', 'voorzorg bij een mogelijke situatie', 'Neem een jas mee voor het geval dat het koud wordt.'],
    ],
  },
  {
    id: 'contrast', title: 'Contrast en concessie',
    items: [
      ['maar', 'nevenschikkend voegwoord', 'eenvoudig contrast', 'Het plan is duur, maar het is effectief.'],
      ['hoewel', 'onderschikkend voegwoord', 'concessie met bijzin', 'Hoewel het plan duur is, is het effectief.'],
      ['toch', 'bijwoord', 'onverwacht resultaat', 'Het plan is duur. Toch voeren we het uit.'],
      ['desondanks', 'zinsverbindend bijwoord', 'formeel onverwacht resultaat', 'De bezwaren zijn groot. Desondanks gaat het plan door.'],
      ['ondanks', 'voorzetsel', 'contrast met naamwoordgroep', 'Ondanks de bezwaren gaat het plan door.'],
      ['daarentegen', 'zinsverbindend bijwoord', 'duidelijk tegengestelde vergelijking', 'De eerste optie is goedkoop. De tweede is daarentegen duurzamer.'],
    ],
  },
  {
    id: 'tijd', title: 'Tijd en volgorde',
    items: [
      ['voordat', 'onderschikkend voegwoord', 'eerste handeling ligt later dan de bijzin', 'Bel mij voordat je vertrekt.'],
      ['nadat', 'onderschikkend voegwoord', 'eerste handeling ligt na de bijzin', 'Nadat ik had gegeten, ging ik wandelen.'],
      ['terwijl', 'onderschikkend voegwoord', 'twee gelijktijdige handelingen', 'Ik luister terwijl ik kook.'],
      ['zodra', 'onderschikkend voegwoord', 'direct na een moment', 'Ik bel je zodra ik aankom.'],
      ['totdat', 'onderschikkend voegwoord', 'tot een eindmoment', 'We wachten totdat de trein vertrekt.'],
      ['sinds', 'voegwoord / voorzetsel', 'vanaf een moment tot nu', 'Sinds ik hier woon, fiets ik vaker.'],
    ],
  },
];

export const adverbGroups = [
  ['tijd', ['nu', 'vandaag', 'gisteren', 'straks', 'binnenkort', 'inmiddels', 'uiteindelijk']],
  ['frequentie', ['altijd', 'meestal', 'vaak', 'regelmatig', 'soms', 'zelden', 'nooit']],
  ['plaats', ['hier', 'daar', 'ergens', 'nergens', 'overal', 'buiten', 'binnen']],
  ['graad', ['heel', 'erg', 'tamelijk', 'vrij', 'bijzonder', 'nauwelijks', 'volledig']],
  ['houding', ['misschien', 'waarschijnlijk', 'vermoedelijk', 'kennelijk', 'gelukkig', 'helaas', 'blijkbaar']],
  ['verbinding', ['daarom', 'daardoor', 'desondanks', 'bovendien', 'daarnaast', 'vervolgens', 'integendeel']],
];

export const readingArticles = [
  {
    id: 'b1-bibliotheek-buurt', level: 'B1', title: 'Een bibliotheek die meer doet dan boeken uitlenen',
    topic: 'buurt en samenleving', minutes: 8,
    vocabulary: [
      ['de ontmoetingsplek', 'een plaats waar mensen elkaar kunnen ontmoeten'],
      ['laagdrempelig', 'gemakkelijk toegankelijk, zonder veel voorwaarden'],
      ['de taalmaat', 'een vrijwilliger die iemand helpt met taal'],
      ['de voorziening', 'een dienst of plek die mensen nodig hebben'],
    ],
    paragraphs: [
      'In veel Nederlandse steden verandert de rol van de bibliotheek. Vroeger kwamen bezoekers vooral om boeken te lenen of rustig te studeren. Tegenwoordig organiseert de bibliotheek ook taalcafés, digitale spreekuren en activiteiten voor kinderen. Daardoor is de bibliotheek voor veel bewoners een belangrijke ontmoetingsplek geworden.',
      'In de wijk Meerzicht merkte de bibliotheek dat sommige inwoners moeite hadden met digitale formulieren. Zij konden bijvoorbeeld geen afspraak bij de gemeente maken of wisten niet hoe zij een zorgverzekering moesten vergelijken. Daarom begon de bibliotheek een gratis digitaal spreekuur. Vrijwilligers helpen bezoekers stap voor stap, maar nemen de taak niet volledig over.',
      'Ook het wekelijkse taalcafé is populair. Nieuwkomers oefenen er Nederlands met taalmaatjes. De gesprekken gaan over alledaagse onderwerpen, zoals boodschappen, werk en school. De sfeer is bewust informeel, zodat deelnemers niet bang zijn om fouten te maken. Volgens de coördinator leren mensen sneller wanneer zij zich veilig voelen.',
      'Niet iedereen is enthousiast over de nieuwe activiteiten. Sommige bezoekers vinden dat het stiller moet zijn en dat de bibliotheek zich vooral op boeken moet richten. De directie begrijpt die klacht en heeft daarom aparte stille zones ingericht. Tegelijkertijd wil zij de maatschappelijke activiteiten behouden.',
      'De gemeente ondersteunt het project omdat de bibliotheek laagdrempelig is. Mensen hoeven geen ingewikkelde aanvraag te doen en kunnen gewoon binnenlopen. De verwachting is dat steeds meer bibliotheken zulke voorzieningen zullen aanbieden, hoewel boeken en lezen de kern blijven.',
    ],
    questions: [
      { prompt: 'Wat is de hoofdgedachte van het artikel?', options: ['Bibliotheken worden bredere ontmoetings- en hulpplekken.', 'Bibliotheken stoppen met het uitlenen van boeken.', 'Vrijwilligers nemen gemeentelijke taken volledig over.'], answer: 0, evidence: 1, explanation: 'De tekst beschrijft hoe de bibliotheek naast boeken ook taal- en digitale hulp aanbiedt.' },
      { prompt: 'Waarom begon de bibliotheek een digitaal spreekuur?', options: ['Omdat bezoekers digitale formulieren moeilijk vonden.', 'Omdat de gemeente geen afspraken meer maakt.', 'Omdat vrijwilligers betaald werk zochten.'], answer: 0, evidence: 2, explanation: 'In alinea 2 staat dat inwoners moeite hadden met digitale formulieren.' },
      { prompt: 'Welke functie heeft “zodat” in alinea 3?', options: ['Het drukt een doel uit.', 'Het introduceert een tegenstelling.', 'Het noemt een tijdstip.'], answer: 0, evidence: 3, explanation: 'De informele sfeer is bedoeld om deelnemers minder bang voor fouten te maken.' },
      { prompt: 'Hoe reageert de directie op klachten over geluid?', options: ['Ze stopt de activiteiten.', 'Ze maakt afzonderlijke stille zones.', 'Ze vraagt bezoekers thuis te studeren.'], answer: 1, evidence: 4, explanation: 'De directie combineert stille zones met behoud van activiteiten.' },
      { prompt: 'Wat betekent “laagdrempelig” in deze context?', options: ['Makkelijk toegankelijk.', 'Alleen voor leden.', 'Technisch ingewikkeld.'], answer: 0, evidence: 5, explanation: 'Mensen kunnen zonder ingewikkelde aanvraag binnenlopen.' },
      { prompt: 'Is de houding van de auteur vooral positief, negatief of genuanceerd?', options: ['Genuanceerd: voordelen én bezwaren komen aan bod.', 'Volledig negatief.', 'Zonder enige mening of afweging.'], answer: 0, evidence: 4, explanation: 'De tekst noemt maatschappelijke voordelen en de klacht over rust.' },
    ],
  },
  {
    id: 'b1-reizen-trein', level: 'B1', title: 'Met de nachttrein op vakantie',
    topic: 'reizen en duurzaamheid', minutes: 8,
    vocabulary: [['de nachttrein', 'een trein die in de nacht rijdt'], ['de overstap', 'het moment waarop je van trein verandert'], ['uitstoot', 'gassen die in de lucht komen'], ['comfortabel', 'prettig en gemakkelijk']],
    paragraphs: [
      'Steeds meer reizigers kiezen voor een nachttrein naar een Europese stad. Zij stappen ’s avonds in en komen de volgende ochtend op hun bestemming aan. Voor sommige mensen is dat aantrekkelijker dan vliegen, omdat zij geen tijd verliezen aan een reis naar een ver vliegveld.',
      'Een reis per nachttrein is niet altijd goedkoop. Een eigen slaapcabine kan meer kosten dan een vliegticket. Wie vroeg boekt of een stoel deelt, betaalt meestal minder. Bovendien bespaart de reiziger soms een hotelnacht, waardoor het prijsverschil kleiner wordt.',
      'De trein heeft ook nadelen. Er kunnen vertragingen zijn en bij sommige routes moet je midden in de nacht overstappen. Niet iedereen slaapt goed door het geluid en de beweging. Reizigers adviseren daarom om oordopjes, water en comfortabele kleding mee te nemen.',
      'Volgens milieuorganisaties veroorzaakt reizen per trein meestal minder uitstoot dan vliegen. Toch hangt de precieze winst af van de route, de bezetting en de manier waarop elektriciteit wordt opgewekt. Een volle trein is gunstiger dan een bijna lege trein.',
      'De belangstelling groeit, maar het netwerk is nog beperkt. Spoorbedrijven willen nieuwe verbindingen openen, mits landen afspraken maken over dienstregelingen en tickets. Reizigers hopen vooral op één duidelijk boekingssysteem voor internationale reizen.',
    ],
    questions: [
      { prompt: 'Waarom vinden sommige reizigers de nachttrein aantrekkelijk?', options: ['Ze komen vaak direct in het centrum aan en reizen terwijl ze slapen.', 'Een slaapcabine is altijd goedkoper.', 'Nachttreinen hebben nooit vertraging.'], answer: 0, evidence: 1, explanation: 'De tekst noemt reizen tijdens de nacht en minder tijdverlies rond vliegvelden.' },
      { prompt: 'Waardoor kan het prijsverschil met vliegen kleiner worden?', options: ['Omdat je soms een hotelnacht bespaart.', 'Omdat alle treintickets gratis zijn.', 'Omdat een overstap geld oplevert.'], answer: 0, evidence: 2, explanation: 'Het uitgespaarde hotel kan de hogere ticketprijs compenseren.' },
      { prompt: 'Welke tip past bij de nadelen in alinea 3?', options: ['Neem oordopjes en comfortabele kleding mee.', 'Boek altijd een vlucht terug.', 'Stap midden in de nacht uit zonder bagage.'], answer: 0, evidence: 3, explanation: 'Deze spullen helpen bij geluid, beweging en comfort.' },
      { prompt: 'Welke nuance noemt alinea 4?', options: ['De milieuwinst hangt ook van route en bezetting af.', 'Treinen veroorzaken helemaal geen uitstoot.', 'Vliegen is altijd duurzamer.'], answer: 0, evidence: 4, explanation: 'De tekst vermijdt een absolute uitspraak en noemt meerdere factoren.' },
      { prompt: 'Wat betekent “mits” in de laatste alinea?', options: ['Alleen als.', 'Hoewel.', 'Nadat.'], answer: 0, evidence: 5, explanation: 'Nieuwe verbindingen zijn mogelijk onder de voorwaarde dat landen afspraken maken.' },
      { prompt: 'Wat willen reizigers vooral verbeteren?', options: ['Eén duidelijk internationaal boekingssysteem.', 'Meer vliegvelden naast stations.', 'Minder informatie over routes.'], answer: 0, evidence: 5, explanation: 'Dat staat expliciet in de slotzin.' },
    ],
  },
  {
    id: 'b1-klacht-huurwoning', level: 'B1', title: 'Wanneer een reparatie te lang duurt',
    topic: 'wonen en klachten', minutes: 7,
    vocabulary: [['de verhuurder', 'de eigenaar die een woning verhuurt'], ['de lekkage', 'water dat ongewenst door een dak of leiding komt'], ['schriftelijk', 'in een brief of e-mail'], ['redelijke termijn', 'een termijn die in de situatie acceptabel is']],
    paragraphs: [
      'Mila huurt sinds twee jaar een appartement. Na een zware regenbui ontdekte zij een lekkage in de slaapkamer. Zij belde dezelfde dag de verhuurder en stuurde foto’s van de natte muur. De verhuurder beloofde dat een monteur binnen een week zou komen.',
      'Na tien dagen had Mila nog niets gehoord. Daarom stuurde zij een duidelijke e-mail. Ze beschreef wanneer het probleem was begonnen, welke schade zichtbaar was en wat de verhuurder eerder had beloofd. Ook vroeg ze om een concrete datum voor de reparatie.',
      'Een bewonersorganisatie adviseert huurders om problemen altijd schriftelijk te melden. Een telefoongesprek is nuttig, maar later is moeilijk te bewijzen wat precies is afgesproken. Bewaar daarom e-mails, foto’s en eventuele rekeningen.',
      'Een klacht werkt beter wanneer de toon zakelijk blijft. Zinnen als “U doet nooit iets” maken een oplossing vaak moeilijker. Het is effectiever om het probleem, het gewenste resultaat en een redelijke termijn te noemen. Bijvoorbeeld: “Ik verzoek u de lekkage binnen veertien dagen te laten onderzoeken.”',
      'Uiteindelijk kwam de monteur drie dagen na Mila’s tweede e-mail. De reparatie duurde maar een uur. Mila was opgelucht, maar vroeg de verhuurder ook om de beschadigde muur opnieuw te schilderen.',
    ],
    questions: [
      { prompt: 'Wat deed Mila direct na de ontdekking?', options: ['Ze belde en stuurde foto’s.', 'Ze verhuisde meteen.', 'Ze schilderde de muur zelf.'], answer: 0, evidence: 1, explanation: 'Ze meldde het probleem telefonisch en visueel.' },
      { prompt: 'Waarom stuurde Mila een tweede bericht?', options: ['Omdat de beloofde actie uitbleef.', 'Omdat de monteur te vroeg kwam.', 'Omdat ze geen lekkage meer had.'], answer: 0, evidence: 2, explanation: 'Na tien dagen had ze nog niets gehoord.' },
      { prompt: 'Waarom is schriftelijk melden belangrijk?', options: ['Je kunt later aantonen wat is afgesproken.', 'Een e-mail repareert de schade.', 'Telefoneren is wettelijk verboden.'], answer: 0, evidence: 3, explanation: 'Schriftelijke communicatie vormt een duidelijk dossier.' },
      { prompt: 'Welke formulering is het meest effectief?', options: ['Ik verzoek u binnen veertien dagen actie te nemen.', 'U doet echt nooit iets!', 'Misschien kunt u ooit eens kijken.'], answer: 0, evidence: 4, explanation: 'De zin is zakelijk, concreet en bevat een termijn.' },
      { prompt: 'Wat gebeurde uiteindelijk?', options: ['De lekkage werd onderzocht en gerepareerd.', 'Mila kocht het appartement.', 'De bewonersorganisatie schilderde de muur.'], answer: 0, evidence: 5, explanation: 'De monteur kwam en de reparatie duurde een uur.' },
      { prompt: 'Welke drie onderdelen horen volgens de tekst in een goede klacht?', options: ['Probleem, gewenst resultaat en redelijke termijn.', 'Boosheid, dreiging en grap.', 'Alleen een foto.'], answer: 0, evidence: 4, explanation: 'Deze drie onderdelen worden expliciet genoemd.' },
    ],
  },
  {
    id: 'b1-dierenopvang', level: 'B1', title: 'Vrijwilligers in de dierenopvang',
    topic: 'dieren en vrijwilligerswerk', minutes: 7,
    vocabulary: [['de opvang', 'een plaats waar dieren tijdelijk worden verzorgd'], ['verwaarloosd', 'niet goed verzorgd'], ['de dienst', 'een afgesproken periode waarin iemand werkt'], ['adopteren', 'een dier blijvend in huis nemen']],
    paragraphs: [
      'Dierenopvang De Brug zoekt nieuwe vrijwilligers. In de opvang verblijven honden, katten en kleine huisdieren die zijn gevonden of afgestaan. Sommige dieren zijn ziek of verwaarloosd en hebben extra aandacht nodig.',
      'Vrijwilligers maken verblijven schoon, geven voer en wandelen met honden. Zij mogen niet direct alle taken uitvoeren. Eerst volgen zij een korte training over veiligheid, dierengedrag en hygiëne. Daarna werken zij een paar diensten samen met een ervaren medewerker.',
      'Veel mensen melden zich aan omdat zij van dieren houden. Toch is enthousiasme alleen niet voldoende. De opvang vraagt vrijwilligers om minstens één vaste ochtend of middag per week beschikbaar te zijn. Dieren hebben namelijk baat bij rust en een voorspelbare routine.',
      'Het werk kan emotioneel zijn. Niet elk dier vindt snel een nieuw huis en soms moet een ziek dier lang worden behandeld. Daarom bespreekt het team moeilijke situaties samen. Vrijwilligers kunnen altijd hulp vragen wanneer een ervaring hen raakt.',
      'Volgens de coördinator levert het werk veel op. Vrijwilligers leren nauwkeurig observeren, samenwerken en duidelijk communiceren. Bovendien zien zij hoe een angstig dier langzaam vertrouwen krijgt en uiteindelijk wordt geadopteerd.',
    ],
    questions: [
      { prompt: 'Waarom hebben sommige dieren extra aandacht nodig?', options: ['Ze zijn ziek of slecht verzorgd geweest.', 'Ze willen allemaal trainen.', 'Ze wonen al bij een gezin.'], answer: 0, evidence: 1, explanation: 'De tekst noemt ziekte en verwaarlozing.' },
      { prompt: 'Wat gebeurt voordat een vrijwilliger zelfstandig werkt?', options: ['Hij of zij volgt training en werkt mee met een ervaren medewerker.', 'Hij of zij adopteert een dier.', 'Hij of zij betaalt alle behandelingen.'], answer: 0, evidence: 2, explanation: 'Training en begeleiding gaan vooraf aan zelfstandige taken.' },
      { prompt: 'Waarom vraagt de opvang een vaste beschikbaarheid?', options: ['Dieren profiteren van rust en routine.', 'De opvang is alleen in de ochtend open.', 'Vrijwilligers mogen geen vakantie nemen.'], answer: 0, evidence: 3, explanation: 'Een voorspelbare routine is goed voor de dieren.' },
      { prompt: 'Wat betekent “het werk kan emotioneel zijn”?', options: ['Sommige situaties kunnen verdrietig of zwaar zijn.', 'Het werk bestaat alleen uit praten.', 'Iedereen wordt altijd boos.'], answer: 0, evidence: 4, explanation: 'Zieke dieren en lang wachten op adoptie kunnen mensen raken.' },
      { prompt: 'Welke vaardigheden leren vrijwilligers?', options: ['Observeren, samenwerken en communiceren.', 'Vliegen en programmeren.', 'Alleen schoonmaken.'], answer: 0, evidence: 5, explanation: 'Deze drie vaardigheden staan in de laatste alinea.' },
      { prompt: 'Wat is de toon van het artikel?', options: ['Realistisch en positief.', 'Sarcastisch en afwijzend.', 'Volledig juridisch.'], answer: 0, evidence: 4, explanation: 'De tekst noemt zowel emotionele moeilijkheden als waardevolle opbrengsten.' },
    ],
  },
  {
    id: 'b2-ai-oordeel', level: 'B2', title: 'Kunstmatige intelligentie en professioneel oordeel',
    topic: 'technologie en werk', minutes: 13,
    vocabulary: [['het professionele oordeel', 'een deskundige afweging op basis van kennis en context'], ['de vertekening', 'een systematische afwijking in gegevens of beoordeling'], ['navolgbaar', 'zo duidelijk dat anderen de redenering kunnen volgen'], ['de eindverantwoordelijkheid', 'de uiteindelijke plicht om voor een besluit in te staan']],
    paragraphs: [
      'Organisaties gebruiken kunstmatige intelligentie steeds vaker om grote hoeveelheden informatie te analyseren. Een systeem kan bijvoorbeeld patronen herkennen in medische beelden, verdachte transacties markeren of voorspellen welke onderdelen van een machine onderhoud nodig hebben. Zulke toepassingen kunnen tijd besparen en menselijke aandacht richten op uitzonderlijke gevallen.',
      'De efficiëntiewinst leidt soms tot de verwachting dat een algoritme uiteindelijk zelfstandig betere beslissingen zal nemen dan een professional. Die conclusie is echter te eenvoudig. Een model verwerkt gegevens volgens de doelen en voorbeelden die mensen hebben geselecteerd. Wanneer historische gegevens een maatschappelijke vertekening bevatten, kan het systeem die vertekening reproduceren of zelfs versterken.',
      'Bovendien is een voorspelling niet hetzelfde als een besluit. Een model kan aangeven dat een situatie statistisch op eerdere gevallen lijkt, maar begrijpt niet automatisch welke norm, uitzondering of menselijke waarde in een concrete context doorslaggevend is. Juist daar blijft professioneel oordeel noodzakelijk.',
      'Dat betekent niet dat professionals een algoritmisch advies zonder meer moeten wantrouwen. Het advies kan relevante patronen zichtbaar maken die een mens over het hoofd ziet. De kwaliteit neemt vooral toe wanneer mens en systeem elkaar corrigeren: het systeem biedt schaal en consistentie, terwijl de professional context en verantwoordelijkheid toevoegt.',
      'Voor zo’n samenwerking is transparantie nodig. Niet elk technisch detail hoeft voor iedere gebruiker zichtbaar te zijn, maar wel moet navolgbaar zijn welke gegevens zijn gebruikt, waarvoor het systeem geschikt is en wanneer het onzeker wordt. Zonder die informatie kan een professional het advies nauwelijks kritisch beoordelen.',
      'Ook de organisatie van verantwoordelijkheid verdient aandacht. Wanneer een medewerker formeel de eindverantwoordelijkheid draagt, maar in de praktijk geen tijd, bevoegdheid of informatie heeft om een automatisch advies te controleren, is die verantwoordelijkheid grotendeels symbolisch. Een verantwoord systeem vereist dus niet alleen goede software, maar ook passende werkprocessen.',
      'De belangrijkste vraag is daarom niet of mens of machine “beter” is. Zinvoller is te onderzoeken welke taken geautomatiseerd kunnen worden, waar menselijke interpretatie nodig blijft en hoe afwijkende gevallen tijdig worden herkend. Kunstmatige intelligentie is dan geen vervanger van professioneel oordeel, maar een instrument dat de kwaliteit ervan kan ondersteunen—mits de grenzen expliciet worden gemaakt.',
    ],
    questions: [
      { prompt: 'Wat is de centrale stelling van het artikel?', options: ['AI kan professioneel oordeel ondersteunen, maar niet zonder context, transparantie en verantwoordelijkheid vervangen.', 'AI moet in alle organisaties verboden worden.', 'Professionals herkennen nooit patronen in gegevens.'], answer: 0, evidence: 7, explanation: 'De slotparagraaf vat de genuanceerde positie samen.' },
      { prompt: 'Waarom kan een model maatschappelijke vertekening versterken?', options: ['Omdat het leert van geselecteerde historische gegevens.', 'Omdat het geen grote hoeveelheden informatie kan verwerken.', 'Omdat professionals altijd neutraal zijn.'], answer: 0, evidence: 2, explanation: 'Historische patronen en keuzes van mensen beïnvloeden het model.' },
      { prompt: 'Welke functie heeft alinea 3?', options: ['Ze onderscheidt een statistische voorspelling van een normatief besluit.', 'Ze geeft een technisch installatieplan.', 'Ze ontkent dat modellen patronen herkennen.'], answer: 0, evidence: 3, explanation: 'De alinea legt uit waarom context en waarden niet automatisch uit een voorspelling volgen.' },
      { prompt: 'Wat bedoelt de auteur met “verantwoordelijkheid is grotendeels symbolisch”?', options: ['Iemand wordt verantwoordelijk genoemd, maar kan het besluit feitelijk niet controleren.', 'Verantwoordelijkheid bestaat alleen in symbolen.', 'De medewerker gebruikt te veel informatie.'], answer: 0, evidence: 6, explanation: 'Zonder tijd, bevoegdheid en informatie is echte controle onmogelijk.' },
      { prompt: 'Hoe verhouden mens en systeem zich volgens alinea 4?', options: ['Ze hebben verschillende sterke punten en kunnen elkaar corrigeren.', 'Ze zijn volledig uitwisselbaar.', 'Het systeem moet altijd het laatste woord hebben.'], answer: 0, evidence: 4, explanation: 'Schaal en consistentie worden gecombineerd met context en verantwoordelijkheid.' },
      { prompt: 'Welke voorwaarde drukt “mits” in de laatste zin uit?', options: ['AI ondersteunt kwaliteit alleen als grenzen expliciet zijn.', 'Grenzen worden vanzelf duidelijk.', 'AI ondersteunt kwaliteit ondanks elke beperking.'], answer: 0, evidence: 7, explanation: 'Mits betekent “op voorwaarde dat”.' },
      { prompt: 'Welke toon gebruikt de auteur?', options: ['Analytisch en genuanceerd.', 'Enthousiast zonder voorbehoud.', 'Afwijzend zonder argumenten.'], answer: 0, evidence: 4, explanation: 'Voordelen, risico’s en voorwaarden worden tegen elkaar afgewogen.' },
      { prompt: 'Welke titel past ook goed?', options: ['Van automatische voorspelling naar verantwoord besluit', 'Waarom gegevens altijd objectief zijn', 'De volledige vervanging van professionals'], answer: 0, evidence: 3, explanation: 'De tekst draait om de stap van voorspelling naar verantwoord menselijk besluit.' },
    ],
  },
  {
    id: 'b2-woning-dichtheid', level: 'B2', title: 'Dichter bouwen zonder leefkwaliteit te verliezen',
    topic: 'woningmarkt en stedelijke ontwikkeling', minutes: 13,
    vocabulary: [['verdichting', 'meer woningen of functies binnen hetzelfde stedelijke gebied'], ['de leefkwaliteit', 'de mate waarin een omgeving prettig en gezond is'], ['de draagkracht', 'wat een gebied of systeem aankan'], ['functiemenging', 'wonen, werken en voorzieningen in hetzelfde gebied combineren']],
    paragraphs: [
      'Veel steden willen meer woningen bouwen binnen bestaande stadsgrenzen. Verdichting kan voorkomen dat open landschap wordt volgebouwd en maakt openbaar vervoer rendabeler. Tegelijkertijd vrezen bewoners dat extra woningen leiden tot drukte, schaduw, verkeersproblemen en verlies van groen.',
      'Het debat wordt vaak voorgesteld als een keuze tussen woningbouw en leefkwaliteit. Die tegenstelling is misleidend, omdat het ontwerp bepaalt hoe dichtheid wordt ervaren. Een hoge woontoren zonder voorzieningen kan een gebied belasten, terwijl een compact bouwblok met een binnentuin, winkels en veilige fietsroutes juist levendig kan zijn.',
      'Verdichting vraagt daarom om meer dan het tellen van woningen. Scholen, huisartsen, speelruimte en openbaar vervoer moeten meegroeien. Wanneer deze voorzieningen achterblijven, neemt de druk op de buurt toe, waardoor bewoners verdichting vooral als verlies ervaren.',
      'Ook de verdeling van baten en lasten speelt een rol. Nieuwe bewoners profiteren van een centrale locatie, projectontwikkelaars van bouwmogelijkheden en de stad van extra inkomsten. Bestaande bewoners ervaren daarentegen jarenlang bouwoverlast. Een geloofwaardig plan maakt zichtbaar wie welke lasten draagt en hoe die worden gecompenseerd.',
      'Sommige gemeenten experimenteren met participatie. Bewoners kunnen vroeg reageren op verschillende ontwerpscenario’s. Dat betekent niet dat iedereen een vetorecht krijgt. Wel kunnen lokale zorgen leiden tot aanpassingen, bijvoorbeeld meer bomen, een lagere parkeernorm of een andere plaatsing van gebouwen.',
      'Critici wijzen erop dat participatie projecten vertraagt. Dat risico bestaat, vooral wanneer pas laat om reacties wordt gevraagd. Vroege participatie kan juist tijd besparen doordat conflicten eerder zichtbaar worden. Bovendien ontstaat meer begrip wanneer bestuurders duidelijk uitleggen welke keuzes nog openstaan en welke randvoorwaarden al vastliggen.',
      'Dichter bouwen is dus geen zelfstandig doel, maar een middel om wonen, bereikbaarheid en ruimtegebruik te combineren. Het succes hangt af van ontwerpkwaliteit, voorzieningen, eerlijke verdeling en een transparant proces. Zonder die voorwaarden kan verdichting de woningvoorraad vergroten, maar tegelijkertijd de stad minder leefbaar maken.',
    ],
    questions: [
      { prompt: 'Welke tegenstelling noemt de auteur misleidend?', options: ['Woningbouw tegenover leefkwaliteit.', 'Fietsen tegenover lopen.', 'Scholen tegenover huisartsen.'], answer: 0, evidence: 2, explanation: 'Volgens de auteur kan goed ontwerp beide doelen combineren.' },
      { prompt: 'Waardoor ervaren bewoners verdichting vooral als verlies?', options: ['Wanneer voorzieningen niet meegroeien.', 'Wanneer er veilige fietsroutes zijn.', 'Wanneer gebouwen een binnentuin hebben.'], answer: 0, evidence: 3, explanation: 'Achterblijvende voorzieningen vergroten de druk op de buurt.' },
      { prompt: 'Wat betekent “baten en lasten” in alinea 4?', options: ['Voordelen en nadelen die over groepen worden verdeeld.', 'Belastingen en facturen.', 'Alleen de bouwkosten.'], answer: 0, evidence: 4, explanation: 'De alinea vergelijkt wie profiteert en wie overlast ervaart.' },
      { prompt: 'Waarom kan vroege participatie tijd besparen?', options: ['Conflicten worden eerder zichtbaar.', 'Bewoners krijgen altijd hun zin.', 'Er hoeven geen ontwerpen te worden gemaakt.'], answer: 0, evidence: 6, explanation: 'Vroege signalering voorkomt dat problemen pas laat escaleren.' },
      { prompt: 'Welke rol geeft de auteur aan participatie?', options: ['Lokale kennis kan het ontwerp verbeteren zonder volledig vetorecht.', 'Participatie moet elk project stoppen.', 'Alle besluiten worden door ontwikkelaars genomen.'], answer: 0, evidence: 5, explanation: 'Bewoners kunnen zorgen en aanpassingen inbrengen, maar beslissen niet alleen.' },
      { prompt: 'Wat is de conclusie?', options: ['Verdichting werkt alleen goed met kwaliteit, voorzieningen, eerlijkheid en transparantie.', 'Meer woningen maken een stad automatisch leefbaar.', 'Openbaar vervoer is onbelangrijk.'], answer: 0, evidence: 7, explanation: 'De laatste alinea noemt de vier voorwaarden.' },
      { prompt: 'Welke functie heeft “daarentegen” in alinea 4?', options: ['Het contrasteert de positie van bestaande bewoners met die van andere groepen.', 'Het geeft een oorzaak.', 'Het introduceert een tijdstip.'], answer: 0, evidence: 4, explanation: 'Daarentegen markeert een tegenstelling.' },
      { prompt: 'Welke aanname bestrijdt de auteur impliciet?', options: ['Dat het aantal woningen alleen voldoende is om een project te beoordelen.', 'Dat steden woningen nodig hebben.', 'Dat voorzieningen ruimte innemen.'], answer: 0, evidence: 3, explanation: 'De auteur benadrukt dat ook voorzieningen, ontwerp en verdeling meetellen.' },
    ],
  },
  {
    id: 'b2-voeding-keuze', level: 'B2', title: 'Waarom duurzame keuzes in de supermarkt niet eenvoudig zijn',
    topic: 'voeding en consumentengedrag', minutes: 12,
    vocabulary: [['de keurmerk', 'een herkenbaar teken dat aan bepaalde voorwaarden is voldaan'], ['de keten', 'alle stappen van productie tot verkoop'], ['de afweging', 'het vergelijken van verschillende belangen'], ['de voedselverspilling', 'voedsel dat wordt weggegooid terwijl het nog gebruikt kon worden']],
    paragraphs: [
      'Consumenten krijgen vaak het advies om duurzamer te eten. In de supermarkt blijkt dat minder eenvoudig dan het klinkt. Producten dragen verschillende keurmerken, verpakkingen benadrukken één positief kenmerk en prijzen lopen sterk uiteen. Een snelle vergelijking vraagt daardoor meer kennis en tijd dan veel mensen beschikbaar hebben.',
      'Bovendien bestaat duurzaamheid uit meerdere dimensies. Een lokaal product heeft weinig transport nodig, maar kan in een verwarmde kas zijn geteeld. Een geïmporteerd product kan efficiënt worden geproduceerd, maar lange afstanden afleggen. Dierenwelzijn, landgebruik, water, arbeidsomstandigheden en verpakking kunnen eveneens tot verschillende conclusies leiden.',
      'De nadruk op individuele keuze heeft voordelen: consumenten kunnen vraag creëren naar betere producten. Toch verschuift die nadruk ook verantwoordelijkheid naar de persoon die voor het schap staat. Producenten, supermarkten en overheden bepalen immers welke informatie zichtbaar is, welke producten worden aangeboden en hoe prijsverschillen ontstaan.',
      'Gedragswetenschappers wijzen erop dat de inrichting van de winkel veel invloed heeft. Producten op ooghoogte worden vaker gekozen, aanbiedingen sturen hoeveelheden en standaardopties bepalen wat als normaal voelt. Een duurzame keuze wordt waarschijnlijker wanneer zij niet alleen beschikbaar, maar ook betaalbaar en gemakkelijk herkenbaar is.',
      'Een ander probleem is voedselverspilling. Grote verpakkingen lijken relatief goedkoop, maar leiden bij kleine huishoudens soms tot meer afval. Een duurder product in een passende hoeveelheid kan uiteindelijk zowel financieel als ecologisch gunstiger zijn. De laagste prijs per kilo vertelt dus niet het hele verhaal.',
      'Effectief beleid combineert daarom informatie met structurele maatregelen. Duidelijke, vergelijkbare labels kunnen helpen, maar ook afspraken over productie, minder verspilling in de keten en prijsprikkels zijn nodig. Anders wordt van consumenten verwacht dat zij in enkele seconden een probleem oplossen dat door een hele keten is ontstaan.',
    ],
    questions: [
      { prompt: 'Waarom is een duurzame keuze volgens alinea 1 lastig?', options: ['Informatie, keurmerken en prijzen zijn moeilijk snel te vergelijken.', 'Er bestaan geen duurzame producten.', 'Alle verpakkingen zijn identiek.'], answer: 0, evidence: 1, explanation: 'De consument moet meerdere signalen onder tijdsdruk beoordelen.' },
      { prompt: 'Wat laat het voorbeeld van lokale en geïmporteerde producten zien?', options: ['Duurzaamheid heeft meerdere, soms tegenstrijdige dimensies.', 'Transport is altijd de enige factor.', 'Lokale producten zijn per definitie slecht.'], answer: 0, evidence: 2, explanation: 'Verschillende factoren kunnen tot verschillende beoordelingen leiden.' },
      { prompt: 'Welke kritiek geeft de auteur op de nadruk op individuele keuze?', options: ['Ze negeert gedeeltelijk de rol van producenten, winkels en overheid.', 'Consumenten hebben geen enkele invloed.', 'Keuzevrijheid moet verdwijnen.'], answer: 0, evidence: 3, explanation: 'De verantwoordelijkheid wordt te gemakkelijk bij één persoon gelegd.' },
      { prompt: 'Hoe beïnvloedt de winkelomgeving gedrag?', options: ['Plaatsing, aanbiedingen en standaardopties sturen keuzes.', 'Alleen de kleur van de vloer telt.', 'Consumenten negeren de inrichting volledig.'], answer: 0, evidence: 4, explanation: 'De alinea noemt meerdere vormen van keuze-architectuur.' },
      { prompt: 'Waarom kan een duurder klein product gunstiger zijn?', options: ['Het kan minder voedselverspilling veroorzaken.', 'Kleine verpakkingen bevatten altijd meer voedsel.', 'De prijs per kilo is altijd lager.'], answer: 0, evidence: 5, explanation: 'Een passende hoeveelheid kan afval en totale kosten verminderen.' },
      { prompt: 'Welke oplossing verdedigt de auteur?', options: ['Informatie combineren met structurele maatregelen.', 'Alle verantwoordelijkheid bij de consument leggen.', 'Keurmerken volledig afschaffen.'], answer: 0, evidence: 6, explanation: 'De conclusie pleit voor labels én ingrepen in productie, verspilling en prijzen.' },
      { prompt: 'Wat betekent “immers” in alinea 3?', options: ['Het introduceert een toelichting of argument.', 'Het drukt tijd uit.', 'Het ontkent de vorige zin.'], answer: 0, evidence: 3, explanation: 'Immers ondersteunt de bewering met een reden.' },
      { prompt: 'Welke impliciete boodschap bevat de laatste zin?', options: ['Individuele keuzes zijn onvoldoende voor een systeemprobleem.', 'Consumenten moeten sneller winkelen.', 'De keten bestaat alleen uit supermarkten.'], answer: 0, evidence: 6, explanation: 'Een probleem van de hele keten vraagt meer dan individuele beslissingen.' },
    ],
  },
  {
    id: 'b2-literatuur-empathie', level: 'B2', title: 'Maakt literatuur ons empathischer?',
    topic: 'literatuur en cultuur', minutes: 12,
    vocabulary: [['de verbeelding', 'het vermogen om situaties en werelden mentaal voor te stellen'], ['het perspectief', 'de positie van waaruit een verhaal wordt verteld'], ['zich inleven', 'proberen te begrijpen wat een ander voelt of denkt'], ['de generalisatie', 'een algemene conclusie uit beperkte gevallen']],
    paragraphs: [
      'Aan literatuur wordt vaak een morele kracht toegeschreven. Wie romans leest, zou zich beter kunnen inleven in mensen met andere ervaringen. Een verhaal geeft toegang tot gedachten en gevoelens die in het dagelijks leven verborgen blijven. Daardoor lijkt lezen een oefening in perspectiefwisseling.',
      'Onderzoek naar dit effect levert echter geen eenvoudige conclusie op. Sommige experimenten vinden een tijdelijk verschil in tests voor sociale waarneming, terwijl andere studies het effect niet kunnen herhalen. Bovendien is het moeilijk te bepalen of lezen empathie veroorzaakt of dat empathische mensen vaker literatuur lezen.',
      'Ook het soort tekst en de manier van lezen zijn waarschijnlijk van belang. Een complexe roman kan de lezer dwingen om onzekerheid te verdragen en verschillende motieven tegelijk te overwegen. Een verhaal kan echter ook stereotypen bevestigen wanneer personages oppervlakkig worden beschreven.',
      'Daarnaast is empathie niet automatisch hetzelfde als moreel handelen. Iemand kan een personage goed begrijpen zonder diens belangen in de werkelijkheid te verdedigen. Empathie kan zelfs selectief zijn: sterke betrokkenheid bij één individu maakt bredere structurele problemen soms minder zichtbaar.',
      'Toch zou het te ver gaan om literatuur daarom waardeloos te noemen. De kracht van lezen ligt mogelijk niet in een meetbare, permanente verbetering van empathie, maar in het creëren van momenten van aandacht. Een roman vertraagt het oordeel en laat zien dat gedrag uit meerdere lagen kan ontstaan.',
      'De meest verdedigbare conclusie is dus bescheiden. Literatuur maakt mensen niet automatisch beter, maar kan omstandigheden scheppen waarin lezers hun vanzelfsprekende perspectief tijdelijk loslaten. Of dat inzicht buiten het boek betekenis krijgt, hangt af van gesprek, reflectie en de bereidheid om het eigen handelen te veranderen.',
    ],
    questions: [
      { prompt: 'Welke algemene overtuiging bespreekt de eerste alinea?', options: ['Dat literatuur het inlevingsvermogen kan vergroten.', 'Dat romans alleen historische feiten bevatten.', 'Dat lezen sociale contacten vervangt.'], answer: 0, evidence: 1, explanation: 'De tekst opent met de veronderstelde morele kracht van literatuur.' },
      { prompt: 'Waarom is het onderzoek niet beslissend?', options: ['Resultaten verschillen en oorzaak en selectie zijn moeilijk te scheiden.', 'Er is nooit onderzoek gedaan.', 'Alle studies meten exact hetzelfde.'], answer: 0, evidence: 2, explanation: 'Reproduceerbaarheid en causaliteit blijven onzeker.' },
      { prompt: 'Welke dubbele mogelijkheid noemt alinea 3?', options: ['Literatuur kan complexiteit tonen, maar ook stereotypen bevestigen.', 'Alle teksten zijn complex.', 'Stereotypen verdwijnen altijd door lezen.'], answer: 0, evidence: 3, explanation: 'Het effect hangt af van tekst en leeswijze.' },
      { prompt: 'Waarom is empathie niet gelijk aan moreel handelen?', options: ['Begrip leidt niet automatisch tot concrete keuzes of rechtvaardigheid.', 'Empathie is altijd negatief.', 'Moreel handelen vereist geen begrip.'], answer: 0, evidence: 4, explanation: 'De auteur onderscheidt emotioneel begrip van gedrag en structuur.' },
      { prompt: 'Wat bedoelt de auteur met “het oordeel vertragen”?', options: ['Niet onmiddellijk een eenvoudige conclusie trekken.', 'Een boek langzaam uitspreken.', 'Besluiten permanent uitstellen.'], answer: 0, evidence: 5, explanation: 'Literatuur kan aandacht geven aan meerdere lagen en motieven.' },
      { prompt: 'Welke conclusie verdedigt de auteur?', options: ['Literatuur kan perspectief openen, maar garandeert geen morele verbetering.', 'Iedere roman maakt elke lezer empathisch.', 'Literatuur heeft geen enkele waarde.'], answer: 0, evidence: 6, explanation: 'De slotparagraaf formuleert een beperkte, voorwaardelijke werking.' },
      { prompt: 'Welke functie heeft “Toch” in alinea 5?', options: ['Het corrigeert een mogelijk te negatieve conclusie.', 'Het noemt een oorzaak.', 'Het introduceert een opsomming.'], answer: 0, evidence: 5, explanation: 'Na de beperkingen wordt een waarde van literatuur verdedigd.' },
      { prompt: 'Wat is de houding van de auteur tegenover sterke claims?', options: ['Kritisch en voorzichtig.', 'Volledig overtuigd.', 'Onverschillig.'], answer: 0, evidence: 6, explanation: 'Woorden als “mogelijk”, “niet automatisch” en “hangt af” tonen nuance.' },
    ],
  },
  {
    id: 'b2-stad-natuur', level: 'B2', title: 'Biodiversiteit begint ook tussen de stoeptegels',
    topic: 'omgeving en biodiversiteit', minutes: 12,
    vocabulary: [['de biodiversiteit', 'de verscheidenheid aan levende soorten en ecosystemen'], ['de ecologische verbinding', 'een route waarlangs planten en dieren zich kunnen verspreiden'], ['inheems', 'van nature voorkomend in een gebied'], ['het beheer', 'de manier waarop een gebied wordt onderhouden']],
    paragraphs: [
      'Biodiversiteit wordt vaak verbonden met natuurgebieden buiten de stad. Toch kunnen steden een belangrijke rol spelen voor planten, insecten en vogels. Tuinen, bermen, daken, parken en zelfs kleine openingen tussen gebouwen vormen samen een netwerk van leefgebieden.',
      'De kwaliteit van dat netwerk hangt niet alleen af van de hoeveelheid groen. Een strak gemaaid grasveld biedt weinig voedsel en beschutting, terwijl een kleinere plek met verschillende inheemse planten veel soorten kan ondersteunen. Variatie in hoogte, bloeitijd en vochtigheid maakt een gebied ecologisch waardevoller.',
      'Gemeenten veranderen daarom hun beheer. Sommige bermen worden minder vaak gemaaid en dood hout blijft op bepaalde plekken liggen. Voor bewoners kan dat er onverzorgd uitzien. Goede communicatie is nodig om uit te leggen dat “rommelig” groen soms bewust wordt beheerd.',
      'Ook particuliere tuinen zijn relevant. Wanneer veel bewoners tegels verwijderen, regenwater opvangen en verschillende planten kiezen, ontstaat gezamenlijk een groot effect. Tegelijkertijd is het onrealistisch om de verantwoordelijkheid volledig bij individuele bewoners te leggen. Openbare ruimte, bouwregels en landbouw rond de stad beïnvloeden het systeem eveneens.',
      'Ecologische verbindingen zijn vooral belangrijk. Een geïsoleerd park kan soorten tijdelijk ondersteunen, maar zonder routes naar andere gebieden blijven populaties kwetsbaar. Groene straten, spoorbermen en oevers kunnen zulke routes vormen, mits ze niet telkens worden onderbroken.',
      'Biodiversiteitsbeleid vraagt dus om samenhang tussen ontwerp, beheer en gedrag. Eén bloemenstrook is waardevol, maar geen vervanging voor een netwerk. De uitdaging is om de stad niet alleen groener te laten lijken, maar haar daadwerkelijk beter bewoonbaar te maken voor meerdere soorten.',
    ],
    questions: [
      { prompt: 'Welke hoofdgedachte verdedigt het artikel?', options: ['Stedelijke biodiversiteit vraagt om kwaliteit en samenhang van groen.', 'Alle natuur moet buiten de stad liggen.', 'Een gemaaid grasveld is altijd het beste leefgebied.'], answer: 0, evidence: 6, explanation: 'De conclusie benadrukt een netwerk van ontwerp, beheer en gedrag.' },
      { prompt: 'Waarom kan een kleine plek ecologisch waardevol zijn?', options: ['Door variatie en inheemse planten.', 'Omdat zij volledig betegeld is.', 'Omdat er nooit beheer nodig is.'], answer: 0, evidence: 2, explanation: 'Kwaliteit en variatie kunnen belangrijker zijn dan alleen oppervlakte.' },
      { prompt: 'Waarom kan nieuw beheer weerstand oproepen?', options: ['Minder gemaaid groen kan onverzorgd lijken.', 'Bewoners willen geen vogels zien.', 'Dood hout is wettelijk verboden.'], answer: 0, evidence: 3, explanation: 'Het uiterlijk wordt anders geïnterpreteerd zonder uitleg.' },
      { prompt: 'Welke beperking noemt de auteur bij individuele actie?', options: ['Ook openbare ruimte, regels en omgeving bepalen het systeem.', 'Tuinen hebben geen enkele invloed.', 'Alle bewoners moeten hetzelfde planten.'], answer: 0, evidence: 4, explanation: 'De verantwoordelijkheid is gedeeld en structureel.' },
      { prompt: 'Waarom zijn ecologische verbindingen nodig?', options: ['Ze helpen soorten zich tussen leefgebieden te verplaatsen.', 'Ze maken elk park groter op de kaart.', 'Ze voorkomen alle menselijke activiteit.'], answer: 0, evidence: 5, explanation: 'Geïsoleerde populaties blijven kwetsbaar.' },
      { prompt: 'Wat betekent “mits” in alinea 5?', options: ['Onder de voorwaarde dat.', 'Ondanks dat.', 'Voordat.'], answer: 0, evidence: 5, explanation: 'Routes werken alleen wanneer ze niet voortdurend worden onderbroken.' },
      { prompt: 'Welke tegenstelling staat in de laatste zin?', options: ['Groener lijken tegenover ecologisch beter functioneren.', 'Stad tegenover dorp.', 'Planten tegenover regenwater.'], answer: 0, evidence: 6, explanation: 'Visueel groen is niet automatisch functionele biodiversiteit.' },
      { prompt: 'Welke beleidsaanpak past bij de tekst?', options: ['Een verbonden netwerk met aangepast beheer en uitleg.', 'Alleen één tijdelijke bloemenstrook.', 'Meer tegels in elke straat.'], answer: 0, evidence: 6, explanation: 'De tekst pleit voor samenhang en continuïteit.' },
    ],
  },
  {
    id: 'b2-werk-autonomie', level: 'B2', title: 'Werkdruk is niet alleen een kwestie van hoeveelheid',
    topic: 'werk en welzijn', minutes: 12,
    vocabulary: [['de autonomie', 'de ruimte om zelf keuzes te maken in het werk'], ['de herstelmogelijkheid', 'de kans om na inspanning te rusten en te herstellen'], ['de tegenstrijdigheid', 'een situatie waarin eisen niet goed met elkaar te combineren zijn'], ['de voorspelbaarheid', 'de mate waarin iemand weet wat er gaat gebeuren']],
    paragraphs: [
      'Werkdruk wordt vaak gemeten aan de hand van taken, uren en deadlines. Dat zijn belangrijke factoren, maar zij verklaren niet waarom twee mensen met een vergelijkbaar takenpakket hun werk heel anders kunnen ervaren. De context waarin het werk wordt uitgevoerd is minstens zo belangrijk.',
      'Autonomie speelt daarbij een centrale rol. Een hoge werklast kan tijdelijk acceptabel zijn wanneer iemand zelf prioriteiten kan stellen en invloed heeft op de planning. Dezelfde hoeveelheid werk voelt zwaarder wanneer taken voortdurend onverwacht veranderen of wanneer elke beslissing toestemming vereist.',
      'Ook tegenstrijdige verwachtingen veroorzaken druk. Een medewerker kan bijvoorbeeld worden gevraagd om snel te werken en tegelijkertijd elk detail uitgebreid te documenteren. Wanneer de organisatie niet duidelijk maakt welke eis prioriteit heeft, wordt de medewerker verantwoordelijk voor een onoplosbare afweging.',
      'Daarnaast zijn herstelmogelijkheden belangrijk. Een drukke periode hoeft niet direct schadelijk te zijn, mits daarop een rustiger periode volgt. Wanneer piekbelasting echter permanent wordt en medewerkers ook buiten werktijd bereikbaar moeten zijn, verdwijnt de mogelijkheid om fysiek en mentaal te herstellen.',
      'Veel organisaties reageren op werkdruk met trainingen in timemanagement of veerkracht. Zulke trainingen kunnen nuttig zijn, maar schieten tekort wanneer de oorzaak in structurele onderbezetting, onduidelijke rollen of slechte systemen ligt. Dan wordt een organisatorisch probleem behandeld alsof het uitsluitend een persoonlijke vaardigheid betreft.',
      'Een effectieve aanpak combineert daarom individuele ondersteuning met aanpassingen in het werk. Teams kunnen taken expliciet prioriteren, bereikbaarheid begrenzen en regelmatig bespreken welke processen onnodige belasting veroorzaken. De vraag is niet alleen hoe een medewerker meer aankan, maar ook welke belasting werkelijk nodig is.',
    ],
    questions: [
      { prompt: 'Waarom ervaren mensen eenzelfde takenpakket verschillend?', options: ['Omdat autonomie, voorspelbaarheid en context verschillen.', 'Omdat uren nooit belangrijk zijn.', 'Omdat elke medewerker dezelfde voorkeuren heeft.'], answer: 0, evidence: 1, explanation: 'De auteur verbreedt werkdruk van hoeveelheid naar werkomstandigheden.' },
      { prompt: 'Hoe kan autonomie hoge werklast draaglijker maken?', options: ['Door invloed op prioriteiten en planning.', 'Door alle deadlines te verwijderen.', 'Door meer toestemming te vragen.'], answer: 0, evidence: 2, explanation: 'Keuzeruimte vermindert de ervaren belasting.' },
      { prompt: 'Wat is het probleem bij tegenstrijdige verwachtingen?', options: ['De medewerker moet eisen combineren zonder duidelijke prioriteit.', 'Er zijn te weinig details.', 'Snelheid en kwaliteit zijn altijd identiek.'], answer: 0, evidence: 3, explanation: 'De organisatie laat een onoplosbare afweging bij de medewerker liggen.' },
      { prompt: 'Welke voorwaarde verbindt “mits” in alinea 4 aan piekbelasting?', options: ['Er moet daarna herstel mogelijk zijn.', 'Piekbelasting moet permanent zijn.', 'Iedereen moet buiten werktijd bereikbaar blijven.'], answer: 0, evidence: 4, explanation: 'Tijdelijke druk is alleen aanvaardbaar met herstel.' },
      { prompt: 'Waarom kunnen veerkrachttrainingen tekortschieten?', options: ['Ze lossen structurele organisatorische oorzaken niet op.', 'Ze zijn altijd te lang.', 'Ze verbieden timemanagement.'], answer: 0, evidence: 5, explanation: 'Persoonlijke training kan onderbezetting of slechte systemen niet vervangen.' },
      { prompt: 'Welke verschuiving stelt de auteur in de laatste zin voor?', options: ['Van alleen individuele draagkracht naar de noodzaak van belasting.', 'Van teams naar volledig individueel werk.', 'Van prioriteren naar meer taken.'], answer: 0, evidence: 6, explanation: 'Niet alleen “meer aankunnen”, maar ook werk anders organiseren.' },
      { prompt: 'Wat is de functie van “daarom” in alinea 6?', options: ['Het introduceert de conclusie uit de eerdere analyse.', 'Het noemt een tegenstelling.', 'Het geeft een tijdstip.'], answer: 0, evidence: 6, explanation: 'Daarom markeert het gevolg van de voorgaande argumenten.' },
      { prompt: 'Welke titel zou minder goed passen?', options: ['Vijf trucs om zonder organisatieverandering harder te werken', 'Autonomie en herstel bij werkdruk', 'Waarom hoeveelheid niet het hele verhaal is'], answer: 0, evidence: 5, explanation: 'De tekst verwerpt juist een uitsluitend individuele aanpak.' },
    ],
  },
];

export const emailTasks = [
  { id: 'b1-klacht-webshop', level: 'B1', title: 'Klacht over een verkeerde bestelling', context: 'Je hebt een jas besteld, maar je kreeg de verkeerde maat.', recipient: 'klantenservice van een webshop', tone: 'beleefd en duidelijk', points: ['noem besteldatum en product', 'beschrijf het probleem', 'vraag hoe je kunt retourneren', 'vraag om de juiste maat'], useful: ['Ik wil graag een klacht indienen over…', 'Helaas heb ik… ontvangen.', 'Zou u mij kunnen uitleggen…?', 'Ik ontvang graag…'], model: 'Onderwerp: Verkeerde maat ontvangen\n\nGeachte heer/mevrouw,\n\nOp 12 mei heb ik via uw webshop een blauwe jas in maat M besteld. Helaas heb ik maat S ontvangen. Zou u mij kunnen uitleggen hoe ik de jas kosteloos kan terugsturen? Ik ontvang graag zo snel mogelijk de juiste maat.\n\nMet vriendelijke groet,\n…' },
  { id: 'b1-afspraak-wijzigen', level: 'B1', title: 'Een afspraak verzetten', context: 'Je kunt niet naar een afspraak bij de gemeente komen.', recipient: 'medewerker van de gemeente', tone: 'beleefd en praktisch', points: ['noem datum en tijd', 'leg kort uit waarom je niet kunt', 'stel twee nieuwe momenten voor', 'vraag om bevestiging'], useful: ['Helaas kan ik niet aanwezig zijn.', 'Zou het mogelijk zijn om…?', 'Ik ben beschikbaar op…', 'Wilt u de nieuwe afspraak bevestigen?'], model: 'Onderwerp: Verzoek om afspraak te verzetten\n\nGeachte heer/mevrouw,\n\nOp donderdag 18 juni heb ik om 10.00 uur een afspraak. Helaas kan ik dan niet aanwezig zijn vanwege een werkverplichting. Zou het mogelijk zijn om de afspraak te verzetten naar vrijdagmiddag of maandagmorgen?\n\nWilt u het nieuwe tijdstip bevestigen?\n\nMet vriendelijke groet,\n…' },
  { id: 'b1-huur-reparatie', level: 'B1', title: 'Reparatie in de huurwoning aanvragen', context: 'De verwarming werkt al drie dagen niet.', recipient: 'verhuurder', tone: 'zakelijk en duidelijk', points: ['beschrijf sinds wanneer het probleem bestaat', 'noem wat je al hebt geprobeerd', 'vraag om snelle reparatie', 'vraag om een concrete afspraak'], useful: ['Sinds … werkt … niet.', 'Ik heb gecontroleerd of…', 'Ik verzoek u om…', 'Graag ontvang ik een concrete datum.'], model: 'Onderwerp: Verwarming werkt niet\n\nGeachte heer/mevrouw,\n\nSinds maandag werkt de verwarming in mijn appartement niet. Ik heb de thermostaat en de zekeringen gecontroleerd, maar het probleem blijft bestaan. Omdat het ’s nachts erg koud is, verzoek ik u de storing zo snel mogelijk te laten onderzoeken.\n\nGraag ontvang ik vandaag een concrete afspraak.\n\nMet vriendelijke groet,\n…' },
  { id: 'b1-mening-buurtplan', level: 'B1', title: 'Je mening over een buurtplan', context: 'De gemeente wil parkeerplaatsen vervangen door een klein park.', recipient: 'wijkteam', tone: 'respectvol en onderbouwd', points: ['geef je mening', 'noem één voordeel', 'noem één zorg', 'doe een voorstel'], useful: ['Volgens mij…', 'Een belangrijk voordeel is…', 'Tegelijkertijd maak ik me zorgen over…', 'Daarom stel ik voor om…'], model: 'Onderwerp: Reactie op het plan voor het buurtpark\n\nBeste leden van het wijkteam,\n\nVolgens mij is een nieuw park een goed idee, omdat kinderen dan meer ruimte krijgen om buiten te spelen. Tegelijkertijd maak ik me zorgen over bewoners die afhankelijk zijn van een parkeerplaats. Daarom stel ik voor om enkele plaatsen voor mensen met een beperking te behouden.\n\nMet vriendelijke groet,\n…' },
  { id: 'b1-voorkeur-teamdag', level: 'B1', title: 'Een voorkeur voor de teamdag uitleggen', context: 'Je team kiest tussen een sportdag en een museumbezoek.', recipient: 'collega’s', tone: 'vriendelijk en constructief', points: ['geef je voorkeur', 'noem twee redenen', 'erken de andere optie', 'stel een compromis voor'], useful: ['Ik geef de voorkeur aan…', 'Dat spreekt mij meer aan omdat…', 'Ik begrijp dat anderen…', 'Misschien kunnen we…'], model: 'Onderwerp: Voorkeur voor de teamdag\n\nHoi allemaal,\n\nIk geef de voorkeur aan een museumbezoek. Dat spreekt mij meer aan omdat iedereen kan deelnemen en we tijdens de activiteit met elkaar kunnen praten. Ik begrijp dat een sportdag actiever is. Misschien kunnen we het museum combineren met een korte wandeling.\n\nGroet,\n…' },
  { id: 'b1-cursus-informatie', level: 'B1', title: 'Informatie over een cursus vragen', context: 'Je wilt een avondcursus Nederlands volgen.', recipient: 'opleidingsinstituut', tone: 'beleefd en informatief', points: ['noem je huidige niveau', 'vraag naar lestijden', 'vraag naar kosten', 'vraag of er een intake is'], useful: ['Ik heb belangstelling voor…', 'Momenteel heb ik niveau…', 'Kunt u mij informeren over…?', 'Is een intake verplicht?'], model: 'Onderwerp: Informatie over avondcursus Nederlands\n\nGeachte heer/mevrouw,\n\nIk heb belangstelling voor uw avondcursus Nederlands. Momenteel heb ik ongeveer niveau A2. Kunt u mij informeren over de lestijden en de totale kosten? Ook hoor ik graag of een intake verplicht is.\n\nMet vriendelijke groet,\n…' },
  { id: 'b2-formele-klacht', level: 'B2', title: 'Formele klacht met gewenste oplossing', context: 'Een leverancier heeft voor de tweede keer te laat geleverd, waardoor jouw project vertraging oploopt.', recipient: 'accountmanager van de leverancier', tone: 'formeel, feitelijk en oplossingsgericht', points: ['beschrijf beide vertragingen', 'leg het gevolg uit', 'verwijs naar de afspraak', 'vraag een concrete maatregel en termijn', 'behoud professionele toon'], useful: ['Hoewel ik begrip heb voor…,', 'Deze vertraging heeft tot gevolg dat…', 'Volgens onze afspraak…', 'Daarom verzoek ik u om uiterlijk…', 'Graag ontvang ik een schriftelijke bevestiging.'], model: 'Onderwerp: Formele klacht over herhaalde leveringsvertraging\n\nGeachte mevrouw Jansen,\n\nHoewel ik begrip heb voor incidentele vertraging, is de levering van 14 juli inmiddels de tweede bestelling die niet op de afgesproken datum is aangekomen. Hierdoor kunnen wij de geplande testfase niet uitvoeren, met als gevolg dat de oplevering van het project onder druk staat.\n\nVolgens onze overeenkomst worden bestellingen uiterlijk binnen vijf werkdagen geleverd. Daarom verzoek ik u om uiterlijk vrijdag te bevestigen wanneer de goederen aankomen en welke maatregel u neemt om herhaling te voorkomen.\n\nGraag ontvang ik uw schriftelijke bevestiging.\n\nMet vriendelijke groet,\n…' },
  { id: 'b2-advies-voorstel', level: 'B2', title: 'Een advies aan het management formuleren', context: 'Je vergelijkt twee softwareoplossingen en adviseert een gefaseerde invoering.', recipient: 'managementteam', tone: 'professioneel en onderbouwd', points: ['vat de vergelijking samen', 'noem voordelen en risico’s', 'formuleer een advies', 'voeg een voorwaarde toe', 'stel een vervolgstap voor'], useful: ['Uit de vergelijking blijkt dat…', 'Daar staat tegenover dat…', 'Op grond hiervan adviseer ik…', 'mits…', 'Als vervolgstap stel ik voor…'], model: 'Onderwerp: Advies over invoering van het nieuwe platform\n\nBeste leden van het managementteam,\n\nUit de vergelijking blijkt dat oplossing A sneller kan worden ingevoerd, terwijl oplossing B op langere termijn beter schaalbaar is. Daar staat tegenover dat oplossing B hogere implementatierisico’s kent.\n\nOp grond hiervan adviseer ik een gefaseerde invoering van oplossing B, mits eerst een beperkte pilot wordt uitgevoerd. Als vervolgstap stel ik voor om binnen twee weken een pilotgroep en meetbare succescriteria vast te stellen.\n\nMet vriendelijke groet,\n…' },
  { id: 'b2-besluit-bezwaar', level: 'B2', title: 'Reageren op een afwijzend besluit', context: 'Je opleidingsverzoek is afgewezen wegens budgetbeperkingen.', recipient: 'leidinggevende', tone: 'respectvol, analytisch en overtuigend', points: ['erken de beperking', 'leg het belang voor je werk uit', 'bied alternatieven', 'vraag om heroverweging'], useful: ['Ik begrijp dat…', 'Tegelijkertijd is deze opleiding relevant omdat…', 'Een mogelijk alternatief is…', 'Ik verzoek u het besluit te heroverwegen.'], model: 'Onderwerp: Verzoek om heroverweging opleidingsaanvraag\n\nBeste …,\n\nIk begrijp dat het opleidingsbudget dit kwartaal beperkt is. Tegelijkertijd sluit de opleiding direct aan op mijn nieuwe verantwoordelijkheden en kan zij de afhankelijkheid van externe ondersteuning verminderen.\n\nEen mogelijk alternatief is om de kosten over twee budgetperioden te verdelen of alleen de kernmodules te volgen. Daarom verzoek ik u het besluit op basis van deze opties te heroverwegen.\n\nMet vriendelijke groet,\n…' },
  { id: 'b2-vergadering-samenvatten', level: 'B2', title: 'Besluiten en acties uit een vergadering samenvatten', context: 'Je stuurt na een projectvergadering een samenvatting naar alle deelnemers.', recipient: 'projectteam', tone: 'compact, neutraal en precies', points: ['noem de belangrijkste besluiten', 'wijs acties en eigenaren toe', 'noem deadlines', 'vermeld een open punt'], useful: ['Tijdens de vergadering is besloten dat…', '… neemt de volgende actie op zich.', 'Uiterlijk op …', 'Het volgende punt blijft open: …'], model: 'Onderwerp: Besluiten en acties projectoverleg 8 september\n\nBeste collega’s,\n\nTijdens de vergadering is besloten dat de testfase op 21 september start. Noor rondt uiterlijk 15 september de acceptatiecriteria af. Sam levert op dezelfde datum de bijgewerkte planning aan.\n\nHet volgende punt blijft open: de beschikbaarheid van de externe testomgeving. Dit wordt vrijdag met de leverancier besproken.\n\nMet vriendelijke groet,\n…' },
  { id: 'b2-risico-vertraging', level: 'B2', title: 'Een projectrisico en vertraging uitleggen', context: 'Een technische afhankelijkheid kan de planning met twee weken vertragen.', recipient: 'opdrachtgever', tone: 'transparant en oplossingsgericht', points: ['beschrijf oorzaak en onzekerheid', 'leg impact uit', 'noem maatregelen', 'geef een nieuw beslismoment'], useful: ['De vertraging wordt veroorzaakt door…', 'Hierdoor bestaat het risico dat…', 'Om de impact te beperken…', 'Uiterlijk op … kunnen wij bevestigen of…'], model: 'Onderwerp: Mogelijke vertraging door technische afhankelijkheid\n\nGeachte …,\n\nDe integratietest is afhankelijk van toegang tot een extern systeem. Die toegang is nog niet beschikbaar, waardoor het risico bestaat dat de planning met maximaal twee weken verschuift.\n\nOm de impact te beperken, bereiden wij de overige tests parallel voor en hebben wij dagelijks contact met de leverancier. Uiterlijk op dinsdag kunnen wij bevestigen of de oorspronkelijke opleverdatum haalbaar blijft.\n\nMet vriendelijke groet,\n…' },
  { id: 'b2-feedback-collega', level: 'B2', title: 'Constructieve feedback per e-mail', context: 'Een collega heeft een inhoudelijk goed rapport geschreven, maar de structuur is onduidelijk.', recipient: 'collega', tone: 'constructief en specifiek', points: ['begin met wat goed is', 'beschrijf concreet wat moeilijk leest', 'leg effect op lezer uit', 'doe twee verbeteringssuggesties'], useful: ['De analyse is inhoudelijk sterk, vooral…', 'Wat de leesbaarheid bemoeilijkt, is…', 'Daardoor moet de lezer…', 'Ik stel voor om…'], model: 'Onderwerp: Feedback op conceptversie rapport\n\nHoi …,\n\nDe analyse is inhoudelijk sterk, vooral de vergelijking tussen de drie scenario’s. Wat de leesbaarheid bemoeilijkt, is dat conclusies en achtergrondinformatie door elkaar staan. Daardoor moet de lezer regelmatig terugzoeken waarop een conclusie is gebaseerd.\n\nIk stel voor om elk hoofdstuk met een kernboodschap te openen en de technische details naar een bijlage te verplaatsen.\n\nGroet,\n…' },
];

const advPeople = ['Noor', 'Sam', 'Lina', 'Omar', 'Sara', 'Milan', 'Yara', 'Daan'];
const advSeparable = [
  { infinitive: 'opbellen', present: 'belt', particle: 'op', participle: 'opgebeld', past: 'belde', te: 'op te bellen', object: 'de huisarts' },
  { infinitive: 'meenemen', present: 'neemt', particle: 'mee', participle: 'meegenomen', past: 'nam', te: 'mee te nemen', object: 'de documenten' },
  { infinitive: 'uitwerken', present: 'werkt', particle: 'uit', participle: 'uitgewerkt', past: 'werkte', te: 'uit te werken', object: 'het voorstel' },
  { infinitive: 'terugbellen', present: 'belt', particle: 'terug', participle: 'teruggebeld', past: 'belde', te: 'terug te bellen', object: 'de klant' },
  { infinitive: 'vaststellen', present: 'stelt', particle: 'vast', participle: 'vastgesteld', past: 'stelde', te: 'vast te stellen', object: 'de oorzaak' },
  { infinitive: 'doorgeven', present: 'geeft', particle: 'door', participle: 'doorgegeven', past: 'gaf', te: 'door te geven', object: 'de wijziging' },
];
const advPreps = [
  ['wachten', 'op', 'de uitslag'], ['bijdragen', 'aan', 'de oplossing'], ['afhangen', 'van', 'het weer'],
  ['zich richten', 'op', 'de klant'], ['beschikken', 'over', 'voldoende ervaring'], ['rekening houden', 'met', 'de kosten'],
  ['trots zijn', 'op', 'het resultaat'], ['tevreden zijn', 'met', 'de service'], ['behoefte hebben', 'aan', 'meer informatie'],
];
const advConnectors = [
  { word: 'omdat', relation: 'reden', clause: 'de trein vertraging heeft', pattern: 'subordinate' },
  { word: 'doordat', relation: 'feitelijke oorzaak', clause: 'er een storing is ontstaan', pattern: 'subordinate' },
  { word: 'zodat', relation: 'doel of gevolg', clause: 'iedereen het begrijpt', pattern: 'subordinate' },
  { word: 'waardoor', relation: 'gevolg van de vorige situatie', clause: 'de planning moest worden aangepast', pattern: 'subordinate' },
  { word: 'hoewel', relation: 'concessie', clause: 'de kosten hoog zijn', pattern: 'subordinate' },
  { word: 'tenzij', relation: 'uitzonderende voorwaarde', clause: 'de afspraak wordt verzet', pattern: 'subordinate' },
  { word: 'mits', relation: 'positieve voorwaarde', clause: 'iedereen zich vooraf inschrijft', pattern: 'subordinate' },
  { word: 'aangezien', relation: 'formele reden', clause: 'de gegevens nog onvolledig zijn', pattern: 'subordinate' },
];
const advAdverbs = [
  ['altijd', 'frequentie', '100% of bijna altijd'], ['vaak', 'frequentie', 'regelmatig'], ['soms', 'frequentie', 'af en toe'],
  ['zelden', 'frequentie', 'niet vaak'], ['binnenkort', 'tijd', 'over korte tijd'], ['inmiddels', 'tijd', 'ondertussen en nu al'],
  ['waarschijnlijk', 'houding', 'met redelijke zekerheid'], ['nauwelijks', 'graad', 'bijna niet'], ['daarom', 'verbinding', 'om die reden'],
  ['desondanks', 'verbinding', 'ondanks wat eerder is genoemd'], ['bovendien', 'verbinding', 'als extra argument'],
];

function advPick(list, index, offset = 0) { return list[(index + offset) % list.length]; }
function advShuffle(items, index) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = (index * 23 + i * 13) % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function advId(text) { return text.replace(/[^a-z0-9]+/giu, '-').replace(/^-|-$/gu, '').toLowerCase(); }

function makeAdvancedA0(index) {
  const person = advPick(advPeople, index);
  const variants = [
    () => ({ topic: 'vragen', type: 'choice', prompt: 'Welke vraag gebruik je om naar een naam te vragen?', answer: 'Hoe heet je?', options: ['Hoe heet je?', 'Hoe laat is het?', 'Hoeveel kost het?'], explanation: '“Hoe heet je?” vraagt naar iemands naam.' }),
    () => ({ topic: 'tijd', type: 'choice', prompt: 'Welke uitdrukking hoort bij 08.00 uur?', answer: 'acht uur', options: ['acht uur', 'acht dagen', 'acht euro'], explanation: 'Bij kloktijd gebruik je “uur”.' }),
    () => ({ topic: 'getallen', type: 'input', prompt: `Vul aan: ${person} heeft ___ boeken. (3)`, answer: 'drie', explanation: 'Het hoofdtelwoord 3 schrijf je als “drie”.' }),
    () => ({ topic: 'beleefd vragen', type: 'choice', prompt: 'Welke zin is een beleefde vraag?', answer: 'Kunt u dat herhalen?', options: ['Kunt u dat herhalen?', 'Herhaal!', 'Ik herhaal jou.'], explanation: '“Kunt u…?” is een beleefde vraagvorm.' }),
  ];
  return variants[index % variants.length]();
}

function makeAdvancedA1(index) {
  const person = advPick(advPeople, index);
  const [adverb, category, meaning] = advPick(advAdverbs.slice(0, 5), index);
  const variants = [
    () => ({ topic: 'bijwoorden', type: 'choice', prompt: `Welk woord past? ${person} gaat ___ met de fiets, maar niet elke dag.`, answer: 'soms', options: ['soms', 'nergens', 'gisteren'], explanation: '“Soms” is een bijwoord van frequentie: af en toe.' }),
    () => ({ topic: 'bijwoorden', type: 'order', prompt: `Zet “${adverb}” op een natuurlijke plaats.`, answer: `${person} werkt ${adverb} thuis.`, tokens: advShuffle([person, 'werkt', adverb, 'thuis.'], index), explanation: `“${adverb}” is een bijwoord van ${category}: ${meaning}.` }),
    () => ({ topic: 'plaatsvoorzetsels', type: 'choice', prompt: 'De lamp hangt ___ de tafel.', answer: 'boven', options: ['boven', 'naar', 'sinds'], explanation: '“Boven” geeft een hogere plaats aan.' }),
    () => ({ topic: 'tijdvoorzetsels', type: 'choice', prompt: 'De afspraak is ___ maandag ___ tien uur.', answer: 'op maandag om tien uur', options: ['op maandag om tien uur', 'in maandag op tien uur', 'naar maandag met tien uur'], explanation: 'Bij een dag gebruik je “op”; bij kloktijd “om”.' }),
    () => ({ topic: 'tegenwoordige tijd', type: 'input', prompt: `Vul aan: ${person} ___ elke dag Nederlands. (oefenen)`, answer: 'oefent', explanation: 'Bij een naam of hij/zij krijgt de stam meestal -t.' }),
    () => ({ topic: 'vragen', type: 'order', prompt: 'Maak een ja/nee-vraag.', answer: `Werkt ${person} vandaag thuis?`, tokens: advShuffle(['Werkt', person, 'vandaag', 'thuis?'], index), explanation: 'In een ja/nee-vraag staat de persoonsvorm vóór het onderwerp.' }),
  ];
  return variants[index % variants.length]();
}

function makeAdvancedA2(index) {
  const person = advPick(advPeople, index);
  const verb = advPick(advSeparable, index);
  const [base, prep, complement] = advPick(advPreps.slice(0, 3), index);
  const variants = [
    () => ({ topic: 'scheidbare werkwoorden', type: 'order', prompt: `Maak een hoofdzin met “${verb.infinitive}”.`, answer: `${person} ${verb.present} ${verb.object} ${verb.particle}.`, tokens: advShuffle([person, verb.present, ...verb.object.split(' '), `${verb.particle}.`], index), explanation: `In de hoofdzin staat “${verb.particle}” aan het einde.` }),
    () => ({ topic: 'scheidbare werkwoorden', type: 'input', prompt: `Vul aan: ${person} heeft ${verb.object} ___. (${verb.infinitive})`, answer: verb.participle, explanation: `Het voltooid deelwoord is “${verb.participle}”.` }),
    () => ({ topic: 'scheidbare werkwoorden', type: 'input', prompt: `Vul aan: ${person} probeert ${verb.object} ___. (${verb.infinitive})`, answer: verb.te, explanation: `Bij een scheidbaar werkwoord komt “te” tussen voorvoegsel en werkwoord: ${verb.te}.` }),
    () => ({ topic: 'vaste voorzetsels', type: 'choice', prompt: `${person} wil ${base} ___ ${complement}.`, answer: prep, options: advShuffle([prep, 'met', 'voor'], index), explanation: `De vaste combinatie is “${base} ${prep}”.` }),
    () => ({ topic: 'perfectum', type: 'choice', prompt: 'Welke zin is correct?', answer: `${person} is naar huis gefietst.`, options: [`${person} is naar huis gefietst.`, `${person} heeft naar huis gefietst.`, `${person} is naar huis fietsen.`], explanation: 'Bij beweging naar een bestemming gebruiken we vaak “zijn”.' }),
    () => ({ topic: 'vragen', type: 'choice', prompt: 'Welke vraag past bij “Met een sleutel”?', answer: 'Waarmee open je de deur?', options: ['Waarmee open je de deur?', 'Met wie open je de deur?', 'Waarop open je de deur?'], explanation: 'Voor een middel of voorwerp gebruik je “waarmee”.' }),
  ];
  return variants[index % variants.length]();
}

function makeAdvancedB1(index) {
  const person = advPick(advPeople, index);
  const connector = advPick(advConnectors, index);
  const [adverb, category, meaning] = advPick(advAdverbs, index, 3);
  const [base, prep, complement] = advPick(advPreps, index);
  const email = advPick(emailTasks.filter((item) => item.level === 'B1'), index);
  const article = advPick(readingArticles.filter((item) => item.level === 'B1'), index);
  const question = advPick(article.questions, index);
  const variants = [
    () => ({ topic: 'connectors', type: 'choice', prompt: `Kies de beste connector voor ${connector.relation}: ${person} past de planning aan, ___ ${connector.clause}.`, answer: connector.word, options: advShuffle([connector.word, 'en', 'of'], index), explanation: `“${connector.word}” drukt ${connector.relation} uit en leidt een bijzin in.` }),
    () => ({ topic: 'connectors', type: 'order', prompt: `Maak een correcte zin met “${connector.word}”.`, answer: `${person} past de planning aan, ${connector.word} ${connector.clause}.`, tokens: advShuffle([person, 'past', 'de', 'planning', 'aan,', connector.word, ...connector.clause.split(' '), '.'], index), explanation: `Na “${connector.word}” staat de werkwoordgroep achteraan.` }),
    () => ({ topic: 'bijwoorden', type: 'choice', prompt: `Welk bijwoord betekent “${meaning}”?`, answer: adverb, options: advShuffle([adverb, 'gisteren', 'overal'], index), explanation: `“${adverb}” is een bijwoord van ${category}.` }),
    () => ({ topic: 'vaste voorzetsels', type: 'input', prompt: `Vul aan: We moeten ${base} ___ ${complement}.`, answer: prep, explanation: `De vaste combinatie is “${base} ${prep}”.` }),
    () => ({ topic: 'werkwoordstijden', type: 'choice', prompt: 'Welke zin vertelt een afgeronde gebeurtenis in een verhaal?', answer: 'Gisteren diende ik een klacht in.', options: ['Gisteren diende ik een klacht in.', 'Gisteren dien ik een klacht in.', 'Gisteren zal ik een klacht indienen.'], explanation: 'De onvoltooid verleden tijd plaatst de gebeurtenis in het verleden.' }),
    () => ({ topic: 'condities', type: 'choice', prompt: 'Welke zin betekent “behalve als het regent”?', answer: 'We gaan wandelen, tenzij het regent.', options: ['We gaan wandelen, tenzij het regent.', 'We gaan wandelen, omdat het regent.', 'We gaan wandelen, zodat het regent.'], explanation: '“Tenzij” introduceert een uitzonderende voorwaarde.' }),
    () => ({ topic: 'klachten en meningen', type: 'choice', prompt: 'Welke formulering is beleefd én duidelijk?', answer: 'Ik ben niet tevreden over de service en ontvang graag een passende oplossing.', options: ['Ik ben niet tevreden over de service en ontvang graag een passende oplossing.', 'Jullie doen alles fout!', 'Misschien is er iets, maar laat maar.'], explanation: 'Een goede klacht benoemt het probleem en de gewenste oplossing zonder agressie.' }),
    () => ({ topic: 'e-mails', type: 'selfcheck', prompt: `${email.title}: ${email.context} Schrijf een e-mail aan ${email.recipient}.`, modelAnswer: email.model, explanation: `Controleer: ${email.points.join('; ')}.` }),
    () => ({ topic: 'lezen B1', type: 'reading', prompt: question.prompt, passageTitle: article.title, passage: article.paragraphs, options: question.options, answer: question.options[question.answer], evidence: `Alinea ${question.evidence}`, explanation: question.explanation }),
  ];
  return variants[index % variants.length]();
}

function makeAdvancedB2(index) {
  const person = advPick(advPeople, index);
  const connector = advPick(advConnectors, index, 2);
  const verb = advPick(advSeparable, index, 2);
  const email = advPick(emailTasks.filter((item) => item.level === 'B2'), index);
  const article = advPick(readingArticles.filter((item) => item.level === 'B2'), index);
  const question = advPick(article.questions, index, 2);
  const variants = [
    () => ({ topic: 'connectors en signaalwoorden', type: 'choice', prompt: 'Welke formulering drukt een gevolg uit dat aan de vorige situatie wordt verbonden?', answer: 'waardoor', options: ['waardoor', 'aangezien', 'mits'], explanation: '“Waardoor” verwijst terug naar de vorige situatie en introduceert het gevolg.' }),
    () => ({ topic: 'connectors en signaalwoorden', type: 'choice', prompt: `Welke connector past bij ${connector.relation}?`, answer: connector.word, options: advShuffle([connector.word, 'vervolgens', 'namelijk'], index), explanation: `“${connector.word}” markeert ${connector.relation}.` }),
    () => ({ topic: 'hypothetische condities', type: 'input', prompt: 'Vul aan: Als ik dat had geweten, ___ ik eerder zijn gekomen.', answer: 'zou', explanation: 'Een niet-werkelijke voorwaarde in het verleden gebruikt “zou + voltooid infinitief”.' }),
    () => ({ topic: 'hypothetische condities', type: 'choice', prompt: 'Welke zin beschrijft een gemiste mogelijkheid?', answer: 'Als we eerder waren begonnen, hadden we de deadline gehaald.', options: ['Als we eerder waren begonnen, hadden we de deadline gehaald.', 'Als we beginnen, halen we de deadline.', 'We beginnen omdat de deadline voorbij is.'], explanation: 'Plusquamperfectum in de voorwaarde beschrijft een onwerkelijk verleden.' }),
    () => ({ topic: 'scheidbare werkwoorden', type: 'order', prompt: `Maak een bijzin met “${verb.infinitive}”.`, answer: `Omdat ${person} ${verb.object} ${verb.particle}${verb.present}.`, tokens: advShuffle(['Omdat', person, ...verb.object.split(' '), `${verb.particle}${verb.present}.`], index), explanation: `In een bijzin staan de delen samen aan het einde: ${verb.particle}${verb.present}.` }),
    () => ({ topic: 'werkwoordstijden', type: 'choice', prompt: 'Welke zin gebruikt het plusquamperfectum correct?', answer: 'Nadat zij het voorstel had uitgewerkt, stuurde zij het naar het team.', options: ['Nadat zij het voorstel had uitgewerkt, stuurde zij het naar het team.', 'Nadat zij het voorstel uitwerkt, had zij het gestuurd.', 'Nadat zij het voorstel zal uitwerken, stuurde zij het.'], explanation: 'De eerdere gebeurtenis krijgt “had + voltooid deelwoord”.' }),
    () => ({ topic: 'passief en register', type: 'choice', prompt: 'Welke zin past het best in een formeel procesverslag?', answer: 'De aanvraag wordt binnen vijf werkdagen beoordeeld.', options: ['De aanvraag wordt binnen vijf werkdagen beoordeeld.', 'We kijken er wel even naar.', 'Iemand doet de aanvraag binnenkort.'], explanation: 'De passieve vorm legt de nadruk op het proces en resultaat.' }),
    () => ({ topic: 'e-mails B2', type: 'selfcheck', prompt: `${email.title}: ${email.context} Schrijf aan ${email.recipient}.`, modelAnswer: email.model, explanation: `Let op register en structuur: ${email.points.join('; ')}.` }),
    () => ({ topic: 'lezen B2 / NT2-II-stijl', type: 'reading', prompt: question.prompt, passageTitle: article.title, passage: article.paragraphs, options: question.options, answer: question.options[question.answer], evidence: `Alinea ${question.evidence}`, explanation: question.explanation }),
    () => ({ topic: 'nuancerende bijwoorden', type: 'choice', prompt: 'Welke formulering is het meest genuanceerd?', answer: 'De aanpak lijkt waarschijnlijk effectief, voor zover de gegevens representatief zijn.', options: ['De aanpak lijkt waarschijnlijk effectief, voor zover de gegevens representatief zijn.', 'De aanpak werkt absoluut altijd.', 'De aanpak doet iets.'], explanation: '“lijkt”, “waarschijnlijk” en “voor zover” beperken de zekerheid.' }),
  ];
  return variants[index % variants.length]();
}

const ADVANCED_TARGETS = { A0: 100, A1: 350, A2: 650, B1: 1250, B2: 1600 };
const advancedFactories = { A0: makeAdvancedA0, A1: makeAdvancedA1, A2: makeAdvancedA2, B1: makeAdvancedB1, B2: makeAdvancedB2 };

export const advancedExerciseBank = Object.entries(ADVANCED_TARGETS).flatMap(([level, count]) => Array.from({ length: count }, (_, index) => {
  const exercise = advancedFactories[level](index);
  return {
    id: `v16-${level.toLowerCase()}-${advId(exercise.topic)}-${String(index + 1).padStart(4, '0')}`,
    level,
    difficulty: level === 'A0' ? 1 : level === 'A1' ? 2 : level === 'A2' ? 3 : level === 'B1' ? 4 : 5,
    skill: exercise.type === 'reading' ? 'lezen' : exercise.type === 'selfcheck' ? 'schrijven' : exercise.type === 'listening' ? 'luisteren' : 'grammatica',
    ...exercise,
    answer: Array.isArray(exercise.answer) ? exercise.answer : String(exercise.answer || ''),
  };
}));

export const advancedPracticeStats = {
  total: advancedExerciseBank.length,
  byLevel: Object.fromEntries(Object.keys(ADVANCED_TARGETS).map((level) => [level, advancedExerciseBank.filter((item) => item.level === level).length])),
  readingArticles: readingArticles.length,
  emailTasks: emailTasks.length,
  grammarTopics: advancedGrammarTopics.length,
};
