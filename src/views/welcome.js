import {initRouter, next} from "../router/router.js"

import {loginWithGoogle} from "../firebase/auth.js"




const Welcome = () => {

    const template = //html
    `   <header class="hd">
    <img src= "./img/logofon.png" alt="logo" class="logo1">
    </header>
    <section class="sct">
     <div class="fcenter">
        <h1 class="title">Te damos la bienvenida a la primera red social de creadores y fans.
         </h1>
        <div>
         <button  class="btn" id="start">Iniciar Sesión</button>
        </div>
        <div class="btn1">
         <button class="aut_btn" id="bg" >Autenticar con Google</button>
        </div>
        <h2 class="sbtitle">¿No tienes una cuenta? <a href="#" id="reg">Regístrate</a> 
        </h2></div>
    </section>
    `
    
    const container = document.createElement('div')
    container.innerHTML = template

   let btn = container.querySelector("#start");
    btn.addEventListener('click', (e)=>{
    next("/login")
})

let btnGoogle = container.querySelector("#bg");
    btnGoogle.addEventListener('click',  async (e)=>{
       
    try{
        let result =  await loginWithGoogle()
               // next("/home")
        
    } catch (error) {
        console.error(error);
         //throw error.message
        }
    
});

let registro = container.querySelector("#reg");
registro.addEventListener('click', (e)=>{
    e.preventDefault()

next("/register")
})

    return container
      
    }
   
 export default Welcome