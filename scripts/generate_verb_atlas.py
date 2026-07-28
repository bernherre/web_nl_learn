import re, json, ast, pathlib, unicodedata
from collections import OrderedDict

WORDLIST_PATH = pathlib.Path(__import__('sys').argv[1] if len(__import__('sys').argv) > 1 else '/tmp/opentaal-wordlist.txt')
WORDLIST = set(WORDLIST_PATH.read_text(encoding='utf-8').splitlines())

# Curated strong / irregular roots. Forms are singular past, plural past, participle.
raw_irregular = r'''
bakken|bakte|bakten|gebakken|hebben|handeling
bannen|bande|banden|gebannen|hebben|handeling
barsten|barstte|barstten|gebarsten|zijn|verandering
bederven|bedierf|bedierven|bedorven|zijn|verandering
bedriegen|bedroog|bedrogen|bedrogen|hebben|handeling
beginnen|begon|begonnen|begonnen|zijn|gebeurtenis
bergen|borg|borgen|geborgen|hebben|handeling
bevelen|beval|bevalen|bevolen|hebben|handeling
bewegen|bewoog|bewogen|bewogen|hebben|beweging
bezwijken|bezweek|bezweken|bezweken|zijn|verandering
bidden|bad|baden|gebeden|hebben|handeling
bieden|bood|boden|geboden|hebben|handeling
bijten|beet|beten|gebeten|hebben|handeling
binden|bond|bonden|gebonden|hebben|handeling
blazen|blies|bliezen|geblazen|hebben|handeling
blijken|bleek|bleken|gebleken|zijn|gebeurtenis
blijven|bleef|bleven|gebleven|zijn|toestand
blinken|blonk|blonken|geblonken|hebben|toestand
braden|braadde|braadden|gebraden|hebben|handeling
breken|brak|braken|gebroken|hebben|verandering
brengen|bracht|brachten|gebracht|hebben|handeling
buigen|boog|bogen|gebogen|hebben|verandering
denken|dacht|dachten|gedacht|hebben|toestand
doen|deed|deden|gedaan|hebben|handeling
dragen|droeg|droegen|gedragen|hebben|handeling
drijven|dreef|dreven|gedreven|hebben|beweging
dringen|drong|drongen|gedrongen|hebben|beweging
drinken|dronk|dronken|gedronken|hebben|handeling
druipen|droop|dropen|gedropen|hebben|beweging
duiken|dook|doken|gedoken|hebben|beweging
dwingen|dwong|dwongen|gedwongen|hebben|handeling
eten|at|aten|gegeten|hebben|handeling
fluiten|floot|floten|gefloten|hebben|handeling
gaan|ging|gingen|gegaan|zijn|beweging
gelden|gold|golden|gegolden|hebben|toestand
genezen|genas|genazen|genezen|zijn|verandering
genieten|genoot|genoten|genoten|hebben|toestand
geven|gaf|gaven|gegeven|hebben|handeling
glijden|gleed|gleden|gegleden|zijn|beweging
graven|groef|groeven|gegraven|hebben|handeling
grijpen|greep|grepen|gegrepen|hebben|handeling
hangen|hing|hingen|gehangen|hebben|toestand
hebben|had|hadden|gehad|hebben|toestand
helpen|hielp|hielpen|geholpen|hebben|handeling
heten|heette|heetten|geheten|hebben|toestand
houden|hield|hielden|gehouden|hebben|toestand
kiezen|koos|kozen|gekozen|hebben|handeling
kijken|keek|keken|gekeken|hebben|handeling
klimmen|klom|klommen|geklommen|zijn|beweging
klinken|klonk|klonken|geklonken|hebben|toestand
knijpen|kneep|knepen|geknepen|hebben|handeling
komen|kwam|kwamen|gekomen|zijn|beweging
kopen|kocht|kochten|gekocht|hebben|handeling
krijgen|kreeg|kregen|gekregen|hebben|verandering
krimpen|kromp|krompen|gekrompen|zijn|verandering
kruipen|kroop|kropen|gekropen|hebben/zijn|beweging
kunnen|kon|konden|gekund|hebben|modaal
lachen|lachte|lachten|gelachen|hebben|handeling
laden|laadde|laadden|geladen|hebben|handeling
laten|liet|lieten|gelaten|hebben|handeling
lezen|las|lazen|gelezen|hebben|handeling
liegen|loog|logen|gelogen|hebben|handeling
liggen|lag|lagen|gelegen|hebben|toestand
lijden|leed|leden|geleden|hebben|toestand
lopen|liep|liepen|gelopen|hebben/zijn|beweging
meten|mat|maten|gemeten|hebben|handeling
moeten|moest|moesten|gemoeten|hebben|modaal
mogen|mocht|mochten|gemogen|hebben|modaal
nemen|nam|namen|genomen|hebben|handeling
ontstaan|ontstond|ontstonden|ontstaan|zijn|verandering
ontvangen|ontving|ontvingen|ontvangen|hebben|handeling
overlijden|overleed|overleden|overleden|zijn|verandering
prijzen|prees|prezen|geprezen|hebben|handeling
raden|raadde|raadden|geraden|hebben|handeling
rijden|reed|reden|gereden|hebben/zijn|beweging
rijzen|rees|rezen|gerezen|zijn|verandering
roepen|riep|riepen|geroepen|hebben|handeling
ruiken|rook|roken|geroken|hebben|toestand
scheiden|scheidde|scheidden|gescheiden|hebben/zijn|verandering
schelden|schold|scholden|gescholden|hebben|handeling
schenden|schond|schonden|geschonden|hebben|handeling
schenken|schonk|schonken|geschonken|hebben|handeling
scheren|schoor|schoren|geschoren|hebben|handeling
schieten|schoot|schoten|geschoten|hebben|handeling
schijnen|scheen|schenen|geschenen|hebben|toestand
schrijven|schreef|schreven|geschreven|hebben|handeling
schrikken|schrok|schrokken|geschrokken|zijn|verandering
slapen|sliep|sliepen|geslapen|hebben|toestand
slaan|sloeg|sloegen|geslagen|hebben|handeling
slijpen|sleep|slepen|geslepen|hebben|handeling
sluiten|sloot|sloten|gesloten|hebben|verandering
smelten|smolt|smolten|gesmolten|zijn|verandering
snijden|sneed|sneden|gesneden|hebben|handeling
spreken|sprak|spraken|gesproken|hebben|handeling
springen|sprong|sprongen|gesprongen|zijn|beweging
staan|stond|stonden|gestaan|hebben|toestand
steken|stak|staken|gestoken|hebben|handeling
stelen|stal|stalen|gestolen|hebben|handeling
sterven|stierf|stierven|gestorven|zijn|verandering
stijgen|steeg|stegen|gestegen|zijn|verandering
stinken|stonk|stonken|gestonken|hebben|toestand
stoten|stootte|stootten|gestoten|hebben|handeling
strijden|streed|streden|gestreden|hebben|handeling
strijken|streek|streken|gestreken|hebben|handeling
treffen|trof|troffen|getroffen|hebben|handeling
trekken|trok|trokken|getrokken|hebben/zijn|beweging
vallen|viel|vielen|gevallen|zijn|beweging
vangen|ving|vingen|gevangen|hebben|handeling
varen|voer|voeren|gevaren|hebben/zijn|beweging
vechten|vocht|vochten|gevochten|hebben|handeling
verdwijnen|verdween|verdwenen|verdwenen|zijn|verandering
vergeten|vergat|vergaten|vergeten|hebben/zijn|toestand
verliezen|verloor|verloren|verloren|hebben|verandering
vinden|vond|vonden|gevonden|hebben|handeling
vliegen|vloog|vlogen|gevlogen|hebben/zijn|beweging
vriezen|vroor|vroren|gevroren|hebben/zijn|verandering
vragen|vroeg|vroegen|gevraagd|hebben|handeling
wegen|woog|wogen|gewogen|hebben|handeling
werpen|wierp|wierpen|geworpen|hebben|handeling
weten|wist|wisten|geweten|hebben|toestand
willen|wilde|wilden|gewild|hebben|modaal
winnen|won|wonnen|gewonnen|hebben|verandering
worden|werd|werden|geworden|zijn|verandering
wrijven|wreef|wreven|gewreven|hebben|handeling
zeggen|zei|zeiden|gezegd|hebben|handeling
zien|zag|zagen|gezien|hebben|handeling
zijn|was|waren|geweest|zijn|toestand
zingen|zong|zongen|gezongen|hebben|handeling
zinken|zonk|zonken|gezonken|zijn|verandering
zitten|zat|zaten|gezeten|hebben|toestand
zoeken|zocht|zochten|gezocht|hebben|handeling
zuigen|zoog|zogen|gezogen|hebben|handeling
zwemmen|zwom|zwommen|gezwommen|hebben/zijn|beweging
zwijgen|zweeg|zwegen|gezwegen|hebben|handeling
'''

