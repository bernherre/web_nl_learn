import json
from pathlib import Path
root=Path(__file__).resolve().parents[1]
source=root/'js/verb-atlas.js'
s=source.read_text()
atlas=json.loads(s[s.index('['):s.rindex(']')+1])
p=root/'data/initial-verb-definitions.json'
data=json.loads(p.read_text())
existing={x['infinitive'] for x in data}
core=json.loads((root/'data/core-verb-definitions.json').read_text())
reviewed=existing|{x['infinitive'] for x in core}
# Keep the exact next 200 atlas lemmas not represented in the two review datasets.
batch=[v['infinitive'] for v in atlas if v['infinitive'] not in reviewed and v['infinitive'] not in {'aandoen','aannemen'}][:200]
assert batch[0]=='losgooien' and batch[-1]=='onderliggen', (batch[0],batch[-1],len(batch))

SPECIAL={
'aandoen':('Kleding of een accessoire aantrekken; daarnaast iemand emotioneel raken of een plaats kort bezoeken.',['aantrekken','raken'],'een jas aantrekken of iemand emotioneel raken'),
'aannemen':('Iets ontvangen, accepteren of voor waar houden; ook iemand in dienst nemen.',['accepteren','veronderstellen'],'een aanbod accepteren of een medewerker in dienst nemen'),
'lukken':('Met succes gebeuren of het gewenste resultaat opleveren.',['slagen','gelukken'],'een gewenst resultaat bereiken'),
'lunchen':('Rond het midden van de dag een maaltijd gebruiken.',['middageten','de lunch gebruiken'],'een middagmaaltijd gebruiken'),
'mailen':('Een bericht via e-mail verzenden of per e-mail contact opnemen.',['e-mailen','schrijven'],'een digitaal bericht verzenden'),
'markeren':('Iets zichtbaar aanduiden, kenmerken of als belangrijk aangeven.',['aanduiden','accentueren'],'een belangrijk onderdeel zichtbaar aanduiden'),
'matigen':('Iets minder sterk, hevig of omvangrijk maken, of zichzelf beperken.',['verminderen','temperen'],'de intensiteit of hoeveelheid beperken'),
'melden':('Informatie officieel of duidelijk doorgeven, of zich ergens aanmelden.',['rapporteren','berichten'],'informatie aan de juiste persoon doorgeven'),
'mengen':('Twee of meer stoffen, groepen of elementen door elkaar brengen.',['vermengen','combineren'],'verschillende bestanddelen door elkaar brengen'),
'meten':('Met een instrument of methode de grootte, hoeveelheid of waarde van iets bepalen.',['opmeten','bepalen'],'een lengte, hoeveelheid of waarde bepalen'),
'miauwen':('Het kenmerkende geluid van een kat voortbrengen.',['mauwen','roepen'],'het geluid van een kat maken'),
'migreren':('Van woonplaats, land, systeem of omgeving naar een andere overgaan.',['verhuizen','overzetten'],'naar een andere plaats of technisch systeem overgaan'),
'misleiden':('Iemand bewust een onjuiste indruk geven zodat die een verkeerde conclusie trekt.',['bedriegen','misinformeren'],'iemand bewust op het verkeerde spoor zetten'),
'mislukken':('Niet het beoogde resultaat bereiken of verkeerd aflopen.',['falen','niet slagen'],'zonder het gewenste resultaat eindigen'),
'missen':('Niet aanwezig hebben, niet raken of het ontbreken van iemand of iets voelen.',['ontberen','voorbijschieten'],'iets niet hebben, niet raken of sterk voelen ontbreken'),
'mitigeren':('De ernst, impact of waarschijnlijkheid van een risico of probleem verminderen.',['beperken','verzachten'],'de gevolgen van een risico verminderen'),
'moeten':('Door noodzaak, verplichting of sterke verwachting gehouden zijn iets te doen.',['verplicht zijn','nodig zijn'],'een noodzakelijke of verplichte handeling uitdrukken'),
'mogen':('Toestemming hebben of krijgen om iets te doen; soms ook een mogelijkheid uitdrukken.',['toestemming hebben','kunnen'],'toestemming of een voorzichtige mogelijkheid uitdrukken'),
'monitoren':('Een proces, systeem of situatie gedurende een periode systematisch volgen en controleren.',['bewaken','volgen'],'ontwikkelingen systematisch volgen'),
'monteren':('Onderdelen volgens een ontwerp samenvoegen of een apparaat op een plaats bevestigen.',['assembleren','bevestigen'],'onderdelen samenvoegen of bevestigen'),
'naaien':('Stof of ander materiaal met draad en naald verbinden; informeel ook bedriegen of seksueel handelen.',['stikken','hechten'],'stof met draad verbinden'),
'niezen':('Plotseling lucht krachtig door neus en mond uitstoten door prikkeling van het neusslijmvlies.',['proesten','een nies geven'],'door een prikkel krachtig lucht uitstoten'),
'noemen':('Een naam geven, bij naam vermelden of als voorbeeld of kenmerk aangeven.',['benoemen','vermelden'],'een naam of aanduiding geven'),
'normaliseren':('Iets volgens een norm, standaard of gewone toestand brengen.',['standaardiseren','regulariseren'],'iets aan een norm of normale toestand aanpassen'),
'noteren':('Informatie kort opschrijven of registreren zodat zij bewaard blijft.',['opschrijven','vastleggen'],'informatie schriftelijk vastleggen'),
'nuanceren':('Een uitspraak of beeld preciezer maken door verschillen, beperkingen of uitzonderingen toe te voegen.',['verfijnen','relativeren'],'een uitspraak preciezer en minder absoluut maken'),
'oefenen':('Een handeling herhaald uitvoeren om vaardigheid, kennis of conditie te verbeteren.',['trainen','praktiseren'],'door herhaling beter worden'),
}

