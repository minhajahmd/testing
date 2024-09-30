const products = [
    {
        id: 1,
        name: 'Velvet Chair',
        image: 'chair.jpg', // Path to product image
        description: 'Explore our stylish chair, perfect for any living space!',
        model: 'chair.glb',  // Add your 3D model path here
        poster: 'chair-poster.jpg'  // Poster image for the model-viewer
    },
    {
        id: 2,
        name: 'Wall Art',
        image: 'images/product2.jpg', // Path to product image
        description: 'Stylish wall art for your home or office.',
        model: 'models/art.glb',  // 3D model for AR
        poster: 'images/art-poster.jpg'
    },
    // Add more products as needed
];

const productList = document.getElementById('product-list');
const productDetails = document.getElementById('product-details');
const productName = document.getElementById('product-name');
const productImage = document.getElementById('product-image');
const productDescription = document.getElementById('product-description');
const arButton = document.getElementById('ar-button');
const backButton = document.getElementById('back-button');
const modelViewer = document.getElementById('model-viewer');

// Display product list dynamically
products.forEach(product => {
    const li = document.createElement('li');
    li.textContent = product.name;
    li.onclick = () => showProductDetails(product);
    productList.appendChild(li);
});

// Show product details when a product is clicked
function showProductDetails(product) {
    productName.textContent = product.name;
    productImage.src = product.image;
    productDescription.textContent = product.description;
    
    // Load AR model into model-viewer component
    modelViewer.src = product.model;
    modelViewer.poster = product.poster;

    // Show product details section and hide product list
    productDetails.classList.remove('hidden');
    productList.classList.add('hidden');
}

// Placeholder for AR button functionality (opens AR view)
arButton.onclick = () => {
    modelViewer.setAttribute("ar", true);  // Activate AR mode in model-viewer
    alert('Switching to AR view for ' + productName.textContent + '!');
};

// Back to catalog functionality
backButton.onclick = () => {
    productDetails.classList.add('hidden');
    productList.classList.remove('hidden');
};










// const products = [
//     {
//         id: 1,
//         name: 'Velvet Chair',
//         image: 'images/chair.jpg', // Path to product image
//         description: 'Explore our stylish chair, perfect for any living space!',
//     },
//     {
//         id: 2,
//         name: 'Wall Art',
//         image: 'product2.jpg', // Path to product image
//         description: 'Description of Product 2.',
//     },
//     // Add more products as needed
// ];

// const productList = document.getElementById('product-list');
// const productDetails = document.getElementById('product-details');
// const productName = document.getElementById('product-name');
// const productImage = document.getElementById('product-image');
// const productDescription = document.getElementById('product-description');
// const arButton = document.getElementById('ar-button');
// const backButton = document.getElementById('back-button');

// // Display product list
// products.forEach(product => {
//     const li = document.createElement('li');
//     li.textContent = product.name;
//     li.onclick = () => showProductDetails(product);
//     productList.appendChild(li);
// });

// // Show product details
// function showProductDetails(product) {
//     productName.textContent = product.name;
//     productImage.src = product.image;
//     productDescription.textContent = product.description;
//     productDetails.classList.remove('hidden');
//     productList.classList.add('hidden');
// }

// // AR Button functionality (placeholder)
// arButton.onclick = () => {
//     alert('AR View Coming Soon!');
// };

// // Back to catalog
// backButton.onclick = () => {
//     productDetails.classList.add('hidden');
//     productList.classList.remove('hidden');
// };
