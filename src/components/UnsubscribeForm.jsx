import { useState } from "react";
import { unsubscribeUser } from "../services/api";

const UnsubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await unsubscribeUser(email);
      setMessage(
        "Your email has been unsubscribed. We are sorry to see you go!😢"
      );
      setEmail("");
    } catch (err) {
      if (err.response?.status === 429) {
        setMessage(
          "Too many unsubscribe attempts. Please wait before trying again."
        );
      } else {
        setMessage("Unsubscribe failed. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={handleDelete}>
      <h2>Unsubscribe Your Email</h2>
      <input
        type="email"
        placeholder="Enter your mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Unsubscribe</button>
      {message && (
        <p style={{ color: message.includes("Too many") ? "red" : "green" }}>
          {message}
        </p>
      )}
    </form>
  );
};

export default UnsubscribeForm;
