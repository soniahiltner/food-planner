import api from '../helpers/apis.js';
import { ajax } from '../helpers/ajax.js';
import { Categories } from './Categories.js';
import { Category } from './Category.js';
import { Meal } from './Meal.js';
import { Favourites } from './Favourites.js';
import { getLocalStorage } from '../helpers/localstorage.js';
import { FoodPlan } from './FoodPlan.js';
import { ListOfIngredients } from './ListOfIngredients.js';
import { ShoppingList } from './ShoppingList.js';
import { EditForm } from './EditForm.js';
import { AddNewItemForm } from './AddNewItemForm.js';
import { Search } from './Search.js';


export async function Router() {

  const $title = document.querySelector('.title');
  const $main = document.getElementById('main');
  let { hash } = location;

  $main.innerHTML = null;

  if (!hash || hash === '#/') {
    await ajax({
      url: api.CATEGORIES_DESCRIPTION_URL,
      cbSuccess: (data) => {
        const categories = data.categories;
        let html = '';
        categories.forEach(category => html += Categories(category));

        $main.innerHTML = html;
      }
    })
  } else if (hash === '#/category') {
    await ajax({
      url: `${api.FILTER_CATEGORY}${localStorage.getItem('MealCategory')}`,
      cbSuccess: (data) => {
        const meals = data.meals;
      
        let html = '';
        meals.forEach(meal => html += Category(meal));

        $main.innerHTML = html;
        $title.innerHTML = localStorage.getItem('MealCategory')
      }
    })
  } else if (hash === '#/meal') {
    await ajax({
      url: `${api.SEARCHID_URL}${localStorage.getItem('MealId')}`,
      cbSuccess: (data) => {
        const meal = data.meals[0];
        let html = Meal(meal);

        $main.innerHTML = html;
        $title.innerHTML = '';
      }
    })
  } else if (hash === '#/favourites') {
    const favourites = getLocalStorage('Favourite');
    let list = [];
    favourites.forEach(async function (item) {
      await ajax({
        url: `${api.SEARCHID_URL}${item.id}`,
        cbSuccess: (data) => {
          const meal = data.meals[0];
          list.push(meal);
        }
      })
      let html = '';
      list.forEach(meal => html += Favourites(meal));
      $main.innerHTML = html;
      $title.innerHTML = 'My Favourites';
    })
  } else if (hash === '#/foodPlanner') {
    $main.innerHTML = `<div class="menu-list"></div>`
    const $foodPlanner = document.querySelector('.menu-list');

    const menus = getLocalStorage('Menus');
    let list = [];
    menus.forEach(async function (item) {
      await ajax({
        url: `${api.SEARCHID_URL}${item.id}`,
        cbSuccess: (data) => {
          const meal = data.meals[0];
          list.push(meal);
        }
      })
      let html = '';
      list.forEach(meal => html += FoodPlan(meal));
      $foodPlanner.innerHTML = html;
      $title.innerHTML = 'Menus';

    })
  } else if (hash === '#/listOfIngredients') {
    $main.innerHTML = `<div class="ingredientsMenu"></div>`
    const $ingredientsMenu = document.querySelector('.ingredientsMenu');
    await ajax({
      url: `${api.SEARCHID_URL}${localStorage.getItem('MenuId')}`,
      cbSuccess: (data) => {
        const meal = data.meals[0];
        console.log(meal);
        let html = '';
        html += ListOfIngredients(meal);
        $ingredientsMenu.innerHTML = html;
        $title.innerHTML = meal.strMeal;
      }
    });
  } else if(hash === '#/shopping') {
    $title.innerHTML = 'Shopping List'
    let html = ShoppingList();
    $main.append(html);
  } else if(hash === '#/editform') {
    $title.innerHTML = '';
    const editId = localStorage.getItem('EditId');
    $main.innerHTML = EditForm(editId);
  } else if (hash === '#/newitemform') {
    $title.innerHTML = '';
    $main.innerHTML = AddNewItemForm();
  } else if (hash.includes('#/search')) {
    $title.innerHTML = '';
    $main.appendChild(Search())
  } else if (hash === '#/queryname') {
    const queryName = localStorage.getItem('NameQuery');
    if(queryName.length > 0) {
       await ajax({
      url: `${api.SEARCHNAME_URL}${queryName}`,
      cbSuccess: (data) => {
        const meals = data.meals;
        
        if ( meals) {
          let html = '';
        meals.forEach(meal => html += Category(meal));
        $main.innerHTML = html;
        $title.innerHTML = `Showing ${meals.length} results for ${queryName}`;
        } else {
         $title.innerHTML = 'No results';
        }
       
      } 
    })
    } else {
      $title.innerHTML = 'No results';
    }
   
  } else if (hash === '#/queryletter') {
    const queryLetter = localStorage.getItem('LetterQuery')
    await ajax({
      url: `${api.SEARCH_URL}?f=${queryLetter}`,
      cbSuccess: (data) => {
        const meals = data.meals;
        console.log(meals);
         if ( meals) {
           let html = '';
         meals.forEach(meal => html += Category(meal));
         
         $main.innerHTML = html;
         $title.innerHTML = `Showing ${meals.length} results`;
         } else {
          $title.innerHTML = 'No results'
         }
        
      }
    })
  } else if(hash === '#/queryingredient') {
    const queryIngredient = localStorage.getItem('IngredientQuery');
    if (queryIngredient.length > 0) {
       await ajax({
      url: `${api.FILTER_INGREDIENT_URL}${queryIngredient}`,
      cbSuccess: (data) => {
        const meals = data.meals;
       
        if ( meals) {
          let html = '';
        meals.forEach(meal => html += Category(meal));
       
        $main.innerHTML = html;
        $title.innerHTML = `Showing ${meals.length} results for ${queryIngredient}`;
        } else {
         $title.innerHTML = 'No results'
        }
      }
    })
    } else {
      $title.innerHTML = 'Enter a valid name';
    }
   
  } else if (hash === '#/querycountry') {
    const queryCountry = localStorage.getItem('CountryQuery');
    await ajax({
      url: `${api.FILTER_COUNTRY}${queryCountry}`,
      cbSuccess: (data) => {
        const meals = data.meals;
      
        if ( meals) {
          let html = '';
        meals.forEach(meal => html += Category(meal));
        
        $main.innerHTML = html;
        $title.innerHTML = `${queryCountry} Food`;
        } else {
         $title.innerHTML = 'No hay resultados'
        }
      }
    })
  }


  document.querySelector('.loader').style.display = 'none';

}  