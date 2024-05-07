import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/TodoSlice";
const Form = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  function addT(e) {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  }
  console.log(input);
  return (
    <div>
      <form action="" onSubmit={addT}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
