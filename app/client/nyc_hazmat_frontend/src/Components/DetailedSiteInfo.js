import React from 'react'
//import bIndeed_logo from '../images/bIndeed_logo.png'



function DetailedSiteInfo ({commentsList, selectedSite}){
    const [currentComment, setCurrentComment] = useState([])


        (async () => {
            // DELETE request using fetch with async/await
            const element = document.querySelector('#delete-request-async-await .status');
            await fetch('http://localhost:3000/comments/:id', 
                { method: 'DELETE' });
            element.innerHTML = 'Delete successful';
        })();

        const comment = rooms.map((singleRoom)=><RoomCard key={singleRoom} singleRoom={singleRoom} setRoom={setRoom}/>)
 
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
export default DetailedSiteInfo