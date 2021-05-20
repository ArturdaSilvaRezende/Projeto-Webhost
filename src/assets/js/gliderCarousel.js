import "../Glider.js/glider.min";

new Glider(document.querySelector(".glider"), {
  draggable: true,
  dots: ".dots",
  arrows: {
    prev: ".customer-reviews-prev",
    next: ".customer-reviews-next",
  },
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3.3,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
      },
    },
  ],
});
