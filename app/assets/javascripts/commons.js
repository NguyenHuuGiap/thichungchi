$(document).ready(function() {
  dateTimePicker(".date-picker");
});

function dateTimePicker(class_name) {
  $(class_name).datetimepicker({
    timepicker: false,
    scrollInput: false,
    format: 'Y/m/d'
  });
}