irregular=[]
for line in raw_irregular.strip().splitlines():
    p=line.split('|')
    if len(p)!=6: continue
    inf,ps,pp,part,aux,sem=p
    inf=inf.strip(); ps=ps.strip(); pp=pp.strip(); part=part.strip()
    if inf not in WORDLIST: continue
    # Minor typo guards in seed source
    if pp not in WORDLIST and ' ' not in pp: pass
    irregular.append(dict(infinitive=inf,past=ps,pastPlural=pp,participle=part,auxiliary=aux,semantic=sem,regularity='onregelmatig',separable=False,curated=True))

# Manually selected regular roots across daily, professional and abstract domains.
regular_seed = '''
werken wonen leren maken praten luisteren antwoorden bellen betalen bestellen bezoeken bezorgen boeken dansen delen drogen duwen feliciteren fietsen gebruiken geloven halen haasten herinneren horen hopen inschrijven invullen kennen koken lenen leven logeren maken missen noteren oefenen openen opruimen reizen studeren telefoneren vertellen vertrouwen verven vervoeren vieren vullen wachten wandelen wassen winkelen zorgen spelen sporten tekenen rekenen spellen oefenen herhalen uitleggen controleren verbeteren vertalen bedoelen herkennen onthouden ontmoeten presenteren overleggen samenwerken markeren onderstrepen aankruisen samenvatten opzoeken plannen organiseren regelen repareren reserveren annuleren wijzigen inchecken uitchecken klagen aanraden ontdekken aanpassen vermijden ondersteunen combineren beoordelen herstellen investeren selecteren retourneren ruilen passen dragen strijken krimpen naaien ontwerpen produceren recyclen verminderen besparen vervuilen opladen melden verbeteren aanleggen verduurzamen compenseren hergebruiken stimuleren beperken symboliseren onderscheiden bekritiseren normaliseren verantwoorden analyseren interpreteren suggereren onthullen contrasteren opbouwen benadrukken thematiseren problematiseren construeren ontregelen beschrijven vergelijken verklaren argumenteren concluderen constateren aantonen onderbouwen weerleggen veroorzaken resulteren verhinderen voorkomen bevorderen veranderen ontwikkelen toenemen afnemen verbeteren verslechteren uitbreiden verminderen omzetten onderhandelen terugkoppelen afstemmen toelichten bespreken voorstellen aanbevelen vaststellen uitvoeren opleveren toepassen uitwerken vastleggen voortzetten weergeven waarnemen behandelen ondernemen ontvangen verkrijgen meemaken erkennen ontkennen beweren stellen veronderstellen betwijfelen besluiten proberen weigeren verwachten toestaan twijfelen realiseren waarborgen beëindigen starten onderzoeken garanderen implementeren migreren configureren valideren monitoren rapporteren documenteren communiceren evalueren prioriteren escaleren delegeren faciliteren adviseren coachen begeleiden solliciteren werken huren verhuren verhuizen verpakken tillen schilderen boren poetsen stofzuigen dweilen koken bakken braden snijden mengen roeren proeven serveren ontbijten lunchen dineren shoppen afrekenen wegen kosten verkopen sparen lenen verdienen besteden bewaren kiezen vergelijken onderhandelen zorgen verzorgen voeren aaien trainen blaffen miauwen groeien bloeien planten oogsten beschermen wandelen kamperen zonnen fotograferen bezoeken reserveren vertrekken aankomen zwemmen varen vliegen rijden parkeren tanken laden ontspannen lachen huilen voelen schamen ergeren verrassen teleurstellen kalmeren troosten vertrouwen waarderen respecteren lezen schrijven dichten publiceren recenseren samenvatten citeren parafraseren vertellen luisteren discussiëren debatteren reflecteren formuleren nuanceren illustreren associëren verbinden schetsen kleuren schilderen combineren passen staan lijken ogen noemen benoemen spellen vragen begroeten bedanken uitnodigen feliciteren voorstellen reageren antwoorden communiceren delen helpen vragen geven nemen kijken horen ruiken smaken voelen aanraken bewegen draaien stoppen beginnen eindigen veranderen blijven groeien dalen stijgen ontstaan verdwijnen gebeuren lukken mislukken blijken verschijnen functioneren bestaan gelden bedragen bevatten omvatten behoren betreffen betekenen vereisen leveren bijdragen afhangen leiden beschikken richten beïnvloeden vertegenwoordigen vervangen versterken verzwakken verhogen verlagen verbeteren optimaliseren vereenvoudigen automatiseren integreren transformeren verwerken opslaan laden downloaden uploaden koppelen beveiligen herstellen verwijderen toevoegen wijzigen zoeken filteren sorteren groeperen tellen meten testen bouwen ontwikkelen ontwerpen reviewen deployen publiceren synchroniseren plannen schatten voorspellen beslissen kiezen goedkeuren weigeren accepteren aanvragen registreren indienen ondertekenen bevestigen controleren betalen innen retourneren bezorgen afhalen brengen halen sturen mailen appen chatten vergaderen presenteren demonstreren toelichten samenvatten vertalen spellen uitspreken oefenen herhalen onthouden vergeten
'''.split()

