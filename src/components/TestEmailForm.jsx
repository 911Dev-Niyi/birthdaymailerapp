import { useState } from "react";
import { testEmail } from "../services/api";

const TestEmailForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await testEmail(email);
      setMessage("Test email sent! 🎉 Check your inbox.");
      setEmail("");
    } catch (err) {
      if (err.response?.status === 429) {
        setMessage("Too many test requests. Please wait and try again later.");
      } else {
        setMessage("Failed to send test email. Try again.");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Preview a Birthday Email</h2>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Send Test</button>
      {message && (
        <p style={{ color: message.includes("Too many") ? "red" : "green" }}>
          {message}
        </p>
      )}
    </form>
  );
};

export default TestEmailForm;
