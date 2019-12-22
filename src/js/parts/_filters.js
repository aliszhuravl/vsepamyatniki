$(document).ready(function() {
    $('#filters_open').on('click', function () {
        $('.filter_list__box').addClass('filters_open');
    });
    $('#filters_close').on('click', function () {
        $('.filter_list__box').removeClass('filters_open');
    });
});