# Parse explicitly-labelled verb groups from current authored content.
for file in ['/mnt/data/web_nl_learn-v7-complete/js/depth-content.js','/mnt/data/web_nl_learn-v7-complete/js/supplement-content.js','/mnt/data/web_nl_learn-v7-complete/js/spiral-content.js','/mnt/data/web_nl_learn-v7-complete/js/content.js']:
    text=pathlib.Path(file).read_text(encoding='utf-8')
    # Capture arrays after labels that unambiguously denote verbs/actions.
    for m in re.finditer(r"['\"](?:Werkwoorden|Leerhandelingen|Communicatiehandelingen|Handelingen|Taalhandelingen)['\"]\s*:\s*\[(.*?)\]", text, re.S):
        regular_seed += re.findall(r"['\"]([^'\"]+)['\"]", m.group(1))
    for m in re.finditer(r"infinitive\s*:\s*['\"]([^'\"]+)['\"]", text):
        regular_seed.append(m.group(1))

# Clean phrases / reflexive / fixed prepositions to bare infinitive where possible.
def clean_inf(v):
    v=v.strip().lower()
    v=re.sub(r'^zich\s+','',v)
    v=re.sub(r'\s+(aan|af|met|op|naar|van|voor|over|in|om|tot|uit)$','',v)
    v=re.sub(r'[^a-zà-ÿ-].*$','',v)
    return v

