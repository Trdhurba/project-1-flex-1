const BASE_URL ="http://localhost:3000/items";
// select and save the items container element
const itemsContainer =document.querySelector("#items-container")

//select and save the item form element
const itemsForm =document.querySelector("#items-form")

//test the code.what is the return value and why?
//console.log(itemsContainer)
//console.log(itemsForm)

//add an event listener to form calling the event handler,createItem
itemsForm.addEventListener('submit',createItem)

function createItem() {
  event.preventDefault()
  console.log("submit form!!!")
  //this event handler should create an new items object and persist data   
 debugger;
 const name = document.querySelector('#items-input').value
 const quantity = document.querySelector('#quantity-input').value
  //Create an items object
   const newObj = {
     name: name,
     quantity: quantity,
     completed: false
  }
  
  
  //persist this data
  
  fetch (BASE_URL, {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(newObj)
  })
  .then(resp =>resp.json())
  .then(data =>console.log(data))
}
  function renderItem(item) {

  }
  function updatecompleted(item) {
  
  }
  function getItem() {
  
  }

































