"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import { UserFormValidation } from "@/lib/validation";

import "react-phone-number-input/style.css";
import SubmitButton from "../SubmitButton";
import CoustomFormField, { FormFieldType } from "../CoustomFormField";
 
const PatientForm = () => {
  const router = useRouter();
  const [isLoading,setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver:zodResolver(UserFormValidation),
  defaultValues:{
    name:"",
    email:"",
    phone:"",
  }  });
  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);

    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      };

      // const newUser = await createUser(user);

      // if (newUser) {
      //   router.push(`/patients/${newUser.$id}/register`);
      // }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };
  return (
    
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Get started with appointments.</p>
        </section>
        <CoustomFormField 
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="name"
        label="Full name"
        placeholder="somu"
        iconSrc="/assets/icons/user.svg"
        iconAlt="user"
        />
        <CoustomFormField 
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name="email"
        label="Email"
        placeholder="somu@gmail.com"
        iconSrc="/assets/icons/email.svg"
        iconAlt="email"
        />
        <CoustomFormField 
        fieldType={FormFieldType.PHONE_INPUT}
        control={form.control}
        name="phone"
        label="Phone number"
        placeholder="(555) 123-4567"
        />
<SubmitButton isLoading={isLoading}>started</SubmitButton>
</form>
  </Form>
  )
}

export default PatientForm

function createUser(user: { name: string; email: string; phone: string; }) {
  throw new Error("Function not implemented.");
}
