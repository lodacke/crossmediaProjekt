export function userMessage (node, message){
    node.textContent = message
   setTimeout(() => {
         node.textContent = "";
  }, 3000);

}