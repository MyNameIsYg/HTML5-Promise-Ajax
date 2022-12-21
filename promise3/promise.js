$(document).ready(function () {
    var json = "input.json"
    $("#text1").hover(function () {
        $.ajax({
            url: json, success: function (result) {
                $("#p1").html(result.firstName.info);
            }
        });
    });
    $("#text1").blur(function () {
        $.ajax({
            url: json, success: function (result) {
                $("#p1").html(result.firstName.warning);
            }
        });
    });
    $("#text2").hover(function () {
        $.ajax({
            url: json, success: function (result) {
                $("#p2").html(result.lastName.info);
            }
        });
    });
    $("#text2").blur(function () {
        $.ajax({
            url: json, success: function (result) {
                $("#p2").html(result.lastName.warning);
            }
        });
    });
    $("#number").hover(function () {
        $.ajax({
            url: json, success: function (result) {
                $("#p3").html(result.phone.info);
            }
        });
    });
    $("#number").blur(function () {
        $.ajax({
            url: json, success: function (result) {
                $("#p3").html(result.phone.warning);
            }
        });
    });
    $("#sumbit").click(function () {
        if (document.getElementById('text1').value.length < 3) {
            $.ajax({
                url: json, success: function (result) {
                    $("#p1").html(result.firstName.error);
                }
            });
        }
        if (document.getElementById('text2').value.length < 3) {
            $.ajax({
                url: json, success: function (result) {
                    $("#p2").html(result.lastName.error);
                }
            });
        }
        if (document.getElementById('number').value.length < 9) {
            $.ajax({
                url: json, success: function (result) {
                    $("#p3").html(result.phone.error[0]);
                }
            });
        }
        if (document.getElementById('number').value.length > 10) {
            $.ajax({
                url: json, success: function (result) {
                    $("#p3").html(result.phone.error[1]);

                }
            });
        }
    })
});
