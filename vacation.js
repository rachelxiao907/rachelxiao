var b1 = $(".b1");
var b2 = $(".b2");
var b3 = $(".b3");

function showCruise() {
  var cruise = document.getElementById("cruise");
  if (cruise.style.display === "none") {
    cruise.style.display = "block";
    b1.addClass("press");
  } else {
    cruise.style.display = "none";
    b1.removeClass("press");
  }
}
function showCancun() {
  var cancun = document.getElementById("cancun");
  if (cancun.style.display === "none") {
    cancun.style.display = "block";
    b2.addClass("press");
  } else {
    cancun.style.display = "none";
    b2.removeClass("press");
  }
}
function showHotels() {
  var hotels = document.getElementById("hotels");
  if (hotels.style.display === "block") {
    hotels.style.display = "none";
    b3.toggleClass("press");
  } else {
    hotels.style.display = "block";
    b3.toggleClass("press");
  }
}