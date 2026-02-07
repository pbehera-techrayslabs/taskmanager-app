let tasks = [];
const button = document.getElementById("add-btn");
button.addEventListener("click", addtask);
const template = document.getElementById("task-template");
const tasklist = document.getElementById("tasklist");
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
    const template = document.getElementById("task-template");
    tasklist.innerHTML = "";
    tasks.forEach((task, index) => {
        const clone = template.content.cloneNode(true);
        const title = clone.querySelector(".task-name");
        title.textContent = task.title;
        const date = clone.querySelector(".task-date");
        date.textContent = task.date;
        const status = clone.querySelector(".task-status");
        status.value = task.status;
        status.addEventListener("change", () => {
            task.status = status.value;
        });
        tasklist.appendChild(clone);
    });
}
export {};
//# sourceMappingURL=main.js.map