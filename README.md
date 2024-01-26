# Projeto de Formulário com Auto-completar usando API de CEP

Este projeto consiste em um formulário web que utiliza a API de CEP para preencher automaticamente parte do formulário, permitindo ao usuário confirmar os dados ou editar conforme necessário.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- [API de CEP](#inserir-link-da-api-utilizada)

## Funcionalidades

1. **Entrada de CEP**: O usuário insere o CEP no formulário.
2. **Busca na API**: O aplicativo faz uma solicitação à API de CEP para obter os dados associados ao CEP.
3. **Auto-completar**: Os campos do formulário são automaticamente preenchidos com os dados fornecidos pela API.
4. **Edição e Confirmação**: Algumas áreas do formulário são editáveis, permitindo ao usuário ajustar os dados conforme necessário. O botão de confirmação é habilitado após o sucesso da busca.
5. **Feedback de Erro**: Se ocorrer um erro durante a busca na API, uma mensagem de erro é exibida na tela.
