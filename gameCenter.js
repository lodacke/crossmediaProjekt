import { conversations } from "./API/conversation.js";
import { characters } from "./API/characters.js"
import { swapStyleSheet } from "./utilities/cssSwap.js";
import {parseText} from "./utilities/parse.js";
import { dialog, main, globalHolder } from "./utilities/variable.js";
import { renderGame } from "./main.js";
import { styleSVGElement } from "./utilities/styleElement.js";

export function renderQRscann(level){
    dialog.show()
    dialog.setAttribute("id", "scannerContainer")


    dialog.innerHTML = `
    <div id="topContainer">
        <img class="exit" src="media/exit.svg">
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
        facingMode: "environment" 
    });

    scanner.render(success, error)

    function success(result){
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

    function error(err){
        console.error(err)
    }
}

export function renderConversation(data){

    swapStyleSheet("CSS/conversation.css")

    main.innerHTML = `
    <div id="conversationContainer">
        <div class="topC">
            <img src="${data.src}">
            <h3>Konversation med ${data.name}</h3>
        </div>
        <div class="conversation"></div>
        <div class="controlC">
            <button></button>
            <button class="option"></button>
        </div> 
    </div>
    `;

    let flow = conversations[data.name]
    let globalLevel = globalHolder[data.level]
    let container = main.querySelector("#conversationContainer");
    main.querySelector(".conversation").scrollTop = "100%";

    let currentQuestion = "start";

    renderConversation(currentQuestion)

    function renderConversation(currentQuestion){

        let currentFlow = flow[currentQuestion]
        let buttons = main.querySelectorAll("button");

        function clickHandler(element) {
            return (event) => {
                event.stopPropagation();
                let answerDom = document.createElement("div");
                answerDom.classList.add("answer");
                answerDom.innerHTML = `<p>${element.text}</p>`;
                main.querySelector(".conversation").append(answerDom);

                if (["one", "two", "three", "four", "five", "six"].includes(element.response)) {
                    renderConversation(element.response);
                } else {
                    let endDom = document.createElement("div");
                    endDom.setAttribute("id","endC");
                    endDom.innerHTML = `<p>${element.response}</p>`
                    main.querySelector(".conversation").append(endDom)
                    setTimeout(() => {

                        globalLevel.push(data.name)
                        styleSVGElement(globalLevel)
                        renderGame();
                    },3000)
                }
            };
        }

        for(let key in currentFlow){

                if(key === "option"){
                    currentFlow[key].forEach((element, index) => {
                    buttons[index].onclick = clickHandler(element)   
                    buttons[index].innerText = element.text;
                    });

                } else {

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

export function displayIMG(data){
    swapStyleSheet("CSS/displayIMG.css")
    
}


export function findLeader(){

    swapStyleSheet("CSS/chooseCharacter.css");

    main.innerHTML = `
        <div class="content"></div>
    `;

    let displayCharacters = []
    for (let character of characters){
        if(character.alibi){
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
            if(toggleControl === true){
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

