"use strict";

(() => {
  let debounce = function (func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  $(function () {
    let target = $(".scroll-anime");
    let offSet = ($(window).height() * 3) / 4;
<<<<<<< HEAD

    animaScroll();

=======
    animaScroll();
>>>>>>> b92d92d039e0531b23e5fb8b1d38678ce039b2b1
    function animaScroll() {
      let documentTop = $(document).scrollTop();

      target.each(function () {
        let itenTop = $(this).offset().top;

        if (documentTop > itenTop - offSet) {
          $(this).addClass("anime-start");
        } else {
          $(this).removeClass("anime-start");
        }
      });
    }

    $(document).on(
      "scroll",
      debounce(() => {
        animaScroll();
      }, 200)
    );
  });
})();
