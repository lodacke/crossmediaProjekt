import { conversations } from "./API/conversation.js";
import { swapStyleSheet } from "./utilities/cssSwap.js";
import {parseText} from "./utilities/parse.js";
import { dialog, main } from "./utilities/variable.js";

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
    </div>
    `;

    let flow = conversations[data.name]
    console.log(flow)
}