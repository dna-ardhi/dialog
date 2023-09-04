"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  variant?: "standard" | "outlined" | "filled";
  type?: React.HTMLInputTypeAttribute;
  className?: string;
}

const InputField: React.FunctionComponent<Props> = ({
  label,
  name: fieldName,
  type = "text",
  variant = "standard",
  className: additionalClassName,
}) => {
  const formMethods = useFormContext();
  const {
    register,
    formState: { errors },
  } = formMethods;
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const getType = (): React.HTMLInputTypeAttribute => {
    return type === "password" && showPassword ? "text" : type;
  };

  const getClassName = (): string => {
    let newClassName: string = "control";
    if (additionalClassName) newClassName += ` ${additionalClassName}`;
    return newClassName;
  };

  const getErrorMessage = (): React.ReactNode => {
    return (errors[fieldName]?.message as React.ReactNode) ?? " ";
  };

  return (
    <>
      <TextField
        {...register(fieldName)}
        className={getClassName()}
        variant={variant}
        type={getType()}
        label={label}
        error={!!errors[fieldName]}
        helperText={getErrorMessage()}
        InputProps={
          type === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : {}
        }
      />
    </>
  );
};

export default InputField;
