console.log("Started");

const button = document.querySelector("button");

function clickHandler(message: string) {
  console.log("Clicked! " + message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, 'Youre welcome!'));
}
