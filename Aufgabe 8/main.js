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
var beat = [Samples[5], Samples[8], Samples[4]];
var zaehler = 0;
window.addEventListener("load", addClickListenersDrumPad);
function playSample(sound) {
    var ton = new Audio(sound);
    ton.play();
    console.log("test");
}
function playBeat() {
    setInterval(function () {
        playSample(beat[zaehler]);
        zaehler++;
        if (zaehler === 3) {
            zaehler = 0;
        }
    }, 500);
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
    document.querySelector(".playbutton").addEventListener("click", function () { playBeat(); });
}
//# sourceMappingURL=main.js.map