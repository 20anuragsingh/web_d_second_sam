import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  const validateForm = () => {
    let newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Registration Successful");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        {errors.name && <p>{errors.name}</p>}

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        {errors.email && <p>{errors.email}</p>}

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {errors.password && <p>{errors.password}</p>}

        <button type="submit">Register</button>
      </form>

      <h2>API Data</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;