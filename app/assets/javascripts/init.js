var mail_data, mail_name, mail_from;
var mail_sent = false;
// AJAX INIT
function $$$(id) {
	return document.getElementById(id);
}
function khoitao_ajax()
{
	var x;
	try
	{
		x	=	new ActiveXObject("Msxml2.XMLHTTP");
	}
	catch(e)
	{
    	try
		{
			x	=	new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(f) { x	=	null; }
  	}
	if	((!x)&&(typeof XMLHttpRequest!="undefined"))
	{
		x=new XMLHttpRequest();
  	}
	return  x;
}
function	Forward(url)
{
	window.location.href = url;
}
function	_postback()
{
	return void(1);
}
/*So sanh height cua 2 the div tgp_body_content & tgp_right*/
function EqualHeight(elements) {
    //Xác định chiều cao của cột cao nhất
    tallest = 0;
    elements.each(function() {
        elementHeight = jQuery(this).height();
        if(elementHeight > tallest) {
            tallest = elementHeight;
        }
    });
    //Chỉnh chiều cao cho tất cả các cột
    //theo chiều cao của cột cao nhất
    elements.height(tallest);
}

function SkipError()
{
	return true;
}


function checkbox_test(obj){
  var counter = 0;  // counter for checked checkboxes
  var i       = 0;  // loop variable
  var url     = ''; // final url string
  // get a collection of objects with the specified 'input' TAGNAME
  var input_obj = obj;
  // loop through all collected objects
  for (i=0; i < input_obj.length; i++){
    // if input object is checkbox and checkbox is checked then ...
    if (input_obj[i].type == 'checkbox' && input_obj[i].checked == true){
      // ... increase counter and concatenate checkbox value to the url string
      counter++;
      url = url + '|' + input_obj[i].value;
    }
  }
  // display url string or message if there is no checked checkboxes
  if (counter > 0){
    // remove first '&' from the generated url string
    url = url.substr(1);
    // display final url string
	return url;
    // or you can send checkbox values
    // window.location.href = 'my_page.php?' + url;
  }
  else return "";
}


// $(function(){
//
// Cufon.replace('.cufon_2', {fontFamily:'UTM Cafeta',hover:true});
// Cufon.replace('.cufon_3', {fontFamily:'UTM Cafeta',hover:true});
//
//
// });





function $query(obj)
{
 var query = "";
 $(obj).find("input").each(function(i){
  if (($(obj).find("input").eq(i).attr("type") != "checkbox") && ($(obj).find("input").eq(i).attr("type") != "button") && ($(obj).find("input").eq(i).attr("type") != "submit") && ($(obj).find("input").eq(i).attr("type") != "radio") )
  {
   var t = $(obj).find("input").eq(i);
   query += "&"+t.attr("name")+"="+encodeURIComponent(t.attr("value"));
  }
  else
  {
   if ($(obj).find("input").eq(i).attr("type") == "checkbox")
   {
    var t = $(obj).find("input").eq(i);
    query += "&"+t.attr("name")+"="+t.attr("checked");
   }
   else if ($(obj).find("input").eq(i).attr("type") == "radio")
   {
    var t = $(obj).find("input").eq(i);
    if (t.is(":checked"))
     query += "&"+t.attr("name")+"="+t.attr("value");
   }
  }
 });

 $(obj).find("textarea").each(function(i){
  var t = $(obj).find("textarea").eq(i);
  query += "&"+t.attr("name")+"="+encodeURIComponent(t.attr("value"));
 });

 $(obj).find("select").each(function(i){
  var t = $(obj).find("select").eq(i);
  query += "&"+t.attr("name")+"="+encodeURIComponent(t.attr("value"));
 });

 return query.substring(1);
}

	function close_poup(){

		$("#show_info_2").remove();
		 $("#close_luu_2").remove();
		   $("#khung_bg_view").hide();

			}
		function close_thong_bao_show(){
		 $("#show_info").remove();
						$("#close_luu").remove();

			}

	function close_khung_popup2(){
		$("#show_info_2").remove();
		 $("#close_luu_2").remove();
		   $("#khung_bg_view").hide();
	}

function kiem_trthongtin(wth){

 var aheight = $("#lay_thong_tin_nam_hinh").height();
 $("#khung_bg_view").css('height',(aheight));
 var noidung=$("#show_thong_tin").html();
 if(noidung!=''){
 $("#khung_bg_view").show();
 }


	var myWidth;
	var myHeight;
	var chia;
	var moi;var hedu;var hemoi;

	if(typeof(window.innerWidth) == 'number'){
	//Non-IE
		 myWidth = window.innerWidth;
		 myHeight = window.innerHeight;
	} else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
		 //IE 6+ in 'standards compliant mode'
		 myWidth = document.documentElement.clientWidth;
		 myHeight = document.documentElement.clientHeight;
	} else if(document.body && (document.body.clientWidth || document.body.clientHeight)) {
		 //IE 4 compatible
		 myWidth = document.body.clientWidth;
		 myHeight = document.body.clientHeight;
	}
	$("#lay_thong_tin_nam_hinh").attr('myWidth',myWidth);
	$("#lay_thong_tin_nam_hinh").attr('pupupWidth',wth);
	$("#lay_thong_tin_nam_hinh").attr('myHeight',myHeight);

var viewPortHeight = parseInt(document.documentElement.clientHeight);
	var scrollHeight = parseInt(document.body.getBoundingClientRect().top);

		 var cont = document.getElementById('popup_photo');
		 var dai = 0
		// var dai=cont.offsetHeight.toString();
		if(dai<100){
			thu=250;
			}else{
		hedu =parseInt(viewPortHeight-dai);
		hemoi=hedu/2;
		thu=Math.abs(scrollHeight)+hemoi;
		}

		chia=myWidth-wth;
		moi=chia/2;

		$(".popup_photo").css("top",Math.abs(thu)+"px");
		$(".popup_photo").css("left",moi+"px");

}

