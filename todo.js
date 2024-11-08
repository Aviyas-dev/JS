const STATUS = "TODO" || "DONE";

let todos = [];
function addOne(newTodo){
    todos.push(newTodo);
}

function editStatus(index, status){
    let item = todos[index];
    item.status = status;
}

// Status uurchluh : Func
function editName(index, name){
    let name2 = todos[index];
    name2.name = name;
}


// Ner uurchluh : Func

function deleteOne(index){
    let array = [];
    for (let i=0; i<todos.length; i++) {
        if ( i != index){
            array.push( todos[i]);
        }
    }
                                        
    todos  = array
   

 }

 for(let i = 0; i < todos.length; i++){
    let item = todos[i];
    if(item.status === "DONE"){
        count++;
    }
    return count;
 }
 function render(){
    const output = document.getElementById("tasks");
    output.innerHTML = "";
    for(let i = 0; i < tasks.length; i++){
        output.innerHTML += '<div class="tasks">' + tasks[i].name + "</div";
    }
 }
    function addTask(){
        const name = prompt();
        tasks.push({ name: name, status: "todo"});
        render();
    }
    render();

addOne ({ name: "hool hiih", status: "TODO"});
addOne ({ name: "JS sudlah", status: "TODO"});
addOne({name: "Hool hiih", status: "TODO"});
editStatus(1, "DONE");
editName(1, "Ayga ugaah")
deleteOne(0)

console.log(todos)

console.log(countDone());
const completedTask = countDone();
