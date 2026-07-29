const rawVerbDetails = [
  // Basiswerkwoorden en veelgebruikte onregelmatige vormen
  ['zijn','Een toestand, identiteit of eigenschap uitdrukken.','Ik ben vandaag thuis.',['bestaan','zich bevinden'],{past:'was',pastPlural:'waren',participle:'geweest',auxiliary:'zijn',presentForms:['ik ben','jij bent','hij/zij is','wij zijn','jullie zijn','zij zijn']}],
  ['hebben','Iets bezitten, ervaren of tot je beschikking hebben.','Wij hebben morgen een vergadering.',['bezitten','beschikken over'],{past:'had',pastPlural:'hadden',participle:'gehad',auxiliary:'hebben',presentForms:['ik heb','jij hebt','hij/zij heeft','wij hebben','jullie hebben','zij hebben']}],
  ['worden','In een nieuwe toestand komen of een verandering ondergaan.','Het wordt morgen warmer.',['veranderen in','zich ontwikkelen tot'],{past:'werd',pastPlural:'werden',participle:'geworden',auxiliary:'zijn',presentStem:'word'}],
  ['gaan','Zich van een plaats naar een andere plaats bewegen.','Ik ga morgen naar Utrecht.',['vertrekken','zich begeven'],{past:'ging',pastPlural:'gingen',participle:'gegaan',auxiliary:'zijn',presentForms:['ik ga','jij gaat','hij/zij gaat','wij gaan','jullie gaan','zij gaan']}],
  ['komen','Een plaats of persoon bereiken door ernaartoe te bewegen.','De trein komt om acht uur.',['aankomen','verschijnen'],{past:'kwam',pastPlural:'kwamen',participle:'gekomen',auxiliary:'zijn',presentStem:'kom'}],
  ['doen','Een handeling uitvoeren of veroorzaken.','Wat doe je vanavond?',['uitvoeren','verrichten'],{past:'deed',pastPlural:'deden',participle:'gedaan',auxiliary:'hebben',presentForms:['ik doe','jij doet','hij/zij doet','wij doen','jullie doen','zij doen']}],
  ['zien','Iets met de ogen waarnemen of begrijpen.','Ik zie wat je bedoelt.',['waarnemen','opmerken'],{past:'zag',pastPlural:'zagen',participle:'gezien',auxiliary:'hebben',presentForms:['ik zie','jij ziet','hij/zij ziet','wij zien','jullie zien','zij zien']}],
  ['zeggen','Met woorden iets meedelen.','Zij zegt dat ze later komt.',['vertellen','meedelen'],{past:'zei',pastPlural:'zeiden',participle:'gezegd',auxiliary:'hebben',presentStem:'zeg'}],
  ['weten','Kennis of zekerheid over iets hebben.','Ik weet het antwoord niet.',['kennen','op de hoogte zijn van'],{past:'wist',pastPlural:'wisten',participle:'geweten',auxiliary:'hebben',presentForms:['ik weet','jij weet','hij/zij weet','wij weten','jullie weten','zij weten']}],
  ['willen','Een wens, bedoeling of bereidheid uitdrukken.','Ik wil beter Nederlands spreken.',['wensen','van plan zijn'],{past:'wilde',pastPlural:'wilden',participle:'gewild',auxiliary:'hebben',presentForms:['ik wil','jij wilt','hij/zij wil','wij willen','jullie willen','zij willen']}],
  ['kunnen','In staat zijn of de mogelijkheid hebben om iets te doen.','Kun je mij helpen?',['in staat zijn','mogelijk zijn'],{past:'kon',pastPlural:'konden',participle:'gekund',auxiliary:'hebben',presentForms:['ik kan','jij kunt','hij/zij kan','wij kunnen','jullie kunnen','zij kunnen']}],
  ['mogen','Toestemming hebben of een beleefde wens uitdrukken.','Mag ik hier zitten?',['toestemming hebben','toegestaan zijn'],{past:'mocht',pastPlural:'mochten',participle:'gemogen',auxiliary:'hebben',presentForms:['ik mag','jij mag','hij/zij mag','wij mogen','jullie mogen','zij mogen']}],
  ['moeten','Een noodzaak, verplichting of sterke verwachting uitdrukken.','Ik moet morgen vroeg opstaan.',['verplicht zijn','nodig zijn'],{past:'moest',pastPlural:'moesten',participle:'gemoeten',auxiliary:'hebben',presentStem:'moet'}],
  ['zullen','Een voorspelling, belofte, voorstel of toekomstige handeling uitdrukken.','Ik zal je morgen bellen.',['gaan','van plan zijn'],{past:'zou',pastPlural:'zouden',participle:'gezuld',auxiliary:'hebben',presentForms:['ik zal','jij zult','hij/zij zal','wij zullen','jullie zullen','zij zullen']}],
  ['krijgen','Iets ontvangen of in een nieuwe situatie terechtkomen.','Ik heb een brief van de gemeente gekregen.',['ontvangen','verkrijgen'],{past:'kreeg',pastPlural:'kregen',participle:'gekregen',auxiliary:'hebben',presentStem:'krijg'}],
  ['geven','Iets aan iemand overhandigen of beschikbaar maken.','Zij geeft mij goed advies.',['overhandigen','schenken'],{past:'gaf',pastPlural:'gaven',participle:'gegeven',auxiliary:'hebben',presentStem:'geef'}],
  ['nemen','Iets pakken, kiezen of gebruiken.','Ik neem de trein naar Amsterdam.',['pakken','kiezen'],{past:'nam',pastPlural:'namen',participle:'genomen',auxiliary:'hebben',presentStem:'neem'}],
  ['brengen','Iets of iemand naar een andere plaats vervoeren.','Kun je de kinderen naar school brengen?',['vervoeren','bezorgen'],{past:'bracht',pastPlural:'brachten',participle:'gebracht',auxiliary:'hebben',presentStem:'breng'}],
  ['denken','Gedachten vormen of een mening hebben.','Ik denk dat het gaat regenen.',['nadenken','menen'],{past:'dacht',pastPlural:'dachten',participle:'gedacht',auxiliary:'hebben',presentStem:'denk'},[
    ['denken aan','Iemand of iets in gedachten hebben.','Ik denk vaak aan mijn familie.'],
    ['denken over','Een onderwerp overwegen of er een mening over vormen.','Wat denk je over dit voorstel?']
  ]],
  ['vinden','Iets ontdekken, terugvinden of een mening hebben.','Ik vind dit boek interessant.',['aantreffen','menen'],{past:'vond',pastPlural:'vonden',participle:'gevonden',auxiliary:'hebben',presentStem:'vind'}],
  ['kiezen','Na vergelijking een mogelijkheid selecteren.','We hebben voor de duurzaamste oplossing gekozen.',['selecteren','besluiten tot'],{past:'koos',pastPlural:'kozen',participle:'gekozen',auxiliary:'hebben',presentStem:'kies'},[['kiezen voor','Een voorkeur uitspreken en één mogelijkheid nemen.','Ik kies voor de trein.']]],
  ['lezen','Geschreven taal bekijken en begrijpen.','Ik lees elke avond een artikel.',['doornemen','bestuderen'],{past:'las',pastPlural:'lazen',participle:'gelezen',auxiliary:'hebben',presentStem:'lees'}],
  ['schrijven','Tekst met letters en woorden maken.','Zij schrijft een formele e-mail.',['noteren','formuleren'],{past:'schreef',pastPlural:'schreven',participle:'geschreven',auxiliary:'hebben',presentStem:'schrijf'}],
  ['spreken','Mondeling woorden gebruiken of een taal beheersen.','Wij spreken Nederlands tijdens de les.',['praten','zich uitdrukken'],{past:'sprak',pastPlural:'spraken',participle:'gesproken',auxiliary:'hebben',presentStem:'spreek'},[['spreken over','Een onderwerp mondeling bespreken.','We spreken over de planning.'],['spreken met','Een gesprek voeren met iemand.','Ik spreek morgen met mijn leidinggevende.']]],
  ['eten','Voedsel in de mond nemen en doorslikken.','We hebben samen soep gegeten.',['consumeren','nuttigen'],{past:'at',pastPlural:'aten',participle:'gegeten',auxiliary:'hebben',presentStem:'eet'}],
  ['drinken','Vloeistof innemen.','Hij drinkt veel water.',['nuttigen','innemen'],{past:'dronk',pastPlural:'dronken',participle:'gedronken',auxiliary:'hebben',presentStem:'drink'}],
  ['slapen','In een rusttoestand zijn waarin je niet wakker bent.','Ik heb vannacht slecht geslapen.',['rusten','in slaap zijn'],{past:'sliep',pastPlural:'sliepen',participle:'geslapen',auxiliary:'hebben',presentStem:'slaap'}],
  ['lopen','Je te voet verplaatsen; ook functioneren.','Ik ben naar het station gelopen.',['wandelen','stappen'],{past:'liep',pastPlural:'liepen',participle:'gelopen',auxiliary:'hebben/zijn',presentStem:'loop'}],
  ['rijden','Je met een voertuig verplaatsen of een voertuig besturen.','We zijn naar België gereden.',['besturen','zich verplaatsen'],{past:'reed',pastPlural:'reden',participle:'gereden',auxiliary:'hebben/zijn',presentStem:'rijd'}],
  ['vliegen','Je door de lucht verplaatsen.','Zij is naar Madrid gevlogen.',['door de lucht reizen','zweven'],{past:'vloog',pastPlural:'vlogen',participle:'gevlogen',auxiliary:'hebben/zijn',presentStem:'vlieg'}],
  ['varen','Je met een boot over water verplaatsen.','We zijn naar het eiland gevaren.',['zeilen','per boot reizen'],{past:'voer',pastPlural:'voeren',participle:'gevaren',auxiliary:'hebben/zijn',presentStem:'vaar'}],
  ['zwemmen','Je door water voortbewegen.','Ik heb een uur gezwommen.',['baden','door het water bewegen'],{past:'zwom',pastPlural:'zwommen',participle:'gezwommen',auxiliary:'hebben/zijn',presentStem:'zwem'}],
  ['vallen','Onbedoeld naar beneden of op de grond bewegen.','Hij is van zijn fiets gevallen.',['neervallen','omvallen'],{past:'viel',pastPlural:'vielen',participle:'gevallen',auxiliary:'zijn',presentStem:'val'}],
  ['staan','Rechtop zijn of zich op een bepaalde plaats bevinden.','De fiets staat voor het huis.',['zich bevinden','geplaatst zijn'],{past:'stond',pastPlural:'stonden',participle:'gestaan',auxiliary:'hebben',presentForms:['ik sta','jij staat','hij/zij staat','wij staan','jullie staan','zij staan']}],
  ['zitten','Op een stoel of oppervlak rusten; zich ergens bevinden.','Wij zitten in de trein.',['gezeten zijn','zich bevinden'],{past:'zat',pastPlural:'zaten',participle:'gezeten',auxiliary:'hebben',presentStem:'zit'}],
  ['liggen','Horizontaal zijn of zich op een plaats bevinden.','Het boek ligt op tafel.',['gelegen zijn','zich bevinden'],{past:'lag',pastPlural:'lagen',participle:'gelegen',auxiliary:'hebben',presentStem:'lig'}],
  ['hangen','Aan iets bevestigd zijn zonder op de grond te rusten.','De jas hangt aan de kapstok.',['bevestigd zijn','bungelen'],{past:'hing',pastPlural:'hingen',participle:'gehangen',auxiliary:'hebben',presentStem:'hang'}],
  ['houden','Iets vasthouden, bewaren of een bepaalde houding hebben.','Ik houd de deur open.',['vasthouden','bewaren'],{past:'hield',pastPlural:'hielden',participle:'gehouden',auxiliary:'hebben',presentStem:'houd'},[['houden van','Liefde of een sterke voorkeur voelen.','Ik houd van Nederlandse kaas.'],['zich houden aan','Een regel of afspraak volgen.','Iedereen moet zich aan de regels houden.']]],
  ['helpen','Iemand ondersteunen zodat iets gemakkelijker lukt.','Kun je mij met deze brief helpen?',['ondersteunen','bijstaan'],{past:'hielp',pastPlural:'hielpen',participle:'geholpen',auxiliary:'hebben',presentStem:'help'},[['helpen met','Ondersteunen bij een taak of activiteit.','Zij helpt mij met de administratie.'],['helpen bij','Ondersteunen tijdens een proces of gebeurtenis.','Hij helpt bij de verhuizing.']]],
  ['beginnen','De eerste stap van een activiteit of periode uitvoeren.','De les is om negen uur begonnen.',['starten','aanvangen'],{past:'begon',pastPlural:'begonnen',participle:'begonnen',auxiliary:'zijn',presentStem:'begin'},[['beginnen met','Een activiteit als eerste uitvoeren.','We beginnen met een korte herhaling.']]],
  ['begrijpen','De betekenis of bedoeling van iets kennen.','Ik begrijp de uitleg nu beter.',['snappen','vatten'],{past:'begreep',pastPlural:'begrepen',participle:'begrepen',auxiliary:'hebben',presentStem:'begrijp'}],
  ['vergeten','Iets niet meer weten of niet doen doordat je er niet aan denkt.','Ik ben mijn afspraak vergeten.',['niet onthouden','uit het oog verliezen'],{past:'vergat',pastPlural:'vergaten',participle:'vergeten',auxiliary:'hebben/zijn',presentStem:'vergeet'}],
  ['verliezen','Iets kwijtraken, niet winnen of minder worden.','Ik heb mijn sleutel verloren.',['kwijtraken','verspelen'],{past:'verloor',pastPlural:'verloren',participle:'verloren',auxiliary:'hebben',presentStem:'verlies'}],
  ['winnen','In een wedstrijd de beste zijn of iets als prijs krijgen.','Ons team heeft de wedstrijd gewonnen.',['zegevieren','behalen'],{past:'won',pastPlural:'wonnen',participle:'gewonnen',auxiliary:'hebben',presentStem:'win'}],
  ['dragen','Iets vasthouden en verplaatsen of kleding aanhebben.','Zij draagt een blauwe jas.',['meenemen','aanhebben'],{past:'droeg',pastPlural:'droegen',participle:'gedragen',auxiliary:'hebben',presentStem:'draag'}],
  ['trekken','Iets naar je toe bewegen of ergens naartoe reizen.','Hij trok de deur open.',['slepen','naar zich toe halen'],{past:'trok',pastPlural:'trokken',participle:'getrokken',auxiliary:'hebben/zijn',presentStem:'trek'}],
  ['breken','In stukken gaan of iets in stukken maken.','Het glas is gebroken.',['barsten','stukmaken'],{past:'brak',pastPlural:'braken',participle:'gebroken',auxiliary:'hebben/zijn',presentStem:'breek'}],
  ['sluiten','Iets dichtdoen, beëindigen of een overeenkomst aangaan.','De winkel sluit om zes uur.',['dichtdoen','beëindigen'],{past:'sloot',pastPlural:'sloten',participle:'gesloten',auxiliary:'hebben',presentStem:'sluit'}],
  ['blijken','Duidelijk worden dat iets waar of anders is.','Uit het onderzoek bleek dat de methode werkte.',['duidelijk worden','naar voren komen'],{past:'bleek',pastPlural:'bleken',participle:'gebleken',auxiliary:'zijn',presentStem:'blijk'}],
  ['ontstaan','Beginnen te bestaan of zich geleidelijk vormen.','Het probleem is tijdens de migratie ontstaan.',['zich vormen','opkomen'],{past:'ontstond',pastPlural:'ontstonden',participle:'ontstaan',auxiliary:'zijn',presentStem:'ontsta'}],
  ['verdwijnen','Niet langer zichtbaar of aanwezig zijn.','De fout is na de update verdwenen.',['weggaan','ophouden te bestaan'],{past:'verdween',pastPlural:'verdwenen',participle:'verdwenen',auxiliary:'zijn',presentStem:'verdwijn'}],
  ['gebeuren','Plaatsvinden.','Wat is er gisteren gebeurd?',['plaatsvinden','voorvallen'],{past:'gebeurde',pastPlural:'gebeurden',participle:'gebeurd',auxiliary:'zijn',presentStem:'gebeur'}],
  ['lukken','Het gewenste resultaat bereiken.','Het is gelukt om de fout te herstellen.',['slagen','goed aflopen'],{past:'lukte',pastPlural:'lukten',participle:'gelukt',auxiliary:'zijn',presentStem:'luk'}],
  ['mislukken','Niet het gewenste resultaat bereiken.','De eerste poging is mislukt.',['falen','verkeerd aflopen'],{past:'mislukte',pastPlural:'mislukten',participle:'mislukt',auxiliary:'zijn',presentStem:'misluk'}],
  ['genieten','Iets als prettig ervaren.','We hebben van de vakantie genoten.',['plezier hebben','waarderen'],{past:'genoot',pastPlural:'genoten',participle:'genoten',auxiliary:'hebben',presentStem:'geniet'},[['genieten van','Veel plezier of voldoening uit iets krijgen.','Ik geniet van de rust.']]],

  // Scheidbare en afgeleide werkwoorden uit de gedeelde referentiepagina's
  ['aannemen','Iets accepteren of veronderstellen dat iets waar is.','Zij heeft het aanbod aangenomen.',['accepteren','aanvaarden','veronderstellen'],{past:'nam aan',pastPlural:'namen aan',participle:'aangenomen',auxiliary:'hebben',presentStem:'neem',separable:true,prefix:'aan',root:'nemen'},null,[
    ['Iets accepteren dat iemand aanbiedt.','Zij heeft de nieuwe baan aangenomen.',['accepteren','aanvaarden']],
    ['Denken dat iets waarschijnlijk waar is.','Ik neem aan dat hij morgen komt.',['veronderstellen','ervan uitgaan']]
  ]],
  ['aanbieden','Iets beschikbaar stellen zodat iemand het kan nemen of gebruiken.','De organisatie biedt gratis taallessen aan.',['presenteren','ter beschikking stellen'],{past:'bood aan',pastPlural:'boden aan',participle:'aangeboden',auxiliary:'hebben',presentStem:'bied',separable:true,prefix:'aan',root:'bieden'}],
  ['aanbevelen','Zeggen dat je iets goed of geschikt vindt.','De arts heeft meer beweging aanbevolen.',['adviseren','aanraden'],{past:'beval aan',pastPlural:'bevalen aan',participle:'aanbevolen',auxiliary:'hebben',presentStem:'beveel',separable:true,prefix:'aan',root:'bevelen'}],
  ['aangeven','Informatie noemen, iets aanwijzen of iets overhandigen.','Kun je aangeven wat er precies misgaat?',['vermelden','aanwijzen'],{past:'gaf aan',pastPlural:'gaven aan',participle:'aangegeven',auxiliary:'hebben',presentStem:'geef',separable:true,prefix:'aan',root:'geven'}],
  ['aankomen','Een bestemming bereiken; ook in gewicht toenemen.','De trein is op tijd aangekomen.',['arriveren','bereiken'],{past:'kwam aan',pastPlural:'kwamen aan',participle:'aangekomen',auxiliary:'zijn',presentStem:'kom',separable:true,prefix:'aan',root:'komen'}],
  ['aansluiten','Iets verbinden of je bij een groep voegen.','Zij heeft zich bij de cursus aangesloten.',['verbinden','zich voegen bij'],{past:'sloot aan',pastPlural:'sloten aan',participle:'aangesloten',auxiliary:'hebben',presentStem:'sluit',separable:true,prefix:'aan',root:'sluiten'},[['zich aansluiten bij','Lid worden of meedoen met een groep.','Ik sluit me aan bij het team.']],null,true],
  ['aantrekken','Kleding aandoen, iets naar je toe trekken of belangstelling wekken.','Trek een warme jas aan.',['aandoen','naar zich toe halen'],{past:'trok aan',pastPlural:'trokken aan',participle:'aangetrokken',auxiliary:'hebben',presentStem:'trek',separable:true,prefix:'aan',root:'trekken'}],
  ['aanvragen','Formeel vragen om iets te krijgen.','We hebben een vergunning aangevraagd.',['verzoeken om','indienen'],{past:'vroeg aan',pastPlural:'vroegen aan',participle:'aangevraagd',auxiliary:'hebben',presentStem:'vraag',separable:true,prefix:'aan',root:'vragen'}],
  ['aanwijzen','Met een gebaar of beslissing tonen wie of wat bedoeld is.','De docent wees de juiste pagina aan.',['aanduiden','selecteren'],{past:'wees aan',pastPlural:'wezen aan',participle:'aangewezen',auxiliary:'hebben',presentStem:'wijs',separable:true,prefix:'aan',root:'wijzen'}],
  ['afgaan','Weggaan, ontploffen of een geluidssignaal geven.','De wekker ging om zeven uur af.',['vertrekken','in werking treden'],{past:'ging af',pastPlural:'gingen af',participle:'afgegaan',auxiliary:'zijn',presentStem:'ga',separable:true,prefix:'af',root:'gaan'}],
  ['afgeven','Iets overhandigen, uitstoten of achterlaten.','U kunt het formulier bij de balie afgeven.',['inleveren','overhandigen'],{past:'gaf af',pastPlural:'gaven af',participle:'afgegeven',auxiliary:'hebben',presentStem:'geef',separable:true,prefix:'af',root:'geven'}],
  ['afhangen','Door iets anders bepaald worden.','De planning hangt af van het weer.',['afhankelijk zijn','bepaald worden'],{past:'hing af',pastPlural:'hingen af',participle:'afgehangen',auxiliary:'hebben',presentStem:'hang',separable:true,prefix:'af',root:'hangen'},[['afhangen van','Door een factor of voorwaarde bepaald worden.','Het resultaat hangt af van de voorbereiding.']]],
  ['aflopen','Eindigen, naar beneden lopen of slecht of goed eindigen.','Het contract loopt volgende maand af.',['eindigen','verstrijken'],{past:'liep af',pastPlural:'liepen af',participle:'afgelopen',auxiliary:'zijn',presentStem:'loop',separable:true,prefix:'af',root:'lopen'}],
  ['afnemen','Minder worden, iets verwijderen of een test afnemen.','De vraag naar kantoorruimte is afgenomen.',['verminderen','dalen'],{past:'nam af',pastPlural:'namen af',participle:'afgenomen',auxiliary:'hebben/zijn',presentStem:'neem',separable:true,prefix:'af',root:'nemen'}],
  ['afspreken','Samen een afspraak of regel bepalen.','We hebben afgesproken om om tien uur te beginnen.',['overeenkomen','plannen'],{past:'sprak af',pastPlural:'spraken af',participle:'afgesproken',auxiliary:'hebben',presentStem:'spreek',separable:true,prefix:'af',root:'spreken'}],
  ['afvallen','Gewicht verliezen of van een oppervlak vallen.','Hij is vijf kilo afgevallen.',['vermageren','gewicht verliezen'],{past:'viel af',pastPlural:'vielen af',participle:'afgevallen',auxiliary:'zijn',presentStem:'val',separable:true,prefix:'af',root:'vallen'}],
  ['afvragen','Bij jezelf een vraag of twijfel hebben.','Ik vraag me af waarom de trein vertraagd is.',['zich bedenken','twijfelen'],{past:'vroeg af',pastPlural:'vroegen af',participle:'afgevraagd',auxiliary:'hebben',presentStem:'vraag',separable:true,prefix:'af',root:'vragen'},null,null,true],
  ['afwassen','Servies met water en zeep schoonmaken.','Na het eten hebben we afgewassen.',['de vaat doen','schoonmaken'],{past:'waste af',pastPlural:'wasten af',participle:'afgewassen',auxiliary:'hebben',presentStem:'was',separable:true,prefix:'af',root:'wassen'}],
  ['afwijzen','Laten weten dat je iets of iemand niet accepteert.','De gemeente heeft de aanvraag afgewezen.',['weigeren','verwerpen'],{past:'wees af',pastPlural:'wezen af',participle:'afgewezen',auxiliary:'hebben',presentStem:'wijs',separable:true,prefix:'af',root:'wijzen'}],
  ['afzeggen','Laten weten dat een afspraak of activiteit niet doorgaat.','Zij heeft de afspraak afgezegd.',['annuleren','intrekken'],{past:'zei af',pastPlural:'zeiden af',participle:'afgezegd',auxiliary:'hebben',presentStem:'zeg',separable:true,prefix:'af',root:'zeggen'}],
  ['bijhouden','Regelmatig registreren of hetzelfde tempo behouden.','Ik houd mijn studieresultaten in een overzicht bij.',['registreren','volgen'],{past:'hield bij',pastPlural:'hielden bij',participle:'bijgehouden',auxiliary:'hebben',presentStem:'houd',separable:true,prefix:'bij',root:'houden'}],
  ['bijdragen','Helpen om een resultaat mogelijk te maken.','Deze maatregel draagt bij aan lagere kosten.',['meehelpen','een bijdrage leveren'],{past:'droeg bij',pastPlural:'droegen bij',participle:'bijgedragen',auxiliary:'hebben',presentStem:'draag',separable:true,prefix:'bij',root:'dragen'},[['bijdragen aan','Een positieve of negatieve invloed hebben op een resultaat.','Goede isolatie draagt bij aan energiebesparing.']]],
  ['binnenkomen','Van buiten naar binnen gaan; ontvangen worden.','Er is zojuist een nieuwe aanvraag binnengekomen.',['arriveren','ontvangen worden'],{past:'kwam binnen',pastPlural:'kwamen binnen',participle:'binnengekomen',auxiliary:'zijn',presentStem:'kom',separable:true,prefix:'binnen',root:'komen'}],
  ['doorgaan','Verdergaan of plaatsvinden zoals gepland.','De vergadering gaat ondanks de storing door.',['voortzetten','plaatsvinden'],{past:'ging door',pastPlural:'gingen door',participle:'doorgegaan',auxiliary:'zijn',presentStem:'ga',separable:true,prefix:'door',root:'gaan'}],
  ['doorbrengen','Een periode ergens of op een bepaalde manier besteden.','We hebben de vakantie in Zeeland doorgebracht.',['besteden','verblijven'],{past:'bracht door',pastPlural:'brachten door',participle:'doorgebracht',auxiliary:'hebben',presentStem:'breng',separable:true,prefix:'door',root:'brengen'}],
  ['ingaan','Beginnen, van kracht worden of inhoudelijk reageren op.','De nieuwe regels zijn op 1 januari ingegaan.',['beginnen','van kracht worden'],{past:'ging in',pastPlural:'gingen in',participle:'ingegaan',auxiliary:'zijn',presentStem:'ga',separable:true,prefix:'in',root:'gaan'},[['ingaan op','Reageren op of aandacht besteden aan een onderwerp.','De spreker ging in op de vragen uit de zaal.']]],
  ['inhouden','Bevatten, tegenhouden of betekenen.','De functie houdt veel verantwoordelijkheid in.',['bevatten','betekenen'],{past:'hield in',pastPlural:'hielden in',participle:'ingehouden',auxiliary:'hebben',presentStem:'houd',separable:true,prefix:'in',root:'houden'}],
  ['inschrijven','Een naam officieel registreren voor een activiteit of organisatie.','Ik heb me voor het examen ingeschreven.',['registreren','aanmelden'],{past:'schreef in',pastPlural:'schreven in',participle:'ingeschreven',auxiliary:'hebben',presentStem:'schrijf',separable:true,prefix:'in',root:'schrijven'},[['zich inschrijven voor','Je officieel registreren voor een cursus, examen of activiteit.','Zij schrijft zich in voor de cursus.']],null,true],
  ['meenemen','Iets of iemand met je naar een andere plaats nemen.','Neem je identiteitsbewijs mee.',['meedragen','bij je hebben'],{past:'nam mee',pastPlural:'namen mee',participle:'meegenomen',auxiliary:'hebben',presentStem:'neem',separable:true,prefix:'mee',root:'nemen'}],
  ['meedoen','Samen met anderen deelnemen.','Doe je mee met de oefening?',['deelnemen','participeren'],{past:'deed mee',pastPlural:'deden mee',participle:'meegedaan',auxiliary:'hebben',presentStem:'doe',separable:true,prefix:'mee',root:'doen'},[['meedoen met','Deelnemen aan een activiteit.','Wij doen mee met de taalwedstrijd.']]],
  ['nadenken','Bewust en zorgvuldig over iets denken.','Ik moet nog over het voorstel nadenken.',['overwegen','reflecteren'],{past:'dacht na',pastPlural:'dachten na',participle:'nagedacht',auxiliary:'hebben',presentStem:'denk',separable:true,prefix:'na',root:'denken'},[['nadenken over','Een onderwerp zorgvuldig overwegen.','We denken na over een andere aanpak.']]],
  ['opnemen','Iets registreren, accepteren, pakken of in een geheel toevoegen.','Het gesprek wordt voor kwaliteitsdoeleinden opgenomen.',['registreren','vastleggen'],{past:'nam op',pastPlural:'namen op',participle:'opgenomen',auxiliary:'hebben',presentStem:'neem',separable:true,prefix:'op',root:'nemen'}],
  ['opstaan','Van een stoel of bed overeind komen.','Ik ben vandaag om half zeven opgestaan.',['overeind komen','uit bed komen'],{past:'stond op',pastPlural:'stonden op',participle:'opgestaan',auxiliary:'zijn',presentStem:'sta',separable:true,prefix:'op',root:'staan'}],
  ['optreden','Voor publiek verschijnen of handelend reageren.','De gemeente trad snel tegen de overlast op.',['handelen','een voorstelling geven'],{past:'trad op',pastPlural:'traden op',participle:'opgetreden',auxiliary:'zijn',presentStem:'treed',separable:true,prefix:'op',root:'treden'},[['optreden tegen','Maatregelen nemen om iets ongewensts te stoppen.','De inspectie treedt op tegen fraude.']]],
  ['overgaan','Naar een andere toestand, fase of plaats gaan.','Het bedrijf gaat over op hernieuwbare energie.',['overschakelen','veranderen'],{past:'ging over',pastPlural:'gingen over',participle:'overgegaan',auxiliary:'zijn',presentStem:'ga',separable:true,prefix:'over',root:'gaan'},[['overgaan op','Beginnen met een andere methode, bron of werkwijze.','We gaan over op een nieuw systeem.']]],
  ['overkomen','Iemand gebeuren of een bepaalde indruk maken.','Dat is mij vorig jaar ook overkomen.',['gebeuren','een indruk maken'],{past:'overkwam',pastPlural:'overkwamen',participle:'overkomen',auxiliary:'zijn',presentStem:'overkom',separable:false}],
  ['overnemen','Iets van iemand anders ontvangen en voortzetten.','Zij neemt volgende maand het project over.',['voortzetten','kopiëren'],{past:'nam over',pastPlural:'namen over',participle:'overgenomen',auxiliary:'hebben',presentStem:'neem',separable:true,prefix:'over',root:'nemen'}],
  ['plaatsvinden','Gebeuren op een bepaalde plaats of tijd.','Het examen vindt volgende week plaats.',['gebeuren','doorgaan'],{past:'vond plaats',pastPlural:'vonden plaats',participle:'plaatsgevonden',auxiliary:'hebben',presentStem:'vind',separable:true,prefix:'plaats',root:'vinden'}],
  ['tegenkomen','Onverwacht iemand of iets ontmoeten.','Ik kwam een oude collega tegen.',['ontmoeten','aantreffen'],{past:'kwam tegen',pastPlural:'kwamen tegen',participle:'tegengekomen',auxiliary:'zijn',presentStem:'kom',separable:true,prefix:'tegen',root:'komen'}],
  ['tegenvallen','Minder goed zijn dan verwacht.','De reistijd is behoorlijk tegengevallen.',['teleurstellen','minder zijn dan verwacht'],{past:'viel tegen',pastPlural:'vielen tegen',participle:'tegengevallen',auxiliary:'zijn',presentStem:'val',separable:true,prefix:'tegen',root:'vallen'}],
  ['teruggaan','Naar een eerdere plaats of situatie gaan.','Na de vakantie gaan we terug naar kantoor.',['terugkeren','retourneren'],{past:'ging terug',pastPlural:'gingen terug',participle:'teruggegaan',auxiliary:'zijn',presentStem:'ga',separable:true,prefix:'terug',root:'gaan'}],
  ['terugkomen','Opnieuw naar een eerdere plaats komen.','Wanneer kom je terug?',['terugkeren','weer verschijnen'],{past:'kwam terug',pastPlural:'kwamen terug',participle:'teruggekomen',auxiliary:'zijn',presentStem:'kom',separable:true,prefix:'terug',root:'komen'}],
  ['toelaten','Toestemming geven om binnen te komen of deel te nemen.','Alleen geregistreerde bezoekers worden toegelaten.',['toestaan','binnenlaten'],{past:'liet toe',pastPlural:'lieten toe',participle:'toegelaten',auxiliary:'hebben',presentStem:'laat',separable:true,prefix:'toe',root:'laten'}],
  ['toenemen','Groter, sterker of talrijker worden.','De vraag naar duurzame woningen is toegenomen.',['stijgen','groeien'],{past:'nam toe',pastPlural:'namen toe',participle:'toegenomen',auxiliary:'zijn',presentStem:'neem',separable:true,prefix:'toe',root:'nemen'}],
  ['uitgaan','Een plaats verlaten, voor ontspanning weggaan of stoppen met branden.','We zijn zaterdagavond uitgegaan.',['vertrekken','op stap gaan'],{past:'ging uit',pastPlural:'gingen uit',participle:'uitgegaan',auxiliary:'zijn',presentStem:'ga',separable:true,prefix:'uit',root:'gaan'},[['uitgaan van','Iets als uitgangspunt of waarschijnlijkheid nemen.','We gaan uit van de huidige planning.']]],
  ['uitgeven','Geld besteden of een publicatie publiceren.','De gemeente heeft meer geld aan onderhoud uitgegeven.',['besteden','publiceren'],{past:'gaf uit',pastPlural:'gaven uit',participle:'uitgegeven',auxiliary:'hebben',presentStem:'geef',separable:true,prefix:'uit',root:'geven'}],
  ['uitkomen','Naar buiten komen, verschijnen of een resultaat bereiken.','Het nieuwe boek komt volgende maand uit.',['verschijnen','resulteren'],{past:'kwam uit',pastPlural:'kwamen uit',participle:'uitgekomen',auxiliary:'zijn',presentStem:'kom',separable:true,prefix:'uit',root:'komen'}],
  ['uitlaten','Iemand of een dier naar buiten laten gaan; een mening uitspreken.','Ik laat de hond elke ochtend uit.',['naar buiten brengen','ventileren'],{past:'liet uit',pastPlural:'lieten uit',participle:'uitgelaten',auxiliary:'hebben',presentStem:'laat',separable:true,prefix:'uit',root:'laten'}],
  ['uitspreken','Woorden hardop zeggen of een mening duidelijk geven.','Kun je dit woord langzaam uitspreken?',['articuleren','verklaren'],{past:'sprak uit',pastPlural:'spraken uit',participle:'uitgesproken',auxiliary:'hebben',presentStem:'spreek',separable:true,prefix:'uit',root:'spreken'},[['zich uitspreken over','Openlijk een mening over een onderwerp geven.','De directeur sprak zich uit over het beleid.']],null,true],
  ['uitvinden','Iets nieuws bedenken of de waarheid ontdekken.','Wie heeft de telefoon uitgevonden?',['ontdekken','bedenken'],{past:'vond uit',pastPlural:'vonden uit',participle:'uitgevonden',auxiliary:'hebben',presentStem:'vind',separable:true,prefix:'uit',root:'vinden'}],
  ['uitzoeken','Iets onderzoeken, selecteren of ordenen.','Ik zoek uit welke trein het snelst is.',['onderzoeken','selecteren'],{past:'zocht uit',pastPlural:'zochten uit',participle:'uitgezocht',auxiliary:'hebben',presentStem:'zoek',separable:true,prefix:'uit',root:'zoeken'}],
  ['voorkomen','Verhinderen dat iets gebeurt; ook ergens aanwezig zijn.','Goede controles voorkomen veel fouten.',['verhinderen','tegengaan'],{past:'voorkwam',pastPlural:'voorkwamen',participle:'voorkomen',auxiliary:'hebben',presentStem:'voorkom',separable:false},null,[
    ['Verhinderen dat iets gebeurt.','Deze maatregel voorkomt vertraging.',['verhinderen','tegengaan']],
    ['Aanwezig zijn of gevonden worden.','Deze plant komt vooral in duinen voor.',['aangetroffen worden','bestaan']]
  ]],
  ['voldoen','Aan een eis, regel of verwachting beantwoorden.','De aanvraag voldoet aan alle voorwaarden.',['beantwoorden aan','genoeg zijn'],{past:'voldeed',pastPlural:'voldeden',participle:'voldaan',auxiliary:'hebben',presentStem:'voldoe'},[['voldoen aan','In overeenstemming zijn met een eis of norm.','Het gebouw voldoet aan de veiligheidseisen.']]],

  // Wederkerende werkwoorden en vaste voorzetsels
  ['herinneren','Iets uit het verleden opnieuw in je gedachten krijgen.','Ik herinner me haar naam nog goed.',['zich te binnen brengen','onthouden'],{past:'herinnerde',pastPlural:'herinnerden',participle:'herinnerd',auxiliary:'hebben',presentStem:'herinner'},null,null,true],
  ['vergissen','Een verkeerde gedachte, berekening of keuze maken.','Ik heb me in de datum vergist.',['een fout maken','zich misrekenen'],{past:'vergiste',pastPlural:'vergisten',participle:'vergist',auxiliary:'hebben',presentStem:'vergis'},[['zich vergissen in','Een verkeerde beoordeling van iemand of iets maken.','Hij vergiste zich in de reistijd.']],null,true],
  ['voorbereiden','Zorgen dat iemand of iets klaar is voor een latere situatie.','Ik bereid me voor op het NT2-examen.',['klaarmaken','voorbereidingen treffen'],{past:'bereidde voor',pastPlural:'bereidden voor',participle:'voorbereid',auxiliary:'hebben',presentStem:'bereid',separable:true,prefix:'voor',root:'bereiden'},[['zich voorbereiden op','Zorgen dat je klaar bent voor iets dat later gebeurt.','Zij bereidt zich voor op het gesprek.']],null,true],
  ['gedragen','Je op een bepaalde manier tegenover anderen gedragen.','De kinderen gedroegen zich rustig.',['zich opstellen','handelen'],{past:'gedroeg',pastPlural:'gedroegen',participle:'gedragen',auxiliary:'hebben',presentStem:'gedraag'},null,null,true],
  ['bevinden','Op een bepaalde plaats of in een bepaalde toestand zijn.','De ingang bevindt zich aan de achterkant.',['gelegen zijn','zich bevinden'],{past:'bevond',pastPlural:'bevonden',participle:'bevonden',auxiliary:'hebben',presentStem:'bevind'},null,null,true],
  ['bezighouden','Tijd en aandacht aan iets besteden.','Zij houdt zich bezig met taalontwikkeling.',['werken aan','zich richten op'],{past:'hield bezig',pastPlural:'hielden bezig',participle:'beziggehouden',auxiliary:'hebben',presentStem:'houd',separable:true,prefix:'bezig',root:'houden'},[['zich bezighouden met','Tijd en aandacht aan een onderwerp of activiteit besteden.','Ik houd me bezig met softwarearchitectuur.']],null,true],
  ['aanpassen','Iets veranderen zodat het beter past; jezelf aan een situatie laten wennen.','We passen het ontwerp aan de nieuwe eisen aan.',['wijzigen','afstemmen'],{past:'paste aan',pastPlural:'pasten aan',participle:'aangepast',auxiliary:'hebben',presentStem:'pas',separable:true,prefix:'aan',root:'passen'},[['zich aanpassen aan','Je gedrag of werkwijze veranderen door een nieuwe situatie.','Zij past zich snel aan de nieuwe omgeving aan.']],null,true],
  ['aanmelden','Je naam registreren of iemand officieel opgeven.','Ik heb me voor de cursus aangemeld.',['inschrijven','registreren'],{past:'meldde aan',pastPlural:'meldden aan',participle:'aangemeld',auxiliary:'hebben',presentStem:'meld',separable:true,prefix:'aan',root:'melden'},[['zich aanmelden voor','Je registreren voor een activiteit.','Je kunt je online voor het examen aanmelden.'],['zich aanmelden bij','Je melden bij een persoon, balie of organisatie.','Meld u bij de receptie aan.']],null,true],
  ['schamen','Je ongemakkelijk voelen omdat je iets verkeerd of gênant vindt.','Hij schaamt zich voor zijn reactie.',['zich generen','zich ongemakkelijk voelen'],{past:'schaamde',pastPlural:'schaamden',participle:'geschaamd',auxiliary:'hebben',presentStem:'schaam'},[['zich schamen voor','Je ongemakkelijk voelen over iets van jezelf.','Ik schaam me voor die fout.']],null,true],
  ['ergeren','Iemand irriteren of zelf irritatie voelen.','Ik erger me aan het harde geluid.',['irriteren','hinderen'],{past:'ergerde',pastPlural:'ergerden',participle:'geërgerd',auxiliary:'hebben',presentStem:'erger'},[['zich ergeren aan','Irritatie voelen door iemand of iets.','Zij ergert zich aan de vertraging.']],null,true],
  ['verheugen','Blij uitkijken naar iets dat later gebeurt.','We verheugen ons op de vakantie.',['uitkijken naar','blij verwachten'],{past:'verheugde',pastPlural:'verheugden',participle:'verheugd',auxiliary:'hebben',presentStem:'verheug'},[['zich verheugen op','Met plezier uitkijken naar iets toekomstigs.','Ik verheug me op ons gesprek.']],null,true],
  ['richten','Iets een richting geven of aandacht op iets concentreren.','Het programma richt zich op nieuwe medewerkers.',['focussen','afstemmen'],{past:'richtte',pastPlural:'richtten',participle:'gericht',auxiliary:'hebben',presentStem:'richt'},[['zich richten op','Aandacht, werk of beleid concentreren op iets.','De cursus richt zich op B1-leerders.']],null,true],
  ['inzetten','Iets gebruiken voor een doel; actief moeite doen.','Zij zet zich in voor gelijke kansen.',['gebruiken','zich engageren'],{past:'zette in',pastPlural:'zetten in',participle:'ingezet',auxiliary:'hebben',presentStem:'zet',separable:true,prefix:'in',root:'zetten'},[['zich inzetten voor','Actief moeite doen om een doel of groep te steunen.','Veel vrijwilligers zetten zich in voor de buurt.']],null,true],
  ['verzetten','Iets naar een andere plaats of tijd brengen; weerstand bieden.','De afspraak is naar vrijdag verzet.',['verplaatsen','weerstand bieden'],{past:'verzette',pastPlural:'verzetten',participle:'verzet',auxiliary:'hebben',presentStem:'verzet'},[['zich verzetten tegen','Actief weerstand bieden aan iets.','Bewoners verzetten zich tegen het plan.']],null,true],
  ['verdiepen','Iets dieper maken of grondig bestuderen.','Ik verdiep me in de Nederlandse grammatica.',['bestuderen','onderzoeken'],{past:'verdiepte',pastPlural:'verdiepten',participle:'verdiept',auxiliary:'hebben',presentStem:'verdiep'},[['zich verdiepen in','Een onderwerp grondig bestuderen.','Zij verdiept zich in duurzame bouw.']],null,true],
  ['concentreren','Alle aandacht op één taak of onderwerp richten.','Ik kan me hier goed concentreren.',['focussen','aandacht richten'],{past:'concentreerde',pastPlural:'concentreerden',participle:'geconcentreerd',auxiliary:'hebben',presentStem:'concentreer'},[['zich concentreren op','Alle aandacht op één zaak richten.','Concentreer je op de hoofdvraag.']],null,true],
  ['interesseren','Nieuwsgierigheid of belangstelling wekken.','Ik interesseer me voor architectuur.',['boeien','belangstelling hebben'],{past:'interesseerde',pastPlural:'interesseerden',participle:'geïnteresseerd',auxiliary:'hebben',presentStem:'interesseer'},[['zich interesseren voor','Belangstelling hebben voor een onderwerp.','Hij interesseert zich voor economie.']],null,true],
  ['bemoeien','Je ongevraagd met iets bezighouden of invloed proberen uit te oefenen.','Bemoei je niet met hun gesprek.',['zich mengen in','inmengen'],{past:'bemoeide',pastPlural:'bemoeiden',participle:'bemoeid',auxiliary:'hebben',presentStem:'bemoei'},[['zich bemoeien met','Je met de zaken van iemand anders bezighouden.','Zij bemoeit zich met elk detail.']],null,true],
  ['realiseren','Iets werkelijk maken of je bewust worden van iets.','Ik realiseer me nu hoe belangrijk oefening is.',['uitvoeren','beseffen'],{past:'realiseerde',pastPlural:'realiseerden',participle:'gerealiseerd',auxiliary:'hebben',presentStem:'realiseer'},null,[
    ['Iets daadwerkelijk uitvoeren of tot stand brengen.','Het team heeft het project gerealiseerd.',['uitvoeren','tot stand brengen']],
    ['Zich bewust worden van een feit.','Ik realiseer me dat dit tijd kost.',['beseffen','inzien']]
  ],true],
  ['ontwikkelen','Geleidelijk maken, verbeteren of groeien.','De organisatie ontwikkelt een nieuwe dienst.',['ontwerpen','uitbouwen'],{past:'ontwikkelde',pastPlural:'ontwikkelden',participle:'ontwikkeld',auxiliary:'hebben',presentStem:'ontwikkel'},[['zich ontwikkelen tot','Geleidelijk veranderen en een nieuwe vorm of rol krijgen.','De wijk ontwikkelt zich tot een duurzaam stadsdeel.']],null,true],

  // Vaste voorzetsels en professionele taal
  ['wachten','Op een later moment of een gebeurtenis blijven totdat iets gebeurt.','Ik wacht op de bus.',['afwachten','blijven tot'],{past:'wachtte',pastPlural:'wachtten',participle:'gewacht',auxiliary:'hebben',presentStem:'wacht'},[['wachten op','Blijven totdat iemand of iets komt of gebeurt.','We wachten op de uitslag.']]],
  ['praten','Mondeling een gesprek voeren.','Wij praten over onze vakantie.',['spreken','een gesprek voeren'],{past:'praatte',pastPlural:'praatten',participle:'gepraat',auxiliary:'hebben',presentStem:'praat'},[['praten over','Een onderwerp bespreken.','We praten over het nieuwe beleid.'],['praten met','Een gesprek voeren met iemand.','Ik praat morgen met de docent.']]],
  ['vragen','Informatie, hulp of een voorwerp proberen te krijgen.','Zij vroeg naar de openingstijden.',['informeren','verzoeken'],{past:'vroeg',pastPlural:'vroegen',participle:'gevraagd',auxiliary:'hebben',presentStem:'vraag'},[['vragen om','Iets verzoeken dat je wilt ontvangen.','Ik vraag om hulp.'],['vragen naar','Informatie over iemand of iets zoeken.','Hij vraagt naar de voorwaarden.']]],
  ['zorgen','Verantwoordelijkheid dragen of ervoor zorgen dat iets gebeurt.','Zij zorgt voor haar kinderen.',['verzorgen','waarborgen'],{past:'zorgde',pastPlural:'zorgden',participle:'gezorgd',auxiliary:'hebben',presentStem:'zorg'},[['zorgen voor','Verantwoordelijkheid dragen of een resultaat veroorzaken.','Deze maatregel zorgt voor minder uitstoot.'],['zich zorgen maken over','Bang of ongerust zijn over iets.','Ik maak me zorgen over de kosten.']]],
  ['luisteren','Aandachtig horen wat iemand zegt of welk geluid er klinkt.','Luister goed naar de uitspraak.',['aanhoren','gehoor geven'],{past:'luisterde',pastPlural:'luisterden',participle:'geluisterd',auxiliary:'hebben',presentStem:'luister'},[['luisteren naar','Aandachtig aandacht geven aan geluid of gesproken taal.','Ik luister naar een podcast.']]],
  ['kijken','De ogen op iemand of iets richten.','We kijken naar het nieuws.',['bekijken','waarnemen'],{past:'keek',pastPlural:'keken',participle:'gekeken',auxiliary:'hebben',presentStem:'kijk'},[['kijken naar','De ogen of aandacht op iets richten.','Kijk naar het voorbeeld.']]],
  ['zoeken','Proberen iemand, iets of informatie te vinden.','Ik zoek naar een betaalbare woning.',['opsporen','proberen te vinden'],{past:'zocht',pastPlural:'zochten',participle:'gezocht',auxiliary:'hebben',presentStem:'zoek'},[['zoeken naar','Proberen iets of iemand te vinden.','We zoeken naar een oplossing.']]],
  ['geloven','Iets voor waar houden of vertrouwen hebben.','Ik geloof in deze aanpak.',['vertrouwen','aannemen'],{past:'geloofde',pastPlural:'geloofden',participle:'geloofd',auxiliary:'hebben',presentStem:'geloof'},[['geloven in','Vertrouwen hebben in iemand, iets of een idee.','Zij gelooft in haar team.']]],
  ['hopen','Wensen en verwachten dat iets positiefs gebeurt.','We hopen op goed weer.',['verwachten','wensen'],{past:'hoopte',pastPlural:'hoopten',participle:'gehoopt',auxiliary:'hebben',presentStem:'hoop'},[['hopen op','Een gewenste gebeurtenis verwachten.','Ik hoop op een snelle reactie.']]],
  ['rekenen','Getallen bewerken of ergens met vertrouwen van uitgaan.','Je kunt op mijn hulp rekenen.',['berekenen','verwachten'],{past:'rekende',pastPlural:'rekenden',participle:'gerekend',auxiliary:'hebben',presentStem:'reken'},[['rekenen op','Verwachten dat iemand of iets beschikbaar of betrouwbaar is.','We rekenen op uw medewerking.']]],
  ['leiden','De richting bepalen, een groep besturen of een resultaat veroorzaken.','De fout leidde tot vertraging.',['besturen','resulteren in'],{past:'leidde',pastPlural:'leidden',participle:'geleid',auxiliary:'hebben',presentStem:'leid'},[['leiden tot','Een gevolg veroorzaken.','Slechte communicatie leidt tot fouten.']]],
  ['beschikken','Iets officieel beslissen; meestal gebruikt in de combinatie beschikken over.','De afdeling beschikt over voldoende capaciteit.',['hebben','bezitten'],{past:'beschikte',pastPlural:'beschikten',participle:'beschikt',auxiliary:'hebben',presentStem:'beschik'},[['beschikken over','Iets hebben en kunnen gebruiken.','Het team beschikt over veel ervaring.']]],
  ['deelnemen','Meedoen aan een activiteit.','Zij neemt deel aan het overleg.',['meedoen','participeren'],{past:'nam deel',pastPlural:'namen deel',participle:'deelgenomen',auxiliary:'hebben',presentStem:'neem',separable:true,prefix:'deel',root:'nemen'},[['deelnemen aan','Meedoen aan een activiteit of gebeurtenis.','Hij neemt deel aan de cursus.']]],
  ['stoppen','Een activiteit beëindigen of iets laten ophouden.','Ik stop met werken om zes uur.',['ophouden','beëindigen'],{past:'stopte',pastPlural:'stopten',participle:'gestopt',auxiliary:'hebben/zijn',presentStem:'stop'},[['stoppen met','Een activiteit beëindigen.','Zij is gestopt met roken.']]],
  ['slagen','Een doel of examen met succes behalen.','Zij is voor het examen geslaagd.',['succes hebben','behalen'],{past:'slaagde',pastPlural:'slaagden',participle:'geslaagd',auxiliary:'zijn',presentStem:'slaag'},[['slagen voor','Een examen of toets succesvol afronden.','Hij is voor zijn rijexamen geslaagd.'],['slagen in','Met succes iets moeilijks doen.','We zijn erin geslaagd de storing op te lossen.']]],
  ['bestaan','Er zijn; opgebouwd zijn uit onderdelen.','De cursus bestaat uit vijf niveaus.',['er zijn','gevormd worden'],{past:'bestond',pastPlural:'bestonden',participle:'bestaan',auxiliary:'hebben',presentStem:'besta'},[['bestaan uit','Samengesteld zijn uit verschillende onderdelen.','Het team bestaat uit acht mensen.']]],
  ['behoren','Onderdeel zijn van een groep of officieel ergens bij passen.','Dit document behoort tot het dossier.',['horen bij','deel uitmaken van'],{past:'behoorde',pastPlural:'behoorden',participle:'behoord',auxiliary:'hebben',presentStem:'behoor'},[['behoren tot','Onderdeel zijn van een groep of categorie.','Deze regels behoren tot het beleid.']]],
  ['reageren','Een antwoord of reactie geven op iets.','De leverancier reageerde snel op onze klacht.',['antwoorden','respons geven'],{past:'reageerde',pastPlural:'reageerden',participle:'gereageerd',auxiliary:'hebben',presentStem:'reageer'},[['reageren op','Een reactie geven na een gebeurtenis, bericht of vraag.','Hoe reageerde hij op het voorstel?']]],
  ['twijfelen','Niet zeker weten wat waar of goed is.','Ik twijfel aan de juistheid van de cijfers.',['aarzelen','onzeker zijn'],{past:'twijfelde',pastPlural:'twijfelden',participle:'getwijfeld',auxiliary:'hebben',presentStem:'twijfel'},[['twijfelen aan','Niet geloven dat iets volledig klopt of betrouwbaar is.','Zij twijfelt aan zijn verklaring.'],['twijfelen over','Niet zeker weten welke keuze je moet maken.','Ik twijfel over de beste oplossing.']]],
  ['klagen','Laten weten dat je ontevreden bent of last hebt.','De bewoners klagen over geluidsoverlast.',['bezwaar maken','mopperen'],{past:'klaagde',pastPlural:'klaagden',participle:'geklaagd',auxiliary:'hebben',presentStem:'klaag'},[['klagen over','Ontevredenheid uitspreken over iemand of iets.','De klant klaagde over de service.']]],
  ['lachen','Geluid en gezichtsuitdrukking tonen doordat iets grappig of prettig is.','We moesten om die opmerking lachen.',['glimlachen','grinniken'],{past:'lachte',pastPlural:'lachten',participle:'gelachen',auxiliary:'hebben',presentStem:'lach'},[['lachen om','Iets grappig vinden of iemand bespotten.','Iedereen lachte om de grap.']]],
  ['betalen','Geld geven voor een product, dienst of schuld.','Ik betaal voor de boodschappen.',['afrekenen','voldoen'],{past:'betaalde',pastPlural:'betaalden',participle:'betaald',auxiliary:'hebben',presentStem:'betaal'},[['betalen voor','Geld geven in ruil voor iets.','Wie betaalt voor het diner?']]],
  ['bedanken','Waardering uitspreken voor wat iemand heeft gedaan.','Ik bedank u voor uw snelle reactie.',['dank zeggen','waardering uitspreken'],{past:'bedankte',pastPlural:'bedankten',participle:'bedankt',auxiliary:'hebben',presentStem:'bedank'},[['bedanken voor','Dank uitspreken vanwege iets.','Zij bedankte hem voor de hulp.']]],
  ['uitnodigen','Iemand vragen om ergens te komen of mee te doen.','We nodigen u uit voor een gesprek.',['vragen','verzoeken te komen'],{past:'nodigde uit',pastPlural:'nodigden uit',participle:'uitgenodigd',auxiliary:'hebben',presentStem:'nodig',separable:true,prefix:'uit',root:'nodigen'},[['uitnodigen voor','Iemand vragen om aan een activiteit deel te nemen.','Zij is uitgenodigd voor een sollicitatiegesprek.']]],
  ['solliciteren','Formeel reageren op een vacature om een baan te krijgen.','Ik solliciteer naar een functie als data-architect.',['een baan aanvragen','kandideren'],{past:'solliciteerde',pastPlural:'solliciteerden',participle:'gesolliciteerd',auxiliary:'hebben',presentStem:'solliciteer'},[['solliciteren naar','Een bepaalde functie proberen te krijgen.','Hij solliciteert naar de functie van projectleider.'],['solliciteren bij','Een baan proberen te krijgen bij een organisatie.','Zij solliciteert bij een gemeente.']]],
  ['vergelijken','Overeenkomsten en verschillen onderzoeken.','We vergelijken de twee aanbiedingen met elkaar.',['naast elkaar zetten','contrasteren'],{past:'vergeleek',pastPlural:'vergeleken',participle:'vergeleken',auxiliary:'hebben',presentStem:'vergelijk'},[['vergelijken met','Iemand of iets naast een ander leggen om verschillen te zien.','Vergelijk deze kosten met vorig jaar.']]],
  ['beschermen','Voorkomen dat iemand of iets schade krijgt.','Deze laag beschermt het materiaal tegen vocht.',['beveiligen','afschermen'],{past:'beschermde',pastPlural:'beschermden',participle:'beschermd',auxiliary:'hebben',presentStem:'bescherm'},[['beschermen tegen','Schade of gevaar proberen te voorkomen.','Een helm beschermt tegen hoofdletsel.']]],
  ['waarschuwen','Iemand vooraf informeren over mogelijk gevaar of een probleem.','De app waarschuwt voor gladheid.',['attenderen','alarmeren'],{past:'waarschuwde',pastPlural:'waarschuwden',participle:'gewaarschuwd',auxiliary:'hebben',presentStem:'waarschuw'},[['waarschuwen voor','Iemand wijzen op een mogelijk gevaar.','De politie waarschuwt voor fraude.']]],
  ['informeren','Iemand kennis of uitleg geven.','De gemeente informeert bewoners over de werkzaamheden.',['inlichten','op de hoogte brengen'],{past:'informeerde',pastPlural:'informeerden',participle:'geïnformeerd',auxiliary:'hebben',presentStem:'informeer'},[['informeren over','Informatie geven over een onderwerp.','Wij informeren u over de volgende stappen.']]],
  ['werken','Een taak of beroep uitvoeren; functioneren.','We werken aan een duurzamer ontwerp.',['arbeiden','functioneren'],{past:'werkte',pastPlural:'werkten',participle:'gewerkt',auxiliary:'hebben',presentStem:'werk'},[['werken aan','Actief tijd en moeite besteden aan een resultaat.','Het team werkt aan een nieuwe applicatie.'],['werken met','Een middel, systeem of persoon gebruiken tijdens het werk.','Ik werk met grote datasets.']]],
  ['omgaan','Iemand behandelen of een situatie hanteren.','Zij kan goed omgaan met kritiek.',['hanteren','behandelen'],{past:'ging om',pastPlural:'gingen om',participle:'omgegaan',auxiliary:'zijn',presentStem:'ga',separable:true,prefix:'om',root:'gaan'},[['omgaan met','Een persoon, probleem of middel op een bepaalde manier behandelen.','Hoe ga je om met stress?']]],
  ['wijzen','Met een gebaar tonen of iemand op iets attent maken.','De resultaten wijzen op een structureel probleem.',['aanduiden','attenderen'],{past:'wees',pastPlural:'wezen',participle:'gewezen',auxiliary:'hebben',presentStem:'wijs'},[['wijzen op','Aandacht vestigen op een feit, risico of aanwijzing.','De inspectie wijst op mogelijke risico’s.']]],
];

