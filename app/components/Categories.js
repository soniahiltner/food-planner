export function Categories(props) {
    let { strCategory, strCategoryDescription, strCategoryThumb } = props;
  
    document.addEventListener('click', (e) => {
      if (!e.target.matches('.category-img')) return false;
      localStorage.setItem('MealCategory', e.target.dataset.id);
    })
  
    return `<article class="meals-card" >
      <a href='#/category'>
      <img class="category-img" src=${strCategoryThumb} alt=${strCategory} data-id=${strCategory} >
      </a>
      <h3 class="category-name">${strCategory}</h3>
      <p>${strCategoryDescription}</p>
  </article>`
  };