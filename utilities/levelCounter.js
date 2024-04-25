import { globalHolder } from "./variable.js"
import { styleSVGElement } from "./styleElement.js";
import { levelTwo, levelThree, levelOne } from "../API/qlues.js"

export function levelCount() {

    if(globalHolder.levels.levelOne){

        console.log(globalHolder.levels.levelOne.length) 
        console.log(globalHolder.levels.levelOne) 

        if (globalHolder.levels.levelOne.length > 5) {
            
            styleSVGElement(globalHolder.levels.levelOne, "green");
            return levelOne;

        } else if (globalHolder.levels.levelOne.length === 5) {

            console.log("true");
            return levelTwo;
        }   
    }

    if(globalHolder.levels.levelTwo){
        if (globalHolder.levels.levelTwo.length > 6) {

            styleSVGElement(globalHolder.levels.levelTwo, "green");
            return levelTwo;

        } else if (globalHolder.levels.levelTwo.length === 6) {

            return levelThree;
        }
    }
    if(globalHolder.levels.levelThree){
        if (globalHolder.levels.levelThree.length > 3) {

            styleSVGElement(globalHolder.levels.levelThree, "green");
            return levelThree;
        }
    }

    return levelOne;
}