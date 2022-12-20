document.addEventListener('DOMContentLoaded', (event) => {
  console.log('RENDER ITEM');
});

const BASE_URL = "http://localhost:3000/items";
// select and save the items container element
const itemsContainer =document.querySelector("#items-container")

//select and save the item form element
const itemsForm =document.querySelector("#items-form")

//test the code.what is the return value and why?
//console.log(itemsContainer)
//console.log(itemsform)

//add an event listener to form calling the event handler,createItem
itemsForm.addEventListener('submit',createItem)

function createItem() {
  event.preventDefault()
  console.log("submit form!!!")
//this event handler should create anew items object and persist data

 const name = document.querySelector('#items-input').value
 const quantity = document.querySelector('#quantity-input').value

//Create an items object

const newObj = { //plain old javascript object
 name: name,
 quantity: quantity, 
 completed: false 
}

console.log ("newObj",newObj)
//persist this data

fetch(BASE_URL, {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(newObj)
})
.then(resp =>resp.json())
.then(item => renderItem(item))
//.then(renderItem ) //refactored line 42.
console.log(itemsForm)
itemsForm.reset()

}
//review this code.identify that is mising?test your theories!
  function renderItem(item) {
    //creating a checkbox for each item
    console.log(item)
    console.log('RENDER ITEM' )
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type","checkbox");
     //checking status of items completed property.and if true,keeping the checkbox marked
    if (item.completed) {
      checkBox.checked = true;
    }
  
     //fix this code to pass the item object to the event handler
    checkBox.addEventListener("click", () => updateCompleted(item));
    
     //remember that element id's should be unique
    const listItem = document.createElement("li");
    listItem.id = `items`;
    listItem.textContent = `Name: ${item.name} - quantity: ${item.quantity} - bought: `;

    const deleteBttn = document.createElement("button");
    deleteBttn.textContent = "x";

    deleteBttn.addEventListener('click', () => deleteItem(item.id))
  
    listItem.append(checkBox,deleteBttn);
    itemsContainer.appendChild(listItem)
    //test this method by calling in getItems method to render items DOM.
}
  function updatecompleted(item) {
  console.log('UPDATE COMPLETED')
  //this togic will use the the! operator to toggle the status of the property, completed.if it returns false, it wll update to true all vice versa.
  let completed = (item.completed = !item.completed);
  console.log(completed)
  //if item.completed === true
  //then assign item.completed = false
  //if item.completed === false
  //then assign item.completed = true

  //make a fetch request to update data on server upon checkbox click

  fetch(BASE_URL + `/${item.id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ completed: completed})
    })
}  
  //responsible for getting all the resources
function getItem() {
  //need to make a fetch request for all items from server
  fetch(BASE_URL)
  //.then(resp => console.log(resp))
  .then(resp => resp.json())
  .then(items => items.forEach(renderItem))
}
getItem()

function deleteItem(item) {
  
  fetch(`http://localhost:3000/items/${item.id}`, {
    method: "DELETE",
    headers: {
      "content-Type":"application/json"
    },
  })
   .then((res) => res.json())
   .then((item) => console.log(item));
}



























