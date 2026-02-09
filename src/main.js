let tasks = [];
const button = document.getElementById("add-btn");
button.addEventListener("click", addtask);
const template = document.getElementById("task-template");
const tasklist = document.getElementById("tasklist");
const savetasks = localStorage.getItem("tasks");
if (savetasks) {
    tasks = JSON.parse(savetasks);
    displayTasks();
}
function settask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function addtask() {
    const titleinput = document.getElementById("title");
    const dateinput = document.getElementById("date");
    if (titleinput.value === "" || dateinput.value === "") {
        alert("please fill out all fields");
        return;
    }
    const input = {
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
function displayTasks() {
    const template = document.getElementById("task-template");
    tasklist.innerHTML = "";
    tasks.forEach((input) => {
        const clone = template.content.cloneNode(true);
        const title = clone.querySelector(".task-name");
        title.textContent = input.title;
        const date = clone.querySelector(".task-date");
        date.textContent = input.date;
        const status = clone.querySelector(".task-status");
        status.value = input.status;
        status.addEventListener("change", () => {
            input.status = status.value;
            settask();
        });
        const deletebtn = clone.querySelector(".delete-btn");
        deletebtn.addEventListener("click", () => {
            tasks = tasks.filter(t => t !== input);
            displayTasks();
            settask();
        });
        const editbtn = clone.querySelector(".edit-btn");
        editbtn.addEventListener("click", () => {
            const titleinput = document.getElementById("title");
            const dateinput = document.getElementById("date");
            titleinput.value = input.title;
            dateinput.value = input.date;
            tasks = tasks.filter(t => t !== input);
            settask();
            displayTasks();
        });
        tasklist.appendChild(clone);
    });
}
export {};
//# sourceMappingURL=main.js.map