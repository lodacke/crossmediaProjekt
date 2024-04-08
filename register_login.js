import { main } from "./utilities/variable.js"
import { renderHomepage} from "./main.js"
import { userMessage } from "./utilities/userMessage.js";

export async function renderLogin(){

    main.innerHTML = `

    <label> USERNAME</label>
    <input class="username">
    <label> PASSWORD</label>
    <input class="password" type="password">
    <p class="linkText">Dont have an account? <a href="#">Register</a></p>
    <p id="userMessage"></p>
    <button>LOGIN</button>
    `;

    main.querySelector("a").addEventListener("click", e => {
        renderRegister()
    })

    main.querySelector("button").addEventListener("click", async function() {
        let username = main.querySelector(".username")
        let password = main.querySelector(".password")
        let messageDom = main.querySelector("#userMessage");
  
        try{

            let response = await fetch("../API/login.php", {
            method: "POST",
            body: JSON.stringify({
                username: username.value,
                password: password.value,
            })
        });

        let data = await response.json()

        if(!response.ok){
             userMessage(messageDom, data.message) 
        } else {
            
             window.localStorage.setItem("user", JSON.stringify(data.username));
            renderHomepage()
        }

    }  catch  (error) { 
        userMessage(messageDom, error.message) 
        }
    })   
}

export async function renderRegister(){

    main.innerHTML = `
    <label> USERNAME</label>
    <input class="username">
    <label> PASSWORD</label>
    <input class="password" type="password">
    <label> REPEAT PASSWORD</label>
    <input class="passwordRepeat" type="password">
    <p class="linkText">Already have an account? <a href="#">Login</a></p>
    <p id="userMessage"></p>
    <button>LOGIN</button>
    `;

    main.querySelector("a").addEventListener("click", e => {
        renderLogin()
    })

    main.querySelector("button").addEventListener("click", async function (){

        let username = main.querySelector(".username");
        let password = main.querySelector(".password");
        let passwordRepeat = main.querySelector(".passwordRepeat");
        let messageDom = main.querySelector("#userMessage");

        try{

            let response = await fetch("../API/register.php", {
            method: "POST",
            body: JSON.stringify({
                username: username.value,
                password: password.value,
                passwordRepeat: passwordRepeat.value
            })
        });

        let data = await response.json()
        console.log(data)

        if(!response.ok){
             userMessage(messageDom, data.message) 
        } else {
            messageDom.textContent = "New user have been added";
               setTimeout(() => {
                messageDom.textContent = "";
                 window.localStorage.setItem("user", JSON.stringify(data.username));
                renderHomepage()
            }, 3000);
     
        }

    }  catch (error) { 
        userMessage(messageDom, error.message) 
        }
    })   
}