const detailMap = Object.fromEntries(rawVerbDetails.map((entry) => {
  const [infinitive, definition, example, synonyms = [], forms = {}, fixedPrepositions = null, senses = null, reflexive = false] = entry;
  return [infinitive, {
    lexicalEnriched: true,
    verified: true,
    definition,
    example,
    synonyms,
    forms,
    fixedPrepositions: fixedPrepositions || [],
    senses: senses || [],
    reflexive,
  }];
}));

const reflexivePronouns = ['me', 'je', 'zich', 'ons', 'je', 'zich'];
const pronouns = ['ik', 'jij', 'hij/zij', 'wij', 'jullie', 'zij'];

function buildPresentForms(verb, forms) {
  if (forms.presentForms) return forms.presentForms;
  const baseStem = forms.presentStem || verb.stem || verb.infinitive.replace(/en$/u, '');
  const pluralInfinitive = forms.root || verb.root || verb.infinitive;
  const singularT = baseStem.endsWith('t') ? baseStem : `${baseStem}t`;
  const basic = [
    `ik ${baseStem}`,
    `jij ${singularT}`,
    `hij/zij ${singularT}`,
    `wij ${pluralInfinitive}`,
    `jullie ${pluralInfinitive}`,
    `zij ${pluralInfinitive}`,
  ];
  const separable = forms.separable ?? verb.separable;
  const prefix = forms.prefix || verb.prefix;
  return separable && prefix ? basic.map((line) => `${line} ${prefix}`) : basic;
}

