import { conversations } from "./API/conversation.js";
import { levelTwo, levelThree } from "./API/qlues.js";
import { characters } from "./API/characters.js"
import { swapStyleSheet } from "./utilities/cssSwap.js";
import { parseText } from "./utilities/parse.js";
import { dialog, globalHolder, main } from "./utilities/variable.js";
import { renderHomepage, renderScoreBoard } from "./main.js";
import { getCurrentTime } from "./utilities/getCurrentTime.js";
import { renderGame } from "./main.js";

export function renderQRscann(level) {

    dialog.show()
    dialog.style.display = `block`;
    dialog.setAttribute("id", "scannerContainer")


    dialog.innerHTML = `
    <div id="topContainer">
        <ion-icon class="exit" name="close-outline"></ion-icon>
    </div>
    <div id="reader"></div>
    <button class="optionalCall">Not working?</button>
    `;

    dialog.querySelector(".exit").addEventListener("click", () => {
        dialog.close()
    })

    const scanner = new Html5QrcodeScanner('reader', {
        qrbox: {
            width: 500,
            height: 500,
        },
        fps: 20,
        facingMode: "environment" // Rad för att specifiera vilket håll kameran ska riktas mot.
    });

    scanner.render(success, error)

    function success(result) {
        
        window.location.hash = "#game";
        const data = parseText(result);

        if (data.type === "function") {

            const dataString = JSON.stringify(data)
            const fn = eval(dataString.function);
            if (typeof fn === 'function') {
                dialog.close()
                dialog.style.display = `none`;
                dialog.removeAttribute("id", "scannerContainer")
                fn(dataString);
            }
        } else {
            console.error("Function does not exist:", dataString);
        }
        scanner.clear()
    }

    function error(err) {
        //console.error(err)
    }

    dialog.querySelector(".optionalCall").addEventListener("click", () => {
        try {

            const fn = eval(level.function);
            if (typeof fn === 'function') {
                fn(level);
                dialog.close()
                dialog.style.display = `none`;
                dialog.removeAttribute("id", "scannerContainer")
            } else {
                console.error('Evaluated value is not a function');
            }
        } catch (error) {
            console.error('Error evaluating code:', error);
        }
    });

}

export function renderConversation(data) {

    swapStyleSheet("CSS/conversation.css")

    const now = new Date();
    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');

    main.innerHTML = `
    <div class="topC">
        <div class="leftCol">
            <img src="${data.src}">
            <section>
                <div id="name">${data.name}</div>
                <div id="status">
                    <div id="statusCircle"></div>
                    <div id="online">Online</div>
                </div>
            </section>
        </div>
        <div class="rightCol">
            <ion-icon name="videocam-outline"></ion-icon>
            <ion-icon name="call-outline"></ion-icon>
        </div>

    </div>
    <div id="conversationContainer">
        <div id="time">${hours}:${minutes}</div>
        <div class="conversation"></div>
        <div class="controlC">
            <button></button>
            <button class="option"></button>
        </div> 
        <div id="inputDisplay">
            <div id="prompt">Välj svar ovan</div>
            <div id="send"><ion-icon name="send-outline"></ion-icon></div>
        </div>
    </div>
    `;

    let flow = conversations[data.name]
    let container = main.querySelector("#conversationContainer");
    main.querySelector(".conversation").scrollTop = "100%";

    let currentQuestion = "start";

    renderConversation(currentQuestion)

    function renderConversation(currentQuestion) {

        let currentFlow = flow[currentQuestion]
        let buttons = main.querySelectorAll("button");

        function clickHandler(element) {
            return (event) => {
                event.stopPropagation();
                let answerDom = document.createElement("div");
                answerDom.classList.add("answer");
                answerDom.innerHTML = `<p>${element.text}</p>`;
                main.querySelector(".conversation").append(answerDom);
                main.querySelector(".conversation").scrollTop = main.querySelector(".conversation").scrollHeight;

                if (element.response === "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve") {
                    renderConversation(element.response);
                }
                if (element.end) {

                    let spanLength = element.end.length * 30 + 2000;
                    buttons.forEach(button => {
                        button.disabled = true
                    })

                    setTimeout(() => {
                        let closingDom = document.createElement("div");
                        closingDom.append(document.createElement("p"))
                        for (let i = 0; i < element.end.length; i++) {

                            setTimeout(() => {
                                let span = document.createElement("span");
                                span.textContent = element.end[i];
                                closingDom.querySelector("p").append(span);
                            }, i * 30);
                        }


                        main.querySelector(".conversation").append(closingDom)

                    }, 1000)
                    setTimeout(() => {
                        main.querySelector("#prompt").innerHTML = ``;
                        let button = document.createElement("button");
                        button.textContent = "KLAR";
                        button.classList.add("nextLevel");
                        main.querySelector("#prompt").append(button)
                        button.addEventListener("click", () => {
                            globalHolder.push(data.level, data.name)
                            renderGame();
                        })
                    }, spanLength)

                } if (element.lastMessage) {
                    buttons.forEach(button => {
                        button.disabled = true
                    })
                    let endDom = document.createElement("div");
                    endDom.setAttribute("id", "endC");
                    endDom.innerHTML = `<p>${element.lastMessage}</p>`
                    main.querySelector(".conversation").append(endDom);
                    main.querySelector(".conversation").scrollTop = main.querySelector(".conversation").scrollHeight;

                    setTimeout(() => {
                        main.querySelector("#prompt").innerHTML = ``;
                        let button = document.createElement("button");
                        button.textContent = "KLAR";
                        button.classList.add("nextLevel");
                        main.querySelector("#prompt").append(button)
                        button.addEventListener("click", () => {
                            globalHolder.push(data.level, data.name)
                            renderGame();
                        })
                    }, 3000)
                }
            };
        }

        for (let key in currentFlow) {

            if (key === "option") {
                currentFlow[key].forEach((element, index) => {
                    buttons[index].onclick = clickHandler(element)
                    buttons[index].innerText = element.text;
                });
            }

            if (key === "question") {

                setTimeout(() => {
                    let questionDom = document.createElement("div");
                    questionDom.append(document.createElement("p"))

                    questionDom.classList.add("question")
                    for (let i = 0; i < currentFlow[key].length; i++) {
                        setTimeout(() => {
                            let span = document.createElement("span");
                            span.textContent = currentFlow[key][i];
                            questionDom.querySelector("p").append(span);
                        }, i * 30);
                    }

                    main.querySelector(".conversation").append(questionDom)
                    questionDom.scrollTop = "100%";

                }, 1000)
            }
        }
    }
}

