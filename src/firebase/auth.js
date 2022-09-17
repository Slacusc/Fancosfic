


import { next } from "../router/router.js";
import { signInWithEmailAndPassword, auth,signInWithPopup, GoogleAuthProvider,getAuth, createUserWithEmailAndPassword } from "./init.js"

/*const loginWithGoogle = async ()=> {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  try {
     const result = await signInWithPopup(auth, provider)
     
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential =  GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      return user
      // ...
    }catch(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
     // const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    };
  }*/
  
const loginWithGoogle = async()=> {
const provider = new GoogleAuthProvider();
const auth = getAuth();
const result = await signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
      next("/home")
        
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}



//agregue esta funcion de register me traje el codigo de firebase
const registerNewUser =async (email,password)=> {
  const auth = getAuth();
  //createUserWithEmailAndPassword(auth, email, password)
    try {
     const userCredential= await createUserWithEmailAndPassword(auth, email, password)
      // Signed in
      const user = userCredential.user;
      return userCredential
      // ...
    }
    catch(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    };
  }
//copie de firebase código de login arriba y en el init ya esta singinwhit...
  const login = async(email, password)=> {
    const auth = getAuth();
   
      try{
        // Signed in
        
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        return user
        // ...
      }
      catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        throw new Error(errorMessage)
      }; 
    
}

/*const login = async(email, password)=> {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch(error) {
        throw error.message
    }
}*/


export { login,loginWithGoogle,registerNewUser }