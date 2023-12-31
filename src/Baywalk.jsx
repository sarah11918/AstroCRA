import React from "react"
import { useState } from "react"
import Container from "./Container.jsx"
import BaywalkBirdList from "./BaywalkBirdList.jsx"

export default function Baywalk() {
    const [baywalkBirds, setBaywalkBirds] = useState([])
    const [location, setLocation] = useState("L7359880")


    function changeLocation(event){
      event.preventDefault()
      setLocation(event.target.elements.location.value)
    }
    
    
    async function getSightings() {
      const myHeaders = new Headers();
      myHeaders.append("X-eBirdApiToken", "2ifbkhv7g8ct");

      const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      };

      
      const response = await fetch(`https://api.ebird.org/v2/product/spplist/${location}`, requestOptions);
      const data = await response.json();
      
      setBaywalkBirds(data)
    }
  return (
    <Container>
      <h1>All birds seen at {location}</h1>

      <form onSubmit={changeLocation}>
        <input name="location" type="text" placeholder="eg. CA-PE-PR / L7359880"/>
        <button> Set Location </button>
      </form>
      
      <button onClick={getSightings}>... and then get the list of birds</button>
    
     <BaywalkBirdList birdList={baywalkBirds} />
    </Container>
  )
}
