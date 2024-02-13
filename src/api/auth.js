import axios from "../config/axios";

export const register = (user) => axios.post("auth/register", user);
