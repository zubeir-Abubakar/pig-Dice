  //user logic face 
$().ready(()=>{
$("#start").click(function () {
    if ($("#name1") == "" || $("#name2").val() == "") {
        alert("You need to enter your name first to play !");
        location.reload();
    } else {
        $(".pdice").hide();
        $(".game").show();

        nameInput1 = $("input#name1").val();
        nameInput2 = $("input#name2").val();


        $("#player1").text(nameInput1);
        $("#player2").text(nameInput2);
    }
    });
});
var totalSum1 = 0;
var sum1 = [];
var currentScore1 = 0;
var totalSum2 = 0;
var sum2 = [];
var currentScore2 = 0;
$("#bos").css({
    opacity: "0.2"
});

function roll1() {
    var rollDice1 = parseInt(Math.floor((Math.random() * 6 + 1)));
    document.getElementById('plyr1').innerHTML = rollDice1;
    if (rollDice1 == 1) {
        document.getElementById('img').src = "img/dice1.png";
    } else if (rollDice1 == 2) {
        document.getElementById('img').src = "img/dice2.png";
    } else if (rollDice1 == 3) {
        document.getElementById('img').src = "img/dice3.png";
    } else if (rollDice1 == 4) {
        document.getElementById('img').src = "img/dice4.png";
    } else if (rollDice1 == 5) {
        document.getElementById('img').src = "img/dice5.png";
    } else {
        document.getElementById('img').src = "img/dice6.png";
    }
    if (rollDice1 != 1) {
        currentScore1 += rollDice1;
        document.getElementById('currentScore1').innerHTML = currentScore1;
    } 
    else {
        currentScore1 = 0;
        sum1 = [];
        $(".bt1").hide();
        $(".bt2").show();
        $("#bod").css({
            opacity: "0.2"
        });
        $("#bos").css({
            opacity: "1"
        });
    }
};
//business logic face 
$(document).ready(function () {
    $("#hold1").click(function () {
        sum1.push(currentScore1);
         $(".bt1").hide();
         $(".bt2").show();
         $("#bod").css({
         opacity: "0.5"
     });
         $("#bos").css({
          opacity: "1"
     });
         sum1.forEach(function(sum) {
          totalSum1 += (sum);
      });
      });
    });
         document.getElementById('totalSum1').innerHTML = totalSum1;
         currentScore1 = 0;
         sum1 = [];
         if (totalSum1 >= 100) {
         alert("PLayer 1:-you are the winner!!");

         $(".winner").hide();

         $(".congratulations!!").show();
         $("#winn").text(nameInput1);
        //  document.getElementById('winn').innerHTML=nameInput1;

          }
          function reload() {
          location.reload();
           }
function roll2() {
    var rollDice2 = document.getElementById('plyr2').innerHTML = parseInt(Math.floor((Math.random() * 6 + 1)));
    if (rollDice2 == 1) {
        document.getElementById('img').src = "img/dice1.png";
    } else if (rollDice2 == 2) {
        document.getElementById('img').src = "img/dice2.png";
    } else if (rollDice2 == 3) {
        document.getElementById('img').src = "img/dice3.png";
    } else if (rollDice2 == 4) {
        document.getElementById('img').src = "img/dice4.png";
    } else if (rollDice2 == 5) {
        document.getElementById('img').src = "img/dice5.png";
    } else {
        document.getElementById('img').src = "img/dice6.jpeg";
    }
    if (rollDice2 != 1) {
        currentScore2 += rollDice2;
        document.getElementById('currentScore2').innerHTML = currentScore2;
}
else {
    currentScore2 = 0;
    sum2 = [];
    $(".bt2").hide();
    $(".bt1").show();
    $("#bos").css({opacity: "0.2"});
    $("#bod").css({opacity:"1"});
}
};
$(document).ready(function(){
    $("#hold2").click(function(){
        sum2.push(currentScore2);
        $(".bt2").hide();
        $(".bt1").show();
        $("#bos").css({opacity: "0.2"});
        $("#bod").css({opacity: "1"});
        sum2.forEach(function(sums){
            return totalSum2 += (sum);
        });
        document.getElementById('totalSum').innerHTML = totalSum2;
        currentScore2 = 0;
        sum2 = [];
        if (totalSum2 >=100){
            alert("player2 :- congratulations your the winner!!")
            $(".winner").hide();
            $("#wins").text(nameInput2);
            $(".congrats").show();

        }
    });
});