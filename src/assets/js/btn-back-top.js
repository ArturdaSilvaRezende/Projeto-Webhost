"use strict";

(() => {
  const btnBackTop = $(".btn-back-top");
  const showAfter = 100;

  $(window).on("scroll", () => {
    $(window).scrollTop() > showAfter
      ? btnBackTop.fadeIn()
      : btnBackTop.fadeOut();
  });

  btnBackTop.on("click", () => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      200
    );
    return false;
  });
})();
