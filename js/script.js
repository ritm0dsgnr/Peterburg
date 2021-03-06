$(".burger").on("click", function(event) {
    $(".burger").toggleClass("active");
    $("body").toggleClass("lock");
    $(".burger__nav").toggleClass("active");
    $(".mask").toggleClass("active");
});
$(".burger__link").on("click", function(event) {
    $(".burger").removeClass("active");
    $(".burger__nav").removeClass("active");
    $("body").removeClass("lock");
});

$(".filter-icon").on("click", function(event) {
    $(".mask").toggleClass("active");
    $(".criterias.left-bar").toggleClass("active");
});


$(".room__title, .room_img").on("click", function(event) {
    $(".popup__about-room").toggleClass("active");
    $("body").toggleClass("lock");
    $(".mask").toggleClass("active");
});
$(".close_icon").on("click", function(event) {
    $(".popup__about-room").removeClass("active");
    $("body").removeClass("lock");
    $(".mask").removeClass("active");
});


$(".description__title").click(function(event) {
    $('.description__title').not($(this)).removeClass('active');
    $('.spoiler__text').not($(this).next()).slideUp(300);
    $(this).toggleClass('active').next().slideToggle(300);
    $(".arrow").toggleClass("arrow-bottom");
});


$(".serch__info__inner.location").click(function(event) {
    $(".serch__info__change").toggleClass("active");
});

$(".info-date.in").click(function(event) {
    $(".calendar.in").toggleClass("active");
});

$(".info-date.out").click(function(event) {
    $(".calendar.out").toggleClass("active");
});

