$("#recipe").click(function () {
$.getJSON('clay.JSON', function(read_data) {
$('#recipe').html(read_data.result);
});
});