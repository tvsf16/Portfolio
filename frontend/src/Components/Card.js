import { useState } from "react";
import './Card.css';

function Card() {
    const [Arr, setArr] = useState([]);
    const [Text, setText] = useState({ Title: "", Description: "" });
   const[DarkMode, setDarkMode]= useState();
    return (<div style={{height:"100vh", backgroundColor:DarkMode}}>
        <div className="header">    
        <h1>Myblogs</h1>
        <button onClick={()=>{
            if(DarkMode!="grey")
            setDarkMode("grey");
            else
            setDarkMode("white");
        }} >DarkMode</button>
        </div>
        <form onSubmit={(i) =>{
            i.preventDefault();
            setArr([...Arr, {Title:Text.Title,Description:Text.Description}]);
            }}
        >
            
                
            <input value={Text.Title} type="text" placeholder="Enter Title" 
            onChange={e=>setText({...Text, Title:e.target.value})} name="Title"/>

            <input value={Text.Description} type="text" placeholder="Enter Description" 
            onChange={e=>setText({...Text, Description:e.target.value})} name="Description"/>  

            <button type="submit">Add</button>
        </form><div className="container">
            {Arr.map((e)=> {
                return( <div className="card">
                        <div className="card__body">
                            <h2 className="card__title">{e.Title}</h2>
                            <p className="card__description">{e.Description}</p>
                        </div>
                        </div>);
            })}
        </div>
        </div>
        );
}

export default Card;