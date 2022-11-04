
function MyDateObject(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
}

function Test(TestName, TestDate) {
    this.TestName = TestName;
    this.TestDate = TestDate;
}


const arrayOfTests = [
    { testName: "Math1", TestDate: new MyDateObject(2022, 10, 3) },
    { testName: "Math2", TestDate: new MyDateObject(2022, 11, 21) },
    { testName: "Math3", TestDate: new MyDateObject(2022, 01, 11) },
    { testName: "Electricity1", TestDate: new MyDateObject(2022, 3, 3) },
    { testName: "Electricity2", TestDate: new MyDateObject(2022, 10, 11) },
    { testName: "Electricity3", TestDate: new MyDateObject(2022, 10, 20) },
    { testName: "Electricity4", TestDate: new MyDateObject(2022, 5, 3) },
    { testName: "History1", TestDate: new MyDateObject(2022, 8, 23) },
    { testName: "History2", TestDate: new MyDateObject(2022, 10, 8) },
    { testName: "History3", TestDate: new MyDateObject(2022, 7, 12) },
    { testName: "Art1", TestDate: new MyDateObject(2022, 10, 29) },
    { testName: "Art2", TestDate: new MyDateObject(2022, 4, 5) },
    { testName: "Art3", TestDate: new MyDateObject(2022, 10, 14) },
];

function howManyTestsInOctober(arrayOfTests) {
    let counter = 0;
    for (let i = 0; i < arrayOfTests.length; i++) {
        if (arrayOfTests[i].TestDate.month == 10) {
            counter++;
        }
    }
    console.log(counter);
}

function isItSame(t, d) {
    if (d.year == t.TestDate.year && d.month == t.TestDate.month && d.day == t.TestDate.day) {
        return true;
    }
    else {
        return false;
    }
}

let myTest =

    howManyTestsInOctober(arrayOfTests)