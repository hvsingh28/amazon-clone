// Fixed cart initialization
export let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function removeFromcart(productId) {
    const originalLength = cart.length;
    cart = cart.filter((item) => item.productId !== productId);
    
    // Only update localStorage if something was actually removed
    if (cart.length !== originalLength) {
        updateCartlocally();
        console.log(`Removed product ${productId} from cart`);
    }
}

export function updateCartlocally() {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Cart updated in localStorage');
    } catch (error) {
        console.error('Failed to update cart in localStorage:', error);
    }
}

// Additional utility functions for better cart management
export function addToCart(productId, productName, quantity = 1) {
    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
        existingItem.quantity = Number(existingItem.quantity) + Number(quantity);
    } else {
        cart.push({
            productId,
            productName,
            quantity: Number(quantity)
        });
    }
    
    updateCartlocally();
}

export function updateCartItemQuantity(productId, newQuantity) {
    const item = cart.find(item => item.productId === productId);
    if (item) {
        item.quantity = Number(newQuantity);
        updateCartlocally();
    }
}

export function getCartTotal() {
    return cart.reduce((total, item) => total + Number(item.quantity), 0);
}

export function clearCart() {
    cart.length = 0;
    updateCartlocally();
}



