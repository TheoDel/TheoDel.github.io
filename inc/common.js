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

    //Animations CSS
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

    $('a[href="#contact"]').click(function(e) {
        //Surbrillance
        $('#contact').addClass("highlight");
        setTimeout(function()
        {
            $('#contact').removeClass("highlight");
        }, 2000);

        //Animation des boutons
        $('#contact .btn').each(function(index){
            setTimeout(function()
            {
                $('#contact .btn').eq(index).animateCss('tada');
            }, 300+300*index);
        });
    });
});