import { getLocalStorage } from "../helpers/localstorage.js";
export function ListOfIngredients(props) {
  let { strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18, strMeasure19, strMeasure20 } = props;

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
  console.log(ingredients);
  const displayIngredient = (ingredients) => {
    let display = ingredients.map(function (item) {
      return `
            <section class="ingredientsList-item">
            <div class="ingredientName">${item.name}</div>
            <div class="ingredientMeasure">${item.measure}</div>
            <button class="addToShoppingList" data-id=${item.name} >Add to shopping list</button>
            </section>
            `
    }).join('');
    return display;
  };
  const displayIng = displayIngredient(ingredients);
  let shoppingList = getLocalStorage('Shopping List');
  const $p = document.createElement('p');
  $p.innerText = 'Added succesfully';
  $p.classList.add('alert');
  const $section = document.querySelector('.ingredientsMenu');
  $section.insertAdjacentElement('afterend',$p);
  

  document.addEventListener('click', (e) => {

    if (e.target.matches('.addToShoppingList')) {

      let ingredientTitle = e.target.parentNode.firstChild.nextElementSibling.innerHTML;
      let ingredientQuantity = e.target.previousSibling.previousSibling.innerHTML;
      let ingredient = {
        id: e.target.dataset.id,
        title: ingredientTitle,
        measure: ingredientQuantity,
        completed: false
      };
      let filterShoppingList = shoppingList.findIndex(function (e) {
        return e.id === ingredient.id;
      });
      if (filterShoppingList > -1) {

        shoppingList[filterShoppingList] = {
          ...shoppingList[filterShoppingList],
          measure: `${shoppingList[filterShoppingList].measure} + ${ingredient.measure}`
        }

      } else {
        shoppingList.push(ingredient);
      }
      localStorage.setItem('Shopping List', JSON.stringify(shoppingList));
      //alert('Added to shopping list')
     $p.style.display = 'block';
     setTimeout(() => {
      $p.style.display = 'none';
     }, 2000);

      
    } else {
      return false;
    }
   
  })
 
  return  displayIng;

}