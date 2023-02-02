import React, { useState } from "react";
//import { useHistory } from "react-router-dom";
import "../styles/Login.css";

 const Login = () => {
   const [emailAddress, setEmailAddress] = useState("");
   const [password, setPassword] = useState("");
    const [msg, setMsg] = useState(null);


    const handleSubmit = async (e) => {
      e.preventDefault();
      try {


           console.log("here inside try block");
           console.log({emailAddress} != "");
             const response = await fetch(`http://localhost:8080/api/v1/users/email/${emailAddress}`, {
               method: "GET",
             });

                const user = await response.json();
                        if (user.password =! "" && user.password !== password) {
                        //window.alert("Password does not match!");
                        window.alert("Incorrect password, please try again!");
                        window.location.href = "/";
                        return;
                         }
             if({emailAddress} == "" || {password} == "") {
             window.alert("Email or Password is empty");
                                      window.location.href = "/";
                                      return;

             }

             if (!response.ok) {
                          //setMsg('You do not have a user account, Please sign up');
                          //window.location.href = "/reports";
                          window.alert("You do not have a user account, Please sign up!");
                          window.location.href = "/signup";
                          return;

                          }




             console.log("Login successful");
             window.location.href = "/notifications";

             // history.push("/reports");
               } catch (error) {

               window.alert("You are new user, please sign up!");
                window.location.href = "/signup";
                 console.error(error);
               }

    };
   return (
     <form onSubmit={handleSubmit}>
     <div>
     <h1>User Login</h1>
     <div>
       <label htmlFor="emailAddress">
         &nbsp;&nbsp; Email address:
         &nbsp;&nbsp;&nbsp;
         <input
           type="email"
           id="emailAddress"
           value={emailAddress}
           onChange={(e) => setEmailAddress(e.target.value)}
         />
       </label>
       </div>
       <div>
       <label htmlFor="password">
         &nbsp;&nbsp; Password:
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <input
           type="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
         />
       </label>
       </div>
       <div>
       <table>
       <tr>&nbsp;&nbsp; <button type="submit"> Login</button></tr>
       <br />
       <tr><u> Forgot Password?</u></tr>
       </table>
        </div>
        <div>

       <label> &nbsp;&nbsp; don't have an account &nbsp;&nbsp;
       </label> <button type="submit"> SignUp</button>
       </div>
       </div>
     </form>
   );
 };

 export default Login;