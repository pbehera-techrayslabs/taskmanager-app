let tasks = [];
const button = document.getElementById("add-btn");
const template = document.getElementById("task-template");
const tasklist = document.getElementById("tasklist");
button;
addEventListener("click", addtask);
function addtask() {
    const titleinput = document.getElementById("title");
    const dateinput = document.getElementById("date");
    if (titleinput.value === "" || dateinput.value === "") {
        alert("please fill out all fields");
        return;
    }
    const task = {
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
    tasklist.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        tasklist.innerHTML +=
            `<li> 
            ${task.title} - ${task.date} -${task.status}
            </li>`;
    });
}
export {};
//# sourceMappingURL=main.js.map