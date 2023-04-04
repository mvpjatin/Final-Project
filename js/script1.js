//header
//The global Header and nav bar
document.getElementById("n").innerHTML =
    "<ul class='n-ul'>" +
    "<li class='n-ul-li1 n-ul'><a href='../index.html'>ORANGE</a></li>" +
    "<li class='n-ul-li2 n-ul'><a href='../html/about.html'>About</a></li>" +
    "<li class='n-ul-li3 n-ul'><a href='../html/product.html'>Product</a></li>" +
    "<li class='n-ul-li4 n-ul'><a href='../html/contact.html'>Contact</a></li>" +
    "<li class='n-ul-li5 n-ul'><a href='#support'>Support</a></li>" +
    "<li class='n-ul-li6 n-ul'><a href='#search'><img src='../images/search.png' alt='SVG image'></a></li>" +
    "<li class='n-ul-li7 n-ul'><img id='cart-icon' src='../images/cart.png' alt='cart image'></li>" +
    "<li class='n-ul-li8 n-ul'><img src='../images/person.png' alt='person image'></li>" +
    "</ul>";

//footer
// global footer
document.getElementById("footer").innerHTML =
    "<footer class='footer'>" +
    "<div class='footer-grid'>" +
    "<div class='footer-column'>" +
    "<h4>About Us</h4>" +
    "<ul>" +
    "<li><a href='#'>Our Story</a></li>" +
    "<li><a href='#'>Team Members</a></li>" +
    "<li><a href='#'>Careers</a></li>" +
    "</ul>" +
    "</div>" +
    "<div class='footer-column'>" +
    "<h4>Products</h4>" +
    "<ul>" +
    "<li><a href='#product'>Mobiles</a></li>" +
    "<li><a href='#product'>Laptops</a></li>" +
    "<li><a href='#product'>Accessories</a></li>" +
    "</ul>" +
    "</div>" +
    "<div class='footer-column'>" +
    "<h4>Contact Us</h4>" +
    "<ul>" +
    "<li>123 Main St.</li>" +
    "<li>Anytown, USA</li>" +
    "<li>Phone: (123) 456-7890</li>" +
    "<li>Email: info@mywebsite.com</li>" +
    "</ul>" +
    "</div>" +
    "</div>" +
    "</footer>";

const cartIcon = document.getElementById("cart-icon");
cartIcon.addEventListener("click", showCartMessage);

function showCartMessage() {
    const message = "Your cart is empty.";
    const popup = document.createElement("div");
    popup.classList.add("popup");

    const icon = document.createElement("img");
    icon.src = "../images/i.png";
    icon.alt = "Empty cart icon";
    popup.appendChild(icon);

    const messageText = document.createElement("p");
    messageText.textContent = message;
    popup.appendChild(messageText);

    const okButton = document.createElement("button");
    okButton.textContent = "OK";
    okButton.addEventListener("click", () => {
        popup.remove();
    });
    popup.appendChild(okButton);

    document.body.appendChild(popup);
}

function searchGoogle(event) {
    event.preventDefault(); // prevent the form from submitting normally

    const searchInput = document.getElementById("search-input");
    const query = searchInput.value;
    const googleUrl = "https://www.google.com/search?q=" + encodeURIComponent(query);

    window.open(googleUrl, "_blank"); // open the Google search in a new tab
}
