// nav 滑進滑出轉換gif----------------------------------------------------
// 第一個 gif滑入滑出
$("#item").on("mouseover", function () {
  $("#img").css("display", "none");
  $("#gif").css("display", "block");
});
$("#item").on("mouseout", function () {
  $("#img").css("display", "block");
  $("#gif").css("display", "none");
});

// 第二個 gif滑入滑出
$("#itemm").on("mouseover", function () {
  $("#imgg").css("display", "none");
  $("#giff").css("display", "block");
});
$("#itemm").on("mouseout", function () {
  $("#imgg").css("display", "block");
  $("#giff").css("display", "none");
});

// 第三個 gif滑入滑出
$("#itemmm").on("mouseover", function () {
  $("#imggg").css("display", "none");
  $("#gifff").css("display", "block");
});
$("#itemmm").on("mouseout", function () {
  $("#imggg").css("display", "block");
  $("#gifff").css("display", "none");
});

// 第四個 gif滑入滑出
$("#itemmmm").on("mouseover", function () {
  $("#imgggg").css("display", "none");
  $("#giffff").css("display", "block");
});
$("#itemmmm").on("mouseout", function () {
  $("#imgggg").css("display", "block");
  $("#giffff").css("display", "none");
});

// 第五個 gif滑入滑出
$("#itemmmmm").on("mouseover", function () {
  $("#imggggg").css("display", "none");
  $("#gifffff").css("display", "block");
});
$("#itemmmmm").on("mouseout", function () {
  $("#imggggg").css("display", "block");
  $("#gifffff").css("display", "none");
});

// 第六個 gif滑入滑出
$("#itemmmmmm").on("mouseover", function () {
  $("#imgggggg").css("display", "none");
  $("#giffffff").css("display", "block");
});
$("#itemmmmmm").on("mouseout", function () {
  $("#imgggggg").css("display", "block");
  $("#giffffff").css("display", "none");
});

// 第七個 gif滑入滑出
$("#itemmmmmmm").on("mouseover", function () {
  $("#imggggggg").css("display", "none");
  $("#gifffffff").css("display", "block");
});
$("#itemmmmmmm").on("mouseout", function () {
  $("#imggggggg").css("display", "block");
  $("#gifffffff").css("display", "none");
});
// scroll nav list----------------------------------------------------------
// $(".item-a").css("opacity", "0").css("transition", "none");
$(window).scroll(function () {
  console.log($(window).scrollTop());
  // console.log($("body").height());
  // console.log($(window).height());

  const scorllTop = $(window).scrollTop();
  // const bodyHeight = $("body").height();
  // const widowHeight = $(window).height();
  if (scorllTop > 20) {
    $(".item-a").css("opacity", "1");
  } else {
    $(".item-a").css("opacity", "0");
  }
});
// note 天氣欄位
$(window).scroll(function () {
  const scorllTop = $(window).scrollTop();
  if (scorllTop > 450) {
    $(".note-icon1")
      .css("opacity", "1")
      .css("animation-name", "kids")
      .css("animation-duration", "3s");
  }
});
$(window).scroll(function () {
  const scorllTop = $(window).scrollTop();
  if (scorllTop > 300) {
    $(".note-icon2")
      .css("opacity", "1")
      .css("animation-name", "kids")
      .css("animation-duration", "3s");
  }
});
$(window).scroll(function () {
  const scorllTop = $(window).scrollTop();
  if (scorllTop > 300) {
    $(".note-icon3")
      .css("opacity", "1")
      .css("animation-name", "bird")
      .css("animation-duration", "4s")
      // .css("transition-timing-function", "ease-in-out")
      .css("animation-iteration-count", "1");
  }
});
//camp字幕動畫
$(window).scroll(function () {
  const scorllTop = $(window).scrollTop();
  if (scorllTop > 510) {
    $(".camp-camp")
      .css("opacity", "1")
      .css("animation-name", "camp")
      .css("animation-duration", "1s");
    // .css("transition-timing-function", "ease-in-out")
    // .css("animation-iteration-count", "infinite");
    $(".camp-icon1")
      .css("opacity", "1")
      .css("animation-name", "tree_left")
      .css("animation-duration", "1s");
    $(".camp-icon2")
      .css("opacity", "1")
      .css("animation-name", "tree_left")
      .css("animation-duration", "1s");
    $(".camp-icon3")
      .css("opacity", "1")
      .css("animation-name", "tree_right")
      .css("animation-duration", "1s");
    $(".camp-icon4")
      .css("opacity", "1")
      .css("animation-name", "tree_right")
      .css("animation-duration", "1s");
  }
});
//camp pic
$(window).scroll(function () {
  const scorllTop = $(window).scrollTop();
  if (scorllTop > 700) {
    $(".camp-img")
      .css("opacity", "1")
      .css("animation-name", "camp_pic")
      .css("animation-duration", "1s");
  }
});

