document.addEventListener('DOMContentLoaded', () => {
    // Adicionar ao carrinho
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Atualizar quantidade no carrinho
    updateCartCount();
});

function addToCart(event) {
    const productId = event.target.dataset.id;
    
    // Simular adição ao carrinho (você precisará implementar a lógica real no backend)
    console.log(`Produto ${productId} adicionado ao carrinho`);
    
    // Atualizar a contagem do carrinho
    updateCartCount();
}

function updateCartCount() {
    // Simular a contagem do carrinho (você precisará implementar a lógica real)
    const cartCount = Math.floor(Math.random() * 10);
    
    const cartLink = document.querySelector('nav a[href*="cart"]');
    cartLink.innerHTML = `<i class="fas fa-shopping-cart"></i> Carrinho (${cartCount})`;
}