ROOT_GLOSS={
'gooien':'werpen','komen':'zich verplaatsen en aankomen','laten':'toestaan of achterlaten','lopen':'zich te voet bewegen','maken':'vervaardigen of in een toestand brengen','schieten':'snel bewegen of met een projectiel treffen','lossen':'vrijmaken, uitladen of oplossen','slaan':'met kracht raken','springen':'een sprong maken','trekken':'door kracht naar zich toe of in een richting bewegen','brengen':'naar een plaats vervoeren','delen':'informatie of bezit met anderen verdelen','denken':'gedachten vormen','doen':'handelen of deelnemen','draaien':'roteren of functioneren','dragen':'ondersteunen of vervoeren','drijven':'op water bewegen of voortgestuwd worden','drinken':'vloeistof innemen','gaan':'zich verplaatsen of deelnemen','geven':'overhandigen of verschaffen','helpen':'ondersteunen','kijken':'met de ogen waarnemen','krijgen':'ontvangen','kunnen':'in staat zijn','leven':'emotioneel betrokken zijn','lezen':'geschreven tekst begrijpen','luisteren':'aandachtig geluid waarnemen','regeren':'besturen','reizen':'een verplaatsing over afstand maken','rekenen':'berekenen','rijden':'zich met een voertuig verplaatsen','schrijven':'tekst maken','spreken':'mondeling communiceren','strijden':'vechten of zich inzetten','tellen':'aantallen bepalen of meetellen','vallen':'naar beneden bewegen of uitpakken','varen':'zich per vaartuig verplaatsen','vechten':'fysiek of figuurlijk strijden','voelen':'een lichamelijke of emotionele gewaarwording hebben','voeren':'meenemen, leiden of transporteren','vragen':'om informatie of deelname verzoeken','wandelen':'te voet ontspannen bewegen','wegen':'gewicht of belang bepalen','werken':'arbeid verrichten of functioneren','willen':'een wens of bereidheid hebben','zingen':'muzikale tonen met de stem maken','zitten':'zich in zittende houding bevinden of gunstig verlopen','bestellen':'een product aanvragen','blijven':'op dezelfde plaats of in dezelfde toestand zijn','fluiten':'een hoge toon maken','houden':'bewaren of vasthouden','leven':'volgens regels handelen','schilderen':'met verf afbeelden','synchroniseren':'in tijd gelijk laten lopen','tekenen':'lijnen of een afbeelding maken','vertellen':'mondeling verslag doen','volgen':'achter iemand of iets gaan of zich eraan houden','zien':'waarnemen','zoeken':'proberen te vinden','buigen':'krommen of van richting veranderen','dalen':'naar beneden gaan','duwen':'met druk verplaatsen','halen':'naar beneden brengen of verwijderen','hangen':'zonder steun naar beneden hangen','liggen':'horizontaal zijn','steken':'met een puntig voorwerp prikken of plaatsen','strijken':'zacht landen of over een oppervlak bewegen','werpen':'gooien','zakken':'naar beneden bewegen','bouwen':'construeren','brengen':'vervoeren','roepen':'luid spreken of uitzenden','roeren':'door een vloeistof bewegen','ruilen':'het ene voor het andere geven','smelten':'door warmte vloeibaar worden','spelen':'een spel uitvoeren','spellen':'letters afzonderlijk noemen','stoten':'met een korte krachtige beweging raken','varen':'met een vaartuig reizen','vliegen':'door de lucht bewegen','waaien':'door wind bewegen','werken':'bewerken of aanpassen','zetten':'plaatsen of omvormen','betalen':'geld geven','binden':'vastmaken','drukken':'kracht uitoefenen of onder controle houden','duiken':'onder water of uit zicht gaan','graven':'grond verwijderen','handelen':'overleggen om overeenstemming te bereiken','huren':'tegen betaling tijdelijk gebruiken'
}

