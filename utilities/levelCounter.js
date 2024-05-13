import { globalHolder, dialog } from "./variable.js"
import { levelTwo, levelThree, levelOne } from "../API/qlues.js"
import { renderGame, renderScoreBoard } from "../main.js";


export function levelCount() {

    let levelReachedOne = true;
    let levelReachedTwo = false;

    if (globalHolder.levels.levelOne) {

        if (globalHolder.levels.levelOne.length < 5) {
            //console.log("level One is under 5")
            return levelOne;

        } else if (globalHolder.levels.levelOne.length > 5 && levelReachedOne) {
            console.log(levelReachedOne)
            levelReachedOne = true;
            console.log(levelReachedOne)
            userAlert("levelTwo")
            return levelTwo;
        }
    }

    if (globalHolder.levels.levelTwo) {
        console.log("levelTwo in")
        if (globalHolder.levels.levelTwo.length < 6) {
            console.log("levelTwo under 5");
            return levelTwo;

        } else if (globalHolder.levels.levelTwo.length === 6 && !levelReachedTwo) {
            levelReachedTwo = true;
            findLeader()
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

            if (event.target.id === "char_Anette") {
                toggleControl = false;

                setTimeout(() => {
                    let levelButton = document.createElement("button");
                    levelButton.setAttribute("id", "nextLevel")
                    levelButton.innerText = "Go to next level";
                    levelButton.addEventListener("click", () => {
                        renderGame()
                    })
                    main.querySelector(".content").append(levelButton)
                }, 3000)
            }

        })
        main.querySelector(".content").append(card)
    })
}