import { swapStyleSheet } from "./utilities/cssSwap.js";
import { endSession } from "./utilities/endSession.js";
import { main, dialog, globalHolder } from "./utilities/variable.js";
import { renderQRscann, userArrival } from "./gameCenter.js";
import { characters } from "./API/characters.js";
import { levelCount } from "./utilities/levelCounter.js"
import { endGame } from "./gameCenter.js"
import { renderLogin } from "./registerLogin.js"
import { getCurrentTime } from "./utilities/getCurrentTime.js";

export function renderHomepage() {

    swapStyleSheet("CSS/homePage.css")
    window.location.hash = "home";

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

export function renderGame(){
    
    let holdStart = globalHolder.get("StartTime");
    window.location.hash = "#game";

    if (!holdStart) {
        let startTime = getCurrentTime();
        globalHolder.set("StartTime", startTime) // set startTime to use in end function later
    }

    //SAMPLE OF NAME FOR GLOBAL HOLDERS: 
    let testlevelOne = ["Alex", "Mickan", "Ove", "Anette", "Fredde"];
    let testlevelTwo = ["Ludde", "imgFindMyIphone", "imgMeeting", "imgMap", "imgDiary", "findLeader"];

    //UPDATE LEVELS 
    //testlevelTwo.forEach( level => {
    //    globalHolder.push("levelTwo", level)
    //})

    let level = levelCount()

    swapStyleSheet("CSS/homePage.css")

    main.innerHTML = `
        ${renderHeader().outerHTML}
        <div class="helpers">
           <div id="map"></div>
           <div class="containerTemp"></div>
        </div>
        `;

    main.querySelector("#notes").addEventListener("click", () => {
        renderNotes()
    })

    main.querySelector("#characters").addEventListener("click", () => {
        renderCharacters()
    })

    main.querySelector("#info").addEventListener("click", () => {
        renderAboutUs()
    })

    main.querySelector("#settings").addEventListener("click", () => {
        renderSettings()
    })


    let mapContainer = main.querySelector("#map");
    const watchID = navigator.geolocation.watchPosition(position => {
        const { latitude, longitude } = position.coords;

        const mapOptions = {
            center: { lat: latitude, lng: longitude },
            zoom: 13,
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
                strokeWeight: 1,
            },
            animation: google.maps.Animation.DROP
        });

        let iconSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <g clip-path="url(#clip0_332_2)">
                <path d="M4 12C4 8.8174 5.26428 5.76515 7.51472 3.51472C9.76515 1.26428 12.8174 0 16 0C19.1826 0 22.2348 1.26428 24.4853 3.51472C26.7357 5.76515 28 8.8174 28 12C28 20 16 32 16 32C16 32 4 20 4 12ZM11 12C11 13.3261 11.5268 14.5979 12.4645 15.5355C13.4021 16.4732 14.6739 17 16 17C17.3261 17 18.5979 16.4732 19.5355 15.5355C20.4732 14.5979 21 13.3261 21 12C21 10.6739 20.4732 9.40215 19.5355 8.46447C18.5979 7.52678 17.3261 7 16 7C14.6739 7 13.4021 7.52678 12.4645 8.46447C11.5268 9.40215 11 10.6739 11 12Z" fill="#ECAD0A"/>
            </g>
            <defs>
                <clipPath id="clip0_332_2">
                    <rect width="32" height="32" fill="white"/>
                </clipPath>
            </defs>
        </svg>
        `;

        let iconURL = 'data:image/svg+xml;charset=UTF-8;base64,' + btoa(iconSVG);

        let DONEiconSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <g clip-path="url(#clip0_332_2)">
                <path d="M4 12C4 8.8174 5.26428 5.76515 7.51472 3.51472C9.76515 1.26428 12.8174 0 16 0C19.1826 0 22.2348 1.26428 24.4853 3.51472C26.7357 5.76515 28 8.8174 28 12C28 20 16 32 16 32C16 32 4 20 4 12ZM11 12C11 13.3261 11.5268 14.5979 12.4645 15.5355C13.4021 16.4732 14.6739 17 16 17C17.3261 17 18.5979 16.4732 19.5355 15.5355C20.4732 14.5979 21 13.3261 21 12C21 10.6739 20.4732 9.40215 19.5355 8.46447C18.5979 7.52678 17.3261 7 16 7C14.6739 7 13.4021 7.52678 12.4645 8.46447C11.5268 9.40215 11 10.6739 11 12Z" fill="#689ac8"/>
            </g>
            <defs>
                <clipPath id="clip0_332_2">
                    <rect width="32" height="32" fill="white"/>
                </clipPath>
            </defs>
        </svg>
        `;

        let DONEiconURL = 'data:image/svg+xml;charset=UTF-8;base64,' + btoa(DONEiconSVG);

        let globalCounter = globalHolder.get("levels")
        let doneTask = [];
        for (const key in globalCounter) {
        if (Object.hasOwnProperty.call(globalCounter, key)) {
                const value = globalCounter[key];
                if (Array.isArray(value)) {
                    doneTask.push(...value);
                } else {
                    doneTask.push(value);
                }
            }
        }

        level.forEach((level, index) => {
            let markerOptions = {
                position: { lat: level.latitude, lng: level.longitude },
                map,
                icon: {
                    url: iconURL,
                },
                animation: google.maps.Animation.DROP
            };

            if (doneTask.includes(level.name)) {
                markerOptions.icon.url = DONEiconURL;
            }

            setTimeout(() => {
                const marker = new google.maps.Marker(markerOptions);

                marker.addListener("click", () => {
                    renderInfo(level, map, marker);
                });
            }, index * 200); 
        });
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
    dialog.style.display = `flex`;
    dialog.setAttribute("id", "notesContainer")

    dialog.innerHTML = `
    <div id="topContainer">
        <ion-icon class="exit" name="close-outline"></ion-icon>
    </div>
    <h2 id="notesHeader">ANTECKNINGAR</h2>
    <textarea type="text" id="notesInput">${previousContent}</textarea>
    `;

    dialog.querySelector(".exit").addEventListener("click", () => {
        let textContent = dialog.querySelector("textarea").value;
        dialog.style.display = `none`;
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
            <button id="endGame">Avsluta</button>
        </div>
    `;

    dialog.querySelector("button").addEventListener("click", () => {
        globalHolder.reset()
        localStorage.removeItem("user");
        dialog.removeAttribute("id", "settingsDialog")
        dialog.close()
        dialog.style.display = `none`;
        renderLogin()
    })

    dialog.querySelector(".exit").addEventListener("click", () => {
        dialog.style.display = `none`;
        endSession()
    })

    dialog.querySelector("#endGame").addEventListener("click", () => {
        window.location.hash = "";
        endGame()
    })

    endSession()
}

function renderAboutUs() {
    main.innerHTML = `
    <div id="container">
        <div id="topContainer"><img src="media/return.svg"</div>
    </div>
    `;

    main.querySelector("img").addEventListener("click", () => {
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
export async function renderScoreBoard(user, duration, userScore){

    swapStyleSheet("CSS/scoreBoard.css");

    main.innerHTML = `
    <div id="container">
        <div id="topContainer"><img src="media/return.svg"></div>
        <h1>TOPPLISTA</h1>
        <div id="content">
            <div class="userContainer">
            </div>
            <div class="allUsers"></div>
        </div>
    </div>
    `;

    let userDom = main.querySelector(".userContainer")

    if(user && duration && userScore){
        userDom.innerHTML = `
        <h1>${user}</h1>
        <p>${duration} min</p>
        <p>${userScore} p</p>
        `;
    }

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
            if (user.games.length > 0) {
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

    main.querySelector("img").addEventListener("click", () => {
        renderHomepage()
    })
}
