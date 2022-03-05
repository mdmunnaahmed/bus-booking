"user strict";

// Preloader
$(window).on("load", function () {
    $(".preloader").fadeOut(1000);
});

//Menu Dropdown
$("ul>li>.sub-menu").parent("li").addClass("has-sub-menu");

$(".menu li a").on("click", function (e) {
    var element = $(this).parent("li");
    if (element.hasClass("open")) {
        element.removeClass("open");
        element.find("li").removeClass("open");
        element.find("ul").slideUp(400, "swing");
    } else {
        element.addClass("open");
        element.children("ul").slideDown(400, "swing");
        element.siblings("li").children("ul").slideUp(400, "swing");
        element.siblings("li").removeClass("open");
        element.siblings("li").find("li").removeClass("open");
        element.siblings("li").find("ul").slideUp(400, "swing");
    }
});

// Responsive Menu
var headerTrigger = $(".header-trigger");
headerTrigger.on("click", function () {
    $(".menu,.header-trigger").toggleClass("active");
    $(".overlay").toggleClass("overlay-color");
    $(".overlay").removeClass("active");
});

var headerTrigger2 = $(".top-bar-trigger");
headerTrigger2.on("click", function () {
    $(".header-top").toggleClass("active");
    $(".overlay").toggleClass("overlay-color");
    $(".overlay").removeClass("active");
});

var over = $(".overlay");
over.on("click", function () {
    $(".overlay").removeClass("overlay-color");
    $(".menu, .header-trigger").removeClass("active");
    $(".header-top").removeClass("active");
});

// Sticky Menu
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
var prevScrollpos = window.pageYOffset;
var scrollPosition = window.scrollY;
if (scrollPosition >= 1) {
    $(".header").addClass("active");
}
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        $(".header-atop").addClass("active");
        $(".header-atop").removeClass("inActive");
    } else {
        $(".header-atop").removeClass("active");
        $(".headera-top").addClass("inActive");
    }
    prevScrollpos = currentScrollPos;
    if (currentScrollPos === 0) {
        $(".headera-top").removeClass("active");
    }
};

// Nice Select
$(".nice-select").niceSelect();

// Scroll To Top
var scrollTop = $(".scrollToTop");
$(window).on("scroll", function () {
    if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
    } else {
        scrollTop.addClass("active");
    }
});

//Click event to scroll to top
$(".scrollToTop").on("click", function () {
    $("html, body").animate(
        {
            scrollTop: 0,
        },
        300
    );
    return false;
});

// pagination
$(".pagination li a").on("click", function () {
    $(".pagination li a").removeClass("active");
    $(this).addClass("active");
});

$(".amenities-slider").slick({
    fade: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    centerMode: false,
    dots: false,
    arrows: false,
    nextArrow: '<i class="las la-arrow-right arrow-right"></i>',
    prevArrow: '<i class="las la-arrow-left arrow-left"></i> ',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
});

$(".brand-slider").slick({
    fade: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    centerMode: false,
    dots: false,
    arrows: false,
    nextArrow: '<i class="las la-arrow-right arrow-right"></i>',
    prevArrow: '<i class="las la-arrow-left arrow-left"></i> ',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
});

$(".testimonial-slider").slick({
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    centerMode: false,
    dots: false,
    arrows: false,
    nextArrow: '<i class="las la-arrow-right arrow-right"></i>',
    prevArrow: '<i class="las la-arrow-left arrow-left"></i> ',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
});

//Faq
$(".faq-wrapper .faq-title, .faq-wrapper-two .faq-title-two").on(
    "click",
    function (e) {
        var element = $(this).parent(".faq-item, .faq-item-two");
        if (element.hasClass("open")) {
            element.removeClass("open");
            element.find(".faq-content, .faq-content-two").removeClass("open");
            element
                .find(".faq-content, .faq-content-two")
                .slideUp(300, "swing");
        } else {
            element.addClass("open");
            element
                .children(".faq-content, .faq-content-two")
                .slideDown(300, "swing");
            element
                .siblings(".faq-item, .faq-item-two")
                .children(".faq-content, .faq-content-two")
                .slideUp(300, "swing");
            element.siblings(".faq-item, .faq-item-two").removeClass("open");
            element
                .siblings(".faq-item, .faq-item-two")
                .find(".faq-title, .faq-title-two")
                .removeClass("open");
            element
                .siblings(".faq-item, .faq-item-two")
                .find(".faq-content, .faq-content-two")
                .slideUp(300, "swing");
        }
    }
);

// Date Picker
$("#start-date").datepicker();
$("#end-date").datepicker();
$("#start-date2").datepicker();
$("#end-date2").datepicker();

// Bus Ticket Filter
$(".ticket-type li a").on("click", function () {
    $(".ticket-type li a").removeClass("active");
    $(this).addClass("active");
});

// Select Seats
$(".seat-wrapper .seat").on("click", function () {
    $(this).toggleClass("selected");
});
// Seat Expand
$(".select-seat-btn").on("click", function () {
    $(this)
        .closest(".ticket-item")
        .children(".seat-plan-wrapper")
        .toggleClass("selected");
});
// Close Pane
$(".tab-pane .close-btn").on("click", function () {
    $(this).parent().removeClass("active");
});

// Video Pop Up
$(".video-button, .video").magnificPopup({
    type: "iframe",
});
// Image Popup
$(".img-link").magnificPopup({
    type: "image",
    gallery: {
        enabled: true,
    },
});

$(document).ready(function () {
    $(".select2").select2();
});
