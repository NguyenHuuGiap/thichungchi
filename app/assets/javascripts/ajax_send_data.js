$(document).ready(function () {
  // $(document).on('click', '.show_modal_post', function() {
  //   showPost(this);
  // });
  // $(document).on('click', '.edit_modal_post', function() {
  //   editPost(this);
  // });
  uploadImage();
  setBackgroundImage();
  $(document).on('click', '.btn-close', function() {
    $('#myModal').hide();
  });
})

$(function() {
  $(document).on('change', '.change_image_preview', {}, function() {
    readURL(this);
  });
});

function readURL(input) {
  var error_msg = 'File không được lớn hơn 5mb'
  var max_size = 5242880;
  var html_error = '<span class="error form__item-error error_image">' + error_msg + '</span>';
  if (input.files[0].size > max_size) {
    $('.change_image_preview').val('');
    if ($('#error-img').hasClass('.error-msg')) {
      return $('.error-msg').html(error_msg);
    }
    return $('#error-img').html(html_error);
  }
  $('.image-preview-css').addClass('image-preview');
  $('#error-img').html("");
  var url = input.value;
  var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
  if (input.files && input.files[0] && ['gif', 'png', 'jpeg', 'jpg'].indexOf(ext) > -1) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('.image-preview').css('background-image', 'url(' + e.target.result + ')');
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function setBackgroundImage() {
  $('.image-preview').css('background-image', 'url('+ $('.image-preview').data('background') +')');
}

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

function uploadImage() {
  var idPost = ""
  $('#comment').froalaEditor({
    videoUpload: false,
    imageUploadMethod: 'POST',
    imageUploadURL: '/admin/attachment',
    imageUploadParam: 'attachment',
    imageMaxSize: 5 * 1024 * 1024,
    imageAllowedTypes: ['jpeg', 'jpg', 'png'],
    imageManagerLoadURL: '/admin/attachment',
    toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', '|',
      'color', 'emoticons', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', '-',
      'insertLink', 'insertImage', 'insertVideo', 'insertTable', '|', 'quote', 'insertHR', 'undo', 'redo', 'clearFormatting', 'html']
  })
}
