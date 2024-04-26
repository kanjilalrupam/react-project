import React, { useContext } from "react";
import UserContext from "../context/UserContext";
const Display = () => {
  const { user } = useContext(UserContext);
  if (!user) return <h1>Login</h1>;
  return (
    <div>
      <h1>Username : {user.data}</h1>
      <h1>Password : {user.password}</h1>
    </div>
  );
};

export default Display;
