import { getApiData } from "./api.js"
import { cleanCEP, getCEP, handleErrorMessage, setEntriesValues, toggleDisabled } from "./views.js"

export const state = {
  baseUrl: "https://viacep.com.br/ws/",
  mailUrl: "",
  cepInputed: null,
  result: null,
}

async function check() {
  if (state.cepInputed) {
    if (state.cepInputed.length === 8) {
      state.result = await getApiData(state.cepInputed);
      if ("cep" in state.result) {
        toggleDisabled(false);
        setEntriesValues();
      } else {
        handleErrorMessage("Este CEP não foi encontrado");
        cleanCEP();
      }
    }
  }
}

function init () {
  const cepInput = document.querySelector("#cep");
  cepInput.addEventListener("input", (event) => getCEP(event.target));
  cepInput.addEventListener("blur", () => check());

  const linkButton = document.querySelector(".btn_mailLink");
  linkButton.addEventListener("click", openMailLink())

}

init()