regular_seed = list(OrderedDict.fromkeys(clean_inf(v) for v in regular_seed if clean_inf(v).endswith('en')))

T_KOFSCHIP=set('tkfschpx')
INSEP=('be','ge','her','ont','ver','er')

def stem_candidates(inf):
    if not inf.endswith('en') or len(inf)<4: return []
    raw=inf[:-2]
    cands=[]
    def add(s):
        if s and s not in cands: cands.append(s)
    add(raw)
    if len(raw)>=2 and raw[-1]==raw[-2] and raw[-1] not in 'aeiouy': add(raw[:-1])
    bases=list(cands)
    for s in bases:
        if s.endswith('v'): add(s[:-1]+'f')
        if s.endswith('z'): add(s[:-1]+'s')
    bases=list(cands)
    for s in bases:
        if len(s)>=3 and s[-1] not in 'aeiouy' and s[-2] in 'aeou' and s[-3] not in 'aeiouy':
            add(s[:-2]+s[-2]*2+s[-1])
    return cands

def regular_forms(inf):
    raw=inf[:-2]
    underlying=raw[-1] if raw else ''
    ending='t' if underlying in T_KOFSCHIP else 'd'
    no_ge=inf.startswith(INSEP)
    options=[]
    for stem in stem_candidates(inf):
        ps=stem+ending+'e'; pp=stem+ending+'en'; part=stem+ending if no_ge else 'ge'+stem+ending
        score=sum(x in WORDLIST for x in [stem,ps,pp,part])
        options.append((score,stem,ps,pp,part))
    if not options: return None
    score,stem,ps,pp,part=max(options)
    if score<3: return None
    return stem,ps,pp,part


