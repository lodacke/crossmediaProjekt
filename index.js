import { renderHomepage } from "./main.js";
import { renderLogin } from "./register_login.js";


(function(){
    if(window.localStorage.getItem("user")){
        renderHomepage()
    } else {
        renderLogin()
    }
})()
