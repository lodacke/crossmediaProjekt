import { renderHomepage } from "./main.js";
import { renderLogin } from "./registerLogin.js";


(function(){
    if(window.localStorage.getItem("user")){
        renderHomepage()
    } else {
        renderLogin()
    }
})()
