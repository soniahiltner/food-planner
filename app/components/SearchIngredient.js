export function SearchIngredient() {
    const $searchIngredient = document.createElement('div');
    $searchIngredient.classList.add('search-container');
    $searchIngredient.innerHTML = `
     <label for='ingredient'>Filter by main ingredient:</label>
     <br />
     <input id='ingredient' name='ingredient'>
     <a href='#/queryingredient' id='ingredient-query'>Search</a>
     `;

     document.addEventListener('click', e => {
        if (e.target.matches('#ingredient-query')) {
          let ingredient = document.getElementById('ingredient').value;
          console.log(ingredient)
          localStorage.setItem('IngredientQuery', ingredient);
        }
      })

     return $searchIngredient;
}