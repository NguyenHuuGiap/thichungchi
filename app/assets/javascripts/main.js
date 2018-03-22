$(document).ready(function(){
  $(".video_left img").click(function(){
    $("#gridModalLabel").html( $(this).attr('name') );
    $("#view_yt").html( '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ $(this).attr('code') +'?autoplay=1" frameborder="0" allowfullscreen></iframe>' );
    $("#gridSystemModal").modal();
  });
  $("#close_yt").click(function(){
    $("#view_yt").html( '' );
  });

  loadDataTable('#dataTables-allpage');
});

function loadDataTable(id_name) {
  $(id_name).DataTable({
    responsive: true
  });
}
