
interface Task {
  title: string;
  date: string;
  status: string;
}

let tasks: Task[] = [];



const button = document.getElementById("add-btn") as HTMLButtonElement;
button.addEventListener("click", addtask);

const template = document.getElementById("task-template") as HTMLTemplateElement;
const tasklist = document.getElementById("tasklist") as HTMLDivElement;
const savetasks = localStorage.getItem("tasks");
if (savetasks) {
  tasks = JSON.parse(savetasks);
  displayTasks();
}
function settask() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


// task add
function addtask() {
  const titleinput = document.getElementById("title") as HTMLInputElement;
  const dateinput = document.getElementById("date") as HTMLInputElement;
  if (titleinput.value === "" || dateinput.value === "") {
    alert("please fill out all fields");
    return;
  }
  // input set
  const input: Task = {
    title: titleinput.value,
    date: dateinput.value,
    status: "pending"
  };
  tasks.push(input);
  displayTasks();
  settask();

  titleinput.value = "";
  dateinput.value = "";
}
//display task
function displayTasks() {
  const template = document.getElementById("task-template") as HTMLTemplateElement

  tasklist.innerHTML = "";

  tasks.forEach((input) => {

    const clone = template.content.cloneNode(true) as DocumentFragment;
    
    
    const title = clone.querySelector(".task-name") as HTMLElement;
    title.textContent = input.title;

    const date = clone.querySelector(".task-date") as HTMLElement;
    date.textContent = input.date;
    //status button
    const status = clone.querySelector(".status-select") as HTMLSelectElement;
    status.value = input.status;
    
    status.addEventListener("change", () => {
      input.status = status.value;
      
        settask();

    });
      //delete button
      const deletebtn = clone.querySelector(".delete-btn") as HTMLButtonElement;
    deletebtn.addEventListener("click", () => {
        tasks = tasks.filter(t => t !== input);
        settask();
        displayTasks();
        
  });
  //edit button
  const editbtn= clone.querySelector(".edit-btn") as HTMLButtonElement;

  editbtn.addEventListener("click", () => {

    const titleinput = document.getElementById("title") as HTMLInputElement;
    const dateinput = document.getElementById("date") as HTMLInputElement;

    titleinput.value=input.title;
    dateinput.value= input.date;

     tasks = tasks.filter(t => t !== input);
    settask();
    displayTasks();
  })
  tasklist.appendChild(clone);
  
})
}

