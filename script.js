// Load Products for Catalog
const products = [
    {
        id: 1,
        name: 'Velvet Chair',
        image: 'images/chair.jpg',
        description: 'Explore our stylish chair, perfect for any living space!',
        model: 'models/chair.glb' // Path to the 3D model
    },
    {
        id: 2,
        name: 'Wall Art',
        image: 'images/wall_art.jpg',
        description: 'Elegant art to enhance your walls!',
        model: 'models/wall_art.glb'
    }
];

// Reference HTML elements
const productList = document.getElementById('product-list');
const productDetails = document.getElementById('product-details');
const productName = document.getElementById('product-name');
const productImage = document.getElementById('product-image');
const productDescription = document.getElementById('product-description');
const arButton = document.getElementById('ar-button');
const backButton = document.getElementById('back-button');

// Create product list dynamically
products.forEach(product => {
    const li = document.createElement('li');
    li.textContent = product.name;
    li.onclick = () => showProductDetails(product);
    productList.appendChild(li);
});

// Show product details
function showProductDetails(product) {
    productName.textContent = product.name;
    productImage.src = product.image;
    productDescription.textContent = product.description;
    productDetails.classList.remove('hidden');
    productList.classList.add('hidden');

    arButton.onclick = () => startAR(product.model);
}

// Back to catalog
backButton.onclick = () => {
    productDetails.classList.add('hidden');
    productList.classList.remove('hidden');
};

// Initialize WebXR AR Session
function startAR(modelUrl) {
    let scene, camera, renderer;
    let controller;

    // Set up scene
    scene = new THREE.Scene();

    // Set up camera
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20);
    scene.add(camera);

    // Set up renderer with WebXR support
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    document.body.appendChild(renderer.domElement);

    // Add AR button
    document.body.appendChild(THREE.ARButton.createButton(renderer));

    // Load the model when the AR session starts
    renderer.xr.addEventListener('sessionstart', function () {
        loadARModel(modelUrl, scene);
    });

    // Animate the scene
    function animate() {
        renderer.setAnimationLoop(render);
    }

    function render() {
        renderer.render(scene, camera);
    }

    animate();
}

// Load AR model into scene
function loadARModel(modelUrl, scene) {
    const loader = new THREE.GLTFLoader();

    loader.load(modelUrl, function (gltf) {
        const model = gltf.scene;
        model.position.set(0, 0, -2);  // Position model 2 meters away from camera
        scene.add(model);
    });
}






// const products = [
//     {
//         id: 1,
//         name: 'Velvet Chair',
//         image: 'images/chair.jpg', // Path to product image
//         description: 'Explore our stylish chair, perfect for any living space!',
//         model: 'models/chair.glb',  // Add your 3D model path here
//         poster: 'images/chair-poster.jpg'  // Poster image for the model-viewer
//     },
//     {
//         id: 2,
//         name: 'Wall Art',
//         image: 'images/product2.jpg', // Path to product image
//         description: 'Stylish wall art for your home or office.',
//         model: 'models/art.glb',  // 3D model for AR
//         poster: 'images/art-poster.jpg'
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
// const modelViewer = document.getElementById('model-viewer');

// // Display product list dynamically
// products.forEach(product => {
//     const li = document.createElement('li');
//     li.textContent = product.name;
//     li.onclick = () => showProductDetails(product);
//     productList.appendChild(li);
// });

// // Show product details when a product is clicked
// function showProductDetails(product) {
//     productName.textContent = product.name;
//     productImage.src = product.image;
//     productDescription.textContent = product.description;
    
//     // Load AR model into model-viewer component
//     modelViewer.src = product.model;
//     modelViewer.poster = product.poster;

//     // Show product details section and hide product list
//     productDetails.classList.remove('hidden');
//     productList.classList.add('hidden');
// }

// // Placeholder for AR button functionality (opens AR view)
// arButton.onclick = () => {
//     modelViewer.setAttribute("ar", true);  // Activate AR mode in model-viewer
//     alert('Switching to AR view for ' + productName.textContent + '!');
// };

// // Back to catalog functionality
// backButton.onclick = () => {
//     productDetails.classList.add('hidden');
//     productList.classList.remove('hidden');
// };










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
