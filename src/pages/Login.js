import React, { useState } from "react";
//import { useHistory } from "react-router-dom";

 const Login = () => {
   const [emailAddress, setEmailAddress] = useState("");
   const [password, setPassword] = useState("");
  // const history = useHistory();

   const handleSubmit = async (event) => {
     event.preventDefault();

     try {
     console.log("here inside try block");
       const response = await fetch(`http://localhost:8080/api/v1/users/email/${emailAddress}`, {
         method: "GET",
       });

       if (!response.ok) {
         throw new Error("User not found");
       }

       const user = await response.json();
       if (user.password !== password) {
         throw new Error("Incorrect password");
       }

       console.log("Login successful");
       // history.push("/reports");
         } catch (error) {
           console.error(error);
         }
   };

   return (
     <form onSubmit={handleSubmit}>
       <label>
         &nbsp;&nbsp; Email address:
         &nbsp;&nbsp;&nbsp;
         <input
           type="email"
           value={emailAddress}
           onChange={(event) => setEmailAddress(event.target.value)}
         />
       </label>
       <br />
       <br />
       <label>
         &nbsp;&nbsp; Password:
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <input
           type="password"
           value={password}
           onChange={(event) => setPassword(event.target.value)}
         />
       </label>
       <br />
       <br />

       &nbsp;&nbsp; <button type="submit"> Login</button>
       <br />
       <br />

       <label> &nbsp;&nbsp; don't have an account &nbsp;&nbsp;
       </label> <button type="submit"> SignUp</button>
     </form>
   );
 };

 export default Login;