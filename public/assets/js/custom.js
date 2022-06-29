var sw = $(window).width();
var sh = $(window).height();

function imagePath() {
  $("img").each(function () {
    var $element = $(this);
    if (sw > 767) {
      if ($element[0].hasAttribute("data-desktop-src")) {
        var imageUrl = $element.attr("data-desktop-src");
        $element.attr("src", imageUrl);
        $element.removeAttr("data-desktop-src");
        $element.removeAttr("data-mobile-src");
      } else if ($element[0].hasAttribute("data-both-src")) {
        var imageUrl = $element.attr("data-both-src");
        $element.attr("src", imageUrl);
        $element.removeAttr("data-both-src");
      }
    } else {
      if ($element[0].hasAttribute("data-mobile-src")) {
        var imageUrl = $element.attr("data-mobile-src");
        $element.attr("src", imageUrl);
        $element.removeAttr("data-desktop-src");
        $element.removeAttr("data-mobile-src");
      } else if ($element[0].hasAttribute("data-both-src")) {
        var imageUrl = $element.attr("data-both-src");
        $element.attr("src", imageUrl);
        $element.removeAttr("data-both-src");
      }
    }
  });
}

$(window).on("load", function () {
  //Header classes for inner pages.
  $("#innerFullpage")
    .find("header")
    .addClass("fp-auto-height fp-section fp-table");

  if (sw < 1365) {
    $(".location-section").addClass("fp-auto-height fp-section fp-table");
    //$('.newsroom-feature').addClass('fp-auto-height fp-section fp-table')
  }

  //scroll window to the top
  $(window).scrollTop(0);

  $(".banner-grid").addClass("show");
  if (sw < 922) {
    $(".video video").trigger("play");
  }

  //loader init
  setTimeout(function () {
    $("div:contains('Unlicensed fullPage.js Extension')").hide();
    $(".loader-first").fadeOut("slow");
    $("html").removeClass("loadjs");
    $(".colored-wrapper").addClass("active");
  }, 1000);

  $("ul.dropdown-menu.inner.show").mCustomScrollbar({
    theme: "dark",
  });

  if ($(document).find("div").hasClass("ux__backimg")) {
    var $backImg, imgCount, imgSrc, randSrc;
    $backImg = $(".ux__backimg img");
    imgCount = parseInt($backImg.attr("data-imgcount"));
    imgSrc = $backImg.attr("data-random-src");
    randSrc = Math.floor(Math.random() * imgCount + 1);
    $backImg.attr("src", imgSrc + randSrc + ".jpg");
    $backImg.removeAttr("data-imgcount");
    $backImg.removeAttr("data-random-src");
  }
  if ($(document).find("img").hasClass("svg-convert")) {
    $(".svg-convert").svgConvert({
      onComplete: function () {},
    });
  }

  setTimeout(function () {
    /* ---------------- In View Animation -------------------- */
    $(".animate").bind("inview", function (event, isInView) {
      if (isInView) {
        var animate = $(this).attr("data-animation");
        var speedDuration = $(this).attr("data-duration");
        var $t = $(this);
        setTimeout(function () {
          $t.removeClass("animate");
          $t.addClass(animate + " animated");
        }, speedDuration);
      }
    });
    imagePath();
  }, 3000);

  $(".find-villa").click(function (e) {
    e.preventDefault();
    $(this).parent(".header__wrapper").toggleClass("open--child");
  });
  $(".header-villa-cross").click(function (e) {
    e.preventDefault();
    $(this).parent(".header__wrapper").removeClass("open--child");
  });
});

function fontResizer() {
  var perc = parseInt(sw) / 118.9375;
  $("body").css("font-size", perc);
}

$(window).on("resize orientation", function () {
  sw = $(window).width();
  sh = $(window).height();
  if (sh < 450 && sw > 480 && sw < 820) {
    $("#portrait-warnning").css("display", "flex");
  } else {
    $("#portrait-warnning").css("display", "none");
  }

  setTimeout(function () {
    if (sw > 1025) {
      if (sw < 1400 && sw > 1300 && sh > 900) {
      } else {
        fontResizer();
      }
    }
  }, 1000);
});

$(window).scroll(function () {
  var header1 = $(".header");
  var sticky1 = 0;
  //if (sw < 767) {
  if (window.pageYOffset > sticky1) {
    header1.addClass("sticky");
  } else {
    header1.removeClass("sticky");
  }
  //}
});

