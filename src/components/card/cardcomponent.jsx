import React from "react";
import "./card.styles.css"

const Card =({SingleName})=>{
        const{id,name,email}=SingleName;
        return (
            <div className="col">
            <div className="card">
            <div className="text-center">
            <img src={`images/${id}.png`} alt={`names-img  ${name}`} width="150px" height="150px"/>
            </div>
            <div className="card-body">
            <h3 className="card-title">{name}</h3> 
            <p className="card-text">{email}</p> 
            </div> 
            </div>    
            </div>
        );
}

export default Card;