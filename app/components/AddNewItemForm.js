import { getLocalStorage } from "../helpers/localstorage.js";

export function AddNewItemForm() {

  const shoppingList = getLocalStorage('Shopping List');
  const newItem = {
    id: new Date().getTime().toString(),
    title: '',
    measure: '',
    completed: false
  };

  document.addEventListener('change', (e) => {
    if (e.target.matches('#item-name')) {
      newItem.title = e.target.value;
    }else if(e.target.matches('#item-measure')) {
      newItem.measure = e.target.value;
    }
  });
  
  //Add item
  document.addEventListener('click', (e) => {
    if (e.target.matches('#addItem-btn')) {
      let filterShoppingList = shoppingList.findIndex(function (e) {
        return e.title === newItem.title;
      });
      if (filterShoppingList > -1) {
        shoppingList[filterShoppingList] = {
          ...shoppingList[filterShoppingList],
          measure: `${shoppingList[filterShoppingList].measure} + ${newItem.measure}`
        }
       
      } else {
          shoppingList.push(newItem);
      }

       localStorage.setItem('Shopping List', JSON.stringify(shoppingList));
    }
  });

  return `
  <form class="edit-form" action="#/shopping">
    <legend>New item</legend>
    <label for="item-name">Item name</label>
    <input id="item-name" type="text" name="name" required></input>
    <label for="item-measure">Item measure</label>
    <input id="item-measure" type="text" name="measure" required></input>
    <button type="submit" id="addItem-btn">Add</button>
      
    </form>
  `
};