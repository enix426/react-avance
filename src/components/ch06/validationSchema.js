import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Le nom utilisateur doit contenir au moins 3 caractères")
    .required("Le champ Nom utilisateur est requis"),
  email: Yup.string()
    .email("Format email invalide")
    .required("Le champ Email est requis"),
});

export default validationSchema;
