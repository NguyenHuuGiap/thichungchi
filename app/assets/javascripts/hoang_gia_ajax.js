$(document).ready(function(){
	
$("div.menu_cha").click(function()
	{
		$(".khung_con").slideUp("slow");
		$(this).next("div.khung_con").slideToggle(300).siblings("div.khung_con").slideUp("slow");

	   
	});
});

// JavaScript Document
function showLoader() {
	$("#loading_result").html("<div class=\"loading_bao\" style=\"position:fixed; top:50%; right:50%; text-align:center; width:120px;  color:#000000;background-color: rgba(57, 83, 83, 0.7);z-index:99999999999; padding: 8px;-moz-border-radius: 6px;border-radius: 6px;\"><div  style=\"background:#fff; height:50px;padding-top: 15px; \" >Đang tải...<br><img src='../images/ajax-loader1.gif'></div></div>").hide().fadeIn(10);
	block = true;
}
function closeLoader() {
	$("#loading_result").html("").hide().fadeOut('slow');
	block = false;
}
function showResult(type,data) {
	closeLoader();
	$("#"+type+"").html(data).hide().fadeIn('slow');
	block = false;
}


function alert_mgs(msg,mod){

    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=alert&msg='+encodeURIComponent(msg)+'&mod='+mod,
        dataType: "html",
        success: function(data){
			  showResult("luu_result",data);
			
			  
        }
    });
	return false;
}

function show_lienhe(){
		
    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=lien_he&mod=new',
        dataType: "html",
        success: function(data){
           showResult("load_hoang_gia",data);
		   Cufon.replace('.tin_tuc_2,.tin_khac', {fontFamily:'HP-Impact',color:'#da251c'});

        }
    });

}


function show_lienhe_sent(frm){
txt_ten =frm.name.value
txt_email =frm.email.value
tieude =frm.tieude.value
dienthoai =frm.dienthoai.value
txtSubject =frm.noidung.value
	if (txt_ten == "")
		{
		alert('Vui lòng nhập họ tên');
		frm.name.focus();
			return false;
		}
		if (!txt_email.match(/^([-\d\w][-.\d\w]*)?[-\d\w]@([-\w\d]+\.)+[a-zA-Z]{2,6}$/))
		{
		alert('Email của bạn không hợp lệ');
		frm.email.focus();
			return false;
		}
		if (tieude == "")
		{
		frm.tieude.focus();
		alert('Vui lòng nhập tiêu đề');	
			return false;
		}
		if (txtSubject == "")
		{
		frm.noidung.focus();
		alert('Vui lòng nhập nội dung');	
			return false;
		}
		if(dienthoai!="")
            { str=dienthoai;
	            for(var i = 0; i < str.length; i++)
	            {	
		            var temp = str.substring(i, i + 1);		
		            if(!(temp == "," || temp == "." || (temp >= 0 && temp <=9)))
		            {
			           alert('Vui lòng nhập số điện thoại hợp lệ');
					
			        frm.dienthoai.focus();
						return false;
		            }  
	            }
	         
            }


    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: "act=lien_he&mod=sent&txt_ten="+txt_ten+"&txt_email="+txt_email+"&tieude="+tieude+"&txtSubject="+txtSubject+"&dienthoai="+dienthoai,
        dataType: "html",
        success: function(data){
           alert(data);
		  	frm.name.value="";
			frm.email.value="";
			frm.tieude.value="";
			frm.dienthoai.value="";
			frm.noidung.value="";
			
        }
    });
	return false;
}

function load_trong(){

    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=load_trong',
        dataType: "html",
        success: function(data){
           showResult("load_thucdon",data);

        }
    });
	return false;
}


