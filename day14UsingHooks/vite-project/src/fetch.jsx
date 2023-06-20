import React from 'react'

const Fetch = () => {
  return (
    
      formEl.addEventListener('submit',  event =>{
    event.preventDefault()
    
    if (passwordEl.value !== cpasswordEl.value) {
            alert("Password and Confirm Password do not match")
        
            return;
        };

    async function postData(){
    
        let data = {
            firstName: fName.value,
            lastName: lName.value,
            email: emailEl.value,
            password: passwordEl.value,
            cpassword: cpasswordEl.value
        };
    
    try{
    const response = await fetch('https://rest-api-bjno.onrender.com/register',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },

        body: JSON.stringify(data)
        
    })
    
    const value = await response.json();
    console.log(value)

    const {firstName, lastName} = value
    const userlistEL = document.querySelector('#userul')
    const listEl = document.createElement('.userul')
    console.log(firstName, lastName)
    listEl.textContent = `Full Name: ${firstName} ${lastName}`
    userlistEL.appendChild(listEl)

    } catch{
        (err) => console.log('Error')
    }

}
})

  )
}

export default Fetch