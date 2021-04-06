import { getData } from "./getData.js";
import { showLink } from "./showLink.js";
import { showError, cleanError } from "./error.js";

/* CONSULTA A LA API */

const btnShort = document.querySelector("#btnShort");
btnShort.addEventListener("click", showData);

async function showData() {
  cleanError();
  const data = await getData();
  if (data) {
    showLink(data);
  } else {
    showError();
  }
}

/* EL ICONO BURGUER */
const burguerIcon = document.querySelector("#burguerIcon");
const navBurguer = document.querySelector("#navBurguer");
burguerIcon.addEventListener("click", changeIcon);

function changeIcon() {
  this.classList.toggle("change");
  navBurguer.classList.toggle("visible");
}
