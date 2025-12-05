"use client"

import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
    const {getCount} = useAuth();
  return (
    <div>
      <h1>Login Page</h1>
      <p>Please implement the login form here. {getCount()}</p>
    </div>
  );
}