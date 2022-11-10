alert("hello");
const gameOverSound = new Audio("death.mp3");
const musicSound = new Audio("music.mp3");
let score = 0;
let cross = true
document.onkeydown = function (e) {
    console.log("key code is:", e.keyCode)

    musicSound.play();
    if (e.keyCode == 38) {
        dino = document.querySelector(".dino");
        dino.classList.add("animationDino");


        setTimeout(() => {
            dino.classList.remove("animationDino");
        }, 700);
    }

    if (e.keyCode == 39) {
        dino = document.querySelector(".dino");
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));

        dino.style.left = dinox + 115 + "px";
    }

    if (e.keyCode == 37) {
        dino = document.querySelector(".dino");
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));

        dino.style.left = dinox - 115 + "px";
    }
}

//display the gameover


setInterval(() => {

    dino = document.querySelector(".dino");
    gameover = document.querySelector(".gameover");
    dragon = document.querySelector(".dragon");
    cactus = document.querySelector(".cactus");


    dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    dinoy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

    dragonx = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("left"));
    dragony = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("top"));

    //cactusx = parseInt(window.getComputedStyle(cactus, null).getPropertyValue("left"));
    //cactusy = parseInt(window.getComputedStyle(cactus, null).getPropertyValue("top"));


    offsetX = Math.abs(dinox - dragonx);
    offsetY = Math.abs(dinoy - dragony);

    //offsetX = Math.abs(dinox - cactusx);
    //offsetY = Math.abs(dinoy - cactusy);

    if (offsetX < 73 && offsetY < 52) {
        gameover.style.visibility = "visible";

        cactus.classList.remove("draAnni")
        dragon.classList.remove("DraAnni");

        gameOverSound.play();
        musicSound.pause()
    } else if (offsetX < 145 && cross) {
        score += 1
        updateScore(score);
        cross = false;

        setTimeout(() => {
            cross = true;
        }, 1000)
    }

    setInterval(() => {

        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dinoy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));


        cactusx = parseInt(window.getComputedStyle(cactus, null).getPropertyValue("left"));
        cactusy = parseInt(window.getComputedStyle(cactus, null).getPropertyValue("top"));

        offsetX = Math.abs(dinox - cactusx);
        offsetY = Math.abs(dinoy - cactusy);

        if (offsetX < 73 && offsetY < 52) {
            gameover.style.visibility = "visible";

            dragon.classList.remove("DraAnni");
            cactus.classList.remove("draAnni");

            gameOverSound.play();
            musicSound.pause();
        } else if (offsetX < 145 && cross) {
            score += 1;
            updateScore(score);
            cross = false;

            setTimeout(() => {
                cross = true;
            }, 1000)
        }


    }, 100)

}, 100)

function updateScore(score) {
    scoreCount.innerHTML = ("your score:" + score)
}