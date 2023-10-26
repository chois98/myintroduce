// wow
let wow = new WOW({
  boxClass: "wow", // default
  offset: 150, // default
  mobile: false, // default
  live: true, // default
});
wow.init();

// trigger
$(".trigger").click(function () {
  $(this).toggleClass("active");
  $(".gnb").toggleClass("active");
});

$(".gnb").click(function () {
  $(".gnb, .trigger").removeClass("active");
});
// fullpage

// $("#fullpage").fullpage({
//   anchors: ["home1", "profile1", "experince1", "favorties1", "resolution1"],
//     menu: "#topMenu",
//     autoScrolling: true,
//     scrollHorizontally: true,
// });
