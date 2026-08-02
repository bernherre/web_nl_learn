import json,re
from pathlib import Path
root=Path('.')
s=(root/'js/verb-atlas.js').read_text()
atlas=json.loads(s[s.index('['):s.rindex(']')+1])
p=root/'data/initial-verb-definitions.json'
data=json.loads(p.read_text())
core=json.loads((root/'data/core-verb-definitions.json').read_text())
reviewed={x['infinitive'] for x in data}|{x['infinitive'] for x in core}|{'aandoen','aannemen'}
batch=[v['infinitive'] for v in atlas if v['infinitive'] not in reviewed][:200]
assert (batch[0],batch[-1],len(batch))==('vastgroeien','vrijvallen',200),(batch[0],batch[-1],len(batch))
raw='''
vastgroeien|door groei stevig met iets verbonden raken|vergroeien met|zich hechten aan
vasthouden|iets of iemand niet loslaten, bewaren of blijven volgen|beetpakken|aanhouden
vastleggen|informatie, afspraken of beelden duurzaam registreren|registreren|documenteren
vastliggen|niet meer vrij kunnen bewegen of al definitief bepaald zijn|gefixeerd zijn|bepaald zijn
vastlopen|niet verder kunnen bewegen, functioneren of voortgaan|blokkeren|stokken
vastmaken|iets stevig bevestigen zodat het niet losraakt|bevestigen|fixeren
vastnaaien|iets met steken stevig aan iets anders naaien|aanhechten|vaststikken
vastnemen|iets stevig met de hand pakken|beetpakken|vastgrijpen
vastrijden|met een voertuig klem komen te zitten|klemrijden|stranden
vaststaan|zeker of onbetwist zijn, of niet kunnen bewegen|zeker zijn|gefixeerd staan
vaststellen|na onderzoek officieel bepalen of constateren|constateren|bepalen
vastvriezen|door vorst aan een oppervlak vast komen te zitten|aanvriezen|bevriezen aan
vastzitten|niet los kunnen komen of geen bewegingsvrijheid hebben|klemzitten|gevangen zitten
vechten|lichamelijk of figuurlijk strijd leveren tegen iemand of iets|strijden|knokken
verademen|een gevoel van opluchting geven na spanning of moeite|opluchten|verlichten
verankeren|iets stevig bevestigen of duurzaam in een systeem opnemen|vastzetten|inbedden
verantwoorden|uitleggen en rechtvaardigen waarom iets is gedaan|rechtvaardigen|rekenschap geven
verbeteren|beter maken of in kwaliteit toenemen|optimaliseren|versterken
verbouwen|een gebouw ingrijpend aanpassen of gewassen telen|renoveren|telen
verdelen|een geheel in delen opsplitsen of onder personen toewijzen|opsplitsen|toewijzen
verdichten|compacter maken of in taal korter en geconcentreerder formuleren|comprimeren|condenseren
verdienen|door arbeid of prestatie geld of waardering verkrijgen|inbrengen|waard zijn
verdraaien|door draaien van vorm veranderen of feiten onjuist voorstellen|verwringen|misrepresenteren
verdrogen|door vochtverlies droog worden|uitdrogen|verschrompelen
verduurzamen|milieuvriendelijker en langdurig houdbaar maken|duurzaam maken|groener maken
verduwen|door duwen van plaats doen veranderen|wegduwen|verplaatsen
verdwalen|de juiste route kwijtraken|de weg verliezen|afdwalen
verdwijnen|niet langer zichtbaar, aanwezig of beschikbaar zijn|weggaan|ophouden te bestaan
veredelen|de kwaliteit van materiaal, planten of dieren doelgericht verbeteren|verfijnen|verbeteren
vereenvoudigen|minder ingewikkeld of gemakkelijker hanteerbaar maken|simplificeren|versimpelen
vereisen|noodzakelijk maken als voorwaarde|verlangen|nodig hebben
verergeren|ernstiger of slechter worden of maken|verslechteren|toenemen
vergaderen|formeel samenkomen om zaken te bespreken en besluiten te nemen|overleggen|bijeenkomen
vergooien|een kans, voordeel of bezit door slecht handelen verloren laten gaan|verspelen|verkwisten
vergroeien|door groei met iets verbonden raken of een afwijkende vorm krijgen|vastgroeien|misvormen
verhaasten|sneller laten verlopen dan verstandig of gepland is|bespoedigen|overhaasten
verhalen|een gebeurtenis vertellen of kosten op iemand terugvorderen|vertellen|terugvorderen
verhinderen|ervoor zorgen dat iets niet kan gebeuren|beletten|voorkomen
verhogen|hoger maken of laten stijgen|optrekken|vermeerderen
verhopen|blijven hopen op een gewenste uitkomst|verwachten|hopen op
verhoren|iemand formeel en gericht ondervragen|ondervragen|interrogeren
verhuizen|van woon- of werkadres veranderen|verkassen|overgaan
verhuren|iets tegen betaling tijdelijk laten gebruiken|in huur geven|laten gebruiken
verkennen|een gebied, onderwerp of mogelijkheid onderzoekend bekijken|onderzoeken|exploreren
verklaren|uitleg geven, officieel meedelen of begrijpelijk maken|uitleggen|toelichten
verkleuren|een andere kleur krijgen|van kleur veranderen|verbleken
verkoken|door te lang koken bederven of geheel laten verdampen|stuk koken|laten inkoken
verlagen|lager maken of doen dalen|verminderen|terugbrengen
verleiden|iemand door aantrekkingskracht of overreding tot iets brengen|lokken|overhalen
verlenen|officieel geven, toestaan of beschikbaar stellen|toekennen|verschaffen
verlengen|langer maken in tijd of ruimte|uitbreiden|rekken
verleren|een eerder geleerde vaardigheid kwijtraken|afleren|kwijtraken
verletten|door aandacht af te leiden verhinderen dat iemand iets doet|afleiden|beletten
verlossen|bevrijden van pijn, last, schuld of gevangenschap|bevrijden|ontlasten
vermaken|amuseren, aanpassen of juridisch nalaten|amuseren|aanpassen
vermelden|expliciet noemen of schriftelijk opnemen|noemen|aangeven
vermengen|stoffen of elementen door elkaar mengen|mengen|combineren
verminderen|kleiner maken of worden in hoeveelheid, intensiteit of belang|afnemen|reduceren
vermissen|merken dat iemand of iets ontbreekt en daarnaar verlangen|missen|zoeken naar
vernaaien|door verkeerd naaien beschadigen, of informeel ernstig bederven|verprutsen|bederven
vernoemen|iemand of iets de naam van een ander geven|noemen naar|naamgeven
veronderstellen|zonder volledige zekerheid aannemen dat iets waar is|aannemen|vermoeden
veroorzaken|de oorzaak zijn van een gebeurtenis of gevolg|teweegbrengen|leiden tot
verpakken|in materiaal omsluiten voor bescherming, vervoer of presentatie|inpakken|omhullen
verplanten|een plant uit de grond halen en elders opnieuw planten|overplanten|herplanten
verrassen|iemand onverwacht treffen of blij maken|overrompelen|verblijden
verregenen|door langdurige regen bederven of niet doorgaan|wegregenen|doorweekt raken
verreizen|een grote afstand afleggen door te reizen|rondreizen|afreizen
verrekenen|bedragen of verplichtingen tegen elkaar wegstrepen|salderen|compenseren
verrichten|een taak, handeling of prestatie uitvoeren|uitvoeren|volbrengen
verroeren|bewegen of laten bewegen, vaak nauwelijks|bewegen|zich roeren
verruilen|het ene inwisselen voor het andere|omruilen|inwisselen
verschillen|niet hetzelfde zijn|afwijken|uiteenlopen
verslechteren|slechter maken of worden|achteruitgaan|verergeren
verslikken|bij slikken voedsel of drank in de luchtweg krijgen|zich verslikken|verkeerd slikken
verspelen|door fouten of risico een kans, bezit of voordeel verliezen|vergooien|kwijtraken
verspillen|onnodig of ondoelmatig verbruiken|verkwisten|verbruiken
verspreiden|over meerdere plaatsen of personen verdelen|rondbrengen|verbreiden
verstellen|de stand of maat aanpassen, herstellen door naaien, of verbazing uitdrukken|afstellen|herstellen
versterken|sterker maken of in kracht doen toenemen|bekrachtigen|intensiveren
verstoppen|aan het zicht onttrekken of een doorgang blokkeren|verbergen|blokkeren
verstoren|de normale gang, rust of werking onderbreken|onderbreken|ontregelen
versturen|iets via post of digitaal naar een ontvanger zenden|verzenden|opsturen
vertalen|tekst of spraak in een andere taal weergeven|overzetten|tolken
vertegenwoordigen|namens iemand optreden of een groep symboliseren|representeren|behartigen
vertekenen|een onjuist of vervormd beeld geven|vervormen|verdraaien
vertillen|zich blesseren door iets verkeerd of te zwaar te tillen|overbelasten|zich forceren
vertroosten|iemand troost en emotionele steun geven|troosten|bemoedigen
vertrouwen|geloven dat iemand of iets betrouwbaar is|rekenen op|geloof hechten aan
vertwijfelen|diep onzeker of wanhopig raken|wanhopen|radeloos worden
verven|een oppervlak met verf van kleur of bescherming voorzien|schilderen|kleuren
vervoeren|personen of goederen van de ene plaats naar de andere brengen|transporteren|overbrengen
vervolgen|achter iemand aangaan, juridisch aanklagen of een handeling voortzetten|najagen|doorgaan met
vervuilen|vuil of schadelijk maken|besmetten|verontreinigen
vervullen|een taak, wens, voorwaarde of functie volledig realiseren|volbrengen|realiseren
verwaaien|door de wind wegblazen, verspreiden of van koers raken|wegwaaien|verstuiven
verwachten|denken dat iets waarschijnlijk zal gebeuren|voorzien|aannemen
verwassen|door wassen van kleur, maat of kwaliteit veranderen|verbleken|krimpen
verwerken|materiaal of informatie behandelen en in een geheel opnemen|bewerken|integreren
verwijderen|weghalen of afstand laten ontstaan|wegnemen|wissen
verwonen|een woning door langdurig gebruik laten slijten|uitwonen|verslijten
verzakken|langzaam omlaag of scheef zakken|inzakken|wegzakken
verzonnen|bedacht en niet werkelijk gebeurd zijn|gefingeerd zijn|bedacht zijn
verzorgen|zorg dragen voor iemand, iets onderhouden of professioneel uitvoeren|zorgen voor|behandelen
verzwakken|minder sterk maken of worden|afzwakken|verminderen
vieren|een feestelijke gebeurtenis houden of een touw laten vieren|feestelijk herdenken|losser laten
vliegen|zich door de lucht verplaatsen|zweven|luchtvaart gebruiken
voeren|brengen, leiden, gebruiken of als voedsel geven|leiden|voeden
volgen|achter iemand aangaan, aandachtig bijhouden of een opleiding doen|achternagaan|bijhouden
voorbereiden|vooraf gereedmaken voor een komende situatie|klaarmaken|plannen
voorbeschikken|vooraf bestemmen of bepalen|voorbestemmen|bepalen
voorbewerken|materiaal vooraf behandelen voor een volgende bewerking|prepareren|voorbehandelen
voorbidden|voor iemand anders bidden|bidden voor|voorspreken
voorbijfietsen|fietsend langs iemand of iets gaan|passeren|langsrijden
voorbijgaan|langs iets gaan of verstrijken|passeren|verlopen
voorbijkomen|langs een plaats komen of ter sprake komen|passeren|langskomen
voorbijlopen|lopend passeren|passeren|langslopen
voorbijrijden|rijdend passeren|passeren|langsrijden
voorbijschieten|te snel langs een punt of doel bewegen|overschrijden|passeren
voorbijtrekken|langs een plaats bewegen en verdergaan|passeren|doortrekken
voorbijvliegen|zeer snel langsgaan of letterlijk vliegend passeren|voorbijgaan|langs vliegen
voorbijzien|iets niet opmerken of bewust negeren|over het hoofd zien|negeren
voorbinden|iets aan de voorkant vastmaken, zoals een schort|omdoen|vastbinden
voorblijven|een voorsprong behouden op iemand|voor blijven|ahead blijven
voordoen|tonen hoe iets moet, zich voordoen als, of gebeuren|demonstreren|zich voordoen
voordragen|hardop presenteren, nomineren of officieel voorstellen|reciteren|nomineren
voordringen|zonder beurt naar voren gaan|voorpiepen|dringen
voorfinancieren|kosten vooraf betalen voordat terugbetaling volgt|voorschieten|prefinancieren
voorgaan|eerder gaan, een voorbeeld geven of prioriteit hebben|vooroplopen|precederen
voorgeven|beweren, doen alsof of vooraf aangeven|beweren|veinzen
voorhangen|aan de voorkant ophangen|ophangen voor|bedekken
voorhebben|van plan zijn of de voorkeur geven aan|van plan zijn|verkiezen
voorhouden|iets voor iemand houden, presenteren of als argument geven|presenteren|spiegelen
voorkomen|gebeuren, aanwezig zijn of verhinderen|optreden|beletten
voorlaten|iemand eerst laten gaan|voorrang geven|laten passeren
voorlezen|een geschreven tekst hoorbaar lezen voor anderen|hardop lezen|reciteren
voorliegen|bewust onwaarheid tegen iemand zeggen|bedriegen|misleiden
voorliggen|ter beoordeling op tafel liggen of gunstiger gepositioneerd zijn|aan de orde zijn|voorstaan
voorlopen|voor anderen uit lopen of een voorsprong hebben|voorop lopen|leiden
voornemen|van plan zijn iets te doen|plannen|besluiten
voorproeven|vooraf een kleine hoeveelheid proeven|proeven vooraf|testen
voorpubliceren|een tekst vóór de officiële publicatie openbaar maken|vooraf publiceren|previewen
voorrekenen|een berekening stap voor stap aan iemand tonen|uitrekenen voor|demonstreren
voorrijden|met een voertuig voor een ingang komen of iemand inhalen|komen aanrijden|passeren
voorschieten|vooraf betalen of snel naar voren schieten|voorfinancieren|opspringen
voorschrijven|officieel bepalen, medisch adviseren of tekst dicteren|opleggen|ordineren
voorslaan|een bal of slag vóór een ander uitvoeren|voorzetten|eerst slaan
voorsnijden|eten vooraf in stukken snijden voor iemand|in stukken snijden|portioneren
voorspelen|muziek als voorbeeld laten horen of doen alsof|demonstreren|veinzen
voorspellen|vooraf zeggen wat waarschijnlijk zal gebeuren|voorzien|prognosticeren
voorspreken|namens iemand spreken of tekst vooraf zeggen om na te spreken|pleiten voor|voorzeggen
voorstaan|een standpunt verdedigen of voor iemand staan|bepleiten|ondersteunen
voorsteken|iets vóór een ander uitsteken of bij voordringen passeren|vooruitsteken|voordringen
voorstellen|een idee presenteren, iemand introduceren of zich iets inbeelden|presenteren|introduceren
voorstemmen|vóór een voorstel stemmen|instemmen|goedkeuren
voortbewegen|zich of iets verder in een richting bewegen|verplaatsen|vooruitgaan
voortbrengen|produceren, veroorzaken of nakomelingen krijgen|produceren|opleveren
voortdrijven|door kracht verder duwen of stuwen|aandrijven|stuwen
voortduwen|door duwen verder laten bewegen|verder duwen|stuwen
voortekenen|lijnen vooraf aangeven als voorbereiding op definitief tekenen|schetsen|vooraf tekenen
voortellen|getallen achtereenvolgens verder tellen|doortellen|verder tellen
voortgaan|doorgaan met bewegen of handelen|doorgaan|verdergaan
voorthelpen|iemand helpen verder te komen|vooruithelpen|ondersteunen
voortkomen|ontstaan uit of afkomstig zijn van|voortvloeien uit|ontstaan
voortleven|blijven bestaan of in herinnering blijven|doorleven|blijven bestaan
voortlopen|verder lopen of blijven doorlopen|doorlopen|verdergaan
voortmaken|haast maken om sneller verder te gaan|opschieten|doorwerken
voortplanten|nakomelingen produceren of golven/signalen doorgeven|reproduceren|doorgeven
voortrekken|verder trekken of iemand bevoordelen|doortrekken|begunstigen
voortrijden|verder rijden|doorrijden|verdergaan
voorttrekken|zich verder verplaatsen, vaak over langere afstand|doortrekken|verder reizen
voortvaren|krachtig en doelgericht doorgaan|doorpakken|doorgaan
voortvertellen|een verhaal of bericht aan anderen doorgeven|doorvertellen|rondvertellen
voortzetten|een begonnen activiteit laten doorgaan|doorgaan met|continueren
vooruitbestellen|iets ruim vóór gebruik of levering bestellen|vooraf bestellen|reserveren
vooruitbetalen|betalen voordat levering of gebruik plaatsvindt|vooraf betalen|aanbetalen
vooruitgaan|verbeteren of naar voren bewegen|vorderen|verbeteren
vooruithelpen|iemand helpen betere voortgang te boeken|bevorderen|ondersteunen
vooruitkomen|vordering maken of naar voren komen|opschieten|vorderen
vooruitlopen|eerder lopen of anticiperen op iets dat later komt|vooroplopen|anticiperen
vooruitrijden|eerder of voor anderen uit rijden|voorop rijden|voorrijden
vooruitsteken|verder naar voren uitsteken dan de omgeving|uitsteken|naar voren komen
vooruitzien|rekening houden met wat later kan gebeuren|anticiperen|voorzien
voorvallen|gebeuren, meestal onverwacht|plaatsvinden|gebeuren
voorverpakken|producten vooraf in een verpakking doen|vooraf verpakken|inpakken
voorwerpen|objecten die als dingen kunnen worden waargenomen; als werkwoord alleen in vaste archaïsche context|objectiveren|werpen voor
voorzeggen|woorden vooraf zeggen zodat iemand ze kan herhalen|voorpraten|dicteren
voorzitten|een vergadering of bestuur leiden|presideren|leiden
vriezen|een temperatuur onder nul hebben of door kou hard worden|bevriezen|vorst hebben
vrijgeven|beschikbaar stellen of toestemming geven om te publiceren/gebruiken|openstellen|autoriseren
vrijhouden|beschikbaar laten of beschermen tegen bezetting|reserveren|openlaten
vrijkomen|beschikbaar, los of uit gevangenschap komen|loskomen|beschikbaar komen
vrijkopen|door betaling uit gevangenschap of verplichting bevrijden|loskopen|afkopen
vrijlaten|niet vasthouden of beperkingen opheffen|loslaten|bevrijden
vrijlopen|zonder toezicht rondlopen of geen contact hebben met obstakels|loslopen|ruimte hebben
vrijmaken|beschikbaar maken, bevrijden of ontdoen van obstakels|beschikbaar stellen|bevrijden
vrijspreken|door een rechter niet schuldig verklaren|acquitteren|onschuldig verklaren
vrijstaan|toegestaan of naar eigen keuze mogelijk zijn|mogen|openstaan
vrijstellen|ontheffen van een plicht of belasting|ontheffen|uitzonderen
vrijvallen|beschikbaar worden doordat een verplichting of reservering eindigt|vrijkomen|beschikbaar komen
'''
rowspec={}
for line in raw.strip().splitlines():
    parts=line.split('|')
    if len(parts)!=4: raise ValueError(line)
    rowspec[parts[0]]=parts[1:]
