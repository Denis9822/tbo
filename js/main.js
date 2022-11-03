AOS.init();
let scrollSection = $('#highlights').offset().top;
let counters = $('span[data-anim-counter]');
let isAnim = false;
$(document).on("scroll", window, function() {
    if ($(window).scrollTop() > 10) {
        $(".header").addClass('style_header');
    } else {
        $(".header").removeClass('style_header');
    }

    if (scrollSection < $(window).scrollTop() + 300 && isAnim == false) {
        $('span[data-anim-counter]').each(function() {
            $(this).prop('data-anim-counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        isAnim = true;
    }

});

$('button.gap-4').click(function() {
    $(this).siblings('.overflow-hidden').toggleClass('clickList');
    $(this).children().children('svg').children().eq(1).toggleClass('svgActive');
    let rect = $(this).children().children().children('rect')[1];
    $(rect).toggle(200);

})