function buildPastForms(past, pastPlural) {
  return [`ik ${past}`, `jij ${past}`, `hij/zij ${past}`, `wij ${pastPlural}`, `jullie ${pastPlural}`, `zij ${pastPlural}`];
}

function insertReflexive(line, index, separable, prefix) {
  const words = line.split(' ');
  const pronounLength = words[0] === 'hij/zij' ? 1 : 1;
  const reflexive = reflexivePronouns[index];
  if (separable && prefix && words.at(-1) === prefix) {
    words.splice(words.length - 1, 0, reflexive);
  } else {
    words.splice(pronounLength + 1, 0, reflexive);
  }
  return words.join(' ');
}

function buildReflexiveForms(forms, separable, prefix) {
  return forms.map((line, index) => insertReflexive(line, index, separable, prefix));
}

function buildSentencePatterns(verb, merged, detail) {
  if (!detail.lexicalEnriched) return merged.sentencePatterns;
  const fixed = detail.fixedPrepositions?.[0];
  const example = detail.example;
  const patterns = { ...(merged.sentencePatterns || {}) };
  if (detail.reflexive) {
    patterns.hoofdzin = example;
    patterns.perfectum = `${merged.reflexivePerfectForms?.[0] || merged.perfectForms?.[0] || ''}.`.replace(/\.\.$/u, '.');
    patterns.bijzin = String(merged.sentencePatterns?.bijzin || `… omdat ik ${verb.infinitive}.`).replace('ik ', 'ik me ');
  } else if (fixed) {
    patterns.hoofdzin = fixed.example;
  } else if (example) {
    patterns.hoofdzin = example;
  }
  return patterns;
}

