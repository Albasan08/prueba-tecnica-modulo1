
const list = document.getElementById('list');
const input = document.getElementById('nameInput');
const addBtn = document.getElementById('addBtn');

let contacts = [];

function render() {
  list.innerHTML = '';
  for (let i = 0; i < contacts.length; i++) {
    list.innerHTML += `<li>${contacts[i]} <button onclick="remove(${i})">x</button></li>`;
  }
}

function add() {
  contacts.push(input.value);
  input.value = '';
  render();
}

function remove(i) {
  contacts.splice(i, 1);
  render();
}

addBtn.addEventListener('click', add);