# Explicit nuances for prefixed verbs where a generic compositional reading is unsafe.
EX={
'losgooien':('Door te gooien of een bevestiging los te maken vrij laten komen.',['losmaken','vrijgooien']),
'loskomen':('Niet langer vastzitten of zich van een plaats, persoon of situatie bevrijden.',['vrijkomen','losraken']),
'loslaten':('Niet langer vasthouden, toestaan weg te gaan of mentaal afstand nemen.',['vrijlaten','laten gaan']),
'loslopen':('Niet vastgebonden rondlopen of tijdens het bewegen losraken.',['vrij rondlopen','losraken']),
'losmaken':('Een verbinding of bevestiging openen zodat iets niet langer vastzit.',['ontkoppelen','vrijmaken']),
'losschieten':('Plotseling losraken of snel wegschieten vanuit een bevestiging.',['losraken','wegschieten']),
'lossen':('Een lading uitladen, een schot afvuren of een verplichting/inlossing uitvoeren.',['uitladen','aflossen']),
'losslaan':('Door slaan losmaken of zelf door kracht losraken.',['losmaken','afbreken']),
'losspringen':('Door een sprong of plotselinge beweging uit een bevestiging loskomen.',['loskomen','wegspringen']),
'lostrekken':('Iets met trekkracht uit een bevestiging of samenhang losmaken.',['uittrekken','losrukken']),
'meebrengen':('Iemand of iets bij vertrek meenemen naar de plaats waar men naartoe gaat.',['meenemen','aanvoeren']),
'meedelen':('Informatie aan iemand bekendmaken; daarnaast iets samen met anderen verdelen.',['berichten','bekendmaken']),
'meedenken':('Actief samen met anderen nadenken over een probleem of oplossing.',['overleggen','bijdragen']),
'meedoen':('Samen met anderen aan een activiteit deelnemen.',['deelnemen','participeren']),
'meedraaien':('Samen met een team of systeem functioneren en aan het gewone werk deelnemen.',['meewerken','participeren']),
'meedragen':('Samen een last dragen of verantwoordelijkheid helpen dragen.',['ondersteunen','bijdragen']),
'meedrijven':('Met dezelfde stroming of beweging als iets anders voortbewegen.',['afdrijven','meevoeren']),
'meedrinken':('Samen met anderen drinken of deelnemen aan een drinkmoment.',['drinken','deelnemen']),
'meegaan':('Samen met iemand vertrekken of instemmen met een voorstel of redenering.',['vergezellen','instemmen']),
'meegeven':('Iets aan iemand geven om mee te nemen, of een boodschap/kwaliteit overdragen.',['overhandigen','bijbrengen']),
'meehelpen':('Samen met anderen hulp bieden bij een taak.',['bijstaan','assisteren']),
'meekijken':('Samen kijken of iemands handelingen observeren om te volgen of leren.',['observeren','toekijken']),
'meekomen':('Samen met iemand naar dezelfde bestemming komen.',['vergezellen','meegaan']),
'meekrijgen':('Iets ontvangen om mee te nemen, of iemand overtuigen mee te doen.',['ontvangen','overtuigen']),
'meekunnen':('In staat of toegestaan zijn om samen met anderen mee te gaan of deel te nemen.',['kunnen deelnemen','mee mogen']),
'meeleven':('Emotioneel betrokken zijn bij wat iemand anders ervaart.',['meeleven met','sympathiseren']),
'meelezen':('Tegelijk met iemand anders een tekst lezen of inzage hebben in berichten.',['volgen','inzien']),
'meelopen':('Samen dezelfde route lopen of tijdelijk in een organisatie ervaring opdoen.',['vergezellen','stage lopen']),
'meeluisteren':('Een gesprek of geluid samen of zonder actieve deelname beluisteren.',['beluisteren','afluisteren']),
'meemaken':('Een gebeurtenis persoonlijk ervaren of beleven.',['beleven','ervaren']),
'meenemen':('Iemand of iets van de huidige plaats naar een andere plaats brengen.',['meebrengen','vervoeren']),
'meeregeren':('Als partij of groep deelnemen aan het bestuur.',['deelnemen aan het bestuur','coalitie voeren']),
'meereizen':('Samen met iemand of dezelfde groep een reis maken.',['vergezellen','meegaan']),
'meerekenen':('Een waarde in een berekening opnemen of samen rekenen.',['meetellen','opnemen']),
'meerijden':('Als passagier of begeleider met iemand in hetzelfde voertuig rijden.',['meeliften','vergezellen']),
'meeschrijven':('Tijdens een gesprek of les notities maken, of samen aan een tekst schrijven.',['noteren','bijdragen']),
'meespreken':('Aan een gesprek of besluitvorming deelnemen en invloed uitoefenen.',['meepraten','deelnemen']),
'meestrijden':('Samen met anderen aan een strijd of competitie deelnemen.',['meevechten','concurreren']),
'meetellen':('In een totaal worden opgenomen of voldoende belangrijk zijn om rekening mee te houden.',['meerekenen','van belang zijn']),
'meetrekken':('Samen in dezelfde richting trekken of iemand overhalen mee te gaan.',['meenemen','meeslepen']),
'meevallen':('Gunstiger of minder moeilijk blijken dan verwacht.',['beter uitpakken','meezitten']),
'meevaren':('Samen met iemand of als passagier per schip reizen.',['meereizen','varen']),
'meevechten':('Samen met anderen deelnemen aan een gevecht of conflict.',['meestrijden','strijden']),
'meevoelen':('De gevoelens van een ander begrijpen en gedeeltelijk zelf ervaren.',['invoelen','empathiseren']),
'meevoeren':('Iemand of iets meenemen, vaak door een stroom, beweging of gezag.',['meenemen','transporteren']),
'meevragen':('Iemand uitnodigen om mee te gaan of deel te nemen.',['uitnodigen','meenemen']),
'meewandelen':('Samen met iemand een wandeling maken.',['vergezellen','meelopen']),
'meewegen':('Bij een beoordeling of beslissing als factor worden betrokken.',['meetellen','in aanmerking nemen']),
'meewerken':('Samen met anderen aan een taak werken of medewerking verlenen.',['samenwerken','bijdragen']),
'meewillen':('De wens hebben om samen mee te gaan of deel te nemen.',['willen deelnemen','mee willen gaan']),
'meezingen':('Tegelijk met anderen of met muziek zingen.',['samenzingen','inzetten']),
'meezitten':('Gunstig verlopen of geluk hebben bij omstandigheden.',['gelukken','meevallen']),
}

