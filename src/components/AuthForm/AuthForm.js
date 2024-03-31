import React from 'react';
import { useFormik } from 'formik';

export const AuthForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeat: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">Enter your email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
          placeholder="E-mail"
        />
        <label htmlFor="lastName">Enter your password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          required
          placeholder="Password"
        />
        <label htmlFor="email">Repeat password</label>
        <input
          id=""
          name="email"
          type="email"
          onChange={formik.handleChange}
          required
          placeholder="Repeat password"
          value={formik.values.email}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
