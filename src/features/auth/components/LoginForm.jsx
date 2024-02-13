import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-12">
      <form action="" className="w-full flex flex-col gap-10">
        <div className="w-full flex flex-col gap-4">
          <Input
            label={"E-mail or phone number"}
            placeholder={"Type your e-mail or phone number"}
          />
          <Input
            type="password"
            label={"Password"}
            placeholder={"Type your password"}
          />
        </div>
        <div className="flex flex-col gap-4 w-full justify-center items-center">
          <Button>Log In</Button>
          <Link to="/register">
            <p className="text-gray-400 text-sm">
              Don't you have an account?{" "}
              <span className="text-black text-sm">Sign Up</span>
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}
