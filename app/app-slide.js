$(document).ready(function(){

    var slides = document.getElementsByClassName("slide");
    // var thumb = document.getElementsByClassName("thumbnail");
    var thumbImg = $(".thumbnail-img");
    var m = 0;


    $("#right").click(function(){
        slider(m += 1);
    });

    $("#left").click(function(){
        slider(m -= 1);
        console.log(m)
    });

    //function to slide images
    function slider(x) {
        $(slides).hide();
        // $(thumb).removeClass(" active");
        $(thumbImg).removeClass(" active");

        if (x > slides.length -1) { m = 0 }
        if (x < 0) { m = slides.length -1 }

        $(slides[m]).show();
        // $(thumb[m]).addClass(" active")
        $(thumbImg[m]).addClass(" active")
    }


    
    // for thumbnails click actions
    // for (let i = 0; i < thumb.length; i++) {
    //     $(thumb[i]).click(function(){
    //         $(thumb).removeClass(" active");
    //         $(thumb[i]).addClass(" active");
    //         $(slides).hide();
    //         $(slides[i]).show()
    //     })  
    // }
    for (let i = 0; i < thumbImg.length; i++) {
        $(thumbImg[i]).click(function(){
            // $(thumbImg).removeClass(" active");
            // $(this).addClass(" active");
            // $(slides).hide();
            // $(slides[i]).show()
            // console.log(m)
            slider(m = i)
        })  
    }
})