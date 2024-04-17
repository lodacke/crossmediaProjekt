import { swapStyleSheet } from "./utilities/cssSwap.js";
import { endSession } from "./utilities/endSession.js";
import { main, dialog, CustomControl} from "./utilities/variable.js";
import { renderQRscann } from "./gameCenter.js";
import { levelOne, levelTwo, levelThree } from "./API/qlues.js";
import { characters } from "./API/characters.js";
import { globalHolder } from "./utilities/variable.js";

export function renderHomepage(){

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
        const storage = {};
        renderGame(storage)
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

export function renderGame(){

    console.log(globalHolder["levelOne"].length)

    swapStyleSheet("CSS/homePage.css")

    const watchID = navigator.geolocation.watchPosition(position => {
        const {latitude, longitude} = position.coords;

        main.innerHTML = `
        <div class="helpers">
            <button id="notes"><img src="./media/note.svg"></button>
            <button id="characters"><img src="./media/characters.svg"></button>
           <div id="map"></div>
        </div>
        `;

        var map = L.map('map').setView([latitude, longitude], 16);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})
            .addTo(map); 

        L.marker([latitude, longitude]).addTo(map)
            .bindPopup('You are here')
            .openPopup();

        let customIcon = L.icon({
            iconUrl: 'media/icon.svg',
            iconSize: [32, 92],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
            className: 'levelOne' 
        });

        const customControlInstance = new CustomControl({ position: 'bottomleft' });
        customControlInstance.addTo(map);

         document.querySelector("#notes").addEventListener("click", () => {
             renderNotes()
         })

         document.querySelector("#characters").addEventListener("click", () => {
             renderCharacters()
         })

         let level;

        if(globalHolder["levelOne"].length !== 6){
            level = levelOne;
        } if(globalHolder["levelTwo"].length !== 6){
            level = levelThree
        } else {
            level = levelTwo
        }

            level.forEach(level => {
                L.marker([level.latitude, level.longitude], {icon: customIcon})
                .addTo(map)
                .on("click", () => {
                    const container = customControlInstance.getContainer();

                    if(container.innerHTML !== ""){
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

                    container.querySelector("button").addEventListener("click",() => {
                        renderQRscann()
                        container.innerHTML = ``
                        })
                    }
                })
            })


    })    
}

function renderNotes(){

    let previousContent = window.localStorage.getItem("notes")

    dialog.show()
    dialog.setAttribute("id", "notesContainer")
    
    dialog.innerHTML = `
    <div id="topContainer">
        <img class="exit" src="media/exit.svg">
    </div>
    <h2 id="notesHeader">Notes</h2>
    <textarea type="text" id="notesInput">${previousContent}</textarea>
    `;

    dialog.querySelector(".exit").addEventListener("click", () => {
        let textContent = dialog.querySelector("textarea").value
        window.localStorage.setItem("notes", textContent)
        endSession()
    })
}

function renderSettings(){

    dialog.show()
    dialog.setAttribute("id","settings")

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