function pageLoad(){

 var cont = document.getElementById('popup_photo');
var rong=cont.offsetWidth.toString();
kiem_trthongtin(rong);


}

function set_chieucao(loai){

	var hedu;var hemoi;
	var viewPortHeight = parseInt(document.documentElement.clientHeight);
	var scrollHeight = parseInt(document.body.getBoundingClientRect().top);
var cont = document.getElementById('popup_photo');
		var dai=cont.offsetHeight.toString();
		if(dai<100){
			thu=250;
			}else{
		hedu =parseInt(viewPortHeight-dai);
		hemoi=hedu/2;
		thu=Math.abs(scrollHeight)+hemoi;
		}

	if(dai<viewPortHeight){
	$(".popup_photo").css("top",Math.abs(thu)+"px");
	}else{
		$(".popup_photo").css("top","10px");
			if(loai!='chay'){
			$('html, body').animate({scrollTop: '0px'}, 800);
			}
		}

}

function bindLikeBoxFloat2()
{

	var t_top = $(".khung_quang_cao_chay").offset().top;
	$(".khung_quang_cao_chay").attr('rel',t_top);

}
function bindLikeBoxFloat()
{
    $(".khung_quang_cao_chay").each(function(){
        var $this = $(this);
        var $p = $this.parent(); //parent
        var t_top = $this.attr('rel');
        var t_bot = t_top + $this.height();
        var t_left = $this.offset().left;
        var t_right = t_left + $this.width();
        var p_top = $p.offset().top;
        var p_bot = p_top + $p.height();
        $(window).bind("scroll", function(){
            var w_top = $(window).scrollTop();
            var new_bottom = w_top - p_top + $this.height();
            if(w_top > t_top)
            {
                $this.css("position", "fixed").css("top", 0);
            }
            if(w_top > (p_bot - $this.height()))
            {
                $this.css("position", "fixed").css("top", 0);
            }
            if(w_top <= t_top)
            {

                $this.css("position", "static");
            }
        });
    });
}



$(window).scroll(function () {

	set_chieucao('chay');
	bindLikeBoxFloat();


    });



function chay_lai(){
$("a[rel=example_group]").fancybox({
				'transitionIn'	:	'elastic',
					'transitionOut'	:	'elastic',
					'speedIn'		:	600,
					'speedOut'		:	200,
				'titlePosition' 	: 'over',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">'+(title.length ? ' &nbsp; ' + title : '') + '</span>';
				}
			});

$("a[rel=example_group_1]").fancybox({
				'transitionIn'	:	'elastic',
					'transitionOut'	:	'elastic',
					'speedIn'		:	600,
					'speedOut'		:	200,
				'titlePosition' 	: 'over',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">'+(title.length ? ' &nbsp; ' + title : '') + '</span>';
				}
			});
$("a[rel=example_group_2]").fancybox({
				'transitionIn'	:	'elastic',
					'transitionOut'	:	'elastic',
					'speedIn'		:	600,
					'speedOut'		:	200,
				'titlePosition' 	: 'over',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">'+(title.length ? ' &nbsp; ' + title : '') + '</span>';
				}
			});
	$("a[rel=example_group_3]").fancybox({
				'transitionIn'	:	'elastic',
					'transitionOut'	:	'elastic',
					'speedIn'		:	600,
					'speedOut'		:	200,
				'titlePosition' 	: 'over',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">'+(title.length ? ' &nbsp; ' + title : '') + '</span>';
				}
			});
$("a[rel=example_group_4]").fancybox({
				'transitionIn'	:	'elastic',
					'transitionOut'	:	'elastic',
					'speedIn'		:	600,
					'speedOut'		:	200,
				'titlePosition' 	: 'over',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">'+(title.length ? ' &nbsp; ' + title : '') + '</span>';
				}
			});
	$("a[rel=example_group_5]").fancybox({
				'transitionIn'	:	'elastic',
					'transitionOut'	:	'elastic',
					'speedIn'		:	600,
					'speedOut'		:	200,
				'titlePosition' 	: 'over',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">'+(title.length ? ' &nbsp; ' + title : '') + '</span>';
				}
			});

}
