$(document).ready(function () {
    for (let i = 0; i < 7; i++) {
        $(`#${i}`).click(function () {
            $.ajax({
                url: "weather.json", success: function (result) {
                    $("#div").html(`${result[i].dayOfWeek} ${result[i].currDate} ${result[i].minTemp}ﾟC ${result[i].maxTemp}ﾟC ${result[i].description}`);
                    document.body.style.backgroundImage=`url(${result[i].image})`
                }
            });
        });
    }
})