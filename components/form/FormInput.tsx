import { Label } from "../ui/label";
import { Input } from "../ui/input";

type FromInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue: string;
  placeholder?: string;
};
import React from "react";

const FormInput = ({
  label,
  name,
  type,
  defaultValue,
  placeholder,
}: FromInputProps) => {
  return (
    <div className="mb-2 ">
      <Label htmlFor={name} className="mb-2 text-muted-foreground capitalize">
        {label || name}
      </Label>
      <Input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required
      />
    </div>
  );
};

export default FormInput;
