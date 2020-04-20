$(document).ready(function(){
    var slides = $(".slide");
    var thumbnails = $(".thumb-img");
    var modButtons = $(".modal-button");
    var x = 0;

    //modal button click event
    for (let i = 0; i < modButtons.length; i++) {
        $(modButtons[i]).click(function(){
            $("#light-box-container").css("display", "flex");
            $(".container").css("opacity", ".4");
            slideShow(x = i);
        })
        
    }
    


    function slideShow(a) {
    $(slides).hide();
    $(thumbnails).removeClass(" active");

    if (a > slides.length - 1) {x = 0}
    if (a < 0) {x = slides.length - 1}

    $(slides[x]).show();
    $(thumbnails[x]).addClass(" active")
    }

    //right slider button
    $("#left").click(function(){
        slideShow(x -= 1);
    });
    //for left slider button
    $("#right").click(function(){
        slideShow(x += 1)
    })

    for (let i = 0; i < thumbnails.length; i++) {
        $(thumbnails[i]).click(function(){
            slideShow(x = i);
    })    
}


$("#close-button").click(function(){
    $("#light-box-container").css("display", "none");
    $(".container").css("opacity", "1")
})

})