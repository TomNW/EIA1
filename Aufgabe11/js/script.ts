

interface toDo {

    todosText: string[];
    todosChecked: boolean[];

}


let ToDo: toDo = {
    todosText:     "Brot kaufen",
    todosChecked:   true,
}

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;

window.addEventListener("load", function(): void {

 
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");

  
    addButtonDOMElement.addEventListener("click", addTodo);

   
    drawListToDOM();
});

function drawListToDOM(): void {
    
    todosDOMElement.innerHTML = "";

    
    for (let index: number = 0; index < ToDo.todosText.length; index++) {


        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML =  "<span class='check " + ToDo.todosChecked[index] + "'><i class='fas fa-check'></i></span>"
                            + ToDo.todosText[index] +
                            "<span class='trash fas fa-trash-alt'></span>";

       
        todo.querySelector(".check").addEventListener("click", function(): void {
            
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
            
            deleteTodo(index);
        });

        
        todosDOMElement.insertBefore(todo, todosDOMElement.firstChild);
    }

    updateCounter();
}

function updateCounter(): void {
    counterDOMElement.innerHTML = ToDo.todosText.length + " in total";
}


function addTodo(): void {
    
    if (inputDOMElement.value != "") {
       
        ToDo.todosText.push(inputDOMElement.value);
        ToDo.todosChecked.push(false);
        
      
        inputDOMElement.value = "";

       
        drawListToDOM();
    }
}


function toggleCheckState(index: number): void {

    ToDo.todosChecked[index] = !ToDo.todosChecked[index];

  
    drawListToDOM();
}


function deleteTodo(index: number): void {
  
    ToDo.todosText.splice(index, 1);
    ToDo.todosChecked.splice(index, 1);
    
   
    drawListToDOM();
}