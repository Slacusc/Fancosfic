
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'
import { getAuth, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import  {getFirestore, collection, getDocs,addDoc,deleteDoc,doc,onSnapshot,query,getDoc, updateDoc,arrayRemove,arrayUnion} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js'

import config from './config.js'


const inicta= initializeApp(config);
const auth = getAuth();
const db = getFirestore(inicta)

export { initializeApp, signInWithEmailAndPassword, auth,signInWithPopup, GoogleAuthProvider,getAuth, createUserWithEmailAndPassword }
export{db,collection, getDocs,addDoc,deleteDoc,doc,onSnapshot,query,getDoc, updateDoc,arrayRemove,arrayUnion}

//agregre  createUserWithEmailAndPassword en la importación y exportación del auth

//22/06 agregue el firestore e importe getFirestore,inicialice firebase pero se le pasa como parametro app q tengo desactivado en el init 