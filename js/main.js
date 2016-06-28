$(".introscroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#mbody").offset().top
    }, 1200);
});