"use client";

import React from "react";
import LoginForm from "../../../../packages/components/forms/LoginForm";

export default function SignIn() {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      }}
    >
      <h1 className="text-red-500">Hello Hamza</h1>
      <LoginForm
        title1={"Login"}
        title2={"Forgot Password"}
        onPressForgotPass={function (): void {
          throw new Error("Function not implemented.");
        }}
        onPressSignUp={function (): void {
          throw new Error("Function not implemented.");
        }}
        onPressGoogle={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}
