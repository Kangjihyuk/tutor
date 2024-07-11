import React from 'react'
import Index from '../Elements/Input/Index'
import Button from '../Elements/Button/Button'
const FromRegister = () => {
  return (
    <form action="">
      <Index
        type="text"
        placeholder="insert your name here ..."
        name="fullname"
        label="fullname"
      />
      <Index
        type="email"
        placeholder="Example@gmail,com"
        name="email"
        label="email"
      />
      <Index
        type="Password"
        placeholder="******"
        name="password"
        label="password"
      />
      <Index
        type="Password"
        placeholder="******"
        name="confirmPassword"
        label="confirm password"
      />
      <Button classname="bg-blue-600">Register</Button>
    </form>
  );
}

export default FromRegister