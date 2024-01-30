import "../style.css";
import { createHomePage } from "./home_page.js";
import "../fonts/Louis George Cafe.ttf";
import "../fonts/LUMINA.otf";

let home_btn = document.querySelector(".home_btn")
home_btn.addEventListener("click", createHomePage);

createHomePage();
