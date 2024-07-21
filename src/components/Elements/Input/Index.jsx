import React from "react";
import { Input } from "./Input";
import { Label } from "./Label";

const Index = (props) => {
  const { label, name, placeholder, type } = props;
  return (
    <div className="mb-6">
      <Label name={name} label={label} />
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default Index;
