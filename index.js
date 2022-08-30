var customerName = "bob";

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer(){
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
    return bestCustomer;
}

function changeLeastFavoriteCustomer(){
    const leastFavoriteCustomer = "also bob";
    leastFavoriteCustomer = "Peter";
}