$(document).ready(function () {
  $("#btnCur").one("click", function () {
    $("#cont").slideToggle(1000);
    $.get("http://api.openweathermap.org/data/2.5/weather?q=%D0%9A%D0%B0%D1%80%D0%B0%D0%B3%D0%B0%D0%BD%D0%B4%D1%8B&appid=79d77cd2903c1b684e18370ff4c0dcf6",
      function (data, textStatus, jqXHR) {
        console.log(data)
        if (data.weather.description = "clear sky") {
          $('<img id="icon" src="https://i.pinimg.com/originals/db/d9/0d/dbd90d367167db3967af692343915f5d.png">').appendTo('#cont');
          $("#icon").css("width", "100px");
          $("#icon").css("height", "100px");
        }
        $("<h1></h1>").appendTo('#cont').text(data.name);
        $("<h1></h1>").appendTo('#cont').text("+" + (data.main.temp - 273.15) + "°");
        $("<h2></h2>").appendTo('#cont').text("Скорость ветра" + " " + data.wind.speed + " " + "м/с");
        $("<h2></h2>").appendTo('#cont').text("Давление" + " " + data.main.pressure);
        $("<h2></h2>").appendTo('#cont').text("Влажность" + " " + data.main.humidity + "%");
        $("<h2></h2>").appendTo('#cont').text("Максимальная температура" + " " + "+" + (data.main.temp_max - 273.15) + "°");
        $("<h2></h2>").appendTo('#cont').text("Минимальная температура" + " " + "+" + (data.main.temp_min - 273.15) + "°");
        $("<h2></h2>").appendTo('#cont').text("Ощущается как" + " " + "+" + Math.round(data.main.feels_like - 273.15) + "°");
      },
    );
  });



  // файв дейс
  $("#btnNoCur").one("click", function () {
    // $("#conttwo").slideToggle(1000);
    $.get("http://api.openweathermap.org/data/2.5/forecast?q=%D0%9A%D0%B0%D1%80%D0%B0%D0%B3%D0%B0%D0%BD%D0%B4%D1%8B&appid=79d77cd2903c1b684e18370ff4c0dcf6",
      function (data, textStatus, jqXHR) {
        for (let item of data.list) {
          console.log(data.list)
          let date = new Date(item.dt_txt);
          console.log(date.getDate())
          let d = date.getDate();
          if (date.getDate() == d) {
            $("<div id='day1'></div>").appendTo("#conttwo");
            $("<h1></h1>").appendTo('#day1').text(item.dt_txt);
            $("<h1></h1>").appendTo('#day1').text("+" + Math.round(item.main.temp - 273.15) + "°");
            $("<h2></h2>").appendTo('#day1').text("Скорость ветра" + " " + Math.round(item.wind.speed) + " " + "м/с");
            $("<h2></h2>").appendTo('#day1').text("Давление" + " " + item.main.pressure);
            $("<h2></h2>").appendTo('#day1').text("Влажность" + " " + item.main.humidity + "%");
            $("<h2></h2>").appendTo('#day1').text("Максимальная температура" + " " + "+" + Math.round(item.main.temp_max - 273.15) + "°");
            $("<h2></h2>").appendTo('#day1').text("Минимальная температура" + " " + "+" + Math.round(item.main.temp_min - 273.15) + "°");
            $("<h2></h2>").appendTo('#day1').text("Ощущается как" + " " + "+" + Math.round(item.main.feels_like - 273.15) + "°");
          } else if (date.getDate() == d + 1) {
            $("<div id='day2'></div>").appendTo("#conttwo");
            $("<h1></h1>").appendTo('#day2').text(item.dt_txt);
            $("<h1></h1>").appendTo('#day2').text("+" + Math.round(item.main.temp - 273.15) + "°");
            $("<h2></h2>").appendTo('#day2').text("Скорость ветра" + " " + Math.round(item.wind.speed) + " " + "м/с");
            $("<h2></h2>").appendTo('#day2').text("Давление" + " " + item.main.pressure);
            $("<h2></h2>").appendTo('#day2').text("Влажность" + " " + item.main.humidity + "%");
            $("<h2></h2>").appendTo('#day2').text("Максимальная температура" + " " + "+" + Math.round(item.main.temp_max - 273.15) + "°");
            $("<h2></h2>").appendTo('#day2').text("Минимальная температура" + " " + "+" + Math.round(item.main.temp_min - 273.15) + "°");
            $("<h2></h2>").appendTo('#day2').text("Ощущается как" + " " + "+" + Math.round(item.main.feels_like - 273.15) + "°");
          }
          if (date.getDate() == d + 2) {
            $("<div id='day3'></div>").appendTo("#conttwo");
            $("<h1></h1>").appendTo('#day3').text(item.dt_txt);
            $("<h1></h1>").appendTo('#day3').text("+" + Math.round(item.main.temp - 273.15) + "°");
            $("<h2></h2>").appendTo('#day3').text("Скорость ветра" + " " + Math.round(item.wind.speed) + " " + "м/с");
            $("<h2></h2>").appendTo('#day3').text("Давление" + " " + item.main.pressure);
            $("<h2></h2>").appendTo('#day3').text("Влажность" + " " + item.main.humidity + "%");
            $("<h2></h2>").appendTo('#day3').text("Максимальная температура" + " " + "+" + Math.round(item.main.temp_max - 273.15) + "°");
            $("<h2></h2>").appendTo('#day3').text("Минимальная температура" + " " + "+" + Math.round(item.main.temp_min - 273.15) + "°");
            $("<h2></h2>").appendTo('#day3').text("Ощущается как" + " " + "+" + Math.round(item.main.feels_like - 273.15) + "°");
          } else if (date.getDate() == d + 3) {
            $("<div id='day4'></div>").appendTo("#conttwo");
            $("<h1></h1>").appendTo('#day4').text(item.dt_txt);
            $("<h1></h1>").appendTo('#day4').text("+" + Math.round(item.main.temp - 273.15) + "°");
            $("<h2></h2>").appendTo('#day4').text("Скорость ветра" + " " + Math.round(item.wind.speed) + " " + "м/с");
            $("<h2></h2>").appendTo('#day4').text("Давление" + " " + item.main.pressure);
            $("<h2></h2>").appendTo('#day4').text("Влажность" + " " + item.main.humidity + "%");
            $("<h2></h2>").appendTo('#day4').text("Максимальная температура" + " " + "+" + Math.round(item.main.temp_max - 273.15) + "°");
            $("<h2></h2>").appendTo('#day4').text("Минимальная температура" + " " + "+" + Math.round(item.main.temp_min - 273.15) + "°");
            $("<h2></h2>").appendTo('#day4').text("Ощущается как" + " " + "+" + Math.round(item.main.feels_like - 273.15) + "°");
          }
          if (date.getDate() == d + 4) {
            $("<div id='day5'></div>").appendTo("#conttwo");
            $("<h1></h1>").appendTo('#day5').text(item.dt_txt);
            $("<h1></h1>").appendTo('#day5').text("+" + Math.round(item.main.temp - 273.15) + "°");
            $("<h2></h2>").appendTo('#day5').text("Скорость ветра" + " " + Math.round(item.wind.speed) + " " + "м/с");
            $("<h2></h2>").appendTo('#day5').text("Давление" + " " + item.main.pressure);
            $("<h2></h2>").appendTo('#day5').text("Влажность" + " " + item.main.humidity + "%");
            $("<h2></h2>").appendTo('#day5').text("Максимальная температура" + " " + "+" + Math.round(item.main.temp_max - 273.15) + "°");
            $("<h2></h2>").appendTo('#day5').text("Минимальная температура" + " " + "+" + Math.round(item.main.temp_min - 273.15) + "°");
            $("<h2></h2>").appendTo('#day5').text("Ощущается как" + " " + "+" + Math.round(item.main.feels_like - 273.15) + "°");
          }
        }
      },
    );
  });
});
