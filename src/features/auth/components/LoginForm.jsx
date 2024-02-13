import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import validateLogin from "../validations/validate-login";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const initial = {
  emailOrMobile: "",
  password: "",
};

export default function LoginForm() {
  const [input, setInput] = useState(initial);
  const [error, setError] = useState({});

  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const validateError = validateLogin(input);
      if (validateError) {
        return setError(validateError);
      }

      await login(input);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError({});
  };
  return (
    <div className="w-full flex flex-col justify-center items-center gap-12">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10">
        <div className="w-full flex flex-col gap-4">
          <Input
            label={"E-mail or phone number"}
            name="emailOrMobile"
            value={input.emailOrMobile}
            onChange={handleChange}
            placeholder={"Type your e-mail or phone number"}
            errorMessage={error.emailOrMobile}
          />
          <Input
            type="password"
            label={"Password"}
            name="password"
            value={input.password}
            onChange={handleChange}
            placeholder={"Type your password"}
            errorMessage={error.password}
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
