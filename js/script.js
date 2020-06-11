var botaoLogar = document.querySelector("#logar");
botaoLogar.addEventListener("click", function (event) {
  event.preventDefault();

  var erros = validar();

  if (erros.length > 0) {
    console.log(exibeMensagensDeErro(erros));
    exibeMensagensDeErro(erros);
    return;
  }

  if (erros.length == 0) {
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
    mensagensErro.value = "";
  }
});


function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function validar() {

  var email = form1.email.value;
  var senha = form1.password.value;
  var erros = [];

  if (email.length == 0) {
    erros.push('Campo email Obrigatório.');
  }

  if ((email != 0) && ((email.indexOf("@") < 1) || (email.indexOf('.') < 7))) {
    erros.push('Informe um email Válido.');
  }

  if (senha.length == 0) {
    erros.push('Campo senha Obrigatório.');
  }

  return erros;
}

