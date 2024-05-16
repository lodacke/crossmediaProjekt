import { swapStyleSheet } from "./utilities/cssSwap.js";
import { endSession } from "./utilities/endSession.js";
import { main, body, dialog, globalHolder } from "./utilities/variable.js";
import { renderAnalogChallange, renderQRscann, addCode } from "./gameCenter.js";
import { characters } from "./API/characters.js";
import { infoAboutUs, intro } from "./API/aboutUs.js";
import { findLeader, levelCount } from "./utilities/levelCounter.js"
import { endGame } from "./gameCenter.js"
import { renderLogin } from "./registerLogin.js"
import { getCurrentTime } from "./utilities/getCurrentTime.js";

export function renderHomepage() {

    swapStyleSheet("CSS/homePage.css")
    window.location.hash = "home";
    body.setAttribute("style", "background-image: url('media/moln.jpeg');");

    main.innerHTML = `
        <div id="contentHome">
            <div id="topContainer">
                <img src="media/solsidan.png"></img> 
            </div>
            <section>
                <button id="game">STARTA SPELET</button>
                <button id="scoreBoard">TOPPLISTA</button>
                <button id="aboutUs">HUR SPELAR MAN?</button>       
                <button id="settings">INSTÄLLNINGAR</button>       
            </section>  
        </div>   
    `;

    main.querySelector("#game").addEventListener("click", () => {
        body.removeAttribute("style", "background-image: url('../media/moln.jpeg');");
        renderGame()
    })

    main.querySelector("#scoreBoard").addEventListener("click", () => {
        renderScoreBoard()
    })

    main.querySelector("#aboutUs").addEventListener("click", () => {
        renderAboutUs()
    })

    main.querySelector("#settings").addEventListener("click", () => {
        renderSettings(false)
    })

}

