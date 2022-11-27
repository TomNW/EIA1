const einwd = "82,5 Mio";
const einwf = "67,0 Mio";
const einwi = "60,6 Mio";
const einwp = "38,0 Mio";
const einweu = "511,5 Mio";
const prozentd = "16,12%";
const prozentf = "13,09%";
const prozenti = "11,84%";
const prozentp = "7,42%";
const wachstd = "0,2%";
const wachstf = "11,0%";
const wachsti = "-2,7%";
const wachstp = "-9,5%";
const awachstd = "0,2 Mio";
const awachstf = "7,4 Mio";
const awachsti = "-1,6 Mio";
const awachstp = "-3,6 Mio";
console.log("Deutschlands Einwohnerzahl lag 2017 bei " + einwd + ".");
console.log("Frankreichs Einwohnerzahl lag 2017 bei " + einwf + ".");
console.log("Italiens Einwohnerzahl lag 2017 bei " + einwi + ".");
console.log("Polens Einwohnerzahl lag 2017 bei " + einwp + ".");
function ger() {
    document.getElementById("header").innerHTML = "Einwohnerzahl Deutschland";
    document.getElementById("text1").innerHTML = "" + einwd + "";
    document.getElementById("text2").innerHTML = "Deutschlands Einwohnerzahl lag 2017 bei " + einwd + ".";
    document.getElementById("text3").innerHTML = "" + prozentd + "";
    document.getElementById("text4").innerHTML = "" + wachstd + "";
    document.getElementById("text5").innerHTML = "" + awachstd + "";
}
function fra() {
    document.getElementById("header").innerHTML = "Einwohnerzahl Frankreich";
    document.getElementById("text1").innerHTML = "" + einwf + "";
    document.getElementById("text2").innerHTML = "Frankreich Einwohnerzahl lag 2017 bei " + einwf + ".";
    document.getElementById("text3").innerHTML = "" + prozentf + "";
    document.getElementById("text4").innerHTML = "" + wachstf + "";
    document.getElementById("text5").innerHTML = "" + awachstf + "";
}
function ita() {
    document.getElementById("header").innerHTML = "Einwohnerzahl Italien";
    document.getElementById("text1").innerHTML = "" + einwi + "";
    document.getElementById("text2").innerHTML = "Italiens Einwohnerzahl lag 2017 bei " + einwi + ".";
    document.getElementById("text3").innerHTML = "" + prozenti + "";
    document.getElementById("text4").innerHTML = "" + wachsti + "";
    document.getElementById("text5").innerHTML = "" + awachsti + "";
}
function pol() {
    document.getElementById("header").innerHTML = "Einwohnerzahl Polen";
    document.getElementById("text1").innerHTML = "" + einwp + "";
    document.getElementById("text2").innerHTML = "Polens Einwohnerzahl lag 2017 bei " + einwp + ".";
    document.getElementById("text3").innerHTML = "" + prozentp + "";
    document.getElementById("text4").innerHTML = "" + wachstp + "";
    document.getElementById("text5").innerHTML = "" + awachstp + "";
}
function eur() {
    document.getElementById("header").innerHTML = "Einwohnerzahl in der europäischen Union";
    document.getElementById("text1").innerHTML = "" + einweu + "";
    document.getElementById("text2").innerHTML = "Deutschlands Einwohnerzahl lag 2017 bei " + einwd + ".";
    document.getElementById("text3").innerHTML = "" + prozentd + "";
    document.getElementById("text4").innerHTML = "" + wachstd + "";
    document.getElementById("text5").innerHTML = "" + awachstd + "";
}
//# sourceMappingURL=main.js.map