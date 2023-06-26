export function SearchLetter() {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const list = letters.map(letter => {
      return `<a href='#/queryletter' ><li class='letter-btn' data-letter=${letter} >${letter.toUpperCase()}</li></a>`
    }).join('');
  
    const $searchLetter = document.createElement('div');
    $searchLetter.classList.add('search-container');
    const $h4 = document.createElement('h4');
    $h4.textContent = 'Filter Menus by first letter:';
    $searchLetter.appendChild($h4)
    const $letterList = document.createElement('ul');
    $letterList.innerHTML = list;
    $searchLetter.appendChild($letterList);
  
    document.addEventListener('click', (e) => {
      
      if (e.target.matches('a .letter-btn')) {
        console.log(e.target.dataset.letter)
        localStorage.setItem('LetterQuery', e.target.dataset.letter);
      }
    })
    return $searchLetter;
  };