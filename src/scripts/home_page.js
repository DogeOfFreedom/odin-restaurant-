import bgVideo from "../videos/Italian Food Stock Footage.mp4"

let createHomePage = () => {
    const content = document.querySelector("#content");
    const contentHTML = `
        <video autoplay muted loop id="bg-video">
            <source src="${bgVideo}" type="video/mp4">
        </video>
        <div class="hero-text-container">
            <h1>Sofia's Alley</h1>
            <h3><i>Italian Cuisine at its finest</i></h3>
        </div>
        <p>
            Sofia's Alley has been serving up the finest Italian cuisine since 1952. The name "Sofia's Alley" pays homage to
            the owner Sofia's original street side restaraunt she operated in Italy. "Sophia Sophia, when are you opening your door?
            I want a me a linguini alla luigi polenta mario", a common statement Sophia would hear. Her food goes down in local legends for its quality, elegence
            and enchanting flavour. However, food was not the only reason the people of Italy loved Sofia's Alley. It was its sense of
            family and community. You see, when Sofia was a child she lost both of her parents to a fire. Ever since then she has been
            longing for that feeling of warmth and companionship. "Sophia's Alley" is more than just a restaraunt to her, it is a family, one 
            that she has nurtured and opened up to the world so that everyone may feel the warmth that she has longed for her entire life. 

            72 years later in 2024, Sophia's Alley has expanded worldwide with over 10000 shops. When you have no where to go, remember, you are always
            welcome in Sophia's Alley :3
        </p>
        <div class="hours-container">
            <h2>Hours</h2>
            <ul>
                <li><strong>MON:</strong> 9:00am - 8:30pm</li>
                <li><strong>TUE:</strong> 9:00am - 8:30pm</li>
                <li><strong>WED:</strong> 9:00am - 8:30pm</li>
                <li><strong>THU:</strong> 9:00am - 8:30pm</li>
                <li><strong>FRI:</strong> 9:00am - 8:30pm</li>
                <li><strong>SAT:</strong> 11:00am - 6:00pm</li>
                <li><strong>SUN:</strong> Closed</li>
            </ul>
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
            <div class="reservation-form-container">
                <form action="">
                    <h3>Make a Reservation</h3>
                    <input type="text">
                    <input type="text">
                    <input type="text">
                    <button></button>
                </form>
            </div>
        </div>`
    content.innerHTML = contentHTML;
}

export { createHomePage }
