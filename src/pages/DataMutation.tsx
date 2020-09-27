import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
  text: string;
  name: string;
}

export const DataMutation = () => {
  const { register, getValues, handleSubmit } = useForm<FormData>();
  return (
    <>
      <form onSubmit={handleSubmit(console.log)}>
        {JSON.stringify(getValues())}
        <input
          type="text"
          placeholder="Post Text"
          name="text"
          ref={register()}
        />
        <input
          type="name"
          placeholder="Post Name"
          name="name"
          ref={register()}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
