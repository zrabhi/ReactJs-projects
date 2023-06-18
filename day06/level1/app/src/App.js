import React from "react";
import "./App.css";
import data from "./data/ten_most_highest_populations.js";




class PopulationGroup extends React.Component
{
  // constructor(props){
  //   super(props)
  // };

  PopulationGroups(){
   
    this.props.Countries.forEach(element => {
      if (element.country === "United States of America")
          element.country = "USA";
      else if (element.country === "Russian Federation")
          element.country = "RUSSIA"
      console.log(element);
   });
   
  };
  render(){
     this.PopulationGroups(); 
      const list = this.props.Countries.map((country) => (
        
     <div className="Countries">
           <h3 key={country}>{country.country.toUpperCase()} </h3>
           <div className="Wrapper">
           <div className={country.country} style={
             {
               width: (country.population * 100 / 7693165599) +"%"
             }
           }></div>
           </div>
           <h3>{country.population}</h3>
         </div>
       ));
       return list;

    }
    
}


class App extends React.Component
{
  // constructor(props)
  // {
  //   super(props);
  // }
  render()
  {
    return (
      <div className="App">
        <h1>30 Days Of React</h1>
        <h2>World population</h2>
        <h4>ten most populated countries</h4>
        <PopulationGroup Countries={data} />
      </div>
    );

  } 


} 
export default App;
