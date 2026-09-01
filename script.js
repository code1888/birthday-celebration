/* =========================================
   MUSIC
========================================= */

const birthdaySong =
    document.getElementById("birthdaySong");

const musicBtn =
    document.getElementById("musicBtn");

const musicHint =
    document.getElementById("musicHint");


/* Try autoplay as soon as page opens */

window.addEventListener("load", () => {

    birthdaySong.volume = 0.65;

    birthdaySong.play()
        .then(() => {

            musicStarted();

        })
        .catch(() => {

            musicHint.innerHTML =
                "🎵 Tap anywhere or Start Surprise to play music";

        });

});


/* Start music */

function playMusic() {

    birthdaySong.volume = 0.65;

    birthdaySong.play()
        .then(() => {

            musicStarted();

        })
        .catch(() => {

            musicHint.innerHTML =
                "🎵 Tap Start Surprise to play music";

        });

}


/* Music started */

function musicStarted() {

    musicBtn.innerHTML =
        "🔊 Music ON";

    musicBtn.classList.add(
        "playing"
    );

    musicHint.innerHTML =
        "🎵 Birthday music is playing ❤️";
}


/* Toggle */

function toggleMusic() {

    if (birthdaySong.paused) {

        playMusic();

    } else {

        birthdaySong.pause();

        musicBtn.innerHTML =
            "🎵 Music";

        musicBtn.classList.remove(
            "playing"
        );

        musicHint.innerHTML =
            "🔇 Music paused";
    }
}


/* =========================================
   PARTICLES
========================================= */

const particleContainer =
    document.querySelector(
        ".particles"
    );


for (let i = 0; i < 70; i++) {

    const particle =
        document.createElement(
            "div"
        );

    particle.className =
        "particle";


    particle.style.left =
        Math.random() * 100 + "%";


    particle.style.animationDuration =
        5 + Math.random() * 10 + "s";


    particle.style.animationDelay =
        Math.random() * 8 + "s";


    const size =
        2 + Math.random() * 5;


    particle.style.width =
        size + "px";


    particle.style.height =
        size + "px";


    particleContainer.appendChild(
        particle
    );
}


/* =========================================
   SCREEN CHANGE
========================================= */

function showScreen(id) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove(
                "active"
            );

        });


    document
        .getElementById(id)
        .classList.add(
            "active"
        );
}


/* =========================================
   START BIRTHDAY
========================================= */

function startBirthday() {

    /* User interaction guarantees
       best chance of audio playback */

    playMusic();

    showScreen(
        "cakeScreen"
    );
}


/* =========================================
   BLOW CANDLES
========================================= */

function blowCandles() {

    const flames =
        document.querySelectorAll(
            ".flame"
        );


    flames.forEach(flame => {

        flame.style.animation =
            "none";

        flame.style.transition =
            "1s";

        flame.style.transform =
            "translateY(-30px) scale(0) rotate(-45deg)";

        flame.style.opacity =
            "0";

    });


    document.getElementById(
        "blowBtn"
    ).innerHTML =
        "✨ Make A Wish!";


    createConfetti();


    setTimeout(() => {

        showScreen(
            "birthdayScreen"
        );

    }, 1800);
}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const container =
        document.getElementById(
            "confetti"
        );


    for (let i = 0; i < 180; i++) {

        const confetti =
            document.createElement(
                "div"
            );


        confetti.className =
            "confetti";


        confetti.style.left =
            Math.random() * 100 +
            "vw";


        confetti.style.animationDuration =
            2 + Math.random() * 3 +
            "s";


        confetti.style.animationDelay =
            Math.random() * .8 +
            "s";


        confetti.style.background =
            `hsl(
                ${Math.random() * 360},
                100%,
                65%
            )`;


        container.appendChild(
            confetti
        );


        setTimeout(() => {

            confetti.remove();

        }, 5000);
    }
}


/* =========================================
   MESSAGE
========================================= */

function showMessage() {

    showScreen(
        "messageScreen"
    );
}


/* =========================================
   GIFT
========================================= */

function openGift() {

    showScreen(
        "giftScreen"
    );
}


/* =========================================
   OPEN GIFT BOX
========================================= */

function openGiftBox() {

    const gift =
        document.querySelector(
            ".gift-container"
        );


    gift.classList.add(
        "open"
    );


    createConfetti();


    setTimeout(() => {

        showScreen(
            "finalScreen"
        );

        startHearts();

    }, 1300);
}


/* =========================================
   FLOATING HEARTS
========================================= */

let heartInterval;


function startHearts() {

    const container =
        document.querySelector(
            ".hearts"
        );


    clearInterval(
        heartInterval
    );


    heartInterval =
        setInterval(() => {

            const heart =
                document.createElement(
                    "div"
                );


            heart.className =
                "heart";


            heart.innerHTML =
                Math.random() > .5
                    ? "❤️"
                    : "💕";


            heart.style.left =
                Math.random() * 100 +
                "%";


            heart.style.animationDuration =
                4 + Math.random() * 5 +
                "s";


            heart.style.fontSize =
                15 + Math.random() * 30 +
                "px";


            container.appendChild(
                heart
            );


            setTimeout(() => {

                heart.remove();

            }, 9000);

        }, 350);
}


/* =========================================
   RESTART
========================================= */

function restart() {

    clearInterval(
        heartInterval
    );

    location.reload();
}