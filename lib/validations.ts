import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email address."),
  company: z.string().min(2, "Please enter your company name."),
  phone: z.string().min(7, "Enter a valid phone number."),
});

export type LeadFormValues = z.infer<typeof leadSchema>;
