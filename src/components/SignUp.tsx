import React, { useState } from "react";

const SignUp = () => {
  const [signUpForm, setsignUpForm] = useState<SignUpForm>({
    firstName: "",
    lastName: "",
    age: 0,
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(signUpForm);
  };

  const saveFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsignUpForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input name="firstName" onChange={saveFields} />
        <label htmlFor="lastName">Last Name:</label>
        <input name="lastName" onChange={saveFields} />
        <label htmlFor="age">Age:</label>
        <input name="age" onChange={saveFields} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={saveFields} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
