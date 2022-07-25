import React, { useState, useEffect } from "react";
import axios from "axios";
import woodsGarden from "../assets/images/woods_garden.jpg";
import "./Main.css";

function Main(props) {
  //define a useState hook
  const [data, setData] = useState({ flower: [] });
  //use Effect executes code in block
  useEffect(() => {
    //https request with promises
    axios("http://localhost:8081/flowers").then(function (result) {
      setData(result.data);
    });
  }, []);
  console.log(data);
//goal : click on a flower using html map and display its information from the api
  let flowers = data;
  const [clickedFlowerName, setValue] = useState("");
//add useEffect but needs to wait for click
  // useEffect(() => {
  //   setValue("clicked flower")
  //   console.log(clickedFlowerName)
  // },[setValue,clickedFlowerName])
 
  // const [name, setName] = useState({flowers: []});

  let handleClick = (event) => {
    setValue(event.target.alt)
    console.log(event.target.alt)
  }
  
  return (
    <div>
      <img
        src={woodsGarden}
        alt="woods garden"
        useMap="#woodsmap"
        width="800"
        height="400"
      ></img>
      <map name="woodsmap">
        <area shape="circle" coords="75,75,75" alt = "bleeding heart" onClick={handleClick}></area>
        <area shape="circle" coords="175,75,75"  alt = "candy tuft"></area>
      </map>
      <div className="clickedFlower" >{clickedFlowerName}</div>
     
     
      <ul>
        {
        data.flower.map((clickedFlowerName) => (
          <li key={clickedFlowerName}>
            {/* Flower name: */}
            <div>
              
            </div>
            <div>Flower name: {clickedFlowerName.name}</div>
            <div>Blooms in: {clickedFlowerName.bloomtime}</div>
          </li>
          
        ))}
      </ul>
    </div>
  );
}
export default Main;
