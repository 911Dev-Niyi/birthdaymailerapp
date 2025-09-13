import { Link } from 'react-router-dom';
import SignupForm from '../components/SignupForm';

function Home() {
  return (
    <div className="home-wrapper">
      <div className="signup-box">
        {/* Main Heading */}
        <h1 className="header">Welcome to Birthday Mailer 🎂</h1>

        {/* Sign Up Form stays untouched */}
        <SignupForm />

        {/* Subsections below the form */}
        <div className="subsections">
          <div className="sub-card">
            <h2>Test Your Email</h2>
            <p>Want to see what your birthday email will look like? Try it out here.</p>
            <Link to="/test">
              <button className="nav-button">Go to Test Page</button>
            </Link>
          </div>

          <div className="sub-card">
            <h2>Unsubscribe</h2>
            <p>If you'd like to stop receiving birthday emails, you can unsubscribe anytime.</p>
            <Link to="/unsubscribe">
              <button className="nav-button">Unsubscribe</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
