const professionalDomainDefinitions = [
  {
    id: 'bedrijfskunde',
    title: 'Bedrijfskunde & administratie',
    icon: '▤',
    subtitle: 'Organisatie, planning, financiën, processen, personeel en risicobeheer.',
    categories: [
      ['alle', 'Alle begrippen'], ['organisatie', 'Organisatie'], ['planning', 'Planning & projecten'],
      ['financien', 'Financiën & boekhouding'], ['processen', 'Processen & operatie'],
      ['personeel', 'Personeel & leiderschap'], ['governance', 'Governance & risico'],
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing',
    icon: '◎',
    subtitle: 'Markt, doelgroep, merk, campagnes, digitale kanalen, onderzoek en klantrelaties.',
    categories: [
      ['alle', 'Alle begrippen'], ['strategie', 'Strategie'], ['klant-markt', 'Klant & markt'],
      ['merk-content', 'Merk & content'], ['digitaal', 'Digitale marketing'],
      ['onderzoek', 'Onderzoek & analyse'], ['verkoop', 'Verkoop & retentie'],
    ],
  },
  {
    id: 'economie',
    title: 'Economie',
    icon: '€',
    subtitle: 'Schaarste, markten, macro-economie, geld, overheid, arbeid en internationale handel.',
    categories: [
      ['alle', 'Alle begrippen'], ['basis', 'Basisbegrippen'], ['markt', 'Markt & prijs'],
      ['macro', 'Macro-economie'], ['geld', 'Geld & banken'], ['overheid', 'Overheid & beleid'],
      ['internationaal', 'Internationale economie'],
    ],
  },
  {
    id: 'zorg',
    title: 'Zorg, lichaam & gezondheid',
    icon: '+',
    subtitle: 'Klachten, huisarts, onderzoek, behandeling, medicatie, ziekenhuis en preventie.',
    categories: [
      ['alle', 'Alle begrippen'], ['lichaam-klachten', 'Lichaam & klachten'], ['eerstelijn', 'Huisarts & eerstelijn'],
      ['onderzoek', 'Onderzoek & diagnose'], ['behandeling', 'Behandeling & medicatie'],
      ['ziekenhuis', 'Ziekenhuis & herstel'], ['organisatie', 'Zorgstelsel & preventie'],
    ],
  },
  {
    id: 'overheid',
    title: 'Overheid, recht & gemeente',
    icon: '§',
    subtitle: 'Burgerzaken, aanvragen, vergunningen, bezwaar, belastingen, beleid en publieke diensten.',
    categories: [
      ['alle', 'Alle begrippen'], ['burgerzaken', 'Burgerzaken'], ['procedure', 'Aanvraag & procedure'],
      ['recht', 'Recht & handhaving'], ['belasting', 'Belasting & inkomen'],
      ['democratie', 'Democratie & beleid'], ['publiek', 'Publieke dienstverlening'],
    ],
  },
  {
    id: 'bouw',
    title: 'Bouw, architectuur & infrastructuur',
    icon: '⌂',
    subtitle: 'Ontwerp, constructie, materialen, installaties, uitvoering, duurzaamheid en stedelijke ontwikkeling.',
    categories: [
      ['alle', 'Alle begrippen'], ['ontwerp', 'Ontwerp & architectuur'], ['gebouw', 'Gebouwdelen'],
      ['constructie', 'Constructie'], ['materialen', 'Materialen'], ['installaties', 'Installaties'],
      ['uitvoering', 'Uitvoering & contract'], ['duurzaamheid', 'Duurzaamheid'], ['infrastructuur', 'Infrastructuur & stad'],
    ],
  },
];

const entries = [];
const add = (domain, category, level, term, definition) => entries.push({ domain, category, level, term, definition });

// Bedrijfskunde & administratie — organisatie
add('bedrijfskunde', 'organisatie', 'B1', 'de organisatie', 'Een samenhangend geheel van mensen, middelen en afspraken dat een bepaald doel nastreeft.');
add('bedrijfskunde', 'organisatie', 'B1', 'de afdeling', 'Een deel van een organisatie met een eigen taakgebied, zoals financiën of verkoop.');
add('bedrijfskunde', 'organisatie', 'B1', 'de functie', 'Het geheel van taken, verantwoordelijkheden en bevoegdheden van een medewerker.');
add('bedrijfskunde', 'organisatie', 'B1', 'de organisatiestructuur', 'De formele verdeling van rollen, afdelingen en gezagslijnen binnen een organisatie.');
add('bedrijfskunde', 'organisatie', 'B2', 'de hiërarchie', 'De rangorde waarin bevoegdheden en verantwoordelijkheden over niveaus zijn verdeeld.');
add('bedrijfskunde', 'organisatie', 'B2', 'de centralisatie', 'Het concentreren van beslissingsbevoegdheid bij een klein aantal centrale functies.');
add('bedrijfskunde', 'organisatie', 'B2', 'de decentralisatie', 'Het verdelen van beslissingsbevoegdheid over afdelingen of lokale eenheden.');
add('bedrijfskunde', 'organisatie', 'B2', 'de belanghebbende', 'Een persoon of organisatie die invloed heeft op of gevolgen ondervindt van een besluit.');

// planning & projecten
add('bedrijfskunde', 'planning', 'B1', 'de planning', 'Een overzicht van activiteiten, volgorde, middelen en tijdstippen.');
add('bedrijfskunde', 'planning', 'B1', 'de doelstelling', 'Een concreet resultaat dat binnen een bepaalde periode moet worden bereikt.');
add('bedrijfskunde', 'planning', 'B1', 'de deadline', 'Het uiterste tijdstip waarop een taak of resultaat gereed moet zijn.');
add('bedrijfskunde', 'planning', 'B1', 'de mijlpaal', 'Een belangrijk controlepunt dat de voortgang van een project zichtbaar maakt.');
add('bedrijfskunde', 'planning', 'B2', 'de afhankelijkheid', 'Een relatie waarbij een taak pas kan starten of eindigen na een andere taak.');
add('bedrijfskunde', 'planning', 'B2', 'de capaciteit', 'De beschikbare hoeveelheid mensen, tijd of middelen om werk uit te voeren.');
add('bedrijfskunde', 'planning', 'B2', 'de prioritering', 'Het bepalen welke taken of doelen eerder en met meer aandacht worden uitgevoerd.');
add('bedrijfskunde', 'planning', 'B2', 'de projectomvang', 'De afgesproken grenzen van wat een project wel en niet oplevert.');

// financiën
add('bedrijfskunde', 'financien', 'B1', 'de begroting', 'Een overzicht van verwachte inkomsten en uitgaven voor een bepaalde periode.');
add('bedrijfskunde', 'financien', 'B1', 'de omzet', 'Het totale bedrag dat een organisatie met verkoop verdient vóór aftrek van kosten.');
add('bedrijfskunde', 'financien', 'B1', 'de kosten', 'De geldwaarde van middelen die nodig zijn om activiteiten uit te voeren.');
add('bedrijfskunde', 'financien', 'B1', 'de winst', 'Het positieve verschil tussen opbrengsten en kosten.');
add('bedrijfskunde', 'financien', 'B1', 'het verlies', 'Het negatieve verschil dat ontstaat wanneer kosten hoger zijn dan opbrengsten.');
add('bedrijfskunde', 'financien', 'B2', 'de balans', 'Een financieel overzicht van bezittingen, schulden en eigen vermogen op één moment.');
add('bedrijfskunde', 'financien', 'B2', 'de kasstroom', 'De geldstroom die een organisatie daadwerkelijk ontvangt en uitgeeft.');
add('bedrijfskunde', 'financien', 'B2', 'de afschrijving', 'De boekhoudkundige verdeling van de waardedaling van een bezit over meerdere jaren.');

// processen
add('bedrijfskunde', 'processen', 'B1', 'het bedrijfsproces', 'Een vaste reeks activiteiten waarmee een product, dienst of resultaat wordt geleverd.');
add('bedrijfskunde', 'processen', 'B1', 'de werkwijze', 'De afgesproken manier waarop een taak of proces wordt uitgevoerd.');
add('bedrijfskunde', 'processen', 'B1', 'de voorraad', 'De hoeveelheid materialen of producten die beschikbaar is voor gebruik of verkoop.');
add('bedrijfskunde', 'processen', 'B1', 'de leverancier', 'Een partij die goederen of diensten aan een organisatie levert.');
add('bedrijfskunde', 'processen', 'B2', 'de doorlooptijd', 'De totale tijd tussen het begin en het einde van een proces.');
add('bedrijfskunde', 'processen', 'B2', 'het knelpunt', 'Een stap met te weinig capaciteit die de snelheid van het hele proces beperkt.');
add('bedrijfskunde', 'processen', 'B2', 'de kwaliteitscontrole', 'Het systematisch controleren of een product of proces aan eisen voldoet.');
add('bedrijfskunde', 'processen', 'B2', 'de procesverbetering', 'Het doelgericht aanpassen van een proces om kwaliteit, snelheid of kosten te verbeteren.');

// personeel
add('bedrijfskunde', 'personeel', 'B1', 'het personeel', 'Alle mensen die bij een organisatie in dienst zijn.');
add('bedrijfskunde', 'personeel', 'B1', 'de leidinggevende', 'Een medewerker die verantwoordelijk is voor de aansturing van anderen.');
add('bedrijfskunde', 'personeel', 'B1', 'de vacature', 'Een beschikbare functie waarvoor een organisatie een medewerker zoekt.');
add('bedrijfskunde', 'personeel', 'B1', 'het functioneringsgesprek', 'Een gesprek over prestaties, samenwerking en ontwikkeling van een medewerker.');
add('bedrijfskunde', 'personeel', 'B2', 'de competentie', 'Een combinatie van kennis, vaardigheden en gedrag die nodig is voor goed functioneren.');
add('bedrijfskunde', 'personeel', 'B2', 'de werkdruk', 'De verhouding tussen de hoeveelheid werk en de beschikbare tijd en capaciteit.');
add('bedrijfskunde', 'personeel', 'B2', 'de personeelsplanning', 'Het bepalen hoeveel medewerkers met welke kennis op welk moment nodig zijn.');
add('bedrijfskunde', 'personeel', 'B2', 'het leiderschap', 'De manier waarop iemand richting geeft, besluiten ondersteunt en mensen beïnvloedt.');

// governance
add('bedrijfskunde', 'governance', 'B1', 'het beleid', 'Een samenhangend geheel van keuzes en regels om doelen te bereiken.');
add('bedrijfskunde', 'governance', 'B1', 'de verantwoordelijkheid', 'De plicht om taken uit te voeren en uitleg te geven over de resultaten.');
add('bedrijfskunde', 'governance', 'B1', 'het risico', 'De mogelijkheid dat een gebeurtenis negatieve gevolgen heeft voor een doel.');
add('bedrijfskunde', 'governance', 'B1', 'de maatregel', 'Een concrete actie om een probleem te voorkomen, beperken of oplossen.');
add('bedrijfskunde', 'governance', 'B2', 'de interne controle', 'Een systeem van controles dat fouten, misbruik en onbetrouwbare informatie moet beperken.');
add('bedrijfskunde', 'governance', 'B2', 'de naleving', 'Het handelen volgens wetten, regels, normen en interne afspraken.');
add('bedrijfskunde', 'governance', 'B2', 'de audit', 'Een onafhankelijke en systematische beoordeling van processen, informatie of controles.');
add('bedrijfskunde', 'governance', 'B2', 'de prestatie-indicator', 'Een meetbare waarde waarmee de voortgang of kwaliteit van een doel wordt gevolgd.');

// Marketing — strategie
add('marketing', 'strategie', 'B1', 'de marketingstrategie', 'Een samenhangend plan om een markt te bereiken en organisatiedoelen te ondersteunen.');
add('marketing', 'strategie', 'B1', 'de doelstelling', 'Een meetbaar resultaat dat met marketingactiviteiten moet worden bereikt.');
add('marketing', 'strategie', 'B1', 'de positionering', 'De gewenste plaats van een merk of product in het hoofd van de doelgroep.');
add('marketing', 'strategie', 'B1', 'de waardepropositie', 'De duidelijke belofte welke waarde een product of dienst voor de klant biedt.');
add('marketing', 'strategie', 'B2', 'het concurrentievoordeel', 'Een eigenschap waarmee een organisatie aantoonbaar beter presteert dan alternatieven.');
add('marketing', 'strategie', 'B2', 'de marktpenetratie', 'Het vergroten van het aandeel van bestaande producten binnen een bestaande markt.');
add('marketing', 'strategie', 'B2', 'de differentiatie', 'Het herkenbaar onderscheiden van een aanbod op kenmerken die voor klanten relevant zijn.');
add('marketing', 'strategie', 'B2', 'de marketingmix', 'De combinatie van product, prijs, plaats en promotie waarmee een markt wordt benaderd.');

// klant & markt
add('marketing', 'klant-markt', 'B1', 'de doelgroep', 'De groep mensen of organisaties voor wie een aanbod of boodschap bedoeld is.');
add('marketing', 'klant-markt', 'B1', 'het marktsegment', 'Een deel van de markt met vergelijkbare kenmerken, behoeften of gedrag.');
add('marketing', 'klant-markt', 'B1', 'de klantbehoefte', 'Een probleem, wens of verwachting waarvoor een klant een oplossing zoekt.');
add('marketing', 'klant-markt', 'B1', 'de klantreis', 'De opeenvolgende contactmomenten die iemand doorloopt vóór, tijdens en na een aankoop.');
add('marketing', 'klant-markt', 'B2', 'de persona', 'Een onderbouwd fictief profiel dat een belangrijk type klant vertegenwoordigt.');
add('marketing', 'klant-markt', 'B2', 'het koopgedrag', 'De manier waarop klanten informatie zoeken, vergelijken, beslissen en kopen.');
add('marketing', 'klant-markt', 'B2', 'de marktbehoefte', 'Een gedeelde behoefte binnen een markt die kansen biedt voor een aanbod.');
add('marketing', 'klant-markt', 'B2', 'het contactmoment', 'Een situatie waarin een klant met een merk, organisatie of kanaal in aanraking komt.');

// merk & content
add('marketing', 'merk-content', 'B1', 'het merk', 'Een herkenbare naam, identiteit en ervaring waarmee een aanbod wordt onderscheiden.');
add('marketing', 'merk-content', 'B1', 'de merkidentiteit', 'De visuele en verbale kenmerken waarmee een merk zichzelf presenteert.');
add('marketing', 'merk-content', 'B1', 'de boodschap', 'De kerninformatie of betekenis die een organisatie wil overbrengen.');
add('marketing', 'merk-content', 'B1', 'de campagne', 'Een samenhangende reeks communicatieactiviteiten met een bepaald doel en een bepaalde periode.');
add('marketing', 'merk-content', 'B2', 'de merkbekendheid', 'De mate waarin mensen een merk herkennen of spontaan kunnen noemen.');
add('marketing', 'merk-content', 'B2', 'de merkpositionering', 'De bewuste keuze hoe een merk zich ten opzichte van concurrenten wil profileren.');
add('marketing', 'merk-content', 'B2', 'de inhoudsstrategie', 'Het plan voor het maken, verspreiden en beheren van relevante inhoud.');
add('marketing', 'merk-content', 'B2', 'de tone of voice', 'De herkenbare stijl en houding waarin een organisatie communiceert.');

// digitaal
add('marketing', 'digitaal', 'B1', 'het digitale kanaal', 'Een online middel waarmee een organisatie klanten bereikt of bedient.');
add('marketing', 'digitaal', 'B1', 'de websitebezoeker', 'Een persoon die één of meer pagina’s van een website bekijkt.');
add('marketing', 'digitaal', 'B1', 'de klik', 'Een gebruikersactie waarmee een link, knop of advertentie wordt geopend.');
add('marketing', 'digitaal', 'B1', 'de conversie', 'Een gewenste actie van een gebruiker, zoals kopen, registreren of contact opnemen.');
add('marketing', 'digitaal', 'B2', 'de conversieratio', 'Het percentage bezoekers dat een gewenste actie uitvoert.');
add('marketing', 'digitaal', 'B2', 'de zoekmachineoptimalisatie', 'Het verbeteren van inhoud en techniek om beter vindbaar te worden in zoekmachines.');
add('marketing', 'digitaal', 'B2', 'de doorklikratio', 'Het percentage vertoningen dat leidt tot een klik.');
add('marketing', 'digitaal', 'B2', 'de landingspagina', 'Een webpagina die speciaal is ontworpen voor één campagne of actie.');

// onderzoek
add('marketing', 'onderzoek', 'B1', 'het marktonderzoek', 'Het systematisch verzamelen en analyseren van informatie over markt en klanten.');
add('marketing', 'onderzoek', 'B1', 'de enquête', 'Een vaste reeks vragen waarmee informatie bij een groep mensen wordt verzameld.');
add('marketing', 'onderzoek', 'B1', 'de steekproef', 'Een kleinere groep die wordt onderzocht om iets over een grotere groep te zeggen.');
add('marketing', 'onderzoek', 'B1', 'de concurrentieanalyse', 'Een onderzoek naar aanbieders, sterke punten en verschillen binnen een markt.');
add('marketing', 'onderzoek', 'B2', 'het inzicht', 'Een betekenisvolle conclusie die uit gegevens, gedrag of onderzoek wordt afgeleid.');
add('marketing', 'onderzoek', 'B2', 'de segmentatie', 'Het verdelen van een markt in groepen met vergelijkbare kenmerken.');
add('marketing', 'onderzoek', 'B2', 'de attributie', 'Het toeschrijven van een resultaat aan één of meer marketingcontacten.');
add('marketing', 'onderzoek', 'B2', 'de merkmeting', 'Het periodiek onderzoeken van bekendheid, voorkeur en beeld van een merk.');

// verkoop
add('marketing', 'verkoop', 'B1', 'de verkoop', 'Het proces waarbij een product of dienst tegen betaling aan een klant wordt geleverd.');
add('marketing', 'verkoop', 'B1', 'de aanvraag', 'Een verzoek van een mogelijke klant om informatie, contact of een voorstel.');
add('marketing', 'verkoop', 'B1', 'de offerte', 'Een formeel voorstel met prijs, voorwaarden en omschrijving van een aanbod.');
add('marketing', 'verkoop', 'B1', 'het klantbehoud', 'Het vermogen om bestaande klanten actief en tevreden te houden.');
add('marketing', 'verkoop', 'B2', 'de verkoopkans', 'Een mogelijke overeenkomst die voldoende concreet is om actief op te volgen.');
add('marketing', 'verkoop', 'B2', 'de klantwaarde', 'De economische of strategische waarde die een klant over langere tijd oplevert.');
add('marketing', 'verkoop', 'B2', 'de loyaliteit', 'De neiging van een klant om bij hetzelfde merk of dezelfde organisatie te blijven.');
add('marketing', 'verkoop', 'B2', 'de aanbeveling', 'Een positieve verwijzing waarbij een klant een product of organisatie aan anderen adviseert.');

// Economie — basis
add('economie', 'basis', 'B1', 'de schaarste', 'De situatie waarin beschikbare middelen onvoldoende zijn om alle wensen te vervullen.');
add('economie', 'basis', 'B1', 'de behoefte', 'Een wens of noodzaak waarvoor mensen middelen willen gebruiken.');
add('economie', 'basis', 'B1', 'het middel', 'Iets dat kan worden ingezet om een economisch doel te bereiken.');
add('economie', 'basis', 'B1', 'de keuze', 'Een beslissing tussen alternatieven doordat middelen beperkt zijn.');
add('economie', 'basis', 'B2', 'de opportuniteitskosten', 'De waarde van het beste alternatief dat door een keuze wordt opgegeven.');
add('economie', 'basis', 'B2', 'de productiviteit', 'De hoeveelheid productie die met een bepaalde hoeveelheid middelen wordt gerealiseerd.');
add('economie', 'basis', 'B2', 'de welvaart', 'De mate waarin mensen met beschikbare middelen in hun behoeften kunnen voorzien.');
add('economie', 'basis', 'B2', 'het welzijn', 'De bredere kwaliteit van leven, waaronder gezondheid, veiligheid en sociale omstandigheden.');

// markt
add('economie', 'markt', 'B1', 'de vraag', 'De hoeveelheid die kopers bij verschillende prijzen willen en kunnen kopen.');
add('economie', 'markt', 'B1', 'het aanbod', 'De hoeveelheid die verkopers bij verschillende prijzen willen en kunnen leveren.');
add('economie', 'markt', 'B1', 'de marktprijs', 'De prijs die op een markt ontstaat door vraag en aanbod.');
add('economie', 'markt', 'B1', 'de concurrentie', 'De strijd tussen aanbieders of vragers om klanten, middelen of marktaandeel.');
add('economie', 'markt', 'B2', 'het marktevenwicht', 'De situatie waarin de gevraagde en aangeboden hoeveelheid gelijk zijn.');
add('economie', 'markt', 'B2', 'de elasticiteit', 'De gevoeligheid van vraag of aanbod voor een verandering in prijs, inkomen of een andere factor.');
add('economie', 'markt', 'B2', 'het monopolie', 'Een markt waarin één aanbieder vrijwel het hele aanbod beheerst.');
add('economie', 'markt', 'B2', 'het marktfalen', 'Een situatie waarin een vrije markt geen maatschappelijk efficiënte uitkomst oplevert.');

// macro
add('economie', 'macro', 'B1', 'de economische groei', 'De toename van de totale productie van goederen en diensten over tijd.');
add('economie', 'macro', 'B1', 'de inflatie', 'Een algemene stijging van prijzen waardoor geld minder koopkracht krijgt.');
add('economie', 'macro', 'B1', 'de werkloosheid', 'De situatie waarin mensen zonder werk actief naar betaald werk zoeken.');
add('economie', 'macro', 'B1', 'het bruto binnenlands product', 'De totale waarde van de productie binnen een land in een bepaalde periode.');
add('economie', 'macro', 'B2', 'de conjunctuur', 'De afwisseling van economische groei en vertraging op korte en middellange termijn.');
add('economie', 'macro', 'B2', 'de recessie', 'Een periode waarin de economische activiteit duidelijk en langdurig afneemt.');
add('economie', 'macro', 'B2', 'de koopkracht', 'De hoeveelheid goederen en diensten die met een inkomen kan worden gekocht.');
add('economie', 'macro', 'B2', 'de arbeidsproductiviteit', 'De productie per gewerkt uur of per werknemer.');

// geld
add('economie', 'geld', 'B1', 'het geld', 'Een algemeen geaccepteerd middel om te betalen, waarde te meten en waarde te bewaren.');
add('economie', 'geld', 'B1', 'de rente', 'De vergoeding die wordt betaald of ontvangen voor het gebruik van geld.');
add('economie', 'geld', 'B1', 'de lening', 'Een bedrag dat tijdelijk wordt verstrekt en later moet worden terugbetaald.');
add('economie', 'geld', 'B1', 'de bank', 'Een financiële instelling die onder meer betalingen, sparen en krediet faciliteert.');
add('economie', 'geld', 'B2', 'de geldhoeveelheid', 'De totale hoeveelheid direct beschikbaar geld in een economie.');
add('economie', 'geld', 'B2', 'het monetair beleid', 'Het beleid waarmee een centrale bank rente en geldcondities beïnvloedt.');
add('economie', 'geld', 'B2', 'het kredietrisico', 'Het risico dat een lener rente of aflossing niet betaalt.');
add('economie', 'geld', 'B2', 'de liquiditeit', 'De mate waarin geld beschikbaar is of bezit snel in geld kan worden omgezet.');

// overheid
add('economie', 'overheid', 'B1', 'de belasting', 'Een verplichte betaling aan de overheid voor collectieve uitgaven.');
add('economie', 'overheid', 'B1', 'de subsidie', 'Een financiële bijdrage van de overheid om bepaald gedrag of activiteiten te stimuleren.');
add('economie', 'overheid', 'B1', 'de overheidsbegroting', 'Het overzicht van verwachte inkomsten en uitgaven van de overheid.');
add('economie', 'overheid', 'B1', 'het begrotingstekort', 'Het bedrag waarmee overheidsuitgaven in een periode hoger zijn dan inkomsten.');
add('economie', 'overheid', 'B2', 'het fiscaal beleid', 'Het beïnvloeden van de economie via belastingen en overheidsuitgaven.');
add('economie', 'overheid', 'B2', 'de herverdeling', 'Het veranderen van inkomensverschillen via belastingen, uitkeringen en voorzieningen.');
add('economie', 'overheid', 'B2', 'de publieke voorziening', 'Een dienst of goed dat door of namens de overheid beschikbaar wordt gesteld.');
add('economie', 'overheid', 'B2', 'de staatsschuld', 'Het totaal van de openstaande financiële verplichtingen van de overheid.');

// internationaal
add('economie', 'internationaal', 'B1', 'de import', 'Het kopen en binnenbrengen van goederen of diensten uit het buitenland.');
add('economie', 'internationaal', 'B1', 'de export', 'Het verkopen en leveren van goederen of diensten aan het buitenland.');
add('economie', 'internationaal', 'B1', 'de wisselkoers', 'De verhouding waarin de ene munt tegen een andere munt wordt geruild.');
add('economie', 'internationaal', 'B1', 'de wereldhandel', 'De internationale uitwisseling van goederen en diensten.');
add('economie', 'internationaal', 'B2', 'het handelsoverschot', 'De situatie waarin de waarde van export groter is dan die van import.');
add('economie', 'internationaal', 'B2', 'het comparatief voordeel', 'Het voordeel van specialisatie in wat relatief tegen de laagste kosten kan worden geproduceerd.');
add('economie', 'internationaal', 'B2', 'het invoertarief', 'Een belasting die wordt geheven op ingevoerde goederen.');
add('economie', 'internationaal', 'B2', 'de globalisering', 'De toenemende internationale verwevenheid van economieën, organisaties en productieketens.');

// Zorg — lichaam & klachten
add('zorg', 'lichaam-klachten', 'A2', 'het symptoom', 'Een merkbare lichamelijke of psychische verandering die op een aandoening kan wijzen.');
add('zorg', 'lichaam-klachten', 'A2', 'de klacht', 'Een probleem of ongemak waarvoor iemand medische hulp of advies zoekt.');
add('zorg', 'lichaam-klachten', 'A2', 'de pijn', 'Een onaangename lichamelijke of emotionele gewaarwording die schade kan signaleren.');
add('zorg', 'lichaam-klachten', 'A2', 'de koorts', 'Een lichaamstemperatuur die hoger is dan normaal.');
add('zorg', 'lichaam-klachten', 'B1', 'de benauwdheid', 'Het gevoel dat ademen moeilijk gaat of dat er te weinig lucht binnenkomt.');
add('zorg', 'lichaam-klachten', 'B1', 'de ontsteking', 'Een reactie van het lichaam op beschadiging, irritatie of infectie.');
add('zorg', 'lichaam-klachten', 'B1', 'de zwelling', 'Een zichtbare of voelbare vergroting van weefsel door vocht, irritatie of letsel.');
add('zorg', 'lichaam-klachten', 'B2', 'de chronische aandoening', 'Een ziekte of toestand die lang duurt en vaak langdurige zorg vraagt.');

// eerstelijn
add('zorg', 'eerstelijn', 'A2', 'de huisarts', 'De arts die het eerste aanspreekpunt is voor algemene gezondheidsproblemen.');
add('zorg', 'eerstelijn', 'A2', 'de afspraak', 'Een afgesproken moment waarop een patiënt een zorgverlener spreekt.');
add('zorg', 'eerstelijn', 'A2', 'het spreekuur', 'De periode waarin een zorgverlener patiënten ontvangt of telefonisch spreekt.');
add('zorg', 'eerstelijn', 'B1', 'de verwijzing', 'Een formeel verzoek van een zorgverlener om een patiënt door een specialist te laten onderzoeken.');
add('zorg', 'eerstelijn', 'B1', 'de triage', 'Het beoordelen hoe dringend een hulpvraag is en welke zorg passend is.');
add('zorg', 'eerstelijn', 'B1', 'de praktijkondersteuner', 'Een zorgprofessional in de huisartsenpraktijk die specifieke begeleiding en controles uitvoert.');
add('zorg', 'eerstelijn', 'B2', 'de eerstelijnszorg', 'Direct toegankelijke zorg, zoals huisartsenzorg, fysiotherapie en wijkverpleging.');
add('zorg', 'eerstelijn', 'B2', 'de zorgvraag', 'De behoefte aan onderzoek, behandeling, begeleiding of ondersteuning.');

// onderzoek
add('zorg', 'onderzoek', 'B1', 'het lichamelijk onderzoek', 'Het onderzoeken van het lichaam door te kijken, voelen, luisteren of meten.');
add('zorg', 'onderzoek', 'B1', 'de bloedtest', 'Een laboratoriumonderzoek waarbij eigenschappen van bloed worden gemeten.');
add('zorg', 'onderzoek', 'B1', 'de röntgenfoto', 'Een afbeelding van lichaamsdelen die met röntgenstraling wordt gemaakt.');
add('zorg', 'onderzoek', 'B1', 'de diagnose', 'De medische vaststelling welke ziekte of aandoening klachten waarschijnlijk verklaart.');
add('zorg', 'onderzoek', 'B2', 'de differentiaaldiagnose', 'Een overzicht van mogelijke aandoeningen die bij dezelfde klachten kunnen passen.');
add('zorg', 'onderzoek', 'B2', 'de screening', 'Onderzoek bij mensen zonder duidelijke klachten om een ziekte vroeg op te sporen.');
add('zorg', 'onderzoek', 'B2', 'de prognose', 'De verwachting over het verloop en herstel van een ziekte of aandoening.');
add('zorg', 'onderzoek', 'B2', 'de medische voorgeschiedenis', 'Informatie over eerdere ziekten, behandelingen en relevante gezondheidsproblemen.');

// behandeling
add('zorg', 'behandeling', 'A2', 'de behandeling', 'Het geheel van medische handelingen om klachten te verminderen of herstel te bevorderen.');
add('zorg', 'behandeling', 'A2', 'het medicijn', 'Een middel dat wordt gebruikt om een ziekte te behandelen of klachten te verminderen.');
add('zorg', 'behandeling', 'B1', 'het recept', 'Een voorschrift van een bevoegde zorgverlener waarmee een medicijn kan worden verkregen.');
add('zorg', 'behandeling', 'B1', 'de dosering', 'De hoeveelheid van een medicijn en het schema waarin die wordt gebruikt.');
add('zorg', 'behandeling', 'B1', 'de bijwerking', 'Een ongewenst effect dat naast de bedoelde werking van een behandeling kan optreden.');
add('zorg', 'behandeling', 'B2', 'de contra-indicatie', 'Een reden waarom een bepaalde behandeling of medicatie niet geschikt of veilig is.');
add('zorg', 'behandeling', 'B2', 'de therapietrouw', 'De mate waarin een patiënt een afgesproken behandeling daadwerkelijk volgt.');
add('zorg', 'behandeling', 'B2', 'de revalidatie', 'Een behandeltraject om lichamelijk, psychisch of sociaal functioneren te herstellen.');

// ziekenhuis
add('zorg', 'ziekenhuis', 'B1', 'de specialist', 'Een arts met uitgebreide kennis van een bepaald medisch vakgebied.');
add('zorg', 'ziekenhuis', 'B1', 'de opname', 'Het verblijf van een patiënt in een ziekenhuis of zorginstelling.');
add('zorg', 'ziekenhuis', 'B1', 'de operatie', 'Een medische ingreep waarbij een arts in of aan het lichaam behandelt.');
add('zorg', 'ziekenhuis', 'B1', 'de verpleegkundige', 'Een zorgprofessional die patiënten verzorgt, observeert en begeleidt.');
add('zorg', 'ziekenhuis', 'B2', 'de polikliniek', 'Een ziekenhuisafdeling waar patiënten worden onderzocht of behandeld zonder opname.');
add('zorg', 'ziekenhuis', 'B2', 'de intensive care', 'Een afdeling voor patiënten die voortdurend intensieve bewaking en behandeling nodig hebben.');
add('zorg', 'ziekenhuis', 'B2', 'de ontslagbrief', 'Een medisch verslag met informatie en afspraken na vertrek uit het ziekenhuis.');
add('zorg', 'ziekenhuis', 'B2', 'de nazorg', 'Zorg en begeleiding na een behandeling, operatie of ziekenhuisopname.');

// organisatie
add('zorg', 'organisatie', 'B1', 'de zorgverzekering', 'Een verzekering die volgens de polis een deel van de zorgkosten vergoedt.');
add('zorg', 'organisatie', 'B1', 'het eigen risico', 'Het bedrag aan bepaalde zorgkosten dat een verzekerde eerst zelf betaalt.');
add('zorg', 'organisatie', 'B1', 'de apotheek', 'Een plaats waar medicijnen worden verstrekt en advies over medicatie wordt gegeven.');
add('zorg', 'organisatie', 'B1', 'de preventie', 'Maatregelen die ziekte, letsel of gezondheidsproblemen proberen te voorkomen.');
add('zorg', 'organisatie', 'B2', 'de geestelijke gezondheidszorg', 'Professionele zorg voor psychische klachten, stoornissen en herstel.');
add('zorg', 'organisatie', 'B2', 'de mantelzorg', 'Langdurige onbetaalde zorg door iemand uit de persoonlijke omgeving.');
add('zorg', 'organisatie', 'B2', 'de informed consent', 'Toestemming voor behandeling nadat een patiënt begrijpelijke informatie heeft ontvangen.');
add('zorg', 'organisatie', 'B2', 'de patiëntveiligheid', 'Het systematisch voorkomen en beperken van vermijdbare schade in de zorg.');

// Overheid — burgerzaken
add('overheid', 'burgerzaken', 'A2', 'de gemeente', 'De lokale overheid die publieke taken uitvoert voor een stad of dorp.');
add('overheid', 'burgerzaken', 'A2', 'de inwoner', 'Een persoon die officieel in een bepaalde gemeente of plaats woont.');
add('overheid', 'burgerzaken', 'A2', 'de inschrijving', 'De officiële registratie van een persoon, aanvraag of deelname.');
add('overheid', 'burgerzaken', 'A2', 'het identiteitsbewijs', 'Een officieel document waarmee iemand zijn identiteit kan aantonen.');
add('overheid', 'burgerzaken', 'B1', 'de burgerlijke stand', 'De officiële registratie van geboorte, huwelijk, partnerschap en overlijden.');
add('overheid', 'burgerzaken', 'B1', 'de basisregistratie personen', 'De landelijke registratie met persoonsgegevens van inwoners en voormalige inwoners.');
add('overheid', 'burgerzaken', 'B1', 'de verhuizing', 'De wijziging van het officiële woonadres van een persoon.');
add('overheid', 'burgerzaken', 'B2', 'de verblijfsstatus', 'De juridische positie die bepaalt onder welke voorwaarden iemand in een land mag verblijven.');

// procedure
add('overheid', 'procedure', 'B1', 'de aanvraag', 'Een formeel verzoek aan een instantie om een besluit, dienst of voorziening.');
add('overheid', 'procedure', 'B1', 'het formulier', 'Een document met vaste velden waarmee gegevens worden aangeleverd.');
add('overheid', 'procedure', 'B1', 'de bijlage', 'Een aanvullend document dat samen met een aanvraag of brief wordt meegestuurd.');
add('overheid', 'procedure', 'B1', 'de beschikking', 'Een schriftelijk besluit van een bestuursorgaan in een individuele zaak.');
add('overheid', 'procedure', 'B2', 'de beslistermijn', 'De wettelijke of afgesproken periode waarbinnen een instantie een besluit moet nemen.');
add('overheid', 'procedure', 'B2', 'het bezwaar', 'Een formeel verzoek aan een bestuursorgaan om een eigen besluit opnieuw te beoordelen.');
add('overheid', 'procedure', 'B2', 'het beroep', 'Een procedure waarbij een rechter of hogere instantie een besluit beoordeelt.');
add('overheid', 'procedure', 'B2', 'de hoorzitting', 'Een bijeenkomst waarin betrokkenen hun standpunt mondeling kunnen toelichten.');

// recht
add('overheid', 'recht', 'B1', 'de wet', 'Een algemeen bindende regel die volgens een formele procedure is vastgesteld.');
add('overheid', 'recht', 'B1', 'de regel', 'Een afspraak of norm die voorschrijft wat wel of niet is toegestaan.');
add('overheid', 'recht', 'B1', 'de overtreding', 'Een gedraging die in strijd is met een wettelijke regel.');
add('overheid', 'recht', 'B1', 'de boete', 'Een geldbedrag dat als straf of sanctie moet worden betaald.');
add('overheid', 'recht', 'B2', 'de handhaving', 'Het toezicht op regels en het optreden wanneer regels worden overtreden.');
add('overheid', 'recht', 'B2', 'de aansprakelijkheid', 'De juridische verplichting om schade of gevolgen te dragen.');
add('overheid', 'recht', 'B2', 'de rechtsbescherming', 'De mogelijkheden om rechten te verdedigen tegen besluiten of handelingen.');
add('overheid', 'recht', 'B2', 'het evenredigheidsbeginsel', 'Het beginsel dat nadelige gevolgen van een besluit niet buitensporig mogen zijn.');

// belasting
add('overheid', 'belasting', 'B1', 'de belastingaangifte', 'De opgave waarmee iemand inkomsten en andere gegevens aan de belastingdienst doorgeeft.');
add('overheid', 'belasting', 'B1', 'de toeslag', 'Een inkomensafhankelijke bijdrage van de overheid voor bepaalde kosten.');
add('overheid', 'belasting', 'B1', 'de uitkering', 'Een periodieke betaling op grond van sociale zekerheid.');
add('overheid', 'belasting', 'B1', 'het inkomen', 'Het geld dat iemand in een periode ontvangt uit werk, vermogen of uitkering.');
add('overheid', 'belasting', 'B2', 'het belastbaar inkomen', 'Het inkomen waarover na wettelijke correcties belasting wordt berekend.');
add('overheid', 'belasting', 'B2', 'de heffingskorting', 'Een bedrag dat onder voorwaarden van de berekende inkomstenbelasting wordt afgetrokken.');
add('overheid', 'belasting', 'B2', 'de terugvordering', 'Het officiële verzoek om een eerder uitgekeerd bedrag terug te betalen.');
add('overheid', 'belasting', 'B2', 'de draagkracht', 'De financiële mogelijkheid van iemand om belasting, kosten of bijdragen te betalen.');

// democratie
add('overheid', 'democratie', 'B1', 'de verkiezing', 'Een procedure waarin burgers vertegenwoordigers of bestuurders kiezen.');
add('overheid', 'democratie', 'B1', 'de gemeenteraad', 'Het gekozen orgaan dat hoofdlijnen van lokaal beleid vaststelt en controleert.');
add('overheid', 'democratie', 'B1', 'het college van burgemeester en wethouders', 'Het dagelijks bestuur van een Nederlandse gemeente.');
add('overheid', 'democratie', 'B1', 'het beleidsplan', 'Een document met doelen, keuzes en voorgenomen maatregelen.');
add('overheid', 'democratie', 'B2', 'de volksvertegenwoordiging', 'Een gekozen orgaan dat burgers vertegenwoordigt en het bestuur controleert.');
add('overheid', 'democratie', 'B2', 'de beleidsvorming', 'Het proces waarin problemen, doelen, alternatieven en maatregelen worden uitgewerkt.');
add('overheid', 'democratie', 'B2', 'de inspraak', 'De mogelijkheid voor burgers en organisaties om vóór een besluit hun mening te geven.');
add('overheid', 'democratie', 'B2', 'de publieke verantwoording', 'Het uitleggen en verdedigen van besluiten, prestaties en besteding van publiek geld.');

// publiek
add('overheid', 'publiek', 'B1', 'de vergunning', 'Een officiële toestemming van een bevoegde instantie om iets te doen.');
add('overheid', 'publiek', 'B1', 'de openbare ruimte', 'Een publiek toegankelijk gebied, zoals straten, parken en pleinen.');
add('overheid', 'publiek', 'B1', 'de afvalinzameling', 'Het georganiseerd ophalen en verwerken van huishoudelijk of bedrijfsafval.');
add('overheid', 'publiek', 'B1', 'de maatschappelijke ondersteuning', 'Hulp die mensen ondersteunt om zelfstandig te wonen en mee te doen in de samenleving.');
add('overheid', 'publiek', 'B2', 'de aanbesteding', 'Een procedure waarmee een publieke organisatie opdrachten laat uitvoeren door marktpartijen.');
add('overheid', 'publiek', 'B2', 'de omgevingsvisie', 'Een langetermijnvisie van de overheid op gebruik en ontwikkeling van de fysieke leefomgeving.');
add('overheid', 'publiek', 'B2', 'de publieke waarde', 'De maatschappelijke waarde die overheidshandelen voor burgers en samenleving oplevert.');
add('overheid', 'publiek', 'B2', 'de dienstverlening', 'Het geheel van diensten en contactmomenten waarmee een instantie burgers of organisaties helpt.');

// Bouw — ontwerp
add('bouw', 'ontwerp', 'B1', 'het ontwerp', 'Een uitgewerkt plan voor vorm, functie, techniek en gebruik van een gebouw of omgeving.');
add('bouw', 'ontwerp', 'B1', 'de architect', 'Een professional die gebouwen en ruimtelijke oplossingen ontwerpt en coördineert.');
add('bouw', 'ontwerp', 'B1', 'de plattegrond', 'Een horizontale tekening die ruimtes, wanden, deuren en functies laat zien.');
add('bouw', 'ontwerp', 'B1', 'de gevel', 'De buitenzijde van een gebouw, inclusief openingen, materiaal en detaillering.');
add('bouw', 'ontwerp', 'B2', 'het programma van eisen', 'Een document met functionele, technische en kwalitatieve eisen voor een project.');
add('bouw', 'ontwerp', 'B2', 'het schetsontwerp', 'Een vroege ontwerpuitwerking waarin hoofdvorm, indeling en uitgangspunten worden onderzocht.');
add('bouw', 'ontwerp', 'B2', 'het definitief ontwerp', 'De fase waarin vorm, materiaal, techniek en maatvoering voldoende zijn vastgelegd.');
add('bouw', 'ontwerp', 'B2', 'de ruimtelijke kwaliteit', 'De samenhangende kwaliteit van gebruik, beleving en toekomstwaarde van een ruimte.');

// gebouw
add('bouw', 'gebouw', 'A2', 'de fundering', 'Het onderste bouwdeel dat belastingen van een gebouw naar de bodem overdraagt.');
add('bouw', 'gebouw', 'A2', 'de vloer', 'Een horizontaal bouwdeel waarop mensen, meubels of installaties worden gedragen.');
add('bouw', 'gebouw', 'A2', 'de wand', 'Een verticaal bouwdeel dat ruimtes scheidt of belastingen kan dragen.');
add('bouw', 'gebouw', 'A2', 'het dak', 'Het bovenste bouwdeel dat een gebouw tegen weer en neerslag beschermt.');
add('bouw', 'gebouw', 'B1', 'de draagmuur', 'Een wand die belastingen van hogere bouwdelen naar de fundering overdraagt.');
add('bouw', 'gebouw', 'B1', 'de bouwschil', 'Het geheel van dak, gevels en beganegrondvloer dat binnen en buiten scheidt.');
add('bouw', 'gebouw', 'B2', 'de dilatatievoeg', 'Een geplande onderbreking die vervorming door temperatuur, krimp of zetting opvangt.');
add('bouw', 'gebouw', 'B2', 'het bouwdetail', 'Een nauwkeurige tekening van de aansluiting tussen materialen of bouwdelen.');

// constructie
add('bouw', 'constructie', 'B1', 'de draagconstructie', 'Het samenhangende systeem dat belastingen veilig naar de fundering afvoert.');
add('bouw', 'constructie', 'B1', 'de belasting', 'Een kracht of invloed die op een constructie werkt.');
add('bouw', 'constructie', 'B1', 'de balk', 'Een langwerpig constructiedeel dat vooral buiging en dwarskracht opneemt.');
add('bouw', 'constructie', 'B1', 'de kolom', 'Een verticaal constructiedeel dat vooral drukkrachten draagt.');
add('bouw', 'constructie', 'B2', 'de overspanning', 'De vrije afstand tussen twee steunpunten van een constructiedeel.');
add('bouw', 'constructie', 'B2', 'de stabiliteit', 'Het vermogen van een constructie om niet om te vallen, uit te knikken of ongewenst te vervormen.');
add('bouw', 'constructie', 'B2', 'de veiligheidsfactor', 'Een rekenkundige marge tussen verwachte belasting en beschikbare weerstand.');
add('bouw', 'constructie', 'B2', 'de vervorming', 'De verandering van vorm of afmeting van een constructiedeel onder belasting.');

// materialen
add('bouw', 'materialen', 'A2', 'het beton', 'Een steenachtig bouwmateriaal van cement, water en toeslagmateriaal.');
add('bouw', 'materialen', 'A2', 'het staal', 'Een sterk metaal dat veel wordt gebruikt in draagconstructies en verbindingen.');
add('bouw', 'materialen', 'A2', 'het hout', 'Een natuurlijk bouwmateriaal dat licht, bewerkbaar en hernieuwbaar kan zijn.');
add('bouw', 'materialen', 'A2', 'de baksteen', 'Een gebakken steen die vooral voor metselwerk en gevels wordt gebruikt.');
add('bouw', 'materialen', 'B1', 'de isolatie', 'Een materiaal of laag die warmte, geluid of vochttransport beperkt.');
add('bouw', 'materialen', 'B2', 'de druksterkte', 'De maximale drukspanning die een materiaal kan weerstaan voordat het bezwijkt.');
add('bouw', 'materialen', 'B2', 'de treksterkte', 'De maximale trekspanning die een materiaal kan weerstaan voordat het breekt.');
add('bouw', 'materialen', 'B2', 'de levensduur', 'De periode waarin een materiaal of bouwdeel zijn functie voldoende kan vervullen.');

// installaties
add('bouw', 'installaties', 'B1', 'de verwarmingsinstallatie', 'Het systeem dat warmte opwekt, verdeelt en afgeeft in een gebouw.');
add('bouw', 'installaties', 'B1', 'de ventilatie', 'Het gecontroleerd aanvoeren van verse lucht en afvoeren van vervuilde lucht.');
add('bouw', 'installaties', 'B1', 'de riolering', 'Het stelsel dat afvalwater en vaak ook regenwater afvoert.');
add('bouw', 'installaties', 'B1', 'de elektrische installatie', 'Het geheel van kabels, beveiligingen en aansluitpunten voor elektriciteit.');
add('bouw', 'installaties', 'B2', 'de warmtepomp', 'Een installatie die warmte verplaatst van een lage naar een hogere temperatuur.');
add('bouw', 'installaties', 'B2', 'de luchtbehandeling', 'Het conditioneren en verplaatsen van lucht door filtering, verwarming, koeling of bevochtiging.');
add('bouw', 'installaties', 'B2', 'het gebouwbeheersysteem', 'Een digitaal systeem dat technische installaties bewaakt en aanstuurt.');
add('bouw', 'installaties', 'B2', 'de brandmeldinstallatie', 'Een systeem dat brandverschijnselen detecteert en een alarm activeert.');

// uitvoering
add('bouw', 'uitvoering', 'B1', 'de aannemer', 'Een bedrijf dat bouw- of installatiewerk volgens een overeenkomst uitvoert.');
add('bouw', 'uitvoering', 'B1', 'de bouwplaats', 'Het terrein waar een bouwwerk wordt uitgevoerd en materialen worden opgeslagen.');
add('bouw', 'uitvoering', 'B1', 'de oplevering', 'Het formele moment waarop uitgevoerd werk wordt gecontroleerd en overgedragen.');
add('bouw', 'uitvoering', 'B1', 'de bouwplanning', 'De tijdsplanning van bouwactiviteiten, mensen, materieel en leveringen.');
add('bouw', 'uitvoering', 'B2', 'het bestek', 'Een contractdocument met technische omschrijvingen, eisen en voorwaarden voor uitvoering.');
add('bouw', 'uitvoering', 'B2', 'de aanbesteding', 'De procedure waarin opdrachtgevers marktpartijen uitnodigen en aanbiedingen beoordelen.');
add('bouw', 'uitvoering', 'B2', 'het meerwerk', 'Werk dat buiten de oorspronkelijke opdracht valt en extra kosten kan veroorzaken.');
add('bouw', 'uitvoering', 'B2', 'de uitvoeringsmethode', 'De gekozen technische en organisatorische manier waarop een bouwwerk wordt gerealiseerd.');

// duurzaamheid
add('bouw', 'duurzaamheid', 'B1', 'de energieprestatie', 'Een maat voor het berekende energiegebruik van een gebouw.');
add('bouw', 'duurzaamheid', 'B1', 'de hernieuwbare energie', 'Energie uit bronnen die natuurlijk worden aangevuld, zoals zon en wind.');
add('bouw', 'duurzaamheid', 'B1', 'de circulariteit', 'Het zo lang mogelijk behouden en opnieuw gebruiken van materialen en producten.');
add('bouw', 'duurzaamheid', 'B1', 'de klimaatadaptatie', 'Het aanpassen van gebouwen en gebieden aan gevolgen van klimaatverandering.');
add('bouw', 'duurzaamheid', 'B2', 'de milieuprestatie', 'Een beoordeling van milieueffecten van materialen en gebouwonderdelen over hun levenscyclus.');
add('bouw', 'duurzaamheid', 'B2', 'de warmtevraag', 'De hoeveelheid warmte die nodig is om een gebouw op temperatuur te houden.');
add('bouw', 'duurzaamheid', 'B2', 'het materiaalpaspoort', 'Een registratie van toegepaste materialen, herkomst, eigenschappen en hergebruiksmogelijkheden.');
add('bouw', 'duurzaamheid', 'B2', 'de natuurinclusieve bouw', 'Ontwerpen en bouwen met expliciete ruimte voor planten, dieren en ecosystemen.');

// infrastructuur
add('bouw', 'infrastructuur', 'B1', 'de infrastructuur', 'Het geheel van wegen, spoorlijnen, kabels, leidingen en andere basisnetwerken.');
add('bouw', 'infrastructuur', 'B1', 'de openbare ruimte', 'De gemeenschappelijke buitenruimte die voor iedereen toegankelijk is.');
add('bouw', 'infrastructuur', 'B1', 'de gebiedsontwikkeling', 'De samenhangende ontwikkeling van gebouwen, ruimte, infrastructuur en functies in een gebied.');
add('bouw', 'infrastructuur', 'B1', 'het bestemmingsplan', 'Een juridisch plan dat vastlegt welk gebruik en welke bebouwing op locaties zijn toegestaan.');
add('bouw', 'infrastructuur', 'B2', 'de mobiliteit', 'De mogelijkheid en het gedrag van mensen en goederen om zich te verplaatsen.');
add('bouw', 'infrastructuur', 'B2', 'de stedelijke dichtheid', 'De hoeveelheid bebouwing, inwoners of functies binnen een bepaald stedelijk oppervlak.');
add('bouw', 'infrastructuur', 'B2', 'de waterberging', 'Een voorziening of gebied dat tijdelijk regenwater opvangt om overlast te beperken.');
add('bouw', 'infrastructuur', 'B2', 'de omgevingskwaliteit', 'De totale kwaliteit van ruimte, gezondheid, veiligheid, natuur, cultuur en gebruik.');

export const professionalDomains = professionalDomainDefinitions;
export const professionalConcepts = entries.map((concept, index) => ({
  ...concept,
  id: `${concept.domain}-${String(index + 1).padStart(3, '0')}`,
}));

export const professionalStats = {
  total: professionalConcepts.length,
  byDomain: Object.fromEntries(professionalDomainDefinitions.map((domain) => [domain.id, professionalConcepts.filter((item) => item.domain === domain.id).length])),
};
