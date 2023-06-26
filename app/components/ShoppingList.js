import { getLocalStorage } from "../helpers/localstorage.js";
import { CreateBtn } from "./CreateBtn.js";

export function ShoppingList() {

  let checkedList = getLocalStorage('Completed');
  let shoppingList = getLocalStorage('Shopping List');
  const $shoppingList = document.createElement('div');
  $shoppingList.classList.add('shopping-list');

  const $a = document.createElement('a');
  $a.href = '#/newitemform'
  const $addItem = CreateBtn('add-item', 'Add new item');
  $a.appendChild($addItem)
  const $clearItems = CreateBtn('clear-all', 'Clear items');



  const displayItems = (list) => {
    let display = list.map(function (item) {
      return `
      <article class="shop-item-container" data-article=${item.title}>
      <div class="shop-item">
        <div class="shop-item-description">
          <h2 class="shop-name">${item.title}</h2>
          <h3 class="shop-measure">${item.measure}</h3>
        </div>
        <button class="check-btn" data-completed="${item.title}">
          Pending
        </button>
      </div>
      <hr>
      <div class="shop-btn-container">
        <a href="#/editform">
          <button class="shop-btns" id="shop-edit-btn" data-edit="${item.id}">Edit</button>
        </a>
          <button class="shop-btns"  id="shop-delete-btn" data-delete="${item.title}">Delete</button>
      </div>
    </article>
            `
    }).join('');
    return display;
  };

//remove items
const removeItems = () => {
  const articles = document.querySelectorAll('.shop-item-container');
  articles.forEach(function(article) {
   article.classList.add('hide');
  })
};

//remove 1 item
const removeItem = (id) => {
  shoppingList = shoppingList.filter(item =>item.title !== id);
};

 //Display completed-btn
 const displayCheck = (checked) => {
  checked.forEach(function(el) {
    let {title} = el;
    const button = document.querySelector(`[data-completed="${title}"]`);
    if (button) {
      button.classList.add('check');
      button.innerHTML = '&#10003;'
    }
  })
 };
  setTimeout(() => {
    displayCheck(checkedList)
  }, 100);
  
  const displayShoppingList = displayItems(shoppingList);
  $shoppingList.innerHTML = displayShoppingList;
  
  $shoppingList.append($a);
  if(shoppingList.length > 0) {
     $shoppingList.append($clearItems);
  }
 

  document.addEventListener('click', (e) => {

    if (e.target.matches('.clear-all')) {
      localStorage.removeItem('Shopping List');
      removeItems();
      $clearItems.classList.add('hide');
    } else if(e.target.matches('#shop-edit-btn')) {
      localStorage.setItem('EditId', e.target.dataset.edit);
    } else if (e.target.matches('#shop-delete-btn')) {
      e.target.parentNode.parentNode.classList.add('hide');
      removeItem(e.target.dataset.delete);
      localStorage.setItem('Shopping List', JSON.stringify(shoppingList)); 
    } else if(e.target.matches('.check-btn')) {
      let checked = {
        title: e.target.dataset.completed
      };
      let filterCompleted = checkedList.findIndex(function(e) {
        return e.title === checked.title;
      })

      if (filterCompleted > -1) {
         checkedList = checkedList.filter(item => item.title !== checked.title)
         e.target.classList.remove('check');
         e.target.textContent = 'Pending';
      } else {
        checkedList.push(checked);
        e.target.classList.add('check');
        e.target.innerHTML = '&#10003;';
      }
      localStorage.setItem('Completed', JSON.stringify(checkedList))
    } 
  
  });
 //console.log(shoppingList)
 //console.log(checkedList)
  return $shoppingList;
};