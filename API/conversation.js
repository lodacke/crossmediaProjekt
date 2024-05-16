export const conversations = {
    "Fredde": {
        start: {
            question: "Hej! Vad gör du här?",
            "option": [
                {
                    text: "Jag undra om ni har en ledig tjänst?",
                    response: "one"
                },
                {
                    text: "Jag letade efter dig!",
                    response: "two"
                }
            ]
        },
        one: {
            question: "Hm... Ja alltså... Mina pengar kommer inte bara från jobbet. Jag har en liten side-business så att säga. Eller det är inte bara jag som har den utan hela mitt gäng. Vi har speciella möten ibland som hjälper oss framåt, om du vill så kan jag försöka få med dig?",
            "option": [
                {
                    text: "Det låter bra! Jag är öppen för allt.",
                    response: "three"

                },
                {
                    text: "Kan du berätta mer om mötet?",
                    response: "four"
                }
            ]
        },
        two: {
            question: " Jasså du letade efter mig... Är det någon speciell anledning eller har du hört något? Det är väl inte Ove som sagt något till dig?",
            "option": [
                {
                    text: "Nejdå han har inte, jag är bara imponerad av ditt driv och undrar om du har några tips?",
                    response: "five",

                },
                {
                    text: "Varför skulle Ove sagt något?",
                    response: "six"
                }
            ]
        },
        three: {
            question: `Det är bra att du är det. Vissa delar av vår "verksamhet" kan anses lite... annorlunda. Det gäller att ha tydliga mål och vara villiga att göra allt för att nå dem om man ska vara med oss. Det finns ju dem som inte var det... och ja... det går inte bra för dem.`,
            "option": [
                {
                    text: "Jag ser fram emot att se vad som händer.",
                    lastMessage: "Oj, nu ringer det här, hejdå!",

                },
                {
                    text: "Jag vet inte om jag är villig att göra vad som helst...",
                    lastMessage: "Oj, nu ringer det här, hejdå!"
                }
            ]
        },

        four: {
            question: "Mötena sker på en hemlig plats och det är jag och fyra andra som är med...varje möte handlar om lite olika saker men jag kan inte gå in på detaljer i nuläget. Du måste förtjäna att vara med för att kunna få all info och det är tyvärr inte bara jag som bestämmer om du kan haka på...men du snokar väl inte?",
            "option": [
                {
                    text: "Jag vill veta mer!",
                    response: "seven",

                },
                {
                    text: " Absolut inte!",
                    response: "seven"
                }
            ]
        },

        five: {
            question: `Ja några tips har jag väl. Men det beror lite på...  vissa delar av min verksamhet sker lite mer "off the record" så att säga. Om du skulle vara intresserad skulle jag kanske kunna få med dig på ett möte? Men först måste jag prata med de andra. Hur långt är du beredd att gå för att nå toppen?`,
            "option": [
                {
                    text: "Jag kan göra vad som helst!",
                    lastMessage: "Oj, nu ringer det här, hejdå!",

                },
                {
                    text: "Vet inte riktigt... Men hör gärna av dig om jag får vara med på ett möte!",
                    lastMessage: "Oj, nu ringer det här, hejdå!"
                }
            ]
        },

        six: {
            question: `Amen du har ju säkert hört hur Ove kan vara... och vissa saker ska han verkligen inte prata om alls! Du vet när vi bodde på saltis så var det nära att han förstörde allt, men vi lyckades sopa undan efter honom ändå...`,
            "option": [
                {
                    text: "Absolut inte!",
                    lastMessage: "Oj, nu ringer det här, hejdå!",

                },
                {
                    text: "Jag vill veta allt!",
                    lastMessage: "Oj, nu ringer det här, hejdå!"
                }
            ]
        },
        seven: {
            question: `Det är bra för vi vill inte att någon extern ska veta om vad vi gör för annars kan det sluta dåligt för oss eller för dem....`,
            "option": [
                {
                    text: "Hmm det lät lite suspekt",
                    lastMessage: "Oj, nu ringer det här, hejdå!",

                },
                {
                    text: "Nej men du känner ju mig, så mig kan ni lita på!",
                    lastMessage: "Oj, nu ringer det här, hejdå!"
                }
            ]
        },

    },

    "Mickan": {
        start: {
            question: "Hej på dig snygging! Vill du med och shoppa en runda. Jag har sååå mycket pengar, haha.",
            option: [
                {
                    text: "Var har du fått alla pengar ifrån?",
                    response: "two"
                },
                {
                    text: "Nja... Vad ska du göra efter du shoppat?",
                    response: "one"
                }
            ]
        },
        one: {
            question: "Jag ska träffa min man. Min bästa vän svek mig, så henne kommer jag inte träffa. Det är en sån besvikelse när någon som man trodde var ens närmaste vän visar sig vara någon annan. Det var svårt att förstå och, men ja... Vad kan man förvänta sig av någon som inte var uppväxt på Saltis.",
            option: [
                {
                    text: "Vad ska du och Fredde göra?",
                    response: "three"
                },
                {
                    text: "Vad hände mellan er?",
                    response: "four"
                }
            ]
        },
        two: {
            question: `Fredde jobbar ju mycket, men sen har vi börjat med lite "extra" aktiviteter.`,
            option: [
                {
                    text: "Vadå för något?",
                    response: "five"
                },
                {
                    text: "Är ni ensamma om att göra de aktiviteterna?",
                    response: "six"
                }
            ]
        },
        three: {
            question: "Vi ska över till några kompisar. Eller ja... Kompisar, det är ett illa måste att umgås med dem.",
            option: [
                {
                    text: "Vilka är det?",
                    response: "eight"
                },
                {
                    text: "Varför måste ni umgås med dem?",
                    response: "seven"
                }
            ]
        },
        four: {
            question: "Hon hade fel prioriteringar om man säger så. Och om man inte är med mig så är man emot mig",
            option: [
                {
                    text: "Jag håller mig helst på din goda sida!",
                    lastMessage: "Åh gulle du, nu måste jag springa! Ciao!"
                },
                {
                    text: "Du verkar ha bra värderingar! Din förra kompis var säkert störig",
                    lastMessage: "Åh gulle du, nu måste jag springa! Ciao!"
                }
            ]
        },
        five: {
            question: "Jag vet inte om jag får säga det... Men det är tyvärr inte ett tillfälle där jag kan ha på mig mina nya Gucci skor",
            option: [
                {
                    text: "Låter spännande! Trots att du inte kan ha dina fina skor",
                    response: "ten"
                },
                {
                    text: "Gucci skor är såå fina!",
                    response: "ten"
                }
            ]
        },
        six: {
            question: "Nej det är vi och fyra andra!",
            option: [
                {
                    text: "Kan jag gå med?",
                    response: "nine"
                },
                {
                    text: "Söker ni nya medlemmar?",
                    response: "nine"
                }
            ]
        },
        seven: {
            question: "Vi uträttar viktiga saker, och tro det eller ej så är dem ganska hjälpsamma. Även om de varit irriterande förr i tiden.",
            option: [
                {
                    text: "Vilka är ni?",
                    lastMessage: "Det är Anette och Ove. Sen kommer ju Alex också, men han har vi ju alltid umgåtts med. <br> Nu måste jag dock gå innan frisören stänger."
                },
                {
                    text: "Var ska ni ses?",
                    lastMessage: "Det kan jag inte berätta... <br> Men om du vill kan jag höra med de andra om du kan vara med nästa gång? Nu måste jag dock gå innan Frissan stänger!"
                }
            ]
        },
        eight: {
            question: "Det är Anette och Ove. Sen kommer ju Alex också, men han har vi ju alltid umgåtts med.",
            option: [
                {
                    text: "Vad ska ni göra?",
                    lastMessage: "Vi ska ha ett möte typ...Jag vet inte om jag fåt lov att säga mer. <br> Men om du vill kan jag höra med de andra om du kan vara med nästa gång? Nu måste jag dock gå innan Frissan stänger!"
                },
                {
                    text: "Var ska ni träffas?",
                    lastMessage: "Det kan jag inte berätta... <br> Men om du vill kan jag höra med de andra om du kan vara med nästa gång? Nu måste jag dock gå innan Frsören i stan stänger!"
                }
            ]
        },
        nine: {
            question: "Det krävs att man gör uppofringar för att komma in i gruppen och det vet jag inte om du är redo för",
            option: [
                {
                    text: "Hmm låter som att ni håller på med konstiga saker.",
                    lastMessage: `Eeeh nej... <br> Oj det "ringer"! Vi ses.`
                },
                {
                    text: "Haha vadå för uppoffringar, ska jag behöva döda någon?",
                    lastMessage: `Eeeh nej... <br> Oj det "ringer"! Vi ses.`
                }
            ]
        },
        ten: {
            question: "Gud va du är underbar!",
            option: [
                {
                    text: "Men tror du att jag kan vara med ? Jag vill också tjäna lite extra.",
                    lastMessage: `Jadu du måste visa dig vara tillförlitlig, men jag kan prata med dem andra om dig. Nu måste jag dock gå innan xxx i stan stänger!`
                },
                {
                    text: "Men vad behöver jag göra för att kunna delta i era akriviteter?",
                    lastMessage: `Jadu du måste visa dig vara tillförlitlig, men jag kan prata med dem andra om dig. Nu måste jag dock gå innan xxx i stan stänger!`
                }
            ]
        },
    },

    "Alex": {
        start: {
            question: "Hej hej, Kul att du kom hit! jag har så tråkigt nu för tiden...",
            option: [
                {
                    text: "Var har du Anna?",
                    response: "one"
                },
                {
                    text: "Varför har du tråkigt?",
                    response: "two"
                }
            ]
        },
        one: {
            question: "Eh... Eh... Eh... Hon är nog hos sina föräldrar. I vilket fall så är hon ingen jag vill umgås med...jag längtar tills vi kan gå skilda vägar...och jag vet att det kommer vara snart.",
            option: [
                {
                    text: "Ä det bara du som ogillar henne så mycket helt plötsligt?",
                    response: "five"
                },
                {
                    text: "Hur vet du att ni kommer skiljas åt?",
                    response: "six"
                }
            ]
        },

        two: {
            question: "På sistone har jag tappat kontakten med barnen. Anna vill jag inte ens räkna som min familj längre. Men barnen saknar jag, jag hade stora planer för dem... Men det satte Anna stopp för! Nu känner jag att de tagit avstånd från mig... Jag hoppas att de ändrar sig så att de inte måste följa sin mammas öde.",
            option: [
                {
                    text: "Vad har Anna gjort?",
                    response: "three"
                },
                {
                    text: "Annas öde?",
                    response: "four"
                }
            ]
        },
        three: {
            question: "Ja vad har hon inte gjort... hon visste att det värsta tänkbara vara att svika oss och ändå skulle hon göra de. Vi kände alla hennes tvivel... även om hon inte sa det högt",
            option: [
                {
                    text: "Tvivel om vad?",
                    lastMessage: "Hon tvivlade på allt! Hela grunden till vår tro... även om våra tillvägagånssätt kan verka hårda så vet vi alla att de löner sig."
                },
                {
                    text: `Vilka är "oss"?`,
                    lastMessage: "Ja vad ska jag säga... vi är en grupp, en väldigt tight grupp. Bara rätt personer får vara med."
                }
            ]
        },
        four: {
            question: "Jag vet inte om jag kan berätta allt, men hon kommer få det hon förtjänar! Och det kommer ske snart...riktigt snart.",
            option: [
                {
                    text: "När kommer det hända?",
                    response: "eight"
                },
                {
                    text: "Var någonstans?",
                    lastMessage: "Tyvärr kan jag inte berätta det... men du kanske kan få vara med på ett speciellt möte, jag ska kolla med gruppen. Men gud vad klockan blev mycket! Nu måste jag gå!"
                }
            ]
        },
        five: {
            question: "Nä det är faktiskt inte det. Hon gjorde ju saker som gick emot hela gruppen. Hon visste vad hon gav sig in på och ändå började hon tvivla. Jag blir så arg, hon förstör dessutom för barnen genom att får dem att tvivla! Jag som hade stora planer för dem...",
            option: [
                {
                    text: "Vilka är gruppen?",
                    response: "seven"
                },
                {
                    text: "Vad hade du för planer med barnen?",
                    lastMessage: "De skulle bli som oss, föra vidare arvet, men jag har börjar tvivla om det kommer bli så. Hur som helst måste jag gå nu! Jag har en lagning strax."
                }
            ]
        },
        six: {
            question: "Utan att säga för mycket så har vi planerat in ett avsked. Men det kommer medföra bra saker för oss alla. Om du hade fått allt du önskar i utbyte mot att ja... Hon försvann...Hade du gjort det?",
            option: [
                {
                    text: "Nja.. jag vet inte riktigt.",
                    lastMessage: "Jag hör att du hade behövt övertalas lite mer... Men vi kan höras längre fram. Jag måste gå nu, har en lagning strax!"
                },
                {
                    text: "Jag hade gjort det!",
                    lastMessage: "Perfekt! jag ska prata med några andra personer...Främst en. Men nu måste jag gå! Har en lagning strax."
                }
            ]
        },
        seven: {
            question: "Det är jag, Fredde, Mickan, Anette och Ove. Anna var ju med innan, men inte nu längre... Om du hade varit intresserad kan jag höra med de andra om du kan vara med på ett av våra möten?",
            option: [
                {
                    text: "Hmm, vad gör på era möten?",
                    lastMessage: "Jag kan inte säga det utan de andras tillåtelse men det vi gör är väldigt lönsamt iallafall..... Hur som helst måste jag gå nu! Jag har en lagning strax"
                },
                {
                    text: "Ja gör det det låter kul, jag vill gärna veta vad det är som händer på dem.",
                    lastMessage: "Jag kan inte säga det utan de andras tillåtelse men det vi gör är väldigt lönsamt iallafall..... Hur som helst måste jag gå nu! Jag har en lagning strax"
                }
            ]
        },
        eight: {
            question: "Tyvärr kan jag inte berätta det... men du kanske kan få vara med på ett speciellt möte, jag ska kolla med gruppen.",
            option: [
                {
                    text: "Ja, jag behöver ändå ett nytt umgänge där jag kan utvecklas.  Men har ni några regler?",
                    lastMessage: "Ja asså egenligen ska man bara vara lojal till allt vi gör det är det viktigaste. Men gud vad klockan blev mycket! Nu måste jag gå! "
                },
                {
                    text: "Ja fråga jag vill gärna vara med. Men är det något jag måste tänka på?",
                    lastMessage: "Ja asså egenligen ska man bara vara lojal till allt vi gör det är det viktigaste. Men gud vad klockan blev mycket! Nu måste jag gå! "
                }
            ]
        },
    },

    "Ludde": {
        start: {
            question: "Hej, jag har inte jättelång tid på mig, vad kan jag hjälpa till med?",
            option: [
                {
                    text: "Hände något med Fredde? ",
                    end: "Jag jobbade ju hos honom ganska länge… men han blev konstigare och konstigare med tiden. Han har ju alltid haft det bra ställt men han blev så otroligt girig tillslut, jag kände knappt igen honom. Han började umgås med Anette och Ove också, vilket jag aldrig trodde skulle hända! Men de har ju alltid varit imponerade av honom, han är ju som en förebild för dem och ja… de gör ju exakt allt han säger. En händelse var dock märklig… en dag såg jag Fredde på sitt kontor tillsammans med Ove och Alex, jag har aldrig sett Ove så dominant över Fredde innan… det var nästan som att han var rädd för honom… tillslut så fick Alex säga till dem att lugna ner sig och då lyssnade dem direkt. Lite ovanligt att se Alex ha någon form av auktoritet… Men jag kan inte säga mer… du får inte säga till någon att jag berättat detta!"
                },
                {
                    text: "Märkte du något konstigt med Fredrik innan du slutade?",
                    end: "Jag jobbade ju hos honom ganska länge… Men han blev konstigare och konstigare med tiden. Han har ju alltid haft det bra ställt men han blev så otroligt girig tillslut, jag kände knappt igen honom. Han började umgås med Anette och Ove också, vilket jag aldrig trodde skulle hända! Men de har ju alltid varit imponerade av honom, han är ju som en förebild för dem och ja… de gör ju exakt allt han säger. En händelse var dock märklig… En dag såg jag Fredde på sitt kontor tillsammans med Ove och Alex, jag har aldrig sett Ove så dominant över Fredde innan… Det var nästan som att han var rädd för honom… Tillslut så fick Alex säga till dem att lugna ner sig och då lyssnade dem direkt. Lite ovanligt att se Alex ha någon form av auktoritet… Men jag kan inte säga mer… du får inte säga till någon att jag berättat detta!"
                },
            ]
        }
    },

    "Ove": {
        start: {
            question: "Tjenare mannen! Ska vi ut och ta kaffe?",
            option: [
                {
                    text: "Du som är så snål! Har du vunnit på lotto?",
                    response: "one"
                },
                {
                    text: "Jag hinner inte nu, men vad gör du ikväll?",
                    response: "two"
                },
            ]
        },
        one: {
            question: "Lotto och lotto... Men pengarna har ju trillat in.",
            option: [
                {
                    text: "Hur?",
                    response: "three"
                },
                {
                    text: "Började det när ni flyttade hit?",
                    response: "four"
                },
            ]
        },
        two: {
            question: "Ikväll är jag upptagen med annat... Min fru också.",
            option: [
                {
                    text: "Vad ska ni göra?",
                    response: "five"
                },
                {
                    text: "Imorgon då?",
                    response: "six"
                },
            ]
        },
        three: {
            question: "Man kan väl säga att vi gjort stora offringar, hehe.",
            option: [
                {
                    text: "Det låter annorlunda...",
                    response: "nine"
                },
                {
                    text: "Hoppas ni inte pratar om mänskliga offer ;)",
                    response: "nine"
                },
            ]
        },
        four: {
            question: "Nej innan dess.. Vi gjorde en grej på Saltis som var väldigt gynnsam.",
            option: [
                {
                    text: "Ni är så smarta!",
                    response: "eleven"
                },
                {
                    text: "Det låter som något jag också hade velat göra!",
                    response: "eleven"
                },
            ]
        },
        five: {
            question: "Vi ska bara vara hemma. Men kom inte förbi!",
            option: [
                {
                    text: "Nähä...det var lite taskigt",
                    response: "seven"
                },
                {
                    text: "Jag gör vad jag vill!",
                    response: "seven"
                },
            ]
        },
        six: {
            question: `Jag ska egentligen träffa mitt "gäng", men kan höra ifall du kan följa med!`,
            option: [
                {
                    text: "Det låter kul!",
                    response: "eight"
                },
                {
                    text: "Jag kommer gärna!",
                    response: "eight"
                },
            ]
        },
        seven: {
            question: `Hmm...`,
            option: [
                {
                    text: "Du beter dig lite märkligt?",
                    lastMessage: "Det har varit lite tufft men livet vänder nu, men nu är klockan mycket så jag måste gå!"
                },
                {
                    text: "Vad är det som händer egentligen?",
                    lastMessage: "Det har varit lite tufft men livet vänder nu, men nu är klockan mycket så jag måste gå!"
                },
            ]
        },
        eight: {
            question: `Underbart!`,
            option: [
                {
                    text: "Vad ska ni göra?",
                    lastMessage: "Det får du veta ifall om gänget accepterar dig, men nu måste jag gå, ha det bra!"
                },
                {
                    text: "Vart någonstans?",
                    lastMessage: "Det får du veta ifall om gänget accepterar dig, men nu måste jag gå, ha det bra!"
                },
            ]
        },
        nine: {
            question: `Nämen...`,
            option: [
                {
                    text: "Sa jag något fel? du verkar vara på tårna idag",
                    response: "ten"
                },
                {
                    text: "Men du ser jättestressad ut, som att du håller på en stor hemlighet",
                    response: "ten"
                },
            ]
        },
        ten: {
            question: `Nej nej bara varit några små problem på sistone`,
            option: [
                {
                    text: "Vadå för problem?",
                    lastMessage: "Nja kanske en annan gång, för nu måste jag gå. Ha det bra!"
                },
                {
                    text: "Berättar allt för mig",
                    lastMessage: "Nja kanske en annan gång, för nu måste jag gå. Ha det bra!"
                },
            ]
        },
        eleven: {
            question: `Härligt!`,
            option: [
                {
                    text: "Kan du inte berätta mer om vad det är för grej ni gjorde?",
                    lastMessage: "Nja kanske en annan gång för nu måste jag gå, ha det bra!"
                },
                {
                    text: "Kan du inte berätta mer om vad det är för grej ni gjorde?",
                    lastMessage: "Nja kanske en annan gång för nu måste jag gå, ha det bra!"
                },
            ]
        },
    },

    "Anette": {
        start: {
            question: "Vad gör du här? Jag har så mycket att göra...",
            option: [
                {
                    text: "Jag går en promenad.",
                    response: "one"
                },
                {
                    text: "Du måste ta det lugnt!",
                    response: "two"
                },
            ]
        },
        one: {
            question: "Och du kom hit till lilla mig? Vad gulligt av dig. Det känns som att folk är rädda för mig nu för tiden, kanske är det för att det går så bra för mig. Eller så är det bara det att de inte är vana vid att möta någon som verkligen vågar vara så öppen och målmedveten som mig. Men du, du verkar inte vara en av dem som skyr för sanningen. Det är uppfriskande att ha någon som vågar stå emot den allmänna trenden av ytlighet och falskhet och som vågar se världen för vad den är.",
            option: [
                {
                    text: "Jag tycker du är en trevlig person.",
                    response: "three"
                },
                {
                    text: "Varför är rädd för dig?",
                    response: "four"
                },
            ]
        },
        two: {
            question: "Ja jag vet det, men jag har så mycket att stå i just nu. Det är mycket som ska planeras till ett särskilt event kan man säga.",
            option: [
                {
                    text: "Vad för event är det?",
                    response: "five"
                },
                {
                    text: "Vad är det du måste planera?",
                    response: "six"
                },
            ]
        },
        three: {
            question: "Eller hur! Jag har alltid varit snäll... Men går man emot mig får man skylla sig själv! Jag menar, jag lägger alltid ner mitt bästa för att vara tillmötesgående och samarbetsvillig. Men ibland finns det ingen plats för kompromisser. Att stå upp för vad som är det rätta, även när andra inte kan förstå vad det innebär, kräver en fast och orubblig hållning. Och som sagt...du är med eller mot mig.",
            option: [
                {
                    text: "Finns det någon som gått emot dig?",
                    response: "seven"
                },
                {
                    text: "Det lät lite aggressivt...",
                    response: "eight"
                },
            ]
        },
        four: {
            question: "För att de tror jag kommer göra något mot dem... och det skulle jag aldrig göra...i alla fall inte om man sköter sina kort rätt.",
            option: [
                {
                    text: "Ibland måste människor få det som de förtjänar!",
                    response: "nine"
                },
                {
                    text: "Så snäll som du är så skulle jag aldrig tro att du kunde göra något!",
                    response: "ten"
                },
            ]
        },
        five: {
            question: "Det kan jag tyvärr inte säga till dig, inte i nuläget i alla fall...",
            option: [
                {
                    text: "Vilka ska vara med på det?",
                    response: "nine"
                },
                {
                    text: "Kan du inte berätta, jag är väldigt intresserad!",
                    response: "ten"
                },
            ]
        },
        six: {
            question: "Väldigt mycket saker! Jag, eller vi rättare sagt, har speciella rutiner för det vi ska göra. Och det är oerhört viktigt att allting går rätt till, annars kan det få förödande konsekvenser.",
            option: [
                {
                    text: "Vad är det för rutiner?",
                    response: "eleven"
                },
                {
                    text: "Vilka konsekvenser?",
                    lastMessage: "Ja vi får inte samma resultat så att säga... Och det påverkar ju oss alla! Då måste vi göra om allting och det har vi inte ork med! Men nu måste jag gå! Som sagt är det mycket jag måste hinna med att fixa..."
                },
            ]
        },
        seven: {
            question: "Ja absolut...Två personer. Men de får vad de förtjänar.",
            option: [
                {
                    text: "Det låter suspekt",
                    response: "twelve"
                },
                {
                    text: "Aha, vad har dem gjort och vad är det som har hänt med dem?",
                    response: "twelve"
                },
            ]
        },
        eight: {
            question: "Aggressivt och aggressivt, ibland måste man vara hård. Speciellt om man vinner något på det.",
            option: [
                {
                    text: "Vad menar du med det? låter som om det handlar om liv och död?",
                    response: "thirteen"
                },
                {
                    text: "Hmm fast man måste ju ändå agera med moral och du verkar vara väldigt hårt inställd?",
                    response: "thirteen"
                },
            ]
        },
        nine: {
            question: "Det håller jag helt med om! Och en personer kommer snart att få det...jag kan knappt vänta...",
            option: [
                {
                    text: "Hmm okej, det låter skumt. Vad menar du med det?",
                    lastMessage: "Nä men, bara att jag och mitt gäng snart ställer allt till sitt rätta. <br> <br> Men nu måste jag gå!"
                },
                {
                    text: "En person?",
                    lastMessage: "Nä men, bara att jag och mitt gäng snart ställer allt till sitt rätta. <br> Men nu måste jag gå!"
                },
            ]
        },
        ten: {
            question: "Jag tycker också att jag är en väldigt snäll människa, men ibland måste man göra saker som kan se fel ut i andras ögon...",
            option: [
                {
                    text: "Vad menar du?",
                    lastMessage: "Du är så snäll och naiv men tyvärr ibland räcker det inte med att bara prata, det kanske jag förklarar en annan dag... <br> Men nu måste jag gå! Som sagt är det mycket jag måste hinna med att fixa.."
                },
                {
                    text: "Jag tror att det flesta problem löses av en konversation.",
                    lastMessage: "Du är så snäll och naiv men tyvärr ibland räcker det inte med att bara prata, det kanske jag förklarar en annan dag... <br> Men nu måste jag gå! Som sagt är det mycket jag måste hinna med att fixa.."
                },
            ]
        },
        eleven: {
            question: "Det kan jag inte säga till dig, inte i nuläget i alla fall. Du måste visa att du är en människa man kan lita på.",
            option: [
                {
                    text: "Förståenligt. Vad krävs?",
                    lastMessage: "Jadu man kan iallafall inte vara för känslig, jag och gänget får diskutera detta och se vad du kan göra för att vinna förtroendet. <br> Men nu måste jag gå! Som sagt är det mycket jag måste hinna med att fixa.."
                },
                {
                    text: "Jag bevisar mig gärna!",
                    lastMessage: "Jadu man kan iallafall inte vara för känslig, jag och gänget får diskutera detta och se vad du kan göra för att vinna förtroendet. <br> Men nu måste jag gå! Som sagt är det mycket jag måste hinna med att fixa.."
                },
            ]
        },
        twelve: {
            question: "För att veta sånt måste du vara med i vår trygghetscirkel",
            option: [
                {
                    text: "Hur går jag med i den?",
                    lastMessage: "Kanske kanske, det får vi alla överväga på mötet. <br> Men nu måste jag gå det är mycket jag måste hinna fixa med...."
                },
                {
                    text: "Jag vill vara med!",
                    lastMessage: "Kanske kanske, det får vi alla överväga på mötet. <br> Men nu måste jag gå det är mycket jag måste hinna fixa med...."
                },
            ]
        },
        thirteen: {
            question: "Hmm...",
            option: [
                {
                    text: "Är allt okej?",
                    lastMessage: "Jadå, jadå det är bara mycket som är på gång nu. <br> Men nu måste jag gå! Som sagt är det mycket jag måste hinna med att fixa.."
                },
                {
                    text: "Oj, du är helt vit i ansiktet?",
                    lastMessage: "Jadå, jadå det är bara mycket som är på gång nu. <br> Men nu måste jag gå! Som sagt är det mycket jag måste hinna med att fixa..."
                },
            ]
        },


    }

}

