$(".botao-form").click(function (e) {
  var nome = $("#nome").val();
  var email = $("#email").val();
  var cpf = $("#cpf").val();
  var erro = false;
  var msg = "";
  if (nome.length <= 2) {
    $("#nome").addClass("invalid");
    msg = "Preencha o campo nome";
    erro = true;
  } else {
    $("#nome").removeClass("invalid");
  }

  if (!email.includes("@") || !email.includes(".")) {
    $("#email").addClass("invalid");
    msg = "Email inválido";
    erro = true;
  } else {
    $("#email").removeClass("invalid");
  }

  if (!/^\d{3}[\.]?\d{3}[\.]?\d{3}[\-]?\d{2}$/.test(cpf)) {
    $("#cpf").addClass("invalid");
    msg = "CPF inválido";
    erro = true;
  } else {
    $("#cpf").removeClass("invalid");
  }

  if (erro) {
    e.preventDefault();
    alert(msg);
    return false;
  }
  return true;
});
