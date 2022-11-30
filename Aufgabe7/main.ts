const einwd: number = 82.5;
const einwf: number = 67.0;
const einwi: number = 60.6;
const einwp: number = 38.0;
const einweu: number = 511.5

const prozentde = einwd / einweu * 100
const prozentfr = einwf / einweu * 100
const prozentit = einwi / einweu * 100
const prozentpl = einwp / einweu * 100
const prozenteur = einweu / einweu * 100

const wachstd = "0,2%"
const wachstf = "11,0%"
const wachsti = "-2,7%"
const wachstp = "-9,5%"
const wachsteu = "3,3%"
const awachstd = "0,2 Mio"
const awachstf = "7,4 Mio"
const awachsti = "-1,6 Mio"
const awachstp = "-3,6 Mio"
const awachsteu = "17,1 Mio"

function myFunc(evt) {


  document.getElementById("text1").innerHTML = (evt.currentTarget.parameter) + " Mio";
  document.getElementById("text3").innerHTML = (evt.currentTarget.parameter2) + "%";
  document.getElementById("text4").innerHTML = (evt.currentTarget.parameter4);
  document.getElementById("text5").innerHTML = (evt.currentTarget.parameter5);
  document.getElementById("header").innerHTML = "Einwohnerzahl" + (evt.currentTarget.parameter1);
  document.getElementById("balken").style.height = (evt.currentTarget.parameter2)+"%";

}


const germany = document.getElementById("ger") as HTMLInputElement
const france = document.getElementById("fra") as HTMLInputElement
const italia = document.getElementById("ita") as HTMLInputElement
const poland = document.getElementById("pol") as HTMLInputElement
const europa = document.getElementById("eur") as HTMLInputElement

germany.addEventListener('click', myFunc, false);
germany.parameter = einwd;
germany.parameter1 = " Deutschland";
germany.parameter2 = prozentde.toFixed(2);
germany.parameter3 = prozentde.toFixed(2);
germany.parameter4 = wachstd;
germany.parameter5 = awachstd;

france.addEventListener('click', myFunc, false);
france.parameter = einwf;
france.parameter1 = " Frankreich"
france.parameter2 = prozentfr.toFixed(2);
france.parameter3 = prozentfr.toFixed(2);
france.parameter4 = wachstf;
france.parameter5 = awachstf;

italia.addEventListener('click', myFunc, false);
italia.parameter = einwi;
italia.parameter1 = " Italien"
italia.parameter2 = prozentit.toFixed(2);
italia.parameter3 = prozentit.toFixed(2);
italia.parameter4 = wachsti;
italia.parameter5 = awachsti;

poland.addEventListener('click', myFunc, false);
poland.parameter = einwp;
poland.parameter1 = " Polen"
poland.parameter2 = prozentpl.toFixed(2);
poland.parameter3 = prozentpl.toFixed(2);
poland.parameter4 = wachstp;
poland.parameter5 = awachstp;

europa.addEventListener('click', myFunc, false);
europa.parameter = einwp;
europa.parameter1 = " in der europäischen Union"
europa.parameter2 = prozenteur.toFixed(2);
europa.parameter3 = prozenteur.toFixed(2);
europa.parameter4 = wachsteu;
europa.parameter5 = awachsteu;



