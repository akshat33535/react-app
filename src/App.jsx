import React, { useState } from "react";

// Simple Button component
const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: "10px 20px",
      backgroundColor: "#048499",
      color: "white",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "16px",
    }}
  >
    {children}
  </button>
);

// Simple Card component
const Card = ({ children }) => (
  <div
    style={{
      border: "10px solid #ccc",
      borderRadius: "5px",
      padding: "16px",
      marginBottom: "16px",
      boxShadow: "0 2px 10px rgba(180, 2, 2, 0.66)",
    }}
  >
    {children}
  </div>
);

// Main App component
const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Counter App</h1>
      <Card>
        <h2>Counter: {counter}</h2>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </Card>
    </div>
  );
};

export default App;
