import React from "react";
import Flexbox from 'flexbox-react';

const BlockResult = ({ results }) => { 
  var postsList = null;
  var counter = 0;

  if(results.length > 0){   
      postsList = results.map(function(resultData) { 
      counter = counter + 1;
      // By default odd
      var directionFlow = "row";

      // even case
       if (counter % 2 == 0) {
        var directionFlow = "row-reverse";
       }
      return ( 
          <Flexbox justifyContent="space-around" className="block-wrapper" flexDirection={directionFlow}>
            <div className = "div-item left-wrap" > 
              <img src={resultData.thumbnail}  />
            </div>
            <div className = "div-item center-wrap" >
              <p> { resultData.title } </p>
            </div>
            <div className = "div-item right-wrap" > 
              <img src="./src/to_share.png" width='50px' height='50px' />
            </div>
          </Flexbox>
        ) ;
    });
  }
  
  return ( 
    <Flexbox justifyContent="center" className="post-wrap row">
    {postsList}
    </Flexbox>)  ;
  
}


export default BlockResult
