import { globalHolder } from "./variable.js"
import { styleSVGElement } from "./styleElement.js";
import { levelTwo, levelThree, levelOne } from "../API/qlues.js"

export function levelCount() {

    if(globalHolder.levels.levelOne){

        if (globalHolder.levels.levelOne.length < 5) {
            console.log("level One is under 5")
            styleSVGElement(globalHolder.levels.levelOne, "green");
            return levelOne;

        } else if (globalHolder.levels.levelOne.length === 5) {
            console.log("levelOne is 5");

            // add promt function gere. 
            return levelTwo;
        }   
    }

    if(globalHolder.levels.levelTwo){
        console.log("levelTwo in")
        if (globalHolder.levels.levelTwo.length < 6) {
            console.log("levelTwo > 5");

            styleSVGElement(globalHolder.levels.levelTwo, "green");
            return levelTwo;

        } else if (globalHolder.levels.levelTwo.length === 6) {

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