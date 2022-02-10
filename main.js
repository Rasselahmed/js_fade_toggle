$(document).ready(function () {
    $('.sp2').css('display', 'none');
    $('#fadetoggel').click(function () {
        $('.box').fadeIn();
        $('span').toggleClass('sp1');
        $('span').toggleClass('sp2');

    });


});