/*global $*/

$(function () {
  "use strict";

  var $grid = $(".grid"),
    i;

  /*--------------------------------
        Isotope Plugin
    ----------------------------------*/
  $(window).on("load", function () {
    $grid.isotope({
      // options...
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use element for option
        columnWidth: ".grid-sizer",
      },
    });
    //-- filter items on button click --//
    $(".portfolio ul li").on("click", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
      $(this).addClass("active_filter").siblings().removeClass("active_filter");
    });
  });

  /*----------------------------------------------
        Window height
    -----------------------------------------------*/
  $(".full_height").height($(window).height());

  /*--------------------------------
        Navbar
    ----------------------------------*/
  //-- navbar mobile menu --//
  $("nav .navbar-nav li a").on("click", function () {
    $(".navbar-collapse").removeClass("in");
    $(".navbar-toggle").addClass("collapsed");
  });

  function nav__scroll() {
    if ($(window).scrollTop() >= 50) {
      $("nav").addClass("nav_scroll");
    } else {
      $("nav").removeClass("nav_scroll");
    }
  }
  nav__scroll();

  /*--------------------------------
        Smooth Scroll
    ----------------------------------*/
  $(".smooth_scroll").on("click", function (event) {
    event.preventDefault();
    if (this.hash !== "") {
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  /*--------------------------------
        Window Scroll
    ----------------------------------*/
  $(window).on("scroll", function () {
    var my_skill = ".about .skills .skill",
      animated_on_scroll = ".animated";

    if ($(my_skill).length) {
      spy_scroll(my_skill);
    }

    if ($(animated_on_scroll).length) {
      spy_scroll(animated_on_scroll, "animate");
    }

    nav__scroll();

    //-- Scroll top --//
    var scrollTop = $(".top"),
      pageloading = ".pageloading";
    if (scrollTop.length !== 0) {
      if ($(window).scrollTop() >= $(".about").offset().top) {
        scrollTop.addClass("scroll_top_show");
      } else {
        scrollTop.removeClass("scroll_top_show");
      }
    }
  });

  /*--------------------------------
        Window Resize
    ----------------------------------*/
  $(window).on("resize", function () {
    $(".full_height").height($(window).height());
  });

  /*--------------------------------
        Preloader
    ----------------------------------*/
  $(window).on("load", function () {
    $(".startLoad").fadeOut("slow");
  });
});
