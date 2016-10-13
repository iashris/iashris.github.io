$(".introscroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#mbody").offset().top
    }, 1200);
});

$("a").attr("target", "_blank");


$('.xelec').click(function(){
$('.pitem').addClass("hidden");
$('.elec').removeClass("hidden");
$('.switchrow').removeClass("row");
});
$('.xarch').click(function(){
$('.pitem').addClass("hidden");
$('.vizu').removeClass("hidden");
$('.switchrow').removeClass("row");
});
$('.xrese').click(function(){
$('.pitem').addClass("hidden");
$('.rese').removeClass("hidden");
$('.switchrow').removeClass("row");
});
$('.xprog').click(function(){
$('.pitem').addClass("hidden");
$('.soft').removeClass("hidden");
$('.switchrow').removeClass("row");
});
$('.xall').click(function(){
$('.pitem').removeClass("hidden");
$('.switchrow').addClass("row");
});