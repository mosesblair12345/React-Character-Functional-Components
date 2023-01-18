import React, { useEffect, useState } from "react";
import CardList from "./components/cardlist/cardlist.component";
import SearchBar from "./components/searchbar/searchbar.component";
import "./App.css"
import names from "./names";

const App =()=>{
    const [searchField,setSearchField]= useState("");
    const [filteredNames, setFilteredNames]=useState(names);

    const searchChange=(event)=>{
            setSearchField( event.target.value.toLocaleLowerCase())   
        }
    useEffect(()=>{
        const newFilteredNames= names.filter((filteredName)=>{
            return filteredName.name.toLocaleLowerCase().includes(searchField);
     })
     setFilteredNames(newFilteredNames);
    },[searchField])    
    
    return(
        <div>
          <h1 className="App-heading">Character Traits By Moses</h1>  
          <SearchBar onChangeHandler={searchChange} placeholder="Search Characters" />
          <CardList names={filteredNames}/>
        </div>
      )
}

export default App;