function activeSlider() {
  if ($(document).find("div").hasClass("sustainable-thumb")) {
    var sustainableThumb = new Swiper(".sustainable-thumb .swiper-container", {
      slidesPerView: 3,
      allowTouchMove: false,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      infinite: false,
      direction: "vertical",
      disableOnInteraction: true,
    });
  }
  if ($(document).find("div").hasClass("sustainable-slider")) {
    var swiper2 = new Swiper(".sustainable-slider .swiper-container", {
      // effect: "fade",
      // loop: true,
      // fadeEffect: { crossFade: true },
      slidesPerView: 1,
      speed: 1000,
      // autoplay: {
      //     disableOnInteraction: true,
      //     delay: 3000,
      // },
      thumbs: {
        swiper: sustainableThumb,
      },
    });
  }

  // if ($(document).find('div').hasClass('sustainable-text')) {
  //     var sustainableText = new Swiper(".sustainable-text .swiper-container", {
  //         // effect: "fade",
  //         // loop: true,
  //         // fadeEffect: { crossFade: true },
  //         slidesPerView: 1,
  //         disableOnInteraction: true,
  //     });
  // }

  // swiper2.controller.control = sustainableText;
}
if ($(document).find("div").hasClass("thumb-home")) {
  var thumbhome = new Swiper(".thumb-home .swiper-container", {
    slidesPerView: 2,
    allowTouchMove: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    infinite: false,
  });
}

if ($(document).find("div").hasClass("home-appartment")) {
  var homeAppartment = new Swiper(".home-appartment .swiper-container", {
    // loop: true,
    effect: "fade",
    // loop: true,
    fadeEffect: {
      crossFade: true,
    },
    slidesPerView: 1,
    speed: 1000,
    // autoplay: {
    //     disableOnInteraction: true,
    //     delay: 3000,
    // },
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    thumbs: {
      swiper: thumbhome,
    },
  });
}

