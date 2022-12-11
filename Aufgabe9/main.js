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
//Funktionen// 
window.addEventListener("load", addClickListenersDrumPad);
//Zentrale Funktions //
// tslint:disable-next-line: typedef
function playSample(soundQuelle) {
    // tslint:disable-next-line: typedef
    var sound = new Audio(soundQuelle);
    sound.play();
}
//Funktion Remix//
function REMIX() {
    document.querySelector("#remix").addEventListener("click", function () {
        beatremix = setInterval(function () {
            playSample(beat[zaehler]);
            zaehler = Math.floor(Math.random() * 9);
        }, 500);
    });
}
//Funktion Play-Button//
function myBeat() {
    playSample(beat[zaehler]);
    zaehler += 1;
    if (zaehler > (beat.length - 1))
        zaehler = 0;
}
function PlayBeat() {
    //Ton soll abgespielt werden//
    if (document.getElementById("play").classList.contains("fa-play")) {
        document.getElementById("play").classList.remove("fa-play");
        document.getElementById("play").classList.add("fa-stop");
        interval = setInterval(myBeat, 350);
        //Stopfunktion des Play Buttons, wwird zum Stop//
    }
    else {
        document.getElementById("play").classList.remove("fa-stop");
        document.getElementById("play").classList.add("fa-play");
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
    document.querySelector("#play").addEventListener("click", PlayBeat);
    document.querySelector("#remix").addEventListener("click", function () { REMIX(); });
}
Samples;
//# sourceMappingURL=main.js.map