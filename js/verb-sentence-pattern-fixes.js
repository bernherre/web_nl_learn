/**
 * V19.4 Alpha 10 - volledige, begrensde correctielaag voor Zinspositie en gebruik.
 *
 * De bestaande fiches blijven volledig intact. Deze laag vervangt uitsluitend
 * de tekstwaarden binnen sentencePatterns. De sleutelvolgorde en het aantal
 * kaarten van iedere fiche blijven gelijk aan V19.4 Alpha 2.
 *
 * Alpha 8 corrigeert expliciet `aanstaan` en breidt de veilige B1-correctielaag
 * uit. De laag pretendeert niet dat alle 1.740 B1-fiches al redactioneel zijn
 * herschreven: alleen patronen met voldoende contextbewijs worden vervangen.
 */

export const verbSentencePatternOverrides = {
  "ruilen": {
    "hoofdzin": "Ik ruil mijn boek met Noor.",
    "verleden": "Ik ruilde mijn jas voor een grotere maat.",
    "perfectum": "Ik heb mijn kaartje met Sam geruild.",
    "modaal": "Ik kan dit artikel nog ruilen.",
    "bijzin": "... omdat ik mijn boek met Noor ruil.",
    "gebiedend": "Ruil je kaartje bij de balie.",
    "vraag": "Kunnen we van plaats ruilen?"
  },
  "aanbakken": {
    "hoofdzin": "De rijst bakt aan op de bodem van de pan.",
    "verleden": "De saus bakte aan omdat het vuur te hoog stond.",
    "perfectum": "Het eten heeft aan de bodem van de pan aangebakken.",
    "modaal": "De melk kan snel aanbakken in een dunne pan.",
    "bijzin": "... omdat de rijst zonder genoeg water aanbakt.",
    "metTe": "De kok probeert het vlees kort aan te bakken.",
    "gebiedend": "Bak het vlees kort aan op hoog vuur.",
    "vraag": "Hoe voorkom je dat de saus aanbakt?"
  },
  "parkeren": {
    "hoofdzin": "Ik parkeer de auto achter het station.",
    "verleden": "Gisteren parkeerde zij langs de gracht.",
    "perfectum": "We hebben de fietsen in de stalling geparkeerd.",
    "modaal": "Je kunt hier na zes uur gratis parkeren.",
    "bijzin": "... omdat hij de bestelwagen voor de deur parkeert.",
    "metTe": "Probeer de auto binnen de lijnen te parkeren.",
    "gebiedend": "Parkeer niet voor de uitrit.",
    "vraag": "Waar heb je de auto geparkeerd?"
  },
  "passen": {
    "hoofdzin": "Deze jas past mij precies.",
    "verleden": "De schoenen pasten niet bij haar jurk.",
    "perfectum": "Ik heb drie broeken gepast.",
    "modaal": "Deze tafel kan niet door de deur passen.",
    "bijzin": "... omdat de afspraak niet in mijn agenda past.",
    "metTe": "Zij wil de jas eerst passen.",
    "gebiedend": "Pas deze schoenen even in de winkel.",
    "vraag": "Past vrijdagmiddag voor jou?"
  },
  "pinnen": {
    "hoofdzin": "Ik pin mijn boodschappen bij de kassa.",
    "verleden": "Hij pinde gisteren vijftig euro.",
    "perfectum": "We hebben het volledige bedrag gepind.",
    "modaal": "Je kunt hier zonder extra kosten pinnen.",
    "bijzin": "... omdat zij liever met haar telefoon pint.",
    "metTe": "Vergeet niet om voor vertrek geld te pinnen.",
    "gebiedend": "Pin het bedrag pas na de controle.",
    "vraag": "Kunnen we in dit restaurant pinnen?"
  },
  "plannen": {
    "hoofdzin": "Ik plan het gesprek voor dinsdagmiddag.",
    "verleden": "We planden de verhuizing maanden van tevoren.",
    "perfectum": "De docent heeft drie toetsen gepland.",
    "modaal": "Je kunt de afspraak online plannen.",
    "bijzin": "... omdat zij haar werkweek zorgvuldig plant.",
    "metTe": "Probeer voldoende pauzes in te plannen.",
    "gebiedend": "Plan eerst de belangrijkste taken.",
    "vraag": "Wanneer plannen we het volgende overleg?"
  },
  "planten": {
    "hoofdzin": "Ik plant de kruiden in een grote pot.",
    "verleden": "De buren plantten vorig jaar een appelboom.",
    "perfectum": "We hebben twintig struiken langs het pad geplant.",
    "modaal": "Je kunt deze bollen in oktober planten.",
    "bijzin": "... omdat hij de jonge boom te diep plant.",
    "metTe": "Zij probeert de sla in rechte rijen te planten.",
    "gebiedend": "Plant de zaailing voorzichtig in vochtige aarde.",
    "vraag": "Wanneer kunnen we de aardbeien planten?"
  },
  "poetsen": {
    "hoofdzin": "Ik poets mijn tanden na het ontbijt.",
    "verleden": "Zij poetste de ramen met een zachte doek.",
    "perfectum": "We hebben alle koperen deurknoppen gepoetst.",
    "modaal": "Je moet deze schoenen voorzichtig poetsen.",
    "bijzin": "... omdat hij zijn fiets elke zaterdag poetst.",
    "metTe": "Vergeet niet om ook de achterkant te poetsen.",
    "gebiedend": "Poets je tanden minstens twee minuten.",
    "vraag": "Waarmee poets je deze houten tafel?"
  },
  "presenteren": {
    "hoofdzin": "Ik presenteer het voorstel aan het team.",
    "verleden": "Zij presenteerde gisteren de kwartaalcijfers.",
    "perfectum": "We hebben ons ontwerp aan de klant gepresenteerd.",
    "modaal": "Je kunt de resultaten in een grafiek presenteren.",
    "bijzin": "... omdat hij het onderzoek helder presenteert.",
    "metTe": "Probeer de kern in vijf minuten te presenteren.",
    "gebiedend": "Presenteer eerst het probleem en daarna de oplossing.",
    "vraag": "Wie presenteert het laatste onderdeel?"
  },
  "produceren": {
    "hoofdzin": "De fabriek produceert medische apparatuur.",
    "verleden": "Het bedrijf produceerde vorig jaar minder staal.",
    "perfectum": "De windmolens hebben veel elektriciteit geproduceerd.",
    "modaal": "Deze machine kan honderd onderdelen per uur produceren.",
    "bijzin": "... omdat de installatie minder afval produceert.",
    "metTe": "Het team probeert lokaal meer voedsel te produceren.",
    "gebiedend": "Produceer alleen wat de klant heeft besteld.",
    "vraag": "Hoeveel energie produceert dit zonnepark?"
  },
  "proeven": {
    "hoofdzin": "Ik proef een beetje citroen in de saus.",
    "verleden": "Zij proefde de soep met een kleine lepel.",
    "perfectum": "We hebben vijf regionale kazen geproefd.",
    "modaal": "Je kunt de kruiden duidelijk proeven.",
    "bijzin": "... omdat hij eerst de saus proeft.",
    "metTe": "Zij wil graag de vegetarische variant proeven.",
    "gebiedend": "Proef eerst voordat je meer peper toevoegt.",
    "vraag": "Welke smaak proef je in deze thee?"
  },
  "publiceren": {
    "hoofdzin": "De redactie publiceert elke ochtend nieuwe artikelen.",
    "verleden": "Het tijdschrift publiceerde haar eerste artikel.",
    "perfectum": "De universiteit heeft de resultaten online gepubliceerd.",
    "modaal": "Je mag deze foto niet zonder toestemming publiceren.",
    "bijzin": "... omdat de organisatie alle besluiten openbaar publiceert.",
    "metTe": "De onderzoeker hoopt het artikel dit jaar te publiceren.",
    "gebiedend": "Publiceer de definitieve versie pas na controle.",
    "vraag": "Wanneer wordt het rapport gepubliceerd?"
  },
  "raden": {
    "hoofdzin": "Ik raad het antwoord op de laatste vraag.",
    "verleden": "Zij raadde meteen mijn beroep.",
    "perfectum": "Niemand heeft de juiste leeftijd geraden.",
    "modaal": "Kun je raden wat er in de doos zit?",
    "bijzin": "... omdat hij het antwoord alleen maar raadt.",
    "metTe": "Probeer de betekenis uit de context te raden.",
    "gebiedend": "Raad eens hoeveel mensen er komen.",
    "vraag": "Wie kan de uitslag correct raden?"
  },
  "reageren": {
    "hoofdzin": "Ik reageer vandaag op je e-mail.",
    "verleden": "Zij reageerde kalm op de kritiek.",
    "perfectum": "De arts heeft snel op de uitslag gereageerd.",
    "modaal": "Je kunt rechtstreeks op dit bericht reageren.",
    "bijzin": "... omdat hij altijd beleefd op klachten reageert.",
    "metTe": "Probeer niet te snel op het nieuws te reageren.",
    "gebiedend": "Reageer uiterlijk vrijdag op de uitnodiging.",
    "vraag": "Hoe reageerde het publiek op de presentatie?"
  },
  "realiseren": {
    "hoofdzin": "Het team realiseert een energiezuinig gebouw.",
    "verleden": "Ik realiseerde me pas later mijn vergissing.",
    "perfectum": "De organisatie heeft haar belangrijkste doel gerealiseerd.",
    "modaal": "We kunnen dit plan binnen twee jaar realiseren.",
    "bijzin": "... omdat zij zich de gevolgen goed realiseert.",
    "metTe": "De gemeente probeert meer betaalbare woningen te realiseren.",
    "gebiedend": "Realiseer je dat deze keuze gevolgen heeft.",
    "vraag": "Hoe wil het team dit ambitieuze doel realiseren?"
  },
  "regelen": {
    "hoofdzin": "Ik regel het vervoer naar het vliegveld.",
    "verleden": "Zij regelde gisteren een nieuwe afspraak.",
    "perfectum": "De receptie heeft een extra bed geregeld.",
    "modaal": "Kun jij vervanging voor maandag regelen?",
    "bijzin": "... omdat hij alle vergunningen op tijd regelt.",
    "metTe": "We proberen kinderopvang voor die dag te regelen.",
    "gebiedend": "Regel eerst toestemming van de eigenaar.",
    "vraag": "Wie regelt de catering voor het evenement?"
  },
  "regenen": {
    "hoofdzin": "Het regent hard boven de hele stad.",
    "verleden": "Gisteren regende het bijna de hele dag.",
    "perfectum": "Het heeft vannacht langdurig geregend.",
    "modaal": "Het kan vanmiddag opnieuw gaan regenen.",
    "bijzin": "... omdat het buiten nog steeds regent.",
    "metTe": "Het lijkt later opnieuw te gaan regenen.",
    "voorwaardelijk": "Als het regent, nemen we de bus.",
    "vraag": "Blijft het morgen de hele ochtend regenen?"
  },
  "rekenen": {
    "hoofdzin": "Ik reken de totale kosten zorgvuldig uit.",
    "verleden": "De leerling rekende gisteren met breuken.",
    "perfectum": "We hebben op twintig deelnemers gerekend.",
    "modaal": "Je kunt de uitkomst met een formule rekenen.",
    "bijzin": "... omdat zij altijd op zijn hulp rekent.",
    "metTe": "Probeer zonder rekenmachine met breuken te rekenen.",
    "gebiedend": "Reken eerst de belasting bij het bedrag.",
    "vraag": "Op hoeveel bezoekers rekenen jullie?"
  },
  "repareren": {
    "hoofdzin": "De monteur repareert de kapotte wasmachine.",
    "verleden": "Zij repareerde gisteren mijn fietslicht.",
    "perfectum": "De loodgieter heeft de lekkende kraan gerepareerd.",
    "modaal": "Kun je dit scherm nog repareren?",
    "bijzin": "... omdat hij oude apparaten zelf repareert.",
    "metTe": "De garage probeert de motor vandaag te repareren.",
    "gebiedend": "Repareer eerst de losse elektrische kabel.",
    "vraag": "Hoe lang duurt het om dit toestel te repareren?"
  },
  "reserveren": {
    "hoofdzin": "Ik reserveer een tafel voor zaterdagavond.",
    "verleden": "Zij reserveerde vorige week twee kaartjes.",
    "perfectum": "We hebben een kamer met ontbijt gereserveerd.",
    "modaal": "Je kunt deze ruimte online reserveren.",
    "bijzin": "... omdat hij altijd ruim van tevoren reserveert.",
    "metTe": "Vergeet niet om een parkeerplaats te reserveren.",
    "gebiedend": "Reserveer minstens een dag voor aankomst.",
    "vraag": "Voor hoeveel personen wilt u reserveren?"
  },
  "respecteren": {
    "hoofdzin": "Ik respecteer haar persoonlijke keuze.",
    "verleden": "De spelers respecteerden de beslissing van de scheidsrechter.",
    "perfectum": "Iedereen heeft de afgesproken stilte gerespecteerd.",
    "modaal": "Je moet de grenzen van anderen respecteren.",
    "bijzin": "... omdat zij verschillende meningen respecteert.",
    "metTe": "Leer om de privacy van bewoners te respecteren.",
    "gebiedend": "Respecteer de regels van het natuurgebied.",
    "vraag": "Hoe kunnen we elkaars grenzen beter respecteren?"
  },
  "retourneren": {
    "hoofdzin": "Ik retourneer de jas met het retourlabel.",
    "verleden": "Zij retourneerde gisteren de verkeerde bestelling.",
    "perfectum": "We hebben het beschadigde apparaat geretourneerd.",
    "modaal": "Je kunt het artikel binnen dertig dagen retourneren.",
    "bijzin": "... omdat hij de schoenen ongebruikt retourneert.",
    "metTe": "Volg deze stappen om het pakket te retourneren.",
    "gebiedend": "Retourneer het product in de originele verpakking.",
    "vraag": "Hoe kan ik deze bestelling kosteloos retourneren?"
  },
  "roepen": {
    "hoofdzin": "Ik roep de kinderen naar binnen.",
    "verleden": "Hij riep luid om hulp.",
    "perfectum": "De arts heeft de volgende patiënt geroepen.",
    "modaal": "Je kunt mij roepen als je klaar bent.",
    "bijzin": "... omdat zij haar collega vanuit de gang roept.",
    "metTe": "Probeer niet door de hele zaal te roepen.",
    "gebiedend": "Roep meteen een medewerker om hulp.",
    "vraag": "Wie riep mijn naam vanaf de straat?"
  },
  "roeren": {
    "hoofdzin": "Ik roer de suiker door de koffie.",
    "verleden": "Zij roerde langzaam in de soep.",
    "perfectum": "De kok heeft het beslag voorzichtig geroerd.",
    "modaal": "Je moet de saus regelmatig roeren.",
    "bijzin": "... omdat hij voortdurend in de pan roert.",
    "metTe": "Vergeet niet om de verf goed te roeren.",
    "gebiedend": "Roer het mengsel tot het glad is.",
    "vraag": "Hoe lang moet ik de saus roeren?"
  },
  "ruiken": {
    "hoofdzin": "Ik ruik verse koffie in de keuken.",
    "verleden": "De kamer rook gisteren nog naar verf.",
    "perfectum": "We hebben buiten rook geroken.",
    "modaal": "Je kunt de kruiden vanaf hier ruiken.",
    "bijzin": "... omdat de soep heerlijk ruikt.",
    "metTe": "Hij probeert aan de melk te ruiken.",
    "gebiedend": "Ruik eerst aan het product voor gebruik.",
    "vraag": "Ruik jij ook gas in de gang?"
  },
  "tekenen": {
    "hoofdzin": "Ik teken een plattegrond van de kamer.",
    "verleden": "Zij tekende gisteren een portret van haar broer.",
    "perfectum": "Beide partijen hebben het contract getekend.",
    "modaal": "Je kunt het formulier digitaal tekenen.",
    "bijzin": "... omdat hij elke dag nieuwe ontwerpen tekent.",
    "metTe": "De architect probeert een compact gebouw te tekenen.",
    "gebiedend": "Teken hier een duidelijke lijn.",
    "vraag": "Wie heeft dit document getekend?"
  },
  "telefoneren": {
    "hoofdzin": "Ik telefoneer vanmiddag met de huisarts.",
    "verleden": "Zij telefoneerde een uur met haar zus.",
    "perfectum": "We hebben gisteren met de klantenservice getelefoneerd.",
    "modaal": "Je kunt vanuit deze ruimte rustig telefoneren.",
    "bijzin": "... omdat hij vaak tijdens de treinreis telefoneert.",
    "metTe": "Probeer buiten de vergadering te telefoneren.",
    "gebiedend": "Telefoneer bij spoed meteen met de receptie.",
    "vraag": "Met wie telefoneerde je zo lang?"
  },
  "tellen": {
    "hoofdzin": "Ik tel de stemmen na de vergadering.",
    "verleden": "Zij telde dertig bezoekers bij de ingang.",
    "perfectum": "We hebben alle dozen twee keer geteld.",
    "modaal": "Kun je tot honderd in het Nederlands tellen?",
    "bijzin": "... omdat hij de munten zorgvuldig telt.",
    "metTe": "Probeer de stappen zonder haast te tellen.",
    "gebiedend": "Tel eerst hoeveel stoelen er ontbreken.",
    "vraag": "Hoeveel deelnemers heb je geteld?"
  },
  "terugbetalen": {
    "hoofdzin": "Ik betaal je het geleende bedrag vrijdag terug.",
    "verleden": "Hij betaalde de lening eerder dan verwacht terug.",
    "perfectum": "De winkel heeft het volledige aankoopbedrag terugbetaald.",
    "modaal": "Je kunt de schuld in twaalf termijnen terugbetalen.",
    "bijzin": "... omdat zij elke maand een vast bedrag terugbetaalt.",
    "metTe": "Hij belooft het geld volgende week terug te betalen.",
    "gebiedend": "Betaal het voorschot voor maandag terug.",
    "vraag": "Wanneer kun je het resterende bedrag terugbetalen?"
  },
  "terugbrengen": {
    "hoofdzin": "Ik breng de boeken morgen terug naar de bibliotheek.",
    "verleden": "De chauffeur bracht ons veilig naar huis terug.",
    "perfectum": "We hebben de geleende stoelen teruggebracht.",
    "modaal": "Kun je de sleutel voor vijf uur terugbrengen?",
    "bijzin": "... omdat hij de auto vandaag terugbrengt.",
    "metTe": "Vergeet niet om de badge terug te brengen.",
    "gebiedend": "Breng het gereedschap na gebruik terug.",
    "vraag": "Waar moet ik deze boeken terugbrengen?"
  },
  "teruggeven": {
    "hoofdzin": "Ik geef je boek morgen terug.",
    "verleden": "De medewerker gaf mijn paspoort direct terug.",
    "perfectum": "De verhuurder heeft de volledige borg teruggegeven.",
    "modaal": "Kun je mij de sleutel vanavond teruggeven?",
    "bijzin": "... omdat zij geleende spullen altijd op tijd teruggeeft.",
    "metTe": "Hij beloofde het document vandaag terug te geven.",
    "gebiedend": "Geef de toegangspas na afloop terug.",
    "vraag": "Wanneer geef je mijn oplader terug?"
  },
  "terugsturen": {
    "hoofdzin": "Ik stuur het beschadigde product morgen terug.",
    "verleden": "De organisatie stuurde het onvolledige formulier terug.",
    "perfectum": "We hebben de verkeerde levering teruggestuurd.",
    "modaal": "Je kunt het document per e-mail terugsturen.",
    "bijzin": "... omdat zij ongeopende pakketten direct terugstuurt.",
    "metTe": "Vergeet niet om het antwoordformulier terug te sturen.",
    "gebiedend": "Stuur het apparaat in de originele doos terug.",
    "vraag": "Naar welk adres moet ik het pakket terugsturen?"
  },
  "inschrijven": {
    "hoofdzin": "Ik schrijf me vandaag in voor de taalcursus.",
    "verleden": "Ik schreef me vorige week in voor de opleiding.",
    "perfectum": "Ik heb me online voor het examen ingeschreven.",
    "modaal": "Je kunt je tot vrijdag voor de workshop inschrijven.",
    "bijzin": "... omdat ik me voor de avondcursus inschrijf.",
    "metTe": "Vergeet niet om je voor de bijeenkomst in te schrijven."
  },
  "beargumenteren": {
    "hoofdzin": "De onderzoeker beargumenteert waarom de maatregel noodzakelijk is.",
    "verleden": "De auteur beargumenteerde zijn standpunt met drie onafhankelijke bronnen.",
    "perfectum": "De commissie heeft haar keuze uitvoerig beargumenteerd.",
    "modaal": "Je moet elke conclusie met controleerbare gegevens kunnen beargumenteren.",
    "bijzin": "... omdat zij haar interpretatie zorgvuldig beargumenteert."
  },
  "parafraseren": {
    "hoofdzin": "De student parafraseert de kern van het artikel in eigen woorden.",
    "verleden": "De tolk parafraseerde de lange toelichting voor het publiek.",
    "perfectum": "Ik heb de passage bondig geparafraseerd.",
    "modaal": "Je moet de bron kunnen parafraseren zonder de betekenis te veranderen.",
    "bijzin": "... omdat hij de oorspronkelijke formulering nauwkeurig parafraseert."
  },
  "relativeren": {
    "hoofdzin": "De onderzoeker relativeert de eerste resultaten door de kleine steekproef te noemen.",
    "verleden": "Zij relativeerde de kritiek door ook de positieve ontwikkelingen te benoemen.",
    "perfectum": "We hebben de betekenis van dat ene incident gerelativeerd.",
    "modaal": "Je moet een uitzonderlijk geval kunnen relativeren binnen de bredere trend.",
    "bijzin": "... omdat hij zijn eigen aannames voortdurend relativeert."
  },
  "rechtvaardigen": {
    "hoofdzin": "De minister rechtvaardigt de maatregel met een beroep op de veiligheid.",
    "verleden": "Het management rechtvaardigde de reorganisatie met tegenvallende cijfers.",
    "perfectum": "De rechter heeft de afwijking uitvoerig gerechtvaardigd.",
    "modaal": "Je moet deze inbreuk op de privacy overtuigend kunnen rechtvaardigen.",
    "bijzin": "... omdat de organisatie haar keuze openbaar rechtvaardigt."
  },
  "reflecteren": {
    "hoofdzin": "De student reflecteert kritisch op zijn eigen leerproces.",
    "verleden": "Na het debat reflecteerde de commissie op de gemaakte afwegingen.",
    "perfectum": "We hebben gezamenlijk op de uitkomsten gereflecteerd.",
    "modaal": "Professionals moeten regelmatig op hun handelen kunnen reflecteren.",
    "bijzin": "... omdat zij bewust op haar communicatie reflecteert."
  },
  "nuanceren": {
    "hoofdzin": "De spreker nuanceert de conclusie door twee uitzonderingen te noemen.",
    "verleden": "De onderzoeker nuanceerde zijn eerdere uitspraak tijdens het interview.",
    "perfectum": "De redactie heeft het oorspronkelijke bericht zorgvuldig genuanceerd.",
    "modaal": "Je kunt het debat nuanceren door onderscheid te maken tussen oorzaak en gevolg.",
    "bijzin": "... omdat zij haar standpunt met aanvullende context nuanceert."
  },
  "veronderstellen": {
    "hoofdzin": "Het model veronderstelt dat alle andere omstandigheden gelijk blijven.",
    "verleden": "De analyse veronderstelde ten onrechte een stabiele markt.",
    "perfectum": "We hebben verondersteld dat de gegevens volledig waren.",
    "modaal": "Je mag niet zonder bewijs veronderstellen dat beide groepen vergelijkbaar zijn.",
    "bijzin": "... omdat de berekening een constante groei veronderstelt."
  },
  "vertegenwoordigen": {
    "hoofdzin": "De advocaat vertegenwoordigt de cliënt tijdens de zitting.",
    "verleden": "Zij vertegenwoordigde haar organisatie bij de internationale onderhandelingen.",
    "perfectum": "De delegatie heeft het land jarenlang vertegenwoordigd.",
    "modaal": "Een bestuurder moet uiteenlopende belangen kunnen vertegenwoordigen.",
    "bijzin": "... omdat hij de werknemers in de ondernemingsraad vertegenwoordigt."
  },
  "rationaliseren": {
    "hoofdzin": "Het bestuur rationaliseert de productie om verspilling te verminderen.",
    "verleden": "De organisatie rationaliseerde haar processen na de fusie.",
    "perfectum": "Het bedrijf heeft de logistieke keten grondig gerationaliseerd.",
    "modaal": "We kunnen de administratie rationaliseren door dubbele stappen te schrappen.",
    "bijzin": "... omdat de directie de kostenstructuur verder rationaliseert."
  },
  "herinterpreteren": {
    "hoofdzin": "De criticus herinterpreteert de roman vanuit een postkoloniaal perspectief.",
    "verleden": "Latere onderzoekers herinterpreteerden de archiefstukken in hun historische context.",
    "perfectum": "De tentoonstelling heeft het bekende beeld radicaal geherinterpreteerd.",
    "modaal": "We kunnen deze passage herinterpreteren wanneer nieuwe bronnen beschikbaar komen.",
    "bijzin": "... omdat de auteur het klassieke motief bewust herinterpreteert."
  },
  "mitigeren": {
    "hoofdzin": "De organisatie mitigeert het risico met aanvullende controles.",
    "verleden": "Het team mitigeerde de gevolgen door het systeem tijdelijk te isoleren.",
    "perfectum": "De bank heeft het valutarisico gedeeltelijk gemitigeerd.",
    "modaal": "Je kunt de impact mitigeren door de invoering gefaseerd uit te voeren.",
    "bijzin": "... omdat het beleid de negatieve neveneffecten onvoldoende mitigeert."
  },
  "symboliseren": {
    "hoofdzin": "De lege stoel symboliseert de afwezigheid van politieke vertegenwoordiging.",
    "verleden": "In het schilderij symboliseerde het gebroken raam een verlies aan vertrouwen.",
    "perfectum": "De kunstenaar heeft de overgang met terugkerende cirkels gesymboliseerd.",
    "modaal": "Een enkel beeld kan verschillende historische ervaringen symboliseren.",
    "bijzin": "... omdat de kleur rood in deze context verzet symboliseert."
  },
  "aandoen": {
    "hoofdzin": "Ik doe mijn regenjas aan voordat ik vertrek.",
    "verleden": "Zij deed het licht aan toen het donker werd.",
    "perfectum": "Die scherpe opmerking heeft hem veel pijn aangedaan.",
    "modaal": "Je kunt onderweg ook de haven van Vlissingen aandoen.",
    "bijzin": "... omdat hij voor de wandeling stevige schoenen aandoet.",
    "metTe": "Vergeet niet om buiten een warme jas aan te doen."
  },
  "aannemen": {
    "hoofdzin": "Zij neemt het aanbod na zorgvuldig overleg aan.",
    "verleden": "Het bedrijf nam vorig jaar twee nieuwe medewerkers aan.",
    "perfectum": "We hebben aangenomen dat alle gegevens volledig waren.",
    "modaal": "De kandidaat kan het voorstel zonder aanvullende voorwaarden aannemen.",
    "bijzin": "... omdat de directie alleen ervaren kandidaten aanneemt.",
    "metTe": "Hij besloot het aanbod uiteindelijk aan te nemen."
  },
  "aanraden": {
    "hoofdzin": "De huisarts raadt mij dagelijks een korte wandeling aan.",
    "verleden": "De docent raadde ons een eenvoudiger woordenboek aan.",
    "perfectum": "Mijn collega heeft die cursus aan mij aangeraden.",
    "modaal": "Ik kan deze oefening aan beginnende studenten aanraden.",
    "bijzin": "... omdat de specialist voldoende rust aanraadt."
  },
  "aantrekken": {
    "hoofdzin": "De stad trekt steeds meer innovatieve bedrijven aan.",
    "verleden": "Zij trok voor het gesprek een nette jas aan.",
    "perfectum": "De tentoonstelling heeft veel internationale bezoekers aangetrokken.",
    "modaal": "Je kunt voor de wandeling stevige schoenen aantrekken.",
    "bijzin": "... omdat de regio nieuwe investeerders aantrekt.",
    "metTe": "Hij probeert zich de kritiek niet persoonlijk aan te trekken."
  },
  "achteruitrijden": {
    "hoofdzin": "De chauffeur rijdt langzaam achteruit uit de smalle parkeerplaats.",
    "verleden": "Hij reed voorzichtig achteruit tot vlak voor het laadperron.",
    "perfectum": "De bestuurder is enkele meters achteruitgereden om ruimte te maken.",
    "modaal": "Je moet hier met de vrachtwagen stapvoets achteruitrijden.",
    "bijzin": "... omdat de auto zonder camera moeilijk achteruitrijdt.",
    "metTe": "De instructeur leert haar veilig achteruit te rijden."
  },
  "achteruitvliegen": {
    "hoofdzin": "De lichte drone vliegt door de wind plotseling achteruit.",
    "verleden": "Door de botsing vloog de stoel enkele meters achteruit.",
    "perfectum": "Het toestel is na de windstoot gevaarlijk achteruitgevlogen.",
    "modaal": "Een kleine drone kan bij harde wind snel achteruitvliegen.",
    "bijzin": "... omdat het object na de explosie achteruitvliegt.",
    "metTe": "De piloot probeert gecontroleerd achteruit te vliegen."
  },
  "afspreken": {
    "hoofdzin": "We spreken morgen om negen uur bij het station af.",
    "verleden": "De partijen spraken duidelijke voorwaarden voor de samenwerking af.",
    "perfectum": "Ik heb met de verhuurder een nieuwe datum afgesproken.",
    "modaal": "We kunnen voor volgende week een kort overleg afspreken.",
    "bijzin": "... omdat zij elke afspraak schriftelijk afspreekt en bevestigt.",
    "metTe": "Vergeet niet om vooraf een ontmoetingsplaats af te spreken."
  },
  "annuleren": {
    "hoofdzin": "De organisatie annuleert de bijeenkomst vanwege het slechte weer.",
    "verleden": "De luchtvaartmaatschappij annuleerde gisteren drie vluchten.",
    "perfectum": "Ik heb mijn reservering kosteloos geannuleerd.",
    "modaal": "Je kunt de afspraak tot vierentwintig uur vooraf annuleren.",
    "bijzin": "... omdat de arts alle afspraken van vanmiddag annuleert."
  },
  "bestellen": {
    "hoofdzin": "We bestellen vanavond twee vegetarische maaltijden.",
    "verleden": "Zij bestelde vorige week een nieuwe bureaustoel.",
    "perfectum": "Ik heb de benodigde onderdelen online besteld.",
    "modaal": "Je kunt dit boek rechtstreeks bij de uitgever bestellen.",
    "bijzin": "... omdat het restaurant de ingrediënten dagelijks bestelt."
  },
  "bezorgen": {
    "hoofdzin": "De koerier bezorgt het pakket morgen bij de buren.",
    "verleden": "De opmerking bezorgde haar een ongemakkelijk gevoel.",
    "perfectum": "De apotheek heeft de medicijnen thuis bezorgd.",
    "modaal": "De winkel kan de bestelling dezelfde dag bezorgen.",
    "bijzin": "... omdat deze situatie veel inwoners zorgen bezorgt."
  },
  "doorontwikkelen": {
    "hoofdzin": "Het team ontwikkelt het prototype door tot een schaalbaar product.",
    "verleden": "De organisatie ontwikkelde het platform door na de eerste proef.",
    "perfectum": "We hebben de oorspronkelijke methode verder doorontwikkeld.",
    "modaal": "De leverancier kan de oplossing samen met de klant doorontwikkelen.",
    "bijzin": "... omdat het onderzoeksteam de technologie voortdurend doorontwikkelt.",
    "metTe": "De partners besloten het concept gezamenlijk door te ontwikkelen."
  },
  "durven": {
    "hoofdzin": "Ik durf tijdens de vergadering een kritische vraag te stellen.",
    "verleden": "Zij durfde de fout uiteindelijk eerlijk toe te geven.",
    "perfectum": "Hij heeft het probleem niet rechtstreeks durven benoemen.",
    "modaal": "Je moet soms een onpopulair standpunt durven verdedigen.",
    "bijzin": "... omdat zij haar twijfels openlijk durft uit te spreken.",
    "vraag": "Durf jij alleen naar een onbekende stad te reizen?"
  },
  "geloven": {
    "hoofdzin": "Ik geloof dat deze aanpak op lange termijn werkt.",
    "voorbeeld": "Zij gelooft sterk in gelijke kansen voor alle kinderen.",
    "context": "De getuige gelooft hem pas nadat hij bewijs toont.",
    "verleden": "We geloofden eerst dat de vertraging maar kort zou duren.",
    "perfectum": "Niemand heeft zijn onwaarschijnlijke verklaring geloofd."
  },
  "groeien": {
    "hoofdzin": "Het aantal deelnemers groeit ieder jaar gestaag.",
    "voorbeeld": "De kinderen groeien snel uit hun winterkleren.",
    "context": "De kleine onderneming groeit uit tot een internationaal bedrijf.",
    "verleden": "De vraag naar duurzame energie groeide sterker dan verwacht.",
    "perfectum": "De stad is in tien jaar aanzienlijk gegroeid."
  },
  "houden": {
    "hoofdzin": "Ik houd mijn telefoon tijdens de vergadering uit het zicht.",
    "voorbeeld": "Wij houden volgende maand een openbare informatieavond.",
    "context": "De projectleider houdt rekening met onverwachte vertragingen.",
    "verleden": "Zij hield de zware deur voor de bezoeker open.",
    "perfectum": "We hebben ons ondanks de druk aan de afspraak gehouden."
  },
  "invullen": {
    "hoofdzin": "Ik vul het aanvraagformulier met de juiste gegevens in.",
    "verleden": "De kandidaat vulde alle verplichte velden zorgvuldig in.",
    "perfectum": "We hebben de enquête volledig ingevuld.",
    "modaal": "Je kunt het formulier digitaal invullen en ondertekenen.",
    "bijzin": "... omdat hij zijn contactgegevens onvolledig invult."
  },
  "klagen": {
    "hoofdzin": "De klant klaagt bij de leverancier over de beschadigde levering.",
    "verleden": "Verschillende bewoners klaagden over nachtelijk lawaai.",
    "perfectum": "Ik heb bij de gemeente over de gevaarlijke situatie geklaagd.",
    "modaal": "Je kunt schriftelijk over de dienstverlening klagen.",
    "bijzin": "... omdat zij al weken over dezelfde storing klaagt."
  },
  "leven": {
    "hoofdzin": "Veel studenten leven tijdelijk van een beperkt budget.",
    "voorbeeld": "Mijn grootouders leven al vijftig jaar in hetzelfde dorp.",
    "context": "De herinnering aan die gebeurtenis leeft nog sterk in de gemeenschap.",
    "verleden": "Hij leefde jarenlang in het buitenland.",
    "perfectum": "De schrijver heeft een lang en productief leven geleefd."
  },
  "lijken": {
    "hoofdzin": "De voorgestelde oplossing lijkt op het eerste gezicht eenvoudig.",
    "voorbeeld": "Deze twee modellen lijken sterk op elkaar.",
    "context": "Het lijkt erop dat de onderhandelingen langer zullen duren.",
    "verleden": "De situatie leek gisteren nog volledig onder controle.",
    "perfectum": "Het heeft lange tijd onmogelijk geleken om een akkoord te bereiken."
  },
  "nasynchroniseren": {
    "hoofdzin": "De studio synchroniseert de buitenlandse serie in het Nederlands na.",
    "verleden": "Een nieuw team synchroniseerde de documentaire volledig na.",
    "perfectum": "De distributeur heeft alle afleveringen opnieuw nagesynchroniseerd.",
    "modaal": "De producent kan de film voor meerdere markten nasynchroniseren.",
    "bijzin": "... omdat de studio elke scène nauwkeurig nasynchroniseert.",
    "metTe": "De acteurs begonnen de animatiefilm opnieuw na te synchroniseren."
  },
  "ondermijnen": {
    "hoofdzin": "Herhaalde uitzonderingen ondermijnen het vertrouwen in de regel.",
    "verleden": "De tegenstrijdige verklaringen ondermijnden zijn geloofwaardigheid.",
    "perfectum": "De voortdurende onzekerheid heeft de samenwerking ernstig ondermijnd.",
    "modaal": "Onzorgvuldige communicatie kan het draagvlak voor de maatregel ondermijnen.",
    "bijzin": "... omdat deze aanpak de onafhankelijkheid van het onderzoek ondermijnt."
  },
  "ondervertegenwoordigen": {
    "hoofdzin": "De steekproef ondervertegenwoordigt jonge werknemers en kleine bedrijven.",
    "verleden": "Het vorige onderzoek ondervertegenwoordigde inwoners van landelijke gebieden.",
    "perfectum": "De selectieprocedure heeft bepaalde groepen structureel ondervertegenwoordigd.",
    "modaal": "Een beperkte vragenlijst kan kwetsbare groepen ondervertegenwoordigen.",
    "bijzin": "... omdat het databestand zelfstandigen sterk ondervertegenwoordigt.",
    "metTe": "De nieuwe methode voorkomt dat de enquête minderheden blijft ondervertegenwoordigen."
  },
  "ontregelen": {
    "hoofdzin": "De langdurige storing ontregelt het regionale treinverkeer.",
    "verleden": "De plotselinge sneeuwval ontregelde het openbaar vervoer volledig.",
    "perfectum": "De cyberaanval heeft verschillende bedrijfsprocessen ontregeld.",
    "modaal": "Een klein technisch defect kan de hele productielijn ontregelen.",
    "bijzin": "... omdat de onverwachte maatregel de planning ernstig ontregelt."
  },
  "ontvangen": {
    "hoofdzin": "Wij ontvangen morgen de buitenlandse delegatie op het stadhuis.",
    "voorbeeld": "De klant ontvangt automatisch een bevestiging per e-mail.",
    "context": "Het nieuwe voorstel werd door de medewerkers positief ontvangen.",
    "verleden": "Zij ontving vorige week haar verblijfsdocument.",
    "perfectum": "We hebben alle benodigde gegevens op tijd ontvangen."
  },
  "opruimen": {
    "hoofdzin": "Ik ruim na het eten de keuken meteen op.",
    "verleden": "De vrijwilligers ruimden het park na het festival op.",
    "perfectum": "We hebben alle verhuisdozen eindelijk opgeruimd.",
    "modaal": "Je kunt deze documenten in de archiefkast opruimen.",
    "bijzin": "... omdat hij zijn werkplek elke vrijdag opruimt."
  },
  "overcompenseren": {
    "hoofdzin": "Hij overcompenseert zijn onzekerheid door voortdurend de leiding te nemen.",
    "verleden": "De organisatie overcompenseerde het eerdere tekort met onnodig hoge voorraden.",
    "perfectum": "Het team heeft de vertraging met te veel extra capaciteit overgecompenseerd.",
    "modaal": "Mensen kunnen een zwak punt onbewust overcompenseren.",
    "bijzin": "... omdat zij kritiek vaak met overdreven zekerheid overcompenseert.",
    "metTe": "Probeer een kleine afwijking niet meteen te overcompenseren."
  },
  "sluiten": {
    "hoofdzin": "De bibliotheek sluit vandaag een uur eerder.",
    "voorbeeld": "Wilt u het raam sluiten voordat u vertrekt?",
    "context": "Beide partijen sluiten na lange onderhandelingen een overeenkomst.",
    "verleden": "De winkel sloot vorig jaar wegens hoge kosten.",
    "perfectum": "De gemeente heeft het gebouw tijdelijk gesloten."
  },
  "trekken": {
    "hoofdzin": "De medewerker trekt de zware deur voorzichtig naar zich toe.",
    "voorbeeld": "Veel vogels trekken in het najaar naar het zuiden.",
    "context": "De onderzoekers trekken een voorzichtige conclusie uit de cijfers.",
    "verleden": "De kar trok langzaam door het losse zand.",
    "perfectum": "We hebben de kabel door de smalle buis getrokken."
  },
  "uittrekken": {
    "hoofdzin": "Ik trek mijn natte jas bij de ingang uit.",
    "verleden": "De wandelaars trokken hun zware schoenen buiten uit.",
    "perfectum": "Zij heeft voor het onderzoek drie maanden uitgetrokken.",
    "modaal": "Je kunt deze beschermende kleding na de controle uittrekken.",
    "bijzin": "... omdat hij zijn handschoenen binnen meteen uittrekt.",
    "metTe": "De patiënt werd gevraagd zijn jas uit te trekken."
  },
  "veranderen": {
    "hoofdzin": "De arbeidsmarkt verandert sneller dan veel opleidingen kunnen volgen.",
    "voorbeeld": "We veranderen de planning na overleg met het team.",
    "context": "Zijn houding tegenover thuiswerken verandert geleidelijk.",
    "verleden": "De situatie veranderde binnen enkele weken volledig.",
    "perfectum": "De nieuwe regelgeving heeft onze werkwijze veranderd."
  },
  "verantwoorden": {
    "hoofdzin": "De bestuurder verantwoordt de uitgaven tegenover de gemeenteraad.",
    "verleden": "De onderzoeker verantwoordde elke methodologische keuze uitvoerig.",
    "perfectum": "Het bestuur heeft de afwijking in het jaarverslag verantwoord.",
    "modaal": "Je moet kunnen verantwoorden waarom je deze gegevens gebruikt.",
    "bijzin": "... omdat de organisatie haar besluiten publiek verantwoordt."
  },
  "verhuizen": {
    "hoofdzin": "Wij verhuizen volgende maand naar een grotere woning.",
    "verleden": "Het bedrijf verhuisde vorig jaar naar een duurzaam kantoor.",
    "perfectum": "Mijn buren zijn onlangs naar Eindhoven verhuisd.",
    "modaal": "We kunnen pas na de sleuteloverdracht verhuizen.",
    "bijzin": "... omdat het gezin dichter bij de school verhuist."
  },
  "verliezen": {
    "hoofdzin": "Ik verlies onderweg bijna nooit mijn sleutels.",
    "voorbeeld": "Het team verliest de finale met één punt verschil.",
    "context": "We mogen het doel van het project niet uit het oog verliezen.",
    "verleden": "Zij verloor haar portemonnee in de drukke trein.",
    "perfectum": "De organisatie heeft veel vertrouwen verloren."
  },
  "vliegen": {
    "hoofdzin": "We vliegen morgenochtend rechtstreeks naar Kopenhagen.",
    "verleden": "De piloot vloog vanwege de storm een andere route.",
    "perfectum": "De delegatie is gisteren naar Brussel gevlogen.",
    "modaal": "Je kunt vanaf Eindhoven naar verschillende Europese steden vliegen.",
    "bijzin": "... omdat het vliegtuig vandaag op grotere hoogte vliegt."
  },
  "voorbijschieten": {
    "hoofdzin": "De fietser schiet door zijn hoge snelheid de afslag voorbij.",
    "verleden": "De trein schoot het kleine station zonder te stoppen voorbij.",
    "perfectum": "Het project is zijn oorspronkelijke doel volledig voorbijgeschoten.",
    "modaal": "Een te algemene maatregel kan het beoogde doel voorbijschieten.",
    "bijzin": "... omdat de discussie aan de belangrijkste vraag voorbijschiet.",
    "metTe": "Het beleid dreigt zijn maatschappelijke doel voorbij te schieten."
  },
  "voorfinancieren": {
    "hoofdzin": "De gemeente financiert de eerste fase van het project voor.",
    "verleden": "De stichting financierde de noodzakelijke apparatuur tijdelijk voor.",
    "perfectum": "De bank heeft de investering voorgefinancierd.",
    "modaal": "Een fonds kan de onderzoekskosten gedeeltelijk voorfinancieren.",
    "bijzin": "... omdat de opdrachtgever de volledige productie voorfinanciert.",
    "metTe": "De partner is bereid de eerste ontwikkelfase voor te financieren."
  },
  "vooruitbestellen": {
    "hoofdzin": "Veel klanten bestellen de beperkte editie maanden vooruit.",
    "verleden": "Het restaurant bestelde de seizoensproducten ruim vooruit.",
    "perfectum": "We hebben de kaarten voor het festival vooruitbesteld.",
    "modaal": "Je kunt het nieuwe model vanaf vandaag vooruitbestellen.",
    "bijzin": "... omdat de winkel populaire artikelen vroeg vooruitbestelt.",
    "metTe": "Het is verstandig om de tickets ruim vooruit te bestellen."
  },
  "winnen": {
    "hoofdzin": "Ons team wint de wedstrijd na een spannende verlenging.",
    "voorbeeld": "Met deze aanpassing winnen we dagelijks veel tijd.",
    "context": "Het voorstel wint langzaam aan steun binnen de organisatie.",
    "verleden": "De kandidaat won de verkiezing met een kleine meerderheid.",
    "perfectum": "Zij heeft met haar onderzoek een internationale prijs gewonnen."
  },
  "zwemmen": {
    "hoofdzin": "Zij zwemt iedere woensdag in het gemeentelijke zwembad.",
    "verleden": "Ik zwom gisteren een kilometer zonder te stoppen.",
    "perfectum": "We hebben vanmorgen een uur in zee gezwommen.",
    "modaal": "De kinderen kunnen inmiddels zelfstandig zwemmen.",
    "bijzin": "... omdat hij voor de wedstrijd dagelijks zwemt.",
    "richting": "De redders zijn snel naar de overkant gezwommen."
  }
};

