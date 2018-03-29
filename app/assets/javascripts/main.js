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

  if($('.tree-term').hasClass('max-death')) {
    $('.tree-term').nestable({
      maxDepth: 2
    });
  } else {
    $('.tree-term').nestable({
      maxDepth: 1
    });
  }

  $('.btn_save_nestable').click(function() {
    saveNestable();
  });
});

function loadDataTable(id_name) {
  $(id_name).DataTable({
    responsive: true
  });
}

function saveNestable() {
  $('.list_term_nestable').val(window.JSON.stringify($('.tree-term').nestable('serialize')));
  $('#form_term').submit();
}