PRESENT_OVERRIDES = {
    'zijn': ['ik ben', 'jij bent', 'hij/zij is', 'wij zijn', 'jullie zijn', 'zij zijn'],
    'hebben': ['ik heb', 'jij hebt', 'hij/zij heeft', 'wij hebben', 'jullie hebben', 'zij hebben'],
    'kunnen': ['ik kan', 'jij kunt', 'hij/zij kan', 'wij kunnen', 'jullie kunnen', 'zij kunnen'],
    'mogen': ['ik mag', 'jij mag', 'hij/zij mag', 'wij mogen', 'jullie mogen', 'zij mogen'],
    'willen': ['ik wil', 'jij wilt', 'hij/zij wil', 'wij willen', 'jullie willen', 'zij willen'],
    'zullen': ['ik zal', 'jij zult', 'hij/zij zal', 'wij zullen', 'jullie zullen', 'zij zullen'],
    'doen': ['ik doe', 'jij doet', 'hij/zij doet', 'wij doen', 'jullie doen', 'zij doen'],
    'gaan': ['ik ga', 'jij gaat', 'hij/zij gaat', 'wij gaan', 'jullie gaan', 'zij gaan'],
    'staan': ['ik sta', 'jij staat', 'hij/zij staat', 'wij staan', 'jullie staan', 'zij staan'],
    'slaan': ['ik sla', 'jij slaat', 'hij/zij slaat', 'wij slaan', 'jullie slaan', 'zij slaan'],
    'zien': ['ik zie', 'jij ziet', 'hij/zij ziet', 'wij zien', 'jullie zien', 'zij zien'],
}


def present_stem(inf):
    if inf in PRESENT_OVERRIDES:
        return PRESENT_OVERRIDES[inf][0].split(' ', 1)[1]
    candidates = stem_candidates(inf)
    if not candidates:
        return inf[:-2] if inf.endswith('en') else inf
    # A valid stem normally also creates a valid second/third-person form.
    # This disambiguates maak/mak, lees/les and open/opeen much better than
    # choosing the shortest dictionary word.
    def score(candidate):
        third = candidate if candidate.endswith('t') else candidate + 't'
        return (
            int(third in WORDLIST) * 4 + int(candidate in WORDLIST) * 2,
            len(candidate),
        )
    return max(candidates, key=score)


def present_forms(inf, separable=False, prefix='', root=''):
    base = root if separable else inf
    if base in PRESENT_OVERRIDES:
        forms = PRESENT_OVERRIDES[base]
        if separable:
            return [f'{item} {prefix}' for item in forms]
        return forms
    stem = present_stem(base)
    singular_t = stem if stem.endswith('t') else stem + 't'
    forms = [
        f'ik {stem}',
        f'jij {singular_t}',
        f'hij/zij {singular_t}',
        f'wij {base}',
        f'jullie {base}',
        f'zij {base}',
    ]
    if separable:
        forms = [f'{item} {prefix}' for item in forms]
    return forms


def past_forms(entry):
    singular = entry['past']
    plural = entry['pastPlural']
    return [
        f'ik {singular}',
        f'jij {singular}',
        f'hij/zij {singular}',
        f'wij {plural}',
        f'jullie {plural}',
        f'zij {plural}',
    ]


def perfect_forms(entry):
    auxiliaries = entry['auxiliary'].split('/')
    choices = []
    for auxiliary in auxiliaries:
        auxiliary = auxiliary.strip()
        if auxiliary == 'zijn':
            choices.append(f'ik ben {entry["participle"]}')
            choices.append(f'wij zijn {entry["participle"]}')
        else:
            choices.append(f'ik heb {entry["participle"]}')
            choices.append(f'wij hebben {entry["participle"]}')
    return choices


