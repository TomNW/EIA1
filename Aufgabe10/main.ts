window.addEventListener("load", function(): void {
    let enter: HTMLInputElement = (document.getElementById("inputText") as HTMLInputElement);
    let zahl: number = 0;
    
    enter.addEventListener("keypress", function (event: KeyboardEvent): void {
        if (event.key === "Enter") {
            neueAufgabe();
            event.preventDefault();
           
    }
});


function neueAufgabe(): void {


let div: HTMLDivElement = document.createElement("div");
div.className = "Aufgabe";


console.log("test")

let check: HTMLInputElement = document.createElement("input");
check.type = "checkbox";
check.className = "checkBox";

let inhalt: HTMLLabelElement = document.createElement("label");
inhalt.innerHTML = enter.value;
inhalt.className = "Aufgabe"; 

let löschen: HTMLElement = document.createElement("i");
löschen.className = "far fa-trash-alt"; 




document.getElementById("Liste").appendChild(div);
div.appendChild(check);
div.appendChild(inhalt);
div.appendChild(löschen);

function deleteAufgabe (div: HTMLDivElement): void {
    div.remove();


    zahl--;
    AufgabenNummer();
}

löschen.addEventListener("click", function (event: MouseEvent): void {

deleteAufgabe(div);

});

zahl++;
AufgabenNummer()

}

function AufgabenNummer(): void {
    document.getElementById("counter").innerText = zahl + "gesamt";




}





});






