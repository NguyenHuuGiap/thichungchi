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
//
// $(function() {
// $("#sli2").jCarouselLite({
//   vertical: true,
//   hoverPause:true,
//   btnNext: ".next",
//       btnPrev: ".prev",
//   visible: 1,
//   auto:3000,
//   speed:1000
// });
// });


var slideIndex = 1;
// showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("item");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   slides[slideIndex-1].style.display = "block";
// }

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("item");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    // x[myIndex-1].style.display = "block";
    setTimeout(carousel, 5500);
}



//select2

$( "#exam_id" ).select2({
    theme: "bootstrap"
});
