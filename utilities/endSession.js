import { dialog } from "./variable.js"

export function endSession(node, functionCall){

    if(node){
        document.querySelector(`${node}`).addEventListener("click", () => {
            functionCall()
        })
    } else {
        dialog.close()
    }
}