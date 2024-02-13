import Joi from "joi";
import validate from "../../../utils/validate";

const registerSchema = Joi.object({
  displayName: Joi.string().required().trim().messages({
    "string.empty": "display name is required",
    "any.required": "display name is required",
  }),

  emailOrMobile: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/),
  ])
    .required()
    .messages({
      "alternatives.match": "invalid email address or mobile number",
      "any.required": "email address or mobile number is required",
    })
    .strip(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .required()
    .messages({
      "string.empty": "password is required",
      "string.pattern.base":
        "password must be at least 6 characters and contain only alphabet and number",
      "any.required": "password is required",
    }),
  confirmPassword: Joi.string()
    .required()
    .valid(Joi.ref("password"))
    .messages({
      "string.empty": "confirm password is required",
      "any.only": "password and confirm password did not match",
      "any.required": "confirm password is required",
    })
    .strip(),
  email: Joi.forbidden().when("emailOrMobile", {
    is: Joi.string().email({ tlds: false }),
    then: Joi.string().default(Joi.ref("emailOrMobile")),
  }),
  mobile: Joi.forbidden().when("emailOrMobile", {
    is: Joi.string().pattern(/^[0-9]{10}$/),
    then: Joi.string().default(Joi.ref("emailOrMobile")),
  }),
});

const validateRegister = (input) => validate(registerSchema)(input);
export default validateRegister;
