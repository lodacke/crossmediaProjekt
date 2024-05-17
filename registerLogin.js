import { main, body, dialog, globalHolder } from "./utilities/variable.js";
import { renderHomepage } from "./main.js"
import { userMessage } from "./utilities/userMessage.js";
import { swapStyleSheet } from "./utilities/cssSwap.js";

export async function renderLogin() {
    swapStyleSheet("CSS/loginReg.css")
    main.innerHTML = `
    <h1>LOGGA IN</h1>
    <section>
        <div>
            <label>ANVÄNDARNAMN</label>
            <input class="username">
        </div>
        <div>
            <label>LÖSENORD</label>
            <input class="password" type="password">
        </div>
        <p class="linkText">Har du inte ett konto? <a href="#">Registrera</a></p>
        <p id="userMessage"></p>
    </section>
    
    <button>STARTA SPELET</button>
    `;

    main.querySelector("a").addEventListener("click", e => {
        renderRegister()
    })

    main.querySelector("button").addEventListener("click", async function () {
        let username = main.querySelector(".username")
        let password = main.querySelector(".password")
        let messageDom = main.querySelector("#userMessage");

        try {

            let response = await fetch("API/login.php", {
                method: "POST",
                body: JSON.stringify({
                    username: username.value,
                    password: password.value,
                })
            });

            let data = await response.json()

            if (!response.ok) {
                userMessage(messageDom, data.message)
            } else {

                window.localStorage.setItem("user", JSON.stringify(data.username));
                renderHomepage()
            }

        } catch (error) {
            userMessage(messageDom, error.message)
        }
    })

    document.addEventListener("DOMContentLoaded", (event) => {
        const hasInstructionBeenShown = sessionStorage.getItem("instructionShown");

        if (!hasInstructionBeenShown) {
            dialog.show()
            dialog.style.display = `block`;
            dialog.setAttribute("id", "instructionsDialog")
            document.querySelector(".overlay").style.display = `block`;

            dialog.innerHTML = ` 
                <div>
                    <h2>UPPLEVELSE</h2>
                    <p>För bäst upplevelse: <br>1. Öppna sidan på Safari (webbläsare) <br>2. Tryck på ikonen till vänster om historik <br>3. Tryck på 'Lägg till i hemskärmen</p>
                    <button>Got it!</button>
                </div>  
            `;

            dialog.querySelector("button").addEventListener("click", () => {
                dialog.removeAttribute("id", "instructionsDialog")
                dialog.close()
                dialog.style.display = `none`;
                document.querySelector(".overlay").style.display = `none`;
                sessionStorage.setItem("instructionShown", "true");
            })
        }
    })
}

export async function renderRegister() {
    main.innerHTML = `
    <h1>REGISTRERA</h1>
    <section>
        <div>
            <label>ANVÄNDARNAMN</label>
            <input class="username">
        </div>
        <div>
            <label>LÖSENORD</label>
            <input class="password" type="password">
        </div>
        <div>
            <label>UPPREPA LÖSENORD</label>
            <input class="passwordRepeat" type="password">
        </div>
        <p class="linkText">Har du redan ett konto? <a href="#">Logga in</a></p>
        <p id="userMessage"></p>
    </section>
    
    <button>SKAPA KONTO</button>
    `;

    main.querySelector("a").addEventListener("click", e => {
        renderLogin()
    })

    main.querySelector("button").addEventListener("click", async function () {

        let username = main.querySelector(".username");
        let password = main.querySelector(".password");
        let passwordRepeat = main.querySelector(".passwordRepeat");
        let messageDom = main.querySelector("#userMessage");

        try {

            let response = await fetch("API/register.php", {
                method: "POST",
                body: JSON.stringify({
                    username: username.value,
                    password: password.value,
                    passwordRepeat: passwordRepeat.value
                })
            });

            let data = await response.json()

            if (!response.ok) {
                userMessage(messageDom, data.message)
            } else {
                userMessage(messageDom, "New user have been added")
                setTimeout(() => {
                    messageDom.textContent = "";
                    window.localStorage.setItem("user", JSON.stringify(data.username));
                    renderHomepage()
                }, 2000);

            }

        } catch (error) {
            userMessage(messageDom, error.message)
        }
    })
}


