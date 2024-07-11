import { useEffect, useRef } from 'react';
import Index from '../Elements/Input/Index';
import Button from '../Elements/Button/Button';

const FromLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = '/products';
  }

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <Index
        type="email"
        placeholder="Example@gmail.com"
        name="email"
        label="Email"
        ref={emailRef}
      />
      <Index
        type="password" // "Password" diubah menjadi "password"
        placeholder="******"
        name="password"
        label="Password"
      />
      <Button className="bg-blue-600" onClick={handleSubmit}>Login</Button>
    </form>
  );
};

export default FromLogin;