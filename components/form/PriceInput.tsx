import { Label } from "../ui/label";
import { Input } from "../ui/input";
const name = "price";
type FormInputNumberProps = {
  defaultValue?: number;
};
import React from "react";

const PriceInput = ({ defaultValue }: FormInputNumberProps) => {
  return (
    <div className="mt-2">
      <Label htmlFor={name} className="capitalize mb-2">
        price ($)
      </Label>
      <Input
        id={name}
        type="number"
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
};

export default PriceInput;
