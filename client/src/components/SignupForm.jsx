import { useState } from "react";
import { addUser } from "../services/api";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    dob: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUser(formData);
      setMessage("Singup successfull!🎉");
      setFormData({ username: "", email: "", dob: "" });
    } catch (err) {
      if (err.response?.status === 429) {
        setMessage("Too many requests. Please wait and try again later.");
      } else {
        setMessage("Signup failed. Please try again");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign up for Birthday Emails</h2>
      <input
        type="text"
        name="username"
        placeholder="Your Name"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        required
      />
      <button type="submit">Sign Up</button>
      {message && (
        <p style={{ color: message.includes("Too many") ? "red" : "green" }}>
          {message}
        </p>
      )}
    </form>
  );
};

export default SignupForm;
