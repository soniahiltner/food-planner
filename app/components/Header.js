import { Navbar } from "./Navbar.js";
import { Title } from "./Title.js";

export function Header() {
  const $header = document.createElement("header");
  $header.classList.add("header");

  $header.appendChild(Navbar());
  $header.appendChild(Title());
  return $header;
}
