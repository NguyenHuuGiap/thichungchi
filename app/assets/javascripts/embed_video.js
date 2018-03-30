$(document).ready(function() {
  var html_iframe = '<iframe width="600" height="400" src="https://www.youtube.com/embed/'
  var after_iframe = '"></iframe>'
  $('.embed-video').change(function(){
    if($('.embed-video').val() != ""){
      full_iframe = html_iframe + youtube_parser($('.embed-video').val()) + after_iframe;
      $('.embeding-video').html(full_iframe);
      $('.show-video').show();
    } else {
      $('.embeding-video').html("");
      $('.show-video').hide();
    }
  })
})

function youtube_parser(url){
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : false;
}
