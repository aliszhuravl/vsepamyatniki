$(document).ready(function() {
    $("#pop_open").click(function () {
        $("#popup").addClass('visible_popup');
    });
    $("#close2").click(function () {
        $("#popup").removeClass('visible_popup');
    });
});