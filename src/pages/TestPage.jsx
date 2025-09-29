import TestEmailForm from "../components/TestEmailForm";

const TestPage = () => {
  return (
    <div className="page-wrapper">
      <img
        src="/BirthdayMailerLogo.png"
        alt="Birthday Logo"
        className="logo-img"
      />
      <h1>Try It Out</h1>
      <p>Enter your email below to receive a sample birthday message.</p>
      <TestEmailForm />
      <footer>
        <p>Made with 🎂 by Adeniyi • © 2025</p>
      </footer>
    </div>
  );
};

export default TestPage;