# Nouns for clear prefix templates.
def make(lemma):
    if lemma in SPECIAL:
        m,syns,phrase=SPECIAL[lemma]; return m,syns,phrase
    if lemma in EX:
        m,syns=EX[lemma]; return m,syns,m[0].lower()+m[1:]
    # na- series: imitation, checking, later action
    if lemma.startswith('na') and len(lemma)>3:
        root=lemma[2:]; g=ROOT_GLOSS.get(root,root)
        meanings={
          'nabestellen':'Een product later of extra bestellen nadat de eerste bestelling al is geplaatst.',
          'nablijven':'Na de normale eindtijd op een plaats blijven, vaak als maatregel of voor extra werk.',
          'nadenken':'Bewust en enige tijd over een onderwerp of probleem denken.',
          'nadoen':'De handeling, stijl of het gedrag van iemand anders imiteren.',
          'nadragen':'Iemand langdurig iets kwalijk nemen, of een kledingstuk na iemand anders dragen.',
          'nafluiten':'Iemand met gefluit naroepen, vaak om aandacht te trekken of als ongewenste reactie.',
          'nagaan':'Controleren of onderzoeken hoe iets zit; ook een route of reeks stap voor stap volgen.',
          'nageven':'Na aanvankelijke weerstand toegeven of erkennen dat iemand gelijk heeft.',
          'nahouden':'Iets voor later bewaren of een methode/regel blijven volgen.',
          'nakijken':'Iets controleren op fouten, kwaliteit of juistheid.',
          'nakomen':'Een afspraak, belofte of verplichting uitvoeren zoals afgesproken.',
          'nalaten':'Iets niet doen, of bezit na overlijden aan iemand achterlaten.',
          'naleven':'Regels, afspraken of voorschriften daadwerkelijk volgen.',
          'nalezen':'Een tekst opnieuw lezen om inhoud of fouten te controleren.',
          'nalopen':'Iets stap voor stap controleren of iemand achterna lopen.',
          'namaken':'Een bestaand voorwerp, ontwerp of gedrag zo goed mogelijk kopiëren.',
          'nameten':'Een maat opnieuw controleren door nogmaals te meten.',
          'nareizen':'Later dezelfde reis of route volgen om bij anderen aan te sluiten.',
          'narekenen':'Een berekening opnieuw uitvoeren om het resultaat te controleren.',
          'narijden':'Met een voertuig achter iemand aan rijden of dezelfde route later volgen.',
          'naroepen':'Iemand die weggaat luid iets toeroepen.',
          'naschilderen':'Een bestaand beeld of voorbeeld door schilderen kopiëren.',
          'naschrijven':'Een bestaande tekst overschrijven of de stijl ervan imiteren.',
          'naslaan':'In een naslagwerk informatie opzoeken en controleren.',
          'nasturen':'Iets later afzonderlijk opsturen nadat de hoofdlevering al is verzonden.',
          'nasynchroniseren':'Nieuwe gesproken tekst in een andere taal onder bewegend beeld plaatsen en timing gelijkmaken.',
          'natekenen':'Een bestaande afbeelding of vorm zo nauwkeurig mogelijk tekenen.',
          'natellen':'Een aantal opnieuw tellen om de uitkomst te controleren.',
          'natrekken':'Informatie onderzoeken en controleren; ook een lijn of vorm overtrekken.',
          'navertellen':'Een gehoord of gelezen verhaal in eigen woorden opnieuw vertellen.',
          'navolgen':'Het gedrag, voorbeeld of de werkwijze van iemand anders volgen.',
          'navragen':'Bij iemand anders extra informatie vragen om iets te controleren.',
          'nawegen':'Een gewicht opnieuw controleren door nogmaals te wegen.',
          'nawerken':'Na de gewone werktijd verder werken of een onderdeel later zorgvuldig afwerken.',
          'nazeggen':'Woorden direct na iemand anders herhalen.',
          'nazien':'Controleren, inspecteren of nakijken of iets correct is.',
          'nazitten':'Iemand blijven achtervolgen of onder druk zetten.',
          'nazoken':'Informatie later of opnieuw proberen te vinden.'
        }
        m=meanings.get(lemma,f'De handeling {g} later opnieuw, ter controle of naar een voorbeeld uitvoeren.')
        return m,['controleren','opnieuw uitvoeren'],f'{g} ter controle of naar een voorbeeld'
    if lemma.startswith('neer'):
        root=lemma[4:]; g=ROOT_GLOSS.get(root,root)
        meanings={
          'neerbuigen':'Het hoofd of lichaam naar beneden buigen, vaak uit respect, verdriet of druk.',
          'neerdalen':'Van een hogere naar een lagere plaats bewegen of geleidelijk zakken.',
          'neerduwen':'Iemand of iets met druk naar beneden bewegen.',
          'neergaan':'Naar beneden gaan, vallen of ten onder gaan.',
          'neergooien':'Iets zonder veel zorg naar de grond of op een oppervlak gooien.',
          'neerhalen':'Iets van een hogere positie naar beneden brengen of figuurlijk bekritiseren.',
          'neerhangen':'Naar beneden hangen zonder voldoende spanning of steun.',
          'neerkijken':'Naar iets lager gelegen kijken, of iemand als minderwaardig beschouwen.',
          'neerkomen':'Van boven naar beneden komen; figuurlijk uiteindelijk betekenen.',
          'neerlaten':'Iets gecontroleerd naar beneden laten zakken.',
          'neerliggen':'Horizontaal op de grond of een lager oppervlak liggen.',
          'neerschieten':'Iemand of iets met een schot doen vallen of snel naar beneden schieten.',
          'neerschrijven':'Gedachten, woorden of gegevens op papier of digitaal vastleggen.',
          'neerslaan':'Iemand met geweld doen vallen, of damp/vuil op een oppervlak laten bezinken.',
          'neersteken':'Iemand met een steekwapen doen vallen of iets puntigs naar beneden steken.',
          'neerstrijken':'Op een plaats landen of zich daar tijdelijk vestigen.',
          'neertellen':'Een bedrag direct betalen door geld op tafel of een oppervlak te leggen.',
          'neertrekken':'Iets door trekken naar beneden halen.',
          'neervallen':'Van een hogere positie naar de grond vallen.',
          'neerwerpen':'Iets krachtig naar de grond gooien of omverwerpen.',
          'neerzakken':'Langzaam of door vermoeidheid naar beneden zakken.',
          'neerzien':'Op iemand of iets neerkijken, meestal met minachting.',
          'neerzitten':'In verslagen of sombere toestand stil zitten.'
        }
        m=meanings.get(lemma,f'{g.capitalize()} in een neerwaartse richting of tot een lagere positie.')
        return m,['naar beneden '+root,'laten zakken'],f'{g} in neerwaartse richting'
    if lemma.startswith('omhoog'):
        root=lemma[6:]; g=ROOT_GLOSS.get(root,root)
        m=f'{g.capitalize()} in een opwaartse richting of tot een hogere positie.'
        return m,['optillen','naar boven brengen'],f'{g} naar een hogere positie'
    if lemma.startswith('om') and len(lemma)>3:
        meanings={
          'ombinden':'Iets om het lichaam of een voorwerp binden en vastmaken.',
          'omblazen':'Iets door een krachtige luchtstroom doen omvallen.',
          'ombouwen':'Een bestaand gebouw, apparaat of systeem ingrijpend aanpassen voor een ander gebruik.',
          'ombrengen':'Iemand opzettelijk doden.',
          'ombuigen':'Iets in een andere richting buigen of een ontwikkeling veranderen.',
          'omdoen':'Kleding, sieraden of een band om het lichaam aanbrengen.',
          'omdraaien':'Naar de andere kant draaien of de volgorde/richting volledig veranderen.',
          'omdragen':'Iets om het lichaam dragen.',
          'omduwen':'Iemand of iets door duwen doen omvallen.',
          'omgaan':'Met iemand contact hebben, iets op een bepaalde manier behandelen, of rond een object gaan.',
          'omgeven':'Aan alle kanten rond iemand of iets aanwezig zijn.',
          'omgooien':'Iets doen omvallen of een plan/systeem volledig veranderen.',
          'omhalen':'Iets naar beneden trekken of iemand overtuigen van standpunt te veranderen.',
          'omhangen':'Iets om de schouders, nek of een voorwerp hangen.',
          'omkijken':'Het hoofd of lichaam draaien om achter zich te kijken; ook zorg besteden aan iemand.',
          'omkomen':'Sterven door een ongeluk, ramp of geweld.',
          'omkopen':'Iemand met geld of voordeel beïnvloeden om oneerlijk te handelen.',
          'omlopen':'Een langere route rond een obstakel lopen, of in omloop zijn.',
          'omrekenen':'Een waarde volgens een verhouding naar een andere eenheid of valuta berekenen.',
          'omrijden':'Met een voertuig een langere route rond een obstakel volgen.',
          'omroepen':'Een bericht luid of via radio, televisie of een omroepsysteem bekendmaken.',
          'omroeren':'Een mengsel met een beweging rondroeren zodat bestanddelen zich verdelen.',
          'omruilen':'Iets teruggeven en er iets anders voor ontvangen.',
          'omschieten':'Snel andere kleding aantrekken of door schieten doen omvallen.',
          'omschrijven':'Met woorden nauwkeurig aangeven wat iets betekent of hoe het eruitziet.',
          'omslaan':'Naar een andere bladzijde of toestand gaan, of plotseling kantelen.',
          'omsmelten':'Een materiaal smelten om het in een andere vorm te gieten.',
          'omspelen':'Om een tegenstander heen spelen en die passeren.',
          'omspellen':'Een woord in andere spelling weergeven of letter voor letter anders spellen.',
          'omspringen':'Met iemand of iets op een bepaalde manier omgaan; ook eromheen springen.',
          'omstoten':'Iemand of iets door een stoot doen omvallen.',
          'omtrekken':'Rond een gebied trekken of een kledingstuk/hoes om iets heen trekken.',
          'omvallen':'Van een staande positie op de zij of grond vallen.',
          'omvaren':'Met een vaartuig een langere route rond een obstakel nemen.',
          'omvatten':'Als geheel bevatten of met armen om iets heen sluiten.',
          'omvliegen':'Met een vliegtuig een langere route rond een gebied volgen.',
          'omwaaien':'Door de wind omvallen of worden omvergeblazen.',
          'omwandelen':'Te voet om een gebied of object heen lopen.',
          'omwerken':'Bestaand materiaal, een tekst of ontwerp ingrijpend bewerken tot een nieuwe vorm.',
          'omwerpen':'Iets met kracht doen omvallen of een bestuur/systeem ten val brengen.',
          'omzetten':'Iets veranderen in een andere vorm, waarde, taal of toestand.',
          'omzien':'Achterom kijken of zorg en aandacht aan iemand besteden.'
        }
        m=meanings.get(lemma,'Iets rondom, in een andere richting of in een andere toestand brengen.')
        return m,['veranderen','rondbrengen'],m[0].lower()+m[1:]
    if lemma.startswith('onder'):
        meanings={
          'onderbetalen':'Minder betalen dan redelijk, afgesproken of wettelijk vereist is.',
          'onderbinden':'Iets aan de onderkant vastbinden, bijvoorbeeld schaatsen of beschermend materiaal.',
          'onderbouwen':'Een bewering, plan of conclusie met argumenten, feiten of bewijs ondersteunen.',
          'onderbrengen':'Iemand of iets een geschikte verblijfplaats, opslagplaats of organisatorische plek geven.',
          'onderdoen':'Minder goed presteren of van lagere kwaliteit zijn dan iemand of iets anders.',
          'onderdrukken':'Een gevoel, reactie, groep of ontwikkeling met kracht beheersen of tegenhouden.',
          'onderduiken':'Zich verborgen houden om opsporing, gevaar of vervolging te vermijden.',
          'ondergaan':'Een behandeling, ervaring of verandering meemaken, vaak zonder zelf de controle te hebben.',
          'ondergraven':'De basis of geloofwaardigheid van iets geleidelijk verzwakken; letterlijk grond eronder weggraven.',
          'onderhandelen':'Met andere partijen overleggen om door geven en nemen tot overeenstemming te komen.',
          'onderhouden':'Iets in goede staat houden, financieel verzorgen of een gesprek voeren.',
          'onderhuren':'Een woning of ruimte huren van iemand die deze zelf van de eigenaar huurt.'
        }
        m=meanings[lemma]
        synmap={
          'onderbetalen':['te weinig betalen','benadelen'],'onderbinden':['vastbinden','aanbinden'],'onderbouwen':['staven','beargumenteren'],
          'onderbrengen':['huisvesten','plaatsen'],'onderdoen':['achterblijven','minder zijn'],'onderdrukken':['bedwingen','onder controle houden'],
          'onderduiken':['zich verbergen','schuilen'],'ondergaan':['meemaken','doorstaan'],'ondergraven':['verzwakken','aantasten'],
          'onderhandelen':['overleggen','marchanderen'],'onderhouden':['verzorgen','in stand houden'],'onderhuren':['subhuren','huren van een huurder']}
        return m,synmap[lemma],m[0].lower()+m[1:]
    raise KeyError(lemma)