function inferRegularity(forms = {}) {
  const past = String(forms.past || '').split(' ')[0];
  return /(?:de|te)$/u.test(past) ? 'regelmatig' : 'onregelmatig';
}

function createCatalogVerb(entry) {
  const [infinitive, definition, _example, _synonyms, forms = {}, _fixed, _senses, reflexive] = entry;
  const separable = Boolean(forms.separable);
  const prefix = forms.prefix || '';
  const root = forms.root || infinitive;
  const semantic = forms.semantic || (forms.auxiliary === 'zijn' ? 'verandering' : 'handeling');
  const semanticLabels = {
    handeling: 'handeling of activiteit', beweging: 'beweging en richting',
    verandering: 'verandering of ontwikkeling', toestand: 'toestand of ervaring',
    gebeurtenis: 'gebeurtenis of resultaat', modaal: 'modaliteit',
  };
  return {
    infinitive,
    stem: forms.presentStem || infinitive.replace(/en$/u, ''),
    past: forms.past || '',
    pastPlural: forms.pastPlural || '',
    participle: forms.participle || '',
    auxiliary: forms.auxiliary || 'hebben',
    semantic,
    semanticLabel: semanticLabels[semantic] || semanticLabels.handeling,
    regularity: forms.regularity || inferRegularity(forms),
    separable,
    prefix,
    root,
    curated: true,
    level: forms.level || 'B1',
    meaning: definition,
    conjugationClass: inferRegularity(forms) === 'regelmatig' ? 'zwak / regelmatig' : 'sterk of anderszins onregelmatig',
    sentencePatterns: {},
    reflexive: Boolean(reflexive),
  };
}

