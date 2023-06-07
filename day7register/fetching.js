

    const formEl =  document.querySelector('.main')
    const firstNameEL = document.querySelector('.startName')
    const lastNameEL = document.querySelector('.endName')
    const emailEL = document.querySelector('.email')
    const passwordEL = document.querySelector('.password')
    const confirmEL = document.querySelector('.confirm')

   formEl.addEventListener('submit', function(event) {
        event.preventDefault(); 

    let formData = {
      firstName: firstNameEL.value,
      lastName: lastNameEL.value,
      email: emailEL.value,
      password: passwordEL.value,
      confirm: confirmEL.value
    };
  
    fetch('https://rest-api-bjno.onrender.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((res)=>res.json()
    ).then((dat)=>
        console.log(dat)
    ).catch((error)=>console.log("Error"))
  });
  