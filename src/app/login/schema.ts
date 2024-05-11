import { z } from "zod";

export interface IFormInputs {
  email: string;
  password: string;
}
export const schemaLogin = z
  .object({
    email: z.string(),
    password: z.string(),
  })
  .required();
