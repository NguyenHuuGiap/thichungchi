$(document).ready(function () {
  $(document).on('click', '.show_modal_post', function() {
    showPost(this);
  });
  $(document).on('click', '.edit_modal_post', function() {
    editPost(this);
  });
  $(document).on('click', '.btn-close', function() {
    $('#myModal').hide();
  });
})

function showPost(id_href) {
  var id = $(id_href).data()["id"];
  $.ajax({
    type: 'GET',
    url: '/admin/post/' + id
  });
}

function editPost(id_href) {
  var id = $(id_href).data()["id"];
  $.ajax({
    type: 'GET',
    url: '/admin/post/' + id + '/edit'
  });
}
