let rn;
let score = 0;


function golaBanao() {
    let clit = "";

    for (let i = 1; i < 151; i++) {
        let rand = Math.ceil(Math.random() * 10);
        clit += `<div class="bubble">${rand}</div>`
    }
    let a = document.querySelector("#bottom");
    a.innerHTML = clit;
}


function timerChalao() {
    let a = document.querySelector("#time");
    let timerset = 60;

    let set = setInterval(function () {
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
    let a = document.querySelector("#tar");
    rn = Math.ceil(Math.random() * 10);
    a.textContent = rn;

}

function scoreBadega() {
    let point = document.querySelector("#score");
    score += 15;
    point.textContent = score;
}

// golaBanao();
// timerChalao();
// generateTarget();

let bot = document.querySelector("#bottom");

bot.addEventListener("click", function (dets) {
    let val = (Number(dets.target.textContent));
    if (val === rn) {
        scoreBadega();
        golaBanao();
        generateTarget();
    }
});



    let start = document.querySelector("#start");
    start.addEventListener("click", function () {
        start.style.visibility = "hidden";
        golaBanao();
        timerChalao();
        generateTarget();
        setTimeout(function () {
            start.style.visibility = "initial";
        }, 61000);

    });


