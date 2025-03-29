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