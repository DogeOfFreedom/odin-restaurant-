import "../style.css";
import { createHomePage } from "./home_page.js";
import { createContactPage } from "./contact_page.js";
import { createMenuPage } from "./menu_page.js";

let home_btn = document.querySelector("#home_btn")
home_btn.addEventListener("click", createHomePage);

let contact_btn = document.querySelector("#contact_btn")
contact_btn.addEventListener("click", createContactPage);

let menu_btn = document.querySelector("#menu_btn")
menu_btn.addEventListener("click", createMenuPage);

// createHomePage();

