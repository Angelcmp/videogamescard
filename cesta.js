document.addEventListener("DOMContentLoaded", function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart_items');
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    const proceedPaymentButton = document.getElementById('proceed_payment');

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let subtotal = 0;

        cart.forEach((item) => {
            const itemElement = document.createElement('li');
            itemElement.classList.add('cart_item');
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div>
                    <h3>${item.title}</h3>
                    <p>Precio: $${item.price}</p>
                    <p>Cantidad: ${item.quantity}</p>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
            subtotal += item.price * item.quantity;
        });

        const tax = subtotal * 0.07;
        const total = subtotal + tax;

        subtotalElement.textContent = subtotal.toFixed(2);
        taxElement.textContent = tax.toFixed(2);
        totalElement.textContent = total.toFixed(2);
    }

    proceedPaymentButton.addEventListener('click', () => {
        if (cart.length > 0) {
            window.location.href = 'pagos.html';
        } else {
            alert("El carrito está vacío.");
        }
    });

    updateCart();
});

let cardNumInput =  
    document.querySelector('#cardNum') 

    cardNumInput.addEventListener('keyup', () => { 
    let cNumber = cardNumInput.value 
    cNumber = cNumber.replace(/\s/g, "") 
    if (Number(cNumber)) { 
        cNumber = cNumber.match(/.{1,4}/g) 
        cNumber = cNumber.join(" ") 
        cardNumInput.value = cNumber 
    } 
})

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("paymentForm");
    const submitBtn = document.getElementById("submitBtn");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        window.location.href = "/activacion.html";
    });
});