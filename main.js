jQuery(document).ready(function()
{
    $('#videolink').magnificPopup({
        type:'inline',
        midClick:true
    });
});

$(function(){
    $("#team-members").owlCarousel({
        item:2,
        autoplay:true,
        smartSpeed : 700,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        responsive: {
            0:{
                items:1
            },
            480:{
                items:2
            }
        }
    });
});

$(function()
{
    $("progress-elements").waypoints(function()
    {
        $(".progress-bar").each(function()
        {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
        this.destroy();
    })
    
    
    
    ,{
        offset:'bottom-in-view'
    }
});