export const advancedVerbLevelOverrides = {
  "beargumenteren": "C1",
  "parafraseren": "C1",
  "relativeren": "C1",
  "rechtvaardigen": "C1",
  "reflecteren": "C1",
  "nuanceren": "C1",
  "veronderstellen": "C1",
  "vertegenwoordigen": "C1",
  "rationaliseren": "C2",
  "herinterpreteren": "C2",
  "mitigeren": "C2",
  "symboliseren": "C2"
};

const EDITABLE_LEVELS = new Set(['A2', 'B1', 'B2', 'C1', 'C2']);
const GENERATED_LEVELS = new Set(['B1', 'B2', 'C1', 'C2']);
const generatedImperativeLabels = new Map();

const criticalSentencePatternOverrides = {

  aanbetalen: {
    hoofdzin: 'We betalen tien procent van de koopprijs aan.',
    verleden: 'We betaalden bij de bestelling tien procent aan.',
    perfectum: 'We hebben tien procent van het totaalbedrag aanbetaald.',
    modaal: 'Je kunt het eerste deel direct online aanbetalen.',
    bijzin: '... omdat we tien procent van de koopprijs aanbetalen.',
    metTe: 'De klant besluit tien procent van de koopprijs aan te betalen.',
  },
  aanbevelen: {
    hoofdzin: 'De docent beveelt dit woordenboek aan voor niveau B1.',
    verleden: 'De docent beval vorig jaar een ander woordenboek aan.',
    perfectum: 'De docent heeft dit woordenboek aan de cursisten aanbevolen.',
    modaal: 'Ik kan deze cursus aan nieuwe collega’s aanbevelen.',
    bijzin: '... omdat de docent dit woordenboek voor niveau B1 aanbeveelt.',
    metTe: 'De docent besluit dit woordenboek aan de groep aan te bevelen.',
  },
  aanbieden: {
    hoofdzin: 'Het bedrijf biedt medewerkers een opleiding aan.',
    verleden: 'Het bedrijf bood vorig jaar extra taallessen aan.',
    perfectum: 'Het bedrijf heeft alle medewerkers begeleiding aangeboden.',
    modaal: 'De gemeente kan nieuwkomers extra ondersteuning aanbieden.',
    bijzin: '... omdat het bedrijf medewerkers een opleiding aanbiedt.',
    metTe: 'De organisatie probeert deelnemers passende hulp aan te bieden.',
  },
  aanblijven: {
    hoofdzin: 'De directeur blijft nog een jaar aan.',
    verleden: 'De voorzitter bleef na de verkiezing nog twee jaar aan.',
    perfectum: 'De minister is ondanks de kritiek aangebleven.',
    modaal: 'De tijdelijke manager kan tot december aanblijven.',
    bijzin: '... omdat de directeur nog een jaar aanblijft.',
    metTe: 'De voorzitter besluit na de stemming aan te blijven.',
  },
  aanboren: {
    hoofdzin: 'Het bedrijf boort een nieuwe waterlaag aan.',
    verleden: 'De organisatie boorde vorig jaar een nieuwe markt aan.',
    perfectum: 'Het project heeft meerdere financieringsbronnen aangeboord.',
    modaal: 'Met deze cursus kun je verborgen talenten aanboren.',
    bijzin: '... omdat het bedrijf een nieuwe waterlaag aanboort.',
    metTe: 'De organisatie probeert nieuwe financieringsbronnen aan te boren.',
  },
  aanbouwen: {
    hoofdzin: 'Ze bouwen een serre aan de achtergevel aan.',
    verleden: 'De vorige eigenaar bouwde een kleine keuken aan.',
    perfectum: 'De buren hebben een extra kamer aan hun huis aangebouwd.',
    modaal: 'Je kunt aan de tuinzijde een veranda aanbouwen.',
    bijzin: '... omdat ze een serre aan de achtergevel aanbouwen.',
    metTe: 'De bewoners besluiten een werkkamer aan het huis aan te bouwen.',
  },
  aanbrengen: {
    hoofdzin: 'De monteur brengt een nieuwe sensor aan.',
    verleden: 'De schilder bracht gisteren de eerste verflaag aan.',
    perfectum: 'De installateur heeft extra isolatie aangebracht.',
    modaal: 'Je kunt de beschermlaag met een kwast aanbrengen.',
    bijzin: '... omdat de monteur een nieuwe sensor aanbrengt.',
    metTe: 'De schilder probeert de verf gelijkmatig aan te brengen.',
  },
  aandragen: {
    hoofdzin: 'De onderzoekers dragen drie argumenten aan voor hun conclusie.',
    verleden: 'De commissie droeg verschillende oplossingen aan.',
    perfectum: 'De deelnemers hebben bruikbare voorbeelden aangedragen.',
    modaal: 'Iedereen kan tijdens het overleg een voorstel aandragen.',
    bijzin: '... omdat de onderzoekers drie argumenten aandragen.',
    metTe: 'De werkgroep probeert een haalbare oplossing aan te dragen.',
  },
  aandrijven: {
    hoofdzin: 'Een elektromotor drijft de pomp aan.',
    verleden: 'Een dieselmotor dreef de oude installatie aan.',
    perfectum: 'De wind heeft de generator de hele nacht aangedreven.',
    modaal: 'Zonne-energie kan deze installatie aandrijven.',
    bijzin: '... omdat een elektromotor de pomp aandrijft.',
    metTe: 'Het systeem gebruikt waterkracht om de turbine aan te drijven.',
  },
  aandringen: {
    hoofdzin: 'De arts dringt aan op verder onderzoek.',
    verleden: 'De bewoners drongen aan op een snelle oplossing.',
    perfectum: 'De vakbond heeft op nieuwe onderhandelingen aangedrongen.',
    modaal: 'De commissie kan op extra maatregelen aandringen.',
    bijzin: '... omdat de arts op verder onderzoek aandringt.',
    metTe: 'De bewoners besluiten op een schriftelijk antwoord aan te dringen.',
  },
  aangeven: {
    hoofdzin: 'De arts geeft duidelijk aan dat rust noodzakelijk is.',
    verleden: 'De getuige gaf aan waar het incident plaatsvond.',
    perfectum: 'De organisatie heeft aangegeven dat de planning verandert.',
    modaal: 'Je kunt op het formulier aangeven welke optie je kiest.',
    bijzin: '... omdat de arts duidelijk aangeeft dat rust noodzakelijk is.',
    metTe: 'De medewerker probeert duidelijk aan te geven wat er ontbreekt.',
  },
  aankomen: {
    hoofdzin: 'De trein komt om half negen aan.',
    verleden: 'De trein kwam gisteren met vertraging aan.',
    perfectum: 'De reizigers zijn veilig op hun bestemming aangekomen.',
    modaal: 'We kunnen vóór het begin van de vergadering aankomen.',
    bijzin: '... omdat de trein om half negen aankomt.',
    metTe: 'We proberen ruim voor de afspraak aan te komen.',
  },
  aankopen: {
    hoofdzin: 'De gemeente koopt het oude gebouw aan.',
    verleden: 'Het museum kocht vorig jaar drie schilderijen aan.',
    perfectum: 'De bibliotheek heeft nieuwe studieboeken aangekocht.',
    modaal: 'De organisatie kan de apparatuur centraal aankopen.',
    bijzin: '... omdat de gemeente het oude gebouw aankoopt.',
    metTe: 'Het museum besluit een werk van de lokale kunstenaar aan te kopen.',
  },
  aanklagen: {
    hoofdzin: 'Het Openbaar Ministerie klaagt de verdachte aan.',
    verleden: 'De officier klaagde de bestuurder aan wegens fraude.',
    perfectum: 'Het Openbaar Ministerie heeft twee verdachten aangeklaagd.',
    modaal: 'De officier kan de verdachte voor meerdere feiten aanklagen.',
    bijzin: '... omdat het Openbaar Ministerie de verdachte aanklaagt.',
    metTe: 'De officier besluit de verdachte wegens fraude aan te klagen.',
  },
  aanhouden: {
    hoofdzin: 'De regen houdt de hele middag aan.',
    verleden: 'De storing hield tot laat in de avond aan.',
    perfectum: 'De onrust heeft meerdere dagen aangehouden.',
    modaal: 'De harde wind kan tot morgenochtend aanhouden.',
    bijzin: '... omdat de regen de hele middag aanhoudt.',
    metTe: 'De vertraging dreigt nog enkele uren aan te houden.',
  },
  aansluiten: {
    hoofdzin: 'De nieuwe uitleg sluit goed aan bij niveau B1.',
    verleden: 'De workshop sloot goed aan bij de vragen van de deelnemers.',
    perfectum: 'De cursus heeft goed bij mijn werkervaring aangesloten.',
    modaal: 'Het vervolgprogramma kan beter bij deze opleiding aansluiten.',
    bijzin: '... omdat de nieuwe uitleg goed bij niveau B1 aansluit.',
    metTe: 'De docent probeert de oefeningen bij de praktijk aan te laten sluiten.',
  },
  aanspreken: {
    hoofdzin: 'De rustige vormgeving spreekt mij erg aan.',
    verleden: 'De duidelijke uitleg sprak veel cursisten aan.',
    perfectum: 'Het persoonlijke verhaal heeft het publiek aangesproken.',
    modaal: 'Deze aanpak kan verschillende doelgroepen aanspreken.',
    bijzin: '... omdat de rustige vormgeving mij erg aanspreekt.',
    metTe: 'De campagne probeert jonge kiezers aan te spreken.',
  },
  aansturen: {
    hoofdzin: 'Zij stuurt een internationaal team van ontwerpers aan.',
    verleden: 'Hij stuurde jarenlang de technische afdeling aan.',
    perfectum: 'De projectleider heeft het team op afstand aangestuurd.',
    modaal: 'Een ervaren manager kan meerdere teams aansturen.',
    bijzin: '... omdat zij een internationaal team aanstuurt.',
    metTe: 'De organisatie zoekt iemand om het programma aan te sturen.',
  },
  aantonen: {
    hoofdzin: 'De meting toont aan dat het verbruik is gedaald.',
    verleden: 'Het onderzoek toonde aan dat de methode betrouwbaar was.',
    perfectum: 'De onderzoekers hebben de samenhang duidelijk aangetoond.',
    modaal: 'Nieuwe cijfers kunnen aantonen dat de maatregel werkt.',
    bijzin: '... omdat de meting aantoont dat het verbruik is gedaald.',
    metTe: 'Het team probeert met aanvullende gegevens aan te tonen dat de aanpak werkt.',
  },
  aanvoelen: {
    hoofdzin: 'Zij voelt goed aan wanneer een groep extra uitleg nodig heeft.',
    verleden: 'De docent voelde aan dat de groep onzeker was.',
    perfectum: 'Zij heeft goed aangevoeld wat de deelnemers nodig hadden.',
    modaal: 'Een ervaren begeleider kan spanningen snel aanvoelen.',
    bijzin: '... omdat zij goed aanvoelt wanneer extra uitleg nodig is.',
    metTe: 'De coach probeert aan te voelen hoeveel steun iemand nodig heeft.',
  },
  aanvangen: {
    hoofdzin: 'De vergadering vangt om negen uur aan.',
    verleden: 'De ceremonie ving precies op tijd aan.',
    perfectum: 'De werkzaamheden zijn vorige maand aangevangen.',
    modaal: 'De volgende fase kan na de zomer aanvangen.',
    bijzin: '... omdat de vergadering om negen uur aanvangt.',
    metTe: 'De organisatie is van plan de werkzaamheden in september aan te vangen.',
  },
  aanvechten: {
    hoofdzin: 'De onderneming vecht de boete bij de rechter aan.',
    verleden: 'De advocaat vocht het besluit met succes aan.',
    perfectum: 'De bewoners hebben de vergunning aangevochten.',
    modaal: 'Je kunt deze beslissing binnen zes weken aanvechten.',
    bijzin: '... omdat de onderneming de boete bij de rechter aanvecht.',
    metTe: 'De advocaat adviseert de cliënt het besluit aan te vechten.',
  },
  aanzuigen: {
    hoofdzin: 'De pomp zuigt water uit de tank aan.',
    verleden: 'De ventilator zoog koude lucht van buiten aan.',
    perfectum: 'Het systeem heeft voldoende koelwater aangezogen.',
    modaal: 'De pomp kan water uit een lager reservoir aanzuigen.',
    bijzin: '... omdat de pomp water uit de tank aanzuigt.',
    metTe: 'De installatie gebruikt een ventilator om frisse lucht aan te zuigen.',
  },
  aanstaan: {
    hoofdzin: 'Die harde muziek staat mij niet aan.',
    verleden: 'Die harde muziek stond mij vroeger ook niet aan.',
    perfectum: 'Die houding heeft mij nooit aangestaan.',
    modaal: 'Zo’n dwingende toon kan veel mensen niet aanstaan.',
    bijzin: '... omdat die harde muziek mij niet aanstaat.',
    metTe: 'Die harde muziek lijkt mij niet aan te staan.',
  },
  inschrijven: {
    hoofdzin: 'Ik schrijf me vandaag in voor de taalcursus.',
    verleden: 'Ik schreef me vorige week in voor de opleiding.',
    perfectum: 'Ik heb me online voor het examen ingeschreven.',
    modaal: 'Je kunt je tot vrijdag voor de workshop inschrijven.',
    bijzin: '... omdat ik me voor de avondcursus inschrijf.',
    metTe: 'Vergeet niet om je voor de bijeenkomst in te schrijven.',
  },
  achterstaan: {
    hoofdzin: 'Het team staat na de eerste helft met 0-2 achter.',
    verleden: 'Het team stond na de eerste helft met 0-2 achter.',
    perfectum: 'Het team heeft bijna de hele wedstrijd achtergestaan.',
    modaal: 'Een regio kan economisch bij het landelijke gemiddelde achterstaan.',
    bijzin: '... omdat het team na de eerste helft met 0-2 achterstaat.',
    metTe: 'Het is moeilijk om na een vroege tegengoal niet achter te staan.',
  },
  zwemmen: {
    hoofdzin: 'Zij zwemt iedere woensdag in het gemeentelijke zwembad.',
    verleden: 'Ik zwom gisteren een kilometer zonder te stoppen.',
    perfectum: 'We hebben vanmorgen een uur in zee gezwommen.',
    modaal: 'De kinderen kunnen inmiddels zelfstandig zwemmen.',
    bijzin: '... omdat hij voor de wedstrijd dagelijks zwemt.',
  },
};

