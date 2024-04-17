import { renderHomepage } from "./main.js";
import { renderLogin } from "./registerLogin.js";
import {renderGame } from "./main.js";
import { chooseCharacter } from "./gameCenter.js";


(function(){
    if(window.localStorage.getItem("user")){  
        renderHomepage()
    } else {
        renderLogin()
    }


window.addEventListener("load", () => {
    if (window.location.hash === "#game") {
        chooseCharacter()
        //renderGame();
    } else {
        renderHomepage();
    }
});
})()
