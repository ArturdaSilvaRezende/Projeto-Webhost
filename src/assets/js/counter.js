"use strict";

(() => {
  $(window).on("scroll", () => {
    //A const abaixo vai pegar a cordenada do container, no caso a cordenada entre esse container e o top e diminuir pela altura da área do conteúdo.
    const hostedContainer =
      $("#hostedContainer").offset().top - window.innerHeight;

    if ($(window).scrollTop() > hostedContainer) {
      $(".counter-value").each(function () {
        let $this = $(this),
          countTo = $this.attr("data-count");

        $(this)
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
                $(this).text(Math.floor(this.counterValue));
              },
            }
          );
      });
    }
  });
})();
