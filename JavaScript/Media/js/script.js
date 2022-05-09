//Ativado a partir do submit
document.addEventListener("submit", function (evento) {
  //Impede o submit
  evento.preventDefault();

  let form = document.getElementById("form-01");
  let dados = new FormData(form);
  let objeto = {};
  let notas = 0;

  for (let key of dados.keys()) {
    objeto[key] = dados.get(key);

    notas += parseInt(objeto[key]);
  }

  document.getElementById("resultado").innerHTML = media(notas);
});

function media(notas) {
  let media = notas / 4;

  return "Media: " + media;
}
