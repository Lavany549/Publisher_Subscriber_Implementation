import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth,database,ref,get,child } from "./firebase";
import "./component/Home/App.css";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import {Data} from "./component/Signup/Signup";
import MainPage from "./component/mainpage/MainPage";
import Subscribe from "./component/subscribe/Subscribe.js";
import Publish from "./component/publish/Publish.js";
import New from "./component/new/new.js";
import Global from "./component/Global/Global";

//import index from "./component/index/myindex"
function App() {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  // Get the authenticated user
  console.log("From Sign up: ",`${Data}`);
  // Get a reference to the user's data in the database
  //const dbRef = database.ref('userRecords/' + user);
  useEffect(() => {
    const user = auth.currentUser;
    console.log("user:", user);
    const dbRef = ref(database);
    get(child(dbRef, `userRecords/${Data.name}` ))
  // // Retrieve the data once
      .then((snapshot) => {
        const data = snapshot.val();
        const Name = `${Data.name}`;
        const Id = `${Data.UserID}`;
        const user_name = data.username;
        const user_id = data.Id;
        console.log(user_name,user_id);
        setUserName(user_name);
        setUserId(user_id);  
        console.log("data:",data); 
        console.log("UserName:",user_name);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUserName(user.displayName);
  //     } else setUserName("");
  //   });
  // },[]);

  return (
    <div className="App">
      <Global>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home name={userName} id={userId} />} />
          <Route path="/main" element={<MainPage name={userName} id={userId} />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/new" element={<New />} />
         
        </Routes>
      </Router>
      </Global>
    </div>
  );
};
export default App;
