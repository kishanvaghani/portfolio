var $animation_elements = $('.animation-slide-left');
var $window = $(window);
$window.trigger('scroll');

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            if(!$element.hasClass("slide-left")){
                $element.addClass("slide-left");
            }
        }
    });
}

$window.on('scroll resize', check_if_in_view);

var $animation_slide_right = $('.animation-slide-right');
function animation_slide_right() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_slide_right, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            if(!$element.hasClass("slide-right")){
                $element.addClass("slide-right");
            }
        }
    });
}
$window.on('scroll resize', animation_slide_right);

var $animation_img_slide_right = $('.img-slide-right');
function animation_img_slide_right() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_img_slide_right, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            if(!$element.hasClass("animation-img-slide-right")){
                $element.addClass("animation-img-slide-right");
            }
        }
    });
}
$window.on('scroll resize', animation_img_slide_right);

var $animation_zoom_in = $('.zoom-in');
function animation_zoom_in() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_zoom_in, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            if(!$element.hasClass("animation-zoom-in")){
                $element.addClass("animation-zoom-in");
            }
        }
    });
}
$window.on('scroll resize', animation_zoom_in);

var $animation_left_side = $('.left-side');
function animation_left_side() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_left_side, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            if(!$element.hasClass("animation-left-side")){
                $element.addClass("animation-left-side");
            }
        }
    });
}
$window.on('scroll resize', animation_left_side);


$('.nav-link').click(function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
})

$(function () {
    // $(".loader-center").fadeOut(1000),
    $(".loader-center").fadeOut(900);
    $(".preload").fadeOut(800, function () {
        // ('loader-center').background(none);
        $(".content").fadeIn(700);
    });
});

$("#text-left").load(function () {
    $("#text-left").addClass("slide-left");
});

$(document).ready(function () {
    $('#text-left').addClass('slide-left');
})