
// etape 2,9
const list = JSON.parse(localStorage.getItem("tasks")) || [];
const searchInput = document.getElementById("searchInput");
searchItems();

console.log("bienvenue dans le script.js");



//etape 7

function displayList(lista = list) {
    const taskList = document.getElementById('itemList');
    const completedCount = document.getElementById('completedCount');
    const ongoingCount = document.getElementById('ongoingCount');
    const doneItems = lista.filter(item => item.done).length;
    const ongoingItems = lista.length - doneItems;
    completedCount.textContent = doneItems;
    ongoingCount.textContent = ongoingItems;
    taskList.innerHTML = '';
    lista.forEach((item,index)=>{
        const nouvelElement = document.createElement('li');
        nouvelElement.textContent = item.text + " ";
        var btn = document.createElement("button");
        btn.textContent = "Supprimer";
        btn.onclick = function() {
            removeItem(item);
        };
        Object.assign(btn.style, {
        backgroundColor: "blue",
        color: "white",
        marginLeft: "10px",
        border: "none",
        padding: "5px 10px",
        borderRadius: "5px",
        cursor: "pointer",
        float : "right"
        });
        var btn2 = document.createElement("button");
        btn2.textContent = "terminate";
        btn2.onclick = function() {
            terminateItem(item);
        };
        Object.assign(btn2.style, {
            backgroundColor: "blue",
            color: "white",
            marginLeft: "10px",
            border: "none",
            padding: "5px 10px",
            borderRadius: "5px",
            cursor: "pointer",
            float : "right"
        });
        if (item.done) {
            nouvelElement.style.textDecoration = "line-through";
            nouvelElement.style.color = "gray";
            nouvelElement.style.borderLeft = "4px solid #ff0000ff";
        }
        nouvelElement.appendChild(btn);
        nouvelElement.appendChild(btn2);
        taskList.appendChild(nouvelElement);


    });
}

//etape 4

document.getElementById("addButton").addEventListener("click", addItem);

document.getElementById('textInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('addButton').click();
    }
});

//etape 3,5,8

function addItem() {
    var x = document.getElementById("textInput");
    if (x.value.trim() !== '') {
        list.push({text: x.value, done: false});
        x.value = '';
        searchItems();
    }
    localStorage.removeItem("tasks");
    localStorage.setItem("tasks", JSON.stringify(list));
}


//etape 6,8

function removeItem(item) {
    list.splice(list.indexOf(item), 1);
    searchItems();
    localStorage.removeItem("tasks");
    localStorage.setItem("tasks", JSON.stringify(list));
}
function terminateItem(item) {
    list[list.indexOf(item)].done = true;
    searchItems();
    localStorage.removeItem("tasks");
    localStorage.setItem("tasks", JSON.stringify(list));
}

//etape 10

function deleteAll() {
    list.length = 0;
    searchItems();
    localStorage.removeItem("tasks");
    localStorage.setItem("tasks", JSON.stringify(list));
}

document.getElementById("delete").addEventListener("click", deleteAll);

function searchItems() {
    const searchTerm = searchInput.value.toLowerCase();
    const results = list.filter(item => item.text.toLowerCase().includes(searchTerm));
    displayList(results);
}

searchInput.addEventListener("input", searchItems);



