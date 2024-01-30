let createContactPage = () => {
    const content = document.querySelector("#content");
    content.innerHTML = `
        <div class="contact-details-container">
            <h2>Contact Us</h2>
            <div>
                <img src="images/logos/instagram.png" class="small-icon" alt="">
                <p>@sophias_alley_restaurant</p>
            </div>
            <div>
                <p>Phone: </p>
                <p>561-973-111</p>
            </div>
            <div>
                <p>Email: </p>
                <p>Sophias_Alley@funkmail.com</p>
            </div>
        </div>
    `;
}

export {createContactPage}