import { cart, addToCart, updateCartlocally } from '../data/cart.js';


export const products = [
    {
        id: 'athletic-socks',
        image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
        name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
        rating: {
            stars: '4.5',
            count: '87'
        },
        price: '1090',
    },
    {
        id: 'basketball',
        image: 'images/products/intermediate-composite-basketball.jpg',
        name: 'Intermediate Size Basketball',
        rating: {
            stars: '4',
            count: '127'
        },
        price: '2095',
    },
    {
        id: 'cotton-tshirt',
        image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
        name: 'Adults Plain Cotton T-Shirt - 2 Pack',
        rating: {
            stars: '4.5',
            count: '56'
        },
        price: '799',
    },
    {
        id: 'samsung-phone',
        image: 'images/products/samsung-phone.jpg',
        name: 'Samsung Galaxy S25 5G AI Smartphone (Silver Shadow, 12GB RAM, 256GB Storage), 50MP Camera with Galaxy AI',
        rating: {
            stars: '4.5',
            count: '785'
        },
        price: '54899',
    },
    {
        id: 'galaxy-ring',
        image: 'images/products/ring.jpg',
        name: 'Samsung Galaxy Ring, AI Smart Ring, Size First w/Sizing Kit, No App Subscription, Fitness Monitor, Sleep Tracker, Up to 7-Day Battery, Size 7, Titanium Gold',
        rating: {
            stars: '4',
            count: '259'
        },
        price: '3499',
    },
    {
        id: 'moon-lamp',
        image: 'images/products/lamp.jpg',
        name: 'One94Store 3D Crystal Moon Lamp with USB LED Light & Wooden Base | Warm White Crystal Cube Night Light for Bedroom, Home Décor, Office & Gift | Table Lamp for Kids & Adults',
        rating: {
            stars: '4.5',
            count: '78'
        },
        price: '169',
    },
    {
        id: 'wireless-earbuds',
        image: 'images/products/wireless-earbuds.jpg',
        name: 'boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds with 42H Playtime, Beast Mode(Low Latency Upto 80ms) for Gaming, IPX4 Water Resistance, ENx Tech, IWP, Smooth Touch Controls(Cherry Blossom)',
        rating: {
            stars: '4',
            count: '15234'
        },
        price: '1299',
    },
    {
        id: 'protein-powder',
        image: 'images/products/protein-powder.jpg',
        name: 'MuscleBlaze Whey Protein (2 kg, Rich Milk Chocolate), 25g Protein Per Serving, Whey Protein Isolate & Concentrate with Digestive Enzymes & Added Probiotics',
        rating: {
            stars: '4.5',
            count: '8976'
        },
        price: '3999',
    },
    {
        id: 'gaming-keyboard',
        image: 'images/products/gaming-keyboard.jpg',
        name: 'Cosmic Byte CB-GK-26 Pandora Tenkeyless Mechanical Gaming Keyboard with Outemu Blue Switches, Rainbow LED and Full Anti-Ghosting (Black)',
        rating: {
            stars: '4.5',
            count: '4512'
        },
        price: '2499',
    },
    {
        id: 'instant-camera',
        image: 'images/products/instant-camera.jpg',
        name: 'Fujifilm Instax Mini 11 Instant Camera (Charcoal Grey) + Twin Pack Instant Film (20 Exposures) + Colorful Album',
        rating: {
            stars: '4.5',
            count: '1876'
        },
        price: '6799',
    },
    {
        id: 'yoga-mat',
        image: 'images/products/yoga-mat.jpg',
        name: 'Boldfit Yoga Mat for Women & Men 6mm Extra Thick NBR Yoga Mat for Gym, Exercise, Yoga and Home Workout Non Slip Yoga Mat with Carrying Strap (Purple)',
        rating: {
            stars: '4',
            count: '3241'
        },
        price: '899',
    },
    {
        id: 'coffee-maker',
        image: 'images/products/coffee-maker.jpg',
        name: 'Preethi Cafe Zest CM210 Drip Coffee Maker 650 Watts with Permanent Filter, Anti-Drip Feature, Borosilicate Glass Carafe, 10 Cups Capacity (Black)',
        rating: {
            stars: '4',
            count: '567'
        },
        price: '3450',
    },
    {
        id: 'backpack',
        image: 'images/products/backpack.jpg',
        name: 'VIP Commuter Plus 02 Laptop Backpack Blue I 19 litres I Water Repellent I Fits 15.6 inch laptop I 2 Years International Warranty I Made in India',
        rating: {
            stars: '4.5',
            count: '2134'
        },
        price: '1699',
    },
    {
        id: 'air-fryer',
        image: 'images/products/air-fryer.jpg',
        name: 'AGARO Grand Digital Air Fryer For Home, 6.5L, 1800W, Digital Display, 8 Preset Menus, Recipe Book Included, 2 Years Warranty, Black (33112)',
        rating: {
            stars: '4.5',
            count: '5432'
        },
        price: '4999',
    },
    {
        id: 'skincare-serum',
        image: 'images/products/skincare-serum.jpg',
        name: 'The Ordinary Niacinamide 10% + Zinc 1% Oil Control Serum - Reduces appearance of blemishes and balances sebum activity - 30ml',
        rating: {
            stars: '4.5',
            count: '9876'
        },
        price: '599',
    },
    {
        id: 'bluetooth-speaker',
        image: 'images/products/bluetooth-speaker.jpg',
        name: 'JBL Go 3: Portable Speaker with Bluetooth, Fabulous Sound, Vibrant Colors with Rugged Design, Waterproof and Dustproof Feature (Red)',
        rating: {
            stars: '4.5',
            count: '12543'
        },
        price: '2799',
    },
    {
        id: 'running-shoes',
        image: 'images/products/running-shoes.jpg',
        name: 'Campus FIRST Running Shoes for Men | Memory Tech Lite Insole | Durable Outsole (7, Navy/R.Blue)',
        rating: {
            stars: '4',
            count: '6789'
        },
        price: '1599',
    },
    {
        id: 'electric-kettle',
        image: 'images/products/electric-kettle.jpg',
        name: 'Havells Aqua Plus Double Wall 1500W Stainless Steel Kettle, 1.2 Litre, Silver & Black (GHBKEASSL120)',
        rating: {
            stars: '4.5',
            count: '3456'
        },
        price: '1899',
    },
    {
        id: 'power-bank',
        image: 'images/products/power-bank.jpg',
        name: 'Mi Power Bank 3i 20000mAh Lithium Polymer 18W Fast Power Delivery Charging | Input- Type C | Micro USB| Triple Output | Sandstone Black',
        rating: {
            stars: '4.5',
            count: '45678'
        },
        price: '1999',
    },
    {
        id: 'watch',
        image: 'images/products/watch.jpg',
        name: 'Noise ColorFit Pro 4 Alpha Bluetooth Calling Smart Watch with 1.78" AMOLED Display, Metallic Build, Gesture Control, 60Hz Refresh Rate (Jet Black)',
        rating: {
            stars: '4',
            count: '8765'
        },
        price: '4999',
    }
];

