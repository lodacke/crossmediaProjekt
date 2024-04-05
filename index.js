import { renderLogin } from "./register_login.js";


(function(){
    if(localStorage.getItem("user")){
        console.log("inloggad")
    } else {
        renderLogin()
    }
})()
