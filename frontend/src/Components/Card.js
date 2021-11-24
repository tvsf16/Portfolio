import { useState,useEffect } from "react";
import './Card.css';

function Card() {
    const [Data,setData]= useState([]);
    const [Item]=useState([
      {name:'CardNumberOne', description:'this is just a test'},
      {name:'CardNumberTwo', description:'this is just a test'},
      {name:'CardNumberThree', description:'this is just a test'}
    ]);
  useEffect(() => {
   //   fetch("https://rickandmortyapi.com/api/character")
 // .then(response => response.json())
  //.then(data => console.log(data.name));
  //setData(data.name);
        
  },[]);

    return (
      <div className="container">
      {Item.map((el) => {
        return (
        <div className="card">
          <div className="card-content">
            <h2 className="card-title">{el.name}</h2>
            <p classNam="card-descrition">
              {el.description}hi guys today i will talk about.
            </p>
            <a href="#" className="button">Learn More</a>
          </div>
        </div>
        );})} 
      </div>
        );
}

export default Card;