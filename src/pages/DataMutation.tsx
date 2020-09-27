import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, MutationFunction } from "react-query";

interface FormData {
  text: string;
  name: string;
}

const createPosts: MutationFunction<any, any> = async (v) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: JSON.stringify(v),
  });

  return await data.json();
};

export const DataMutation = () => {
  const { register, getValues, handleSubmit } = useForm<any>();

  const [mutate, { data, error, isLoading }] = useMutation<any>(createPosts);
  return (
    <>
      <p>
        {JSON.stringify(data)}
        {JSON.stringify(error)}
      </p>
      {isLoading && <span>loading...</span>}
      <form onSubmit={handleSubmit((v) => mutate(v))}>
        <p>{JSON.stringify(getValues())}</p>
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
