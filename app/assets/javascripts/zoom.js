$(document).ready(function() {
  $(".carousel-inner").slick({
    infinite : true,
    dots     : false,
    arrows   : false,
    responsive : [
      {
        breakpoint : 960,
        settings : {
          slidesToShow   : 1,
          slidesToScroll : 1
        }
      }
    ]
  });
})