//camp woman
$(window).scroll(function () {
  const scorllTop = $(window).scrollTop();
  if (scorllTop > 1450) {
    $(".camp-woman")
      .css("opacity", "1")
      .css("animation-duration", "1s")
      .css("animation-name", "camp_woman");
  }
});
//camp tent
$(window).scroll(function () {
  const scorllTop = $(window).scrollTop();
  if (scorllTop > 1450) {
    $(".camp-icon5")
      .css("opacity", "1")
      .css("animation-duration", "1s")
      .css("animation-name", "camp_tent");
  }
});
//map 左邊山
$(window).scroll(function () {
  const scorllTop = $(window).scrollTop();
  if (scorllTop > 1450) {
    $(".map-icon1")
      .css("opacity", "1")
      .css("animation-duration", "1s")
      .css("animation-name", "map_height");
  }
});
$(window).scroll(function () {
  const scorllTop = $(window).scrollTop();
  if (scorllTop > 1580) {
    $(".map-icon2")
      .css("opacity", "1")
      .css("animation-duration", "1s")
      .css("animation-name", "map_camp");
    $(".map-icon3")
      .css("opacity", "1")
      .css("animation-duration", "1s")
      .css("animation-name", "map_camp");
  }
});
//map 字體 和 旁邊小樹
$(window).scroll(function () {
  const scorllTop = $(window).scrollTop();
  if (scorllTop > 1670) {
    $(".map-map")
      .css("opacity", "1")
      .css("animation-duration", "1s")
      .css("animation-name", "map_map");
  }
});
$(window).scroll(function () {
  const scorllTop = $(window).scrollTop();
  if (scorllTop > 1670) {
    $(".map-text1")
      .css("opacity", "1")
      .css("animation-duration", "3s")
      .css("transition-delay", "1s")
      .css("animation-name", "map_text1");
  }
});
$(window).scroll(function () {
  const scorllTop = $(window).scrollTop();
  if (scorllTop > 1670) {
    $(".map-text2")
      .css("opacity", "1")
      .css("animation-duration", "3s")
      .css("transition-delay", "1s")
      .css("animation-name", "map_text2");
  }
});
//2485 new 夜景  標誌  小山
$(window).scroll(function () {
  const scorllTop = $(window).scrollTop();
  if (scorllTop > 2485) {
    $(".new-icon1")
      .css("opacity", "1")
      .css("animation-duration", "1s")
      // .css("transition-delay", "1s")
      .css("animation-name", "new_all");
    $(".new-icon2")
      .css("opacity", "1")
      .css("animation-duration", "1s")
      // .css("transition-delay", "1s")
      .css("animation-name", "new_all");
    $(".new-icon3")
      .css("opacity", "1")
      .css("animation-duration", "1s")
      // .css("transition-delay", "1s")
      .css("animation-name", "new_all");
    $(".new-icon4")
      .css("opacity", "1")
      .css("animation-duration", "1s")
      // .css("transition-delay", "1s")
      .css("animation-name", "new_all");
    $(".new-icon5")
      .css("opacity", "1")
      .css("animation-duration", "1s")
      // .css("transition-delay", "1s")
      .css("animation-name", "new_all");
  }
});
// $(window).scroll(function () {
//   const scorllTop = $(window).scrollTop();
//   if (scorllTop > 2490) {
//     $(".new-icon5")
//       .css("opacity", "1")
//       .css("animation-duration", "0.5s")
//       // .css("transition-delay", "1s")
//       .css("animation-iteration-count", "infinite")
//       .css("animation-name", "new_star");
//   }
// });

//new 整個box 2640
$(window).scroll(function () {
  const scrollTop = $(window).scrollTop();
  if (scrollTop > 2640) {
    $(".new-continer")
      .css("opacity", "1")
      .css("animation-name", "new_box")
      .css("animation-duration", "2.5s");
  }
});

//outdoor 四張圓形照片 慢慢浮起來 3740
$(window).scroll(function () {
  const scrollTop = $(window).scrollTop();
  if (scrollTop > 3740) {
    $(".outdoor-right-continer-one")
      .css("opacity", "1")
      .css("animation-name", "outdoor_pic")
      .css("animation-duration", "4s");
    $(".outdoor-right-continer-two")
      .css("opacity", "1")
      .css("animation-name", "outdoor_pic")
      .css("animation-duration", "4s");
  }
});

//3985 tourist-icon1 小船滑出來
$(window).scroll(function () {
  const scrollTop = $(window).scrollTop();
  if (scrollTop > 3985) {
    $(".tourist-icon1 img")
      .css("opacity", "1")
      .css("animation-name", "tourist_boat")
      .css("animation-duration", "2.5s");
  }
});
