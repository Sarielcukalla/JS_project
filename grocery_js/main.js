//declare variables
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
const container = document.querySelector('.grocery-container');


let editElement;
let editFlag = false;
let editID = "";

//addeventlistener

form.addEventListener("submit", addItem);
clearBtn.addEventListener('click', clearItems);
window.addEventListener("DOMContentLoaded", setupItems);

//create additem function

function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString()
    if (value && !editFlag) {
        createListItems(id, value);
        displayAlert('item added to the list', 'success');
        container.classList.add('show-container')

        addToLocalStorage(id, value)
        setBackToDefault();
    }
    else if (value && editFlag) {
        editElement.innerHTML = value;
        displayAlert('value changed', 'success')
        setBackToDefault();
    }
    else {
        displayAlert("please enter value", "danger");
    }
}

//create function alert

function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(function () {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);


    }, 1000)
}
//create function clearitems
function clearItems() {
    const items = document.querySelectorAll('.grocery-item')
    if (items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item)

        });
    }
    container.classList.remove("show-container");
    displayAlert('empty list', 'danger');
    setBackToDefault()
    localStorage.removeItem('list')
}
//create function deleteitem
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element)
    if (list.children.length === 0) {
        container.classList.remove('show-container')
    }
    displayAlert('item removed', 'danger')
    setBackToDefault()
    removeFromLocalStorage(id)
}
//create function edititem

function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";
}
//create functionsetbacktodeafult

function setBackToDefault() {
    grocery.value = '';
    editFlag = false;
    editID = ''
    submitBtn.textContent = 'submit'
}
// function addtolocalstorage

function addToLocalStorage(id, value) {
    const grocery = { id: id, value: value }
    let items = getLocalStorage()

    items.push(grocery)
    localStorage.setItem("list", JSON.stringify(items))
}
//create function removefromlocalstorage

function removeFromLocalStorage(id) {
    let items = getLocalStorage()
    items = items.filter(function (item) {
        if (item.id !== id) {
            return item
        }

    })
    localStorage.setItem("list", JSON.stringify(items))

}
//create function editlocalstorage

function editLocalStorage(id, value) {
    let items = getLocalStorage()
    items = items.map(function (item) {
        if (item.id === id) {
            item.value = value;
        }
        return item

    });
    localStorage.setItem('list', JSON.stringify(items))
}
//create function gettolocalstorage
function getLocalStorage() {
    return localStorage.getItem("list") ?
        JSON.parse(localStorage.getItem('list')) : [];

}
//create function setupitems

function setupItems() {
    let items = getLocalStorage();
    if (items.length > 0) {
        items.forEach(function (item) {
            createListItems(item.id, item.value)
        });
        container.classList.add('show-container')
    };
};

//create function createlistitems

function createListItems(id, value) {
    const element = document.createElement('article');
    element.classList.add('grocery-item');
    // add id
    const attr = document.createAttribute('data-id')
    attr.value = id
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
       <button type="button" class="edit-btn">
       <i class="bi bi-pencil"></i>
       </button>
       <button type="button" class="delete-btn">
       <i class="bi bi-trash"></i>
       </button>
   </div>`

    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');

    deleteBtn.addEventListener('click', deleteItem)
    editBtn.addEventListener('click', editItem)



    list.appendChild(element);
}