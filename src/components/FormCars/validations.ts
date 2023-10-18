import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  image: Yup.string().required("A imagem é obrigatória"),
  name_model: Yup.string().required("O modelo é obrigatório"),
  year: Yup.number()
    .typeError("O ano deve ser um número")
    .required("O ano é obrigatório")
    .positive("O ano deve ser positivo")
    .integer("O ano deve ser um número inteiro"),
  brand: Yup.number().required("A marca é obrigatória"),
  color: Yup.string().required("A cor é obrigatória"),
  combustible: Yup.string().required("O tipo de combustível é obrigatório"),
  numberDoors: Yup.number()
    .typeError("O número de portas deve ser um número")
    .required("O número de portas é obrigatório")
    .positive("O número de portas deve ser positivo")
    .integer("O número de portas deve ser um número inteiro"),
  value: Yup.number()
    .typeError("O valor deve ser um número")
    .required("O valor é obrigatório")
    .positive("O valor deve ser positivo"),
  id: Yup.number(),
  registrationDate: Yup.number(),
  model_id: Yup.number(),
});
