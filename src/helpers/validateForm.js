import { useState, useEffect } from "react";
import { send } from "@emailjs/browser";

const ValidateForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: "",
    tel: "",
    auto: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (!e?.target?.name) {
      setValues({
        ...values,
        tel: e,
      });
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setLoading(true);

      send("#", "#", values, "#")
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
        })
        .catch((err) => {
          console.log("FAILED...", err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [errors, isSubmitting, values]);

  return {
    handleChange,
    values,
    handleSubmit,
    errors,
    isLoading,
    isSubmitting,
  };
};

export default ValidateForm;