// Function to update cart quantity display - SAFELY
function updateCartQuantity() {
    let totalQuantity = 0;
    cart.forEach((item) => {
        totalQuantity += Number(item.quantity);
    });
    
    // SAFE CHECK: Only update if element exists
    const cartQuantityElement = document.querySelector('.js-cart-quantity');
    if (cartQuantityElement) {
        cartQuantityElement.innerHTML = totalQuantity;
    }
    // If element doesn't exist, do nothing (this is normal on checkout page)
}

// Function to show "Added to cart" feedback
function showAddedToCartFeedback(productId) {
    const addedElement = document.querySelector(`.product-container:has([data-product-id="${productId}"]) .added-to-cart`);
    if (addedElement) {
        addedElement.classList.add('show');
        
        // Hide the feedback after 2 seconds
        setTimeout(() => {
            addedElement.classList.remove('show');
        }, 2000);
    }
}

// Only generate products grid if we're on the main amazon page
const productGrid = document.querySelector('.js-products-grid');
if (productGrid) {
    let newHTML = '';
    products.forEach((product) => {
        newHTML +=
            `<div class="product-container">
              <div class="product-image-container">
                <img class="product-image"
                  src="${product.image}">
              </div>

              <div class="product-name limit-text-to-2-lines">
                ${product.name}
              </div>

              <div class="product-rating-container">
                <img class="product-rating-stars"
                  src="images/ratings/rating-${product.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                  ${product.rating.count}
                </div>
              </div>

              <div class="product-price">
                ₹ ${(parseInt(product.price)).toLocaleString('en-IN')}
              </div>

              <div class="product-quantity-container">
                <select class="js-quantity-select-${product.id}">
                  <option selected value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div class="product-spacer"></div>
              <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
              </div>
              <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
                Add to Cart
              </button>
            </div>`;
    });

    productGrid.innerHTML = newHTML;

    // Initialize cart quantity display on page load
    updateCartQuantity();

    // Add event listeners to Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.js-add-to-cart');
    addToCartButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            const quantitySelect = document.querySelector(`.js-quantity-select-${productId}`);
            const quantity = Number(quantitySelect.value);
            const product = products.find(p => p.id === productId);

            if (!product) {
                console.error(`Product with ID ${productId} not found`);
                return;
            }

            // Use the improved addToCart function
            addToCart(productId, product.name, quantity);

            // Update cart quantity display
            updateCartQuantity();

            // Show visual feedback
            showAddedToCartFeedback(productId);

            // Reset quantity selector to 1
            quantitySelect.value = '1';
            
            console.log(`Added ${quantity} x ${product.name} to cart`);
        });
    });
}

// Export for use in other files
export { updateCartQuantity };
// Load location from localStorage on page load


// Wait for DOM to be ready before accessing elements
document.addEventListener('DOMContentLoaded', function() {
    initializeLocationLogic();
});

