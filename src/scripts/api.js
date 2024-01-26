import { state } from "./main.js";

export async function getApiData(cep) {
  const response = await fetch(`${state.baseUrl}${cep}/json`);
  if (!response.ok) {
    throw new Error(`Erro ao obter dados. Código de status: ${response.status}`)
  }
  const data = await response.json();
  return data
}