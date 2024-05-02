import { swapStyleSheet } from "./utilities/cssSwap.js";
import { endSession } from "./utilities/endSession.js";
import { main, dialog, globalHolder} from "./utilities/variable.js";
import { renderQRscann, findLeader, userArrival } from "./gameCenter.js";
import { characters } from "./API/characters.js";
import { levelCount} from "./utilities/levelCounter.js"
import { styleSVGElement } from "./utilities/styleElement.js";
import { endGame } from "./gameCenter.js"
import { renderLogin } from "./registerLogin.js"
import { getCurrentTime } from "./utilities/getCurrentTime.js";

export function renderHomepage() {

    swapStyleSheet("CSS/homePage.css")

    main.innerHTML = `
    <div id="contentHome">
    <div id="topContainer">
        <img src="media/settings.svg" id="settings" name="settings-outline"></img>
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
    let holdStart = globalHolder.get("StartTime");

    if(!holdStart){
        let startTime = getCurrentTime();
        globalHolder.set("StartTime", startTime) // set startTime to use in end function later
    }

    //SAMPLE OF NAME FOR GLOBAL HOLDERS: 
    let testlevelOne = ["Alex", "Mickan", "Ove", "Anette"];
    let testlevelTwo = ["Ludde", "imgFindMyIphone", "imgMeeting", "imgMap", "imgDiary", "findLeader"];
    
    //UPDATE LEVELS 
    //testlevelTwo.forEach( level => {
    //    globalHolder.push("levelTwo", level)
    //})

    let level = levelCount()
    swapStyleSheet("CSS/homePage.css")

    main.innerHTML = `
        <div class="helpers">
        <button id="settings">Avsluta</button>
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

    document.querySelector("#settings").addEventListener("click", () => {
        window.location.hash = "";
        endGame()
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
                fillColor: "#689ac8",
                fillOpacity: 1,
                strokeColor: "black",
                strokeWeight: 1
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
                styleSVGElement(level.name, "#606060")
               renderInfo(level, map, marker);
            })

        })
    });
}

function renderInfo(level, map) {

    map.addListener("click", () => {
        if (container !== "") {
            container.innerHTML = "";
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
                userArrival(level);
                break;
            case "END":
                endGame()
        }
        container.innerHTML = "";
    });
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
    dialog.style.display = `block`;
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

    dialog.querySelector("button").addEventListener("click", () => {
        globalHolder.reset()
        dialog.removeAttribute("id", "settingsDialog")
        dialog.close()
        renderLogin()
    })

    dialog.querySelector(".exit").addEventListener("click", () => {
        dialog.style.display = `none`;
        endSession()
    })

    endSession()
}

function renderAboutUs(){
        main.innerHTML = `
    <div id="container">
        <div id="topContainer"><img src="media/return.svg"</div>
    </div>
    `;

    main.querySelector("img").addEventListener("click", () =>{
        renderHomepage()
    })
}

function renderHeader() {
    const header = document.createElement("header");
    header.innerHTML = `
        <div class="headerLeftCol">
            <button id="notes">
                <ion-icon name="create-outline"></ion-icon>
            </button>
            <button id="characters">
                <ion-icon name="people"></ion-icon>
            </button>
        </div>
        <div class="headerRightCol">
            <button id="info">
                <ion-icon name="information-circle-outline"></ion-icon>
            </button>
            <button id="settings">
                <ion-icon name="aperture"></ion-icon>
            </button>
        </div>
    `;

    return header;
}
export async function renderScoreBoard(){

    swapStyleSheet("CSS/scoreBoard.css");

    main.innerHTML = `
    <div id="container">
        <div id="topContainer"><img src="media/return.svg"></div>
        <h1>TOPPLISTA</h1>
        <div id="content">
            <div class="userDisplay"></div>
            <div class="allUsers"></div>
        </div>
    </div>
    `;

    let containerUser = main.querySelector(".allUsers");

    try {
        const response = await fetch("../API/users.json");
        if (!response.ok) {
            console.log("can get users")
        }
        const users = await response.json();
        users.sort((a, b) => {
            let maxPointsA = a.games.length > 0 ? Math.max(...a.games.map(game => game.points)) : 0;
            let maxPointsB = b.games.length > 0 ? Math.max(...b.games.map(game => game.points)) : 0;
            return maxPointsB - maxPointsA; 
        });

        users.forEach(user => {
            if(user.games.length > 0){
                let dom = document.createElement("div");
                dom.classList.add("userContainer");

                let maxPoints = user.games.length > 0 ? Math.max(...user.games.map(game => game.points)) : 0;

                    dom.innerHTML = `
                <h1>${user.username}</h2>
                <p>${maxPoints} p</p>
                `;

                containerUser.append(dom);  
                }
            });

        } catch (error) {
            console.error(error);
        }

    main.querySelector("img").addEventListener("click", () =>{
        renderHomepage()
    })
}
