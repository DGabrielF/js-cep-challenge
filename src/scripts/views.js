import { state } from "./main.js";

export function getCEP(target) {
  if (target.value.length <= 8) {
    const result = target.value.replace(/[^0-9]/g, "");
    state.cepInputed = result;
    target.value = result;
  } else {
    target.value = state.cepInputed;
  }
  target.style.boxShadow = (target.value.length === 8)?"none":"0px 0px 3px red"
}

export function toggleDisabled(disabled) {
  const complement = document.querySelector("#complement");
  complement.disabled = disabled;
  const complementNumber = document.querySelector("#number");
  complementNumber.disabled = disabled;
  const confirmButton = document.querySelector(".btn_confirm");
  confirmButton.disabled = disabled;
}

export function setEntriesValues() {
  const citySpan= document.querySelector("#city_span");
  citySpan.value = state.result.localidade;
  const stateSpan= document.querySelector("#state_span");
  stateSpan.value = state.result.uf;
  const logradouroSpan= document.querySelector("#logradouro_span");
  logradouroSpan.value = state.result.logradouro;
  const bairroSpan = document.querySelector("#bairro_span");
  bairroSpan.value = state.result.bairro;
  const complement = document.querySelector("#complement");
  complement.value = state.result.complemento;
  const complementNumber = document.querySelector("#number");
  complementNumber.value = "S/N";
}

export function handleErrorMessage(message) {
  const errorMessage = document.querySelector(".error_message");
  errorMessage.textContent = message;
  errorMessage.style.display = "flex"
  setTimeout(() => {
    errorMessage.textContent = "";
    errorMessage.style.display = "none"
  }, 3000)
}

export function cleanCEP() {
  setTimeout(() => {
    const cep = document.querySelector("#cep");
    cep.value = ""
  }, 3100)
}