function createCloseButton(li) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    span.onclick = () => li.remove();
}

document.querySelectorAll('li').forEach(createCloseButton);

document.querySelector('ul').addEventListener('click', (e) => { 
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
});

function add() {
    let input_value = document.form_main.task.value.trim();
    if (input_value === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    let li = document.createElement('LI');
    let input_text = document.createTextNode(input_value);
    li.appendChild(input_text);

    document.querySelector('ul').appendChild(li);
    document.form_main.task.value = "";
    
    createCloseButton(li);
}