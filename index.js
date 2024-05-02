import { renderHomepage } from "./main.js";
import { renderLogin } from "./registerLogin.js";
import { globalHolder } from "./utilities/variable.js";
//import { chooseCharacter } from "./gameCenter.js";

(function () {
   
    if (globalHolder.get("user")) {
        window.addEventListener("load", () => {
            if (window.location.hash === "#game") {
                renderGame();
            } else {
                renderHomepage();
            }
        });
    } else {
        
        renderLogin();
    }
})();