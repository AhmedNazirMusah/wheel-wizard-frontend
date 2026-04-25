import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { signup, clearErrors } from '../../redux/auth/auth';
import loader from '../../assets/loader2.gif';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const { success, error: serverError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearErrors());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      navigate('/login');
    }
  }, [success, navigate]);

  const validate = () => {
    const errors = {};
    if (!name) errors.name = 'Name is required';
    if (!email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Email is invalid';
    if (!password) errors.password = 'Password is required';
    else if (password.length < 6) errors.password = 'Password must be at least 6 characters';
    if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    dispatch(clearErrors());
    setIsLoading(true);
    const reqBody = {
      name,
      email,
      password,
      password_confirmation: confirmPassword,
    };
    await dispatch(signup(reqBody));
    setIsLoading(false);
  };

  return (
    <div className="form-cont">
      <Form className="login-form" onSubmit={handleSubmit}>
        <h1 className="sidebar-title-signup pt-3 ml-5">WheelWizard</h1>
        
        {serverError && <p className="text-danger">{serverError.toString()}</p>}

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            isInvalid={!!formErrors.name}
          />
          <Form.Control.Feedback type="invalid">{formErrors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            isInvalid={!!formErrors.email}
          />
          <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            isInvalid={!!formErrors.password}
          />
          <Form.Control.Feedback type="invalid">{formErrors.password}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Control
            type="password"
            placeholder="Password Confirmation"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            isInvalid={!!formErrors.confirmPassword}
          />
          <Form.Control.Feedback type="invalid">{formErrors.confirmPassword}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? <img src={loader} alt="loading" className="spinner" /> : 'Signup'}
        </Button>
        <div className="d-flex account">
          <p>Already have an account? Click here to Log in</p>
          <Button variant="white" type="button" className="btn plain-btn" onClick={() => navigate('/login')}>
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
