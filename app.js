let ul = document.querySelector("ul");
let btn = document.querySelector("#add");
let inp = document.querySelector("#taskInput");
let assignInp = document.querySelector("#assignInput");
let dateInp = document.querySelector("#dateInput");
let delAll = document.querySelector("#delAll");

btn.addEventListener("click", function () {
    if (inp.value.trim() !== "") {
        let li = document.createElement("li");
        let del = document.createElement("button");
        let up = document.createElement("button");
        let down = document.createElement("button");
        let edit = document.createElement("button");
        let taskDetails = document.createElement("span");

        del.innerText = "Delete";
        del.classList.add("del");

        up.innerHTML = '<i class="fa-solid fa-arrow-up-long"></i>Up';
        up.classList.add("up");

        down.innerHTML = '<i class="fa-solid fa-arrow-down-long"></i>Down';
        down.classList.add("down");

        // Edit button
        edit.innerText = "Edit";
        edit.classList.add("edit");

        // Task details (Assignment and Due Date)
        taskDetails.innerText = ` (Assigned: ${assignInp.value || "No one"}, Due: ${dateInp.value || "No date"})`;

        li.innerText = inp.value;
        ul.append(li);
        li.append(taskDetails);
        li.append(del);
        li.append(up);
        li.append(down);
        li.append(edit);

        // Clear inputs after adding
        inp.value = "";
        assignInp.value = "";
        dateInp.value = "";
    } else {
        alert("Please enter a task.");
    }
});

// Event Delegation for Edit, Delete, Up, Down buttons
ul.addEventListener("click", function (event) {
    const li = event.target.closest("li");
    if (event.target.classList.contains("del")) {
        li.remove();
    } else if (event.target.classList.contains("up")) {
        const prev = li.previousElementSibling;
        if (prev) {
            ul.insertBefore(li, prev);
        }
    } else if (event.target.classList.contains("down")) {
        const next = li.nextElementSibling;
        if (next) {
            ul.insertBefore(next, li);
        }
    } else if (event.target.classList.contains("edit")) {
        const taskContent = li.firstChild.textContent;
        const newTask = prompt("Edit your task:", taskContent);

        if (newTask) {
            li.firstChild.textContent = newTask;
        }
    }
});

// DELETE ALL TASKS
delAll.addEventListener("click", function () {
    ul.innerHTML = ''; // Clear all tasks 
});





