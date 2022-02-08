$(document).on('click', 'button.btn-clipboard', function () {
    var element = $(this).closest("figure").find("xmp");
    copyToClipboard($(element));
    var alert_name = $(this).attr('data-original-title');
    $("#success-alert span").html('');
    $("#success-alert span").append('<strong>Success! </strong> ' + alert_name);
    $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
        $("#success-alert").slideUp(500);
    });
});

function copyToClipboard(element) {
var $temp = $("<textarea>");
$("body").append($temp);
$temp.val($(element).text()).select();
document.execCommand("copy");
$temp.remove();
}