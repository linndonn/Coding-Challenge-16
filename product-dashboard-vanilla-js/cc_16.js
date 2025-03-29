//Task 2 - Fetch Products With


function fetchProductsThen() {
    // This function fetches product data from a given API.
     fetch('https://www.course-api.com/javascript-store-products')
        .then(response => {
            if (!response.ok) {
                // If the response is not right, produce an error
                throw new Error('Failed to fetch');
            }
            return response.json();
        })
        .then(products => { 
            // Loop through the products and log the name of each product
            products.forEach(product => {  
                console.log(product.fields.name); 
            });
        })
        .catch(error => {  
            console.error('A problem occured while fetching:', error); 
        });
    }


    //Task 3: Fetch Products with async/await

    // Fetches product data from a given API using async/await.
    async function fetchProductsAsync() {
        // Fetches product data from a given API.
  try {
    const response = await fetch("https://www.course-api.com/javascript-store-products");
    // Check if the response is ok.
    if (!response.ok) {
        // If the response is not right, produce an error
      throw new Error("Failed to fetch");
    }
    const products = await response.json();
    // Loop through the products and log the name of each product
    displayProducts(products);
} catch (error) {
    handleError(error);
}}
//Develop the helper function to render products to the page
function displayProducts(products) {  
    products.forEach(product => { 
        const productElement = document.createElement('div'); 
        productElement.classList.add('product'); 
        productElement.textContent = `${product.fields.name} - $${product.fields.price}`;  
    });
}


//Task 4: Display the Products
//Write a function displayProducts(products) that selects #product-container.
function displayProducts(products) {
    const productContainer = document.querySelector('#product-container');
     // Display only the first 5 products
    const productList = products.slice(0,5);
// Create a product card for each product
    productList.forEach(product => {
        const productCard = document.createElement('div') 
        productCard.className = 'product-card';
//Creates HTML elements to show each product’s name
        const name = document.createElement('h3'); 
        name.textContent = product.fields.name; 
        name.className = 'product-name'
//Creates HTML elements to show each product’s price
        const price = document.createElement('p'); 
        price.textContent = `$${product.fields.price}`; 
        price.className = 'product-price'; 
//Creates HTML elements to show each product’s image
        const image = document.createElement('img');
        image.src = product.fields.image[0].url;
        image.alt = product.fields.name;
        image.className = 'product-image';
//Appends them to the container.
        productCard.append(name, price, image);  // appends the elements of the product card
        productContainer.appendChild(productCard); // appends the product container
    })
}

//Task 5: Reusable Error Handler
// Create a function handleError(error) that: Logs "An error occurred: " followed by the error message.

function handleError(error) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = `An error has occurred: ${error.message}`;
}

//Task 6: Call Your Fetch Functions
//At the bottom of your cc_16.js, call:
fetchProductsThen();
fetchProductsAsync();