export function renderIMG(data) {

    swapStyleSheet("CSS/renderIMG.css")
    main.innerHTML = `
        <div id="content"></div>
        `;

    let container = main.querySelector("#content");

    let flow;

    if (data.level === "levelTwo") {
        flow = levelTwo.find(obj => obj.name === data.name);
    }
    if (data.level === "levelThree") {
        flow = levelThree.find(obj => obj.name === data.name);

    }

    if (data.name === "imgFindMyIphone") {
        container.innerHTML = `
            <div id="imgFindMyIphone">
                <h2>UPPDRAG</h2>
                <p>Du har nu fått tillgång till Mickans telefon. Kolla skärmdumpen i hennes kamerarulle för att ta reda på vart sektmedlemmarna befinner sig!</p>
                <button>
                    <ion-icon name="images-outline"></ion-icon>
                </button>
            </div>
        `;

        container.querySelector("button").addEventListener("click", () => {
            displayAlbum(data)
        });

    }

    if (data.name === "imgMeeting") {
        container.innerHTML = `
            <div id="imgMeeting">
                <h2>UPPDRAG</h2>
                <p>Du har nu fått tillgång till en övervakningskamera. Spionera på mötet för att lista ut vem sektledaren är. Men var försiktig...</p>
                <button class="camera">
                    <ion-icon name="videocam-outline"></ion-icon>
                </button>
            </div>
        `;
        container.querySelector(".camera").onclick = () => displayCameraFootage(data.img1, "Kamera 1");
    }

    if(data.name === "mapPuzzel") {
        console.log(flow)
        container.innerHTML = `
            <div id="mapPuzzle">
                <h2>KARTA</h2>
                <img src=${flow.img}>
                <button> KLAR </button>
            </div>
        `;
        container.querySelector("button").addEventListener("click", () => {
            globalHolder.push(data.level, data.name)
            renderGame()
        });
    }

    function displayAlbum(data) {
        container.setAttribute("id", "containerFindMyIphone")
        container.innerHTML = `
            <div class="topDOM">
                <div>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                    <p>Album</p>
                </div>
                <div>
                    <button>Välj</button>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div class="middleDOM">
                <h3>Senaste</h3>
                <div class="gridContainer"></div>
            </div>
            <div class="btmDOM">
                <p>${data.img.length} Foton, 0 Videos </p>    
            </div>
        `;

      

        let gridContainer = container.querySelector(".gridContainer")
        data.img.forEach(img => {
            let imgDOM = document.createElement("img");
            imgDOM.src = `${img}`;
            gridContainer.append(imgDOM)
            imgDOM.onclick = () => displayIMG(data, img)

        })
    }

    function displayIMG(data, img) {
        container.setAttribute("id", "displayIMG")
        container.innerHTML = `
            <section>
                <div>
                    <img id="imgContainer" src=${img}>
                </div>
                
                <div class="bottomDIV">
                    <ion-icon name="return-down-back-outline" id="returnToAlbum"></ion-icon>
                    <button class="levelComplete">KLAR</button>
                </div>
            </section>
        `;

        container.querySelector("button").addEventListener("click", () => {
            globalHolder.push(data.level, data.name)
            renderGame()
        })

        container.querySelector("#returnToAlbum").addEventListener("click", () => {
            displayAlbum(data)
        })
    }

    function liveTimer() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const string = `${hours}:${minutes}:${seconds}`;

        const timer = document.getElementById("timer");
        timer.textContent = string;

    }

    function displayCameraFootage(img, text) {
        container.setAttribute("id", "displayCameraFootage")
        container.innerHTML = `
            <h2>${text}</h2>
            <section>
                <div>
                    <img id="imgContainer" src=${img}>
                    <p id="timer"></p>
                </div>
                
                <div class="bottomDIV">
                    <button class="levelComplete">KLAR</button>
                </div>
            </section>
        `;

        liveTimer()
        let intervalTimer = setInterval(liveTimer, 1000);

        container.querySelector("button").addEventListener("click", () => {
            globalHolder.push(data.level, data.name)
            renderGame()
            clearInterval(intervalTimer)
        })
    }
}

