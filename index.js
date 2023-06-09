
// Drag and Drop functions
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.innerText);
    event.target.classList.add("dragged");
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var item = document.createElement("div");
    item.innerText = data;
    item.classList.add("item");
    item.draggable = true;
    item.ondragstart = drag;
    event.target.appendChild(item);
    event.target.classList.remove("dragged");
    document.getElementById("successMessage").style.display = "block";
}

// Reset function
function reset() {
    var container1 = document.getElementById("container1");
    var container2 = document.getElementById("container2");
    container2.innerHTML = "";
    document.getElementById("successMessage").style.display = "none";
    var items = container1.getElementsByClassName("item");
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove("dragged");
    }
}
