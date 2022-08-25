import React from 'react';



function CommentCard ({commentsList, selectedSite}){
    const [currentComment, setCurrentComment] = useState([])


        (async () => {
            // DELETE request using fetch with async/await
            const element = document.querySelector('#delete-request-async-await .status');
            await fetch('http://localhost:3000/comment/:id', 
                { method: 'DELETE' });
                
                setDeleting(state => !state)

            element.innerHTML = 'Delete successful';
        })();
 
    return(
        <div id="detailed-site-info"> 

            <div>

                <div id="site-info-from-table">

                </div>

                <div id="comments">
                    {/* create cards for each comment */}
                </div>

                <div id="add-comment">

                </div>
                
            </div>

         </div>
    )

} 
export default CommentCard