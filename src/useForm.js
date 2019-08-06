import React from "react";

export const useForm = initialValues => {
  const [values, valuesSet] = React.useState(initialValues);
  return [
    values,
    e => {
      valuesSet({ ...values, [e.target.name]: e.target.value });
    }
  ];
};
