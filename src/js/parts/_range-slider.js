$(document).ready(function() {
    var sliderFilter = $('.range-slider_filter');
    var sliderMin = $('.range-slider__text_min');
    var sliderMax = $('.range-slider__text_max');

    $(sliderFilter).slider({
        range: true,
        min: 6500,
        max: 32000,
        values: [6500, 32000],
        slide: function (event, ui) {
            $(sliderMin).text(ui.values[0]);
            $(sliderMax).text(ui.values[1]);
        }
    });

});