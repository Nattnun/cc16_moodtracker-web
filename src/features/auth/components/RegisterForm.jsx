import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import validateRegister from "../validations/validate-register";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const initial = {
  displayName: "",
  emailOrMobile: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm() {
  const [input, setInput] = useState(initial);
  const [error, setError] = useState({});

  const { register } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateError = validateRegister(input);
      if (validateError) {
        return setError(validateError);
      }

      await register(input);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError({});
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-12 mx-[52px]">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-12">
        <div className="w-full flex flex-col gap-8 justify-center items-center">
          <Input
            label={"Display name"}
            name="displayName"
            placeholder={"Enter your display name"}
            value={input.displayName}
            onChange={handleChange}
            errorMessage={error.displayName}
          />
          <Input
            label={"E-mail or phone number"}
            name="emailOrMobile"
            placeholder={"Type your e-mail or phone number"}
            value={input.emailOrMobile}
            onChange={handleChange}
            errorMessage={error.emailOrMobile}
          />
          <Input
            type="password"
            label={"Password"}
            name="password"
            placeholder={"Type your password"}
            value={input.password}
            onChange={handleChange}
            errorMessage={error.password}
          />
          <Input
            type="password"
            label={"Confirm Password"}
            name="confirmPassword"
            placeholder={"Type your confirm password"}
            value={input.confirmPassword}
            onChange={handleChange}
            errorMessage={error.confirmPassword}
          />
        </div>
        <div className="flex flex-col gap-4 w-full justify-center items-center">
          <Button>Register</Button>
          <Link to="/login">
            <p className="text-gray-400 text-sm">
              have an account?{" "}
              <span className="text-black text-sm">Sign In</span>
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}
