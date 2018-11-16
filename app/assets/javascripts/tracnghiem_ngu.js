$(document).ready(function () {
jQuery('body').on('click','.ket_thuc',function(){
        swal({
                                title: "Bạn muốn hoàn tất bài thi",
                                text: "",
                                type: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Hoàn tất làm bài",
                                cancelButtonText: "Tiếp tục làm bài",
                                closeOnConfirm: false,
                                closeOnCancel: false
        },
        function(isConfirm){
          debugger
                if (isConfirm) {
                    //swal("Hoàn tất bài thi", "Vui lòng nhấn nút dưới để xem kết quả", "success");
                    window.location = 'http://thichungchihanhnghe.com/ket-qua-thi.html?ld=DG01.html';
                }else{
                    swal("Dùng thao tác", "", "error");
                }
        });
});


setInterval(function(){get_fb();}, 120000);
get_fb();
 function get_fb(){
    // var feedback = $.ajax({
    //     type: "POST",
    //     url: "/fback",
    //     async: false
    // }).success(function(){
    //   debugger
    // }).responseText;
    $.ajax({
        url:'/fback',
            type:'HEAD',
            error: function()
            {
                $('.warning_error').show();
            },
            success: function()
            {
                $('.warning_error').hide();
            }
        });

}
    jQuery(document).ready(function(){
        jQuery('#progressbar li').click(function(){
            var $container = jQuery(this).parent().parent();
            var $cau_so = jQuery(this).attr('dir');
            $container.find('.cau_so_'+$cau_so).animate({'display':'block','opacity': '10','transform': 'scale(1)'});
            $container.find('.cau_so_'+$cau_so).css({'transform': 'scale(1)', 'opacity': opacity,'left':'0%'});
            // jQuery.ajax({
            //
            //     type: "POST",
            //     url: "http://thichungchihanhnghe.com/baithi/da_xem/",
            //     data: {cau_so:$cau_so,hoc_vien_id:$hoc_vien_id,kythi_id:$kythi_id},
            //     success: function(html){
            //
            //     }
            // });
        });
    });



    var currentDate = new Date();
    var twentyMinutesLater = new Date(currentDate.getTime() + (40 * 60 * 1000));
    var $hoc_vien_id    = 3081;
    var $kythi_id       = 135;

    // Tinh thoi gian thi--------------------------------->

             var twentyMinutesLater = 'Thu Nov 15 2018 14:59:58 GMT+0700 (Indochina Time)';


    // The hien thoi gian ----------------------------->
    $(function(){
        // $('#future_date').countdowntimer({
        //     dateAndTime : twentyMinutesLater,
        //     size : "lg",
        //     regexpMatchFormat: "([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})",
        //     regexpReplaceWith: "$2 : $3 : $4",
        //     expiryUrl: "http://thichungchihanhnghe.com/ket-qua-thi.html",
        // });
    });

    // The hien da xem ------------------------------->

    // The hien lam bai ----------------------------->
    jQuery(document).ready(function(){
        jQuery('.wr_dap_an .row_dap_an').click(function(){
            var $tra_loi = jQuery(this).attr('id');
            var $cau_so  = jQuery(this).attr('dir');
            debugger
            // jQuery.ajax({
            //     type: "POST",
            //     url: "http://thichungchihanhnghe.com/baithi/tra_loi/",
            //     data: {tra_loi:$tra_loi,cau_so:$cau_so,hoc_vien_id:$hoc_vien_id,kythi_id:$kythi_id},
            //     success: function(html){
            //
            //     }
            // });
        });
    });
});
