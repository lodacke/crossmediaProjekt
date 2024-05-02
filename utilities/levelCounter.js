import { globalHolder, dialog } from "./variable.js"
import { styleSVGElement } from "./styleElement.js";
import { levelTwo, levelThree, levelOne } from "../API/qlues.js"
import { renderScoreBoard } from "../main.js";

    let levelReachedOne = false;
    let levelReachedTwo = false;
    
export function levelCount() { 

    if(globalHolder.levels.levelOne){

        if (globalHolder.levels.levelOne.length < 5) {
            //console.log("level One is under 5")
            styleSVGElement(globalHolder.levels.levelOne, "green");
            return levelOne;

        } else if (globalHolder.levels.levelOne.length === 5 && !levelReachedOne) {
            levelReachedOne = true;
            userAlert("levelTwo")
            return levelTwo;
        }   
    }

    if(globalHolder.levels.levelTwo){
        console.log("levelTwo in")
        if (globalHolder.levels.levelTwo.length < 6) {
            //console.log("levelTwo > 5");

            styleSVGElement(globalHolder.levels.levelTwo, "green");
            return levelTwo;

        } else if (globalHolder.levels.levelTwo.length === 6 && !levelReachedTwo) {
            levelReachedTwo = true;
            return levelThree;
        }
    }
    if(globalHolder.levels.levelThree){
        if (globalHolder.levels.levelThree.length < 3) {

            styleSVGElement(globalHolder.levels.levelThree, "green");
            return levelThree;
        }
    }

    return levelOne;
}

function userAlert(level){
    dialog.show();
    dialog.setAttribute("id", "userMess")
    dialog.innerHTML = `
    <h2>Grattis!</h2>
    <p class="mess"></p>
    <button class="messButton"></button>
    `;

    dialog.querySelector("button").addEventListener("click", () =>{
        dialog.close()
    })

    let messDom = dialog.querySelector(".mess");
    let messButton = dialog.querySelector(".messButton")
    if(level === "levelTwo"){
        messDom.textContent = "Du har nu träffat alla karaktärerna, och kan nu påbörjar nästa nivå av undersökningen"
        messButton.textContent = "Påbörja nästa nivå"
    }

    if(level === "levelThree"){
        messDom.textContent = "Du har lyckats lösa mysteriet!"
        messButton.textContent = "Se high score!"

        messButton.addEventListener("click", renderScoreBoard)
    }
}