import z from "zod"
 export const UserFormValidation = z.object({
 name: z.string().min(2,"name must be a atleat 2 characters").max(50,"name mast be most 50 characters"),
 email:z.string().email("invalid email address"),
 phone:z.string().refine((phone)=>/^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  });