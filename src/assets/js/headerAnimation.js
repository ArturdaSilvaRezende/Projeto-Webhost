"use strict";

(() => {
  $(function () {
    const header = $(".header");

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 500) {
        header.addClass("header-animation-show");
      } else {
        header.removeClass("header-animation-show");
      }
    });
  });
})();
