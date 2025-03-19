document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".todo__input");
    const list = document.querySelector(".todo__list");

    window.addTodo = function (event) {
        event.preventDefault();
        if (input.value.trim() === "") return;

        const li = document.createElement("li");
        li.classList.add("todo__item");

        const p = document.createElement("p");
        p.classList.add("todo__text");
        p.innerText = input.value;

        const completeBtn = document.createElement("button");
        completeBtn.classList.add("todo__complete");
        completeBtn.innerText = "✔";
        completeBtn.onclick = function () {
            li.classList.toggle("completed");
        };

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("todo__delete");
        deleteBtn.innerText = "❌";
        deleteBtn.onclick = function () {
            li.style.animation = "fadeOut 0.3s forwards";
            setTimeout(() => li.remove(), 300);
        };

        li.appendChild(p);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        list.appendChild(li);

        input.value = "";
    };
});
