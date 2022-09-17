import {next} from "../router/router.js"
import {registerNewUser} from "../firebase/auth.js"
//import { async } from "regenerator-runtime"

const Register = () => {

const template = // html
`   
<header class="hd">
    <img src= "./img/logofon.png" alt="logo" class="logo1">
    </header>
<main class="register_view">
    <section class="login_card">
     <div class="register">
        
        <form id="register-form" class="sct">
        <h1 class="register_form">Regístrate</h1>
            <div class="register___input-row">
            <input id="name" type="text" placeholder="Ingresa tu usuario">
           </div>
           <div class="register___input-row">
            <input id="email" type="text" placeholder="Ingresa tu correo">
           </div>
           <div class="register____input-row">
            <input id="pass" type="password" placeholder="Ingresa tu password ">
           </div>
           <div class="btn2">
            <button class="btn_register" type="submit">Registrar</button>
           </div>
           <section class="checkbox"><input type="checkbox">
           <h5>He leído y acepto los términos y condiciones de uso</h5>
           </section>
            <small id="error-msg"></small>
        </form>
     </div>
    </section>
</main>
`

const container = document.createElement('div')
container.innerHTML = template;

const form = container.querySelector('#register-form')
form.addEventListener('submit', async (e)=> {
  e.preventDefault()
  const email = container.querySelector('#email').value
  const password = container.querySelector('#pass').value
  const msg = container.querySelector('#error-msg')
    try{
        let result = await registerNewUser(email, password)
        console.log(result)
        alert('usuario registrado')
        next("/home")
    } catch (error) {
        console.error(error);
        // throw error.message
        }
 });

    return container
 
}


    export default Register