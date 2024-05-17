import { globalHolder, dialog } from "./variable.js"
import { levelTwo, levelThree, levelOne } from "../API/qlues.js"
import { characters } from "../API/characters.js";


export async function levelCount() {

    if (globalHolder.levels.levelOne) {

        if (globalHolder.levels.levelOne.length < 5 && !globalHolder.levels.levelOne_check) {
            console.log("first scope")
            return levelOne;
            
        }
        else if (globalHolder.levels.levelOne_completed) {
            userAlert("levelOne")
            return levelTwo;
        } 
    }

    if ( globalHolder.levels.levelOne_check || globalHolder.levels.levelTwo){

        if (globalHolder.levels.levelTwo && globalHolder.levels.levelTwo.length < 6 && !globalHolder.levels.levelTwo_check) {
            console.log("second scope")
            return levelTwo;

        }
        else if (globalHolder.levels.levelTwo_completed) {
            findLeader("levelTwo")
            return levelThree;

        }  else if (globalHolder.levels.levelTwo_check ) {
            return levelThree
        } else {
            return levelTwo
        }
        
       
    }
    if (globalHolder.levels.levelTwo_check || globalHolder.levels.levelTwo) {
        console.log("third scope")
        if (globalHolder.levels.levelThree && globalHolder.levels.levelThree.length < 3) {
            return levelThree;
        } else {
            return levelThree
        }
    }

    return levelOne;

}

// function called as a prompt between level 1 and level 2
function userAlert(level) {

    console.log(level)
    dialog.show();
    dialog.style.display = `block`
    document.querySelector(".overlay").style.display = `block`;
    dialog.setAttribute("id", "userMess")
    dialog.innerHTML = `
    <h2>GRATTIS!</h2>
    <p class="mess"></p>
    <button class="messButton">Påbörja nästa nivå</button>
    `;

    dialog.querySelector("button").addEventListener("click", () => {
        globalHolder.removeItem(`${level}_completed`)
        dialog.close()
        dialog.style.display = `none`
        document.querySelector(".overlay").style.display = `none`;

    })

    let messDom = dialog.querySelector(".mess");
    if (level === "levelOne") {
        messDom.textContent = "Du har nu träffat alla karaktärerna, och kan nu påbörjar nästa nivå av undersökningen"
    }

    if (level === "levelTwo") {
        messDom.textContent = "Du lyckades lista ut vem sektledaren är! Nu måste du hitta Anna."

    }
}

export function findLeader() {
    dialog.show();
    dialog.style.display = 'block';
    dialog.setAttribute('id', 'chooseCharacter');
    dialog.innerHTML = `
        <h2>VEM ÄR SEKTLEDAREN?</h2>
        <div class="content"></div>
    `;

    let displayCharacters = characters.filter(character => character.alibi);

    displayCharacters.forEach(character => {
        let card = document.createElement('div');
        card.classList.add('flipCard');
        card.setAttribute('id', `char_${character.name}`);
        card.innerHTML = `
            <div class="innerCard">
                <div class="frontCard" id="char_${character.name}">
                    <div class="characterContainer">
                        <img src=${character.img}>
                    </div>
                    <h1>${character.fullName}</h1>
                </div>
                <div class="backCard" id="char_${character.name}">
                    <p>${character.alibi}</p>
                </div>
            </div>
        `;
        dialog.querySelector('.content').append(card);
    });

    dialog.querySelector('.content').addEventListener('click', event => {
        const card = event.target.closest('.flipCard');
        if (card) {
            card.classList.toggle('flippedCard');

            if (card.id === 'char_Anette') {
                const container = document.createElement('div');
                container.classList.add('bottomContainer');
                container.innerHTML = `
                    <button id="nextLevel">Fortsätt till nivå 3</button>
                `;
                container.querySelector('#nextLevel').addEventListener('click', () => {
                    dialog.close();
                    dialog.style.display = 'none';
                    dialog.removeAttribute('id', 'chooseCharacter');
                    userAlert('levelTwo');
                });
                dialog.querySelector('.content').append(container);
            }
        }
    });
}