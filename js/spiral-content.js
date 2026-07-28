// Original thematic spiral for A1-B2. Each theme returns with richer vocabulary,
// conversation goals, grammar and register at every level.

const levelOrder = ['A1', 'A2', 'B1', 'B2'];

export const spiralThemes = [
  {
    id: 'kleding-uiterlijk',
    title: 'Kleding en uiterlijk',
    subtitle: 'Van een maat vragen tot praten over stijl, identiteit en duurzaamheid.',
    image: 'images/theme-kleding.svg',
    accent: 'koraal',
    levels: {
      A1: {
        canDo: ['Ik kan kleding benoemen.', 'Ik kan een kleur en maat vragen.', 'Ik kan zeggen wat ik draag.'],
        grammar: ['de/het en meervoud', 'bijvoeglijk naamwoord: een rode jas', 'deze, die, dit en dat'],
        words: {
          'Kernwoorden': ['de jas', 'de broek', 'de trui', 'het shirt', 'de jurk', 'de rok', 'de schoen', 'de sok', 'de maat', 'de kleur'],
          'Werkwoorden': ['dragen', 'passen', 'kopen', 'zoeken', 'vinden', 'aantrekken', 'uittrekken', 'betalen'],
          'Gesprekszinnen': ['Welke maat heeft u?', 'Mag ik deze passen?', 'Deze jas is te groot.', 'Hebt u dit ook in blauw?', 'Ik zoek een warme trui.', 'De schoenen passen goed.', 'Waar is de paskamer?', 'Ik neem deze.']
        },
        dialogue: [['Klant', 'Goedemiddag. Hebt u deze broek in maat 40?'], ['Verkoper', 'Ja, natuurlijk. Wilt u hem passen?'], ['Klant', 'Graag. Waar is de paskamer?'], ['Verkoper', 'Daar links, naast de kassa.']]
      },
      A2: {
        canDo: ['Ik kan kleding ruilen of terugbrengen.', 'Ik kan materiaal en pasvorm beschrijven.', 'Ik kan onderhoudsinstructies begrijpen.'],
        grammar: ['te + bijvoeglijk naamwoord', 'omdat en dus', 'scheidbare werkwoorden: aantrekken, terugbrengen'],
        words: {
          'Kernwoorden': ['de pasvorm', 'de stof', 'het katoen', 'de wol', 'de rits', 'de knoop', 'de mouw', 'de korting', 'de kassabon', 'het label'],
          'Werkwoorden': ['ruilen', 'terugbrengen', 'krimpen', 'wassen', 'strijken', 'repareren', 'bestellen', 'retourneren'],
          'Gesprekszinnen': ['De stof voelt prettig aan.', 'De mouwen zijn iets te kort.', 'Kan ik dit zonder bon ruilen?', 'Deze trui is in de was gekrompen.', 'U krijgt het bedrag terug.', 'Dit artikel is in de aanbieding.', 'Was dit op dertig graden.', 'De pasvorm valt ruim.']
        },
        dialogue: [['Klant', 'Ik wil deze trui graag terugbrengen.'], ['Medewerker', 'Wat is er precies mis mee?'], ['Klant', 'Hij is na één keer wassen gekrompen.'], ['Medewerker', 'Met de kassabon kunnen we hem ruilen of het bedrag terugbetalen.']]
      },
      B1: {
        canDo: ['Ik kan mijn kledingkeuze toelichten.', 'Ik kan over dresscodes en tweedehands kleding praten.', 'Ik kan een klacht duidelijk onderbouwen.'],
        grammar: ['terwijl, hoewel en doordat', 'relatieve zinnen met die/dat', 'werkwoord + vast voorzetsel: kiezen voor, letten op'],
        words: {
          'Kernwoorden': ['de kledingstijl', 'de dresscode', 'de gelegenheid', 'de uitstraling', 'de tweedehandswinkel', 'de productie', 'de arbeidsomstandigheid', 'de kwaliteit', 'de trend', 'de garderobe'],
          'Werkwoorden': ['combineren', 'uitstralen', 'beoordelen', 'herstellen', 'vermijden', 'investeren in', 'letten op', 'kiezen voor'],
          'Gesprekszinnen': ['Deze outfit past bij de gelegenheid.', 'Ik kies bewust voor tweedehands kleding.', 'Hoewel het duurder is, gaat het langer mee.', 'De stof is beschadigd geraakt.', 'De winkel heeft mijn klacht netjes afgehandeld.', 'Deze kleur laat je gezicht warmer lijken.', 'Op kantoor geldt een informele dresscode.', 'Ik let vooral op kwaliteit en herkomst.']
        },
        dialogue: [['Noor', 'Waarom koop jij bijna alles tweedehands?'], ['Milan', 'Omdat ik minder wil verspillen en unieke kleding leuk vind.'], ['Noor', 'Maar kun je dan wel goede kwaliteit vinden?'], ['Milan', 'Zeker, als je op materiaal, naden en pasvorm let.']]
      },
      B2: {
        canDo: ['Ik kan kleding als culturele en sociale code analyseren.', 'Ik kan genuanceerd debatteren over de mode-industrie.', 'Ik kan stijl en beeldvorming precies beschrijven.'],
        grammar: ['nominalisaties: de productie, de beeldvorming', 'nuancerende bijwoorden', 'concessieve constructies: hoe...ook, ondanks het feit dat'],
        words: {
          'Kernwoorden': ['de beeldvorming', 'de zelfexpressie', 'de consumptiecultuur', 'de ketentransparantie', 'de arbeidsuitbuiting', 'de norm', 'de representatie', 'de esthetiek', 'de status', 'de circulariteit'],
          'Werkwoorden': ['symboliseren', 'onderscheiden', 'veronderstellen', 'bekritiseren', 'normaliseren', 'uitdragen', 'ondermijnen', 'verantwoorden'],
          'Gesprekszinnen': ['Kleding fungeert als een vorm van zelfexpressie.', 'De campagne bevestigt bestaande schoonheidsnormen.', 'Het merk legt onvoldoende verantwoording af over de productieketen.', 'Hoe vernieuwend het ontwerp ook is, de productie blijft problematisch.', 'De collectie verwijst subtiel naar regionale klederdracht.', 'Consumenten onderschatten vaak de ecologische kosten.', 'De stijl straalt autoriteit uit zonder formeel te ogen.', 'Circulariteit vereist meer dan alleen recycling.']
        },
        dialogue: [['Interviewer', 'Kan mode werkelijk duurzaam zijn binnen een groeimodel?'], ['Ontwerper', 'Alleen wanneer merken niet uitsluitend op volume sturen.'], ['Interviewer', 'Dus materiaalkeuze is niet voldoende?'], ['Ontwerper', 'Precies. Ook levensduur, reparatie en arbeidsvoorwaarden moeten worden meegenomen.']]
      }
    }
  },
  {
    id: 'vakantie-reizen',
    title: 'Vakantie en reizen',
    subtitle: 'Van een kamer boeken tot reflecteren op toerisme en culturele ontmoeting.',
    image: 'images/theme-vakantie.svg',
    accent: 'geel',
    levels: {
      A1: {
        canDo: ['Ik kan vertellen waar ik op vakantie ga.', 'Ik kan een kamer boeken.', 'Ik kan eenvoudige informatie over vervoer vragen.'],
        grammar: ['gaan + infinitief', 'waarheen en wanneer', 'voorzetsels naar, met en in'],
        words: {
          'Kernwoorden': ['de vakantie', 'het hotel', 'de camping', 'de kamer', 'het strand', 'de zee', 'de koffer', 'het paspoort', 'het ticket', 'de kaart'],
          'Werkwoorden': ['boeken', 'reizen', 'vertrekken', 'aankomen', 'zwemmen', 'wandelen', 'bezoeken', 'overnachten'],
          'Gesprekszinnen': ['Ik ga naar Frankrijk.', 'Wij reizen met de auto.', 'Ik wil een kamer boeken.', 'Is het ontbijt inbegrepen?', 'Hoe laat vertrekt de trein?', 'Waar is het strand?', 'We blijven drie nachten.', 'Fijne vakantie!']
        },
        dialogue: [['Gast', 'Goedemiddag. Ik wil graag een kamer boeken.'], ['Receptionist', 'Voor hoeveel nachten?'], ['Gast', 'Voor drie nachten, vanaf vrijdag.'], ['Receptionist', 'We hebben nog een tweepersoonskamer beschikbaar.']]
      },
      A2: {
        canDo: ['Ik kan een reservering wijzigen.', 'Ik kan een probleem tijdens een reis uitleggen.', 'Ik kan een eenvoudige reiservaring navertellen.'],
        grammar: ['perfectum met zijn en hebben', 'eerst, daarna, uiteindelijk', 'als en wanneer'],
        words: {
          'Kernwoorden': ['de reservering', 'de vertraging', 'de annulering', 'de reisverzekering', 'de accommodatie', 'de bezienswaardigheid', 'de bagage', 'de receptie', 'de route', 'de excursie'],
          'Werkwoorden': ['annuleren', 'wijzigen', 'inchecken', 'uitchecken', 'verdwalen', 'missen', 'klagen', 'aanraden'],
          'Gesprekszinnen': ['Mijn vlucht is geannuleerd.', 'Ik wil mijn reservering wijzigen.', 'Onze bagage is niet aangekomen.', 'Kunt u een rustig restaurant aanraden?', 'We zijn onderweg verdwaald.', 'De kamer kwam niet overeen met de foto.', 'U kunt bij de receptie inchecken.', 'Uiteindelijk hebben we een andere trein genomen.']
        },
        dialogue: [['Reiziger', 'Onze trein heeft twee uur vertraging.'], ['Medewerker', 'U kunt via Utrecht verder reizen.'], ['Reiziger', 'Missen we dan onze aansluiting?'], ['Medewerker', 'Waarschijnlijk niet. Ik print een nieuwe route voor u.']]
      },
      B1: {
        canDo: ['Ik kan reiservaringen levendig vertellen.', 'Ik kan verwachtingen en werkelijkheid vergelijken.', 'Ik kan over verantwoord toerisme discussiëren.'],
        grammar: ['imperfectum versus perfectum', 'betrekkelijke bijzinnen', 'doordat, waardoor en daarom'],
        words: {
          'Kernwoorden': ['de reisroute', 'de bestemming', 'de tussenstop', 'de reisindruk', 'de lokale bevolking', 'de reisorganisatie', 'de overnachtingsplek', 'de verwachting', 'de teleurstelling', 'het hoogseizoen'],
          'Werkwoorden': ['rondreizen', 'ontdekken', 'tegenvallen', 'meevallen', 'zich aanpassen aan', 'rekening houden met', 'vermijden', 'bijdragen aan'],
          'Gesprekszinnen': ['De bestemming bleek rustiger dan verwacht.', 'We reisden buiten het hoogseizoen om drukte te vermijden.', 'De gids vertelde verhalen die je niet in reisboeken vindt.', 'Doordat de veerboot uitviel, moesten we onze route aanpassen.', 'Ik probeer lokale ondernemingen te ondersteunen.', 'De reis heeft mijn beeld van het land veranderd.', 'We verbleven bij een familie die kamers verhuurt.', 'Het landschap maakte diepe indruk op mij.']
        },
        dialogue: [['Sanne', 'Wat maakte die reis zo bijzonder?'], ['Youssef', 'Vooral het contact met de mensen die daar wonen.'], ['Sanne', 'Was het lastig om je aan de gewoonten aan te passen?'], ['Youssef', 'Soms wel, maar juist daardoor begreep ik de cultuur beter.']]
      },
      B2: {
        canDo: ['Ik kan de maatschappelijke impact van toerisme analyseren.', 'Ik kan een genuanceerd reisessay bespreken.', 'Ik kan beleidsopties afwegen.'],
        grammar: ['voorwaardelijke en concessieve zinnen', 'abstracte oorzaak-gevolgverbindingen', 'indirecte rede en bronverwijzing'],
        words: {
          'Kernwoorden': ['het massatoerisme', 'de draagkracht', 'de verdringing', 'de seizoensafhankelijkheid', 'het cultureel erfgoed', 'de authenticiteit', 'de toeristenbelasting', 'de mobiliteitsdruk', 'de beeldvorming', 'de wederkerigheid'],
          'Werkwoorden': ['commercialiseren', 'romantiseren', 'ontwrichten', 'reguleren', 'spreiden', 'faciliteren', 'problematiseren', 'afwegen'],
          'Gesprekszinnen': ['Massatoerisme zet de leefbaarheid van historische centra onder druk.', 'De auteur romantiseert het idee van de ongerepte bestemming.', 'Hoewel toerisme inkomsten genereert, worden de opbrengsten ongelijk verdeeld.', 'Een bezoekersplafond kan de druk spreiden, maar beperkt ook lokale ondernemers.', 'De reisbeschrijving onthult meer over de reiziger dan over het bezochte land.', 'Beleid moet zowel economische als sociale draagkracht meewegen.', 'Authenticiteit wordt soms juist door marketing geconstrueerd.', 'Duurzaam reizen veronderstelt wederkerigheid in plaats van consumptie.']
        },
        dialogue: [['Beleidsmaker', 'Moeten we bezoekersaantallen in het centrum beperken?'], ['Ondernemer', 'Dat kan, maar dan moet u alternatieve gebieden beter ontsluiten.'], ['Beleidsmaker', 'Hoe voorkomen we dat de druk zich simpelweg verplaatst?'], ['Ondernemer', 'Door spreiding te combineren met duidelijke grenzen en lokale inspraak.']]
      }
    }
  },
  {
    id: 'dieren-natuur',
    title: 'Dieren en natuur',
    subtitle: 'Van huisdieren benoemen tot spreken over gedrag, biodiversiteit en ethiek.',
    image: 'images/theme-dieren.svg',
    accent: 'groen',
    levels: {
      A1: {
        canDo: ['Ik kan bekende dieren benoemen.', 'Ik kan over een huisdier vertellen.', 'Ik kan zeggen wat een dier doet.'],
        grammar: ['enkelvoud en meervoud', 'hebben en zijn', 'er is/er zijn'],
        words: {
          'Kernwoorden': ['de hond', 'de kat', 'de vogel', 'de vis', 'het konijn', 'het paard', 'de koe', 'het schaap', 'het bos', 'de boom'],
          'Werkwoorden': ['lopen', 'vliegen', 'zwemmen', 'eten', 'slapen', 'blaffen', 'miauwen', 'voeren'],
          'Gesprekszinnen': ['Ik heb een kat.', 'De hond ligt in de tuin.', 'Er zijn veel vogels in het park.', 'Het konijn eet een wortel.', 'Mag ik de hond aaien?', 'Hoe oud is je kat?', 'Wij wandelen in het bos.', 'De eend zwemt in de vijver.']
        },
        dialogue: [['Mila', 'Heb jij een huisdier?'], ['Omar', 'Ja, ik heb een kleine hond.'], ['Mila', 'Hoe heet hij?'], ['Omar', 'Hij heet Max en hij is drie jaar oud.']]
      },
      A2: {
        canDo: ['Ik kan uitleggen hoe ik een dier verzorg.', 'Ik kan een afspraak bij de dierenarts maken.', 'Ik kan dieren en leefgebieden vergelijken.'],
        grammar: ['moeten, mogen en kunnen', 'om te + infinitief', 'vergelijking: groter dan, even snel als'],
        words: {
          'Kernwoorden': ['de dierenarts', 'de voeding', 'de vacht', 'de kooi', 'de riem', 'het leefgebied', 'het wild dier', 'de boerderij', 'de poot', 'de wond'],
          'Werkwoorden': ['verzorgen', 'uitlaten', 'onderzoeken', 'behandelen', 'beschermen', 'loslaten', 'bijten', 'genezen'],
          'Gesprekszinnen': ['Mijn hond moet worden onderzocht.', 'De kat eet sinds gisteren niet meer.', 'Je moet een hond dagelijks uitlaten.', 'Dit dier leeft vooral in natte gebieden.', 'Een vos is kleiner dan een wolf.', 'Het dier mag niet zonder riem lopen.', 'De wond lijkt goed te genezen.', 'We brengen de vogel naar de opvang.']
        },
        dialogue: [['Eigenaar', 'Mijn kat loopt sinds vanmorgen mank.'], ['Dierenarts', 'Heeft ze misschien gevochten of is ze gevallen?'], ['Eigenaar', 'Dat weet ik niet, maar ze wil haar poot niet gebruiken.'], ['Dierenarts', 'Ik zal haar eerst rustig onderzoeken.']]
      },
      B1: {
        canDo: ['Ik kan over dierenwelzijn argumenteren.', 'Ik kan gedrag en leefomgeving beschrijven.', 'Ik kan informatie over natuurbeheer samenvatten.'],
        grammar: ['passief: wordt beschermd', 'doordat en waardoor', 'zich gedragen, zich aanpassen aan'],
        words: {
          'Kernwoorden': ['het dierenwelzijn', 'de soort', 'het gedrag', 'de voedselketen', 'het reservaat', 'de populatie', 'de jacht', 'de opvang', 'de habitat', 'de bedreiging'],
          'Werkwoorden': ['zich voortplanten', 'zich aanpassen', 'waarnemen', 'uitsterven', 'herstellen', 'verstoren', 'handhaven', 'opvangen'],
          'Gesprekszinnen': ['De soort wordt bedreigd doordat haar leefgebied kleiner wordt.', 'Dieren passen hun gedrag aan menselijke activiteit aan.', 'De populatie is de afgelopen jaren langzaam hersteld.', 'In het reservaat wordt streng op jacht gecontroleerd.', 'Goede opvang is meer dan alleen voedsel geven.', 'Het onderzoek laat zien dat licht dieren verstoort.', 'Boeren en natuurbeheerders moeten afspraken maken.', 'Ik vind dat dierenwelzijn zwaarder moet wegen.']
        },
        dialogue: [['Beheerder', 'We zien steeds minder weidevogels in dit gebied.'], ['Boer', 'Welke maatregelen zouden volgens u helpen?'], ['Beheerder', 'Later maaien en stroken gras laten staan.'], ['Boer', 'Dat kan, als we samen naar de praktische gevolgen kijken.']]
      },
      B2: {
        canDo: ['Ik kan ethische standpunten over dieren analyseren.', 'Ik kan biodiversiteitsbeleid kritisch bespreken.', 'Ik kan metaforisch en idiomatisch taalgebruik met dieren herkennen.'],
        grammar: ['modale nuancering', 'argumentatieve concessie', 'abstracte verwijzing met hetgeen, waarbij en waardoor'],
        words: {
          'Kernwoorden': ['de biodiversiteit', 'de intrinsieke waarde', 'de soortenrijkdom', 'de ecologische corridor', 'de predatie', 'de domesticatie', 'de intensieve veehouderij', 'de natuurinclusiviteit', 'het ecosysteem', 'de herintroductie'],
          'Werkwoorden': ['rechtvaardigen', 'instrumentaliseren', 'herintroduceren', 'compenseren', 'monitoren', 'interveniëren', 'coëxisteren', 'prioriteren'],
          'Gesprekszinnen': ['De discussie draait om de intrinsieke waarde van het dier.', 'Herintroductie is zinloos zonder voldoende verbonden leefgebied.', 'Menselijke belangen worden doorgaans boven ecologische belangen geplaatst.', 'De maatregel kan lokaal effectief zijn, terwijl het bredere systeem onveranderd blijft.', 'De wolf fungeert in het debat zowel als soort als symbool.', 'Natuurbeleid vereist keuzes die niet volledig waardevrij zijn.', 'Intensieve veehouderij instrumentaliseert dieren voor maximale productie.', 'Coëxistentie vraagt om compensatie, preventie en maatschappelijk vertrouwen.']
        },
        dialogue: [['Ecoloog', 'Is ingrijpen nog natuurbeheer als we elk proces sturen?'], ['Filosoof', 'Niet-ingrijpen is eveneens een keuze met gevolgen.'], ['Ecoloog', 'Waar ligt dan de grens?'], ['Filosoof', 'Bij een transparante afweging van ecologische kennis, waarden en verantwoordelijkheid.']]
      }
    }
  },
  {
    id: 'huis-huishouden',
    title: 'Huis en huishouden',
    subtitle: 'Van kamers en klusjes tot woningmarkt, energie en stedelijke ontwikkeling.',
    image: 'images/theme-wonen.svg',
    accent: 'blauw',
    levels: {
      A1: {
        canDo: ['Ik kan kamers en meubels benoemen.', 'Ik kan zeggen waar iets staat.', 'Ik kan eenvoudige huishoudelijke taken bespreken.'],
        grammar: ['plaatsvoorzetsels', 'staan, liggen en hangen', 'gebiedende wijs'],
        words: {
          'Kernwoorden': ['de woonkamer', 'de slaapkamer', 'de keuken', 'de badkamer', 'de tafel', 'de stoel', 'het bed', 'de kast', 'de lamp', 'de sleutel'],
          'Werkwoorden': ['wonen', 'schoonmaken', 'koken', 'wassen', 'opruimen', 'openen', 'sluiten', 'verhuizen'],
          'Gesprekszinnen': ['De tafel staat in de keuken.', 'De jas hangt aan de kapstok.', 'Ruim je kamer op.', 'Waar ligt de sleutel?', 'Wij wonen op de tweede verdieping.', 'De badkamer is naast de slaapkamer.', 'Ik maak vandaag de keuken schoon.', 'Doe de deur op slot.']
        },
        dialogue: [['Lina', 'Waar staat de stofzuiger?'], ['Sam', 'In de kast naast de wasmachine.'], ['Lina', 'En waar zijn de schoonmaakdoeken?'], ['Sam', 'Die liggen op de bovenste plank.']]
      },
      A2: {
        canDo: ['Ik kan een storing of gebrek melden.', 'Ik kan afspraken over het huishouden maken.', 'Ik kan een woning beschrijven en vergelijken.'],
        grammar: ['er + plaats', 'scheidbare werkwoorden: opruimen, aanzetten', 'moeten en hoeven'],
        words: {
          'Kernwoorden': ['de verwarming', 'de lekkage', 'de afvoer', 'het stopcontact', 'de huur', 'de borg', 'de verhuurder', 'de reparatie', 'het onderhoud', 'de energierekening'],
          'Werkwoorden': ['melden', 'repareren', 'aansluiten', 'aanzetten', 'uitzetten', 'verdelen', 'besparen', 'onderhouden'],
          'Gesprekszinnen': ['Er lekt water onder de gootsteen.', 'De verwarming doet het niet.', 'Wanneer kan de monteur langskomen?', 'We verdelen de huishoudelijke taken.', 'Je hoeft vandaag niet te stofzuigen.', 'Deze woning is lichter dan de vorige.', 'De borg wordt na de inspectie terugbetaald.', 'We proberen minder energie te gebruiken.']
        },
        dialogue: [['Huurder', 'Ik wil een lekkage in de badkamer melden.'], ['Verhuurder', 'Sinds wanneer heeft u daar last van?'], ['Huurder', 'Sinds gisteravond. Het water loopt langs de muur.'], ['Verhuurder', 'Ik stuur vandaag nog een monteur.']]
      },
      B1: {
        canDo: ['Ik kan woonwensen en problemen uitgebreid toelichten.', 'Ik kan over betaalbaarheid en energiegebruik spreken.', 'Ik kan deelnemen aan overleg met buren of verhuurder.'],
        grammar: ['voorwaardelijke zinnen', 'passieve constructies', 'formeel verzoek met zou/kunt u'],
        words: {
          'Kernwoorden': ['de woningmarkt', 'de hypotheek', 'de huurverhoging', 'de isolatie', 'het energielabel', 'de woonruimte', 'de overlast', 'de bewonersvereniging', 'de renovatie', 'de doorstroming'],
          'Werkwoorden': ['verduurzamen', 'renoveren', 'financieren', 'bemiddelen', 'overleggen', 'bezwaar maken tegen', 'in aanmerking komen voor', 'beschikken over'],
          'Gesprekszinnen': ['De huurverhoging staat niet in verhouding tot het onderhoud.', 'Als we beter isoleren, daalt het energieverbruik.', 'De bewonersvereniging wil met de verhuurder overleggen.', 'Ik kom mogelijk in aanmerking voor een subsidie.', 'De woning beschikt over drie slaapkamers en een ruime zolder.', 'Geluidsoverlast moet eerst goed worden vastgelegd.', 'Door de renovatie kunnen bewoners tijdelijk niet thuis blijven.', 'Betaalbare doorstroming blijft een groot probleem.']
        },
        dialogue: [['Bewoner', 'We ervaren al maanden geluidsoverlast van de installatie.'], ['Beheerder', 'Hebben meerdere bewoners dit gemeld?'], ['Bewoner', 'Ja, en we hebben de momenten bijgehouden.'], ['Beheerder', 'Dan plannen we een meting en bespreken we mogelijke maatregelen.']]
      },
      B2: {
        canDo: ['Ik kan woning- en ruimtelijk beleid analyseren.', 'Ik kan belangen van bewoners, overheid en markt afwegen.', 'Ik kan architectonische en sociale kwaliteit precies bespreken.'],
        grammar: ['participiale constructies', 'beleidsregister en nominalisatie', 'complexe oorzaak-gevolgrelaties'],
        words: {
          'Kernwoorden': ['de woningnood', 'de verdichting', 'de leefbaarheid', 'de gebiedsontwikkeling', 'de sociale huurvoorraad', 'de gentrificatie', 'de ruimtelijke ordening', 'de wooncoöperatie', 'de klimaatadaptatie', 'de architectonische kwaliteit'],
          'Werkwoorden': ['verdichten', 'herbestemmen', 'verdringen', 'reguleren', 'faciliteren', 'borgen', 'prioriteren', 'integreren'],
          'Gesprekszinnen': ['Verdichting kan voorzieningen versterken, mits de openbare ruimte wordt mee-ontworpen.', 'De herbestemming van kantoren levert woningen op maar niet automatisch leefbare buurten.', 'Sociale huurders dreigen door prijsstijgingen te worden verdrongen.', 'Klimaatadaptatie moet integraal in gebiedsontwikkeling worden geborgd.', 'De gemeente balanceert tussen snelheid, betaalbaarheid en kwaliteit.', 'Participatie verliest geloofwaardigheid wanneer keuzes vooraf vaststaan.', 'Een wooncoöperatie kan zeggenschap en betaalbaarheid combineren.', 'Architectonische kwaliteit laat zich niet uitsluitend in vierkante meters uitdrukken.']
        },
        dialogue: [['Stedenbouwkundige', 'Het plan voegt achthonderd woningen toe, maar weinig publieke ruimte.'], ['Ontwikkelaar', 'Meer ruimte betekent minder woningen en hogere prijzen.'], ['Stedenbouwkundige', 'Zonder leefkwaliteit ontstaan later hogere maatschappelijke kosten.'], ['Ontwikkelaar', 'Dan moeten we dichtheid slimmer combineren met gedeelde voorzieningen.']]
      }
    }
  },
  {
    id: 'eten-koken',
    title: 'Eten en koken',
    subtitle: 'Van ingrediënten en smaken tot eetcultuur, gezondheid en voedselsystemen.',
    image: 'images/theme-eten.svg',
    accent: 'oranje',
    levels: {
      A1: {
        canDo: ['Ik kan eten en drinken benoemen.', 'Ik kan zeggen wat ik lekker vind.', 'Ik kan een eenvoudig recept volgen.'],
        grammar: ['geen en niet', 'hoeveel en veel/weinig', 'gebiedende wijs in recepten'],
        words: {
          'Kernwoorden': ['het brood', 'de kaas', 'de melk', 'het water', 'de groente', 'het fruit', 'de rijst', 'de soep', 'het vlees', 'het ei'],
          'Werkwoorden': ['eten', 'drinken', 'snijden', 'koken', 'bakken', 'proeven', 'maken', 'serveren'],
          'Gesprekszinnen': ['Ik eet graag groente.', 'Ik drink geen melk.', 'Snijd de ui in stukjes.', 'Kook de rijst tien minuten.', 'De soep is warm.', 'Dit smaakt lekker.', 'Hoeveel eieren hebben we nodig?', 'Het eten is klaar.']
        },
        dialogue: [['Aya', 'Wat eten we vanavond?'], ['Tom', 'Ik maak rijst met groente.'], ['Aya', 'Hebben we nog paprika en ui?'], ['Tom', 'Ja, maar we hebben geen tomaten meer.']]
      },
      A2: {
        canDo: ['Ik kan een recept uitleggen.', 'Ik kan dieetwensen of allergieën bespreken.', 'Ik kan smaken en bereidingswijzen beschrijven.'],
        grammar: ['eerst, vervolgens, daarna', 'om te + infinitief', 'betrekkelijk voornaamwoord dat/die'],
        words: {
          'Kernwoorden': ['het recept', 'het ingrediënt', 'de portie', 'de oven', 'de pan', 'de kruiden', 'de allergie', 'de houdbaarheidsdatum', 'de voedingswaarde', 'de maaltijd'],
          'Werkwoorden': ['voorverwarmen', 'toevoegen', 'roeren', 'opwarmen', 'afkoelen', 'bewaren', 'invriezen', 'vermijden'],
          'Gesprekszinnen': ['Verwarm de oven eerst voor.', 'Voeg daarna de kruiden toe.', 'Ik ben allergisch voor noten.', 'Dit gerecht bevat geen lactose.', 'De saus moet nog even afkoelen.', 'Bewaar de restjes in de koelkast.', 'Het gerecht dat we gisteren maakten was pittig.', 'Ik probeer minder zout te gebruiken.']
        },
        dialogue: [['Gast', 'Zit er pinda in deze saus?'], ['Kok', 'Nee, maar er worden in de keuken wel noten gebruikt.'], ['Gast', 'Ik heb een ernstige allergie.'], ['Kok', 'Dan maak ik liever een apart gerecht voor u.']]
      },
      B1: {
        canDo: ['Ik kan over eetcultuur en gewoonten vertellen.', 'Ik kan voedingskeuzes onderbouwen.', 'Ik kan een gerecht uitgebreid beoordelen.'],
        grammar: ['terwijl en hoewel', 'werkwoord + voorzetsel: bestaan uit, zorgen voor', 'men en passief in recepten en uitleg'],
        words: {
          'Kernwoorden': ['de eetcultuur', 'de voedingsstof', 'de bereidingswijze', 'de smaakbalans', 'de seizoensgroente', 'de voedselverspilling', 'de portiegrootte', 'de herkomst', 'de gewoonte', 'de gastvrijheid'],
          'Werkwoorden': ['bereiden', 'kruiden', 'fermenteren', 'combineren', 'matigen', 'verspillen', 'waarderen', 'overschakelen op'],
          'Gesprekszinnen': ['Het gerecht bestaat uit eenvoudige seizoensproducten.', 'Hoewel de saus romig smaakt, bevat hij geen zuivel.', 'De frisse kruiden zorgen voor een goede smaakbalans.', 'We zijn geleidelijk op minder vlees overgeschakeld.', 'Voedselverspilling begint vaak bij te grote porties.', 'Samen eten speelt in veel culturen een sociale rol.', 'De bereidingswijze bepaalt hoeveel structuur behouden blijft.', 'Ik waardeer vooral dat de kok lokale ingrediënten gebruikt.']
        },
        dialogue: [['Eva', 'Waarom smaakt deze soep zoveel voller dan de mijne?'], ['Kok', 'Ik rooster de groenten eerst en voeg pas later water toe.'], ['Eva', 'Maakt dat echt zo veel verschil?'], ['Kok', 'Ja, daardoor worden de natuurlijke suikers sterker en ontstaat meer diepte.']]
      },
      B2: {
        canDo: ['Ik kan voedselbeleid en productieketens analyseren.', 'Ik kan culinair taalgebruik interpreteren.', 'Ik kan genuanceerd debatteren over gezondheid, cultuur en duurzaamheid.'],
        grammar: ['abstracte samenstellingen', 'metaforisch en evaluatief taalgebruik', 'voorbehoud: voor zover, mits, naarmate'],
        words: {
          'Kernwoorden': ['het voedselsysteem', 'de voedselzekerheid', 'de keten', 'de monocultuur', 'de regeneratieve landbouw', 'de culinaire traditie', 'de smaakbeleving', 'de ultrabewerking', 'de toegankelijkheid', 'de prijsprikkel'],
          'Werkwoorden': ['veredelen', 'bewerken', 'distribueren', 'stimuleren', 'ontmoedigen', 'etiketteren', 'problematiseren', 'herwaarderen'],
          'Gesprekszinnen': ['Gezonde keuzes zijn alleen realistisch wanneer gezond voedsel toegankelijk en betaalbaar is.', 'De chef herwaardeert een traditioneel gerecht zonder de oorsprong te verbergen.', 'Ultrabewerking beïnvloedt niet alleen voedingswaarde maar ook eetgedrag.', 'Naarmate ketens langer worden, neemt de afstand tussen producent en consument toe.', 'Een prijsprikkel kan gedrag sturen, mits alternatieven beschikbaar zijn.', 'Het menu speelt bewust met bitterheid, textuur en temperatuur.', 'Voedselzekerheid kan niet los worden gezien van bodemkwaliteit en klimaat.', 'Culinaire innovatie balanceert tussen toe-eigening en uitwisseling.']
        },
        dialogue: [['Onderzoeker', 'Waarom is individueel advies onvoldoende om eetgedrag te veranderen?'], ['Beleidsmaker', 'Omdat beschikbaarheid, prijs en marketing de keuzeomgeving bepalen.'], ['Onderzoeker', 'Moeten we ongezonde producten dan zwaarder belasten?'], ['Beleidsmaker', 'Alleen als we tegelijk betaalbare en aantrekkelijke alternatieven creëren.']]
      }
    }
  },
  {
    id: 'supermarkt-markt',
    title: 'Supermarkt en markt',
    subtitle: 'Van boodschappen doen tot spreken over prijzen, consumentengedrag en ketens.',
    image: 'images/theme-markt.svg',
    accent: 'rood',
    levels: {
      A1: {
        canDo: ['Ik kan producten vinden en prijzen vragen.', 'Ik kan hoeveelheden noemen.', 'Ik kan bij de kassa betalen.'],
        grammar: ['een kilo, een liter, een stuk', 'hoeveel kost/kosten', 'aanwijzende voornaamwoorden'],
        words: {
          'Kernwoorden': ['de supermarkt', 'de markt', 'de winkelwagen', 'het mandje', 'de kassa', 'de prijs', 'de aanbieding', 'de groente', 'het fruit', 'de bon'],
          'Werkwoorden': ['halen', 'wegen', 'kiezen', 'kosten', 'betalen', 'pinnen', 'zoeken', 'meenemen'],
          'Gesprekszinnen': ['Waar staat de melk?', 'Wat kost een kilo appels?', 'Ik wil graag twee tomaten.', 'Is dit in de aanbieding?', 'U kunt hier pinnen.', 'Wilt u de bon mee?', 'Deze appels zijn goedkoper.', 'Ik neem een halve kilo.']
        },
        dialogue: [['Klant', 'Goedemorgen. Wat kosten deze aardbeien?'], ['Marktkoopman', 'Vier euro per bakje, twee voor zeven euro.'], ['Klant', 'Dan neem ik twee bakjes.'], ['Marktkoopman', 'Alstublieft. Wilt u er een tasje bij?']]
      },
      A2: {
        canDo: ['Ik kan informatie op verpakkingen begrijpen.', 'Ik kan een product terugbrengen of een fout melden.', 'Ik kan aanbiedingen vergelijken.'],
        grammar: ['er + hoeveelheid', 'comparatief en superlatief', 'indirecte vraag: weet u waar...'],
        words: {
          'Kernwoorden': ['de verpakking', 'de barcode', 'de houdbaarheidsdatum', 'de kassabon', 'het schap', 'het huismerk', 'de voorraad', 'de klantenservice', 'de korting', 'de statiegeldfles'],
          'Werkwoorden': ['vergelijken', 'scannen', 'rekenen', 'terugbrengen', 'omruilen', 'controleren', 'aanvullen', 'besparen'],
          'Gesprekszinnen': ['Weet u waar de glutenvrije producten staan?', 'Er zijn nog drie flessen op voorraad.', 'Het huismerk is goedkoper dan het A-merk.', 'De korting is niet bij de kassa berekend.', 'Ik wil dit product graag omruilen.', 'De verpakking is beschadigd.', 'Deze yoghurt is over de datum.', 'Met de klantenkaart spaart u punten.']
        },
        dialogue: [['Klant', 'Volgens het bord krijg ik twintig procent korting.'], ['Medewerker', 'Ik zie dat de korting niet is verwerkt.'], ['Klant', 'Kunt u het bedrag corrigeren?'], ['Medewerker', 'Natuurlijk. U krijgt het verschil direct terug.']]
      },
      B1: {
        canDo: ['Ik kan koopgedrag en prijsverschillen bespreken.', 'Ik kan onderhandelen op een markt.', 'Ik kan argumenteren over lokaal en seizoensgebonden kopen.'],
        grammar: ['hoe...hoe...', 'aangezien en daarom', 'werkwoord + voorzetsel: besparen op, kiezen voor'],
        words: {
          'Kernwoorden': ['de consument', 'de prijs-kwaliteitverhouding', 'de impulsaankoop', 'de reclame', 'het keurmerk', 'de lokale producent', 'de tussenhandel', 'de seizoensaanbieding', 'de verspilling', 'de marge'],
          'Werkwoorden': ['onderhandelen', 'verleiden', 'vergelijken', 'beïnvloeden', 'inkopen', 'verspillen', 'besparen op', 'kiezen voor'],
          'Gesprekszinnen': ['Hoe opvallender de verpakking, hoe sneller mensen het product zien.', 'Ik kies voor lokale producten omdat de herkomst duidelijker is.', 'De prijs-kwaliteitverhouding verschilt sterk per merk.', 'Aan het eind van de markt kun je soms over de prijs onderhandelen.', 'Reclame beïnvloedt meer keuzes dan consumenten denken.', 'Supermarkten kopen groot in en kunnen daardoor lagere prijzen aanbieden.', 'Een keurmerk zegt niet automatisch alles over duurzaamheid.', 'We plannen maaltijden om minder voedsel te verspillen.']
        },
        dialogue: [['Klant', 'Kunt u iets met de prijs doen als ik een hele doos neem?'], ['Verkoper', 'Bij twaalf stuks kan ik tien procent korting geven.'], ['Klant', 'En als ik ook de peren meeneem?'], ['Verkoper', 'Dan maken we er samen dertig euro van.']]
      },
      B2: {
        canDo: ['Ik kan marktwerking, prijsopbouw en ketenmacht analyseren.', 'Ik kan consumentenbeleid evalueren.', 'Ik kan framing in reclame en producttaal herkennen.'],
        grammar: ['causale ketens', 'kritische bronverwijzing', 'afstandelijk register met blijken, suggereren en duiden op'],
        words: {
          'Kernwoorden': ['de marktmacht', 'de prijsopbouw', 'de inkoopmacht', 'de leveringsketen', 'de gedragssturing', 'de schapruimte', 'de prijsvolatiliteit', 'de informatieasymmetrie', 'de producentenprijs', 'de consumentenbescherming'],
          'Werkwoorden': ['doorberekenen', 'positioneren', 'segmenteren', 'reguleren', 'misleiden', 'onderdrukken', 'afwentelen', 'transparant maken'],
          'Gesprekszinnen': ['De lage consumentenprijs kan worden afgewenteld op producenten en arbeidsvoorwaarden.', 'Marktmacht bepaalt mede welke producten schapruimte krijgen.', 'De term “natuurlijk” suggereert kwaliteit zonder juridisch veel te betekenen.', 'Prijsvolatiliteit wordt slechts gedeeltelijk aan consumenten doorberekend.', 'Meer transparantie verkleint de informatieasymmetrie niet automatisch.', 'Aanbiedingen sturen gedrag door een tijdelijk gevoel van schaarste.', 'Regulering moet misleiding beperken zonder elke commerciële boodschap te verbieden.', 'De prijsopbouw blijft ondoorzichtig zolang ketenpartijen geen marges delen.']
        },
        dialogue: [['Journalist', 'Waarom stijgt de winkelprijs terwijl de producentenprijs daalt?'], ['Econoom', 'Contracten, energie, logistiek en marges reageren niet allemaal tegelijk.'], ['Journalist', 'Is dat voldoende verklaring voor het verschil?'], ['Econoom', 'Niet altijd. Zonder ketentransparantie blijft machtsmisbruik moeilijk aantoonbaar.']]
      }
    }
  },
  {
    id: 'emoties-relaties',
    title: 'Emoties en relaties',
    subtitle: 'Van basisgevoelens tot empathie, conflict, nuance en psychologische taal.',
    image: 'images/theme-emoties.svg',
    accent: 'paars',
    levels: {
      A1: {
        canDo: ['Ik kan zeggen hoe ik me voel.', 'Ik kan iemand troosten of feliciteren.', 'Ik kan eenvoudige redenen geven.'],
        grammar: ['zich voelen', 'want als reden', 'heel, een beetje en niet zo'],
        words: {
          'Kernwoorden': ['blij', 'boos', 'bang', 'verdrietig', 'moe', 'zenuwachtig', 'rustig', 'trots', 'verliefd', 'alleen'],
          'Werkwoorden': ['voelen', 'lachen', 'huilen', 'missen', 'hopen', 'houden van', 'troosten', 'feliciteren'],
          'Gesprekszinnen': ['Ik voel me blij.', 'Waarom ben je verdrietig?', 'Ik ben zenuwachtig voor de toets.', 'Gefeliciteerd met je verjaardag!', 'Ik mis mijn familie.', 'Maak je geen zorgen.', 'Ik ben trots op je.', 'Dat vind ik jammer.']
        },
        dialogue: [['Nina', 'Je bent zo stil. Gaat het goed?'], ['Leo', 'Ik ben een beetje zenuwachtig voor mijn examen.'], ['Nina', 'Dat begrijp ik. Je hebt goed geleerd.'], ['Leo', 'Dank je. Dat helpt.']]
      },
      A2: {
        canDo: ['Ik kan gevoelens en hun oorzaken uitleggen.', 'Ik kan excuses aanbieden en reageren.', 'Ik kan steun vragen of geven.'],
        grammar: ['omdat en daardoor', 'zich zorgen maken over', 'zou kunnen als advies'],
        words: {
          'Kernwoorden': ['de teleurstelling', 'de opluchting', 'de schaamte', 'de jaloezie', 'het vertrouwen', 'de spanning', 'de eenzaamheid', 'de ruzie', 'het excuus', 'de steun'],
          'Werkwoorden': ['zich schamen', 'zich ergeren', 'zich zorgen maken', 'vertrouwen', 'vergeven', 'begrijpen', 'kalmeren', 'steunen'],
          'Gesprekszinnen': ['Ik was teleurgesteld omdat je niet belde.', 'Het spijt me dat ik te laat was.', 'Ik maak me zorgen over mijn vader.', 'Misschien kun je er met iemand over praten.', 'Na het gesprek voelde ik veel opluchting.', 'Ik begrijp dat je boos bent.', 'Kun je me even met rust laten?', 'We hebben onze ruzie uitgepraat.']
        },
        dialogue: [['Ravi', 'Het spijt me dat ik zo kort reageerde.'], ['Elise', 'Ik schrok ervan en voelde me niet serieus genomen.'], ['Ravi', 'Dat begrijp ik. Ik had eerst moeten luisteren.'], ['Elise', 'Dank je. Laten we het rustig opnieuw bespreken.']]
      },
      B1: {
        canDo: ['Ik kan emotionele nuances en grenzen uitdrukken.', 'Ik kan een conflict constructief bespreken.', 'Ik kan empathisch reageren zonder direct advies te geven.'],
        grammar: ['alsof en terwijl', 'modaliteit: ik zou, ik heb behoefte aan', 'indirecte formulering en ik-boodschappen'],
        words: {
          'Kernwoorden': ['de frustratie', 'de onzekerheid', 'de verbondenheid', 'de waardering', 'de behoefte', 'de grens', 'het misverstand', 'de kwetsbaarheid', 'de irritatie', 'de veerkracht'],
          'Werkwoorden': ['erkennen', 'relativeren', 'vermijden', 'confronteren', 'afreageren', 'zich terugtrekken', 'openstaan voor', 'rekening houden met'],
          'Gesprekszinnen': ['Ik heb behoefte aan duidelijkheid voordat we verdergaan.', 'Wanneer je me onderbreekt, voel ik me niet gehoord.', 'Ik wil je gevoel erkennen zonder meteen een oplossing te geven.', 'Hij reageerde alsof de kritiek persoonlijk bedoeld was.', 'We moeten grenzen aangeven voordat frustratie zich opstapelt.', 'Ik waardeer dat je hier zo open over bent.', 'Het misverstand ontstond doordat we verschillende verwachtingen hadden.', 'Na een moeilijke periode bleek ze verrassend veerkrachtig.']
        },
        dialogue: [['Manager', 'Ik merk dat je de laatste tijd stiller bent in vergaderingen.'], ['Medewerker', 'Ik heb het gevoel dat mijn bijdrage vaak snel wordt afgekapt.'], ['Manager', 'Dank dat je dat zegt. Kun je een voorbeeld geven?'], ['Medewerker', 'Gisteren werd mijn voorstel beoordeeld voordat ik het kon toelichten.']]
      },
      B2: {
        canDo: ['Ik kan complexe emotionele processen analyseren.', 'Ik kan subtiele relationele taal en impliciete betekenis herkennen.', 'Ik kan emoties in literatuur en publiek debat duiden.'],
        grammar: ['evidentialiteit en perspectief', 'metaforische emotietaal', 'nuancerende constructies met enerzijds/anderzijds'],
        words: {
          'Kernwoorden': ['de ambivalentie', 'de vervreemding', 'de onderhuidse spanning', 'de emotionele belasting', 'de erkenning', 'de projectie', 'de hechting', 'de rouwverwerking', 'de zelfregulatie', 'de machtsdynamiek'],
          'Werkwoorden': ['verdringen', 'projecteren', 'internaliseren', 'rationaliseren', 'doorwerken', 'onderkennen', 'resoneren', 'ontregelen'],
          'Gesprekszinnen': ['De ogenschijnlijke onverschilligheid verhult een sterke behoefte aan erkenning.', 'De personages projecteren hun angst op elkaar.', 'Rouw verloopt zelden lineair en kan lang op de achtergrond doorwerken.', 'Enerzijds verlangt ze naar nabijheid, anderzijds vreest ze afhankelijkheid.', 'De onderhuidse spanning wordt vooral zichtbaar in wat niet wordt uitgesproken.', 'Publieke verontwaardiging kan oprecht zijn en tegelijk politiek worden ingezet.', 'De reactie resoneert met eerdere ervaringen van uitsluiting.', 'Zelfregulatie betekent niet dat emoties moeten worden onderdrukt.']
        },
        dialogue: [['Therapeut', 'U beschrijft opluchting en schuldgevoel op hetzelfde moment.'], ['Cliënt', 'Ja, en die combinatie maakt me onzeker over wat ik werkelijk voel.'], ['Therapeut', 'Ambivalentie betekent niet dat één van beide gevoelens onwaar is.'], ['Cliënt', 'Dat helpt. Misschien hoef ik niet meteen één duidelijke conclusie te trekken.']]
      }
    }
  },
  {
    id: 'literatuur-verhalen',
    title: 'Literatuur en verhalen',
    subtitle: 'Van een eenvoudig verhaal begrijpen tot stijl, perspectief en interpretatie.',
    image: 'images/theme-literatuur.svg',
    accent: 'indigo',
    levels: {
      A1: {
        canDo: ['Ik kan over een boek vertellen.', 'Ik kan personages en gebeurtenissen benoemen.', 'Ik kan zeggen of ik een verhaal leuk vind.'],
        grammar: ['wie, waar en wat', 'eerst en daarna', 'verleden tijd van zijn en hebben'],
        words: {
          'Kernwoorden': ['het boek', 'het verhaal', 'de schrijver', 'de titel', 'de bladzijde', 'het personage', 'het begin', 'het einde', 'de bibliotheek', 'de foto'],
          'Werkwoorden': ['lezen', 'schrijven', 'beginnen', 'eindigen', 'vertellen', 'gebeuren', 'lenen', 'terugbrengen'],
          'Gesprekszinnen': ['Ik lees een kort verhaal.', 'Wie is het hoofdpersonage?', 'Het boek begint in Amsterdam.', 'Daarna gaat de familie op reis.', 'Ik vond het einde mooi.', 'De schrijver vertelt over zijn jeugd.', 'Ik leen dit boek bij de bibliotheek.', 'Waar gaat het verhaal over?']
        },
        dialogue: [['Mariam', 'Welk boek lees je?'], ['Jonas', 'Een kort verhaal over twee vrienden.'], ['Mariam', 'Vind je het leuk?'], ['Jonas', 'Ja, het is eenvoudig maar spannend.']]
      },
      A2: {
        canDo: ['Ik kan een verhaal samenvatten.', 'Ik kan genres en voorkeuren bespreken.', 'Ik kan mijn mening met eenvoudige argumenten geven.'],
        grammar: ['verleden tijd in verhalen', 'omdat en maar', 'relatieve zinnen met die/dat'],
        words: {
          'Kernwoorden': ['de roman', 'het gedicht', 'de strip', 'het hoofdstuk', 'de hoofdpersoon', 'de gebeurtenis', 'het probleem', 'de oplossing', 'de recensie', 'het genre'],
          'Werkwoorden': ['samenvatten', 'beschrijven', 'ontdekken', 'besluiten', 'veranderen', 'herinneren', 'aanraden', 'beoordelen'],
          'Gesprekszinnen': ['De roman gaat over een vrouw die opnieuw begint.', 'In het eerste hoofdstuk ontdekt ze een geheim.', 'Ik raad het boek aan omdat de personages geloofwaardig zijn.', 'Het verhaal was spannend, maar het einde was voorspelbaar.', 'De hoofdpersoon verandert door wat ze meemaakt.', 'Kun je het verhaal kort samenvatten?', 'Ik lees liever romans dan gedichten.', 'De recensie gaf het boek vier sterren.']
        },
        dialogue: [['Boekverkoper', 'Van welk soort boeken houdt u?'], ['Klant', 'Ik lees graag historische romans, maar niet te lange.'], ['Boekverkoper', 'Dan raad ik deze roman aan. Hij speelt in Rotterdam in 1940.'], ['Klant', 'Kunt u kort vertellen waar hij over gaat?']]
      },
      B1: {
        canDo: ['Ik kan een boek of film inhoudelijk bespreken.', 'Ik kan vertelperspectief, thema en ontwikkeling benoemen.', 'Ik kan een beargumenteerde recensie schrijven.'],
        grammar: ['indirecte rede', 'signaalwoorden voor analyse', 'passief en onpersoonlijke formuleringen'],
        words: {
          'Kernwoorden': ['het vertelperspectief', 'het thema', 'de verhaallijn', 'de spanningsopbouw', 'de karakterontwikkeling', 'de setting', 'de verteller', 'het motief', 'de stijl', 'de interpretatie'],
          'Werkwoorden': ['suggereren', 'onthullen', 'verwijzen naar', 'contrasteren', 'opbouwen', 'weglaten', 'benadrukken', 'interpreteren'],
          'Gesprekszinnen': ['Het verhaal wordt verteld vanuit het perspectief van een kind.', 'De schrijver bouwt de spanning langzaam op.', 'Een terugkerend motief is het gesloten raam.', 'De sobere stijl contrasteert met de heftige gebeurtenissen.', 'De verteller laat belangrijke informatie bewust weg.', 'Ik interpreteer het einde als een nieuw begin.', 'De karakterontwikkeling is overtuigend uitgewerkt.', 'Volgens de recensie verwijst de roman naar een historische gebeurtenis.']
        },
        dialogue: [['Leesclub', 'Waarom denk je dat de verteller onbetrouwbaar is?'], ['Lezer', 'Omdat zijn versie later door andere personages wordt tegengesproken.'], ['Leesclub', 'Verandert dat je oordeel over het einde?'], ['Lezer', 'Ja, ik twijfel nu of de laatste scène werkelijk heeft plaatsgevonden.']]
      },
      B2: {
        canDo: ['Ik kan literaire technieken en interpretaties vergelijken.', 'Ik kan ambiguïteit, symboliek en intertekstualiteit bespreken.', 'Ik kan een kritisch literair essay structureren.'],
        grammar: ['academische argumentatie', 'concessie en weerlegging', 'citaten integreren en parafraseren'],
        words: {
          'Kernwoorden': ['de ambiguïteit', 'de symboliek', 'de intertekstualiteit', 'de focalisatie', 'de compositie', 'de stijlbreuk', 'de ironie', 'de meerstemmigheid', 'de canon', 'de receptie'],
          'Werkwoorden': ['alluderen op', 'ondergraven', 'thematiseren', 'problematiseren', 'construeren', 'ontregelen', 'resoneren met', 'herinterpreteren'],
          'Gesprekszinnen': ['De roman ondergraaft de verwachting van een eenduidige held.', 'De focalisatie verschuift subtiel zonder dat de verteller verandert.', 'De titel alludeert op een ouder gedicht en opent daarmee een tweede interpretatielaag.', 'Ironie ontstaat doordat de lezer meer weet dan het personage.', 'De fragmentarische compositie weerspiegelt het onvermogen om het verleden volledig te reconstrueren.', 'Hoewel de roman vaak autobiografisch wordt gelezen, problematiseert hij juist het idee van authenticiteit.', 'De receptie veranderde toen het werk vanuit een postkoloniaal perspectief werd herlezen.', 'Meerstemmigheid voorkomt dat één moreel standpunt dominant wordt.']
        },
        dialogue: [['Docent', 'Welke functie heeft de herhaalde beschrijving van de rivier?'], ['Student', 'Volgens mij symboliseert ze zowel tijd als grens.'], ['Docent', 'Kun je die interpretatie aan de compositie koppelen?'], ['Student', 'Ja. Elke terugkeer naar de rivier markeert een verschuiving in perspectief.']]
      }
    }
  },
  {
    id: 'omgeving-milieu',
    title: 'Omgeving en milieu',
    subtitle: 'Van buurt, weer en afval tot klimaatbeleid, transitie en leefbaarheid.',
    image: 'images/theme-omgeving.svg',
    accent: 'turquoise',
    levels: {
      A1: {
        canDo: ['Ik kan mijn buurt en het weer beschrijven.', 'Ik kan afval en natuurwoorden benoemen.', 'Ik kan vertellen wat er in mijn omgeving is.'],
        grammar: ['er is/er zijn', 'weerzinnen met het', 'voorzetsels in, naast, tegenover en tussen'],
        words: {
          'Kernwoorden': ['de buurt', 'de straat', 'het park', 'de boom', 'de rivier', 'het weer', 'de regen', 'de zon', 'het afval', 'de container'],
          'Werkwoorden': ['regenen', 'waaien', 'schijnen', 'gooien', 'scheiden', 'wandelen', 'fietsen', 'groeien'],
          'Gesprekszinnen': ['Er is een park naast mijn huis.', 'Het regent vandaag.', 'De zon schijnt.', 'Gooi het papier in deze container.', 'Wij scheiden glas en plastic.', 'Er staan veel bomen in de straat.', 'De rivier ligt achter het station.', 'Ik fiets door de buurt.']
        },
        dialogue: [['Buurtbewoner', 'Waar kan ik glas weggooien?'], ['Buurvrouw', 'Bij de containers tegenover de supermarkt.'], ['Buurtbewoner', 'Kan papier daar ook?'], ['Buurvrouw', 'Ja, maar in de blauwe container.']]
      },
      A2: {
        canDo: ['Ik kan over afval, energie en vervoer praten.', 'Ik kan eenvoudige milieumaatregelen uitleggen.', 'Ik kan een probleem in de buurt melden.'],
        grammar: ['minder/meer + zelfstandig naamwoord', 'door + zelfstandig naamwoord', 'omdat, daarom en zodat'],
        words: {
          'Kernwoorden': ['de recycling', 'het energieverbruik', 'de uitstoot', 'het openbaar vervoer', 'de luchtkwaliteit', 'de overlast', 'de laadpaal', 'het groen', 'de hitte', 'de maatregel'],
          'Werkwoorden': ['recyclen', 'verminderen', 'besparen', 'vervuilen', 'opladen', 'melden', 'verbeteren', 'aanleggen'],
          'Gesprekszinnen': ['We gebruiken minder gas om energie te besparen.', 'Door het verkeer is de luchtkwaliteit slechter.', 'De gemeente legt nieuwe fietspaden aan.', 'Ik wil zwerfafval in het park melden.', 'Er komen meer laadpalen in de wijk.', 'Bomen zorgen voor schaduw tijdens hitte.', 'We nemen de trein zodat we minder uitstoten.', 'Plastic kan niet altijd opnieuw worden gebruikt.']
        },
        dialogue: [['Bewoner', 'Er ligt elke week veel afval naast de containers.'], ['Gemeente', 'Kunt u aangeven op welke locatie?'], ['Bewoner', 'Bij het plein aan de Kerkstraat.'], ['Gemeente', 'We registreren de melding en sturen handhaving langs.']]
      },
      B1: {
        canDo: ['Ik kan oorzaken en gevolgen van milieuproblemen uitleggen.', 'Ik kan deelnemen aan een buurtgesprek over leefbaarheid.', 'Ik kan voor- en nadelen van maatregelen afwegen.'],
        grammar: ['waardoor, doordat en zodat', 'passief in beleidstaal', 'enerzijds/anderzijds'],
        words: {
          'Kernwoorden': ['de klimaatverandering', 'de energietransitie', 'de biodiversiteit', 'de wateroverlast', 'de droogte', 'de leefbaarheid', 'de participatie', 'de vergroening', 'de geluidsbelasting', 'de circulaire economie'],
          'Werkwoorden': ['verduurzamen', 'aanpassen aan', 'compenseren', 'hergebruiken', 'inspraak geven', 'stimuleren', 'beperken', 'samenwerken'],
          'Gesprekszinnen': ['Door hevige regen ontstaat vaker wateroverlast.', 'De wijk wordt vergroend zodat hitte minder blijft hangen.', 'Enerzijds willen bewoners meer parkeerplaatsen, anderzijds is ruimte nodig voor bomen.', 'De gemeente stimuleert isolatie met een subsidie.', 'Omwonenden krijgen inspraak voordat het plan wordt vastgesteld.', 'Een circulaire economie vraagt om reparatie en hergebruik.', 'Geluidsoverlast beperkt de leefbaarheid rond de snelweg.', 'Klimaatadaptatie moet samen met bewoners worden ontworpen.']
        },
        dialogue: [['Voorzitter', 'Welke maatregel heeft volgens jullie de meeste prioriteit?'], ['Bewoner', 'Meer bomen, omdat het plein in de zomer extreem heet wordt.'], ['Ondernemer', 'Maar we moeten voldoende ruimte houden voor de markt.'], ['Voorzitter', 'Dan onderzoeken we een ontwerp waarin schaduw en gebruik worden gecombineerd.']]
      },
      B2: {
        canDo: ['Ik kan klimaat- en milieubeleid kritisch analyseren.', 'Ik kan ecologische, sociale en economische belangen integreren.', 'Ik kan complexe transities en onzekerheden genuanceerd verwoorden.'],
        grammar: ['beleidstaal en nominalisaties', 'voorwaardelijkheid met mits, tenzij en voor zover', 'systemische oorzaak-gevolgrelaties'],
        words: {
          'Kernwoorden': ['de klimaatmitigatie', 'de klimaatadaptatie', 'de rechtvaardige transitie', 'de systeemgrens', 'de externe kosten', 'de veerkracht', 'de koolstofvoetafdruk', 'de beleidscoherentie', 'de afruil', 'de langetermijnwaarde'],
          'Werkwoorden': ['externaliseren', 'decarboniseren', 'opschalen', 'verankeren', 'anticiperen op', 'mitigeren', 'herverdelen', 'integraal benaderen'],
          'Gesprekszinnen': ['Een rechtvaardige transitie voorkomt dat kwetsbare groepen onevenredig betalen.', 'Emissies dalen lokaal, terwijl productiegerelateerde uitstoot naar elders wordt verplaatst.', 'Beleid is slechts coherent wanneer ruimtelijke, sociale en economische doelen elkaar ondersteunen.', 'Klimaatadaptatie vraagt om investeringen waarvan de waarde pas op lange termijn zichtbaar wordt.', 'Externe kosten blijven buiten beeld zolang milieuschade niet wordt beprijsd.', 'De maatregel kan worden opgeschaald, mits lokale omstandigheden worden meegenomen.', 'Veerkracht betekent niet terugkeren naar de oude situatie maar kunnen meebewegen.', 'Elke transitie kent afruilen die expliciet en democratisch moeten worden besproken.']
        },
        dialogue: [['Raadslid', 'Het plan verlaagt uitstoot, maar verhoogt op korte termijn de woonlasten.'], ['Adviseur', 'Daarom stellen we gerichte compensatie voor lage inkomens voor.'], ['Raadslid', 'Hoe voorkomen we dat compensatie de prikkel tot verduurzaming verzwakt?'], ['Adviseur', 'Door ondersteuning te koppelen aan concrete woningverbetering en langjarige zekerheid.']]
      }
    }
  }
];

export const spiralStats = {
  themes: spiralThemes.length,
  levels: levelOrder.length,
  learningItems: spiralThemes.reduce((total, theme) => total + levelOrder.reduce((levelTotal, level) => {
    const data = theme.levels[level];
    return levelTotal + Object.values(data.words).flat().length;
  }, 0), 0),
  conversations: spiralThemes.length * levelOrder.length,
};

export { levelOrder };
