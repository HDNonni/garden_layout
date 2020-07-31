import React, { useState, useEffect } from "react";
import axios from "axios";

function Main() {
    //define a useState hook
  const [data, setData] = useState({ flowers: [] });
//use Effect executes code in block 
  useEffect(() => {
      //https request with promises
    axios("http://localhost:3000/list").then(function (result) {
      setData(result.data);
    });
  }, []);
  return (
    <div>
        {/* rendering an array of items */}
      {data.flowers.map(item => (
        <p >
          {item.name} 
        </p>
       ) )}
      <ul>

        <li>Black-eye Susan</li>
        <li>Echinechea</li>
        <li>Lilac</li>
        <li>Phlox</li>
        <li>Lilies</li>
      </ul>
    </div>
  );
}
export default Main;
