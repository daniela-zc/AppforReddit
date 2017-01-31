import React from "react";
import Flexbox from 'flexbox-react';

const SubHeader = ({ category, onChangeCategory }) => {
    
    return (
    <div className= "selected-wrapper-one">
    <Flexbox justifyContent="space-between" className= "selected-wrapper">
      <div className= "selected-category"><h2> {category} </h2></div>
      <div className="select-options">
      <input type="text" 
        name="category_search" 
        placeholder=" -- Select Category -- " 
        onChange={(e) => onChangeCategory(e.target.value)}/>    
      </div>    
    </Flexbox>
    </div>)  
}

export default SubHeader
