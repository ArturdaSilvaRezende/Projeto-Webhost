"use strict";

(() => {
  $(window).on("scroll", () => {
    //A const abaixo vai pegar a cordenada do container, no caso a cordenada entre esse container e o top e diminuir pela altura da área do conteúdo.
    const hostedContainer =
      $("#hostedContainer").offset().top - window.innerHeight;

    if ($(window).scrollTop() > hostedContainer) {
      $(".counter-value").each(function () {
<<<<<<< HEAD
        //variável convencional recebendo o this
=======
>>>>>>> b92d92d039e0531b23e5fb8b1d38678ce039b2b1
        let $this = $(this),
          countTo = $this.attr("data-count");

        $(this)
<<<<<<< HEAD
          //Onde o "Counter" e o nome da propriedade, 0 é o valor de exemplo padrão de prop (poderia ser qualquer número ou string)
          .prop("Counter", 0)
          .animate(
            {
              //O "Counter", vai pegar o conteúdo de texto das classes referente a counter-value e vai modificalo
              Counter: $(this).text(),

              //O "counterValue" vai receber o conteúdo do atributo data-count
              counterValue: countTo,
            },
            {
              duration: 4000,
              easing: "swing",
              //O step com base no conteúdo da variável countTo, vai execultar a extrutura abaixo a cada passo da animação
              step: function () {
                //A linha abaixo vai receber o conteúdo (os numeros) e arredondar e retornar um numero inteiro
=======
          .prop("Counter", 1)
          .animate(
            {
              Counter: $(this).text(),
              counterValue: countTo,
            },
            {
              duration: 6000,
              easing: "swing",
              step: function () {
>>>>>>> b92d92d039e0531b23e5fb8b1d38678ce039b2b1
                $(this).text(Math.floor(this.counterValue));
              },
            }
          );
      });
    }
  });
})();
