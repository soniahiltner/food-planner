import { getLocalStorage } from "../helpers/localstorage.js"

export function EditForm(editId) {

  console.log(editId);
  let shoppingList = getLocalStorage('Shopping List');
  console.log(shoppingList)
  const editItem = shoppingList.filter(item => item.id === editId);
  let [item] = editItem;
  console.log(item.title);

  setTimeout(() => {
     const $inputName = document.getElementById('item-name');
  $inputName.value = item.title;
  }, 100);
 

  setTimeout(() => {
    const $inputMeasure = document.getElementById('item-measure');
    $inputMeasure.focus();
    let val = $inputMeasure.value;
    $inputMeasure.value = '';
    $inputMeasure.value = val;
  }, 100);
  
 //Update
 document.addEventListener('click', (e) => {
  
  if (e.target.matches('#update-btn')) {
    const $inputMeasure = document.getElementById('item-measure');
  item.measure = $inputMeasure.value;
 

localStorage.setItem('Shopping List', JSON.stringify(shoppingList));
  }
 });

  return `
  <form class="edit-form" data-id=${item.id} action="#/shopping" >
    <legend>Update item</legend>
    <label for="item-name">Item name</label>
    <input id="item-name" type="text" name="name" readonly></input>
    <label for="item-measure">Item measure</label>
    <input id="item-measure" class="active-measure" type="text" name="measure" value=${item.measure}></input>
    <button type="submit" id="update-btn">Update</button>
    </form>
  `

};