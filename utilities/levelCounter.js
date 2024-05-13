import { globalHolder, dialog } from "./variable.js"
import { levelTwo, levelThree, levelOne } from "../API/qlues.js"
import { renderGame, renderScoreBoard } from "../main.js";
import { swapStyleSheet } from "./cssSwap.js";
//import { main } from "./variable.js";
import { characters } from "../API/characters.js";


export function levelCount() { 

    if (globalHolder.levels.levelOne) {

        if (globalHolder.levels.levelOne.length < 5) {
            //console.log("level One is under 5")
            return levelOne;

        } else if (globalHolder.levels.levelOne.length > 5 && !globalHolder.levels.levelTwo) {
            userAlert("levelTwo")
            return levelTwo;
        }
    }
    if(globalHolder.levels.levelTwo){
        console.log("levelTwo")
        if (globalHolder.levels.levelTwo.length < 6) {
            return levelTwo;

        } else if (globalHolder.levels.levelTwo.length === 6 && !globalHolder.levels.levelThree) {

            //findLeader()
            return levelThree;

        }
    }
    if (globalHolder.levels.levelThree) {
        if (globalHolder.levels.levelThree.length < 3) {
            return levelThree;
        }
    }

    return levelOne;

}

// function will be called as a prompt between level 1 and level 2
function userAlert(level) {
    dialog.show();
    document.querySelector(".overlay").style.display = `block`;
    dialog.setAttribute("id", "userMess")
    dialog.innerHTML = `
    <h2>GRATTIS!</h2>
    <p class="mess"></p>
    <button class="messButton"></button>
    `;

    dialog.querySelector("button").addEventListener("click", () => {
        dialog.close()
        document.querySelector(".overlay").style.display = `none`;

    })

    let messDom = dialog.querySelector(".mess");
    let messButton = dialog.querySelector(".messButton")
    if (level === "levelTwo") {
        messDom.textContent = "Du har nu träffat alla karaktärerna, och kan nu påbörjar nästa nivå av undersökningen"
        messButton.textContent = "Påbörja nästa nivå"
    }

    if (level === "levelThree") {
        messDom.textContent = "Du har lyckats lösa mysteriet!"
        messButton.textContent = "Se high score!"

        messButton.addEventListener("click", renderScoreBoard)
    }
}

// function will be called as a prompt between level 2 and level 3
export function findLeader() {

    swapStyleSheet("CSS/chooseCharacter.css");
    dialog.show()
    dialog.innerHTML = `
        <div class="content"></div>
    `;

    let displayCharacters = []
    for (let character of characters) {
        if (character.alibi) {
            displayCharacters.push(character)
        }
    }

    displayCharacters.forEach(character => {
        console.log(character)
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

            if (event.target.id === "char_Anette") {
                toggleControl = false;

                setTimeout(() => {
                    let levelButton = document.createElement("button");
                    levelButton.setAttribute("id", "nextLevel")
                    levelButton.innerText = "Go to next level";
                    levelButton.addEventListener("click", () => {
                        dialog.close()
                        renderGame()
                    })
                    dialog.querySelector(".content").append(levelButton)
                }, 3000)
            }

        })
        dialog.querySelector(".content").append(card)
    })
}