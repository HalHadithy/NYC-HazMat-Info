// import style sheets
import "./App.css"
  //import "./style/cart-container.css"
// end import style sheets

// import react functionality 
import {Routes, Route } from "react-router-dom"
import React, {useState} from 'react'
// end import react functionality 


function App() {
//testing


const [mapData, setMapData] = useState([])
const [commentsList, setCommentsList] = useState([])



const [selectedSite, setSelectedSite] = useState({})

const [deleting, setDeleting] = useState(true)

//retrieve data from backend Map table  setMapData(data)
useEffect(() => {
  // console.log("useEffect is starting")
  fetch(`http://localhost:3000/map_data`)
  .then(response => response.json())
  .then((data) => setMapData(data))
},[deleting])
//put deleting here to trigger the useEffect every time you change the delete state


//retrieve from backend Comments table  setCommentsList(data)
useEffect(() => {
  // console.log("useEffect is starting")
  fetch(`http://localhost:3000/comments`)
  .then(response => response.json())
  .then((data) => setCommentsList(data))
},[])



  return (
     <div>
          <Header/>
            <Routes >        
              <Route path="/" element={<MapView 
                mapData={mapData}
                setSelectedSite={setSelectedSite}
              />}/>

              <Route path="/detailed_site_info" element={<DetailedSiteInfo
                commentsList ={commentsList}
                selectedSite={selectedSite}
              />}/>


              <Route path="*" element={<FourOhFour/>}/>

            </Routes>
        </div>
    
  );
}

export default App;
