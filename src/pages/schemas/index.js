import * as yup from "yup";

export const careerApplySchema = yup.object({
  fullName: yup.string().required("This field is required !"),
  email: yup.string().email().required("This field is required !"),
  phoneNumber: yup.string().required("Phone number is must be required"),
  totalExperience: yup.number().required("This field is required !"),
  myFile: yup.string().required("This field is required !"),
});

export const getAQuoteSchema = yup.object({
  name: yup.string().required("This field is required !"),
  email: yup.string().email().required("This field is required !"),
  // country: yup.string().required("This field is required !"),
  phoneNumber: yup.string().required("Phone number is must be required"),
  projectRequirement: yup.string().required("This field is required"),
});

export const getFreeQuoteSchema = yup.object({
  name: yup.string().required("This Field is required !"),
  email: yup.string().email().required("This field is required !"),
  country: yup.string().required("This field is required !"),
  phoneNumber: yup.string().required("Phone number is must be required"),
  projectRequirement: yup.string().required("This field is required"),
});