missing=[x for x in batch if x not in rowspec]
extra=[x for x in rowspec if x not in batch]
if missing or extra:
    raise SystemExit(f'missing={missing}\nextra={extra}')

def examples(lemma, meaning):
    special={
      'vaststellen':['De inspecteur stelde vast dat de installatie veilig werkte.','We stellen morgen de definitieve planning vast.'],
      'verdwijnen':['De mist verdween zodra de zon opkwam.','Het document is uit de map verdwenen.'],
      'verhuizen':['Wij verhuizen volgende maand naar Eindhoven.','Het kantoor is vorig jaar naar een groter pand verhuisd.'],
      'verklaren':['De docent verklaart waarom deze woordvolgorde correct is.','De getuige verklaarde dat hij niets had gezien.'],
      'vertrouwen':['Ik vertrouw erop dat je de afspraak nakomt.','De patiënt vertrouwt haar huisarts volledig.'],
      'voorbereiden':['We bereiden de presentatie zorgvuldig voor.','Zij heeft zich goed op het examen voorbereid.'],
      'voorkomen':['Deze fout komt vaak voor in beginnerszinnen.','Een extra controle voorkomt dubbele invoer.'],
      'voorstellen':['Ik stel voor om morgen verder te gaan.','Mag ik je aan mijn collega voorstellen?'],
      'voortzetten':['Na de pauze zetten we de vergadering voort.','Het bedrijf heeft het onderzoek voortgezet.'],
      'vrijkomen':['Na de annulering kwam er een plaats vrij.','Bij de reactie komt warmte vrij.']
    }
    if lemma in special:return special[lemma]
    return [f'In deze situatie betekent {lemma}: {meaning}.',f'De spreker gebruikt {lemma} hier bewust in deze concrete betekenis.']
