import json
from pathlib import Path
p=Path(__file__).resolve().parents[1]/'data/initial-verb-definitions.json'
d=json.loads(p.read_text())
idx={x['infinitive']:x for x in d}

def patch(lemma, **kw):
    idx[lemma].update(kw)

# Core morphology corrections from known standard forms.
fixes={
'graven':dict(stem='graaf'),
'haasten':dict(participle='gehaast', reflexive=True),
'herleiden':dict(participle='herleid'),
'herschatten':dict(participle='herschat'),
'hoesten':dict(participle='gehoest'),
'hopen':dict(stem='hoop',past='hoopte',pastPlural='hoopten',participle='gehoopt'),
'horen':dict(stem='hoor',past='hoorde',pastPlural='hoorden',participle='gehoord'),
'inrichten':dict(separable=True,prefix='in',root='richten',stem='richt',past='richtte in',pastPlural='richtten in',participle='ingericht'),
'kosten':dict(participle='gekost'),
'leiden':dict(participle='geleid'),
'letten':dict(stem='let',participle='gelet'),
'lijken':dict(past='leek',pastPlural='leken',participle='geleken',regularity='onregelmatig'),
}
for k,v in fixes.items(): patch(k,**v)

# Prefix verbs that are separable in the reviewed senses.
sep = [x for x in idx if x.startswith('in') and x in {r[0] for r in []}]
# Explicit list avoids treating integreren, interpreteren, investeren and innen as separable.
sep_lemmas='''inademen inbijten inbinden inblazen inboeken inboren inbouwen inbreken inbrengen indelen indienen indoen indraaien indragen indrijven indringen indrinken indrogen induiken induwen ingaan ingeven inglijden ingooien ingraven ingrijpen ingroeien inhalen inhouden inhuren inkijken inkleuren inklimmen inklinken inkoken inkomen inkopen inkrimpen inkruipen inladen inlaten inleven inleveren inlezen inlopen inlossen inmaken inmengen inmeten innemen inpakken inpassen inregenen inrekenen inrichten inrijden inroepen inruilen inschenken inschieten inschrijven inslaan inslapen inslijpen inslikken insluiten insnijden inspreken inspringen instaan instappen insteken instellen instemmen instijgen instinken instoppen instoten instrijken instuderen insturen intekenen intrekken invallen invangen invaren invechten invliegen invoeren involgen invriezen invullen inwaaien inwerken inwerpen inwinnen inwonen inwrijven inzakken inzamelen inzien inzinken inzitten inzuigen inzwemmen'''.split()
# Derive root/stem from existing atlas-friendly fields only where needed later; preserve supplied irregular forms.
for lemma in sep_lemmas:
    x=idx[lemma]; x['separable']=True; x['prefix']='in'; x['root']=lemma[2:]

# False-negative separability had prefixed stems/participles in the source atlas.
regular_sep={
'indienen':('dien','diende in','dienden in','ingediend'),
'inleveren':('lever','leverde in','leverden in','ingeleverd'),
'inpakken':('pak','pakte in','pakten in','ingepakt'),
'instappen':('stap','stapte in','stapten in','ingestapt'),
'invullen':('vul','vulde in','vulden in','ingevuld'),
'inzamelen':('zamel','zamelde in','zamelden in','ingezameld'),
}
for lemma,(stem,past,ppast,part) in regular_sep.items(): patch(lemma,stem=stem,past=past,pastPlural=ppast,participle=part)

# Correct known participles ending in doubled final consonants from source generation.
for lemma,part in {
'inslapen':'ingeslapen','instoten':'ingestoten','kosten':'gekost','haasten':'gehaast','hoesten':'gehoest',
}.items(): patch(lemma,participle=part)

p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
