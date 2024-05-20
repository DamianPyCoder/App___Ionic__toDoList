import * as Yup from "yup";

export function initialValues() {
  return {
    task: "",
  };
}

export function validationSchema() {
  return Yup.object({
    task: Yup.string().required("danger"),
  });
}
