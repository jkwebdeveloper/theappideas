import * as Yup from "yup";

export const careerApplySchema = Yup.object({
  fullName: Yup.string().required("This field is required !"),
  email: Yup.string().email().required("This field is required !"),
  phoneNumber: Yup.number()
    // .matches(phoneRegExp, 'phone is invalid')
    .required("This field is required"),
    totalExperience: Yup.number().required("This field is required !"),
    cv: Yup.string().required("This field is required !"),
});
