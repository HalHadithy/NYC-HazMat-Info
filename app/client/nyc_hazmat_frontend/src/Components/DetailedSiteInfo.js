// import react functionality 
import React, {useState} from 'react'
// end import react functionality 

// import components
import CommentCard from "./CommentCard"
// end import components 




function DetailedSiteInfo ({commentsList, selectedSite}){
    const [currentComment, setCurrentComment] = useState([])
          


    function handleSubmit(event){
        
        // (async () => {
        //     // create POST request using fetch with async/await
        //     const element = document.querySelector('#delete-request-async-await .status');
        //     await fetch('http://localhost:3000/comments', 
        //         {   method: 'POST',
        //             headers:  {
        //                 "Content-Type": "application/json",
        //             },
        //           body: JSON.stringify(data)
        //     });
        // })();
    }
       
       

        const comment = commentsList.map((comment)=><CommentCard key={comment.id} comment={comment} handleEdit={handleEdit}/>)
 
    return(
        <div id="detailed-site-info"> 

            <div>

                <div id="site-info-from-table">

                </div>

                <div id="comments">
                    {comment}
                </div>

                <div id="add-comment">

                    <form onSubmit={handleSubmit}>
                        <input type="text" id="add-comment-input" placeholder="Add your new comment here"/>
                        <input type="submit"/>
                    </form>


                </div>
                
            </div>

         </div>
    )

}
export default DetailedSiteInfo

