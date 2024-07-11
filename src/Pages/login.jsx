import React from 'react'
import AuthLayout from '../components/Layout/AuthLayout'
import { FromLogin } from "../components/Fragments/FromLogin"

const login = () => {
  return (
      <AuthLayout title="Login" type="login">
          <FromLogin />
      </AuthLayout>
  )
}

export default login