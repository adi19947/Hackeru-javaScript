const result = document.getElementById('result');

function Driver(fullName, birthDate, hour, payment) {
    this.fullName = fullName;
    this.birthDate = birthDate;
    this.hour = hour;
    this.payment = payment;

    this.printResult = function () {
        return (this.hour * this.payment);
    }
}

function getResult() {
    let name = document.getElementById('full-name').value;
    let birth = document.getElementById('birth-date').value;
    let payment = document.getElementById('payment').value;
    let hours = document.getElementById('hours').value;
    const driverDetails = new Driver(name, birth, hours, payment);
    console.log(driverDetails);
    result.innerHTML = 'Your salary: ' + driverDetails.printResult();
}

const button = document.getElementById('button').addEventListener('click', getResult);