$(document).ready(function () {
    $("#btnSlideTog").click(function () {
        $("ul").slideToggle();
    });
});


var ranNum;
var loss = 0;
var win = 0;
var previous = 0;
var counter = 0;
var numberOptions = [10, 5, 3, 7];
var score = score;

	
ranNum = Math.floor(Math.random() * 82) + 32;
$("#numTarget").html(ranNum);

for (var i = 0; i < numberOptions.length; i++) {
    
    var imageCrystal = $("<img>");
    
    imageCrystal.addClass("crystal-image");
   
    imageCrystal.attr("src", "assets/img/button.png");
    
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    
    $("#crystals").append(imageCrystal);
}


$(".crystal-image").on("click", function () {
  
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
  
    counter += crystalValue;

       
    $("#score").text(counter);

    if (counter == ranNum) {
        win++;
        $("#win").html("Win:   " + win);
        $(".winner").html("Winner, Winner, Chicken Dinner!!!");
    }

    if (counter > ranNum) {
        loss++;
        $("#loss").html("Loss:   " + loss);
        $(".loser").html("You Lose!!  Go Home!!");
    }
});



$("#pause").click(function () {
    audioElement.pause();
    $("#status").text("Status: Paused");
});

$("#restart").click(function () {
    audioElement.currentTime = 0;
});