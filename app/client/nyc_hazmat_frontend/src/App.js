// import react functionality 
import {BrowserRouter, Routes, Route } from "react-router-dom"
import React, {useState, useEffect} from 'react'
// end import react functionality 

// import style sheets
import "./App.css"
// end import style sheets

// import components
import Header from "./Components/Header"
import MapView from "./Components/MapView"
import DetailedSiteInfo from "./Components/DetailedSiteInfo"
import FourOhFour from "./Components/FourOhFour"

// end import components 




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
},[])
//put deleting here to trigger the useEffect every time you change the delete state


//retrieve from backend Comments table  setCommentsList(data)
useEffect(() => {
  // console.log("useEffect is starting")
  fetch(`http://localhost:3000/comments`)
  .then(response => response.json())
  .then((data) => setCommentsList(data))
},[deleting])



  return (
     <div>
          <BrowserRouter>

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

            </BrowserRouter>

        </div>
    
  );
}

export default App;