function load_thongbao_trang(){
	
	var page=$("#lay_page").val();

    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=thong_bao&page='+page,
        dataType: "html",
        success: function(data){
           showResult("thong_bao",data);

        }
    });
	
	return false;
}


 function dang_ky_truc_tuyen(id){

	showLoader();
    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=dang_ky_truc_tuyen&id='+id,
        dataType: "html",
        success: function(data){
           showResult("show_thong_tin",data);
        }
    });
	return false;
}

 function dang_ky_truc_tuyen_send(){
var list=$query('#dang_ky_truc_tuyen_send');

	showLoader();
    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=dang_ky_truc_tuyen_send&'+list,
        dataType: "html",
        success: function(data){
          					var b= $.trim(data);
							if(b.substring(0,2)=='no'){ 
								 	alert_mgs(b.substring(3),'s');
							 }else{
									alert_mgs(b.substring(3),'home');
									
								  }
        }
    });
	return false;
}


function xuat_hoc_2(id){


    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=xuat_hoc&id='+id,
        dataType: "html",
        success: function(data){
           showResult("xuat_hoc",data);
        }
    });
	return false;
}



function load_dang_nhap(){
	showLoader();
    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=dang_nhap',
        dataType: "html",
        success: function(data){
           showResult("show_thong_tin",data);
        }
    });
}


function dang_nhap_ok(frm){

var username = document.getElementById('user_name').value;
var pass = document.getElementById('pass').value;



	
	
if (username == "Tên đăng nhập...")
		{ 
	
		document.getElementById('user_name').focus();
		alert_mgs('Vui lòng nhập tên đăng nhập');	
			return false;
		}
		if (username == "")
		{ 
	
		document.getElementById('user_name').focus();
		alert_mgs('Vui lòng nhập tên đăng nhập');	
			return false;
		}
		
	if (pass == "Mật khẩu...")
		{ 
		document.getElementById('pass').focus();
		alert_mgs('Vui lòng nhập mật khẩu');	
			return false;
		}
		if (pass == "")
		{ 
		document.getElementById('pass').focus();
		alert_mgs('Vui lòng nhập mật khẩu');	
			return false;
		}
		
	$("#dang_nhap_mgs").html('<img src="../images/loadingIcon.gif" />');
    $.ajax({
		    url:'/do_login.php',
     
        type: 'POST',
        data: 'act=dang_nhap_kt&txt_username='+username+'&txt_password='+pass,
        dataType: "html",
        success: function(data){
			
			var b= $.trim(data);
							if(b.substring(0,2)=='no'){ 
								 	alert_mgs(b.substring(3));
							 }else{
									showResult("load_cpanel",data);
									close_khung_popup2();
									$('#dang_ky_lop_hoc').removeAttr("onclick");
									$('#dang_ky_lop_hoc').attr("href",'http://enter.edu.vn/dang-ky-lop-hoc/');
									Forward('http://enter.edu.vn/hoc-vien/thong-tin/');
								  }
         
			 $("#dang_nhap_mgs").html(''); 
        }
    });
return false;
}

function thoat_dang_nhap(){

	showLoader();
    $.ajax({
		    url:'/do_login.php',
     
        type: 'POST',
        data: 'act=thoat',
        dataType: "html",
        success: function(data){
           showResult("load_cpanel",data);
        }
    });

}

function load_thong_tin(){
	showLoader();
    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=thong_tin_hoc_vien',
        dataType: "html",
        success: function(data){
           showResult("show_thong_tin",data);
        }
    });
}

function load_bang_dien(){
	showLoader();
    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=bang_dien_hoc_vien',
        dataType: "html",
        success: function(data){
           showResult("show_thong_tin",data);
        }
    });
}
function load_danh_sach(){
	showLoader();
    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=danh_sach_lop_hoc',
        dataType: "html",
        success: function(data){
           showResult("show_thong_tin",data);
        }
    });
}

function load_phan_hoi(){
	showLoader();
    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=phan_hoi',
        dataType: "html",
        success: function(data){
           showResult("show_thong_tin",data);
        }
    });
}

function load_doi_mat_khau(){
	showLoader();
    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=doi_mat_khau',
        dataType: "html",
        success: function(data){
           showResult("show_thong_tin",data);
        }
    });
}

function doi_mat_khau_ok(frm){
	showLoader();
var list=$query("#update_matkhau");
    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=doi_mat_khau&mod=ok&'+list,
        dataType: "html",
        success: function(data){
			 	var b= $.trim(data);
							if(b.substring(0,2)=='no'){ 
								 	alert_mgs(b.substring(3));
							 }else{
									alert_mgs(b.substring(3));
									close_khung_popup2();
								  }
        }
    });
	return false;
}