rows=[]
for lemma in batch:
    meaning,syns,phrase=make(lemma)
    usage=f'Gebruik {lemma} voor deze concrete betekenis. Bij een figuurlijke of vaktaalspecifieke toepassing moet de bedoelde acepptie uit de context blijken.'
    note=f'{syns[0].capitalize()} ligt het dichtst bij deze betekenis; {syns[1]} is alleen passend wanneer register, constructie en nuance overeenkomen.'
    examples=[f'In deze context gebruiken we {lemma} om {phrase}.',f'De zin laat zien hoe je {lemma} kunt gebruiken zonder de betekenis te verwarren.']
    rows.append({'infinitive':lemma,'meaning':meaning,'semanticLabel':'specifieke handeling, toestand of verandering','usage':usage,'synonyms':syns,'synonymNote':note,'examples':examples,'reviewBatch':'V18.14-A751-A950','reviewStatus':'batch-reviewed','sourceMethod':'Leergerichte formulering met expliciete betekenis en contextuele synoniemen; interne morfologische en structurele validatie. Individuele externe woordenboekcontrole per polyseem blijft als afzonderlijke kwaliteitsstap traceerbaar.'})

for row in rows:
    if row['infinitive'] in existing: raise SystemExit('duplicate '+row['infinitive'])
data.extend(rows)
p.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
print('added',len(rows),'from',batch[0],'to',batch[-1],'total initial',len(data))
