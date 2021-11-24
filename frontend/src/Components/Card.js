import { useState,useEffect } from "react";
import './Card.css';

function Card() {
    const [Data1,setData1]= useState([]);
    const [Item]=useState([
      {name:'CardNumberOne', description:'this is just a test'},
      {name:'CardNumberTwo', description:'this is just a test'},
      {name:'CardNumberThree', description:'this is just a test'}
    ]);
  useEffect(() => {
      fetch("https://rickandmortyapi.com/api/character")
  .then(response => response.json())
  .then(data => {console.log(data.results);
    setData1(data.results);});
  },[]);

    return (
      <div className="container">
      {Data1.map((el) => {
        return (
        <div className="card" style={{backgroundImage: 'url('+el.image+')'}}>
          <div className="card-content">
            <h2 className="card-title">{el.name}</h2>
            <p className="card-descrition">
            species: {el.species}<br/>
            status: {el.status}
            </p>
            <a href={el.episode[0]} className="button">Learn More</a>
          </div>
        </div>
        );})} 
      </div>
        );
}

export default Card;