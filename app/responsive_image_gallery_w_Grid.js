$(document).ready(function() {
    var imageCard = document.getElementsByClassName('card');
    var modalContainer = $(".modal_container");
    var modalImage = document.getElementById('modal_image');
    var imgTitle = document.getElementById('modal_text');

    for (i = 0; i < imageCard.length; i++) {
        $(imageCard[i]).click(function(){
            $(modalContainer[0]).css('display', 'flex');
            modalImage.src = this.src;
            imgTitle.innerHTML = this.alt;
            $(imageCard).css("filter", "brightness(50%)")
        })
    }

    $("#modal_closer").click(function() {
        $(modalContainer[0]).css("display", "none");
        $(imageCard).css("filter", "brightness(100%)")
    })
})