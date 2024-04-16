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

    end: {}

},
    "Mickan": {},

    "Alex": {
        start: {
            question: "Hej hej. Kul att du kom hit! jag har så tråkigt nu för tiden!",
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
            question: "Nja... sen vi flyttade hit har livet varit lite upp och ner",
            option: [
                {
                    text: "Varför flyttade ni hit?",
                    response: "five"
                },
                {
                    text: "Kan du inte umgås med ditt gäng då?", 
                    response: "six"
                }
            ]
        },
        
        two: {
            question: "eh...eh...eh... hon är nog hos sina föräldrar.", 
            option: [
                {
                    text: "Ja okej! När kommer hon hem?",
                    response: "three"
                },
                {
                    text: "Kan ju vara skönt med lite egentid", 
                    response: "four"
                }
            ]
        },
        three: {
            question: "Jag vet väl inte... fråga henne själv!", 
            option: [
                {
                    text: "Ta det lugnt...",
                    response: "Alex tycker att du snokade och blir nervös..."
                },
                {
                    text: "Det kanske jag gör då!", 
                    response: "Alex tycker att du snokade och blir nervös..."
                }
            ]
        },
        four: {
            question: "Ja men det tycker jag! Det har varit mycket på senaste... ", 
            option: [
                {
                    text: "Du förtjänar att ta det lite lugnt!",
                    response: "Alex tyckte du var empatisk och trevlig"
                },
                {
                    text: "Så kan det vara ibland...", 
                    response: "Alex tyckte du var empatisk och trevlig"
                }
            ]
        },
        five: {
            question: "Det finns stora möjligheter här. Västra hamnen är ett dyrt område.",
            option: [
                {
                    text: "Ja absolut! Här är trevligt att bo.",
                    response: "Alex tyckte du var smart... han kommer berätta för sina vänner om dig."
                },
                {
                    text: "Här finns stora möjligheter... tänk om man hade kunnat ta över stadsdelen...", 
                    response: "Alex tyckte du var smart... han kommer berätta för sina vänner om dig."
                }
            ]
        },
        six: {
            question: "Jo vi umgås hela tiden... vi gör mycket saker tillsammans... annorlunda saker.",
            option: [
                {
                    text: "Vad för saker... ni gör väl inget olagligt?",
                    response: "five"
                },
                {
                    text: "Men om du nu tycker det är tråkigt kanske du ska sluta med det...", 
                    response: "Alex tyckte du frågade för mycket!"
                }
            ]
        },
    }
}