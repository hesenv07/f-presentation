import * as Yup from "yup";

export const validationSchema = Yup.object({
    email: Yup.string()
      .email("Keçərli bir e-mail adresi daxil edin")
      .required("Mail adresinizi daxil edin"),
  });