import Display from "./components/Display";
import Form from "./components/Form";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <UserContextProvider>
        <Form />
        <Display />
      </UserContextProvider>
    </>
  );
}

export default App;
