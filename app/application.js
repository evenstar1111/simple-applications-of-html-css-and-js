$(document).ready(function(){
    
    $("#icon").click(function(){

        var menuItem = $(".nav-items").not(":first-child");
        for ( let i = 0; i < menuItem.length; i++ ) {

            $(menuItem[i]).toggleClass(" make-hide");

        }

    });

    // for toggle of status active of buttons
    var allItem = $(".nav-items");
    for ( let i = 0; i < allItem.length; i++ ) {

        $(allItem[i]).click(function(){

            $(allItem).removeClass(" active");
            $(this).addClass(" active")

        })

    }



    // for nav bar dropdown menu
    $("#drop-button").click(function(){

        $(".giant-menu").toggleClass(" hide");
        $(this).toggleClass(" active")

    })


    // for slide menu 
    $("#slidemenu-button").click(function(){
        $(".active:not('.nav-items')").removeClass(" active");
        $(".giant-menu").addClass(" hide");
        $("#slidemenu").css("height", "100vh");
        $(this).toggleClass(" active")
    });

    $("#close-button").click(function(){
        $("#slidemenu").css("height", "0");
        $("#slidemenu-button").toggleClass(" active")
    });


    // for sidemenu 
    $("#slideRight-btn").click(function(){
        $(".active:not('.nav-items')").removeClass(" active");
        $(".giant-menu").addClass(" hide");
        $("#sidemenu").css("width", "30vw");
        $(".container").css({
            "width": "70vw",
            "margin-left": "30vw"
        })
    });


    $("#menu-closer").click(function(){
        $("#sidemenu").css("width", "0");
        $(".container").css({
            "width": "",
            "margin-left": ""
        })
    })
})


