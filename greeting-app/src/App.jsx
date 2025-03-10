import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const fetchGreeting = async () => {
    if (!name) {
      setGreeting("Please Enter a name");
      return;
    }
    try {
      const response = await fetch(`http://localhost:5000/api/greet?name=${name}`);
      const data = await response.json();
      setGreeting(data.message || data.error);
    } catch (error) {
      setGreeting("Error fetching greeting.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Greeting App</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={fetchGreeting}>Get Greeting</button>
      <h2>{greeting}</h2>
    </div>
  );
}
