const validate = (schema) => (input) => {
  const { value, error } = schema.validate(input, { abortEarly: false });
  console.dir(error);
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validate;