export async function renderGame() {
    //window.location.reload()

    let holdStart = globalHolder.get("StartTime");
    window.location.hash = "#game";

    if (!holdStart) {
        let startTime = getCurrentTime();
        globalHolder.set("StartTime", startTime) // set startTime to use in end function later
        introGame()
    }

    let level = await levelCount()

    swapStyleSheet("CSS/homePage.css")

    main.innerHTML = `
        ${renderHeader().outerHTML}
        <button id="notes">
            <ion-icon name="create-outline"></ion-icon>
        </button>
        <div class="helpers">
           <div id="map"></div>
           <div class="containerTemp"></div>
           <button class="test">test</button>
        </div>
        `;

    const arrow = document.querySelector("#menu #dropArrow");
    const header = document.querySelector("header");

    main.querySelector(".test").addEventListener("click", addCode)

    arrow.addEventListener("click", originalEventHandler);

    function originalEventHandler() {
        arrow.style.transform = `rotate(180deg)`;
        setTimeout(() => {
            header.style.transform = `translateY(-28vh)`;
            header.style.transition = `transform 1s ease`;
        }, 10);

        arrow.removeEventListener("click", originalEventHandler);
    }

    document.querySelectorAll("header button").forEach(button => {
        button.addEventListener("click", () => {
            arrow.style.transform = ``;
            header.style.transform = `translateY(-65vh)`;
            header.style.transition = `transform 1s ease`;

            arrow.addEventListener("click", originalEventHandler);
        })
    })

    document.querySelector("#quit").addEventListener("click", () => {
        window.location.hash = "";
        globalHolder.reset()
        endGame()
    })

    document.querySelector("#notes").addEventListener("click", () => {
        renderNotes()
    })

    document.querySelector("#leaderboard").addEventListener("click", () => {
        renderScoreBoard()
    })

    document.querySelector("#characters").addEventListener("click", () => {
        renderCharacters()
    })

    main.querySelector("#info").addEventListener("click", () => {
        renderAboutUs()
    })

    main.querySelector("#settings").addEventListener("click", () => {
        renderSettings(true)
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
                strokeWeight: 0.5,
                optimized: false
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
                <path d="M4 12C4 8.8174 5.26428 5.76515 7.51472 3.51472C9.76515 1.26428 12.8174 0 16 0C19.1826 0 22.2348 1.26428 24.4853 3.51472C26.7357 5.76515 28 8.8174 28 12C28 20 16 32 16 32C16 32 4 20 4 12ZM11 12C11 13.3261 11.5268 14.5979 12.4645 15.5355C13.4021 16.4732 14.6739 17 16 17C17.3261 17 18.5979 16.4732 19.5355 15.5355C20.4732 14.5979 21 13.3261 21 12C21 10.6739 20.4732 9.40215 19.5355 8.46447C18.5979 7.52678 17.3261 7 16 7C14.6739 7 13.4021 7.52678 12.4645 8.46447C11.5268 9.40215 11 10.6739 11 12Z" fill="#D5D5D5"/>
            </g>
            <defs>
                <clipPath id="clip0_332_2">
                    <rect width="32" height="32" fill="white"/>
                </clipPath>
            </defs>
        </svg>
        `;

        let DONEiconURL = 'data:image/svg+xml;charset=UTF-8;base64,' + btoa(DONEiconSVG);

        let doneTask = [];
        for (const key in globalHolder.levels) {
            if (Object.hasOwnProperty.call(globalHolder.levels, key)) {
                let value = globalHolder.levels[key];
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

function introGame() {
    dialog.show()
    dialog.style.display = `flex`;
    document.querySelector(".overlay").style.display = `block`;
    dialog.setAttribute("id", "welcomeDialog")
    dialog.innerHTML = `
    <h2>Hej!</h2>
    <p>${intro}</p>
    <button>FORTSÄTT</button>
    `;

    dialog.querySelector("button").addEventListener("click", () => {
        document.querySelector(".overlay").style.display = `none`;
        dialog.style.display = `none`;
        dialog.close()
        renderGame()
    })
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
                <p>${level.placement}</p>
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
                renderAnalogChallange(level);
                break;
            case "END":
                endGame()
        }
        container.innerHTML = "";
    });
}

function renderNotes() {

    let previousContent = window.localStorage.getItem("notes")
    if (previousContent == "null") {
        previousContent = `Skriv ner dina anteckningar...`;
    }

    dialog.show()
    dialog.style.display = `flex`;
    dialog.setAttribute("id", "notesContainer")

    dialog.innerHTML = `
        <textarea type="text" id="notesInput">${previousContent}</textarea>
        <button id="return">
            <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
    `;

    dialog.querySelector("#return").addEventListener("click", () => {
        let textContent = dialog.querySelector("textarea").value;
        dialog.style.display = `none`;
        window.localStorage.setItem("notes", textContent)
        endSession()
    })
}

function renderCharacters() {

    const charactersPopUp = document.getElementById("popUp");
    charactersPopUp.classList.add("charactersPopUp");
    charactersPopUp.style.display = "block";

    let containerDom = charactersPopUp.querySelector(".swiper-wrapper");
    // reset
    containerDom.innerHTML = "";

    characters.forEach(character => {
        let characterDom = document.createElement("div");
        characterDom.classList.add("character");
        characterDom.classList.add("swiper-slide");

        characterDom.innerHTML = `
            <div class="topCharacter">
                <div class="imgBackground">
                    <div class="imgSpotlight"></div>
                    <img src="${character.img}" alt="${character.name}">
                </div>                  
                
                 <h2>${character.name}</h2>
            </div>
            <p>${character.description}</p>
        `;
        containerDom.append(characterDom);
    });

    charactersPopUp.querySelector(".exit").addEventListener("click", () => {
        charactersPopUp.classList.remove("charactersPopUp");
        charactersPopUp.style.display = "none";
    })
}

function renderSettings(inGame) {
    dialog.show()
    dialog.style.display = `block`;
    dialog.setAttribute("id", "settingsDialog")
    document.querySelector(".overlay").style.display = `block`;

    dialog.innerHTML = `
        <div id="topContainer">
            <ion-icon class="exit" name="close-outline"></ion-icon>
        </div>
        <h2>SETTINGS</h2>
        <div id="contentSettings">
            <button>Logga ut</button>
        </div>
    `;

    if (inGame) {
        document.getElementById("contentSettings").innerHTML += `
            <button id="endGame">Avsluta</button>
        `;

        dialog.querySelector("#endGame").addEventListener("click", () => {
            window.location.hash = "";
            dialog.close()
            dialog.style.display = `none`;
            document.querySelector(".overlay").style.display = `none`;

            endGame()
        })
    }

    dialog.querySelector("button").addEventListener("click", () => {
        globalHolder.reset()
        localStorage.removeItem("user");
        dialog.removeAttribute("id", "settingsDialog")
        dialog.close()
        dialog.style.display = `none`;
        document.querySelector(".overlay").style.display = `none`;
        body.removeAttribute("style", "background-image: url('../media/moln.jpeg');");

        renderLogin()
    })

    dialog.querySelector(".exit").addEventListener("click", () => {
        dialog.close()
        dialog.style.display = `none`;
        document.querySelector(".overlay").style.display = `none`;

        endSession()
    })

    endSession()
}

function renderAboutUs() {

    const aboutUsPopUp = document.getElementById("popUp");
    aboutUsPopUp.classList.add("aboutUsPopUp");
    aboutUsPopUp.style.display = "block";
    document.querySelector(".overlay").style.display = `block`;

    let containerDom = aboutUsPopUp.querySelector(".swiper-wrapper");
    // reset
    containerDom.innerHTML = "";

    infoAboutUs.forEach(info => {
        let infoDom = document.createElement("div");
        infoDom.classList.add("swiper-slide");

        infoDom.innerHTML = `
            <h2>${info.title}</h2>
            <p>${info.text}</p>
        `;
        containerDom.append(infoDom);
    });

    endSession(".exit", () => {
        aboutUsPopUp.style.display = "none";
        aboutUsPopUp.classList.remove("aboutUsPopUp");
        document.querySelector(".overlay").style.display = `none`;
    })
}

function renderHeader() {
    const header = document.createElement("header");

    header.innerHTML = `
        <div id="menu">
            <img src="media/menuHeader.png">
            <div id="menuButtons">
                <button id="quit">AVSLUTA</button>
                <button id="leaderboard">TOPPLISTA</button>
                <button id="characters">KARAKTÄRER</button>
                <button id="info">HUR SPELAR MAN?</button>
                <button id="settings">INSTÄLLNINGAR</button>
            </div>
            
            <button id="dropArrow">
                <ion-icon name="chevron-down"></ion-icon>
            </button>
        </div>  
    `;

    return header;
}

export async function renderScoreBoard(user, duration, userScore) {

    // swapStyleSheet("CSS/scoreBoard.css");

    dialog.show()
    dialog.style.display = `flex`;
    dialog.setAttribute("id", "scoreboardDialog")

    dialog.innerHTML = `
        <div id="container">
            
            <h2>TOPPLISTA</h2>
            <div id="content">
                <div class="top3Users"></div>
                <div class="allUsers"></div>
            </div>
            <div id="topContainer">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </div>
        </div>
    `;

    let top3Dom = dialog.querySelector(".top3Users");
    let containerUser = dialog.querySelector(".allUsers");

    try {
        const response = await fetch("API/users.json");
        if (!response.ok) {
            console.log("can get users")
        }
        const users = await response.json();
        let sortedUsers = users.sort((a, b) => {

            let maxPointsA = (a.games && a.games.length > 0) ? Math.max(...a.games.map(game => game.points)) : 0;
            let maxPointsB = (b.games && b.games.length > 0) ? Math.max(...b.games.map(game => game.points)) : 0;
            return maxPointsB - maxPointsA;
        });

        const top3Users = sortedUsers.slice(0., 3);
        sortedUsers = sortedUsers.slice(3., 8);
        console.log(top3Users);
        console.log(sortedUsers);

        top3Users.forEach((user, index) => {

            if (user.games && user.games.length > 0) {
                let dom = document.createElement("div");
                dom.classList.add("userContainerTop3");

                let maxPoints = Math.max(...user.games.map(game => game.points));

                index++;
                let content = ``;
                if (index == 1) {
                    content = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <path d="M43.7503 13.2348C44.5791 13.2348 45.374 13.564 45.96 14.1501C46.5461 14.7361 46.8753 15.531 46.8753 16.3598C46.8753 17.1886 46.5461 17.9834 45.96 18.5695C45.374 19.1555 44.5791 19.4848 43.7503 19.4848C43.5378 19.4673 43.3281 19.4254 43.1253 19.3598L42.2972 19.0785C41.9328 18.8944 41.6129 18.6331 41.3597 18.3129L40.8284 17.4535C40.6774 17.0975 40.5977 16.7152 40.594 16.3285C40.5981 15.9181 40.683 15.5126 40.8438 15.135C41.0047 14.7574 41.2383 14.4152 41.5314 14.1279C41.8245 13.8406 42.1713 13.6139 42.552 13.4606C42.9327 13.3074 43.3399 13.2306 43.7503 13.2348ZM25.0003 10.1098C25.7725 10.1098 26.5134 10.4154 27.0609 10.96C27.6084 11.5046 27.918 12.2438 27.9222 13.016C27.9163 13.4855 27.795 13.9464 27.5688 14.3579C27.3426 14.7694 27.0186 15.1188 26.6253 15.3754L26.094 15.6254C25.7504 15.7615 25.3854 15.8356 25.0159 15.8441C24.6395 15.8388 24.2678 15.7591 23.9222 15.6098L23.6097 15.4223C23.1467 15.1868 22.7567 14.8296 22.4814 14.3892C22.2061 13.9487 22.056 13.4416 22.0472 12.9223C22.0636 12.1542 22.3835 11.4238 22.9369 10.8909C23.4903 10.358 24.2321 10.0659 25.0003 10.0785V10.1098ZM18.7503 25.5629L23.5159 17.8754C24.4774 18.2088 25.5232 18.2088 26.4847 17.8754L31.2503 25.5316L40.1253 20.016C40.3995 20.2843 40.7036 20.5202 41.0315 20.7191L36.8128 33.391H13.2034L8.98467 20.7191C9.31265 20.5202 9.61672 20.2843 9.89092 20.016L18.7503 25.5629ZM6.2503 13.7191C6.60175 13.7171 6.95012 13.7848 7.27523 13.9183C7.60033 14.0518 7.8957 14.2486 8.14422 14.4971C8.39274 14.7456 8.58947 15.041 8.72301 15.3661C8.85655 15.6912 8.92424 16.0396 8.92217 16.391C8.9174 16.7174 8.85388 17.0403 8.73467 17.3441L8.28155 18.0785C7.99483 18.4217 7.62612 18.6869 7.2096 18.8496C6.79308 19.0123 6.34222 19.0672 5.89883 19.0092C5.45543 18.9512 5.03385 18.7823 4.67315 18.518C4.31245 18.2537 4.02432 17.9026 3.83545 17.4973C3.64659 17.0919 3.56311 16.6455 3.59276 16.1993C3.6224 15.7531 3.76421 15.3216 4.00503 14.9448C4.24586 14.5681 4.57791 14.2582 4.9704 14.0439C5.36289 13.8296 5.80313 13.7179 6.2503 13.7191ZM36.9222 40.1879H13.1253V36.7816H36.9222V40.1879Z" fill="#E6B400"/>
                  </svg>`;
                } else if (index == 2) {
                    content = `<h1>2</h1>`;
                } else {
                    content = `<h1>3</h1>`;
                }

                dom.innerHTML = `
                    ${content}
                    <div>
                        <h3>${user.username}</h3>
                        <p>${maxPoints}p</p>
                    </div>
                    
                `;

                top3Dom.append(dom);
            }
        });

        let startIndex = 3;
        sortedUsers.forEach((user, index) => {

            if (user.games && user.games.length > 0) {
                index += startIndex;
                let dom = document.createElement("div");
                dom.classList.add("userContainer");

                let maxPoints = Math.max(...user.games.map(game => game.points));

                dom.innerHTML = `
                    <section>
                        <h1>${index + 1}</h1>
                        <h3>${user.username}</h3>
                    </section>
                    <p>${maxPoints}p</p>
                `;

                containerUser.append(dom);
            }
        });

    } catch (error) {
        console.error(error);
    }

    dialog.querySelector("#topContainer ion-icon").addEventListener("click", () => {
        dialog.close()
        dialog.style.display = `none`;
    })
}
