import { globalHolder } from "./variable.js"
import {styleSVGElement} from "./styleElement.js"
import { levelTwo, levelThree, levelOne } from "../API/qlues.js"

export function levelCount() {
    let userLevel = levelOne;

    for (let level in globalHolder) {
        switch (level) {
            case "levelOne":
                if (globalHolder["levelOne"].length > 5) {
                    styleSVGElement(globalHolder[level], "green");
                    return userLevel = levelOne;
                } else if(globalHolder["levelOne"].length === 5) {
                    return userLevel = levelTwo;
                }
                break; 

            case "levelTwo":
                if (globalHolder["levelTwo"].length > 6 ) {
                    styleSVGElement(globalHolder[level], "green");
                    userLevel = levelTwo;
                } else if(globalHolder["levelTwo"].length === 6 && userLevel !== levelOne) {
                    return userLevel = levelThree;
                }
                break; 

            case "levelThree":
                if (globalHolder["levelThree"].length > 3) {
                    styleSVGElement(globalHolder[level], "green");
                    return userLevel = levelThree;
                } else if(globalHolder["levelOne"].length === 3 && userLevel !== levelTwo) {
                    return userLevel = levelThree;
                }
                break; 
        }
    }
    return userLevel;
}