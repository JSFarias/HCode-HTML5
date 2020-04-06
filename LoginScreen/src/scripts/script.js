let email = document.querySelector('[type="email"]')

function showEmail(e){    
    console.log("email: ", email.value)
}


/*const e1 = 'jhonatas@gmail.com'
e1 = 'j@gmail.com' //produz erro
console.log("e: ",e1)*/

let e2 = 'jhonatas@gmail.com'
e2 = 'j@gmail.com' //não produz erro
console.log("e: ",e2)

document.getElementById('btn-submit').addEventListener('click', e=>{
    console.log(e)
})

function mouseOnForm(e){
    console.log('onmouseenter')
}

document.querySelector('#form-login').addEventListener('mouseenter', e=>{
    console.log("mouseenter")
})

document.querySelector('#form-login').addEventListener('submit', e=>{
    e.preventDefault()   

    let email = document.querySelector('[name="email"]').value
    let password = document.querySelector('[name="password"]').value

    console.log(`aqui vai o ajax \n${e}\n${email}\n${password}`)

    let json = {
        email: email,
        password: password
    }
    console.log(json)

    let stringedJSON = JSON.stringify(json)
    console.log(stringedJSON)

    let jsonParse = JSON.parse(stringedJSON)
    console.log(jsonParse)

    //validation
    if(!json.email){
        console.log('preencha email')
    }else if(!json.password){
        console.log('preencha password')
    }else{
        console.log('sucesso')
    }
})