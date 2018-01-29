$(".introscroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#mbody").offset().top-30
    }, 1200);
});

// $("a").attr("target", "_blank");

var toggled=0;
$('#haww').hide();
$('.xelec').click(function(){
$('.pitem').addClass("hidden");
$('.pitem').removeClass("pitema");
$('.elec').removeClass("hidden");
$('.switchrow').removeClass("row");
});
$('.xarch').click(function(){
$('.pitem').addClass("hidden");
$('.pitem').removeClass("pitema");
$('.vizu').removeClass("hidden");
$('.switchrow').removeClass("row");
});
$('.xrese').click(function(){
$('.pitem').addClass("hidden");
$('.pitem').removeClass("pitema");
$('.rese').removeClass("hidden");
$('.switchrow').removeClass("row");
});
$('.xprog').click(function(){
$('.pitem').addClass("hidden");
$('.soft').removeClass("hidden");
$('.pitem').removeClass("pitema");
$('.switchrow').removeClass("row");
});
$('.xall').click(function(){
$('.pitem').removeClass("hidden");
$('.pitem').addClass("pitema");
$('.switchrow').addClass("row");
});

$('.jumpro').click(function(){
      $('html, body').animate({
        scrollTop: $(".thumbnails").offset().top
    }, 1600);
});
$('.abme').hide();
function hojao(){
	toggled++;
	if(toggled%2==0){
$('.abme').hide();
$('.toggleme').html('You can check out the other things I do <span class="fakein" onclick="hojao();">here.</span>');

}
else{
	$('.abme').show();
	$('.toggleme').html('To hide this information, click <span class="fakein" onclick="hojao();">here.</span>');

}

};