document.addEventListener("DOMContentLoaded", function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartIcon = document.querySelector('.icon_shop');
    const addToCartButton = document.querySelector('.btn_shop_agrega');
    const priceSelect = document.getElementById('price');
    const quantityInput = document.getElementById('quantity');
    const cartItemsContainer = document.getElementById('cart_items');
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    const checkoutButton = document.getElementById('checkout');
    const closeCartButton = document.getElementById('close_cart');

    cartIcon.addEventListener('click', () => {
        document.getElementById('shopping_cart').classList.toggle('visible');
    });

    addToCartButton.addEventListener('click', () => {
        const price = parseFloat(priceSelect.value);
        const quantity = parseInt(quantityInput.value);
        const imageSrc = document.getElementById('product_image').src;
        const title = document.getElementById('product_title').textContent;
        const item = {
            title: title,
            price: price,
            quantity: quantity,
            image: imageSrc
        };
        cart.push(item);
        updateCart();
        saveCart();
    });

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let subtotal = 0;

        cart.forEach((item, index) => {
            const itemElement = document.createElement('li');
            itemElement.classList.add('cart_item');
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div>
                    <h3>${item.title}</h3>
                    <p>Precio: $${item.price}</p>
                    <p>Cantidad: ${item.quantity}</p>
                </div>
                <button class="remove_item" data-index="${index}">Eliminar</button>
            `;
            cartItemsContainer.appendChild(itemElement);
            subtotal += item.price * item.quantity;
        });

        const tax = subtotal * 0.07;
        const total = subtotal + tax;

        subtotalElement.textContent = subtotal.toFixed(2);
        taxElement.textContent = tax.toFixed(2);
        totalElement.textContent = total.toFixed(2);

        const removeButtons = document.querySelectorAll('.remove_item');
        removeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                cart.splice(index, 1);
                updateCart();
                saveCart();
            });
        });
        checkoutButton.disabled = cart.length === 0;
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    closeCartButton.addEventListener('click', () => {
        document.getElementById('shopping_cart').classList.remove('visible');
    });

    checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            window.location.href = '/cesta.html';
        } else {
            alert("El carrito está vacío.");
        }
    });

    updateCart();
});

