const BASE_URL ="http://localhost:3000/items";
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

fetch (BASE_URL, {
  method: 'post',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(newObj)
})
.then(resp =>resp.json())
.then(data =>console.log(data))

//review this code.identify that is mising?test your theories!

  
  .then(resp =>resp.json())
  .then(item=>renderItem(item))
}
  //.then(renderItem ) //refactored line 43


  //Review code, test it.
  function renderItem(item) {
    console.log('RENDER ITEM')
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type","checkbox");
    if (item,completed) {
      checkBox,checked = true;
    }

  //fix this code to pass the item object to the event handler
    checkBox.addEventListener("click",updatecompleted);
  }
  function updatecompleted(item) {
  
  }
  function getItem() {
  
  }

































