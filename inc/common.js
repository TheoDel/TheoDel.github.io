jQuery(document).ready( function($) {
    $('[data-toggle="tooltip"]').tooltip();
    $('.carousel').carousel();

    //Soft scrolls
    $("nav .navbar-nav a").click(function(e) {
        e.stopPropagation();
        var target = $(this).data("target");
        if($(target).length>0){
            var targetpx = $(target).offset().top - $("navbar-header").height();
            $('html, body').animate(
                { scrollTop: targetpx },
                "slow"
            );
        }
        else {
            return true;
        }
    });
});