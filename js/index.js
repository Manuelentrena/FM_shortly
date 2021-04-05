import { getData } from "./getData.js";
import { showLink } from "./showLink.js";
import { showError, cleanError } from "./error.js";

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
