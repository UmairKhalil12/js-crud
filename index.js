function addItems() {
    let item = document.getElementById('itemInput').value;
    let divItem = document.getElementById('ul');
    let newLi = document.createElement('li');
    newLi.innerHTML = item;
    divItem.appendChild(newLi);
    let deleteButton = document.createElement('button');
    let editButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete'
    editButton.innerHTML = 'Edit'
    newLi.appendChild(deleteButton);
    newLi.appendChild(editButton);
    deleteButton.addEventListener('click', removeItems);
    editButton.addEventListener('click', editItems);
    document.getElementById('itemInput').value = '';
}

function removeItems(event) {
    let listItem = event.target.parentNode;
    listItem.parentNode.removeChild(listItem);
}

function editItems(event) {
    let listItem = event.target.parentNode;

    let buttons = listItem.querySelectorAll('button');
    let deleteButton = buttons[0];
    let editButton = buttons[1];
    deleteButton.style.display = 'none';
    editButton.style.display = 'none';

    let editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = listItem.firstChild.nodeValue;
    listItem.firstChild.replaceWith(editInput);

    let saveButton = document.createElement('button');
    saveButton.innerHTML = 'Save';
    listItem.appendChild(saveButton);

    saveButton.addEventListener('click', function () {
        listItem.firstChild.nodeValue = editInput.value;
        editInput.replaceWith(listItem.firstChild);
        saveButton.remove();
        deleteButton.style.display = 'block';
        editButton.style.display = 'block';
    });

}