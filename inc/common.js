jQuery(document).ready( function($) {
    $('[data-toggle="tooltip"]').tooltip();
    $('.carousel').carousel();

    //Soft scrolls
    $("nav .navbar-nav a").click(function(e) {
        e.stopPropagation();
        var target = $(this).data("target");
        if($(target).length>0){
            $('html, body').animate(
                { scrollTop: $(target).offset().top - $("nav").height() },
                "slow"
            );
        }
        else {
            return true;
        }
    });
});