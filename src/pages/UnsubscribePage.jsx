import DeleteAccountForm from "../components/UnsubscribeForm";

const DeletePage = () => {
  return (
    <div className="page-wrapper">
      <img
        src="/BirthdayMailerLogo.png"
        alt="Birthday Logo"
        className="logo-img"
      />
      <h1>Unsubscribe</h1>
      <p>
        If you'd like to delete your account and stop receiving birthday emails,
        enter your email below.
      </p>
      <DeleteAccountForm />
      <footer>
        <p>Made with 🎂 by Adeniyi • © 2025</p>
      </footer>
    </div>
  );
};

export default DeletePage;