def semantic_note(entry):
    semantic = entry['semantic']
    if semantic == 'beweging':
        if entry['auxiliary'] == 'hebben/zijn':
            return 'Gebruik vaak hebben voor de activiteit en zijn bij een duidelijke richting of bestemming.'
        return 'Dit werkwoord drukt beweging, richting of verplaatsing uit.'
    if semantic == 'verandering':
        return 'Het onderwerp verandert van toestand, omvang, kwaliteit of situatie.'
    if semantic == 'toestand':
        return 'Het werkwoord beschrijft een toestand, ervaring, houding of waarneming.'
    if semantic == 'gebeurtenis':
        return 'Het werkwoord beschrijft een gebeurtenis, resultaat of het ontstaan van een situatie.'
    if semantic == 'modaal':
        return 'Het werkwoord drukt mogelijkheid, noodzaak, toestemming, wens of verwachting uit.'
    return 'Het werkwoord beschrijft vooral een handeling of activiteit.'

entries={e['infinitive']:e for e in irregular}
for inf in regular_seed:
    if inf in entries or inf not in WORDLIST: continue
    forms=regular_forms(inf)
    if not forms: continue
    stem,ps,pp,part=forms
    semantic='handeling'
    if inf in {'blijven','bestaan','functioneren','gelden','behoren','betreffen','betekenen','lijken','staan','zitten','liggen','wonen','leven'}: semantic='toestand'
    if inf in {'veranderen','groeien','dalen','stijgen','verdwijnen','ontstaan','verbeteren','verslechteren','toenemen','afnemen','lukken','mislukken'}: semantic='verandering'
    if inf in {'reizen','fietsen','wandelen','zwemmen','varen','vliegen','rijden','bewegen','klimmen','kruipen'}: semantic='beweging'
    auxiliary='hebben'
    if semantic == 'beweging': auxiliary='hebben/zijn'
    if inf in {'groeien','dalen','stijgen','verdwijnen','ontstaan','toenemen','afnemen','lukken','mislukken'}: auxiliary='zijn'
    if inf in {'veranderen','verbeteren','verslechteren'}: auxiliary='hebben/zijn'
    entries[inf]=dict(infinitive=inf,stem=stem,past=ps,pastPlural=pp,participle=part,auxiliary=auxiliary,semantic=semantic,regularity='regelmatig',separable=False,curated=True)

# Generate validated prefixed families from known roots.
separable_prefixes=['aan','af','achter','bij','binnen','boven','buiten','door','in','mee','na','om','onder','op','over','samen','tegen','terug','toe','uit','vast','voor','voort','weg','weer','vrij','los','neer','open','dicht','goed','klaar','hard','stil','thuis','langs','rond','omhoog','omlaag','voorbij','achteruit','vooruit','kapot','wakker']
for base in list(entries.values()):
    root=base['infinitive']
    if ' ' in root or '-' in root: continue
    basepast=base['past']
    basepp=base['pastPlural']
    basepart=base['participle']
    if ' ' in basepast or '/' in basepast or '/' in basepart: continue
    for pref in separable_prefixes:
        inf=pref+root
        if inf in entries or inf not in WORDLIST: continue
        past_sub=pref+basepast
        past_plural_sub=pref+basepp
        part=pref+basepart
        if past_sub not in WORDLIST or part not in WORDLIST: continue
        # plural form may not be in all wordlists; don't require.
        entries[inf]=dict(infinitive=inf,stem=present_stem(root),past=f'{basepast} {pref}',pastSubordinate=past_sub,pastPlural=f'{basepp} {pref}',participle=part,auxiliary=base['auxiliary'],semantic=base['semantic'],regularity=base['regularity'],separable=True,prefix=pref,root=root,curated=False)

# Generate validated regular inseparable derivatives.
for base in list(entries.values()):
    root=base['infinitive']
    if base['regularity']!='regelmatig' or base.get('separable') or ' ' in root: continue
    for pref in ['be','her','ont','ver']:
        inf=pref+root
        if inf in entries or inf not in WORDLIST: continue
        forms=regular_forms(inf)
        if not forms: continue
        stem,ps,pp,part=forms
        entries[inf]=dict(infinitive=inf,stem=stem,past=ps,pastPlural=pp,participle=part,auxiliary='hebben',semantic=base['semantic'],regularity='regelmatig',separable=False,prefix=pref,root=root,curated=False)