export const a2SentencePatternOverrides = {
  "aandoen": {
    "hoofdzin": "Ik doe mijn regenjas aan voordat ik naar buiten ga.",
    "verleden": "Zij deed gisteravond het licht in de keuken aan.",
    "perfectum": "Ik heb vanmorgen mijn warme trui aangedaan.",
    "modaal": "Je kunt voor de wandeling stevige schoenen aandoen.",
    "bijzin": "... omdat hij voor de wandeling stevige schoenen aandoet.",
    "metTe": "Vergeet niet om buiten een warme jas aan te doen."
  },
  "aannemen": {
    "hoofdzin": "Zij neemt het aanbod na rustig overleg aan.",
    "verleden": "Het bedrijf nam vorige maand twee nieuwe medewerkers aan.",
    "perfectum": "Ik heb het pakket bij de voordeur aangenomen.",
    "modaal": "Je kunt het voorstel onder deze voorwaarden aannemen.",
    "bijzin": "... omdat de manager alleen ervaren kandidaten aanneemt.",
    "metTe": "Hij besloot het aanbod uiteindelijk aan te nemen."
  },
  "aanraden": {
    "hoofdzin": "De huisarts raadt mij aan om elke dag te wandelen.",
    "verleden": "De docent raadde ons een eenvoudig woordenboek aan.",
    "perfectum": "Mijn collega heeft mij die taalcursus aangeraden.",
    "modaal": "Ik kan deze oefening aan beginnende cursisten aanraden.",
    "bijzin": "... omdat de specialist voldoende rust aanraadt."
  },
  "aantrekken": {
    "hoofdzin": "Ik trek mijn jas aan voordat ik naar buiten ga.",
    "verleden": "Zij trok voor het gesprek een nette blouse aan.",
    "perfectum": "Hij heeft zijn nieuwe wandelschoenen aangetrokken.",
    "modaal": "Je kunt voor de wandeling stevige schoenen aantrekken.",
    "bijzin": "... omdat zij voor het feest een mooie jurk aantrekt.",
    "metTe": "Hij probeert zich de kritiek niet persoonlijk aan te trekken."
  },
  "afspreken": {
    "hoofdzin": "We spreken morgen om negen uur bij het station af.",
    "verleden": "We spraken gisteren een nieuwe datum af.",
    "perfectum": "Ik heb met de verhuurder een nieuwe datum afgesproken.",
    "modaal": "We kunnen voor volgende week een overlegmoment afspreken.",
    "bijzin": "... omdat we de tijd vooraf afspreken.",
    "metTe": "Vergeet niet om een duidelijke ontmoetingsplaats af te spreken."
  },
  "annuleren": {
    "hoofdzin": "De organisatie annuleert de bijeenkomst vanwege het slechte weer.",
    "verleden": "De luchtvaartmaatschappij annuleerde gisteren drie vluchten.",
    "perfectum": "Ik heb mijn reservering kosteloos geannuleerd.",
    "modaal": "Je kunt de afspraak tot vierentwintig uur vooraf annuleren.",
    "bijzin": "... omdat de arts alle afspraken van vanmiddag annuleert."
  },
  "bestellen": {
    "hoofdzin": "We bestellen vanavond twee vegetarische maaltijden.",
    "verleden": "Zij bestelde vorige week een nieuwe bureaustoel.",
    "perfectum": "Ik heb de benodigde onderdelen online besteld.",
    "modaal": "Je kunt dit boek rechtstreeks bij de uitgever bestellen.",
    "bijzin": "... omdat het restaurant de ingrediënten dagelijks bestelt."
  },
  "bezorgen": {
    "hoofdzin": "De koerier bezorgt het pakket morgen bij de buren.",
    "verleden": "De opmerking bezorgde haar een ongemakkelijk gevoel.",
    "perfectum": "De apotheek heeft de medicijnen thuis bezorgd.",
    "modaal": "De winkel kan de bestelling dezelfde dag bezorgen.",
    "bijzin": "... omdat deze situatie veel inwoners zorgen bezorgt."
  },
  "doorgaan": {
    "hoofdzin": "We gaan na de pauze door.",
    "verleden": "We gingen na de pauze door.",
    "perfectum": "We zijn na de pauze doorgegaan.",
    "modaal": "We kunnen na de pauze doorgaan.",
    "bijzin": "... omdat we na de pauze doorgaan.",
    "metTe": "We besluiten na de pauze door te gaan."
  },
  "durven": {
    "hoofdzin": "Ik durf tijdens de les een vraag te stellen.",
    "verleden": "Zij durfde de fout eerlijk toe te geven.",
    "perfectum": "Hij heeft het probleem niet durven benoemen.",
    "modaal": "Je moet soms je mening durven geven.",
    "bijzin": "... omdat zij haar twijfels openlijk durft uit te spreken.",
    "vraag": "Durf jij alleen met de trein naar een onbekende stad te reizen?"
  },
  "geloven": {
    "hoofdzin": "Ik geloof dat deze aanpak goed werkt.",
    "voorbeeld": "Zij gelooft sterk in gelijke kansen voor iedereen.",
    "context": "De getuige gelooft hem pas nadat hij bewijs laat zien.",
    "verleden": "We geloofden eerst dat de vertraging maar kort zou duren.",
    "perfectum": "Niemand heeft zijn verhaal geloofd."
  },
  "groeien": {
    "hoofdzin": "De plant groeit snel in het zonlicht.",
    "voorbeeld": "De kinderen groeien snel uit hun winterkleren.",
    "context": "De kleine winkel groeit uit tot een groter bedrijf.",
    "verleden": "De vraag naar duurzame energie groeide vorig jaar sterk.",
    "perfectum": "De stad is in tien jaar flink gegroeid."
  },
  "hoeven": {
    "hoofdzin": "Je hoeft vandaag niet te wachten.",
    "verleden": "Je hoefde gisteren niet te wachten.",
    "perfectum": "Je hebt lang niet hoeven wachten.",
    "modaal": "Je zou niet buiten hoeven wachten.",
    "bijzin": "... omdat je niet op de bus hoeft te wachten.",
    "vraag": "Hoef ik niets mee te nemen?"
  },
  "houden": {
    "hoofdzin": "Ik houd de deur voor de bezoeker open.",
    "voorbeeld": "Wij houden volgende maand een informatieavond.",
    "context": "De projectleider houdt rekening met onverwachte vertragingen.",
    "verleden": "Zij hield haar tas stevig vast in de trein.",
    "perfectum": "We hebben ons aan de afspraak gehouden."
  },
  "inschrijven": {
    "hoofdzin": "Ik schrijf me vandaag in voor de taalcursus.",
    "verleden": "Ik schreef me vorige week in voor de opleiding.",
    "perfectum": "Ik heb me online voor het examen ingeschreven.",
    "modaal": "Je kunt je tot vrijdag voor de workshop inschrijven.",
    "bijzin": "... omdat ik me voor de avondcursus inschrijf.",
    "metTe": "Vergeet niet om je voor de bijeenkomst in te schrijven."
  },
  "invullen": {
    "hoofdzin": "Ik vul het aanvraagformulier met de juiste gegevens in.",
    "verleden": "De kandidaat vulde alle verplichte velden zorgvuldig in.",
    "perfectum": "We hebben de enquête volledig ingevuld.",
    "modaal": "Je kunt het formulier digitaal invullen en ondertekenen.",
    "bijzin": "... omdat hij zijn contactgegevens onvolledig invult."
  },
  "klagen": {
    "hoofdzin": "De klant klaagt bij de leverancier over de beschadigde levering.",
    "verleden": "Verschillende bewoners klaagden over nachtelijk lawaai.",
    "perfectum": "Ik heb bij de gemeente over de gevaarlijke situatie geklaagd.",
    "modaal": "Je kunt schriftelijk over de dienstverlening klagen.",
    "bijzin": "... omdat zij al weken over dezelfde storing klaagt."
  },
  "laten": {
    "hoofdzin": "Ik laat mijn fiets bij de winkel repareren.",
    "verleden": "Ik liet mijn fiets gisteren repareren.",
    "perfectum": "Ik heb mijn fiets laten repareren.",
    "modaal": "Je kunt je fiets bij deze winkel laten repareren.",
    "bijzin": "... omdat ik mijn fiets vandaag laat repareren.",
    "gebiedend": "Laat het raam tijdens het koken open."
  },
  "leven": {
    "hoofdzin": "Veel studenten leven tijdelijk van een klein budget.",
    "voorbeeld": "Mijn grootouders leven al vijftig jaar in hetzelfde dorp.",
    "context": "De herinnering aan het feest leeft nog bij veel bewoners.",
    "verleden": "Hij leefde jarenlang in het buitenland.",
    "perfectum": "Zij heeft lang en gezond geleefd."
  },
  "lijken": {
    "hoofdzin": "De oplossing lijkt op het eerste gezicht eenvoudig.",
    "voorbeeld": "Deze twee modellen lijken sterk op elkaar.",
    "context": "Het lijkt erop dat de trein vertraging heeft.",
    "verleden": "De situatie leek gisteren nog rustig.",
    "perfectum": "Het heeft eerst moeilijk geleken om op tijd klaar te zijn."
  },
  "ontvangen": {
    "hoofdzin": "Wij ontvangen morgen familie uit België.",
    "voorbeeld": "De klant ontvangt automatisch een bevestiging per e-mail.",
    "context": "Het voorstel wordt door de medewerkers goed ontvangen.",
    "verleden": "Zij ontving vorige week haar nieuwe pas.",
    "perfectum": "We hebben alle documenten op tijd ontvangen."
  },
  "opnemen": {
    "hoofdzin": "Ik neem het gesprek met mijn telefoon op.",
    "verleden": "Ik nam de uitleg tijdens de les op.",
    "perfectum": "Ik heb het interview gisteren opgenomen.",
    "modaal": "Je kunt de vergadering met deze camera opnemen.",
    "bijzin": "... omdat zij het gesprek voor haar verslag opneemt.",
    "metTe": "Hij besloot het telefoongesprek niet op te nemen."
  },
  "opruimen": {
    "hoofdzin": "Ik ruim na het eten de keuken op.",
    "verleden": "De vrijwilligers ruimden na het feest het plein op.",
    "perfectum": "We hebben alle verhuisdozen opgeruimd.",
    "modaal": "Je kunt deze documenten in de kast opruimen.",
    "bijzin": "... omdat hij zijn werkplek elke vrijdag opruimt."
  },
  "regelen": {
    "hoofdzin": "Ik regel het vervoer naar het vliegveld.",
    "verleden": "Zij regelde gisteren een nieuwe afspraak.",
    "perfectum": "De receptie heeft een extra bed geregeld.",
    "modaal": "Kun jij vervanging voor maandag regelen?",
    "bijzin": "... omdat hij alle vergunningen op tijd regelt."
  },
  "repareren": {
    "hoofdzin": "De monteur repareert de kapotte wasmachine.",
    "verleden": "Zij repareerde gisteren mijn fietslicht.",
    "perfectum": "De loodgieter heeft de lekkende kraan gerepareerd.",
    "modaal": "Kun je dit scherm nog repareren?",
    "bijzin": "... omdat hij oude apparaten zelf repareert."
  },
  "reserveren": {
    "hoofdzin": "Ik reserveer een tafel voor zaterdagavond.",
    "verleden": "Zij reserveerde vorige week twee kaartjes.",
    "perfectum": "We hebben een kamer met ontbijt gereserveerd.",
    "modaal": "Je kunt deze ruimte online reserveren.",
    "bijzin": "... omdat hij altijd ruim van tevoren reserveert."
  },
  "ruilen": {
    "hoofdzin": "Ik ruil mijn boek met Noor.",
    "verleden": "Ik ruilde mijn jas voor een grotere maat.",
    "perfectum": "Ik heb mijn kaartje met Sam geruild.",
    "modaal": "Ik kan dit artikel nog ruilen.",
    "bijzin": "... omdat ik mijn boek met Noor ruil."
  },
  "sluiten": {
    "hoofdzin": "De bibliotheek sluit vandaag om vijf uur.",
    "voorbeeld": "Wilt u het raam sluiten voordat u vertrekt?",
    "context": "Beide partijen sluiten na overleg een overeenkomst.",
    "verleden": "De winkel sloot vorig jaar wegens hoge kosten.",
    "perfectum": "De gemeente heeft het gebouw tijdelijk gesloten."
  },
  "terugbrengen": {
    "hoofdzin": "Ik breng de boeken morgen terug naar de bibliotheek.",
    "verleden": "De chauffeur bracht ons veilig naar huis terug.",
    "perfectum": "We hebben de geleende stoelen teruggebracht.",
    "modaal": "Kun je de sleutel voor vijf uur terugbrengen?",
    "bijzin": "... omdat hij de auto vandaag terugbrengt.",
    "metTe": "Vergeet niet om de badge terug te brengen."
  },
  "trekken": {
    "hoofdzin": "De medewerker trekt de zware deur voorzichtig open.",
    "voorbeeld": "Veel vogels trekken in het najaar naar het zuiden.",
    "context": "De onderzoekers trekken een voorzichtige conclusie uit de cijfers.",
    "verleden": "Het paard trok de kar door het losse zand.",
    "perfectum": "We hebben de kabel door de smalle buis getrokken."
  },
  "uittrekken": {
    "hoofdzin": "Ik trek mijn natte jas bij de ingang uit.",
    "verleden": "De wandelaars trokken hun zware schoenen buiten uit.",
    "perfectum": "Zij heeft voor het onderzoek drie maanden uitgetrokken.",
    "modaal": "Je kunt deze beschermende kleding na de controle uittrekken.",
    "bijzin": "... omdat hij zijn handschoenen binnen meteen uittrekt.",
    "metTe": "De patiënt werd gevraagd zijn jas uit te trekken."
  },
  "veranderen": {
    "hoofdzin": "De planning verandert na overleg met het team.",
    "voorbeeld": "We veranderen de afspraak zodra iedereen kan.",
    "context": "Zijn houding tegenover thuiswerken verandert langzaam.",
    "verleden": "De situatie veranderde binnen enkele weken volledig.",
    "perfectum": "De nieuwe regels hebben onze werkwijze veranderd."
  },
  "verhuizen": {
    "hoofdzin": "Wij verhuizen volgende maand naar een grotere woning.",
    "verleden": "Het bedrijf verhuisde vorig jaar naar een nieuw kantoor.",
    "perfectum": "Mijn buren zijn onlangs naar Eindhoven verhuisd.",
    "modaal": "We kunnen pas na de sleuteloverdracht verhuizen.",
    "bijzin": "... omdat het gezin dichter bij de school verhuist."
  },
  "verliezen": {
    "hoofdzin": "Ik verlies onderweg bijna nooit mijn sleutels.",
    "voorbeeld": "Het team verliest de finale met één punt verschil.",
    "context": "We mogen het doel van het project niet uit het oog verliezen.",
    "verleden": "Zij verloor haar portemonnee in de drukke trein.",
    "perfectum": "De organisatie heeft veel vertrouwen verloren."
  },
  "vliegen": {
    "hoofdzin": "We vliegen morgenochtend rechtstreeks naar Kopenhagen.",
    "verleden": "De piloot vloog vanwege de storm een andere route.",
    "perfectum": "De delegatie is gisteren naar Brussel gevlogen.",
    "modaal": "Je kunt vanaf Eindhoven naar verschillende Europese steden vliegen.",
    "bijzin": "... omdat het vliegtuig vandaag op grotere hoogte vliegt."
  },
  "wijzigen": {
    "hoofdzin": "We wijzigen de datum van de bijeenkomst.",
    "voorbeeld": "Je kunt je adres online wijzigen.",
    "context": "De voorwaarden kunnen zonder voorafgaande aankondiging wijzigen."
  },
  "winnen": {
    "hoofdzin": "Ons team wint de wedstrijd na een spannende verlenging.",
    "voorbeeld": "Met deze aanpassing winnen we dagelijks veel tijd.",
    "context": "Het voorstel wint langzaam aan steun binnen de organisatie.",
    "verleden": "De kandidaat won de verkiezing met een kleine meerderheid.",
    "perfectum": "Zij heeft met haar onderzoek een internationale prijs gewonnen."
  },
  "zullen": {
    "hoofdzin": "Ik zal je morgen bellen.",
    "verleden": "Ik zou je later bellen.",
    "voorstel": "Zullen we na de pauze beginnen?",
    "voorwaarde": "Ik zou komen als ik tijd had.",
    "bijzin": "... omdat ik je morgen zal bellen.",
    "beleefd": "Zou u mij kunnen helpen?"
  },
  "zwemmen": {
    "hoofdzin": "Zij zwemt iedere woensdag in het gemeentelijke zwembad.",
    "verleden": "Ik zwom gisteren een kilometer zonder te stoppen.",
    "perfectum": "We hebben vanmorgen een uur in zee gezwommen.",
    "modaal": "De kinderen kunnen inmiddels zelfstandig zwemmen.",
    "bijzin": "... omdat hij voor de wedstrijd dagelijks zwemt.",
    "richting": "De redders zijn snel naar de overkant gezwommen."
  }
};

