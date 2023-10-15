fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => {
    const products = data.products;
    const container = document.querySelector('.products-container');
    products.forEach(product => {
        const currentPrice = (product.price * product.discountPercentage / 100).toFixed(2);
        const productCard = `
        <div class="product-card">
            <img src="${product.thumbnail}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <div class="product-title">${product.title}</div>
                <div class="product-description">${product.description}</div>
                <div class="price-container">
                <div class="discount-price">$${currentPrice}</div>
                <div class="product-price">$${product.price}</div>
                </div>
            </div>
            <div class="buttons">
            <button class="add-to-cart"><img src="./Bag_alt.png" alt="">Add to cart</button>
            <button class="icon-button"><img src="./Favorite.png" alt=""></button> 
            </div>
        </div>
    `;
        container.innerHTML += productCard;
    });
});
