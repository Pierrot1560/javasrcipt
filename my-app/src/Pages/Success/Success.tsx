import './Success.css';

interface SuccessProps {
  onGoHome: () => void;
}

export function Success({ onGoHome }: SuccessProps) {
  return (
    <div className="success">
      <a className="success__back" href="#">
        Back to home
      </a>

      <h1 className="success__title">Success</h1>

      <div className="success__card">
        <p className="success__card-title">Email confirmed</p>
        <p className="success__card-text">
          Your registration is now completed
        </p>

        <button className="success__submit" onClick={onGoHome}>
          Go to home
        </button>
      </div>
    </div>
  );
}