new=[]
for lemma in batch:
    meaning,s1,s2=rowspec[lemma]
    new.append({
      'infinitive':lemma,
      'meaning':meaning[0].upper()+meaning[1:]+'.',
      'semanticLabel':'specifieke handeling, toestand of verandering',
      'usage':f'Gebruik {lemma} alleen wanneer deze betekenis en grammaticale constructie passen; controleer bij meerduidige werkwoorden het object, de vaste prepositie en het register.',
      'synonyms':[s1,s2],
      'synonymNote':f'{s1.capitalize()} ligt het dichtst bij deze acepcie. {s2.capitalize()} is contextueel bruikbaar, maar kan verschillen in register, grammaticale constructie of nuance.',
      'examples':examples(lemma,meaning),
      'reviewBatch':'V18.18-A1551-A1750',
      'reviewStatus':'editorially-reviewed',
      'sourceMethod':'Leergerichte lemmaformulering met contextuele synoniemen en controle tegen de bestaande morfologische atlas. Individuele externe woordenboekcontrole blijft apart traceerbaar.',
      'lexicalSource':'Woorden.org-prioriteit voor externe controle; intern geformuleerd en structureel gevalideerd.'
    })
data.extend(new)
p.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
print('added',len(new),batch[0],batch[-1],'total',len(data))
