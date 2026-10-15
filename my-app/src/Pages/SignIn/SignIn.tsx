import { useState } from 'react';
import './SignIn.css';

interface SignInProps {
  onSuccess: () => void;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export function SignIn({ onSuccess }: SignInProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): boolean {
    const nextErrors: FormErrors = {};

    if (!email.trim()) {
      nextErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      nextErrors.email = 'Enter a valid email';
    }

    if (!password.trim()) {
      nextErrors.password = 'Password is required';
    } else if (password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (validate()) {
      onSuccess();
    }
  }

  return (
    <div className="sign-in">
      <a className="sign-in__back" href="#">
        Back to home
      </a>

      <h1 className="sign-in__title">Sign In</h1>

      <form className="sign-in__form" onSubmit={handleSubmit}>
        <label className="sign-in__label">
          Email
          <input
            className="sign-in__input"
            type="text"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <span className="sign-in__error">{errors.email}</span>
          )}
        </label>

        <label className="sign-in__label">
          Password
          <input
            className="sign-in__input"
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <span className="sign-in__error">{errors.password}</span>
          )}
        </label>

        <a className="sign-in__forgot" href="#">
          Forgot password?
        </a>

        <button className="sign-in__submit" type="submit">
          Sign In
        </button>

        <p className="sign-in__footer">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </form>
    </div>
  );
}