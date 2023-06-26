export function Navbar() {
  const $navbar = document.createElement("nav");
  $navbar.classList.add("navbar");

  $navbar.innerHTML = `
    <a href='#/'>Home</a>
    <span>-</span>
    <a href='#/favourites'>Favourites</a>
    <span>-</span>
    <a href='#/foodPlanner'>My Plan</a>
    <span>-</span>
    <a href='#/shopping'>Shopping List</a>
    <span>-</span>
    <a href='#/search'>Search</a>`;
  return $navbar;
}
