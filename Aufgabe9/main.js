var Samples = [
    ("samples/DrumPad/A.mp3"),
    ("samples/DrumPad/C.mp3"),
    ("samples/DrumPad/F.mp3"),
    ("samples/DrumPad/G.mp3"),
    ("samples/DrumPad/hihat.mp3"),
    ("samples/DrumPad/kick.mp3"),
    ("samples/DrumPad/laugh-1.mp3"),
    ("samples/DrumPad/laugh-2.mp3"),
    ("samples/DrumPad/snare.mp3")
];
var beat = [Samples[4], Samples[5], Samples[8]];
var zaehler = 0;
var beatremix;
var interval;
var record = document.getElementById("record");
window.addEventListener("load", addClickListenersDrumPad);
function playSample(soundQuelle) {
    var sound = new Audio(soundQuelle);
    sound.play();
}
function REMIX() {
    document.querySelector("#remix").addEventListener("click", function () {
        beatremix = setInterval(function () {
            playSample(beat[zaehler]);
            zaehler = Math.floor(Math.random() * 9);
        }, 500);
    });
}
function myBeat() {
    playSample(beat[zaehler]);
    zaehler += 1;
    if (zaehler > (beat.length - 1))
        zaehler = 0;
}
function StartBeat() {
    if (document.getElementById("playbutton").classList.contains("fa-play")) {
        document.getElementById("playbutton").classList.remove("fa-play");
        document.getElementById("playbutton").classList.add("fa-pause");
        interval = setInterval(myBeat, 350);
    }
    else {
        document.getElementById("playbutton").classList.remove("fa-pause");
        document.getElementById("playbutton").classList.add("fa-play");
        clearInterval(interval);
    }
}
function addClickListenersDrumPad() {
    document.querySelector(".taste-1").addEventListener("click", function () { playSample(Samples[0]); });
    document.querySelector(".taste-2").addEventListener("click", function () { playSample(Samples[1]); });
    document.querySelector(".taste-3").addEventListener("click", function () { playSample(Samples[2]); });
    document.querySelector(".taste-4").addEventListener("click", function () { playSample(Samples[3]); });
    document.querySelector(".taste-5").addEventListener("click", function () { playSample(Samples[4]); });
    document.querySelector(".taste-6").addEventListener("click", function () { playSample(Samples[5]); });
    document.querySelector(".taste-7").addEventListener("click", function () { playSample(Samples[6]); });
    document.querySelector(".taste-8").addEventListener("click", function () { playSample(Samples[7]); });
    document.querySelector(".taste-9").addEventListener("click", function () { playSample(Samples[8]); });
    document.querySelector("#playbutton").addEventListener("click", StartBeat);
    document.querySelector("#remix").addEventListener("click", function () { REMIX(); });
}
//# sourceMappingURL=main.js.map