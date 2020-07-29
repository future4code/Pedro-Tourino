import { useState } from "react";

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleOnChangeInput = (e) => {
    const newValue = e.target.value;
    const fieldName = e.target.name;

    setForm({ ...form, [fieldName]: newValue });
  };

  return [form, handleOnChangeInput];
};