export const a2SentencePatternImperativeLabels = {
  "aandoen": "doe je jas aan",
  "aannemen": "neem het aanbod aan",
  "aanraden": "raad deze cursus aan",
  "aantrekken": "trek je jas aan",
  "afspreken": "spreek een tijd af",
  "annuleren": "annuleer de afspraak",
  "bestellen": "bestel het boek online",
  "bezorgen": "bezorg het pakket bij de buren",
  "doorgaan": "ga na de pauze door",
  "durven": "durf de vraag te stellen",
  "geloven": "geloof niet alles meteen",
  "groeien": "niet gebruikelijk bij deze betekenis",
  "hoeven": "niet van toepassing",
  "houden": "houd de deur open",
  "inschrijven": "schrijf je op tijd in",
  "invullen": "vul het formulier volledig in",
  "klagen": "klaag schriftelijk bij de leverancier",
  "laten": "laat het raam open",
  "leven": "leef gezond",
  "lijken": "niet gebruikelijk bij deze betekenis",
  "ontvangen": "ontvang de gasten bij de ingang",
  "opnemen": "neem het gesprek op",
  "opruimen": "ruim je werkplek op",
  "regelen": "regel eerst het vervoer",
  "repareren": "repareer eerst de losse kabel",
  "reserveren": "reserveer minstens een dag vooraf",
  "ruilen": "ruil je kaartje bij de balie",
  "sluiten": "sluit het raam",
  "terugbrengen": "breng de boeken op tijd terug",
  "trekken": "trek de deur voorzichtig open",
  "uittrekken": "trek je jas uit",
  "veranderen": "verander de planning niet zonder overleg",
  "verhuizen": "verhuis pas na de sleuteloverdracht",
  "verliezen": "verlies je toegangspas niet",
  "vliegen": "vlieg rechtstreeks naar je bestemming",
  "wijzigen": "wijzig je gegevens online",
  "winnen": "win vertrouwen met duidelijke uitleg",
  "zullen": "niet van toepassing",
  "zwemmen": "zwem rustig naar de kant"
};

