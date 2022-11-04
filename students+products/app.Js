function Student(fullName, id, phone, grades) {
    this.fullName = fullName;
    this.phone = phone;
    this.id = id;
    this.grades = grades;
}

function Grades(math, history, english) {
    this.math = math;
    this.history = history;
    this.english = english;

}

function createArrayOfRandomStudents(numberOfRandomStudent) {
    const arrayResult = [];
    for (let index = 0; index < numberOfRandomStudent; index++) {
        let tempGrades = new Grades(
            Math.floor(Math.random() * 100 + 1),
            Math.floor(Math.random() * 100 + 1),
            Math.floor(Math.random() * 100 + 1)
        );
        let tempStudent = new Student(
            "student " + index,
            Math.floor(Math.random() * 100000000 + 1),
            "05" + Math.floor(Math.random() * 100000000 + 1),
            tempGrades
        );

        arrayResult.push(tempStudent)

    }
    return arrayResult;
}

let myArray = createArrayOfRandomStudents(10);
console.log(myArray);


function findMaxAvg(arrayOfStudents) {
    let maxAvg = 0;
    for (let index = 0; index < arrayOfStudents.length; index++) {
        let studentMath = arrayOfStudents[index].grades.math;
        let studentEnglish = arrayOfStudents[index].grades.english;
        let studentHistory = arrayOfStudents[index].grades.history;
        let studentAvg = studentMath * 0.5 + studentEnglish * 0.3 + studentHistory * 0.2;
        if (studentAvg > maxAvg) {
            maxAvg = studentAvg;
            bestStudent = arrayOfStudents[index]
        }
    }
    return bestStudent;
}

let result = findMaxAvg(myArray)
console.log(result);

function Product(productName, sku, buyPrice, sellPrice, quantity) {
    this.productName = productName;
    this.sku = sku;
    this.buyPrice = buyPrice;
    this.sellPrice = sellPrice;
    this.quantity = quantity;
    this.profitPerPiece = this.sellPrice - this.buyPrice;
    this.presentProfitPerPiece = this.profitPerPiece / this.sellPrice;
    this.addPiece = function () {
        this.quantity + 1;
    }
    this.removePiece = function () {
        this.quantity - 1;
    }

}

function stockValue(arrayOfProducts) {
    let stockBuyPrice = 0;
    let stockSellPrice = 0;
    let profit = 0;
    let totalQuantity = 0;
    for (let index = 0; index < arrayOfProducts.length; index++) {
        stockBuyPrice += arrayOfProducts[index].buyPrice * arrayOfProducts[index].quantity;
        stockSellPrice += arrayOfProducts[index].sellPrice * arrayOfProducts[index].quantity;
        profit += arrayOfProducts[index].profitPerPiece * arrayOfProducts[index].quantity;
        totalQuantity += arrayOfProducts[index].quantity;
    }
    console.log("the buy price is " + stockBuyPrice);
    console.log("the sell price is " + stockSellPrice);
    console.log("the profit is " + profit);
    console.log('the total quantity is ' + totalQuantity);
}



const products = [];
products[0] = new Product('banana', 234565, 35, 55, 50);
products[1] = new Product('apple', 556777, 7, 32, 235);
products[2] = new Product('lichi', 34567, 78, 90, 78);
products[3] = new Product('mango', 567888, 67, 88, 45);
products[4] = new Product('avocado', 5789676, 56, 79, 32);

stockValue(products);

