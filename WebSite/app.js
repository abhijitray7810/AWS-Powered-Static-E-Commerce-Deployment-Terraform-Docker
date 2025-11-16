<script>
        // Sample product data
        const products = [
            {
                id: 1,
                name: "Wireless Headphones",
                price: 79.99,
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                description: "High-quality wireless headphones with noise cancellation."
            },
            {
                id: 2,
                name: "Smart Watch",
                price: 199.99,
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                description: "Feature-rich smartwatch with health monitoring."
            },
            {
                id: 3,
                name: "Laptop Backpack",
                price: 49.99,
                image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                description: "Durable laptop backpack with multiple compartments."
            },
            {
                id: 4,
                name: "Bluetooth Speaker",
                price: 89.99,
                image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                description: "Portable Bluetooth speaker with excellent sound quality."
            },
            {
                id: 5,
                name: "Fitness Tracker",
                price: 59.99,
                image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                description: "Advanced fitness tracker with heart rate monitoring."
            },
            {
                id: 6,
                name: "Phone Case",
                price: 24.99,
                image: "https://images.unsplash.com/photo-1601593346740-925612772716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                description: "Protective phone case with stylish design."
            }
        ];

        // Cart state
        let cart = [];
        let cartCount = 0;
        let cartTotal = 0;

        // DOM elements
        const productsGrid = document.getElementById('products-grid');
        const cartIcon = document.getElementById('cart-icon');
        const cartSidebar = document.getElementById('cart-sidebar');
        const closeCart = document.getElementById('close-cart');
        const overlay = document.getElementById('overlay');
        const cartItems = document.getElementById('cart-items');
        const cartTotalElement = document.getElementById('cart-total');
        const cartCountElement = document.querySelector('.cart-count');
        const mobileMenu = document.getElementById('mobile-menu');
        const mainNav = document.getElementById('main-nav');

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            renderProducts();
            updateCartUI();
            
            // Add event listeners
            cartIcon.addEventListener('click', toggleCart);
            closeCart.addEventListener('click', toggleCart);
            overlay.addEventListener('click', toggleCart);
            mobileMenu.addEventListener('click', toggleMobileMenu);
        });

        // Render products to the page
        function renderProducts() {
            productsGrid.innerHTML = '';
            
            products.forEach((product, index) => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.style.animationDelay = `${index * 0.1}s`;
                
                productCard.innerHTML = `
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-price">$${product.price.toFixed(2)}</p>
                        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    </div>
                `;
                
                productsGrid.appendChild(productCard);
            });
            
            // Add event listeners to "Add to Cart" buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    addToCart(productId);
                    
                    // Add bounce animation to cart icon
                    cartIcon.style.animation = 'bounce 0.5s';
                    setTimeout(() => {
                        cartIcon.style.animation = '';
                    }, 500);
                });
            });
        }

        // Add product to cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    ...product,
                    quantity: 1
                });
            }
            
            updateCartUI();
        }

        // Remove product from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartUI();
        }

        // Update cart quantity
        function updateQuantity(productId, newQuantity) {
            if (newQuantity < 1) {
                removeFromCart(productId);
                return;
            }
            
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity = newQuantity;
            }
            
            updateCartUI();
        }

        // Update cart UI
        function updateCartUI() {
            // Update cart count
            cartCount = cart.reduce((total, item) => total + item.quantity, 0);
            cartCountElement.textContent = cartCount;
            
            // Update cart total
            cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
            
            // Render cart items
            cartItems.innerHTML = '';
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p style="text-align: center; padding: 20px;">Your cart is empty</p>';
                return;
            }
            
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                
                cartItem.innerHTML = `
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <h4 class="cart-item-title">${item.name}</h4>
                        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                        <div class="cart-item-actions">
                            <button class="quantity-btn minus" data-id="${item.id}">-</button>
                            <span class="item-quantity">${item.quantity}</span>
                            <button class="quantity-btn plus" data-id="${item.id}">+</button>
                            <button class="remove-item" data-id="${item.id}">Remove</button>
                        </div>
                    </div>
                `;
                
                cartItems.appendChild(cartItem);
            });
            
            // Add event listeners to cart item buttons
            document.querySelectorAll('.quantity-btn.minus').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    const item = cart.find(item => item.id === productId);
                    updateQuantity(productId, item.quantity - 1);
                });
            });
            
            document.querySelectorAll('.quantity-btn.plus').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    const item = cart.find(item => item.id === productId);
                    updateQuantity(productId, item.quantity + 1);
                });
            });
            
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    removeFromCart(productId);
                });
            });
        }

        // Toggle cart sidebar
        function toggleCart() {
            cartSidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = cartSidebar.classList.contains('active') ? 'hidden' : '';
        }

        // Toggle mobile menu
        function toggleMobileMenu() {
            mainNav.classList.toggle('active');
        }
    </script>
