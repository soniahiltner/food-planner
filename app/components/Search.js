import { SearchCountry } from "./SearchCountry.js";
import { SearchIngredient } from "./SearchIngredient.js";
import { SearchLetter } from "./SearchLetter.js";
import { SearchName } from "./SearchName.js";

export function Search() {

  const $form = document.createElement('form');
  $form.classList.add('search');

$form.appendChild(SearchName());
$form.appendChild(SearchLetter());
$form.appendChild(SearchIngredient())
$form.appendChild(SearchCountry())


  return $form;
};