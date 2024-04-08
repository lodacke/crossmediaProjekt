export function endSession(node, functionCall){

    document.querySelector(`${node}`).addEventListener("click", () => {
        functionCall()
    })
}