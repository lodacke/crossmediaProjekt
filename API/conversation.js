export const conversations = {
    "F": {
    start: {
        question: "Nämen hej är du här! Vad gör du här?",
        option: [
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
        option: [
            {
                text: "Det låter bra! Jag är öppen för exakt allt som hjälper mig framåt",
                response: `Du låter som en vettig människa... det ska jag föra vidare till min "chef".`

            },
            {
                text: "Kan du berätta mer om mötet?", 
                response: "Det är jag och fyra andra...men du snokar väl inte?"
            }
        ]
    },
    two: {
        question: "Varför letar du efter mig... har du hört något?",
        option: [
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
        option: [
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
        option: [
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
        option: [
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
        option: [
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
    "Mickan": {}
}