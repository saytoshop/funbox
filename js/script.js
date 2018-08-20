$(function(f) {
  $(".cards").on("click", ".buy", function (e) {
    e.preventDefault();
    $(this).toggleClass("selected");
  });
});
