import { swapStyleSheet } from "./utilities/cssSwap.js";
import { endSession } from "./utilities/endSession.js";
import { main, dialog, globalHolder} from "./utilities/variable.js";
import { renderQRscann, findLeader, userArrival } from "./gameCenter.js";
import { characters } from "./API/characters.js";
import { levelCount} from "./utilities/levelCounter.js"
import { styleSVGElement } from "./utilities/styleElement.js";

export function renderHomepage() {

    swapStyleSheet("CSS/homePage.css")

    main.innerHTML = `
    <div id="contentHome">
    <div id="topContainer">
        <ion-icon id="settings" name="settings-outline"></ion-icon>
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

window.renderGame = async function renderGame(){

    //SAMPLE OF NAME FOR GLOBAL HOLDERS: 
    let testlevelOne = ["Alex", "Mickan", "Ove", "Anette"];
    let testlevelTwo = ["Ludde", "imgFindMyIphone", "imgMeeting", "imgMap", "imgDiary", "findLeader"];
    
    //UPDATE LEVELS 
    //testlevelOne.forEach( level => {
    //    globalHolder.push("levelOne", level)
    //})

    console.log(globalHolder.levels)
    let level = levelCount()
    console.log(level)
    swapStyleSheet("CSS/homePage.css")

    main.innerHTML = `
        <div class="helpers">
            <button id="notes">
                <ion-icon name="create-outline"></ion-icon>
            </button>
            <button id="characters">
                <ion-icon name="people-outline"></ion-icon>
            </button>
           <div id="map"></div>
           <div class="containerTemp"></div>
        </div>
        `;

    document.querySelector("#notes").addEventListener("click", () => {
        renderNotes()
    })

    document.querySelector("#characters").addEventListener("click", () => {
        renderCharacters()
    })

    let mapContainer = main.querySelector("#map");
     const watchID = navigator.geolocation.watchPosition(position => {
        const { latitude, longitude } = position.coords;
        

        const mapOptions = {
            center: { lat: latitude, lng: longitude },
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.SATELLITE, //change for mapTypeId = HYBRID, ROADMAP, TERRAIN
            disableDefaultUI: true,
        };

        const map = new google.maps.Map(mapContainer, mapOptions);

        const selfMarker = new google.maps.Marker({
            position: { lat: latitude, lng: longitude },
            map: map,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 5,
                fillColor: "white",
                fillOpacity: 1,
                strokeColor: "white"
            }
        });
        
        level.forEach( level => {
            const marker = new google.maps.Marker({
                position: { lat: level.latitude, lng: level.longitude }, 
                map,
                id:  `iconSVG_${level.name}`,   
                
                icon: {
                    url: "media/pin.svg",
                    },
                })
            marker.addListener("click", () => {
                styleSVGElement(marker, "#606060")
               renderInfo(level, map, marker);
            })
        })
    });

function renderInfo(level, map, marker) {
    const currentIconUrl = marker.getIcon().url;

    map.addListener("click", () => {
        if (container !== "") {
            container.innerHTML = "";

            if (currentIconUrl === "media/Pin-chosen.svg") {
                marker.setIcon({ url: "media/pin.svg" });
            } else {
                marker.setIcon({ url: "media/Pin-chosen.svg" });
            }
        }
    });

    let container = main.querySelector(".containerTemp");

    container.innerHTML = `
        <div class="temporaryContent">
            <div class="content">
                <h2>LEDTRÅD</h2>
                <p>${level.clue}</p>
            </div>
            <div id="bottomContainer">
                <button>Jag är här</button>
            </div>
        </div>
    `;

    main.append(container);

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
                userArrival();
                break;
        }
        container.innerHTML = "";
    });
}


}

function renderNotes() {

    let previousContent = window.localStorage.getItem("notes")

    dialog.show()
    dialog.setAttribute("id", "notesContainer")

    dialog.innerHTML = `
    <div id="topContainer">
        <ion-icon class="exit" name="close-outline"></ion-icon>
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

function renderCharacters() {

    main.innerHTML = `
    <div id="topContainer">
        <ion-icon class="exit" name="close-outline"></ion-icon>
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
                <div class="imgBackground">
                    <img src="${character.img}" alt="${character.name}">
                </div>                  
                
                 <h3>${character.name}</h3>
            </div>
            <p>${character.description}</p>
        `;
        containerDom.append(characterDom);
    });

    endSession(".exit", renderGame)
}

function renderSettings() {
    dialog.show()
    dialog.setAttribute("id", "settingsDialog")

    dialog.innerHTML = `
        <div id="topContainer">
            <ion-icon class="exit" name="close-outline"></ion-icon>
        </div>
        <h2>SETTINGS</h2>
        <div id="contentSettings">
            <button>Logout</button>
        </div>
    `;

    console.log("hej");

    dialog.querySelector("button").addEventListener("click", () => {
        localStorage.remove("user")
        dialog.close()
    })

    dialog.querySelector(".exit").addEventListener("click", () => {
        endSession()
    })

    endSession()
}

function renderAboutUs(){
    main.innerHTML = `
    <div>
    </div>`
}

