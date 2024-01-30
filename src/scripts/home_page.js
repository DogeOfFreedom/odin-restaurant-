import bgVideo from "../videos/Italian Food Stock Footage.mp4"
import { createContactPage } from "./contact_page";
import { createMenuPage } from "./menu_page";

let createHomePage = () => {
    const content = document.querySelector("#content");
    const contentHTML = `
        <div class="bg-video-container">
            <video autoplay muted loop id="bg-video">
                <source src="${bgVideo}" type="video/mp4">
            </video>
        </div>
        <div class="hero-text-container">
            <h1 class="restaurant-name">Sofia's Alley</h1>
            <h3 class="title-sub-text">Italian Cuisine at its finest</h3>
            <div class="video-bg-btn-container">
                <button class="menu_btn video-bg-btn">Menu</button>
                <button class="contact_btn video-bg-btn">Contact</button>
            </div>
        </div>    
        <div class="home-page-content-container">
            <div class="about-us-container">
                <p>
                    Sofia's Alley has been serving up the finest Italian cuisine since 1952. The name "Sofia's Alley" pays homage to
                    the owner Sofia's original street side restaraunt she operated in Italy. "Sophia Sophia, when are you opening your door?
                    I want a me a linguini alla luigi polenta mario", a common statement Sophia would hear. Her food goes down in local legends for its quality, elegence
                    and enchanting flavour. However, food was not the only reason the people of Italy loved Sofia's Alley. It was its sense of
                    family and community. You see, when Sofia was a child she lost both of her parents to a fire. Ever since then she has been
                    longing for that feeling of warmth and companionship. "Sophia's Alley" is more than just a restaraunt to her, it is a family, one 
                    that she has nurtured and opened up to the world so that everyone may feel the warmth that she has longed for her entire life. 
                </p>
                <p>
                    72 years later in 2024, Sophia's Alley has expanded worldwide with over 10000 shops. When you have no where to go, remember, you are always
                    welcome in Sophia's Alley :3
                </p>
            </div>
            <div class="home-page-content-grid">
                <div class="hours-container">
                    <h2>Hours</h2>
                    <table>
                        <tr>
                            <td>Monday</td>
                            <td>9:00am - 8:30pm</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>9:00am - 8:30pm</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>9:00am - 8:30pm</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>9:00am - 8:30pm</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>9:00am - 8:30pm</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>11:00am - 6:00pm</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>Closed</td>
                        </tr>
                    </table>
                </div>
                <div class="address-container">
                    <h2>Address</h2>
                    <p>Sophia Alley’s Thymes Crescent
                    179 North 24th Rd
                    New Old Town, ALBQ 20095</p>
                </div>
                <div class="reservation-container">
                    <h2>Make a Reservation</h2>
                    <p>Our restaraunt is very busy, making a reservation is the best way to ensure you have a smooth dining experience</p>
                    <form class="reservation_form" action="">
                        <fieldset>
                            <legend>Make a Reservation</legend>
                            <input type="date">
                            <input type="time" name="time" id="">
                            <select name="people" id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="9">8</option>
                            </select>
                            <input type="text" placeholder="name">
                            <button>Book</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>`
    content.innerHTML = contentHTML;

    let contact_btns = document.querySelectorAll(".contact_btn");
    for(let contact_btn of contact_btns) {
        contact_btn.addEventListener("click", createContactPage);
    }

    let menu_btns = document.querySelectorAll(".menu_btn");
    for(let menu_btn of menu_btns) {
        menu_btn.addEventListener("click", createMenuPage);
    }
}

export { createHomePage }
