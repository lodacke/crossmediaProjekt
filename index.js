import { renderHomepage } from "./main.js";
import { renderLogin } from "./registerLogin.js";
import { renderGame } from "./main.js";

async function initMap() {
    window.mapInitialized = false;
        if (localStorage.getItem("user") && window.location.hash === "#game") {
        renderGame();
    }
}

window.initMap = initMap;

(function () {
   
    if (localStorage.getItem("user")) {
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