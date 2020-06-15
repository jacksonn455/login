var botaoRegistrar = document.querySelector("#registrar");
botaoRegistrar.addEventListener("click", function (event) {
  event.preventDefault();

  var erros = validar();

  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }

  if (erros.length == 0) {
    document.getElementById("user").style.borderBottomColor = "black";
    document.getElementById("password").style.borderBottomColor = "black";
    document.getElementById("email").style.borderBottomColor = "black";
    document.getElementById("ConfirmarPassword").style.borderBottomColor = "black";
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

  var user = form1.user.value;
  var confirmar = form1.ConfirmarPassword.value;  
  var email = form1.email.value;
  var senha = form1.password.value;
  var erros = [];

  if (user.length == 0) {
    document.getElementById("user").style.borderBottomColor = "red";
    erros.push('Campo usuário Obrigatório.');
  }

  if (email.length == 0) {
    document.getElementById("email").style.borderBottomColor = "red";
    erros.push('Campo email Obrigatório.');
  }


  if ((email != 0) && ((email.indexOf("@") < 1) || (email.indexOf('.') < 7))) {
    document.getElementById("email").style.borderBottomColor = "red";
    erros.push('Informe um email Válido.');
  }

  if (senha.length == 0) {
    erros.push('Campo senha Obrigatório.');
    document.getElementById("password").style.borderBottomColor = "red";
  }

  if (confirmar.length == 0) {
    erros.push('Campo Confirmar senha Obrigatório.');
    document.getElementById("ConfirmarPassword").style.borderBottomColor = "red";
  }

  if(senha != confirmar){
    erros.push('Campo senha e confirmar senha estão diferentes.');
    document.getElementById("ConfirmarPassword").style.borderBottomColor = "red";
  }

  return erros;
}
