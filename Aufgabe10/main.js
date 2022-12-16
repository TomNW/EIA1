window.addEventListener("load", function () {
    let enter = document.getElementById("inputText");
    let zahl = 0;
    enter.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            neueAufgabe();
            event.preventDefault();
        }
    });
    function neueAufgabe() {
        let div = document.createElement("div");
        div.className = "Aufgabe";
        console.log("test");
        let check = document.createElement("input");
        check.type = "checkbox";
        check.className = "checkBox";
        let inhalt = document.createElement("label");
        inhalt.innerHTML = enter.value;
        inhalt.className = "Aufgabe";
        let löschen = document.createElement("i");
        löschen.className = "far fa-trash-alt";
        document.getElementById("Liste").appendChild(div);
        div.appendChild(check);
        div.appendChild(inhalt);
        div.appendChild(löschen);
        function deleteAufgabe(div) {
            div.remove();
            zahl--;
            AufgabenNummer();
        }
        löschen.addEventListener("click", function (event) {
            deleteAufgabe(div);
        });
        zahl++;
        AufgabenNummer();
    }
    function AufgabenNummer() {
        document.getElementById("counter").innerText = zahl + "gesamt";
    }
});
//# sourceMappingURL=main.js.map