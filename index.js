import { renderHomepage } from "./main.js";
import { renderLogin } from "./registerLogin.js";
import { globalHolder } from "./utilities/variable.js";
import { renderGame } from "./main.js";

(function () {
   
    if (localStorage.getItem("user")) {
        console.log("found user")
            if (window.location.hash === "#game") {
                renderGame();
            } else {
                renderHomepage();
            }
    } else {        
        console.log("not found user")
        renderLogin();
    }
})();