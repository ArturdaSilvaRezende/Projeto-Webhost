"use strict";

(() => {
  $(function () {
    const header = $(".header");

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 700) {
        header.css({
          position: "fixed",
          backgroundColor: "black",
          padding: "10px",
          transition: "0.5s ease-in",
          top: 0,
        });
      } else {
        header.css({
          position: "absolute",
          backgroundColor: "transparent",
          top: 0,
        });
      }
    });
  });
})();
