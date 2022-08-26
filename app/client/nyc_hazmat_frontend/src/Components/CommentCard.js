// import react functionality 
import React, {useState} from 'react'
// end import react functionality 
import {BsTrash, BsPencil} from 'react-icons/bs'


function CommentCard ({comment, setCurrentComment}) {
    setCurrentComment(comment.id)

    const handleDelete = async () => {
        // DELETE request using fetch with async/await
        const element = document.querySelector('#delete-request-async-await .status');
        await fetch(`http://localhost:3000/comments/${comment.id}`, 
            { method: 'DELETE' });
    }

    const handleEdit = async (event) =>{
        // PATCH request using fetch with async/await
        await fetch(`http://localhost:3000/comments/${comment.id}`, 
        { method: 'PATCH',
        body: JSON.stringify({
            comment_content: event.target.value
        })
      })
    }

    //how are we going to do the edit?????
    

    return(
        <div class="comment-card"> 


            <div class="comment_content">
                {comment.comment_content}
            </div>
            <div class="delete-icon" onClick={handleDelete}><BsTrash /></div>
            <div class="edit-icon" onClick={handleEdit}><BsPencil /></div>
        
        </div>
    )

} 
export default CommentCard