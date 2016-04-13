(function() {
  jQuery(document).ready(function() {
    var currentDate, date, day, month, year;
    new WOW().init();
    $(".rotate").textrotator({
      animation: "fade-2",
      separator: ",",
      speed: 700
    });
    currentDate = new Date("May 29, 2016");
    day = currentDate.getDate();
    month = currentDate.getMonth() + 1;
    year = currentDate.getFullYear();
    date = month + "/" + day + "/" + year;
    return $("#js-countdown").countdown({
      date: date,
      offset: -8,
      day: "Day",
      days: "Days"
    }, function() {
      alert("Done!");
    });
  });

}).call(this);
