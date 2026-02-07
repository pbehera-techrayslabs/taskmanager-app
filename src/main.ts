interface Task {
    title: string;
    date: string;
    status: string;
}

let tasks: Task[] = [];



    const button = document.getElementById("add-btn") as HTMLButtonElement;
      button.addEventListener("click",addtask);
   
    const template = document.getElementById("task-template") as HTMLTemplateElement;
       const tasklist = document.getElementById("tasklist") as HTMLDivElement;
     


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
    const template= document.getElementById("task-template") as HTMLTemplateElement
  
    tasklist.innerHTML ="";

    tasks.forEach((task,index) => {
    
        const clone = template.content.cloneNode(true) as DocumentFragment;
         const title=clone.querySelector(".task-name") as HTMLElement;
         title.textContent= task.title;

         const date=clone.querySelector(".task-date") as HTMLElement;
         date.textContent=task.date;

         const status= clone.querySelector(".task-status") as HTMLSelectElement;

         status.value=task.status;
         status.addEventListener("change", ()=>{
            task.status = status.value;
         });
        tasklist.appendChild(clone);
})}
