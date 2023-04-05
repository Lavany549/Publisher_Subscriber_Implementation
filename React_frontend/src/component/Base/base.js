import React from "react";
import { useLocation } from "react-router-dom";


function BasePage(props) {

  const user = useLocation();
  //console.log(user.state.name);
  
  return (
    <div>
      <h1>Welcome to your home page: {user.state.name} </h1>
      <p>Your user ID is: {user.state.id}</p>
    </div>
  );
}

export default BasePage;
