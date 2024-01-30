import "../style.css";
import { createHomePage } from "./home_page.js";

let home_btn = document.querySelector(".home_btn")
home_btn.addEventListener("click", createHomePage);

createHomePage();

