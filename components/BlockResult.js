import React from "react";
import Flexbox from 'flexbox-react';

const BlockResult = ({ results, onSendPost }) => { 
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
          <Flexbox key={resultData.url} justifyContent="space-around" className="block-wrapper" flexDirection={directionFlow}>
            <div className = "div-item left-wrap" > 
              <img src={resultData.thumbnail}  />
            </div>
            <div className = "div-item center-wrap" >
              <p> { resultData.title } </p>
            </div>
            <div className = "div-item right-wrap" > 
              <a href="#" onClick={() => onSendPost(resultData)}>
                <img src="./src/to_share.png" width='50px' height='50px' />
              </a>
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
