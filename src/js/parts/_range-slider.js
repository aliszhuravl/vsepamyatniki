$(document).ready(function() {
    var sliderFilter = $('.range-slider_filter');
    var sliderMin = $('.range-slider__text_min');
    var sliderMax = $('.range-slider__text_max');

    $(sliderFilter).slider({
        range: true,
        min: 42.8,
        max: 120.1,
        values: [42.8, 120.1],
        slide: function (event, ui) {
            $(sliderMin).text(ui.values[0]);
            $(sliderMax).text(ui.values[1]);
        }
    });

});