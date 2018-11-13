jQuery(document).ready(
function ()
{
    menuMobile ();
});

function menuMobile ()
{
    $("#bt-menu-mobile").click(function(){
        $("#wrapper-menu-mobile").css({left:0, opacity:0});
        $("#wrapper-menu-mobile").animate({opacity:1},200);
        $("#wrapper-menu-mobile .wrapper").animate({ right:"0"},500);
        jQuery(document.body).css('overflow', 'hidden');
        return false;
    });

    $("#bt-fechar-menu").click(function(){
        closeMenuMobile ();
        return false;
    });

    $(".block-menu-mobile").mousedown(function(){
        closeMenuMobile ();
    });
}

function closeMenuMobile (){
    $("#wrapper-menu-mobile .wrapper").animate({ right:"-100%"},300,function(){
        $("#wrapper-menu-mobile").animate({opacity:0},200,function(){
            $("#wrapper-menu-mobile").css({left:"100%", opacity:1});
            jQuery(document.body).css('overflow', 'auto');
        });
    });
}

$(document).ready(function() {
  $("#show_lienhe").fancybox({
    'titlePosition'		: 'inside',
    'transitionIn'		: 'none',
    'transitionOut'		: 'none'
  });
});

$(function() {
$("#sli2").jCarouselLite({
  vertical: true,
  hoverPause:true,
  btnNext: ".next",
      btnPrev: ".prev",
  visible: 1,
  auto:3000,
  speed:1000
});
});
