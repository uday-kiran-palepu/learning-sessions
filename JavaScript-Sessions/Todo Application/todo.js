let todosContainer = document.getElementById('todosListContainer');
let addTodoButtonEl = document.getElementById('addTodoButton');
let saveTodoButtonEl = document.getElementById('saveTodoButton');


function getTodoListFromLocalStorage(){
    let stringifiedTodoList = localStorage.getItem('todosList');
    let parsedTodoList = JSON.parse(stringifiedTodoList);

    if (parsedTodoList === null) {
        return [];
    }
    else{
        return parsedTodoList;
    }

}


// let todosList = [
//     {
//         text : "Learn HTML",
//         uniqueNo : 1,
//         isChecked : false

//     },
//     {
//         text : "Learn CSS",
//         uniqueNo : 2,
//         isChecked : false
//     },
//     {
//         text : "Learn JavaScript",
//         uniqueNo : 3,
//         isChecked : false
//     }
// ];

let todosList = getTodoListFromLocalStorage();

let todosCount = todosList.length


saveTodoButtonEl.onclick = function(){
    localStorage.setItem('todosList', JSON.stringify(todosList));
}

function onTodoStatusChange(checkboxId,labelId,todoId){
    let checkboxEl = document.getElementById(checkboxId);
    let labelEl = document.getElementById(labelId);

    labelEl.classList.toggle('checked');

    let todoObjectIndex = todosList.findIndex(function(eachTodo){

        let eachTodoId = 'todo' + eachTodo.uniqueNo;
        if (eachTodoId === todoId){
            return true;
        }
        else{
            return false;
        }
    });


    let todoObject = todosList[todoObjectIndex];
    if (todoObject.isChecked === true){
        todoObject.isChecked = false;
    }
    else{
        todoObject.isChecked = true;
    }
}

function onDeleteTodo(todoId){
    let todoElement = document.getElementById(todoId);
    todosContainer.removeChild(todoElement);

    let deleteElementIndex = todosList.findIndex(function(eachTodo){
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if (eachTodoId === todoId){
            return true;
        }
        else{
            return false;
        }
    }

    );

    todosList.splice(deleteElementIndex,1);

}


function createAndAppendTodo(todo){
    let todoId = "todo" + todo.uniqueNo ;
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;

    let todoElement = document.createElement('li');
    todoElement.classList.add('todo-item-container','d-flex', 'flex-row');
    todoElement.id = todoId;
    todosContainer.appendChild(todoElement);

    let inputElement = document.createElement('input');
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.checked = todo.isChecked;
    inputElement.classList.add("todos-checkbox");
    // inputElement.checked = true ;
    inputElement.onclick = function(){
        onTodoStatusChange(checkboxId,labelId, todoId);
    }
    todoElement.appendChild(inputElement);
    

    let labelContainerEl = document.createElement('div');
    labelContainerEl.classList.add('d-flex','flex-row','label-container');
    todoElement.appendChild(labelContainerEl);

    let labelElement = document.createElement('label');
    labelElement.setAttribute('for', checkboxId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelElement.id = labelId;
    if (todo.isChecked === true){
        labelElement.classList.add('checked');
    };

    labelContainerEl.appendChild(labelElement);

    let deleteIconContainerEl = document.createElement('div');
    deleteIconContainerEl.classList.add("delete-icon-container");
    labelContainerEl.appendChild(deleteIconContainerEl);

    let deleteIconEl = document.createElement('i');
    deleteIconEl.classList.add('fa-regular','fa-trash-can',"delete-icon");
    deleteIconEl.onclick = function(){
        onDeleteTodo(todoId);
    }
    deleteIconContainerEl.appendChild(deleteIconEl);

}



for (let todo of todosList){
    createAndAppendTodo(todo);
}


function onAddTodo(){
    let userInputElement = document.getElementById('todosInput');
    let userInputValue = userInputElement.value;

    if (userInputValue === ""){
        alert("Please Enter Valid Text");
        return;
    }

    todosCount = todosCount + 1;

    let newTodo = {
        text : userInputValue,
        uniqueNo : todosCount,
        isChecked : false
    };

    todosList.push(newTodo);

    createAndAppendTodo(newTodo);
    userInputElement.value = "";

}


addTodoButtonEl.onclick = function(){
    onAddTodo();
}





