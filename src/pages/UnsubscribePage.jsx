import DeleteAccountForm from '../components/UnsubscribeForm';

const DeletePage = () => {
  return (
    <div>
      <h1>Unsubscribe</h1>
      <p>If you'd like to delete your account and stop receiving birthday emails, enter your email below.</p>
      <DeleteAccountForm />
    </div>
  );
};

export default DeletePage;
