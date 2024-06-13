
$(".bxs-moon").hide();

// ------- light-mode ---------

$(".bxs-sun").on("click", function () {
  $(".bxs-sun").hide();
  $(".bxs-moon").show();
  $("body").addClass("dark-mode");
});

// ------- dark-mode ---------

$(".bxs-moon").on("click", function () {
  $(".bxs-moon").hide();
  $(".bxs-sun").show();
  $("body").removeClass("dark-mode");
});
