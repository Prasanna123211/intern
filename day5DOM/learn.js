let num1 = document.querySelector(".first");
let num2 = document.querySelector(".second");

let addb = document.querySelector(".add");
 let subb = document.querySelector(".sub");
 let multib = document.querySelector(".multi");
 let divb = document.querySelector(".div");

const additions = () =>{
       const number1 = parseInt(num1.value)
       const number2 = parseInt(num2.value)
       const sum = number1 + number2;
       // console.log(sum)
       document.querySelector('.output').value=String(sum)
}
addb.addEventListener('click',additions)

function substraction(){
    const number1 = parseInt(num1.value)
    const number2 = parseInt(num2.value)
    const diff = number1 - number2;
    // console.log(diff)
    document.querySelector('.output').value=String(diff)
}
subb.addEventListener('click', substraction)

function multiplication(){
    const number1 = parseInt(num1.value)
    const number2 = parseInt(num2.value)
    const product = number1 * number2;
   // console.log(product)
    document.querySelector('.output').value=String(product)
}
multib.addEventListener('click', multiplication)

function division(){
    const number1 = parseInt(num1.value)
    const number2 = parseInt(num2.value)
    const by = number1 / number2;
 //   console.log(by)
    document.querySelector('.output').value=String(by)
}
divb.addEventListener('click', division)

