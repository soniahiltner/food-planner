
export function Category(props) {
    let {idMeal, strMeal, strMealThumb} = props;
  
    document.addEventListener('click', (e) => {
      if (!e.target.matches('.meal-img')) return false;
      localStorage.setItem('MealId', e.target.dataset.id);
    })
  
    return `
      <section class='category-page'>
      <article>
      <h3>${strMeal}</h3>
      <a href='#/meal'> 
      <img class='meal-img' src=${strMealThumb} alt=${strMeal} data-id=${idMeal}>
      </a>
      </article>
      </section>`
  };