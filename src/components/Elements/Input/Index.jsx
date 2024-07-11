import React, { forwardRef } from "react";
import Label from "./Label";
import Input from "./Input";

const Index = forwardRef((props, ref) => {
  const { label, name, placeholder, type } = props;
  return (
    <div className="mb-6">
      <Label name={name}/>
      <Input name={name} type={type} placeholder={placeholder} ref={ref} />
    </div>
  );
});

export default Index;
