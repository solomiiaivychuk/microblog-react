import React from 'react';

const ErrorMessage = (props) => {
  return ( 
    <div>
      <span>{props.errorMessage}</span>
    </div>
   );
}
 
export default ErrorMessage;