import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";
import { database,ref,set } from "../../firebase";
import styles from "./Signup.module.css";
import { useContext } from "react";
import {Context} from "../Global/Global";
export const Data = {
  name: "",
  email: "",
  pass: "",
  UserID:"",
  pid: ""
};

function Signup() {

  const [state, setState] = useContext(Context);

  const navigate = useNavigate();
  const [values, setValues] = useState(Data);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  
  
  const handleSubmission = async() => {
    const userId = state;
    setState(state+1);
    console.log(userId);
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
   
    //const userId = push(ref(database, "userRecords")).key;
    
    try {
      await set(ref(database, `userRecords/${values.name}`), {
        username: values.name,
        email: values.email,
        password: values.pass,
        UserID: userId,
        Pid: userId
      });
      alert(`Data saved successfully! User: ${values.name}`);
    } catch (error) {
      alert("The write failed...");
    }
  
    
    // set(ref(database, `userRecords/${userId}`), {
    //   username: values.name,
    //   email: values.email,
    //   password: values.pass,
    //   UserID: userId
    // })
    // .then(() => {
    //   alert("Data saved successfully!");
    // })
    // .catch((error) => {
    //   alert("The write failed...");
    // })
    ;

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        // const Uid = res.user.uid
        // console.log("User Id:",Uid)
        const message = "User Created!";
        alert(message);
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/main", { state: { name: `${values.name}`, id:`${userId}`}});
      
      })
      
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
      
      
  };
 
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup</h1>

        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );

}

export default Signup;