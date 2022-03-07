import { CONFIG } from './config'

export const VALIDGUESSES = [
"moshun",
"pipiqe",
"sinkan",
"oqiton",
"kolopu",
"puhtay",
"psqeyu",
"qonapu",
"papkan",
"ansahc",
"apkamu",
"komoku",
"spihpu",
"siciye",
"apciye",
"piksap",
"kehtol",
"'topun",
"pkonke",
"oqassu",
"tuciye",
"punawe",
"'punal",
"lawotu",
"kpoton",
"petamu",
"kiskot",
"illiqe",
"kat-te",
"psonpe",
"puniwi",
"petson",
"wiyuhs",
"ktuwan",
"papolu",
"lakiye",
"kosona",
"tomeyu",
"nickiw",
"soment",
"micasu",
"comons",
"spessu",
"asakon",
"pulaks",
"tuwapu",
"pileyu",
"moteka",
"'sisoq",
"ptokka",
"psuhun",
"kiyahq",
"tolute",
"wolacu",
"camsis",
"cehcis",
"nisatq",
"wiqqot",
"'sulom",
"ktahpe",
"maqehe",
"oloqiw",
"pqomis",
"sikeyu",
"olqepu",
"saksok",
"cemkuk",
"awskol",
"sipkiw",
"wososs",
"'silom",
"pomiku",
"nakaku",
"poluns",
"apenke",
"eqpayu",
"kapsis",
"woluwe",
"natame",
"pihcol",
"spahte",
"ksewse",
"psewis",
"piltal",
"monamu",
"tihkon",
"'kaney",
"petopu",
"mokiye",
"lamsoq",
"psikiw",
"khakon",
"motaqs",
"litpot",
"putuwe",
"'sinsk",
"wiqhom",
"cahlak",
"tolehp",
"pomute",
"taktal",
"sitopu",
"kihkan",
"miluwe",
"sahsiw",
"maskap",
"skiwon",
"esansu",
"sinoti",
"pihtal",
"skonis",
"wolame",
"moqisu",
"molaqs",
"ciniye",
"punasu",
"'samel",
"ksessu",
"soleps",
"sonopu",
"utomil",
"tkamke",
"wisayu",
"wolone",
"wenuhc",
"sapiye",
"tkekon",
"motehe",
"wicike",
"multon",
"kuhucu",
"pskeht",
"pkoson",
"ckuwye",
"mulkew",
"cakola",
"molaye",
"petute",
"soqqam",
"sitank",
"psekon",
"naphal",
"wipahq",
"spemuk",
"mawopu",
"nununs",
"tkiqol",
"malsan",
"ksatke",
"ecuwiw",
"nenhiw",
"ktamke",
"otoqon",
"yat-te",
"yut-te",
"atpehe",
"kiwhos",
"lemons",
"spiqiw",
"kolike",
"siqeyu",
"mitapu",
"kisuhs",
"waliye",
"sahkat",
"mawehe",
"eqqile",
"ipimin",
"olcuwe",
"ewepte",
"wisaye",
"pinson",
"tutkil",
"latpep",
"pisute",
"wapiqe",
"siqepu",
"epolin",
"imiyan",
"pulsis",
"qaqeyu",
"woliye",
"cahahq",
"cutoss",
"okamiw",
"tkiqon",
"cileyu",
"liqehe",
"opessu",
"wissul",
"cehqot",
"puktes",
"awiska",
"ipocol",
"amihku",
"lossin",
"mosson",
"'tusiw",
"mimiqe",
"cineyu",
"wapatq",
"kskeyu",
"pciliw",
"nokasu",
"sikiku",
"tan-al",
"wisqon",
"ksahke",
"pasocu",
"kipiye",
"cuspes",
"cehqan",
"nokocu",
"tiyena",
"mocamu",
"supeyu",
"emekte",
"katasu",
"olomel",
"skutik",
"piqeku",
"satins",
"kuwhas",
"alutsu",
"pskasu",
"sesuhs",
"sqotes",
"sikopu",
"latuwe",
"cokahk",
"soqehs",
"'tusol",
"cekpat",
"spuhse",
"ksotte",
"osipis",
"mihkom",
"moniku",
"skewte",
"wolahq",
"woloks",
"aputte",
"'taptu",
"i-pesq",
"meskat",
"qatsis",
"posson",
"kuspem",
"okepse",
"kskeku",
"eleyik",
"pikeks",
"cocahq",
"esuhse",
"kelisk",
"opanke",
"wastes",
"wokahk",
"wiciye",
"toliku",
"tuhsan",
"kolahk",
"cimoli",
"esuwiw",
"qasamu",
"kaweyu",
"mastot",
"memiye",
"ulomen",
"nanatq",
"psuwis",
"mapput",
"escoqe",
"nakehe",
"'tusal",
"sipine",
"ksaccu",
"waptoq",
"cenopi",
"ankuwe",
"mokahk",
"puhkes",
"pilick",
"olsewe",
"payoni",
"putsis",
"tepute",
"muhaks",
"espehe",
"olkamu",
"mocopu",
"woleyu",
"sopacu",
"ehqamu",
"toline",
"psonte",
"sesocu",
"liqewu",
"mistoq",
"nutoma",
"cocuhs",
"tuhkis",
"wolaku",
"niweyu",
"pokomk",
"woloka",
"newwok",
"nasqam",
"piqosq",
"kinkil",
"lellut",
"'kalal",
"skucis",
"wolosu",
"nikimu",
"akolus",
"amakon",
"utonal",
"nuskiw",
"celiye",
"sihpac",
"liwisu",
"'katun",
"pomiye",
"weweyu",
"'kekiw",
"apsoqe",
"milapu",
"mosqon",
"atsewe",
"wekine",
"petqil",
"pskehe",
"skikte",
"sossil",
"ehqiye",
"kisiku",
"pikuwe",
"'cessu",
"ptoqap",
"pkikte",
"kuwocu",
"ceykin",
"pihqat",
"cipqam",
"ewepiw",
"qahtol",
"tiliye",
"ehetsu",
"maceku",
"wolamu",
"asitiw",
"'cehtu",
"ksaqhe",
"mahton",
"pilasq",
"oqimut",
"mawiye",
"osassu",
"wapikp",
"kaciye",
"pectik",
"minits",
"wikamu",
"qaqeku",
"mususu",
"mec-al",
"mocehs",
"nahkaw",
"qsihtu",
"olcoke",
"piksey",
"walamq",
"wapeyu",
"sumsqe",
"otukke",
"mehcis",
"neptan",
"nemaht",
"sqahte",
"pihcis",
"sapeyu",
"polams",
"tahnol",
"tomiye",
"on-ote",
"nakayu",
"cucuhc",
"musahk",
"pisapu",
"maleyu",
"pahkak",
"'posem",
"paksis",
"penocu",
"ksuwye",
"tampok",
"skitte",
"lapiqe",
"akawhu",
"peciye",
"skiqam",
"kensis",
"qotasq",
"asuwiw",
"methom",
"sqayiw",
"okonse",
"cehkit",
"minuwe",
"nomehs",
"'tawsu",
"kat-cu",
"mahqan",
"pqahsu",
"psihtu",
"pskomu",
"tamahc",
"utenew",
"pqessu",
"ekonis",
"okamok",
"toqehs",
"kasits",
"tukocu",
"caqahk",
"milopu",
"yakahp",
"wetsok",
"aqamel",
"'tuliw",
"patosu",
"coqols",
"kiseyu",
"olsawe",
"cawota",
"mitopu",
"tutopu",
"esoton",
"namopa",
"cikopu",
"uniyas",
"'somol",
"puhsis",
"sutihk",
"mimhal",
"ekhute",
"petkil",
"piktuk",
"pehqey",
"qahaks",
"posoqp",
"nunuwe",
"suhpin",
"muwisu",
"ipakte",
"waleyu",
"nit-te",
"macehe",
"memopu",
"malsom",
"nutapu",
"punkik",
"esqopu",
"akuwiw",
"apamke",
"tuwopu",
"metsiw",
"sikusq",
"etolet",
"mahkut",
"espons",
"apalke",
"mamciw",
"enawke",
"musqot",
"atqepu",
"woliku",
"tuceyu",
"sahsap",
"mociku",
"olomiw",
"mocapu",
"miciye",
"ahqiku",
"'sanku",
"lapesu",
"qoneyu",
"cahqal",
"munihk",
"saniya",
"keptin",
"sanahq",
"apsiqe",
"amoniw",
"piyehs",
"yet-te",
"kolomu",
"sqasis",
"qonome",
"kekesk",
"aselis",
"kasawt",
"nipehe",
"olhute",
"aposes",
"pkiksu",
"tepiye",
"skipoq",
"skomeq",
"tuthom",
"putoss",
"tpinom",
"kehson",
"nusesq",
"tupqan",
"wolkil",
"wotkul",
"'qatey",
"olsite",
"amante",
"nutehe",
"maykol",
"qoniye",
"kecawt",
"tahalu",
"lontoq",
"neqiye",
"poskat",
"lesson",
"sossoq",
"wihton",
"sapisu",
"amuwes",
"athasu",
"monihq",
"miskiw",
"mocuwe",
"etuwot",
"ksicon",
"moceyu",
"akehsu",
"'taqte",
"tkopeq",
"likson",
"amewin",
"moneyu",
"cipuwe",
"miskot",
"akiyan",
"soniku",
"sasint",
"ktopeq",
"luhkan",
"musawe",
"toqoss",
"panset",
"mahsus",
"wahant",
"pqatpe",
"qapsis",
"tayuwe",
"papkiw",
"kahpil",
"ehqame",
"mawema",
"hankan",
"'tuloq",
"atkiqe",
"pqomus",
"nathom",
"neqhom",
"'tokan",
"wewiye",
"pesqon",
"awisiw",
"kosqep",
"kiwahq",
"paniye",
"ksentu",
"toposu",
"psimsu",
"missel",
"kolusu",
"pinsis",
"osehta",
"epaspe",
"miliye",
"eqhike",
"ktoton",
"apahqe",
"olhoma",
"skicin",
"tqonke",
"ckuwiw",
"anelsu",
"cilopu",
"elikit",
"pisiye",
"eweppu",
"sqawsu",
"talsol",
"qospem",
"woneyu",
"celopu",
"musqon",
"qolapu",
"kehcap",
"saksey",
"pocokk",
"kakehs",
"aqamiw",
"kiposs",
"lahkap",
"wolopu",
"tepkil",
"kat-op",
"skitap",
"qonotu",
"tan-op",
"uliyal",
"macepu",
"nehtaw",
"pisamu",
"somahk",
"empaye",
"ptohom",
"sapiye",
"nutkat",
"soluhp",
"pethom",
"'soqon",
"kisacu",
"apc-oc",
"wonaku",
"ktokan",
"nusapu",
"walcoq",
"mehciw",
"asihta",
"samopu",
"wolapu",
"anuwit",
"mickon",
"wiphun",
"malkot",
"etomun",
"wewisu",
"sisqey",
"spotew",
"sascis",
"paniqe",
"kinapu",
"newatq",
"pqahtu",
"ahsiye",
"acessu",
"kisopu",
"witkul",
"somsoq",
"lelomu",
"napaha",
"siqehe",
"'tohom",
"mimeku",
"ankusu",
"kisamu",
"mocone",
"piwsoq",
"sipsis",
"ulimal",
"kineyu",
"'somal",
"kespiw",
"itasik",
"wikiye",
"nipuhu",
"pikews",
"cikiye",
"olliqe",
"sapsis",
"pomamu",
"nutasu",
"kolocu",
"ceykop",
 "pskihq",

    "aciye",
    "acomu",
    "ahahs",
    "ahhit",
    "ahkiq",
    "ahpap",
    "ahpis",
    "akson",
    "alosu",
    "aluhk",
    "amkis",
    "anqoc",
    "apame",
    "apesu",
    "askat",
    "asups",
    "atacu",
    "athom",
    "atiyu",
    "atopu",
    "atute",
    "atuwe",
    "awotu",
    "'cask",
    "cayis",
    "'ceht",
    "celte",
    "cikon",
    "cikte",
    "cimse",
    "'cine",
    "cinpe",
    "cinte",
    "'ciye",
    "conte",
    "coqol",
    "cossu",
    "cotte",
    "cuhka",
    "cupte",
    "ehpit",
    "ehput",
    "eksku",
    "eluwe",
    "emqan",
    "eniqs",
    "eqopu",
    "esocu",
    "essap",
    "halon",
    "hapol",
    "ihhit",
    "ihtek",
    "imiye",
    "itasu",
    "kaciw",
    "kahpe",
    "kalsu",
    "kalus",
    "kamel",
    "kapsq",
    "kason",
    "kateq",
    "katok",
    "katsu",
    "katte",
    "kawis",
    "kawwe",
    "kayya",
    "kcihq",
    "kciye",
    "kcoci",
    "kehsu",
    "kensa",
    "kepek",
    "kesin",
    "kette",
    "kihke",
    "kilun",
    "kinap",
    "kinaq",
    "kippu",
    "kisqe",
    "kiste",
    "'kiye",
    "kolac",
    "kollu",
    "kolte",
    "komac",
    "kompe",
    "komte",
    "kotok",
    "kpiye",
    "ksate",
    "ksehe",
    "ksicu",
    "ksiku",
    "ksiye",
    "kuhus",
    "kuhut",
    "kukec",
    "kulon",
    "kuwes",
    "lahke",
    "lahtu",
    "lalke",
    "lamiw",
    "lapas",
    "laput",
    "lawiw",
    "lawsu",
    "lessu",
    "letis",
    "lihpu",
    "likew",
    "likon",
    "lintu",
    "loqsu",
    "luhke",
    "luhse",
    "lupap",
    "lupek",
    "mahal",
    "malom",
    "maltu",
    "malus",
    "mawew",
    "mawiw",
    "mayel",
    "mehqe",
    "memte",
    "meqte",
    "mesqa",
    "metka",
    "mette",
    "micin",
    "miciw",
    "mikut",
    "milal",
    "milan",
    "milsu",
    "milte",
    "mimey",
    "minus",
    "mitsu",
    "mitte",
    "miwiw",
    "miyaw",
    "miyul",
    "mokos",
    "moqin",
    "mosin",
    "mosop",
    "mqeyu",
    "muhsu",
    "mukon",
    "musal",
    "musku",
    "muste",
    "muwin",
    "naksq",
    "napsq",
    "naste",
    "nawiw",
    "nehse",
    "nekom",
    "neqiw",
    "nilun",
    "nipon",
    "nisiw",
    "nitok",
    "nonom",
    "nopim",
    "notta",
    "ntama",
    "nutew",
    "nutom",
    "okile",
    "okisu",
    "olhom",
    "oliye",
    "olkil",
    "olome",
    "olomu",
    "op-al",
    "opote",
    "oqehe",
    "oqons",
    "ososq",
    "osson",
    "otoku",
    "otuhk",
    "pahpu",
    "panis",
    "papun",
    "pasqe",
    "pasta",
    "patus",
    "payis",
    "pehke",
    "pette",
    "pihce",
    "piktu",
    "piley",
    "piliw",
    "pisiw",
    "piste",
    "pitsa",
    "pokan",
    "polis",
    "poliw",
    "polun",
    "popiq",
    "possa",
    "pqeku",
    "pqeyu",
    "pqolu",
    "pseku",
    "psqoc",
    "psulu",
    "pukan",
    "puniw",
    "punke",
    "pusol",
    "puspe",
    "putep",
    "puwin",
    "qasku",
    "'qayu",
    "qihiw",
    "qiqsu",
    "qocom",
    "qoniw",
    "qonus",
    "sakom",
    "'sami",
    "samte",
    "sapan",
    "sapiw",
    "sapol",
    "sases",
    "'satq",
    "sawew",
    "saypa",
    "sehke",
    "seksu",
    "sepay",
    "seqqe",
    "siciw",
    "sihku",
    "sikon",
    "sikte",
    "simis",
    "siptu",
    "sipun",
    "siqey",
    "siqon",
    "sitom",
    "skahp",
    "sokas",
    "sokku",
    "sonap",
    "sonte",
    "spasu",
    "speyu",
    "spiye",
    "spopu",
    "spote",
    "spuls",
    "sputs",
    "sqiye",
    "sqopu",
    "steks",
    "sukol",
    "sumin",
    "supeq",
    "suwiw",
    "suwon",
    "suwwe",
    "'taku",
    "tanki",
    "tapon",
    "'tapu",
    "'tawe",
    "tepel",
    "tepiw",
    "tepot",
    "teppu",
    "tepte",
    "tkeyu",
    "tkiye",
    "tkune",
    "tokec",
    "tokku",
    "toley",
    "toqaq",
    "tpuhk",
    "tqamu",
    "tqesu",
    "tuciw",
    "tuhpe",
    "tuhte",
    "tuton",
    "tutsu",
    "tutte",
    "uleti",
    "upiye",
    "utsal",
    "uwhem",
    "uwosu",
    "wahcu",
    "wahse",
    "wakon",
    "walke",
    "walot",
    "wansu",
    "wapap",
    "wapqe",
    "wapsq",
    "wasis",
    "wawon",
    "welam",
    "wenaw",
    "wewte",
    "wiciw",
    "wihke",
    "wikke",
    "wikut",
    "wilol",
    "winas",
    "winis",
    "wipit",
    "witka",
    "witte",
    "wolek",
    "woliw",
    "woloq",
    "woqon",
    "wotop",
    "wotoq",
    "wotta",

]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
