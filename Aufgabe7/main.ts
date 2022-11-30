const einwd : string = "82,5 Mio"
const einwf = "67,0 Mio"
const einwi = "60,6 Mio"
const einwp = "38,0 Mio"
const einweu = "511,5 Mio"
const prozentd = "16,12%"
const prozentf = "13,09%"
const prozenti = "11,84%"
const prozentp = "7,42%"
const prozenteu = "100%"
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


const germany = document.getElementById("ger") as HTMLInputElement
const france = document.getElementById("fra") as HTMLInputElement
const italia = document.getElementById("ita") as HTMLInputElement
const poland = document.getElementById("pol") as HTMLInputElement
const europa = document.getElementById("eur") as HTMLInputElement


germany.addEventListener('click', myFunc, false);
germany.parameter = einwd;
germany.parameter1 = " Deutschland";
germany.parameter2 = prozentd;
germany.parameter3 = prozentd;
germany.parameter4 = wachstd;
germany.parameter5= awachstd;
germany.parameter6 = prozentd;
france.addEventListener('click', myFunc, false);
france.parameter = einwf;
france.parameter1 = " Frankreich"
france.parameter2 = prozentf;
france.parameter3 = prozentf;
france.parameter4 = wachstf;
france.parameter5= awachstf;
italia.addEventListener('click', myFunc, false);
italia.parameter = einwi;
italia.parameter1 = " Italien"
italia.parameter2 = prozenti;
italia.parameter3 = prozenti;
italia.parameter4 = wachsti;
italia.parameter5= awachsti;
poland.addEventListener('click', myFunc, false);
poland.parameter = einwp;
poland.parameter1 = " Polen"
poland.parameter2 = prozentp;
poland.parameter3 = prozentp;
poland.parameter4 = wachstp;
poland.parameter5= awachstp;
europa.addEventListener('click', myFunc, false);
europa.parameter = einwp;
europa.parameter1 = " in der europäischen Union"
europa.parameter2 = prozentp;
europa.parameter3 = prozentp;
europa.parameter4 = wachsteu;
europa.parameter5= awachsteu;

function myFunc(evt)
{

  
  document.getElementById("text1").innerHTML = (evt.currentTarget.parameter);
  document.getElementById("text3").innerHTML = (evt.currentTarget.parameter2);
 document.getElementById("text4").innerHTML = (evt.currentTarget.parameter4);
  document.getElementById("text5").innerHTML = (evt.currentTarget.parameter5);
  document.getElementById("header").innerHTML = "Einwohnerzahl" + (evt.currentTarget.parameter1)
  document.getElementById("balken").style.height = (evt.currentTarget.parameter6);

}

