import React from "react";
import AuthLayout from "../components/Layout/AuthLayout";
import FromRegister from "../components/Fragments/FromRegister";

const register = () => {
  return (
    <AuthLayout title="Register" type="register">
      <FromRegister />
    </AuthLayout>
  );
};

export default register;
