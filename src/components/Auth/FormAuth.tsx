"use client";
import InputField from "@/components/Fields/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";

interface Props {
  type: "login" | "register";
}

const validationSchema = Yup.object({
  type: Yup.string().required().oneOf(["login", "register"]),
  firstName: Yup.string().when("type", {
    is: "register",
    then: (schema) => schema.required("Ini diisi dulu"),
    otherwise: (schema) => schema.notRequired(),
  }),
  lastName: Yup.string().when("type", {
    is: "register",
    then: (schema) => schema.required("Ini diisi dulu"),
    otherwise: (schema) => schema.notRequired(),
  }),
  email: Yup.string()
    .email("Emailnya masih salah nih")
    .required("Ini diisi dulu"),
  password: Yup.string().min(8, "Harus minimal 8 karakter yaa.").required(),
  confirmPassword: Yup.string().when("type", {
    is: "register",
    then: (schema) =>
      schema
        .required("Tulis ulang kata sandi kamu")
        .oneOf([Yup.ref("password")], "Kata sandinya nggak sama"),
    otherwise: (schema) => schema.notRequired(),
  }),
});

type FormData = Yup.InferType<typeof validationSchema>;

const initialValue = (type: Props["type"]) => ({
  type,
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const FormAuth: React.FunctionComponent<Props> = ({ type }) => {
  const form = useForm({
    defaultValues: initialValue(type),
    resolver: yupResolver(validationSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const submit = (values: FormData) => {
    console.log(values);
  };

  console.log(errors);

  return (
    <FormProvider {...form}>
      <form className="form-group" onSubmit={handleSubmit(submit)}>
        {type === "register" && (
          <Box display="flex" gap={2}>
            <InputField
              variant="outlined"
              label="Nama Depan"
              name="firstName"
            />
            <InputField
              variant="outlined"
              label="Nama Belakang"
              name="lastName"
            />
          </Box>
        )}
        <Box display="flex" gap={2}>
          <InputField variant="outlined" label="Email" name="email" />
        </Box>
        <Box display="flex" gap={2}>
          <InputField
            variant="outlined"
            type="password"
            label="Kata Sandi"
            name="password"
          />
          {type === "register" && (
            <InputField
              variant="outlined"
              type="password"
              label="Konfirmasi Kata Sandi"
              name="confirmPassword"
            />
          )}
        </Box>
        <Button variant="contained" type="submit">
          {type === "login" ? "Masuk" : "Buat Akun"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default FormAuth;
