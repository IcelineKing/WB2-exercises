"use strict";

window.onload = init;

function init() {
  const greetBtn = document.getElementById("greetBtn");
  greetBtn.onclick = onGreetUserBtnClicked;
}

function onGreetUserBtnClicked() {
  let nameField = document.getElementById("nameField");
  let greetname = nameField.value;
  alert("Hi " + greetname);
}
