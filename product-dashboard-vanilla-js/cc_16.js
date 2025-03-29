//Task 2 - Fetch Products With


function fetchProductsThen() {
    // This function fetches product data from a given API.
    return fetch('https://www.course-api.com/javascript-store-products')
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
