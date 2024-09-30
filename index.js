// Write your solution in this file!
// 1. Global variable customerName
var customerName = 'bob';

// 2. upperCaseCustomerName function
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 3. setBestCustomer function
function setBestCustomer() {
    bestCustomer = 'not bob'; // Declares bestCustomer in global scope
}

// 4. overwriteBestCustomer function
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // Modifies the global variable bestCustomer
}

// 5. leastFavoriteCustomer constant and changeLeastFavoriteCustomer function

const leastFavoriteCustomer = 'none'
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'me';
}
console.log(changeLeastFavoriteCustomer)()
