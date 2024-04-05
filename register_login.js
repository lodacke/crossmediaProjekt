import { main } from "./variable.js"

export async function renderLogin(){

    main.innerHTML = `

    <label> USERNAME</label>
    <input class="username">
    <label> PASSWORD</label>
    <input class="password" type="password">
    <p class="linkText">Dont have an account? <a href="#">Register</a></p>
    <button>LOGIN</button>
    `;

    main.querySelector("a").addEventListener("click", e => {
        renderRegister()
    })


    main.querySelector("button").addEventListener("click", async function() {
        let username = main.querySelector(".username")
        let password = main.querySelector(".password")

        if(!username.value == "" && !password.value == ""){
            let response = await fetch("../API/login.php", {
            method: "POST",
            body: JSON.stringify({
                username: username.value,
                password: password.value,
                })
            });

        let data = await response.json()

        if(data.ok){
            console.log(data)
        } else {
            console.log(data)
        }
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
        <button>LOGIN</button>
        `;

        main.querySelector("a").addEventListener("click", e => {
            renderLogin()
        })

        main.querySelector("button").addEventListener("click", async function (){

            let username = main.querySelector(".username")
            let password = main.querySelector(".password")
            let passwordRepeat = main.querySelector(".passwordRepeat")

            if(password.value === passwordRepeat.value){

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
               
            } else {

            }
        })
    
}

