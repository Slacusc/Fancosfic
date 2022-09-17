
import {login} from '../firebase/auth.js'//active este import q viene del export de auth

/*import { navigate} from '../router/router.js'*/

import {next} from "../router/router.js"

const Login = () => {

const template = // html

` 
<header class="hd">
<img src= "./img/logofon.png" alt="logo" class="logo1">
</header>
      <main class="login_view">
       <section class="sct">
        <form id="login-form" class="login_form">
        <h1> Login </h1>
        <div class="login_input-row">
         <label for="email"> </label>
        <input class="email2" id="email" type="text" placeholder ="Ingresa tu correo">
    </div>
    <div class="login__input-row">
    <label for="pass"></label>
    <input class="email2" id="pass" type="password" placeholder="Ingresa tu contraseña">
    </div>
    <div class="login_input-row login input row centered">
        <button class="btn_login_btn-primary" type="submit" id="login">Ingresar</button>
    </div>
    <small id="error-msg"></small>
   </form>
  </section>
</main>
`
const container = document.createElement('div')
container.innerHTML = template;
const form = container.querySelector('#login-form')
//asi funciona la ruta
/*form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const email = container.querySelector('#email').value
    const pass = container.querySelector('#pass').value
    const msg = container.querySelector('#error-msg')

    if(!email || !pass) return
})
let btn = container.querySelector(".btn_login_btn-primary");
    btn.addEventListener('click', (e)=>{
    next("/home")
//})
   // return container
  
//}*/
//el intento: deja pasar al home sin verificar
form.addEventListener('submit', async (e)=> {
    e.preventDefault()

    const email = container.querySelector('#email').value
    const password = container.querySelector('#pass').value
    const msg = container.querySelector('#error-msg')
    if(!email || !pass) return
    try{
        let result = await login(email, password)
        alert('usuario autorizado')
        next("/home")
    } catch (error) {
        console.error(error);
         //throw error.message
        }
   
});
    return container
  
}


//esta es la que hice igual a lo q me sugirio mauro para register debo chequear como conectarla aqui pero no hace nada
/*form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const email = container.querySelector('#email').value
    const password = container.querySelector('#pass').value
    const msg = container.querySelector('#error-msg')
    if(!email || !pass) return
    const login = async(email, password)=> {
        try {
            await login(email, password)
            next("/home")
        } catch(error) {
            throw error.message
        }
        console.log(login)
    }
});
    return container
  
}*/


export default Login