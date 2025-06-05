import { useState } from "react";
import "./App.css"; // Ensure you have Tailwind CSS set up in your project
import React from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can handle the submitted data here
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-center text-2xl mb-6">React Form Test</h1>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Sinun nimesi.."
          className="w-full p-3 rounded mb-4 border border-gray-300"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Sähköpostiosoitteesi.."
          className="w-full p-3 rounded mb-4 border border-gray-300"
        />

        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Ikäsi.."
          className="w-full p-3 rounded mb-4 border border-gray-300"
          min="1"
        />

        {submitted && (
          <p className="text-green-600 mb-4">Form submitted successfully!</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-2xl hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
