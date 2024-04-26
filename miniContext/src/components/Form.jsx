import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Form = () => {
  const { setUser } = useContext(UserContext);
  const [data, setData] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setUser({ data, password });
    setData("");
    setPassword("");
  };
  return (
    <>
      <form action="">
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter username"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </>
  );
};

export default Form;