$(document).ready(function () {
  var thumbNavigation = new Swiper(".feature-navigation", {
    slidesPerView: 3,
    watchSlidesProgress: true,
    direction: "horizontal",
    autoplay: true,
    speed: 1000,
    breakpoints: {
      1199: {
        direction: "vertical",
      },
    },
  });

  var swiper = new Swiper(".feature-wrap-content", {
    spaceBetween: 10,
    slidesPerView: 1,
    effect: "fade",
    watchSlidesProgress: true,
    allowTouchMove: false,
    autoplay: true,
    speed: 1000,
    thumbs: {
      swiper: thumbNavigation,
    },
  });
  var sliderPagination = new Swiper(".feature-img-wrapper", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  AOS.init();
  //Fill colored Animation
  // setTimeout(() => {
  //     $('.colored-wrapper').addClass('active')
  // }, 2500);

  // Fullpage initialization for home
  new fullpage("#fullPage", {
    autoScrolling: true,
    navigation: true,
    navigationTooltips: [
      "The Sustainable City Yiti",
      "Sustainable Features",
      "Master Plan",
      "Newsroom",
      "Location",
    ],
    anchors: [
      "TheSustainableCityYiti",
      "SustainableFeatures",
      "MasterPlan",
      "Newsroom",
      "Location",
    ],
    showActiveTooltip: true,
    scrollingSpeed: 1000,
    navigationPosition: "left",
    fadingEffect: true,
    scrollHorizontally: true,
    fadingEffect: "slides",
    onLeave: function (index, nextIndex, direction) {
      var leavingSection = $(this);

      //after leaving section 2
      if (direction == "down") {
        $(".header").addClass("hdr-white");
      } else if (direction == "up") {
        $(".header").removeClass("hdr-white");
      }
    },

    // fadingEffect: true,
    // fixedElements: '#header',
    // scrollHorizontally: true,
    // scrollHorizontallyKey: 'YWx2YXJvdHJpZ28uY29tX01mU2MyTnliMnhzU0c5eWFYcHZiblJoYkd4NVNRcg==',
    // afterSlideLoad: function (section, origin, destination, direction) {
    //     console.log({
    //         section: section,
    //         origin: origin,
    //         destination: destination,
    //         direction: direction
    //     });
    // },
    // onSlideLeave: function (section, origin, destination, direction) {
    //     console.log({
    //         section: section,
    //         origin: origin,
    //         destination: destination,
    //         direction: direction
    //     });
    // }
  });

  // init Select
  $(".slctpkr").selectpicker({
    style: "btn-default",
  });

  //Location addition of child

  $(".mina .nav-link").on("click", function () {
    $(".areoplane").addClass("d-none");
    $(".location-section .cross-icon").removeClass("d-none");
  });

  $(".yitti .nav-link").on("click", function () {
    $(".areoplane").addClass("d-none");
    $(".location-section .cross-icon").removeClass("d-none");
  });

  $(".location-section .cross-icon").on("click", function () {
    $(this).addClass("d-none");
    $(".mina .nav-link").removeClass("active");
    $(".yitti .nav-link").removeClass("active");
    $(".areoplane .nav-link").addClass("active");
    $(".areoplane").removeClass("d-none");
    $("#myTabContent").children().removeClass("active show");
    $("#aeroplane-img").addClass("active show");
  });

  // var items = $(".news-wrapper");
  // var numItems = items.length;
  // var perPage = 12;
  // if (sw < 767) {
  //     var perPage = 4;
  // }

  // items.slice(perPage).hide();

  $("#pagination-container").pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "PREV",
    nextText: "NEXT",
    onPageClick: function (pageNumber) {
      var showFrom = perPage * (pageNumber - 1);
      var showTo = showFrom + perPage;
      items.hide().slice(showFrom, showTo).show();
      f.preventDefault();
    },
  });

  var items = $(".news-wrappers");
  var numItems = items.length;
  var perPage = 12;

  items.slice(perPage).hide();

  $("#pagination-container1").pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "Prev",
    nextText: "Next",
    onPageClick: function (pageNumber) {
      var showFrom = perPage * (pageNumber - 1);
      var showTo = showFrom + perPage;
      items.hide().slice(showFrom, showTo).show();
      f.preventDefault();
    },
  });
  //-------------------------------------------------- Homepage Slider -----------------------------------------------------//
  var interleaveOffset = 0.5;
  var swiperOptions = {
    loop: true,
    speed: 1000,
    watchSlidesProgress: true,
    autoplay: {
      disableOnInteraction: false,
      delay: 5000,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      progress: function () {
        var hswiper = this;
        for (var i = 0; i < hswiper.slides.length; i++) {
          var slideProgress = hswiper.slides[i].progress;
          var innerOffset = hswiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;
          hswiper.slides[i].querySelector(".hero__img").style.transform =
            "translate3d(" + innerTranslate + "px, 0, 0)";
        }
      },
      touchStart: function () {
        var hswiper = this;
        for (var i = 0; i < hswiper.slides.length; i++) {
          hswiper.slides[i].style.transition = "";
        }
      },
      setTransition: function (speed) {
        var hswiper = this;
        for (var i = 0; i < hswiper.slides.length; i++) {
          hswiper.slides[i].style.transition = speed + "ms";
          hswiper.slides[i].querySelector(".hero__img").style.transition =
            speed + "ms";
        }
      },
    },
  };
  var heroSl = new Swiper(".js-hero .swiper-container", swiperOptions);

  //-------------------------------------------------- Bedroom Gallery Slider -----------------------------------------------------//

  var swiper = new Swiper(".js-gallerySlider", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 900,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      disableOnInteraction: false,
      delay: 5000,
    },
  });

  // -------------------------------------------------home page Running map tabs-----------------------------------------------------//

  $(".one-map").on("click", function () {
    $(".one-map-wrap").removeClass("d-none").siblings().addClass("d-none");
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .parent()
      .siblings(".img__wrapper")
      .addClass("active");
  });
  $(".two-map").on("click", function () {
    $(".two-map-wrap").removeClass("d-none").siblings().addClass("d-none");
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .parent()
      .siblings(".img__wrapper")
      .addClass("active");
  });
  $(".three-map").on("click", function () {
    $(".three-map-wrap").removeClass("d-none").siblings().addClass("d-none");
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .parent()
      .siblings(".img__wrapper")
      .addClass("active");
  });
  $(".four-map").on("click", function () {
    $(".four-map-wrap").removeClass("d-none").siblings().addClass("d-none");
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .parent()
      .siblings(".img__wrapper")
      .addClass("active");
  });
  $(".five-map").on("click", function () {
    $(".five-map-wrap").removeClass("d-none").siblings().addClass("d-none");
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .parent()
      .siblings(".img__wrapper")
      .addClass("active");
  });
  $(".six-map").on("click", function () {
    $(".six-map-wrap").removeClass("d-none").siblings().addClass("d-none");
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .parent()
      .siblings(".img__wrapper")
      .addClass("active");
  });
  $(".seven-map").on("click", function () {
    $(".seven-map-wrap").removeClass("d-none").siblings().addClass("d-none");
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .parent()
      .siblings(".img__wrapper")
      .addClass("active");
  });

  $(".cross").on("click", function () {
    $(".default-img")
      .removeClass("d-none")
      .siblings()
      .addClass("d-none")
      .parent()
      .removeClass("active");
    $(".runing__wrapper li").removeClass("active");
  });
  //-------------------------------------------------- Bedroom Features Slider -----------------------------------------------------//

  var swiper = new Swiper(".js-featureSlider", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1200,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      disableOnInteraction: false,
      delay: 5000,
    },
  });
  //-------------------------------------------------- Bedroom Gallery Slider -----------------------------------------------------//
  var swiper = new Swiper(".newsSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".news-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  //Fullpage Animation init
  new fullpage("#innerFullpage", {
    autoScrolling: true,
    navigation: true,
    showActiveTooltip: true,
    scrollingSpeed: 1000,
    navigationPosition: "left",
  });

  // Fullpage Initialization for Innrepage
  // new fullpage('#innerFullpage', {
  //     navigation: false,
  //     showActiveTooltip: false,
  // });

  //Custom scroller initializer
  $(".scroll-content").mCustomScrollbar({
    theme: "dark",
  });

  //Header Menu active

  var headerMenu = $(".h-service-item.haschildren.hasMenu");

  headerMenu.on("mouseenter", function () {
    $(this).toggleClass("box-hover");
    $("header").toggleClass("header-light dark-light");
  });

  headerMenu.on("mouseleave", function () {
    $(this).toggleClass("box-hover");
    $("header").toggleClass("header-light dark-light");
  });

  //Sustainable Slider

  $(".sustainable-feature").bind("inview", function (event, isInView) {
    $(this).addClass("once");
    if (jQuery(".active.fp-section").attr("id") == "pin-section") {
      setTimeout(function () {
        activeSlider();
      }, 3000);
    }
  });

  //Menu Toggle function

  $(".toggle-menu").click(function () {
    $("html").toggleClass("open-menu");
    $(this).toggleClass("open");
    $(".right--nav").toggleClass("active");
    $(".navigation-box").removeClass("service--opened");
    $(".service-list").removeClass("show");
  });

  //sticky label on detail page
  $(".footer").bind("inview", function (event, isInView) {
    $(this).addClass("once");
    if ($(".active.fp-section").attr("id") == "footer") {
      $(".unit-ribbon").appendTo("#appended-sec").fadeIn("slow");
    } else {
      $(".unit-ribbon").appendTo("#sticky-label").fadeIn("slow");
    }
  });
});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

