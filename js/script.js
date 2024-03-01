function FetchTodo() {   
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => displayTodos(data))
    .catch((error) => console.log(error)); 
}

function displayTodos(todos) {
    const todoList = document.getElementById("allList");
    todoList.innerHTML = "";

    todos.forEach(todo => {
        const todoCard = document.createElement("div");
        todoCard.classList.add("col-3"); 

        const cardContent = document.createElement("div");
        cardContent.classList.add("card", "text-white", "bg--purple", "mb-3");
        
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        
        const title = document.createElement("p");
        title.classList.add("card-text");
        title.innerHTML = `<strong>Title:</strong> ${todo.title}`;
        
        const completion = document.createElement("span");
        completion.classList.add("card-text");
        completion.innerHTML = `<strong>Completion:</strong> ${todo.completed ? '<i class="fas fa-check-circle"></i>' : '<i class="far fa-circle"></i>'}`;
        
        cardBody.appendChild(title);
        cardBody.appendChild(completion);
        cardContent.appendChild(cardBody);
        todoCard.appendChild(cardContent);
        todoList.appendChild(todoCard);
    });
}

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

