import { swapStyleSheet } from "./utilities/cssSwap.js";
import { endSession } from "./utilities/endSession.js";
import { main, dialog, CustomControl, globalHolder } from "./utilities/variable.js";
import { renderQRscann, findLeader } from "./gameCenter.js";
import { characters } from "./API/characters.js";
import { styleSVGElement } from "./utilities/styleElement.js";
import { levelCount } from "./utilities/levelCounter.js"


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

export async function renderGame() {
    //SAMPLE OF NAME FOR GLOBAL HOLDERS: 
    let testlevelOne = ["Alex", "Mickan", "Ove", "Anette"];
    let testlevelTwo = ["Ludde", "imgFindMyIphone", "imgMeeting", "imgMap", "imgDiary", "findLeader"];

    // testlevelOne.forEach(level => {
    //     globalHolder.push("levelOne", level)
    // })

    console.log(globalHolder.levels)
    let level = levelCount()
    console.log(level)
    swapStyleSheet("CSS/homePage.css")

    const watchID = navigator.geolocation.watchPosition(position => {
        const { latitude, longitude } = position.coords;

        main.innerHTML = `
        ${renderHeader().outerHTML}
        <div class="helpers">
           <div id="map"></div>
        </div>
        `;

        document.querySelector("#notes").addEventListener("click", () => {
            renderNotes()
        })

        document.querySelector("#characters").addEventListener("click", () => {
            renderCharacters()
        })

        document.querySelector("#info").addEventListener("click", () => {
            renderAboutUs()
        })

        document.querySelector("#settings").addEventListener("click", () => {
            renderSettings()
        })

        const map = L.map('map').setView([latitude, longitude], 16);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })
            .addTo(map);

        // L.marker([latitude, longitude]).addTo(map)
        //     .bindPopup('You are here')
        //     .openPopup();

        function custumIcon(uniqID) {
            let customIcon = L.divIcon({
                html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <g clip-path="url(#clip0_332_2)" id="iconSVG_${uniqID}">
                            <path d="M4 12C4 8.8174 5.26428 5.76515 7.51472 3.51472C9.76515 1.26428 12.8174 0 16 0C19.1826 0 22.2348 1.26428 24.4853 3.51472C26.7357 5.76515 28 8.8174 28 12C28 20 16 32 16 32C16 32 4 20 4 12ZM11 12C11 13.3261 11.5268 14.5979 12.4645 15.5355C13.4021 16.4732 14.6739 17 16 17C17.3261 17 18.5979 16.4732 19.5355 15.5355C20.4732 14.5979 21 13.3261 21 12C21 10.6739 20.4732 9.40215 19.5355 8.46447C18.5979 7.52678 17.3261 7 16 7C14.6739 7 13.4021 7.52678 12.4645 8.46447C11.5268 9.40215 11 10.6739 11 12Z" fill="#D99D04"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_332_2">
                                <rect width="32" height="32" fill="white"/>
                            </clipPath>
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

        level.forEach(level => {
            L.marker([level.latitude, level.longitude], { icon: custumIcon(level.name) })
                .addTo(map)
                .on("click", () => {
                    styleSVGElement(level, "#A7A7A7")
                    const container = customControlInstance.getContainer();
                    if (container.innerHTML !== "") {
                        styleSVGElement(level, "#D99D04")
                        container.innerHTML = ``;
                    } else {
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
        let textContent = dialog.querySelector("textarea").value
        window.localStorage.setItem("notes", textContent)
        dialog.style.display = `none`;
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

    console.log("hej");

    dialog.querySelector("button").addEventListener("click", () => {
        dialog.style.display = `none`;
        localStorage.remove("user")
        dialog.close()
    })

    dialog.querySelector(".exit").addEventListener("click", () => {
        dialog.style.display = `none`;
        endSession()
    })

    endSession()
}

function renderAboutUs() {
    main.innerHTML = `
    <div>
    </div>`
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