function initializeLocationLogic() {
    console.log('Initializing location logic...');
    
    // Get elements with null checks
    const jsLocation = document.querySelector('.js-location'); // "Update location" button
    const closeLocation = document.querySelector('.js-close');
    const applyButton = document.querySelector('.js-apply');
    const inputLocation = document.querySelector('.js-input-location');
    const myLocationDisplay = document.querySelector('.js-my-location');
    
    // Debug: Check if elements exist
    console.log('Elements found:', {
        jsLocation: !!jsLocation,
        closeLocation: !!closeLocation,
        applyButton: !!applyButton,
        inputLocation: !!inputLocation,
        myLocationDisplay: !!myLocationDisplay
    });
    
    // Add event listener for "Update location" button
    if (jsLocation) {
        jsLocation.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent any default button behavior
            console.log('Location button clicked');
            openPopup();
        });
    } else {
        console.error('Element with class .js-location not found');
    }
    
    // Add event listener for close button
    if (closeLocation) {
        closeLocation.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Close button clicked');
            closePopup();
        });
    } else {
        console.error('Element with class .js-close not found');
    }
    
    // Handle the Apply button functionality
    if (applyButton && inputLocation) {
        applyButton.addEventListener('click', (e) => {
            e.preventDefault();
            const pincode = inputLocation.value.trim();
            console.log('Apply button clicked with pincode:', pincode);
            
            if (pincode && pincode.length === 6 && /^\d{6}$/.test(pincode)) {
                handleLocationUpdate(pincode);
                closePopup();
            } else {
                alert('Please enter a valid 6-digit pincode (numbers only)');
            }
        });
    }
    
    // Handle Enter key on input
    if (inputLocation) {
        inputLocation.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                applyButton?.click();
            }
        });
        
        // Only allow numbers in pincode input
        inputLocation.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });
    }
    
    // Load saved location on page load
    loadSavedLocation();
}

function openPopup() {
    console.log('Opening location popup...');
    const locationBox = document.querySelector(".js-location-box");
    const blurBg = document.querySelector(".js-blur-bg");
    
    if (locationBox) {
        locationBox.style.display = "grid";
        console.log('Location box displayed');
    } else {
        console.error('Element with class .js-location-box not found');
    }
    
    if (blurBg) {
        blurBg.style.display = 'block';
        console.log('Blur background displayed');
    } else {
        console.error('Element with class .js-blur-bg not found');
    }
}

function closePopup() {
    console.log('Closing location popup...');
    const locationBox = document.querySelector(".js-location-box");
    const blurBg = document.querySelector(".js-blur-bg");
    
    if (locationBox) {
        locationBox.style.display = "none";
        console.log('Location box hidden');
    } else {
        console.error('Element with class .js-location-box not found');
    }
    
    if (blurBg) {
        blurBg.style.display = 'none';
        console.log('Blur background hidden');
    } else {
        console.error('Element with class .js-blur-bg not found');
    }
}

// Handle location update
function handleLocationUpdate(pincode) {
    console.log('Updating location to:', pincode);
    
    // Store the pincode in localStorage
    try {
        localStorage.setItem('userPincode', pincode);
        console.log('Pincode saved to localStorage');
    } catch (error) {
        console.error('Failed to save pincode:', error);
    }
    
    // Update the location display in header
    const myLocationDisplay = document.querySelector('.js-my-location');
    if (myLocationDisplay) {
        myLocationDisplay.textContent = `Delivering to ${pincode}`;
        console.log('Location display updated');
    } else {
        console.warn('Location display element not found');
    }
    
    // Clear the input field
    const inputLocation = document.querySelector('.js-input-location');
    if (inputLocation) {
        inputLocation.value = '';
    }
    
    console.log(`Location successfully updated to pincode: ${pincode}`);
}

// Load saved location on page load
function loadSavedLocation() {
    try {
        const savedPincode = localStorage.getItem('userPincode');
        if (savedPincode) {
            const myLocationDisplay = document.querySelector('.js-my-location');
            if (myLocationDisplay) {
                myLocationDisplay.textContent = `Delivering to ${savedPincode}`;
                console.log('Loaded saved location:', savedPincode);
            }
        }
    } catch (error) {
        console.error('Failed to load saved location:', error);
    }
}

// Function to manually open popup (for testing or external calls)
function triggerLocationPopup() {
    openPopup();
}

// Alternative: More concise version with helper function
function safeQuerySelector(selector, action) {
    const element = document.querySelector(selector);
    if (element) {
        return action(element);
    } else {
        console.error(`Element with selector "${selector}" not found`);
        return null;
    }
}

// Using the helper function (alternative approach):
function openPopupConcise() {
    safeQuerySelector(".js-location-box", (el) => el.style.display = "grid");
    safeQuerySelector(".js-blur-bg", (el) => el.style.display = "block");
}

function closePopupConcise() {
    safeQuerySelector(".js-location-box", (el) => el.style.display = "none");
    safeQuerySelector(".js-blur-bg", (el) => el.style.display = "none");
}


