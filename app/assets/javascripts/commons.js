$(document).ready(function() {
  dateTimePicker(".date-picker");
});

function dateTimePicker(class_name) {
  $(class_name).datetimepicker({
    timepicker: false,
    scrollInput: false,
    format: 'Y-m-d'
  });
}

$(document).on('change', '.import-user', function (e) {
  e.preventDefault();
  var confirm = window.confirm("Bạn có chắn chắn muốn import!");
  if (confirm == true) {
    $(".form-import").submit();
  } else {
    $("#user_file").val("");
  }
});