export function enrichVerbAtlas(atlas) {
  const existing = new Set(atlas.map((verb) => verb.infinitive));
  const additions = rawVerbDetails.filter((entry) => !existing.has(entry[0])).map(createCatalogVerb);
  const source = [...atlas, ...additions].sort((a, b) => a.infinitive.localeCompare(b.infinitive, 'nl-NL'));
  return source.map((verb) => {
    const detail = detailMap[verb.infinitive];
    if (!detail) return {
      ...verb,
      lexicalEnriched: false,
      definition: verb.meaning,
      example: verb.sentencePatterns?.hoofdzin || '',
      synonyms: [],
      fixedPrepositions: [],
      senses: [],
      reflexive: false,
    };
    const forms = detail.forms || {};
    const separable = forms.separable ?? verb.separable;
    const prefix = forms.prefix || verb.prefix || '';
    const root = forms.root || verb.root || verb.infinitive;
    const presentForms = buildPresentForms({ ...verb, root }, forms);
    const past = forms.past || verb.past;
    const pastPlural = forms.pastPlural || verb.pastPlural;
    const participle = forms.participle || verb.participle;
    const auxiliary = forms.auxiliary || verb.auxiliary;
    const pastForms = past && pastPlural ? buildPastForms(past, pastPlural) : verb.pastForms;
    const perfectForms = auxiliary === 'hebben/zijn'
      ? [`ik heb ${participle}`, `wij hebben ${participle}`, `ik ben ${participle}`, `wij zijn ${participle}`]
      : [`ik ${auxiliary === 'zijn' ? 'ben' : 'heb'} ${participle}`, `wij ${auxiliary === 'zijn' ? 'zijn' : 'hebben'} ${participle}`];
    const merged = {
      ...verb,
      ...detail,
      ...forms,
      separable,
      prefix,
      root,
      past,
      pastPlural,
      participle,
      auxiliary,
      presentForms,
      pastForms,
      perfectForms,
    };
    if (detail.reflexive) {
      merged.reflexiveForms = buildReflexiveForms(presentForms, separable, prefix);
      merged.reflexivePastForms = buildReflexiveForms(pastForms, separable, prefix);
      merged.reflexivePerfectForms = perfectForms.map((line, index) => line.replace(/^(ik|wij)\s+(heb|hebben|ben|zijn)\s+/u, (_match, subject, auxiliaryForm) => `${subject} ${auxiliaryForm} ${index % 2 === 0 ? 'me' : 'ons'} `));
    }
    merged.sentencePatterns = buildSentencePatterns(verb, merged, detail);
    return merged;
  });
}

export const enrichedVerbCount = Object.keys(detailMap).length;
