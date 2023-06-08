const formEl =  document.querySelector('.main')
const firstNameEL = document.querySelector('.startName')
const lastNameEL = document.querySelector('.endName')
const emailEL = document.querySelector('.email')

const passwordEL = document.querySelector('.password')
const confirmEL = document.querySelector('.confirm')

formEl.addEventListener('submit', function(event) {
event.preventDefault(); 

async function tPut(){
    let formData = {
        firstName: firstNameEL.value,
        lastName: lastNameEL.value,
        email: emailEL.value,
        password: passwordEL.value,
        confirm: confirmEL.value
        };
        try{
            const toGet = await fetch('https://rest-api-bjno.onrender.com/register', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
                })
                const value = await toGet.json();
                console.log(value)
                const {firstName,lastName}=value;
                const userlistEL = document.querySelector('ul')
                const listEl = document.createElement('li')
                console.log(firstName,lastName)
             listEl.textContent = `Full Name: ${firstName} ${lastName}`
             userlistEL.appendChild(listEl)
        }
        catch{
        (error) => console.log("404 Error")
        }
}
     tPut();
})

