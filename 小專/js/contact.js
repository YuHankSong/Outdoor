// $("#Q_checkbox").click(function () {
//   var check = $(this).is(":checked");
//   alert(check);
// });
$("#Q_submit").click(function () {
  var check = $(Q_checkbox).is(":checked");
  if (check == 0) {
    alert("您尚未勾選同意訊息");
    return false; //不要提交表單
  } else {
    return true; //提交表單
  }
});
