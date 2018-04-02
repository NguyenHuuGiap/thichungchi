$(document).ready(function() {
  var html_iframe = '<iframe width="600" height="400" src="https://www.youtube.com/embed/';
  var after_iframe = '"></iframe>';
  add_iframe_url(html_iframe, after_iframe);
  iframe_url_index();
  add_code_image();
  $('.embed-video').change(function(){
    add_iframe_url(html_iframe, after_iframe);
  })
})

function youtube_parser(url){
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : false;
}

function add_iframe_url(html_iframe, after_iframe) {
  if($('.embed-video').val()){
    full_iframe = html_iframe + youtube_parser($('.embed-video').val()) + after_iframe;
    $('.embeding-video').html(full_iframe);
    $('.show-video').show();
  } else {
    $('.embeding-video').html("");
    $('.show-video').hide();
  }
}

function iframe_url_index() {
  $('.show-video-url').each(function() {
    if($(this).attr('url')) {
      id_video = youtube_parser($(this).attr('url'));
      iframe_url = 'https://www.youtube.com/embed/' + id_video
      $(this).attr('src', iframe_url);
      $('.show-video-url').show();
    }else {
      $('.show-video-url').html("");
      $('.show-video-url').hide();
    }
  });
}

function add_code_image() {
  var before_img = "http://img.youtube.com/vi/"
  var after_img = "/0.jpg"
  var id_video = ""
  image_chil = $($('.video-url').children()).children()
  image_chil.each(function() {
    id_video = youtube_parser($(this).attr('url'));
    $(this).attr('code', id_video);
    src_img = before_img + id_video + after_img
    $(this).attr('src', src_img);
  });

}
