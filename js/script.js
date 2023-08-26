
(function ($) {
  "use strict";

  // AOS ANIMATIONS
  AOS.init();

  // NAVBAR
  $(".navbar-nav .nav-link").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // skills IMAGE RESIZE
  function skillsImageResize() {
    $(".navbar").scrollspy({ offset: -76 });

    var LargeImage = $(".large-portfolio-image").height();

    var MinusHeight = LargeImage - 6;

    $(".portfolio-two-column").css({
      height: MinusHeight - LargeImage / 2 + "px"
    });
  }

  $(window).on("resize", skillsImageResize);
  $(document).on("ready", skillsImageResize);

  $('a[href*="#"]').click(function (event) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 66
          },
          1000
        );
      }
    }
  });
})(window.jQuery);



$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});


$(document).ready(function () {
  $(".customer-logos2").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
      dots: false,
      pauseOnHover: false,
      rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});