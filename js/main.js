$(".introscroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#mbody").offset().top
    }, 1200);
});




$('.xelec').click(function(){
$('.pitem').addClass("hidden");
$('.elec').removeClass("hidden");
});
$('.xarch').click(function(){
$('.pitem').addClass("hidden");
$('.vizu').removeClass("hidden");
});
$('.xrese').click(function(){
$('.pitem').addClass("hidden");
$('.rese').removeClass("hidden");
});
$('.xprog').click(function(){
$('.pitem').addClass("hidden");
$('.soft').removeClass("hidden");
});
$('.xall').click(function(){
$('.pitem').removeClass("hidden");
});