# Sort and enrich levels, examples, type labels.
a1={'zijn','hebben','gaan','komen','doen','maken','wonen','werken','leren','lezen','schrijven','spreken','luisteren','kijken','zien','horen','eten','drinken','kopen','betalen','vragen','antwoorden','geven','nemen','helpen','bellen','spelen','slapen','staan','zitten','liggen','lopen','fietsen','reizen','dragen','passen','houden','willen','kunnen','moeten','mogen','heten','vinden','zoeken','wachten','koken','wassen','openen','sluiten','beginnen','stoppen'}
a2={'brengen','halen','vertellen','begrijpen','onthouden','vergeten','kiezen','blijven','worden','rijden','vliegen','zwemmen','verhuizen','reserveren','annuleren','wijzigen','klagen','aanraden','ontmoeten','regelen','repareren','bestellen','bezorgen','ruilen','terugbrengen','aantrekken','uittrekken','meenemen','afspreken','inschrijven','invullen','opruimen'}
b2_words={'problematiseren','nuanceren','symboliseren','ondermijnen','verantwoorden','externaliseren','decarboniseren','mitigeren','herinterpreteren','thematiseren','construeren','ontregelen','waarborging'}
sem_labels={
    'handeling':'handeling of activiteit',
    'toestand':'toestand of ervaring',
    'verandering':'verandering of ontwikkeling',
    'beweging':'beweging en richting',
    'gebeurtenis':'gebeurtenis of resultaat',
    'modaal':'modaliteit',
}
for e in entries.values():
    inf=e['infinitive']
    e['level']='A1' if inf in a1 else 'A2' if inf in a2 else 'B2' if inf in b2_words or len(inf)>14 else 'B1'
    e['semanticLabel']=sem_labels.get(e['semantic'],e['semantic'])
    e['meaning']=semantic_note(e)
    e['presentForms']=present_forms(inf, bool(e.get('separable')), e.get('prefix',''), e.get('root',''))
    e['pastForms']=past_forms(e)
    e['perfectForms']=perfect_forms(e)
    e['imperative']=present_stem(e.get('root', inf)) + (f" {e['prefix']}" if e.get('separable') else '')
    e['conjugationClass']='zwak / regelmatig' if e['regularity']=='regelmatig' else 'sterk of anderszins onregelmatig'
    if e.get('separable'):
        e['sentencePatterns']={
            'hoofdzin': f"{e['presentForms'][0].capitalize()}.",
            'verleden': f"{e['pastForms'][0].capitalize()}.",
            'perfectum': f"{e['perfectForms'][0].capitalize()}.",
            'modaal': f"Ik kan {inf}.",
            'bijzin': f"… omdat ik {e['prefix']}{present_stem(e['root'])}.",
            'metTe': f"… om {e['prefix']} te {e['root']}.",
        }
    else:
        e['sentencePatterns']={
            'hoofdzin': f"{e['presentForms'][0].capitalize()}.",
            'verleden': f"{e['pastForms'][0].capitalize()}.",
            'perfectum': f"{e['perfectForms'][0].capitalize()}.",
            'modaal': f"Ik kan {inf}.",
            'bijzin': f"… omdat ik {e['presentForms'][0].split(' ',1)[1]}.",
        }

# Prefer curated entries first but output alphabetically for predictable search.
out=sorted(entries.values(), key=lambda e:e['infinitive'])
print('total',len(out),'regular',sum(e['regularity']=='regelmatig' for e in out),'irregular',sum(e['regularity']=='onregelmatig' for e in out),'separable',sum(e.get('separable',False) for e in out),'curated',sum(e['curated'] for e in out))
path=pathlib.Path(__import__('sys').argv[2] if len(__import__('sys').argv) > 2 else '/tmp/verb-atlas.json')
path.write_text(json.dumps(out,ensure_ascii=False,indent=2),encoding='utf-8')
