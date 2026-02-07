interface Task {
    title: string;
    date: string;
    status: string;
}

let tasks: Task[] = [];



    const button = document.getElementById("add-btn") as HTMLButtonElement;
   
    const template = document.getElementById("task-template") as HTMLTemplateElement;
       const tasklist = document.getElementById("tasklist") as HTMLDivElement;
       button addEventListener("click",addtask);


function addtask() {
     const titleinput = document.getElementById("title") as HTMLInputElement;
    const dateinput = document.getElementById("date") as HTMLInputElement;
  if(titleinput.value ==="" || dateinput.value ===""){
    alert("please fill out all fields");
    return;
  }
   
    const task: Task = {
        title: titleinput.value,
        date: dateinput.value,
        status: "pending"
    };
    tasks.push(task);
    displayTasks();
    

    titleinput.value = "";
    dateinput.value = "";
}

function displayTasks() {
  
    tasklist.innerHTML ="";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
            tasklist.innerHTML +=
            `<li> 
            ${task.title} - ${task.date} -${task.status}
            </li>`;
    });
}
