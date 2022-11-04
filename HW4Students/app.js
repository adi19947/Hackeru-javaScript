function Grades(mathGrade, historyGrade, englishGrade) {
    this.mathGrade = mathGrade;
    this.historyGrade = historyGrade;
    this.englishGrade = englishGrade;
}

function Student(fullName, id, phone, grades) {
    this.fullName = fullName;
    this.id = id;
    this.phone = phone;
    this.grades = grades;
}

function createArrayOfRandomStudents(numberOfRandomStudents) {
    const resultArray = [];
    for (let index = 0; index < numberOfRandomStudents; index++) {
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
        resultArray.push(tempStudent);
    }

    return resultArray;
}

let myArray = createArrayOfRandomStudents(5)
console.log(myArray);


function findMaxAvg(arrayStudent) {
    let maxAvg = 0;
    for (let index = 0; index < arrayStudent.length; index++) {
        let studentMath = arrayStudent[index].grades.mathGrade;
        let studentEnglish = arrayStudent[index].grades.englishGrade;
        let studentHistory = arrayStudent[index].grades.historyGrade;
        let studentAvg =
            studentMath * 0.5 + studentEnglish * 0.3 + studentHistory * 0.2;

        if (studentAvg > maxAvg) {
            maxAvg = studentAvg;
            bestStudent = arrayStudent[index];
        }
    }
    return bestStudent

}

//let myArray = createArrayOfRandomStudents(10);
let bestStudentInCampus = findMaxAvg(myArray);

console.log(myArray);
console.log(bestStudentInCampus);


//שאלה מס' 2
//סעיף א
function Product(productName, sku, sellPrice, buyPrice, quantity) {
    this.productName = productName;
    this.sku = sku;
    this.sellPrice = sellPrice;
    this.buyPrice = buyPrice;
    this.quantity = quantity;
    this.profitPerPiece = this.sellPrice - this.buyPrice;
    this.precentProfitPerPiece = this.profitPerPiece / this.sellPrice;

    //סעיף ב

    this.addPiece = function () {
        this.quantity = this.quantity + 1;
    };
    this.addNPieces = function (n) {
        this.quantity = this.quantity + n;
    };
    this.removePiece = function () {
        this.quantity = this.quantity - 1;
    };
}

//סעיף ג

function stockValue(arrayOfProducts) {
    let stockBuyPrice = 0;
    let stockSellPrice = 0;
    let stockProfit = 0;
    for (let index = 0; index < arrayOfProducts.length; index++) {
        stockBuyPrice +=
            arrayOfProducts[index].buyPrice * arrayOfProducts[index].quantity;
        stockSellPrice +=
            arrayOfProducts[index].sellPrice * arrayOfProducts[index].quantity;
        stockProfit +=
            arrayOfProducts[index].profitPerPiece * arrayOfProducts[index].quantity;
    }
    console.log("The buy price of stock is: " + stockBuyPrice);
    console.log("The sell price of stock is: " + stockSellPrice);
    console.log("The profit of stock is: " + stockProfit);
}

//בדיקה לסעיף ג
const arrayOfProducts = [];
arrayOfProducts[0] = new Product("banana", 158181865, 5, 2, 100);
arrayOfProducts[1] = new Product("apple", 63543, 6, 3, 20);
arrayOfProducts[2] = new Product("mango", 456456478, 15, 10, 50);
arrayOfProducts[3] = new Product("kiwi", 456456, 20, 12, 10);
arrayOfProducts[4] = new Product("coconut", 65446, 20, 11, 50);
arrayOfProducts[5] = new Product("orange", 45646, 3, 2, 40);

stockValue(arrayOfProducts);