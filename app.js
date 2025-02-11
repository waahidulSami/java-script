// JavaScript if-else condition
const mytext = document.getElementById("mytext");
const mybtn = document.getElementById("mybtn");
const result = document.getElementById("result");
let age;

mybtn.onclick = function() {
    age = mytext.value;
    age = Number(age);
    if (age >= 18) {
        result.textContent = "You are old";
    } else {
        result.textContent = "You are young";
    }
};




