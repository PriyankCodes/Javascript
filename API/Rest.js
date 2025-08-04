// const fetchUsers = (event) => {
//     fetch("https://dummyjson.com/users")
//         .then(response => response.json())
//         .then(data => { console.log(data) })
//         .catch(error => console.error("Error fetching users:", error));

// }

let users;
const fetchUsers = async (event) => {

    try {
        const response = await fetch("https://dummyjson.com/users")
        if (!response.ok) {
            console.log("Error");
        }
        data = await response.json()

        users = data.users
        console.log(users);

    } catch (error) {
        console.error("Error in fetchUsers function:", error);
    }
}

const userBtn = document.querySelector(".userBtn");
userBtn.addEventListener('click', (event) => {
    fetchUsers(event);
})


let todos;

const fetchTodos = async (event) => {
    try {
        const response = await fetch("https://dummyjson.com/todos");
        if (!response.ok) {
            console.log("Error");
            return;
        }

        const data = await response.json();
        todos = data.todos;
        console.log(todos[0]);
        renderTodoTable(todos);

    } catch (error) {
        console.error("Error in fetchTodos function:", error);
    }
};

const todoBtn = document.querySelector(".todoBtn");
todoBtn.addEventListener('click', fetchTodos);


function renderTodoTable(todoList) {
    const container = document.querySelector(".todoData");
    container.innerHTML = "";

    const table = document.createElement("table");

    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Todo</th>
            <th>Completed</th>
            <th>User ID</th>
        </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    todoList.forEach(todo => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${todo.id}</td>
            <td>${todo.todo}</td>
            <td>${todo.completed ? "Yes" : "No"}</td>
            <td>${todo.userId}</td>
        `;
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    container.appendChild(table);
}
