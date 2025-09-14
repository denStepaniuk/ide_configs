
const { JSDOM } = require("jsdom");

// create a fake DOM
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const { window } = dom;
const { document } = window;

// you can now use window.alert and document
window.alert = (msg) => console.log("Alert:", msg);

function alloha(assertion) {
  window.alert(assertion);
  console.log(document.querySelector("p").textContent);
}

alloha();
