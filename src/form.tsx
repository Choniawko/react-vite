import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useItemQuery, useUpdateItemMutation } from "../api-services/item";
import "./form.module.css";

type FormValues = {
  name: string;
  description: string;
  price: number;
  quantity: number;
  image?: File;
  category: string;
};

type FormProps = {
  id: string;
};
export const Form = ({ id }: FormProps) => {
  const { register, handleSubmit, setValue } = useForm<FormValues>();
  const { mutate: updateItem, isLoading: isUpdating } = useUpdateItemMutation();
  const { data, isLoading, isError, error } = useItemQuery(id);
  useEffect(() => {
    if (data) {
      console.log("data", data);
      setValue("name", data.name);
      setValue("description", data.description);
      setValue("price", data.price);
      setValue("quantity", data.quantity);
      setValue("category", data.category);
    }
  }, [data, setValue]);

  const onSubmit = handleSubmit((values: FormValues) => {
    updateItem({ id, ...values });
  });

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>is loading...</div>;
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="input-wrapper">
        <label className="input-label" htmlFor="name">
          Name
        </label>
        <input className="input-field" type="text" {...register("name")} />
      </div>
      <div className="input-wrapper">
        <label className="input-label" htmlFor="description">
          Description
        </label>
        z
        <input
          className="input-field"
          type="text"
          {...register("description")}
        />
      </div>
      <div className="input-wrapper">
        <label className="input-label" htmlFor="price">
          Price
        </label>
        <input className="input-field" type="number" {...register("price")} />
      </div>
      <div className="input-wrapper">
        <label className="input-label" htmlFor="quantity">
          Quantity
        </label>
        <input className="input-field" type="text" {...register("quantity")} />
      </div>
      <div className="input-wrapper">
        <label className="input-label" htmlFor="category">
          Category
        </label>
        <input className="input-field" type="text" {...register("category")} />
      </div>
      <div className="input-wrapper">
        <label className="input-label" htmlFor="image">
          Image
        </label>
        <input
          className="input-field"
          name="image"
          type="file"
          onChange={(e) => {
            const file = e.target.files && e.target.files[0];
            if (file) {
              setValue("image", file);
            }
          }}
        />
      </div>
      <button type="submit" disabled={isUpdating}>
        Submit
      </button>
    </form>
  );
};
