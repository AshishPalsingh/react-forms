import { useState } from "react";
import ReactDOM from "react-dom/client";

function UseForm() {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  return (
    <form>
      <label>
        Enter Firstname:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </label>
      <label>
        Enter Lastname:
        <input
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        ></input>
      </label>
    </form>
  );
}

function App() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<UseForm />);
}

export default App;
