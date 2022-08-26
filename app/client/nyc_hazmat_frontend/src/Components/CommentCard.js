// import react functionality 
import React, {useState} from 'react'
// end import react functionality 
import {BsTrash, BsPencil} from 'react-icons/bs'


function CommentCard ({comment, handleEdit}) {
 
    const handleDelete = async () => {
        // DELETE request using fetch with async/await
        const element = document.querySelector('#delete-request-async-await .status');
        await fetch(`http://localhost:3000/comments/${comment.id}`, 
            { method: 'DELETE' });
    }

    const handleEdit = async () =>{
        // PATCH request using fetch with async/await
        await fetch(`http://localhost:3000/comments/${comment.id}`, 
        { method: 'PATCH',
        body: JSON.stringify({})
      })
    }

    //how are we going to do the edit?????
    

    return(
        <div class="comment-card"> 


            <div class="comment_content">
                {/* {comment.comment_content} */}
                for now just some text
            </div>
            <div onClick={handleDelete}><BsTrash /></div>
            {/* <img class="tash-icon" onClick={handleDelete}/> */}
            <img class="edit-icon" onClick={handleEdit}/>
            <div onClick={handleDelete}><BsTrash /></div>
            <div onClick={handleEdit}><BsPencil /></div>
        </div>
    )

} 
export default CommentCard