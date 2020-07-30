import React from 'react';

const Loader = () => {
  return ( 
    <div className="loader-wrapper">
      <span className="loader-message">Loading the tweets from the server. Please wait...</span>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
   );
}
 
export default Loader;