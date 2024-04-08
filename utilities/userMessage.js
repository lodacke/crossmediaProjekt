export function userMessage (node, message){
    node.textContent = message
   setTimeout(() => {
         node.textContent = "";
  }, 2000);

}