export const verbSentencePatternImperativeLabels = {
  aanstaan: 'niet gebruikelijk bij deze betekenis',
  inschrijven: 'schrijf je op tijd in',
  zwemmen: 'zwem rustig naar de kant',
  ruilen: 'ruil je kaartje bij de balie',
  aanbakken: 'bak het vlees kort aan',
  achterstaan: 'niet gebruikelijk in deze betekenis',
};

const genericExampleMarkers = [
  /In deze situatie/iu,
  /De context maakt duidelijk/iu,
  /We proberen vandaag zorgvuldig/iu,
  /De zin laat zien/iu,
  /Controleer bij/iu,
  /De spreker gebruikt/iu,
  /voor de beschreven handeling of toestand/iu,
  /in welke betekenis .* wordt gebruikt/iu,
  /^In deze context gebruiken we/iu,
  /^Het werkwoord\b/iu,
  /^Deze zin gebruikt\b/iu,
  /^In deze context is\b/iu,
  /^We moesten de handeling volledig\b/iu,
  /^Hier wordt\b/iu,
];

const subjectPrefixes = ['ik ', 'jij ', 'hij/zij ', 'wij ', 'jullie ', 'zij '];

function stripSentencePunctuation(value) {
  return String(value || '').trim().replace(/[.!?]+$/u, '');
}

