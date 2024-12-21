let gameSeq = [];
let userSeq = [];
let bnts = ["red", "yellow", "blue", "green"];

let started = false;
let level = 0;
let H2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("start");
        started = true;
        levelup();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100);
}

function levelup() {
    userSeq = [];
    level++;
    H2.innerText = `Level ${level}`;
    // Random button selector
    let randidx = Math.floor(Math.random() * 4); // Fixed range for 4 buttons
    let randcolor = bnts[randidx];
    let randbnt = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    btnFlash(randbnt);
}

function check() {
    let idx = userSeq.length - 1; // Compare latest user input
    if (gameSeq[idx] === userSeq[idx]) {
        if (gameSeq.length === userSeq.length) {
            setTimeout(levelup, 1000);
        }
        console.log("same value");
    } else {
        H2.innerHTML = `Game over! <b>Your score was ${level}</b><br>Press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red"; 
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        reset();
    }
}

function bntpress() {
    let btn = this;
    btnFlash(btn);
    let usercolor = btn.getAttribute("id"); // Corrected method name
    userSeq.push(usercolor);
    check();
}

let allbnt = document.querySelectorAll(".btn");
for (let btn of allbnt) { // Use 'let' to avoid global variable
    btn.addEventListener("click", bntpress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
