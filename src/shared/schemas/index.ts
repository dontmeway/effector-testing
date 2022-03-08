import * as yup from "yup";

//TODO: rewrite using regex
const CAPITAL_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const authByEmailSchema = yup.object().shape({
  email: yup.string().email("Введите почту").required("Заполните поле"),
  password: yup
    .string()
    .min(8, "Минимальное количество символов: 8")
    .transform((v) => v.trim())
    .test("at least one capital letter", (v) => {
      if (!v) return false;
      return v.split("").some((letter) => CAPITAL_LETTERS.includes(letter));
    })
    .required("Заполните поле"),
});