$(function () {
  $(".register-popup-open").on("click", function () {
    $(".register-popup").fadeIn("slow");
    $("body").addClass("popup-open");
  });
  $(".register-popup__cross-btn").on("click", function (e) {
    e.stopPropagation();
    $(".register-popup").fadeOut("slow");
    $("body").removeClass("popup-open");
  });

  $(".master-plan-card .c-btn").on("click", function () {
    $(".master-plan-card__title-wrapper").fadeToggle("slow");
    $(".master-plan-card .c-btn").fadeToggle("fast");
  });
});

$(function () {
  if ($("body").has(".floor-plans__box")) {
    Fancybox.bind("[data-fancybox]", {
      dragToClose: false,
    });
  }
});

$(function () {
  function villaSelect() {
    let valueSelectedd = $(
      ".master-plan-card__title-wrapper--fields form select"
    ).val();
    $("#villas-submit").attr("href", valueSelectedd);
  }
  villaSelect();

  $(".master-plan-card__title-wrapper--fields form select").on(
    "change",
    function (e) {
      let valueSelected = this.value;
      $("#villas-submit").attr("href", valueSelected);
    }
  );
});

console.log("hello");

// International telephone format
// $("#phone").intlTelInput();
// get the country data from the plugin
var countryData = window.intlTelInputGlobals.getCountryData(),
  input = document.querySelector("#phone"),
  addressDropdown = document.querySelector("#address-country");

// init plugin
var iti = window.intlTelInput(input, {
  hiddenInput: "full_phone",
  utilsScript:
    "https://intl-tel-input.com/node_modules/intl-tel-input/build/js/utils.js?1549804213570", // just for formatting/placeholders etc
});

// populate the country dropdown
for (var i = 0; i < countryData.length; i++) {
  var country = countryData[i];
  var optionNode = document.createElement("option");
  optionNode.value = country.iso2;
  var textNode = document.createTextNode(country.name);
  optionNode.appendChild(textNode);
  addressDropdown.appendChild(optionNode);
}
// set it's initial value
addressDropdown.value = iti.getSelectedCountryData().iso2;

// listen to the telephone input for changes
input.addEventListener("countrychange", function (e) {
  addressDropdown.value = iti.getSelectedCountryData().iso2;
});

// listen to the address dropdown for changes
addressDropdown.addEventListener("change", function () {
  iti.setCountry(this.value);
});
