export const conversations = {
    "Fredde": {
    start: {
        question: "Nämen hej är du här! Vad gör du här?",
        "option": [
            {
                text: "Jag letar efter ett nytt jobb, jag vill ha mer pengar och framgång!",
                response: "one"
            },
            {
                text: "Jag letade efter dig!", 
                response: "two"
            }
        ]
    },
    one: {
        question: "Jag vet exakt vad du ska göra! Om du har tid i veckan kan jag ta med dig på ett väldigt speciellt möte... utanför arbetstid då.",
        "option": [
            {
                text: "Det låter bra! Jag är öppen för exakt allt som hjälper mig framåt",
                response: "three"

            },
            {
                text: "Kan du berätta mer om mötet?", 
                response: "four"
            }
        ]
    },
    two: {
        question: "Varför letar du efter mig... har du hört något?",
        "option": [
            {
                text: "Nej! Jag är bara imponerad av din framgång och vill veta hur du gör?",
                response: "five",

            },
            {
                text: "jag har hört att ni är ett väldigt tight kompisgäng",
                response: "six"
            }
        ]
    },
    three: {
        question: `Du låter som en vettig människa... det ska jag föra vidare till min "chef"`,
        "option": [
            {
                text: "Jag ser fram emot att se vad som händer",
                response: "Fredde går iväg och tycker du var en king",

            },
            {
                text: "Det låter bra!",
                response: "Fredde går iväg och tycker du var en king"
            }
        ]
    },

    four: {
        question: "Det är jag och fyra andra...men du snokar väl inte?",
        "option": [
            {
                text: "Jag vill ju veta mer!",
                response: "Fredde går iväg och tycker mötet var lite märkligt...",

            },
            {
                text: " Absolut inte!",
                response: "Fredde går iväg och tycker mötet var lite märkligt..."
            }
        ]
    },

    five: {
        question: ` Du låter som en vettig människa... det ska jag föra vidare till min "chef".`,
        "option": [
            {
                text: "Jag ser fram emot att se vad som händer",
                response: "Fredde går iväg och tycker du var en king",

            },
            {
                text: "Det låter bra!",
                response: "Fredde går iväg och tycker du var en king"
            }
        ]
    },

    six: {
        question: `En av oss är inte med längre... men du snokar väl inte?`,
        "option": [
            {
                text: "Jag vill veta allt!",
                response: "Fredde går iväg och tycker mötet var lite märkligt...",

            },
            {
                text: "Absolut inte!",
                response: "Fredde går iväg och tycker mötet var lite märkligt..."
            }
        ]
    },

    },
    
    "Mickan": {
        start: {
            question: "Hej på dig snygging! Vill du med och shoppa en runda. Jag är väldigt mycket pengar lol",
            option: [
                {
                    text: "Nja...Vad ska du göra efter du shoppat?",
                    response: "one"
                },
                {
                    text: "Var har du fått alla pengar ifrån?", 
                    response: "two"
                }
            ]
        },
        one: {
            question: "Jag ska träffa min man... min förra bästa vän svek mig så henne vill jag inte umgås med längre. Det är en sådan besvikelse när någon som man trodde var ens närmaste vän visar sig vara någon annan än vad man förväntade sig. Det var sjukt  svårt att förstå och acceptera att människor förändras eller visar sin sanna sida på ett oväntat sätt. Men ja...vad skulle man egentligen tro om någon som inte var uppväxt på saltis.",
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
            question: "Fredde jobbar ju mycket, men sen har vi börjat med lite extra aktiviteter.",
            option: [
                {
                    text: "Vad för något?",
                    response: "five"
                },
                {
                    text: "Är ni ensamma om att göra de aktiviteterna?", 
                    response: "six"
                }
            ]
        },
        three: {
          question: "Vi ska över till några kompisar. Eller ja... kompisar och kompisar, det är ett illa måste att umgås med dem.",
            option: [
                {
                    text: "Varför måste ni umgås med dem?",
                    response: "seven"
                },
                {
                    text: "Vem är det ni måste umgås med?", 
                    response: "eight"
                }
            ]
        },
        four: {
          question: "Hon har fel prioriteringar om man säger så... och om man inte kan vara med mig så är man emot mig. Jag tycker bara det är så sjukt frustrerande att vissa människor inte kan prioritera rätt... ",
            option: [
                {
                    text: "Jag håller mig helst på din goda sida!",
                    response: "Mickan tyckte att du var underbar, hon kommer prata gott om dig"
                },
                {
                    text: "Du verkar ha bra värderingar! Din förra kompis var säkert störig", 
                    response: "Mickan tyckte att du var underbar, hon kommer prata gott om dig"
                }
            ]
        },
        five: {
          question: "Jag vet inte om jag får säga... men det är ju tyvärr inget tillfälle där jag kan ha mina nya Gucci skor",
            option: [
                {
                    text: "Låter spännande! trots att du inte kan ha dina fina skor",
                    response: "Mickan tyckte att du var underbar, hon kommer prata gott om dig"
                },
                {
                    text: "Gucci skor är fina!", 
                    response: "Mickan tyckte att du var underbar, hon kommer prata gott om dig"
                }
            ]
        },
        six: {
          question: "Nej det är vi och fyra andra!",
            option: [
                {
                    text: "Låter lite suspekt.",
                    response: "Mickan tyckte du var lite väl snokig."
                },
                {
                    text: "Jag vill gärna veta mer!", 
                    response: "Mickan tyckte du var lite väl snokig."
                }
            ]
        },
        seven: {
          question: "Vi har viktiga saker att uträtta... och tro det eller ej så är dem ganska hjälpsamma, även om de varit irriterande förr i tiden",
            option: [
                {
                    text: "Vem ska ni träffa?",
                    response: "Det är Anette och Ove. Sen kommer ju Alex också, men han har vi ju alltid umgåtts med. Nu måste jag dock gå innan xxx i stan stänger!"
                },
                {
                    text: "Var ska ni träffas?", 
                    response: "Det kan jag inte berätta...Men om du vill kan jag höra med de andra om du kan vara med nästa gång? Nu måste jag dock gå innan xxx i stan stänger!"
                }
            ]
        },
        eight: {
          question: "Det är Anette och Ove. Sen kommer ju Alex också, men han har vi ju alltid umgåtts med.",
            option: [
                {
                    text: "Vad ska ni göra?",
                    response: "Vi ska ha ett möte typ...jag vet inte om jag fåt lov att säga mer. Men om du vill kan jag höra med de andra om du kan vara med nästa gång? Nu måste jag dock gå innan xxx i stan stänger!"
                },
                {
                    text: "Var ska ni träffas?", 
                    response: "Det kan jag inte berätta...Men om du vill kan jag höra med de andra om du kan vara med nästa gång? Nu måste jag dock gå innan xxx i stan stänger!"
                }
            ]
        },
    },

    "Alex": {
        start: {
            question: "Hej hej. Kul att du kom hit! jag har så tråkigt nu för tiden...",
            option: [
                {
                    text: "Var är Anna då?",
                    response: "one"
                },
                {
                    text: "Varför har du tråkigt?", 
                    response: "two"
                }
            ]
        },
        one: {
            question: "Eh...eh...eh... hon är nog hos sina föräldrar. Sist jag pratade med henne så skulle hon i alla fall åka dit på besök. I vilket fall så är hon ingen jag vill umgås med...jag längtar tills vi kan gå skilda vägar...och jag vet att det kommer vara snart.",
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
            question: "Även om jag har det bättre ställt nu än någonsin förr så har jag tappat kontakten lite med min familj.. eller i alla fall mina barn. Anna vill jag inte ens räkna till min familj längre, inte efter vad hon gjorde. Men barnen... dem saknar jag lite. Jag hade stora planer för dem, de skulle gå i mina fotspår. Men Anna satte stopp för det! Nu känner jag att de tagit avstånd från mig...jag hoppas att de ändrar sig så att de inte måste följa sin mammas öde.", 
            option: [
                {
                    text: "Vad har Anna gjort?",
                    response: "three"
                },
                {
                    text: "Vad kommer bli Annas öde?", 
                    response: "four"
                }
            ]
        },
        three: {
            question: "Ja vad har hon inte gjort... hon visste att det värsta tänkbara vara att svika oss och ändå skulle hon göra de. Vi kände alla hennes tvivel... även om hon inte sa det högt", 
            option: [
                {
                    text: "Tvivel om vad?",
                    response: "Hon tvivlade på allt! Hela grunden till vår tro... även om våra tillvägagånssätt kan verka hårda så vet vi alla att de löner sig."
                },
                {
                    text: `Vilka är "oss"?`, 
                    response: "Ja vad ska jag säga... vi är en grupp, en väldigt tight grupp. Bara rätt personer får vara med."
                }
            ]
        },
        four: {
            question: "Jag vet inte om jag kan berätta allt... men hon kommer få det hon förtjänar! Och det kommer ske snart...riktigt snart.", 
            option: [
                {
                    text: "Vilken tid kommer det ske?",
                    response: "Tyvärr kan jag inte berätta det... men du kanske kan få vara med på ett speciellt möte, jag ska kolla med gruppen. Men gud vad klockan blev mycket! Nu måste jag gå! Har en lagning strax."
                },
                {
                    text: "Var kommer det ske?", 
                    response: "Tyvärr kan jag inte berätta det... men du kanske kan få vara med på ett speciellt möte, jag ska kolla med gruppen. Men gud vad klockan blev mycket! Nu måste jag gå! Har en lagning strax."
                }
            ]
        },
        five: {
            question: "A: Nä det är faktiskt inte det. Hon gjorde ju saker som gick emot hela gruppen. Hon svek oss! Och de ska man akta sig för att göra. Hon visste vad hon gav sig in på och ändå skulle hon börja tveka. Jag blir bara så arg för hon förstör för barnen också och får dem att tvivla! Jag hade stora planer för dem...",
            option: [
                {
                    text: "Vilka är med i gruppen?",
                    response: "Det är jag, Fredde, Mickan, Anette och Ove. Anna var ju med innan, men inte längre... Om du hade varit intresserad kan jag höra med de andra om du kan vara med på ett av våra möten... Hur som helst måste jag gå nu! Jag har en lagning strax."
                },
                {
                    text: "Vad hade du för planer med barnen?", 
                    response: "De skulle bli som oss... nästa generation och föra vidare arvet, men jag börjar tvivla på om det kommer hända... Hur som helst måste jag gå nu! Jag har en lagning strax."
                }
            ]
        },
        six: {
            question: "Utan att säga för mycket så har vi planerat in ett avsked. Men jag vet att det kommer medföra bra saker för oss alla. Nu vet ju inte jag vad du tycker om henne... men om du hade fått allt du önskar i utbyte mot att ja... hon försvann...hade du gjort det?",
            option: [
                {
                    text: "Nja.. jag vet inte riktigt.",
                    response: "Jag hör att du hade behövt övertalas lite mer... men vi kan höras längre fram. Jag måste gå nu, har en lagning strax!"
                },
                {
                    text: "Jag hade gjort det!", 
                    response: "Perfekt! jag ska prata med några andra personer...främst en. Men nu måste jag gå! Har en lagning strax."
                }
            ]
        },
    },

    "Ludde": {
        start: {
            question: "Hej, jag har inte jättelång tid på mig, vad kan jag hjälpa till med?",
            option: [
                {
                    text: "Märkte du något konstigt med Fredrik innan du slutade?",
                    end: "Jag jobbade ju hos honom ganska länge… men han blev konstigare och konstigare med tiden. Han har ju alltid haft det bra ställt men han blev så otroligt girig tillslut, jag kände knappt igen honom. Han började umgås med Anette och Ove också, vilket jag aldrig trodde skulle hända! Men de har ju alltid varit imponerade av honom, han är ju som en förebild för dem och ja… de gör ju exakt allt han säger. En händelse var dock märklig… en dag såg jag Fredde på sitt kontor tillsammans med Ove och Alex, jag har aldrig sett Ove så dominant över Fredde innan… det var nästan som att han var rädd för honom… tillslut så fick Alex säga till dem att lugna ner sig och då lyssnade dem direkt. Lite ovanligt att se Alex ha någon form av auktoritet… Men jag kan inte säga mer… du får inte säga till någon att jag berättat detta!"
                },
                {
                    text: "Hände något med Fredde? ",
                    end: "Jag jobbade ju hos honom ganska länge… men han blev konstigare och konstigare med tiden. Han har ju alltid haft det bra ställt men han blev så otroligt girig tillslut, jag kände knappt igen honom. Han började umgås med Anette och Ove också, vilket jag aldrig trodde skulle hända! Men de har ju alltid varit imponerade av honom, han är ju som en förebild för dem och ja… de gör ju exakt allt han säger. En händelse var dock märklig… en dag såg jag Fredde på sitt kontor tillsammans med Ove och Alex, jag har aldrig sett Ove så dominant över Fredde innan… det var nästan som att han var rädd för honom… tillslut så fick Alex säga till dem att lugna ner sig och då lyssnade dem direkt. Lite ovanligt att se Alex ha någon form av auktoritet… Men jag kan inte säga mer… du får inte säga till någon att jag berättat detta!"
                },
            ]
        }
    },

    "Ove": {
        start: {
            question: "Tjenare mannen! Ska vi ut och ta kaffe?",
            "options": [
                {
                    text: "Du brukar vara så snål. Har du vunnit på lotto?",
                    response: "one"
                },
                                {
                    text: "Jag hinner inte umgås just nu... men vad gör du ikväll?",
                    response: "two"
                },
            ]
        },
        one: {
            question: "Lotto och lotto... men pengarna har ju trillat in.",
            "options": [
                {
                    text: "Hur?",
                    response: "three"
                },
                 {
                    text: "Jasså! Var det sen ni flyttade hit?",
                    response: "four"
                },
            ]
        },
        two: {
            question: "Ikväll är jag upptagen med annat... min fru också.",
            "options": [
                {
                    text: "Vad ska ni göra?",
                    response: "five"
                },
                 {
                    text: "Men kanske imorgon då",
                    response: "six"
                },
            ]
        },
        three: {
            question: "Man kan väl säga att vi gjort stora offringar, hehe.",
            "options": [
                {
                    text: "Det låter annorlunda...",
                    response: "Ove blir nervös"
                },
                 {
                    text: "Hoppas ni inte pratar om mänskliga offer ;)",
                    response: "Ove blir nervös"
                },
            ]
        },
        four: {
            question: "Nej innan dess.. vi gjorde en grej på saltis som var väldigt gynnsam...",
            "options": [
                {
                    text: "Ni är så smarta!",
                    response: "Ove älskade dig."
                },
                 {
                    text: "Det låter som något jag också hade velat göra!",
                    response: "Ove älskade dig."
                },
            ]
        },
        five: {
            question: "Vi ska bara vara hemma.  Men kom inte förbi!",
            "options": [
                {
                    text: "Nähä...det var lite taskigt",
                    response: "Ove blir nervös."
                },
                 {
                    text: "Jag gör vad jag vill!",
                    response: "Ove blir nervös."
                },
            ]
        },
        six: {
            question: `Jag ska egentligen träffa mitt "gäng", men kan höra ifall du kan följa med!`,
            "options": [
                {
                    text: "Det låter kul!",
                    response: "Ove älskar dig"
                },
                 {
                    text: "Jag kommer gärna!",
                    response: "Ove älskar dig"
                },
            ]
        },
    },

    "Anette": {
        start: {
            question: "Nämen hej! Vad gör du här? Jag hinner inte prata så länge! Jag har så mycket att göra...",
            "options": [
                {
                    text: "Jag är bara ute och går en promenad!",
                    response: "one"
                },
                                {
                    text: "Du måste ta det lugnt!",
                    response: "two"
                },
            ]
        },
        one: {
            question: "Och du kom hit till lilla mig? Vad gullig du är. Folk känns nästan lite rädda för mig nu för tiden. Kanske är det för att det går så bra för mig ... eller så är det bara det att de inte är vana vid att möta någon som verkligen vågar vara så öppen och målmedveten. Men du, du verkar inte vara en av dem som skyr för sanningen. Det är uppfriskande att ha någon som vågar stå emot den allmänna trenden av ytlighet och falskhet och som vågar se världen för vad den är...",
            "options": [
                {
                    text: "Jag tycker i alla fall att du är en trevlig person.",
                    response: "three"
                },
                {
                    text: "Har folk en anledning att vara rädd för dig?",
                    response: "four"
                },
            ]
        },
            two: {
            question: "Och du kom hit till lilla mig? Vad gullig du är. Folk känns nästan lite rädda för mig nu för tiden. Kanske är det för att det går så bra för mig ... eller så är det bara det att de inte är vana vid att möta någon som verkligen vågar vara så öppen och målmedveten. Men du, du verkar inte vara en av dem som skyr för sanningen. Det är uppfriskande att ha någon som vågar stå emot den allmänna trenden av ytlighet och falskhet och som vågar se världen för vad den är...",
            "options": [
                {
                    text: "Jag tycker i alla fall att du är en trevlig person.",
                    response: "three"
                },
                {
                    text: "Har folk en anledning att vara rädd för dig?",
                    response: "four"
                },
            ]
        },

    }

}

