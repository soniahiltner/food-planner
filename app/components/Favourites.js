import { getLocalStorage } from "../helpers/localstorage.js";

export function Favourites(props) {

  let { idMeal, strMeal, strMealThumb, } = props;
  let favourites = getLocalStorage('Favourite');

  //remove 1 item
  const removeItem = (id) => {
    let favourites = getLocalStorage('Favourite');
    favourites = favourites.filter(item => item.id !== id);
    localStorage.setItem('Favourite', JSON.stringify(favourites));
  };

  document.addEventListener('click', (e) => {
    if (e.target.matches('.meal-img')) {
      localStorage.setItem('MealId', e.target.dataset.id);
    } else if (e.target.matches('.deleteFavourite')) {
      let favourite = {
        id: e.target.dataset.delete
      };
      let filterfav = favourites.findIndex(function (e) {
        return e.id === favourite.id;
      });
      if (filterfav > -1) {
        removeItem(favourite.id)
        e.target.parentNode.parentNode.classList.add('hide');
      }
    } else {
      return false;
    }
  });

  return `
    <section class='favourites-page'>
    <article>
    <h3>${strMeal}</h3>
    <a href='#/meal'> 
    <img class='meal-img' src=${strMealThumb} alt=${strMeal} data-id=${idMeal}>
    </a>
    <button class='deleteFavourite' data-delete=${idMeal}>Remove </button>
    </article>
    </section>`;
}