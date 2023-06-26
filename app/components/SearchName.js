export function SearchName() {

    const $searchName = document.createElement('div');
    $searchName.classList.add('search-container');
  
    $searchName.innerHTML = `
    <label for='name'>Search Menus by name:</label>
    <br />
    <input type='search' id='name' name='name' />
    <a href='#/queryname' id='name-query'>Search</a>
    `;
  
    document.addEventListener('click', e => {
      if (e.target.matches('#name-query')) {
        let name = document.getElementById('name').value
        console.log(name);
        localStorage.setItem('NameQuery', name)
      }
      
    })
  
    return $searchName;
  };