export function renderAnalogChallange(level) {
    dialog.show()
    dialog.style.display = `block`;
    document.querySelector(".overlay").style.display = `block`;
    dialog.setAttribute("id", "analogControll")
    dialog.innerHTML = `
        <p>Är du färdig med stationen?</p>
        <div>
            <button class="true">Ja</button>
            <button class="false">Nej</button>
        </div>
    `;

    dialog.querySelector(".true").addEventListener("click", () => {
        globalHolder.push(level.level, level.name)

        dialog.close()
        dialog.style.display = `none`;
        document.querySelector(".overlay").style.display = `none`;
         renderGame()
    })

    dialog.querySelector(".false").addEventListener("click", () => {
        document.querySelector(".overlay").style.display = `none`;
        dialog.style.display = `none`;
        dialog.close()       
    })
}

export function addCode() {

    dialog.show()
    dialog.style.display = `block`;  
    dialog.setAttribute("id", "codeDialog");
    document.querySelector(".overlay").style.display = `block`;

    let correctCode = ["3","5","6","1"];
    
    dialog.innerHTML = `
        <h2>SIFFERKOD</h2>
        <p class="topMess">Skriv in koden som finns vid stationen när du genomfört den</p>
        <div class="containerCode">
            <input type="text" maxlength="1" onkeypress="return event.charCode >= 48 && event.charCode <= 57" required>
            <input type="text" maxlength="1" onkeypress="return event.charCode >= 48 && event.charCode <= 57" required>
            <input type="text" maxlength="1" onkeypress="return event.charCode >= 48 && event.charCode <= 57" required>
            <input type="text" maxlength="1" onkeypress="return event.charCode >= 48 && event.charCode <= 57" required>
        </div>
        <p class="tempMess"></p>
        <button class="done">KLAR</button>
    `;

    dialog.querySelector(".done").addEventListener("click", () => {

        const inputs = document.querySelectorAll('.containerCode input');
        let inputValues = [];
        inputs.forEach(input => {
            inputValues.push(input.value);
        });

        if (inputValues.length === correctCode.length && inputValues.every((value, index) => value === correctCode[index])) {
            document.querySelector(".overlay").style.display = `none`;
            dialog.close();
            dialog.style.display = `none`;
            dialog.removeAttribute("id", "codeDialog")
            endGame()
        } else {
            dialog.querySelector(".tempMess").textContent = "Fel kod, försök igen!";
            dialog.classList.add("shake");
            setTimeout(() => {
                dialog.querySelector(".tempMess").textContent = "";
                dialog.classList.remove("shake");
            }, 2000);
}
    })
}

export async function endGame() {
    let user = localStorage.getItem("user")
    let userData = JSON.parse(user);
    let startTime = globalHolder.get("StartTime")

    let endTime = getCurrentTime();

    let durationInSeconds = endTime - startTime;
    let durationInMinutes = durationInSeconds / 60;

    let pointsPerMinute = 1;

    let points = Math.floor(durationInMinutes * pointsPerMinute);
    console.log(points)
    let totalPoints = 1000 - points;

    try {
        let response = await fetch("../API/setPoints.php", {
            method: "POST",
            body: JSON.stringify({
                username: userData,
                points: totalPoints,
            })
        })
        let data = await response.json()
        if (!response.ok) {
            console.log(data)

        } else {
            console.log(data)
        }

    } catch (error) {
        console.log(error)
    }

    dialog.show();
    document.querySelector(".overlay").style.display = `block`;
    dialog.setAttribute("id", "endMess")
    dialog.innerHTML = `
        <h2>GRATTIS!</h2>
        <p class="mess">Du har tjänat in ${totalPoints} poäng för att du klarade spelet under ${Math.round(durationInMinutes)} minuter!</p>
    `;

    setTimeout(() => {
        dialog.close();
        document.querySelector(".overlay").style.display = `none`;
        dialog.removeAttribute("id", "endMess")

        globalHolder.reset()
        renderHomepage()
        renderScoreBoard(user, durationInMinutes, totalPoints);
        localStorage.removeItem("StartTime")
    }, 4000);
}




