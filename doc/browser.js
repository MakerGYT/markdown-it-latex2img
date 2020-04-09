const md = require("markdown-it")();
md.use(require("../index"));

let input = document.getElementById("input"),
  output = document.getElementById("output"),
  button = document.getElementById("button");

button.addEventListener("click", () => {
  let result = md.render(input.value);
  output.innerHTML = result;
});
