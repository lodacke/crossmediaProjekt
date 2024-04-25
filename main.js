import { swapStyleSheet } from "./utilities/cssSwap.js";
import { endSession } from "./utilities/endSession.js";
import { main, dialog, CustomControl, globalHolder} from "./utilities/variable.js";
import { renderQRscann, findLeader } from "./gameCenter.js";
import { characters } from "./API/characters.js";
import { styleSVGElement } from "./utilities/styleElement.js";
import { levelCount} from "./utilities/levelCounter.js"


export function renderHomepage() {

    swapStyleSheet("CSS/homePage.css")

    main.innerHTML = `
    <div id="contentHome">
    <div id="topContainer">
        <img id="settings" src="media/settings.svg">
    </div>
        <button id="game">Starta spel</button>
        <button id="scoreBoard">Scoreboard</button>
        <button id="aboutUs">Om oss</button>       
    </div>
    `;

    main.querySelector("#game").addEventListener("click", () => {
        renderGame()
        window.location.hash = "#game";
    })

    main.querySelector("#scoreBoard").addEventListener("click", () => {
        renderScoreBoard()
    })

    main.querySelector("#aboutUs").addEventListener("click", () => {
        renderAboutUs()
    })

    main.querySelector("#settings").addEventListener("click", () => {
        renderSettings()
    })

}

export async function renderGame(){

    //SAMPLE OF NAME FOR GLOBAL HOLDERS: 
    let testlevelOne = ["Alex", "Mickan", "Ove", "Anette", "Fredde"];
    let testlevelTwo = ["Ludde", "imgFindMyIphone", "imgMeeting", "imgMap", "imgDiary", "findLeader"];
    
    //testlevelOne.forEach( level => {
    //    globalHolder.push("levelOne", level)
    //})

    console.log(globalHolder.levels)
    let level = levelCount()
    console.log(level)
    swapStyleSheet("CSS/homePage.css")

    const watchID = navigator.geolocation.watchPosition(position => {
        const { latitude, longitude } = position.coords;

        main.innerHTML = `
        <div class="helpers">
            <button id="notes"><img src="./media/note.svg"></button>
            <button id="characters"><img src="./media/characters.svg"></button>
           <div id="map"></div>
        </div>
        `;

        const map = L.map('map').setView([latitude, longitude], 16);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })
            .addTo(map);

       // L.marker([latitude, longitude]).addTo(map)
       //     .bindPopup('You are here')
       //     .openPopup();

        function custumIcon (uniqID) {
                let customIcon = L.divIcon({
                 html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="37" viewBox="0 0 30 37">
                        <g filter="url(#filter0_d_60_31)" id="iconSVG_${uniqID}">
                        <circle cx="15" cy="11" r="11" fill="black"/>
                            <path d="M15.1308 28.0503L6.36776 17.6064L23.759 17.4947L15.1308 28.0503Z" fill="black"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_60_31" x="0" y="0" width="30" height="36.0503" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_31"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_31" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                `,
                iconSize: [32, 37], 
                iconAnchor: [15, 18],
                shadowAnchor: [5, 45],
                popupAnchor: [-3, -76],
            });
            return customIcon
        }


        const customControlInstance = new CustomControl({ position: 'bottomleft' });
        customControlInstance.addTo(map);

        document.querySelector("#notes").addEventListener("click", () => {
            renderNotes()
        })

        document.querySelector("#characters").addEventListener("click", () => {
            renderCharacters()
        })

        level.forEach(level => {
            L.marker([level.latitude, level.longitude], {icon: custumIcon(level.name)})
            .addTo(map)
            .on("click", () => {
                styleSVGElement(level, "green")
                const container = customControlInstance.getContainer();
                if(container.innerHTML !== ""){
                    styleSVGElement(level, "black")
                    container.innerHTML = ``;
                } else {
                    container.innerHTML = `
                    <div class="temporaryContent">
                        <div id="topContainer">
                            <button>Jag är här</button>
                        </div>
                        <div class="content">
                            <h2>Ledtråd</h2>
                            <p>${level.clue}</p>
                            </div>
                    </div>
                `;

                container.querySelector("button").addEventListener("click", () => {
                    switch (level.type) {
                         case "QR":
                             renderQRscann(level);
                             break;
                         case "IMG":
                             renderQRscann(level);
                             break;
                         case "LEADER":
                             findLeader();
                             break; 
                        case "ANALOG":
                             // function for analog challanges??
                             break;                       
                        }
                        container.innerHTML = ``;
                    })
                }                
            })  
        })  
    }) 
}

function renderNotes() {

    let previousContent = window.localStorage.getItem("notes")

    dialog.show()
    dialog.setAttribute("id", "notesContainer")

    dialog.innerHTML = `
    <div id="topContainer">
        <img class="exit" src="media/exit.svg">
    </div>
    <h2 id="notesHeader">ANTECKNINGAR</h2>
    <textarea type="text" id="notesInput">${previousContent}</textarea>
    `;

    dialog.querySelector(".exit").addEventListener("click", () => {
        let textContent = dialog.querySelector("textarea").value
        window.localStorage.setItem("notes", textContent)
        endSession()
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

    endSession(".exit", renderGame)
}

function renderSettings(){

    dialog.show()
    dialog.setAttribute("id", "settings")

    dialog.innerHTML = `
        <h2>Settings</h2>
          <div id="topContainer">
        <img class="exit" src="media/exit.svg">
        </div>
        <div id="contentSettings">
            <button>Logout</button>
        </div>
    `;

    dialog.querySelector("button").addEventListener("click", () => {
        localStorage.remove("user")
        dialog.close()
    })

    endSession()
}

function renderAboutUs(){
    main.innerHTML = `
    <div>
    </div>`
}

