import React from "react";
// import Flexbox from 'flexbox-react';

const ToShareEmail = ({ category }) => {
    
    return (
    <div id="mailBody">
      <table border=1> 
        <tr>
          <td>
          <p> {category} </p>
          <img src="./src/to_share.png" width='50px' height='50px' />
          </td>
        </tr> 
      </table>
    </div>
    )  
}

export default ToShareEmail


