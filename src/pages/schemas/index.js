import * as Yup from "yup";

export const careerApplySchema = Yup.object({
  fullName: Yup.string().required("This field is required !"),
  email: Yup.string().email().required("This field is required !"),
  phoneNumber: Yup.number()
    // .matches(phoneRegExp, 'phone is invalid')
    .required("This field is required"),
  totalExperience: Yup.number().required("This field is required !"),
  myFile: Yup.string().required("This field is required !"),
});

export const getAQuoteSchema = Yup.object({
  name: Yup.string().required("This field is required !"),
  email: Yup.string().email().required("This field is required !"),
  country: Yup.string().required("This field is required !"),
  phoneNumber: Yup.number()
    // .matches(phoneRegExp, 'phone is invalid')
    .required("This field is required"),
  projectReq: Yup.string().required("This field is required"),
});

export const getFreeQuoteSchema = Yup.object({
  name: Yup.string().required("This Field is required !"),
  email: Yup.string().email().required("This field is required !"),
  country: Yup.string().required("This field is required !"),
  phoneNumber: Yup.number().required("This field is required !"),
  projectReq: Yup.string().required("This field is required"),
});