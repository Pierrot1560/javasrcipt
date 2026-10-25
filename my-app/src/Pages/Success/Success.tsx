import { useNavigate, Link } from 'react-router-dom';
import './Success.css';



export function Success() {
   const navigate = useNavigate();
  return (
    <div className="success">
      <Link className="success__back" to="/posts">
        Back to home
      </Link>

      <h1 className="success__title">Success</h1>

      <div className="success__card">
        <p className="success__card-title">Email confirmed</p>
        <p className="success__card-text">
          Your registration is now completed
        </p>

        <button className="success__submit" onClick={() => navigate('/posts')}>
          Go to home
        </button>
      </div>
    </div>
  );
}