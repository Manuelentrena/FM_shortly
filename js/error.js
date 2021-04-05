export function showError() {
  const msg = "Please add a link";

  const error = document.querySelector("#error");
  const inputText = document.querySelector("#inputText");
  inputText.classList.add("input__text--error");
  error.textContent = msg;
}

export function cleanError() {
  const error = document.querySelector("#error");
  const inputText = document.querySelector("#inputText");
  inputText.classList.remove("input__text--error");
  error.textContent = "";
}
