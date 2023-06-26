import { getLocalStorage } from "../helpers/localstorage.js";

export function Meal(props) {
  let { idMeal, strMeal, strArea, strMealThumb, strInstructions,
     strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18, strMeasure19, strMeasure20} = props;

  const ingredientsName = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20];

  const ingredientsMeasures = [strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18, strMeasure19, strMeasure20];

  const ingredient = (name, measures) => {
    let result = [];
    name.forEach((currentValue, index) => {
      result.push({
        'name': currentValue,
        'measure': measures[index]
      });
    });
    const filter = result.filter(item => item.name);
    return filter;
  };
  const ingredients = ingredient(ingredientsName, ingredientsMeasures);

  const displayIngredients = (ingredients) => {
    let display = ingredients.map(function (item) {
      return `<li>
        <span class='ingredient-name'>${item.name} -</span>
        <span class='ingredient-measure'>${item.measure}</span>
        </li>`
    }).join('');
    return display;
  }
  const displayList = displayIngredients(ingredients);


  let favourites = getLocalStorage('Favourite');
  let menus = getLocalStorage('Menus');

 //Display fav-btn
 const displayFavBtn = (favourites) => {
  favourites.forEach(function(el) {
    let {id} = el;
    const button = document.querySelector(`[data-id="${id}"]`);
    if (button) {
      button.classList.add('active')
    }
  })
 };
 //Display Add-To-Menus btn
 const displayAddToMenuBtn = (menus) => {
  menus.forEach(function(el) {
    let {id} = el;
    const button = document.querySelector(`[data-menu="${id}"]`);
    if (button) {
      button.textContent = 'Added To Menus';
      button.classList.add('active')
    }
  })
 };

 
setTimeout(() => {
  displayFavBtn(favourites);
  displayAddToMenuBtn(menus);
 }, 100)

//Event listener-favourite button and foodplanner button
  document.addEventListener('click', (e) => {
    let favourite = {
      id: e.target.dataset.id
    };
    let menu = {
      id: e.target.dataset.menu
    };
    
    
    if (e.target.matches('.favourite')){
      let filterfav = favourites.findIndex(function (e) {
        return e.id === favourite.id;
      })
      if (filterfav > -1) {
        favourites.splice(filterfav, 1);
        e.target.classList.remove('active');
        
      } else {
        favourites.push(favourite);
        e.target.classList.add('active');
      }
    } else if (e.target.matches('.addToMenus')) {
      let filtermenu = menus.findIndex(function (e) {
        return e.id === menu.id;
      });
      if (filtermenu < 0) {
        menus.push(menu);
        e.target.textContent = 'Added To My Plan';
        e.target.classList.add('active');
      } 
    } else {
      return false;
    }
    localStorage.setItem('Favourite', JSON.stringify(favourites));
    localStorage.setItem('Menus', JSON.stringify(menus));
  });

  

  return `<section class='meal-page'>
    <article>
    <h3>${strMeal}</h3>
    <div class='img-container'>
        <img  class='meal-img' src=${strMealThumb} alt=${strMeal}/>
        <div class='tags'>
        <span class='favourite' data-id=${idMeal}>&starf;</span>
        
        <span class='country-tag'> ${strArea} Food</span>
        </div>
    </div>
    
    <div class='instructions'>
        <h3>Instructions</h3>
        <p>${strInstructions}</p> 
    </div>
    <div class='ingredients'>
    <h3>Ingredients</h3>
    <ul class='ingredients-list'>
    ${displayList}
    </ul>
    </div>
    <button class='addToMenus' data-menu=${idMeal}>
        Add to My Plan
    </button>
    </article>
    </section>`
}