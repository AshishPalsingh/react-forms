import { useState } from "react";
import ReactDOM from "react-dom/client";

function UseForm() {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [comments, setComment] = useState("These are the default comments!");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Welcome: " + name + " " + lname + " \nComments: " + comments);
  };

  const handleChange = (event) => {
    //event.preventDefault();
    setComment(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <input type="textarea" name={comments} onChange={handleChange} />

      <input type="submit" />
    </form>
  );
}

function App() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<UseForm />);
}

export default App;
