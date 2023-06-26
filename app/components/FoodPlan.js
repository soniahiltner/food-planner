import { getLocalStorage } from "../helpers/localstorage.js";

export function FoodPlan(props) {
    let { idMeal, strMeal} = props;

  let menus = getLocalStorage('Menus');


 document.addEventListener('click', (e) => {
    let removeBtn = {
        id: e.target.dataset.plan
    };

    if (e.target.matches('#remove-ing')) {
        let filterMenu = menus.findIndex(function(e) {
            return e.id === removeBtn.id;
        });
       
        if (filterMenu > -1) {
            menus.splice(filterMenu, 1);
            e.target.parentNode.parentNode.style.display = 'none';
        }
    } else if (e.target.matches('#see-ing')) {
        console.log(e.target.dataset.ingredients)
        localStorage.setItem('MenuId', e.target.dataset.ingredients);

    }else {
        return false;
    }
    localStorage.setItem('Menus', JSON.stringify(menus));
 })
  
  return `
  <div class="menu-item row">
      <div class="menu-name col1">${strMeal}</div>
      <div class="menu-ingredients col2">
        <a href='#/listOfIngredients'>
          <button class="menu-btns" id="see-ing" data-ingredients=${idMeal}>Ingredients</button>
          </a>
      </div>
      <div class="menu-remove col3">
          <button class="menu-btns" id="remove-ing" data-plan=${idMeal}>Del</button>
      </div>
  </div>
  `;
};