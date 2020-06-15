var botaoPesquisar = document.querySelector("#pesquisar");
botaoPesquisar.addEventListener("click", function (event) {
  event.preventDefault();

  var erros = validar();

  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }

  if (erros.length == 0) {
    document.getElementById("email").style.borderBottomColor = "black";
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
  var erros = [];

  

  if (email.length == 0) {
    document.getElementById("email").style.borderBottomColor = "red";
    erros.push('Campo email Obrigatório.');
  }


  if ((email != 0) && ((email.indexOf("@") < 1) || (email.indexOf('.') < 7))) {
    document.getElementById("email").style.borderBottomColor = "red";
    erros.push('Informe um email Válido.');
  }

  return erros;
}
