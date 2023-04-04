const cartIcon = document.getElementById("cart-icon");
cartIcon.addEventListener("click", showCartMessage);

function showCartMessage() {
  const message = "Your cart is empty.";
  const popup = document.createElement("div");
  popup.classList.add("popup");

  const icon = document.createElement("img");
  icon.src = "images/i.png";
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