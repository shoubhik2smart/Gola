var rn;
var score = 0;


function golaBanao() {
    var clit = "";

    for (var i = 1; i < 177; i++) {
        var rand = Math.ceil(Math.random() * 10);
        clit += `<div class="bubble">${rand}</div>`
    }
    var a = document.querySelector("#bottom");
    a.innerHTML = clit;
}


function timerChalao() {
    var a = document.querySelector("#time");
    var timerset = 60;

    var set = setInterval(function () {
        if (timerset > 0) {
            timerset--;
            a.textContent = timerset;
        }
        else {
            clearInterval(set);
            document.querySelector("#bottom").innerHTML = `<h1> Game Over </h1>`;

        }
    }, 1000);
}

function generateTarget() {
    var a = document.querySelector("#tar");
    rn = Math.ceil(Math.random() * 10);
    a.textContent = rn;

}

function scoreBadega() {
    var point = document.querySelector("#score");
    score += 15;
    point.textContent = score;
}

golaBanao();
timerChalao();
generateTarget();

var bot = document.querySelector("#bottom");

bot.addEventListener("click", function (dets) {
    var val = (Number(dets.target.textContent));
    if (val === rn) {
        scoreBadega();
        golaBanao();
        generateTarget();
    }


});