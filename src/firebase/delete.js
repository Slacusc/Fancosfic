
import {db,deleteDoc,doc,getDoc} from  './init.js'



const deletePost = (id)=> {

    
    deleteDoc(doc(db,'post',id));
   
  }

const postByEdit = async (id)=>{
    const docRef = doc(db, "post", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
}
  export {deletePost, postByEdit}