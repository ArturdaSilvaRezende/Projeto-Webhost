"use strict";

(() => {
  $(function () {
    const header = $(".header");

    $(window).on("scroll", function () {
      $(this).scrollTop() > 500
        ? header.addClass("header-animation-show")
        : header.removeClass("header-animation-show");
    });
  });
})();