function normaliseToken(value) {
  return String(value || '')
    .toLocaleLowerCase('nl-NL')
    .replace(/^[“”‘’'"([{]+|[“”‘’'"\])},:;]+$/gu, '');
}

function sentenceTokens(value) {
  return stripSentencePunctuation(value).split(/\s+/u).filter(Boolean);
}

function formWords(value) {
  const text = String(value || '').toLocaleLowerCase('nl-NL');
  const prefix = subjectPrefixes.find((candidate) => text.startsWith(candidate));
  return (prefix ? text.slice(prefix.length) : text).split(/\s+/u).filter(Boolean);
}

function isUsefulExample(value) {
  const text = String(value || '').trim();
  return text.length >= 12 && !genericExampleMarkers.some((pattern) => pattern.test(text));
}

function isUsefulExampleForVerb(value, verb) {
  // Sommige oudere reviewbatches bewaren de juiste argumenten in een
  // fout geordende modale voorbeeldzin ("Je kunt VERB object"). Die zin
  // mag niet rechtstreeks worden getoond, maar levert wel een betrouwbaar
  // valentieframe op. De generator zet het object daarna vóór de infinitief.
  return isUsefulExample(value) && Boolean(verb?.infinitive);
}

function inferPatternSeparability(verb, examples) {
  if (!verb.separable || !verb.prefix) return false;
  const prefix = normaliseToken(verb.prefix);
  const rootForms = [...(verb.presentForms || []), ...(verb.pastForms || [])]
    .map((value) => formWords(value)[0])
    .filter(Boolean);

  let joinedEvidence = 0;
  let splitEvidence = 0;
  const uniqueRoots = [...new Set(rootForms)];
  for (const example of examples) {
    const tokens = sentenceTokens(example).map(normaliseToken);
    for (const root of uniqueRoots) {
      const rootIndex = tokens.indexOf(root);
      if (rootIndex >= 0 && tokens.slice(rootIndex + 1).includes(prefix)) splitEvidence += 2;

      // Een infinitief op -en kan toevallig gelijk zijn aan prefix + een
      // meervoudsvorm. Alleen duidelijke finiete vormen tellen als bewijs
      // dat het werkwoord in deze betekenis niet scheidbaar is.
      if (!root.endsWith('en') && tokens.includes(`${prefix}${root}`)) joinedEvidence += 1;
    }
  }
  if (splitEvidence > 0) return true;
  if (joinedEvidence > 0) return false;
  return true;
}


const frontedAdjunctPattern = /^(?:na|voor|in|op|door|met|zonder|bij|uit|tijdens|sinds|vandaag|gisteren|morgen|straks|daarna|hier|daar)\b/iu;

function isPlausibleSubject(subject) {
  const text = String(subject || '').trim();
  if (!text || text.split(/\s+/u).length > 6 || /,$/u.test(text)) return false;
  if (frontedAdjunctPattern.test(text) && !/^(?:Hier|Daar)\s+(?:is|zijn|staat|staan|ligt|liggen)\b/iu.test(text)) return false;
  return true;
}

function replaceTemporalContext(value, target) {
  let text = String(value || '');
  if (target === 'past' || target === 'perfect') {
    text = text
      .replace(/\bmorgen\b/giu, 'gisteren')
      .replace(/\bvolgende week\b/giu, 'vorige week')
      .replace(/\bvolgend jaar\b/giu, 'vorig jaar')
      .replace(/\bstraks\b/giu, 'eerder');
  }
  return text;
}

function subjectPerson(subject, matchedIndex = 2) {
  const first = normaliseToken(sentenceTokens(subject)[0]);
  if (first === 'ik') return 0;
  if (['jij', 'je'].includes(first)) return 1;
  if (['wij', 'we', 'jullie'].includes(first)) return 3;
  if (first === 'zij' || first === 'ze') return matchedIndex >= 3 ? 3 : 2;
  if (['hij', 'het', 'u'].includes(first)) return 2;
  return matchedIndex >= 3 ? 3 : 2;
}

function finiteSurface(verb, field, person, patternSeparable) {
  const forms = verb[field] || [];
  const source = forms[person] || forms[2] || forms[0] || '';
  const words = formWords(source);
  if (!words.length) return { finite: '', particle: '' };
  if (verb.separable && verb.prefix) {
    const particle = normaliseToken(verb.prefix);
    const root = words[0];
    if (!patternSeparable) return { finite: `${particle}${root}`, particle: '' };
    return { finite: root, particle };
  }
  return { finite: words.join(' '), particle: '' };
}

function subordinateSurface(verb, person, patternSeparable) {
  const surface = finiteSurface(verb, 'presentForms', person, patternSeparable);
  return surface.particle ? `${surface.particle}${surface.finite}` : surface.finite;
}

function teInfinitive(verb, patternSeparable) {
  if (verb.separable && verb.prefix && patternSeparable) {
    return `${verb.prefix} te ${verb.root || verb.infinitive.slice(String(verb.prefix).length)}`;
  }
  return `te ${verb.infinitive}`;
}

function auxiliaryFor(verb, person) {
  const useZijn = String(verb.auxiliary || '').split('/')[0] === 'zijn';
  if (useZijn) return person === 0 ? 'ben' : person === 1 ? 'bent' : person === 2 ? 'is' : 'zijn';
  return person === 0 ? 'heb' : person === 1 ? 'hebt' : person === 2 ? 'heeft' : 'hebben';
}

function auxiliaryForFrame(verb, frame) {
  const configured = String(verb.auxiliary || '');
  if (!configured.includes('/')) return auxiliaryFor(verb, frame.person);
  const subject = String(frame.subject || '');
  const inanimate = /^(?:de|het|een|dit|dat|deze|die)\s/iu.test(subject)
    && !/^(?:de|het|een)\s+(?:man|vrouw|jongen|meisje|medewerker|docent|arts|kok|bestuurder|onderzoeker|schrijver|klant|reiziger|directeur|organisatie|politie|gemeente|overheid|commissie|rechter|ploeg|team)\b/iu.test(subject);
  const useZijn = inanimate && ['verandering', 'beweging', 'toestand'].includes(String(verb.semantic || ''));
  if (useZijn) return frame.person === 0 ? 'ben' : frame.person === 1 ? 'bent' : frame.person === 2 ? 'is' : 'zijn';
  return frame.person === 0 ? 'heb' : frame.person === 1 ? 'hebt' : frame.person === 2 ? 'heeft' : 'hebben';
}

function modalFor(person) {
  return person >= 3 ? 'kunnen' : person === 1 ? 'kunt' : 'kan';
}

function proberenFor(person) {
  return person === 0 ? 'probeer' : person >= 3 ? 'proberen' : 'probeert';
}

function lijkenFor(person) {
  return person === 0 ? 'lijk' : person >= 3 ? 'lijken' : 'lijkt';
}

function lowerInitial(value) {
  const text = String(value || '');
  return text ? text[0].toLocaleLowerCase('nl-NL') + text.slice(1) : text;
}

function joinSentence(parts) {
  return parts.filter((part) => String(part || '').trim()).join(' ').replace(/\s+/gu, ' ').trim() + '.';
}

function parseFiniteFrame(example, verb, patternSeparable) {
  const tokens = sentenceTokens(example);
  const lower = tokens.map(normaliseToken);
  const candidates = [];

  for (const [field, kind] of [['presentForms', 'present'], ['pastForms', 'past']]) {
    for (let index = 0; index < (verb[field] || []).length; index += 1) {
      const surface = finiteSurface(verb, field, index, patternSeparable);
      if (!surface.finite) continue;
      for (let finiteIndex = 1; finiteIndex < lower.length; finiteIndex += 1) {
        if (lower[finiteIndex] !== normaliseToken(surface.finite)) continue;
        let particleIndex = -1;
        if (surface.particle) {
          for (let cursor = finiteIndex + 1; cursor < lower.length; cursor += 1) {
            if (lower[cursor] === normaliseToken(surface.particle)) particleIndex = cursor;
          }
          if (particleIndex < 0) continue;
        }
        const subject = tokens.slice(0, finiteIndex).join(' ');
        if (!isPlausibleSubject(subject)) continue;
        // Een meervoudsvorm is vaak gelijk aan de infinitief. In een modale
        // constructie ("Kun je zeggen ...") is die vorm geen persoonsvorm
        // en mag de modale groep dus niet als onderwerp worden gelezen.
        if (/\b(?:kan|kun|kunt|kunnen|moet|moeten|mag|mogen|wil|wilt|willen|zal|zullen|te)\s*$/iu.test(subject)) continue;
        const beforeParticle = surface.particle
          ? tokens.slice(finiteIndex + 1, particleIndex).join(' ')
          : tokens.slice(finiteIndex + 1).join(' ');
        let afterParticle = surface.particle ? tokens.slice(particleIndex + 1).join(' ') : '';
        if (/^(?:en|maar|want|dus)\b/iu.test(afterParticle)) afterParticle = '';
        const person = subjectPerson(subject, index);
        candidates.push({ kind, person, subject, beforeParticle, afterParticle, patternSeparable, observedFinite: tokens[finiteIndex], original: example });
      }
    }
  }

  candidates.sort((left, right) => {
    const leftNatural = left.beforeParticle.length + left.afterParticle.length;
    const rightNatural = right.beforeParticle.length + right.afterParticle.length;
    return rightNatural - leftNatural;
  });
  return candidates[0] || null;
}

function parseInvertedFiniteFrame(example, verb, patternSeparable) {
  const tokens = sentenceTokens(example);
  const lower = tokens.map(normaliseToken);
  const pronouns = new Set(['ik', 'jij', 'je', 'hij', 'zij', 'ze', 'het', 'wij', 'we', 'jullie', 'u']);

  for (const [field, kind] of [['presentForms', 'present'], ['pastForms', 'past']]) {
    for (let index = 0; index < (verb[field] || []).length; index += 1) {
      const surface = finiteSurface(verb, field, index, patternSeparable);
      if (!surface.finite) continue;
      for (let finiteIndex = 0; finiteIndex < lower.length - 1; finiteIndex += 1) {
        if (lower[finiteIndex] !== normaliseToken(surface.finite)) continue;
        if (!pronouns.has(lower[finiteIndex + 1])) continue;
        const subject = tokens[finiteIndex + 1];
        let particleIndex = -1;
        if (surface.particle) {
          for (let cursor = finiteIndex + 2; cursor < lower.length; cursor += 1) {
            if (lower[cursor] === normaliseToken(surface.particle)) particleIndex = cursor;
          }
          if (particleIndex < 0) continue;
        }
        const front = tokens.slice(0, finiteIndex).join(' ');
        const beforeParticle = [
          tokens.slice(finiteIndex + 2, particleIndex >= 0 ? particleIndex : tokens.length).join(' '),
          front,
        ].filter(Boolean).join(' ');
        const afterParticle = particleIndex >= 0 ? tokens.slice(particleIndex + 1).join(' ') : '';
        if (!beforeParticle && !afterParticle) continue;
        return {
          kind,
          person: subjectPerson(subject, index),
          subject,
          beforeParticle,
          afterParticle,
          patternSeparable,
          observedFinite: tokens[finiteIndex],
          original: example,
        };
      }
    }
  }
  return null;
}

function parsePassiveFrame(example, verb, patternSeparable) {
  const tokens = sentenceTokens(example);
  const lower = tokens.map(normaliseToken);
  const participleIndex = lower.indexOf(normaliseToken(verb.participle));
  if (participleIndex <= 1) return null;
  const passiveAuxiliaries = new Set(['word', 'wordt', 'worden', 'werd', 'werden']);
  let auxiliaryIndex = -1;
  for (let index = 1; index < participleIndex; index += 1) {
    if (passiveAuxiliaries.has(lower[index])) {
      auxiliaryIndex = index;
      break;
    }
  }
  if (auxiliaryIndex < 1) return null;
  const subject = tokens.slice(0, auxiliaryIndex).join(' ');
  if (!isPlausibleSubject(subject)) return null;
  const complement = [
    tokens.slice(auxiliaryIndex + 1, participleIndex).join(' '),
    tokens.slice(participleIndex + 1).join(' '),
  ].filter(Boolean).join(' ');
  const person = subjectPerson(subject, lower[auxiliaryIndex].endsWith('en') ? 3 : 2);
  return {
    kind: 'passive',
    voice: 'passive',
    person,
    subject,
    beforeParticle: complement,
    afterParticle: '',
    patternSeparable,
    original: example,
  };
}

function parseModalInversionFrame(example, verb, patternSeparable) {
  const tokens = sentenceTokens(example);
  const lower = tokens.map(normaliseToken);
  const infinitiveIndex = lower.indexOf(normaliseToken(verb.infinitive));
  if (infinitiveIndex < 2) return null;
  const modals = new Set(['kan', 'kun', 'kunt', 'kunnen', 'moet', 'moeten', 'mag', 'mogen', 'wil', 'wilt', 'willen', 'zal', 'zullen']);
  if (!modals.has(lower[0])) return null;
  const subject = tokens[1];
  const complement = [
    tokens.slice(2, infinitiveIndex).join(' '),
    tokens.slice(infinitiveIndex + 1).join(' '),
  ].filter(Boolean).join(' ');
  if (!complement) return null;
  return {
    kind: 'modal',
    person: subjectPerson(subject, lower[0].endsWith('en') ? 3 : 2),
    subject,
    beforeParticle: complement,
    afterParticle: '',
    patternSeparable,
    original: example,
  };
}

function parsePerfectFrame(example, verb, patternSeparable) {
  const tokens = sentenceTokens(example);
  const lower = tokens.map(normaliseToken);
  const participleIndex = lower.indexOf(normaliseToken(verb.participle));
  if (participleIndex <= 1) return null;
  const auxiliaries = new Set(['heb', 'hebt', 'heeft', 'hebben', 'ben', 'bent', 'is', 'zijn']);
  let auxiliaryIndex = -1;
  for (let index = 1; index < participleIndex; index += 1) {
    if (auxiliaries.has(lower[index])) {
      auxiliaryIndex = index;
      break;
    }
  }
  if (auxiliaryIndex < 1) return null;
  const subject = tokens.slice(0, auxiliaryIndex).join(' ');
  if (!isPlausibleSubject(subject)) return null;
  const complement = [
    tokens.slice(auxiliaryIndex + 1, participleIndex).join(' '),
    tokens.slice(participleIndex + 1).join(' '),
  ].filter(Boolean).join(' ');
  const person = subjectPerson(subject, lower[auxiliaryIndex].endsWith('en') ? 3 : 2);
  return { kind: 'perfect', person, subject, beforeParticle: complement, afterParticle: '', patternSeparable, original: example };
}

function parseModalFrame(example, verb, patternSeparable) {
  const tokens = sentenceTokens(example);
  const lower = tokens.map(normaliseToken);
  const infinitiveIndex = lower.indexOf(normaliseToken(verb.infinitive));
  if (infinitiveIndex <= 1) return null;
  const modals = new Set(['kan', 'kun', 'kunt', 'kunnen', 'moet', 'moeten', 'mag', 'mogen', 'wil', 'wilt', 'willen', 'zal', 'zullen']);
  let modalIndex = -1;
  for (let index = 1; index < infinitiveIndex; index += 1) {
    if (modals.has(lower[index])) {
      modalIndex = index;
      break;
    }
  }
  if (modalIndex < 1) return null;
  const subject = tokens.slice(0, modalIndex).join(' ');
  if (!subject || subject.split(/\s+/u).length > 6 || /,$/u.test(subject)) return null;
  const complement = [
    tokens.slice(modalIndex + 1, infinitiveIndex).join(' '),
    tokens.slice(infinitiveIndex + 1).join(' '),
  ].filter(Boolean).join(' ');
  const person = subjectPerson(subject, lower[modalIndex].endsWith('en') ? 3 : 2);
  return { kind: 'modal', person, subject, beforeParticle: complement, afterParticle: '', patternSeparable, original: example };
}

function parseImperativeFrame(example, verb, patternSeparable) {
  const tokens = sentenceTokens(example);
  const lower = tokens.map(normaliseToken);
  if (!tokens.length) return null;
  const surface = finiteSurface(verb, 'presentForms', 0, patternSeparable);
  const imperative = normaliseToken(verb.imperative || surface.finite);
  const imperativeRoot = patternSeparable && verb.separable ? normaliseToken(surface.finite) : imperative;
  if (![imperative, imperativeRoot].includes(lower[0])) return null;
  let particleIndex = -1;
  if (patternSeparable && verb.prefix) {
    for (let index = 1; index < lower.length; index += 1) {
      if (lower[index] === normaliseToken(verb.prefix)) particleIndex = index;
    }
  }
  const beforeParticle = particleIndex >= 0 ? tokens.slice(1, particleIndex).join(' ') : tokens.slice(1).join(' ');
  const afterParticle = particleIndex >= 0 ? tokens.slice(particleIndex + 1).join(' ') : '';
  if (!beforeParticle && !afterParticle) return null;
  return { kind: 'imperative', person: 1, subject: 'Je', beforeParticle, afterParticle, patternSeparable, original: example };
}

function selectFrame(verb) {
  const examples = (verb.examples || []).filter((example) => isUsefulExampleForVerb(example, verb));
  if (!examples.length) return null;
  const patternSeparable = inferPatternSeparability(verb, examples);
  const candidates = [];
  const weights = new Map([
    [parseFiniteFrame, 45],
    [parseInvertedFiniteFrame, 42],
    [parseModalFrame, 38],
    [parseModalInversionFrame, 36],
    [parsePerfectFrame, 32],
    [parsePassiveFrame, 28],
    [parseImperativeFrame, 24],
  ]);

  for (let exampleIndex = 0; exampleIndex < examples.length; exampleIndex += 1) {
    const example = examples[exampleIndex];
    for (const parser of weights.keys()) {
      const frame = parser(example, verb, patternSeparable);
      if (!frame || (!frame.beforeParticle && !frame.afterParticle)) continue;
      const complement = `${frame.beforeParticle} ${frame.afterParticle}`.trim();
      const kindBonus = frame.kind === 'present' ? 20 : frame.kind === 'modal' ? 15 : frame.kind === 'perfect' ? 10 : 0;
      const conjunctionPenalty = /\b(?:en|maar|want|dus)\b/iu.test(complement) ? 25 : 0;
      const lengthPenalty = complement.split(/\s+/u).length > 14 ? 15 : 0;
      frame.score = weights.get(parser) + kindBonus - conjunctionPenalty - lengthPenalty - exampleIndex;
      frame.parser = parser.name;
      candidates.push(frame);
    }
  }
  candidates.sort((left, right) => right.score - left.score);
  // Een natuurlijke verleden-, perfectum- of modale voorbeeldzin bevat even
  // bruikbare valentie-informatie als een hoofdzin in het presens. We kiezen
  // daarom de best scorende betrouwbare kandidaat, met een lichte voorkeur
  // voor een expliciete finiete hoofdzin.
  const selected = candidates.find((candidate) => candidate.parser === 'parseFiniteFrame' && candidate.kind === 'present')
    || candidates.find((candidate) => candidate.parser === 'parseFiniteFrame' && candidate.kind === 'past')
    || candidates.find((candidate) => candidate.parser === 'parseModalFrame' || candidate.parser === 'parseModalInversionFrame')
    || candidates.find((candidate) => candidate.parser === 'parsePerfectFrame')
    || candidates.find((candidate) => candidate.parser === 'parsePassiveFrame')
    || candidates.find((candidate) => candidate.parser === 'parseImperativeFrame')
    || null;
  if (selected) {
    selected.finiteEvidence = { present: new Map(), past: new Map() };
    for (const candidate of candidates) {
      if ((candidate.kind === 'present' || candidate.kind === 'past') && candidate.observedFinite) {
        selected.finiteEvidence[candidate.kind].set(candidate.person, candidate.observedFinite);
      }
    }
  }
  return selected;
}


const inferredSeparableVerbs = new Map(Object.entries({
  afkoelen: ['af', 'koelen'],
  afmelden: ['af', 'melden'],
  afrekenen: ['af', 'rekenen'],
  afstemmen: ['af', 'stemmen'],
  doorwerken: ['door', 'werken'],
  meemaken: ['mee', 'maken'],
  omruilen: ['om', 'ruilen'],
  omzetten: ['om', 'zetten'],
  opbouwen: ['op', 'bouwen'],
  openmaken: ['open', 'maken'],
  ophalen: ['op', 'halen'],
  opladen: ['op', 'laden'],
  opleveren: ['op', 'leveren'],
  oplossen: ['op', 'lossen'],
  oppassen: ['op', 'passen'],
  opzeggen: ['op', 'zeggen'],
  rondreizen: ['rond', 'reizen'],
  samenwerken: ['samen', 'werken'],
  terugkoppelen: ['terug', 'koppelen'],
  toepassen: ['toe', 'passen'],
  uitleggen: ['uit', 'leggen'],
  uitvoeren: ['uit', 'voeren'],
  uitwerken: ['uit', 'werken'],
  uitzetten: ['uit', 'zetten'],
  vastleggen: ['vast', 'leggen'],
  vaststellen: ['vast', 'stellen'],
  voorbereiden: ['voor', 'bereiden'],
  voorstellen: ['voor', 'stellen'],
  voortplanten: ['voort', 'planten'],
  voortzetten: ['voort', 'zetten'],
}));

const patternParticipleCorrections = new Map(Object.entries({
  interpreteren: 'geïnterpreteerd',
  integreren: 'geïntegreerd',
  informeren: 'geïnformeerd',
  initiëren: 'geïnitieerd',
  irriteren: 'geïrriteerd',
}));

function regularSuffix(stem) {
  const last = String(stem || '').slice(-1).toLocaleLowerCase('nl-NL');
  return 'tkfschp'.includes(last) ? 't' : 'd';
}

function regularPast(stem) {
  const suffix = regularSuffix(stem);
  return `${stem}${suffix === 't' ? 'te' : 'de'}`;
}

function regularParticiple(stem, prefix = '') {
  const suffix = regularSuffix(stem);
  const ending = stem.endsWith('d') || stem.endsWith('t') ? stem : `${stem}${suffix}`;
  return `${prefix}ge${ending}`;
}

function replaceSubjectPrefix(value, replacement) {
  const words = String(value || '').split(/\s+/u);
  if (!words.length) return value;
  return [words[0], replacement, ...words.slice(2)].join(' ');
}

function patternVerbView(verb, atlasByInfinitive) {
  const inferred = inferredSeparableVerbs.get(verb.infinitive);
  if (!inferred) {
    const view = { ...verb };
    view.participle = patternParticipleCorrections.get(verb.infinitive)
      || String(verb.participle || '').replace(/^gei(?=[a-z])/u, 'geï');
    return view;
  }

  const [prefix, root] = inferred;
  const base = atlasByInfinitive.get(root);
  const sourceStem = String(verb.stem || '').startsWith(prefix)
    ? String(verb.stem).slice(prefix.length)
    : String(base?.stem || root.replace(/en$/u, ''));
  const stem = base?.stem || sourceStem;
  const presentForms = base?.presentForms
    ? base.presentForms.map((form) => {
      const words = formWords(form);
      return `${String(form).split(/\s+/u)[0]} ${words[0]} ${prefix}`;
    })
    : [
      `ik ${stem} ${prefix}`,
      `jij ${stem.endsWith('t') ? stem : `${stem}t`} ${prefix}`,
      `hij/zij ${stem.endsWith('t') ? stem : `${stem}t`} ${prefix}`,
      `wij ${root} ${prefix}`,
      `jullie ${root} ${prefix}`,
      `zij ${root} ${prefix}`,
    ];
  const basePast = base?.past || (verb.regularity === 'regelmatig' ? regularPast(stem) : String(verb.past || '').replace(prefix, ''));
  const basePastPlural = base?.pastPlural || `${basePast}n`;
  const pastForms = [
    `ik ${basePast} ${prefix}`,
    `jij ${basePast} ${prefix}`,
    `hij/zij ${basePast} ${prefix}`,
    `wij ${basePastPlural} ${prefix}`,
    `jullie ${basePastPlural} ${prefix}`,
    `zij ${basePastPlural} ${prefix}`,
  ];
  const baseParticiple = base?.participle
    || (verb.regularity === 'regelmatig' ? regularParticiple(stem) : String(verb.participle || '').replace(/^ge/u, ''));
  const participle = patternParticipleCorrections.get(verb.infinitive)
    || (baseParticiple.startsWith('ge') ? `${prefix}${baseParticiple}` : `${prefix}${baseParticiple}`);

  return {
    ...verb,
    separable: true,
    prefix,
    root,
    stem,
    presentForms,
    pastForms,
    past: `${basePast} ${prefix}`,
    pastPlural: `${basePastPlural} ${prefix}`,
    pastSubordinate: `${prefix}${basePast}`,
    participle,
    imperative: `${stem} ${prefix}`,
  };
}

const semanticObjectRules = [
  [/godheid|geloof|religie|bidden/iu, ['De gelovige', 'een gebed aandachtig']],
  [/patiënt|medicijn|wond|letsel|ziekte|long|adem|lichaam|bloed/iu, ['De arts', 'de patiënt zorgvuldig']],
  [/gerecht|voedsel|saus|brood|vlees|groente|maaltijd|keuken|pan/iu, ['De kok', 'het gerecht zorgvuldig']],
  [/bedrag|geld|schuld|rekening|betaling|kosten|prijs|financier|belasting/iu, ['De organisatie', 'het afgesproken bedrag op tijd']],
  [/document|formulier|rapport|aanvraag|dossier|brief|tekst|gegevens|informatie|code|registratie/iu, ['De medewerker', 'het document zorgvuldig']],
  [/voorstel|plan|besluit|argument|standpunt|verklaring|idee|methode|regel|beleid|maatregel/iu, ['De commissie', 'het voorstel grondig']],
  [/machine|apparaat|systeem|installatie|software|netwerk|motor|sensor|kabel|verbinding|onderdeel/iu, ['De technicus', 'het systeem veilig']],
  [/ruimte|kamer|gebouw|huis|muur|dak|vloer|grond|oppervlak|materiaal|hout|metaal/iu, ['De vakman', 'het materiaal zorgvuldig']],
  [/leerling|cursist|opleiding|les|examen|antwoord|vraag|opdracht/iu, ['De cursist', 'de opdracht zorgvuldig']],
  [/klant|bezoeker|collega|werknemer|deelnemer|persoon|iemand|kind/iu, ['De begeleider', 'de deelnemer zorgvuldig']],
  [/geluid|muziek|stem|boodschap|gesprek|woorden|communicatie/iu, ['De spreker', 'de boodschap duidelijk']],
  [/onderzoek|analyse|meting|resultaat|cijfers|bewijs/iu, ['De onderzoeker', 'de resultaten zorgvuldig']],
  [/plant|boom|bloem|weefsel|bot|haar|vacht/iu, ['De verzorger', 'het materiaal voorzichtig']],
  [/voertuig|auto|fiets|trein|schip|boot|vliegtuig|route|reis|bestemming/iu, ['De bestuurder', 'het voertuig voorzichtig']],
  [/product|goederen|pakket|bestelling|voorraad|levering/iu, ['De leverancier', 'de bestelling zorgvuldig']],
  [/taak|werk|proces|activiteit|handeling/iu, ['De medewerker', 'de taak zorgvuldig']],
];

function objectFrameFromMeaning(verb) {
  const meaning = String(verb.meaning || '').trim();
  for (const [pattern, frame] of semanticObjectRules) {
    if (pattern.test(meaning)) return { subject: frame[0], complement: frame[1] };
  }
  return { subject: 'De medewerker', complement: 'de taak zorgvuldig' };
}

function fallbackFrameFromMeaning(verb) {
  const meaning = String(verb.meaning || '').trim();
  const lower = meaning.toLocaleLowerCase('nl-NL');
  const patternSeparable = Boolean(verb.separable && verb.prefix);

  if (verb.reflexive || /^zich\b/iu.test(meaning)) {
    const preposition = verb.fixedPreposition || (lower.includes(' op ') ? 'op' : lower.includes(' aan ') ? 'aan' : lower.includes(' met ') ? 'met' : '');
    return {
      kind: 'present',
      person: 2,
      subject: 'De medewerker',
      beforeParticle: ['zich', preposition, preposition ? 'de situatie' : 'zorgvuldig'].filter(Boolean).join(' '),
      afterParticle: '',
      patternSeparable,
      original: '',
      source: 'meaning-fallback',
    };
  }

  if (verb.fixedPreposition) {
    return {
      kind: 'present', person: 2, subject: 'De medewerker',
      beforeParticle: `${verb.fixedPreposition} het voorstel`, afterParticle: '', patternSeparable, original: '', source: 'meaning-fallback',
    };
  }

  if (verb.semantic === 'beweging') {
    const subject = /wind|lucht|water|vloeistof|zand|rook/iu.test(meaning) ? 'Het materiaal'
      : /voertuig|auto|fiets|trein|schip|boot|vliegtuig/iu.test(meaning) ? 'Het voertuig'
        : 'De reiziger';
    const complement = /beneden|omlaag|zakken/iu.test(meaning) ? 'voorzichtig naar beneden'
      : /terug|eerdere plaats/iu.test(meaning) ? 'rustig naar de vertrekplaats terug'
        : /binnen|naar binnen/iu.test(meaning) ? 'veilig naar binnen'
          : /buiten|naar buiten/iu.test(meaning) ? 'veilig naar buiten'
            : /wind|lucht|water|vloeistof|zand|rook/iu.test(meaning) ? 'langzaam verder'
              : 'rustig naar de afgesproken plaats';
    return { kind: 'present', person: 2, subject, beforeParticle: complement, afterParticle: '', patternSeparable, original: '', source: 'meaning-fallback' };
  }

  if (verb.semantic === 'verandering') {
    const subject = /temperatuur|warm|koud/iu.test(meaning) ? 'De temperatuur'
      : /hoeveelheid|omvang|waarde|niveau|prijs/iu.test(meaning) ? 'De waarde'
        : /plant|weefsel|bot|materiaal/iu.test(meaning) ? 'Het materiaal'
          : 'De situatie';
    return { kind: 'present', person: 2, subject, beforeParticle: 'geleidelijk', afterParticle: '', patternSeparable, original: '', source: 'meaning-fallback' };
  }

  if (verb.semantic === 'toestand' || verb.semantic === 'gebeurtenis') {
    const subject = /apparaat|machine|systeem|motor/iu.test(meaning) ? 'Het systeem'
      : /persoon|iemand|mens/iu.test(meaning) ? 'De deelnemer'
        : 'De situatie';
    return { kind: 'present', person: 2, subject, beforeParticle: 'in deze context al enige tijd', afterParticle: '', patternSeparable, original: '', source: 'meaning-fallback' };
  }

  if (verb.semantic === 'modaal') {
    return { kind: 'present', person: 2, subject: 'De medewerker', beforeParticle: 'de volledige taak', afterParticle: '', patternSeparable, original: '', source: 'meaning-fallback' };
  }

  const { subject, complement } = objectFrameFromMeaning(verb);
  return { kind: 'present', person: 2, subject, beforeParticle: complement, afterParticle: '', patternSeparable, original: '', source: 'meaning-fallback' };
}

function splitTrailingClause(value) {
  const text = String(value || '').trim();
  const match = text.match(/^(.*?)(\s+(?:om|zodat|doordat|terwijl|wanneer|als)\s+.+)$/iu);
  if (!match) return { core: text, tail: '' };
  return { core: match[1].trim(), tail: match[2].trim() };
}

function contextualPatternsFromFrame(verb, frame) {
  const person = frame.person;
  if (frame.voice === 'passive') {
    const complement = [frame.beforeParticle, frame.afterParticle].filter(Boolean).join(' ');
    const plural = person >= 3;
    return {
      hoofdzin: joinSentence([frame.subject, plural ? 'worden' : 'wordt', complement, verb.participle]),
      verleden: joinSentence([frame.subject, plural ? 'werden' : 'werd', complement, verb.participle]),
      perfectum: joinSentence([frame.subject, plural ? 'zijn' : 'is', complement, verb.participle]),
      modaal: joinSentence([frame.subject, modalFor(person), complement, verb.participle, 'worden']),
      bijzin: joinSentence(['... omdat', lowerInitial(frame.subject), complement, verb.participle, plural ? 'worden' : 'wordt']),
      metTe: joinSentence([frame.subject, lijkenFor(person), complement, verb.participle, 'te worden']),
      gebiedend: `Laat ${lowerInitial(frame.subject)} ${complement} ${verb.participle} worden.`,
    };
  }
  const present = finiteSurface(verb, 'presentForms', person, frame.patternSeparable);
  const past = finiteSurface(verb, 'pastForms', person, frame.patternSeparable);
  const observedPresent = frame.finiteEvidence?.present?.get(person);
  const observedPast = frame.finiteEvidence?.past?.get(person);
  if (observedPresent) present.finite = observedPresent;
  if (observedPast) past.finite = observedPast;
  const complement = [frame.beforeParticle, frame.afterParticle].filter(Boolean).join(' ');
  const { core: complementCore, tail: complementTail } = splitTrailingClause(complement);
  const presentMain = frame.kind === 'present' && frame.original
    ? `${stripSentencePunctuation(frame.original)}.`
    : joinSentence([frame.subject, present.finite, frame.beforeParticle, present.particle, frame.afterParticle]);
  const pastMain = replaceTemporalContext(joinSentence([frame.subject, past.finite, complementCore, past.particle, complementTail]), 'past');
  const perfectMain = replaceTemporalContext(joinSentence([frame.subject, auxiliaryForFrame(verb, frame), complementCore, verb.participle, complementTail]), 'perfect');
  const modalMain = joinSentence([frame.subject, modalFor(person), complementCore, verb.infinitive, complementTail]);
  const subordinate = joinSentence(['... omdat', lowerInitial(frame.subject), complementCore, subordinateSurface(verb, person, frame.patternSeparable), complementTail]);
  const withTe = joinSentence(['Het is mogelijk om', complementCore, teInfinitive(verb, frame.patternSeparable), complementTail]);
  const imperativeSurface = finiteSurface(verb, 'presentForms', 0, frame.patternSeparable);
  const inanimateSubject = /^(?:De|Het|Die|Deze)\s/iu.test(frame.subject) && !/^(?:De medewerker|De docent|De schrijver|De klant|De gelovigen|De kinderen|De reiziger|De deelnemers)/iu.test(frame.subject);
  const imperative = (verb.semantic === 'toestand' || verb.semantic === 'verandering' || inanimateSubject)
    ? 'Niet gebruikelijk in deze betekenis.'
    : joinSentence([imperativeSurface.finite, frame.beforeParticle, imperativeSurface.particle, frame.afterParticle]);

  return {
    hoofdzin: presentMain,
    verleden: pastMain,
    perfectum: perfectMain,
    modaal: modalMain,
    bijzin: subordinate,
    metTe: withTe,
    gebiedend: imperative,
  };
}

function isSafeGeneratedPatternSet(patterns) {
  const required = ['hoofdzin', 'verleden', 'perfectum', 'modaal', 'bijzin'];
  if (!required.every((key) => String(patterns?.[key] || '').trim().split(/\s+/u).length >= 4)) return false;
  const text = required.map((key) => patterns[key]).join(' ');
  return !/\b(?:hij\/zij|undefined|kan kan|kunt kunt|heeft heeft|hebben hebben)\b/iu.test(text)
    && !/\bomdat\s+(?:na|voor|in|op|door|met|zonder|bij|uit|tijdens|sinds)\b/iu.test(patterns.bijzin)
    && !/\bmorgen\b/iu.test(`${patterns.verleden} ${patterns.perfectum}`);
}

function mergePatternContent(current, replacement) {
  const next = {};
  for (const key of Object.keys(current || {})) next[key] = replacement[key] || current[key];
  return next;
}

function isSafeManualOverride(override) {
  if (!override || typeof override !== 'object') return false;
  return Object.values(override).every((sentence) => {
    const text = String(sentence || '').trim();
    return text.length >= 10
      && /^(?:[A-ZÀ-ÖØ-Þ]|\.\.\.)/u.test(text)
      && !genericExampleMarkers.some((pattern) => pattern.test(text))
      && !/\b(?:wordt hier gebruikt|de handeling volledig|deze zin gebruikt|in deze context gebruiken we)\b/iu.test(text)
      && !/\b(?:kan kan|kunt kunt|heeft heeft|hebben hebben)\b/iu.test(text);
  });
}


export function getVerbSentencePatternImperative(verb) {
  const explicit = a2SentencePatternImperativeLabels[verb?.infinitive]
    || verbSentencePatternImperativeLabels[verb?.infinitive]
    || generatedImperativeLabels.get(verb?.infinitive);
  if (explicit) return explicit;

  const baseManual = verbSentencePatternOverrides[verb?.infinitive];
  const manual = a2SentencePatternOverrides[verb?.infinitive]
    || criticalSentencePatternOverrides[verb?.infinitive]
    || (isSafeManualOverride(baseManual) ? baseManual : null);
  if (manual?.gebiedend) return manual.gebiedend.replace(/[.!?]+$/u, '');

  return verb?.imperative || '';
}

export function applyVerbSentencePatternFixes(atlas) {
  const atlasByInfinitive = new Map(atlas.map((verb) => [verb.infinitive, verb]));
  for (const verb of atlas) {
    const nextLevel = advancedVerbLevelOverrides[verb.infinitive];
    if (nextLevel) verb.level = nextLevel;
    if (!EDITABLE_LEVELS.has(verb.level)) continue;

    const patternVerb = patternVerbView(verb, atlasByInfinitive);
    const baseManual = verbSentencePatternOverrides[verb.infinitive];
    const manual = a2SentencePatternOverrides[verb.infinitive]
      || criticalSentencePatternOverrides[verb.infinitive]
      || (isSafeManualOverride(baseManual) ? baseManual : null);
    let replacement = manual;

    if (!replacement && GENERATED_LEVELS.has(verb.level)) {
      const frame = selectFrame(patternVerb);
      if (!frame) continue;
      const generated = contextualPatternsFromFrame(patternVerb, frame);
      if (isSafeGeneratedPatternSet(generated)) {
        replacement = generated;
        if (generated.gebiedend) {
          generatedImperativeLabels.set(
            verb.infinitive,
            stripSentencePunctuation(generated.gebiedend).toLocaleLowerCase('nl-NL'),
          );
        }
      }
    }

    if (replacement) {
      verb.sentencePatterns = mergePatternContent(verb.sentencePatterns || {}, replacement);
    }
  }

  atlas.sort((a, b) => a.infinitive.localeCompare(b.infinitive, 'nl-NL'));
  return atlas;
}
