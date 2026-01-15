document.addEventListener("DOMContentLoaded", () => {

// VARIABLES
const list = document.querySelector("#list");
const input = document.querySelector("#nameInput");
const formulario = document.querySelector("#formulario");
const fragment = document.createDocumentFragment();

let contacts = [];

// EVENTOS
formulario.addEventListener("submit", (event) => {

  event.preventDefault();

  let valor = input.value;

  add(valor);

  valor = "";

});

list.addEventListener("click", (event) => {

  const index = event.target.dataset.index; 
  
  remove(index);

})

// FUNCIONES
const add = (valor) => {

  contacts.push(valor);

  render();

}

const remove = (index) => {

  contacts.splice(index, 1);

  render();

}

const render = () => {

  list.innerHTML="";

  contacts.forEach((contacto, index) => {

    const div = document.createElement("DIV");
    const li = document.createElement("LI");
    const button = document.createElement("BUTTON");
    
    li.textContent = contacto;
    
    button.setAttribute("id", "btnEliminar");
    button.textContent = "X"
    button.dataset.index = index;

    div.appendChild(li);
    div.appendChild(button);

    fragment.appendChild(div);
  
  });

  list.append(fragment);

}

})
