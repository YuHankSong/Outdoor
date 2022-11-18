var timelock = 1;
$(".shop-continer-btn button").on("click", function () {
  //   var rentalBox = $(".shop-continer-copy");

  if (timelock === 1) {
    timelock = 0;
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".shop-continer-copy")
      .addClass("copy_copy");
    setTimeout(function () {
      $(".shop-continer-copy").removeClass("copy_copy");
      console.log("1");
      timelock = 1;
    }, 4000);
  }
  //   $(".camp-shop-continer").index();
  //   var x = $(".shop-continer").index($(`.shop-continer-btn button ${$(this)}`));
  //   console.log(y);
  //   $(this).parent().parent().parent().eq(0).css("display", "flex");
});
