function addtask(){
    const taskInput=document.getElementById("taskinput");
    const tasktext=taskInput.value.trim();

    if(tasktext===""){
        return;
    }
    const tasklist=document.getElementById("tasklist");
    const taskitem=document.createElement("li");

    const tasklabel=document.createElement("label")
    tasklabel.innerText=tasktext;

    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.addEventListener("change",function(){
        if(checkbox.checked){
            tasklabel.style.textDecoration="line-through";
        }else{
            tasklabel.style.textDecoration="none";
        }
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.style.marginLeft = "10px"; // Optional: Adds spacing
    deleteButton.addEventListener("click", function () {
        tasklist.removeChild(taskitem); // Removes the task item from the list
    });

    taskitem.appendChild(checkbox);
    taskitem.appendChild(tasklabel);
    taskitem.appendChild(deleteButton); // Add the delete button to the task item
    tasklist.appendChild(taskitem);

    taskInput.value="";
}