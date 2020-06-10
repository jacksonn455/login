var botaoLogar = document.querySelector("#logar");
botaoLogar.addEventListener("click", function (event) {
    event.preventDefault();

  var email = form1.email.value;
  var senha = form1.password.value;

  if (email == "") {
    alert('Campo email Obrigatório.');
    form1.txtemail.focus();
    return false;
  }

  if ((email != 0) && ((email.indexOf("@") < 1) || (email.indexOf('.') < 7))) {
    alert('Informe um email Válido.');
    form1.txtemail.focus();
    return false;
  }

  if (senha == "") {
    alert('Campo senha Obrigatório.');
    form1.txtsenha.focus();
    return false;
  }

  if (senha.length < 6) {
    alert('Informe uma senha com mais de 5 caracteres.');
    form1.txtsenha.focus();
    return false;
  }

});