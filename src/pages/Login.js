import React, { useState } from "react";

const Login = ({ history }) => {

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("")
//  const [msg, setMsg] = useState(null);
//
//  const [form, setForm] = useState({
//          emailAddress: "",
//          password: ""
//      });
//
//      const onChangeHandler = (event) => {
//              const {name, value} = event.target;
//              setForm( { ...form, [name]:value } );
//          };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {


         console.log("here inside try block");
           const response = await fetch(`http://localhost:8080/api/v1/users/email/${emailAddress}`, {
             method: "GET",
           });

           if (!response.ok) {
           //setMsg('You do not have a user account, Please sign up');
           window.location.href = "/reports";
             throw new Error("User not found");

           }

           const user = await response.json();
          if (user.password !== password) {
          //setMsg('You have a user account, password didn't match');
          throw new Error("Incorrect password");
           }

           console.log("Login successful");
           window.location.href = "/reports";
           // history.push("/reports");
             } catch (error) {
               console.error(error);
             }

  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>&nbsp; Login Page</h1>
      <div>
        <label htmlFor="emailAddress">&nbsp; Email address: &nbsp;&nbsp;&nbsp;</label>
        <input
          type="email"
          id="emailAddress"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor="password"> &nbsp; Password:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      &nbsp; <button type="submit"> Login</button>
      <div>

             <br />

             <label> &nbsp;&nbsp; don't have an account &nbsp;&nbsp;
             </label> <button type="submit"> SignUp</button></div>
    </form>
  );
};

export default Login;
