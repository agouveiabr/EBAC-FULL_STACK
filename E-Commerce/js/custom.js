// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();

  let titulos = $("h4"); // tag

  let itens = $(".featured-item"); // class

  let destaques = $("#featured"); // id

  console.log(titulos.first());

  // Configuração de produtos

  $(".featured-item a").addClass("btn btn-dark stretch-link");

  $(".featured-item:first h4").append(
    '<span class="badge bg-secondary">Novo</span>'
  );

  $(".featured-item h4").dblclick(function () {
    $(this).css({
      color: "#f00",
      background: "#ff0",
      "font-weight": "100",
    });
  });

  /*
   * Manipulação de eventos
   */
  $(".featured-item a").on("blur", function (event) {
    event.preventDefault();

    alert("Produto esgotado");
  });
});

$(function () {
  $("#tabs").tabs();
});
