import { swapStyleSheet } from "./utilities/cssSwap.js";
import { main } from "./utilities/variable.js"

export function renderHomepage(){

    swapStyleSheet("CSS/homePage.css")

    main.innerHTML = `
    <div id="contentHome">
    <div id="topContainer">
        <img id="settings" src="media/settings.svg">
    </div>
        <button id="game">Starta spel</button>
        <button id="scoreBoard">Scoreboard</button>
        <button id="characters">Karaktärerna</button>
        <button id="aboutUs">Om oss</button>       
    </div>
    `;

    main.querySelector("#game").addEventListener("click", () => {
        renderGame()
    })

    main.querySelector("#scoreBoard").addEventListener("click", () => {
        renderScoreBoard()
    })

    main.querySelector("#characters").addEventListener("click", () => {
        renderCharacters()
    })

    main.querySelector("#aboutUs").addEventListener("click", () => {
        renderAboutUs()
    })
  
    main.querySelector("#settings").addEventListener("click", () => {
        renderSettings()
    })

}

function renderCharacters(){

    main.innerHTML = `
    <div id="topContainer">
        <img class="exit" src="media/exit.svg">
    </div>
    <div id="containerCharacters">
    </div>
    `;

    const characters = [
    {
        name: "Freddan",
        img: "src",
        description: `Freddan 39 år och jobbar som VD och fondförvaltare på banken. Han bor i ett av de flottaste husen i det mycket fashionabla området Solsidan, Saltsjöbaden utanför Stockholm, där han även är uppväxt. Fredde är gift med Mikaela Schiller, som kallas Mickan, och tillsammans har de två barn, Victor och Ebba. Han är bästa vän med Alex Löfström, en barndomsvän som nyligen flyttat tillbaka till Solsidan med sin sambo Anna. Fredde är mycket entusiastisk i det som han engagerar sig i, men handlar oftast först och tänker sen. Han tänker mycket på status och lägger därpå mycket pengar och omsorg.`
    },
    {
        name: "Mickan",
        img: "src",
        description: `Mickan är gift med Fredde Schiller, Solsidans rikaste man. Hon är mammaledig med dottern Ebba men driver även ett företag som designar barnkläder. Mickan är precis som Fredde beroende av sin status i området, och vill vara "The first lady of Saltis", men har sin väninna Lussan att tävla mot. I säsong två återvänder en annan av Freddes barndomskamrater till Saltis, och visar sig vara tillsammans med Lussan, han visar sig även vara rikare än Fredde.`
    },
        {
        name: "Alex",
        img: "src",
        description: `är en 39-årig tandläkare, med egen klinik. Han är uppvuxen i Saltsjöbaden utanför Stockholm. I första avsnittet flyttar Alex och sambon (senare gift) Anna Svensson till "Saltis" då han har köpt sitt barndomshem av sin mamma, Margareta Löfström. I den första säsongen väntar han och Anna barn som sedan föds i det sista avsnittet. Alex är konflikträdd och nojig, och bryr sig väldigt mycket om vad andra tycker om honom. Han bor granne med sin bästa vän, och barndomskamrat, Fredde Schiller och hans fru Mikaela.`
    },
    {
        name: "Anette",
        img: "src",
        description: `är en fiktiv karaktär i humordrama-serien Solsidan.`
    },
        {
        name: "Ove",
        img: "src",
        description: `OVe är gammal skolbekant till Fredde och Alex. Ove är notoriskt snål och i total avsaknad av såväl social kompetens som självdistans, vilket resulterar i att han aldrig inser hur han uppfattas av omgivningen, att han beskrivs som en riktig skitstövel, eller att han aldrig är önskvärd eller välkommen. Ove vill ständigt låna prylar av grannarna, utan att lämna tillbaka dem eller själv låna ut något. Tidigare har han lyckats att - på oklart vis - bli ordförande i Saltsjöbadens Golfklubb. Han är gift med den lika osympatiska Annette med vilken han har dottern Marielle. Det var (lustigt nog) Oves och Anettes ide att Alex och Annas son skulle heta "Love". Ett snarlikt namn till "Ove". Trots Oves tämligen burdusa och buffliga stil följde de rådet.`
    },
    {
        name: "Anna",
        img: "src",
        description: ` Anna är sambo (sedermera gift) med Alex Löfström och jobbar som skådespelerska. I första säsongen är hon ledig från sitt arbete eftersom hon är gravid och i säsong 2 så börjar hon jobba som massör. Anna är inte uppväxt i Saltsjöbaden till skillnad från Alex, och känner sig bitvis utanför och annorlunda än sin väninna Mickan och dennas väninnor. Hon strävar dock för att passa in, men är ibland lite väl verbal och rättfram.`
    },
    ]
    let containerDom = main.querySelector("#containerCharacters");

    characters.forEach(character => {
        let characterDom = document.createElement("div");
        characterDom.classList.add("character");

        characterDom.innerHTML = `
            <div class="topCharacter">                  
                <img src="${character.img}" alt="${character.name}">
                 <h3>${character.name}</h3>
            </div>
            <p>${character.description}</p>
        `;
        containerDom.append(characterDom);
    });

    endSession(".exit", renderHomepage)
}

function endSession(node, functionCall){

    document.querySelector(`${node}`).addEventListener("click", () => {
        functionCall()
    })
}