//Arquivo Javascript - Validação de Login

let btn = document.querySelector("#button");
let email = document.querySelector("#email");
let nome = document.querySelector("#nome");
let senha = document.querySelector("#senha");
let msgError = document.querySelector("#error");
btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (nome.value == "" || senha.value == "" || email.value == "") {
    msgError.textContent = "Preencha Todos os Dados!";
    msgError.style.color = "red";
    setTimeout(() => {
      msgError.textContent = "";
    }, 2000);
    return;
  } else {
    nome.value = "";
    email.value = "";
    senha.value = "";
    return;
  }
});
