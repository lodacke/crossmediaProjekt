import { conversations } from "./API/conversation.js";
import { levelTwo, levelThree } from "./API/qlues.js";
import { characters } from "./API/characters.js"
import { swapStyleSheet } from "./utilities/cssSwap.js";
import {parseText} from "./utilities/parse.js";
import { dialog, globalHolder, main } from "./utilities/variable.js";
import { renderGame } from "./main.js";
import { styleSVGElement } from "./utilities/styleElement.js";

export function renderQRscann(level){
    console.log(level)
    dialog.show()
    dialog.setAttribute("id", "scannerContainer")


    dialog.innerHTML = `
    <div id="topContainer">
        <ion-icon class="exit" name="close-outline"></ion-icon>
    </div>
    <div id="reader"></div>
    `;

    dialog.querySelector(".exit").addEventListener("click", () => {
        dialog.close()
        styleSVGElement(level, "black")
    })

    const scanner = new Html5QrcodeScanner('reader', {
        qrbox: {
            width: 300,
            height: 300,
        },
        fps: 20,
        facingMode: "environment" // Rad för att specifiera vilket håll kameran ska riktas mot.
    });

    scanner.render(success, error)

    function success(result) {
        window.location.hash = "#game";
        const data = parseText(result);
        

        if (data.type === "function") {

        dialog.close()  
        const dataString = JSON.stringify(data)
        eval(`${data.link}(${dataString})`)
        styleSVGElement(level, "green")

        } else {
            console.error("Function does not exist:", data);
        }
        scanner.clear()
    }

    function error(err) {
        console.error(err)
    }
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

    console.log(data.src);

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

                if (element.response === "one", "two", "three", "four", "five", "six", "seven", "eight") {
                    console.log(element.response)
                    renderConversation(element.response);
                }
                if(element.end){

                    let spanLength = element.end.length * 30 + 2000;
                    buttons.forEach(button => {
                        button.disabled = true
                    })

                    setTimeout(() => {
                        let closingDom = document.createElement("div");
                        closingDom.append(document.createElement("p"))
                        closingDom.classList.add("question")
                        for (let i = 0; i < element.end.length; i++) {

                            setTimeout(() => {
                                let span = document.createElement("span");
                                span.textContent = element.end[i];
                                closingDom.querySelector("p").append(span);
                                }, i * 30); 
                            }
                            

                        main.querySelector(".conversation").append(closingDom)
                        container.scrollTo(0, container.scrollHeight);
                }, 1000) 
                setTimeout(() => {
                        console.log(data.level)
                        globalHolder.push(data.level, data.name) 
                        renderGame();
                    }, spanLength)

                } if(element.lastMessage) {
                    console.log(element.response)
                    let endDom = document.createElement("div");
                    endDom.setAttribute("id", "endC");
                    endDom.innerHTML = `<p>${element.lastMessage}</p>`
                    main.querySelector(".conversation").append(endDom)
                    setTimeout(() => {

                        globalHolder.push(data.level, data.name)
                        styleSVGElement(data.level)
                        renderGame();
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

                if(key === "question") {

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
                    container.scrollTo(0, container.scrollHeight);

                  }, 1000)  
                }             
            } 
        }
    }

export function renderIMG(data){

    swapStyleSheet("CSS/renderIMG.css")
    main.innerHTML = `
        <div id="content"></div>
        `;

    let container = main.querySelector("#content");

        let flow;

        if(data.level === "levelTwo"){
            flow = levelTwo.find(obj => obj.name === data.name);
        }
        if(data.level === "levelThree"){
            flow = levelThree.find(obj => obj.name === data.name);

        }

    if(data.name === "imgFindMyIphone"){
        container.innerHTML = `
        <h1>UPPDRAG</h1>
        <p>Du har nu fått tillgång till Mickans telefon. Kolla skärmdumpen i hennes kamerarulle för att ta reda på vart sektmedlemmarna befinner sig!</p>
        <button><img src="media/imgGallery.svg"></button>
        `;

        container.querySelector("button").addEventListener("click", () => {
            container.setAttribute("id", "containerFindMyIphone")
            container.innerHTML = `
            <div class="topDOM">
                <p> <img src="media/arrow.svg">album</p>
                <button>Välj</button>
                <img src="media/dots.svg">
            </div>
            <div class="middleDOM">
                <h3>Senaste</h3>
                <div class="gridContainer"></div>
            </div>
            <div class="btmDOM">
                <p>${flow.img.length} Foton, 0 Videos </p>    
            </div>
            `;

            let gridContainer = container.querySelector(".gridContainer")
            flow.img.forEach( img => {
                let imgDOM = document.createElement("img");
                imgDOM.src = `${img}`;
                gridContainer.append(imgDOM)
                imgDOM.onclick = () => displayIMG(flow.img1)

            })
        })
    }
    if(data.name === "imgMeeting"){
        container.innerHTML = `
            <h1>SPIONERA PÅ MÖTET</h1>
            <div class="buttonContainer">
                <div class="innerContainer">
                    <button class="cameraOne"><img src="media/gameIMG/camera.svg"></button>
                    <p>Camera 1</p>
                </div>
                <div class="innerContainer">
                    <button class="cameraTwo"><img src="media/gameIMG/camera.svg"></button>
                    <p>Camera 2</p>
                </div>
            </div>
        `;

        container.querySelector(".cameraOne").onclick = () => displayIMG(flow.img1)
        container.querySelector(".cameraTwo").onclick = () => displayIMG(flow.img2)
    }

    function displayIMG(img){
        container.setAttribute("id", "displayIMG")
        container.innerHTML = `
        <img id="imgContainer" src=${img}>
        <div class="bottomDIV">
            <img class="return" src="media/return.svg">
            <button class="levelComplete">KLAR</button>
        </div>
        `;

        container.querySelector("button").addEventListener("click", () => {
            globalHolder.push(data.level, data.name)
            renderGame()
        })

        container.querySelector(".return").addEventListener("click", () => {
            renderIMG(data)
        })
    }
}

export function findLeader(){

    swapStyleSheet("CSS/chooseCharacter.css");

    main.innerHTML = `
        <div class="content"></div>
    `;

    let displayCharacters = []
    for (let character of characters) {
        if (character.alibi) {
            displayCharacters.push(character)
        }
    }

    displayCharacters.forEach(character => {
        let card = document.createElement("div");
        card.classList.add("flipCard");
        card.setAttribute("id", `char_${character.name}`)
        card.innerHTML = `
        <div class="innerCard">
            <div class="frontCard" id=char_${character.name}>
                <img src=${character.img}>
                <h1>${character.name}</h1>
            </div>
             <div class="backCard" id=char_${character.name}>
                <img src=${character.img}>
                <p>${character.alibi}</p>
            </div>
       </div>
       `;

        let toggleControl = true;
        card.addEventListener("click", (event) => {
            if (toggleControl === true) {
                card.classList.toggle("flippedCard")
            }

            if(event.target.id === "char_Anette"){
                toggleControl = false;

                setTimeout(() => {
                    let levelButton = document.createElement("button");
                    levelButton.setAttribute("id", "nextLevel")
                    levelButton.innerText = "Go to next level"
                    main.querySelector(".content").append(levelButton)
                }, 3000)
            }

        })
        main.querySelector(".content").append(card)
    })
}

