import * as Yup from "yup";

export const signUpValidation = Yup.object().shape({
  firstName: Yup.string().required("required"),
  lastName: Yup.string().required("required"),
  email: Yup.string().email("invalid email").required("required"),
  location: Yup.string().required("required"),
  occupation: Yup.string().required("required"),
  picture: Yup.string().required("required"),
});

export const signInValidation = Yup.object().shape({
  email: Yup.string().email("invalid email").required("required"),
  password: Yup.string().required("required"),
});
