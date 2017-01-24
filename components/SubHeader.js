import React from "react";
import Flexbox from 'flexbox-react';

const SubHeader = ({ category, onChangeCategory }) => {
    
    return (
    <Flexbox justifyContent="center" className= "selected-wrapper">
      <div className= "selected-category"><h2> {category} </h2></div>
      <div className="select-options">
      <input type="text" 
        name="category_search" 
        placeholder=" -- Select Category -- " 
        onChange={(e) => onChangeCategory(e.target.value)}/>    
      </div>    
    </Flexbox>)  
}

export default SubHeader
