import brodetto from "../images/menu_items/Brodetto.png";
import coda_alla_vaccinara from"../images/menu_items/Coda_Alla_Vaccinara.png";
import insalata_caprese from "../images/menu_items/Insalata_Caprese.png";
import linguine_allo_scoglio from "../images/menu_items/Linguine_Allo_Scoglio.png";
import malloreddus_alla_campidanese from "../images/menu_items/Malloreddus_Alla_Campidanese.png";
import pizza_napoletana from "../images/menu_items/Pizza_Napoletana.png";
import rigatoni_alla_carbonara from "../images/menu_items/Rigatoni_Alla_Carbonara.png";
import sfogliatella from "../images/menu_items/Sfogliatella.png";

let createMenuPage = () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    
    const menu_items = document.createElement("div");
    menu_items.className = "menu-items-container";
    content.appendChild(menu_items);

    const item_names = ["Brodetto", "Coda Alla Vaccinara", "Insalata Caprese", "Linguine Allo Scoglio", "Malloreddus Alla Campidanese",
                        "Pizza Napoletana", "Rigatoni Alla Carbonara", "Sfogliatella"];
    const item_prices = [19, 25, 31, 18, 20, 40, 15, 32];
    const item_imgs = [brodetto, coda_alla_vaccinara, insalata_caprese, linguine_allo_scoglio, malloreddus_alla_campidanese, pizza_napoletana,
                        rigatoni_alla_carbonara, sfogliatella];

    for(let i = 0; i < item_names.length; i++) {
        let img = item_imgs[i];
        let name = item_names[i];
        let price = item_prices[i];

        const menu_item = document.createElement("div");
        menu_item.className = "menu-card";
        const menu_item_img = document.createElement("img");
        menu_item_img.className = "menu-item-img";
        menu_item_img.src = img;
        const menu_item_name = document.createElement("h3");
        menu_item_name.className = "menu-item-name";
        menu_item_name.textContent = name;
        const menu_item_price = document.createElement("p");
        menu_item_price.className = "menu-item-price"
        menu_item_price.textContent = price;
        menu_item.appendChild(menu_item_img);
        menu_item.appendChild(menu_item_name);
        menu_item.appendChild(menu_item_price);
        menu_items.appendChild(menu_item);
    }
}

export {createMenuPage}