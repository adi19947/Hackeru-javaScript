//part A
//number 1
function Product(productName, sku, buyPrice, sellPrice, quantity) {
    this.productName = productName;
    this.sku = sku;
    this.buyPrice = buyPrice;
    this.sellPrice = sellPrice;
    this.quantity = quantity;
    //this.profitPerPiece = this.sellPrice - this.buyPrice;
}

//number 2
const products = [];
function randomProducts(arrayOfProducts) {

    for (let index = 0; index < arrayOfProducts; index++) {
        let tempProduct = new Product(
            index,
            Math.floor(Math.random() * 100000000 + 1),
            Math.floor(Math.random() * 100 + 1),
            generateRandom(),
            Math.floor(Math.random() * 200 + 1)
        )

        products.push(tempProduct);

    }

    return products
}
let myArray = randomProducts(5);
console.log(myArray);

function generateRandom(min = 100, max = 200) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor(rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

//number 3
let stockBuyPrice = 0;
function buyPriceStockValue(arrayOfProducts) {

    for (let index = 0; index < arrayOfProducts.length; index++) {
        stockBuyPrice += arrayOfProducts[index].buyPrice * arrayOfProducts[index].quantity;
    }

    console.log(stockBuyPrice);
}

buyPriceStockValue(products);


//number 4
let stockSellPrice = 0;
function sellPriceStockValue(arrayOfProducts) {

    for (let index = 0; index < arrayOfProducts.length; index++) {
        stockSellPrice += arrayOfProducts[index].sellPrice * arrayOfProducts[index].quantity;
    }

    console.log(stockSellPrice);
}
sellPriceStockValue(products);

//number 5
let profitValue = 0;
function profit(arrayOfProducts) {
    for (let index = 0; index < arrayOfProducts.length; index++) {
        profitValue += arrayOfProducts[index].sellPrice - arrayOfProducts[index].buyPrice;
    }
    console.log(profitValue);
}

profit(products);



//number 6 להגיע לפתרון
let profitBiggerThen20 = products.filter(profitBiggerThen20Percent);
function profitBiggerThen20Percent(num) {
    return num.profitPerPiece - num.buyPrice * 100 / 20
}

console.log(profitBiggerThen20);



//number 7 לבדוק תקינות
let randomNumber = Math.floor(Math.random() * 50 + 1)
function addRandomNumberToSell(product, n = randomNumber) {
    for (let index = 0; index < product.length; index++) {
        product[index].sellPrice + n;
    }
    console.log(product);
}
addRandomNumberToSell(products);

//number 8
const product1 = ["Hello", "cow", "tuna", "Avi", "roni", "Adi"];
let onlyStartWithA = product1.filter(startWithA);
function startWithA(word) {
    return word.startsWith("A");
}
console.log(onlyStartWithA);

//number 9

let counter = 0;
function productsAbove20(product) {
    for (let index = 0; index < product.length; index++) {
        if (product[index].buyPrice > 20 || product[index].sellPrice > 20) {
            counter++;
        }

    }
    console.log(counter);

}
productsAbove20(products);




//part B

//number 1
const menu = {
    pasta: 55,
    pizza: 25,
    Burger: 70,
    chicken: 20,
    bazilikum: 10
}

function printMenu(menu) {
    for (const key in menu) {
        console.log(`${key}:${menu[key]}`);
    }
}


printMenu(menu);

//number 2
let startsWithB = Object.keys(menu).filter((key) => key.startsWith("b") || key.startsWith("B"));
console.log(startsWithB);

//number 3 
const findHighest = obj => {
    const values = Object.values(obj);
    const max = Math.max.apply(Math, values);
    for (key in obj) {
        if (obj[key] === max) {
            return {
                [key]: max
            };
        };
    };
};
console.log(findHighest(menu))

//number 4

const objValues = Object.values(menu)
const average = objValues.reduce((a, b) => a + b, 0) / objValues.length;
console.log(average);

//number 5
const arrayOfMenus = [
    {
        meat: 45,
        salmon: 10,
        burger: 67,
        fish: 20
    }, {
        tuna: 6,
        beef: 8,
        lamb: 0,
        iceCream: 100000000
    },
    {
        pizza: 87,
        bread: 5,
        chicken: 15,
        pasta: 45
    },

]

const getMenuAverage = (menu) => {
    const objectValues = Object.values(menu)
    return objectValues.reduce((a, b) => a + b, 0) / objectValues.length
}

const cheapMenu = arrayOfMenus.reduce((prev, curr) => {
    const prevAverage = getMenuAverage(prev)
    const currAverage = getMenuAverage(curr)

    if (prevAverage <= currAverage) return prev
    else return curr
}, arrayOfMenus[0])

console.log(cheapMenu)

// for (let index = 0; index < arrayOfMenus.length; index++) {
//     const ObjectValue = Object.values(arrayOfMenus[index])
//     let average2 = ObjectValue.reduce((a, b) => a + b, 0) / ObjectValue.length
//     console.log(average2);



//part c

//number 1


// let number = "-8976605235";

// function numberValidation() {
//     number = number.split('')

//     for (let index = 0; index < number.length; index++) {
//         if (number[index] === "-") {
//             number[index] = ''

//         }

//     }




//     if (number[0] == !"+972") {

//         number.unshift("+972");
//     }

//     number = number.join('')

// }
// numberValidation()


// number = number.split('').filter(getNumber).join('')
// function getNumber(number) {
//     let parseNumber = number;
//     if (parseNumber === "0") {
//         parseNumber = parseNumber.replace(/-/g, "");
//     } else { return parseNumber }
//     if (parseNumber === "0") {
//         parseNumber = parseNumber.replace(/0/g, "")
//     }
//     return parseNumber;

// }

// console.log(number);

// if (parseNumber.includes("-")) {
//     parseNumber = parseNumberNumber.replace(/-/g, "")
//     return parseNumber
// }

// let lol = "23874586"
// lol = lol.split('')
// lol.shift()

//console.log(lol);


let string = "kayak";
function palindrome(str) {

    const re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }

        return true;
    }
}
console.log(palindrome(string));

function findEvenString(string) {

    if (string.length % 2 === 0) {
        return "even number"
    } if (string.length % 2 !== 0) {
        return "odd number"
    }

}


console.log(findEvenString(string));


//part D

const greenButton = document.createElement("button");
greenButton.innerHTML = "click me"
greenButton.style.backgroundColor = "green"
greenButton.style.color = "white"
window.document.body.appendChild(greenButton);

const redButton = document.createElement("button");
redButton.innerHTML = "click me"
redButton.style.backgroundColor = "red"
redButton.style.color = "white"
window.document.body.appendChild(redButton);

const container = document.createElement("div");
window.document.body.appendChild(container);


const m1 = new Product("toyota", 1111, `100,000`, `200,000`, 30);
const m2 = new Product("suzuki", 2222, `80,000`, `123,000`, 45);
//container.appendChild(m1);
//container.appendChild(m2);

greenButton.addEventListener("click", toyota)



function toyota() {
    for (const value in Object.values(m1)) {
        container.innerHTML = `${m1[value]}`
    }

}




