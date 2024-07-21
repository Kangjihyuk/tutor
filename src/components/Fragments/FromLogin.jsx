import Index from "../Elements/Input/Index"; // Pastikan path import-nya sesuai
import Button from "../Elements/Button/Button"; // Pastikan path import-nya sesuai
import { login } from "../../services/auth.services";
import { useState } from "react";
export const FromLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Index
        type="text"
        placeholder="Example@gmail.com"
        name="username"
        label="Username"
      />
      <Index
        type="password"
        placeholder="******"
        name="password"
        label="Password"
      />
      <Button
        type="submit"
        classname="bg-blue-600"
        onclick={() => handleSubmit()}
      >
        {" "}
        Login
      </Button>
      {loginFailed && (
        <p className="text-red-500 mt-4 text-center">{loginFailed}</p>
      )}
    </form>
  );
};
