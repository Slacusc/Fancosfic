
import {db,deleteDoc,doc,getDoc, updateDoc,auth,arrayRemove,arrayUnion} from  './init.js'

const saveUserName = async (data)=> {
  try {
      const docRef = await addDoc(collection(db, "user"),dataUser)// data con nombre de usuario y uid
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

/*const saveLike = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "post","like"), data)
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}*/
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
const editPost = async (id,content)=>{

const postRef = doc(db, "post", id);

//Set the "content" field of the 'post'.
await updateDoc(postRef, {
  content: content,
});
}
 
const likePost = async (id, userId)=>{
  const postRef = doc(db,'post',id);
  const docLike = await getDoc(postRef);
  const dataLike = docLike.data();
  const likesCount = dataLike.numberLike;
  console.log(likesCount)
  if((dataLike.like).includes(userId)){
   await updateDoc(postRef,{
like:arrayRemove(userId),
numberLike: likesCount  -1,
   });
  }else{
    await updateDoc(postRef,{
     like:arrayUnion(userId),
     numberLike: likesCount  +1,
    });
  }
 }



 /*const addLike = async (id) =>{
  const postRef = doc(db, "post", id);

  //Set the "content" field of the 'post'.
  await updateDoc(postRef, {
    like: [...postRef.like, auth.currentUser.uid]
  });
 }*/
 export {deletePost, postByEdit,editPost,likePost}
  