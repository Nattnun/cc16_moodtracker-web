import Joi from "joi";
import validate from "../../../utils/validate";

const loginSchema = Joi.object({
  emailOrMobile: Joi.string().required().messages({
    "string.empty": "email or mobile is required",
    "any.required": "email or mobile is required",
  }),
  password: Joi.string().required().messages({
    "string.empty": "password is required",
    "any.required": "password is required",
  }),
});

const validateLogin = (input) => validate(loginSchema)(input);
export default validateLogin;
