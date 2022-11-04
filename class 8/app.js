//test-q2
const menu = { pasta: 55, pizza: 25, hamburger: 70, salad: 24, steak: 120 }
function showMenu(menu) {
    for (const key in menu) {
        console.log(key + "->" + menu[key]);
    }
}

showMenu(menu)

function avgMenu(menu) {
    let sum = 0;
    let count = 0;
    for (const key in menu) {
        sum += menu[key];
        count++;
    }
    return sum / count;
}
console.log(avgMenu(menu));

//hw-part1 q7
function Product(
    ProductName,
    categorizes,
    BuyingPrice,
    SalePrice,
    QuantityInStock
) {
    this.ProductName = ProductName;
    this.categorizes = categorizes;
    this.SalePrice = SalePrice;
    this.BuyingPrice = BuyingPrice;
    this.QuantityInStock = QuantityInStock;
    this.profitPerPiece = this.SalePrice - this.BuyingPrice;
    this.precentProfitPerPiece = this.profitPerPiece / this.SalePrice;
}
let arrayOfProducts = [];
arrayOfProducts[0] = new Product("banana", 158181865, 25, 2, 100);
arrayOfProducts[1] = new Product("apple", 63543, 60, 40, 20);
arrayOfProducts[2] = new Product("mango", 456456478, 15, 10, 50);
arrayOfProducts[3] = new Product("kiwi", 456456, 40, 50, 10);
arrayOfProducts[4] = new Product("coconut", 65446, 50, 11, 50);
arrayOfProducts[5] = new Product("orange", 45646, 3, 2, 40);


function addToSellPrice(arrayOfProducts, n) {
    for (let index = 0; index < arrayOfProducts.length; index++) {
        arrayOfProducts[index].SalePrice = arrayOfProducts[index].SalePrice + n;

    }
}

console.log(arrayOfProducts);
addToSellPrice(arrayOfProducts, 10)
console.log(arrayOfProducts);