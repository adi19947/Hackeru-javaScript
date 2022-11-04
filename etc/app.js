const Mylist = document.querySelector(".myList");
for (let index = 0; index < 30; index++) {
    let myObj = document.createElement("li");
    myObj.innerText = "Student " + index;
    Mylist.appendChild(myObj);
}