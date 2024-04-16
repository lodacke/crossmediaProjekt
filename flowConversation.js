import { conversations } from "./API/conversation.js";
import { swapStyleSheet } from "./utilities/cssSwap.js";
import {parseText} from "./utilities/parse.js";
import { dialog, main } from "./utilities/variable.js";
import { renderGame } from "./main.js";

export function renderQRscann(){
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
    })
    const scanner = new Html5QrcodeScanner('reader', {
        qrbox: {
            width: 300,
            height: 300,
        }, 
        fps: 20,
    });

    scanner.render(success, error)

    function success(result){
        window.location.hash = "#game";
        const data = parseText(result);

    if (data.type === "function") {

        dialog.close()  
        const dataString = JSON.stringify(data)
        eval(`${data.link}(${dataString})`)

    } else {
        console.error("Function does not exist:", data);
    }
        scanner.clear()
    }

    function error(err){
        console.error(err)
    }
}


export function renderConversationF(data){

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

    let container = document.querySelector("#conversationContainer");
    container.scrollBottom = container.scrollHeight;

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


