window.onload = function() {


    document.getElementById('button').addEventListener('click', function() {
        requestNewQuote();
        soundRand();

    })

    function createRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }



    function requestNewQuote() {
        $.get("https://api.whatdoestrumpthink.com/api/v1/quotes", function(response) {
            console.log(response)
            var i = createRandom(0, response.messages.personalized.length);
            var name = document.getElementById('names').value;
            var insult = " " + response.messages.personalized[i];
            console.log(name + insult)
            setQuote(name, insult);

        })
    }


    function setQuote(name, insult) {
        console.log(name, insult);
        document.getElementById('quote').innerHTML = "<p class='uppermargin'>" + name + insult + "</p>";

    }



function soundRand(){
  var number = createRandom(1,3);
  if (number == 1){
    console.log('play sound 1');
    document.getElementById('play1').play();
  }
  else if(number == 2){
    console.log('play sound 2');
    document.getElementById('play2').play();
  }
  else {
    console.log('play sound  3');
    document.getElementById('play3').play();
  }
}


//boucning jquery
$(document).ready(function(){
    animateDiv();

});

function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.a').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $('.move').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}
}
