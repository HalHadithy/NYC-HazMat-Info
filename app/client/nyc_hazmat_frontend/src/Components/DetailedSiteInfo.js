// import react functionality 
import React, {useState} from 'react'
// end import react functionality 

// import components
import CommentCard from "./CommentCard"
// end import components 




function DetailedSiteInfo ({commentsList, selectedSite}){
    const [currentComment, setCurrentComment] = useState([])
          


    const handleSubmit = async(event)=>{
        // create POST request using fetch with async/await
        event.preventDefault();
        await fetch('http://localhost:3000/comments', 
            {   method: 'POST',
                headers:  {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    comment_content: event.target.value,
                })
        });
    }
       
       

        const comment = commentsList.map((comment)=><CommentCard key={comment.id} comment={comment} setCurrentComment={setCurrentComment}/>)
 
    return(
        <div id="detailed-site-info"> 

            <div>

                <div id="site-info-from-table">
                    hello
                </div>

                <div id="comments">
                    comments
                    {comment}
                </div>

                <div id="add-comment">

                    <form onSubmit={handleSubmit}>
                        <input type="text" id="add-comment-input" placeholder="Add your new comment here"/>
                        <input type="submit" id="submit-button"/>
                    </form>


                </div>
                
            </div>

         </div>
    )

}
export default DetailedSiteInfo

