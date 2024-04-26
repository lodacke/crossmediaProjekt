export function userMessage(node, message) {
  node.textContent = message;
  node.style.opacity = "100%";
  
  setTimeout(() => {
    node.textContent = "";
    node.style.opacity = "0";
  }, 2000);

}

