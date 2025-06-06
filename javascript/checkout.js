import {cart, removeFromcart, updateCartlocally} from "../data/cart.js";
import { products } from "../javascript/amazon.js";

console.log('Checkout script loading...');

// Check if we have cart items
if (!cart || cart.length === 0) {
    document.querySelector('.js-order-summary').innerHTML = '<p>Your cart is empty</p>';
} else {
    let newHTMLhere = '';
    
    cart.forEach((items) => {
        const product = products.find(p => p.id === items.productId);
        
        if (!product) {
            console.error(`Product with ID ${items.productId} not found`);
            return;
        }
        
        const priceInRupees = parseInt(product.price);
        
        newHTMLhere += `
            <div class="cart-item-container js-cart-item-${product.id}" >
                <div class="delivery-date js-delivery-date" data-product-id="${product.id}">
                  Wednesday, June 11th
                </div>
                 
                <div class="cart-item-details-grid">
                  <img class="product-image"
                    src="${product.image}">
                   <div class="cart-item-details">
                    <div class="product-name">
                        ${product.name}
                    </div>
                    <div class="product-price">
                      ₹${priceInRupees}
                    </div>
                    <div class="product-quantity">
                      <span>
                        Quantity: <span class="quantity-label-${product.id}">${items.quantity}</span>
                      </span>
                      <span class="update-quantity-link link-primary js-update-link" data-product-id="${product.id}">
                        Update
                      </span>
                      <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${product.id}">
                        Delete
                      </span>
                    </div>
                  </div>
                   <div class="delivery-options">
                    <div class="delivery-options-title">
                      Choose a delivery option:
                    </div>
                    <div class="delivery-option">
                      <input type="radio" checked
                        class="delivery-option-input"
                        name="delivery-option-${product.id}"
                        value="${moment().add(7,'days').format('dddd [,] MMMM Do')}"
                        data-shipping="0">
                      <div>
                        <div class="delivery-option-date js-free-delivery">
                        </div>
                        <div class="delivery-option-price">
                          FREE Shipping
                        </div>
                      </div>
                    </div>
                    <div class="delivery-option">
                      <input type="radio"
                        class="delivery-option-input"
                        name="delivery-option-${product.id}"
                        value="${moment().add(3,'days').format('dddd [,] MMMM Do')}"
                        data-shipping="99">
                      <div>
                        <div class="delivery-option-date js-fast-delivery">
                        </div>
                        <div class="delivery-option-price">
                          ₹99 - Shipping
                        </div>
                      </div>
                    </div>
                    <div class="delivery-option">
                      <input type="radio"
                        class="delivery-option-input"
                        name="delivery-option-${product.id}"
                        value="${moment().add(1,'days').format('dddd [,] MMMM Do')}"
                        data-shipping="199">
                      <div>
                        <div class="delivery-option-date js-fastest-delivery">
                        </div>
                        <div class="delivery-option-price">
                          ₹199 - Shipping
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
    });
    
    // Update the checkout page
    document.querySelector('.js-order-summary').innerHTML = newHTMLhere;
    console.log('Checkout items loaded successfully');
}

// Update cart quantity in header if the element exists
function updateCartQuantity() {
    let totalQuantity = 0;
    cart.forEach((item) => {
        totalQuantity += Number(item.quantity);
    });
    
    const cartQuantityElement = document.querySelector('.js-cart-quantity');
    if (cartQuantityElement) {
        cartQuantityElement.innerHTML = totalQuantity;
    }
    
   
}

updateCartQuantity();
let deleteLink = document.querySelectorAll('.js-delete-link');
deleteLink.forEach((link=>{
  link.addEventListener("click",()=>{
    let pId= link.dataset.productId;
    removeFromcart(pId);
    document.querySelector(`.js-cart-item-${pId}`).remove();
    updateCheckout();
    checkoutItems.innerHTML = `${updateCheckout()} items`;
    document.querySelector(`.js-items-checkout`).innerHTML=`Items (${updateCheckout()})`;
    updateOrderSummary();
    

  })
}))
function updateCheckout(){
  let totalQuantity = 0;
    cart.forEach((item) => {
        totalQuantity += Number(item.quantity);
    });
    return totalQuantity;
}

let itemsCheckout=updateCheckout();

let checkoutItems= document.querySelector(`.js-checkout-items`);
checkoutItems.innerHTML=`${updateCheckout()} items`;


document.querySelector(`.js-items-checkout`).innerHTML=`Items (${itemsCheckout})`


/*let updateButtons = document.querySelectorAll(`.js-update-link`);
updateButtons.forEach((link)=>{
  link.addEventListener('click',()=>{
    let productId=link.dataset.productId;
    newHtml=`<input type="text" class="js-update-quantity">`;
    document.querySelector(`.quantity-label-${productId}`).innerHTML=newHtml;
    
  })
})*/
let updateButtons = document.querySelectorAll(`.js-update-link`);
updateButtons.forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
    const quantitySpan = document.querySelector(`.quantity-label-${productId}`);

    // Replace span with input and add Save button
    quantitySpan.innerHTML = `
      <input type="number" class="js-update-quantity-input" min="1" value="1" style="width: 40px;">
      <button class="js-save-quantity" data-product-id="${productId}">Save</button>
    `;

    // Attach event listener to Save button after it enters the DOM
    const saveButton = document.querySelector(`.js-save-quantity[data-product-id="${productId}"]`);
    saveButton.addEventListener("click", () => {
      const newQuantity = document.querySelector(".js-update-quantity-input").value;
      const cartItem = cart.find((item) => item.productId === productId);
      if (cartItem && newQuantity > 0) {
        cartItem.quantity = Number(newQuantity);
        updateCartlocally();
        updateCartQuantity();
        quantitySpan.innerHTML = `${cartItem.quantity}`;
        checkoutItems.innerHTML = `${updateCheckout()} items`;
        document.querySelector(`.js-items-checkout`).innerHTML=`Items (${updateCheckout()})`;
        updateOrderSummary();
      } else {
        alert("Invalid quantity");
      }
    });
  });
});


const freeDelivery= document.querySelectorAll(`.js-free-delivery`);
freeDelivery.forEach((day)=>{
  day.innerHTML=moment().add(7,'days').format('dddd [,] MMMM Do');
})
const fastDelivery= document.querySelectorAll(`.js-fast-delivery`);
fastDelivery.forEach((day)=>{
  day.innerHTML=moment().add(3,'days').format('dddd [,] MMMM Do');
})
const fastestDelivery= document.querySelectorAll(`.js-fastest-delivery`);
fastestDelivery.forEach((day)=>{
  day.innerHTML=`Tomorrow${moment().add(1,'days').format('[,] MMMM Do')}`;
})

// For each product in the cart
document.querySelectorAll('.cart-item-container').forEach(container => {
  const productId = container.querySelector('.js-delivery-date').dataset.productId;

  // Get all radio inputs for this product
  const radios = container.querySelectorAll(`input[name="delivery-option-${productId}"]`);
  const deliveryDateDiv = container.querySelector(`.js-delivery-date`);

  // ✅ Set initial selected date
  const selected = container.querySelector(`input[name="delivery-option-${productId}"]:checked`);
  if (selected) {
    deliveryDateDiv.innerHTML = selected.value;
  }

  // ✅ Add change listener for each radio button
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      deliveryDateDiv.innerHTML = radio.value;
    });
  });
});
updateOrderSummary();
function updateOrderSummary() {
  let totalCost = 0;
  let totalShipping = 0;

  cart.forEach((items) => {
    const product = products.find(item => item.id === items.productId);
    if (product) {
      totalCost += product.price * items.quantity;
    }
  });

  cart.forEach((items) => {
    const pid = items.productId;
    const container = document.querySelector(`.js-cart-item-${pid}`);
    const selected = container.querySelector(`input[name="delivery-option-${pid}"]:checked`);
    if (selected) {
      totalShipping += Number(selected.dataset.shipping || 0);
    }
  });

  document.querySelector('.js-total-bill').innerHTML = `₹${totalCost}`;
  document.querySelector('.js-total-shipping').innerHTML = `₹${totalShipping}`;
  let totalBeforeTax=totalCost+totalShipping;
  document.querySelector(`.js-total-before-tax`).innerHTML= `₹${totalBeforeTax}`;
  let tax=(totalBeforeTax*0.1);
  document.querySelector(`.js-tax`).innerHTML=`₹${tax.toFixed(2)}`;
  document.querySelector(`.js-total-after-tax`).innerHTML=`₹${totalBeforeTax+tax}`;
  
}
document.querySelectorAll('.delivery-option-input').forEach(input => {
  input.addEventListener('change', () => {
    updateOrderSummary();
  });
});


document.querySelector('.js-place-order').addEventListener('click',()=>{
  const orderDetails={
    items : cart,
    total : document.querySelector(`.js-total-after-tax`).innerHTML,
  }
  localStorage.setItem("orders",JSON.stringify(orderDetails));
  
})
