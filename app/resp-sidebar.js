$(document).ready(function () {

    var sideM = $("#sidemenu");

    $("#menutoggle").click(function(){
        $(sideM).css("height", "100%")
    });

    $("#close").click(function(){
        $(sideM).css("height", "0")
    })

});