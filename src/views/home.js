// import {next} from "../router/router.js"
import {  listPost, savePost} from '../firebase/post.js'
import{auth} from '../firebase/init.js'

const Home = () => {

    const template = //html
    `           <nav>
    <ul class="menu">
      <li class="logo"><a href="#"><img href="/" ></a></li>
      <li class="item"><a class="acolor" href="#">Home</a></li>
      <li class="item"><a class="acolor" href="#">Grupos</a></li>
      <li class="item"><a class="acolor" href="#">Eventos</a></li>
      <li class="toggle"><a href="#" id="list"><i class="fas fa-bars"></i></a></li>
    </ul>                
  </nav>
  <main>
  <form class="divpost" id="postNew">
  <textarea name="post" id="post" cols="100" rows="10"></textarea>
  <button id="newPost" class="btn"> Nuevo Post</button>
  </div>
  </form>
  
  </main>
  <div id="task-container"></div>
    `
//1.- coloque un text area y le puse un botón quite la opción de redimensionar en css, lo meti en un form
//2.traje el formulario y le pedi q tome el value del text área

    const container = document.createElement('div')
    container.innerHTML = template
    

    container.querySelector('.toggle').addEventListener ('click', function(e){
     const items = document.querySelectorAll('.item');
     
      items.forEach((item)=> {
         item.classList.toggle('active')
     });
    });

   const postNew= container.querySelector('#postNew');
  postNew.addEventListener('submit', (e)=> {
      e.preventDefault()
      const textArea = container.querySelector('#post').value

      const data={
       user:'',
       content: textArea,
       userId:auth.currentUser.uid,
       like:[],
       numberLike:0,

     }
     console.log(data)
     savePost(data)
     postNew.reset()
    })

//funcion para enlistar los post en timeline    
  listPost()
    return container
}

export default Home