function dang_ky_lop_hoc(sum){

	showLoader();
	
	var list=0;

	for (i=1;i<=sum;i++)
	{ 
		va='regisclass_'+i;
		if (document.getElementById(''+va+'').checked){
         a = $('#'+va+'').attr('value');
		list=list+','+a;		
         }

	}
	



    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=dang_ky_lop_hoc&list='+list,
        dataType: "html",
        success: function(data){
          var b= $.trim(data);
							if(b.substring(0,2)=='no'){ 
								 	alert_mgs(b.substring(3));
							 }else{
									alert(b.substring(3));
										Forward('http://enter.edu.vn/hoc-vien/danh-sach-lop/');
								  }
        }
    });
}


function phan_hoi_send(){
	showLoader();
var list=$query("#phan_hoi_send");
    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=phan_hoi_send&mod=ok&'+list,
        dataType: "html",
        success: function(data){
			 	var b= $.trim(data);
							if(b.substring(0,2)=='no'){ 
								 	alert_mgs(b.substring(3));
							 }else{
									alert_mgs(b.substring(3));
									close_khung_popup2();
								  }
        }
    });
	return false;
}


function view_all(act){
	showLoader();
    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act='+act,
        dataType: "html",
        success: function(data){
           showResult("show_thong_tin",data);
        }
    });
}


function show_hotro2(){
	$("#hotro").slideToggle("slow");

	}

function show_hotro(){
	$("#hotro").slideToggle("slow");
	clearInterval(counter);
	}
	
	function show_thanhvien(){
	$("#show_thanhvien").slideToggle("slow");
	}
	
	
function show_lop(id,ten){

    $.ajax({
		   url:'/action.php',
     
        type: 'POST',
        data: 'act=show_lop&id='+id+'&ten='+ten,
        dataType: "html",
        success: function(data){
			
			$('.ten_lop_truong_123').html(data);

		

        }
    });

}	

function show_hinh_left(){
    $.ajax({
		   url:'/action.php',
     
        type: 'POST',
        data: 'act=show_hinh_left',
        dataType: "html",
        success: function(data){
			
			$('#load_slide_hinh').html(data);
stickytooltip.init("*[data-tooltip]", "mystickytooltip")
		

        }
    });

}	


function load_quyen_mat_khau(){

$(".title_thongbao_2").html("<a onclick=load_dang_nhap('dang_nhap') >Đăng nhập</a>");
    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=quyen_mat_khau&mod=view',
        dataType: "html",
        success: function(data){
           showResult("show_quen_mat_khau",data);
	
        }
    });
	return false;
}


function load_quyen_mat_khau_ok(){
var list=$query("#table_dangtin"); 

    $.ajax({
		    url:'/action.php',
     
        type: 'POST',
        data: 'act=quyen_mat_khau&mod=send&'+list,
        dataType: "html",
        success: function(data){
           showResult("dang_nhap_mgs",data);
	
        }
    });
	return false;
}


function check_class(id,kt){
	
	if($("#regisclass_"+kt).is(':checked')){
   		$("#regisclass_"+kt).attr('rel',id);	
			
	}else{
    	$("#regisclass_"+kt).attr('rel','');
	}
	var total=0;
			$(".kt_class").each(function()
					{
						total++;	
						var rel=$(this).attr('rel');
						var idkt=$(this).attr('id');
						if(rel!=''){
							if(!$("#regisclass_"+kt).is(':checked')){
								$("#regisclass_"+kt).attr('rel','');
							}
						}
							
						if(rel==''){
							$(this).prop( "checked", false );
							}
						if(idkt!="regisclass_"+kt+""){
							if(rel==id){
								alert('Lớp học bạn chọn đã bị trùng.\n(Hệ thống tự động bỏ lớp '+$(this).attr('ten')+')');
								$(this).prop( "checked", false );
								$(this).attr('rel','');
								}
							}	
					});
					
	
}

