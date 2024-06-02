import * as Yup from "yup";

export const validationSchema = Yup.object({
    email: Yup.string()
      .email("Keçərli bir e-mail adresi daxil edin")
      .required("Mail adresinizi daxil edin"),
    password: Yup.string()
      .required("Şifrənizi daxil edin")
      .min(8, "Şifrəniz ən az 8 simvoldan ibarət olmalıdır")
      .matches(/[a-z]/, "Şifrəniz ən az bir kiçik hərf ehtiva etməlidir")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "Şifrəniz ən az bir xüsusi simvol (!@#$%^&*(),.?) ehtiva etməlidir"),
  });