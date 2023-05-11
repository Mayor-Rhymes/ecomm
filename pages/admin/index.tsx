import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export interface Product {
  image: string;
  category: string;
  name: string;
  inStock: boolean;
  price: number;
  quantity: number;
}

const CreateProduct = () => {
  const categories = ["mdf", "hdf", "marine"];

  const [product, setProduct] = useState({} as Product);

  const handleChange = (key: string, value: string) => {
    setProduct(
      (prevState) =>
        ({
          ...prevState,
          [key]: value,
        } satisfies Product)
    );
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (product) {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/products",
          {
            ...product,
            inStock: true,
          }
        );
        if (response.status === 200) {
          toast.success("Product Create");
        } else {
          toast.error("Product Creation Failed");
        }
      } catch (err) {
        toast.error("Something went wrong");
        console.log(err);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-10 w-[90%] lg:w-[50%] mx-auto mt-10 py-20 shadow-2xl px-10"
    >
      <input
        type="text"
        placeholder="Product Name"
        className="h-[50px] border-2 border-blue-100 outline-none placeholder-blue-400 p-4 focus:border-blue-400"
        value={product.name}
        onChange={(event) => handleChange("name", event.target.value)}
      />

      <select
        value={product.category}
        onChange={(event) =>
          handleChange("category", categories[event.target.selectedIndex])
        }
        className="h-[50px] border-2 border-blue-100 outline-none placeholder-blue-400 focus:border-blue-400"
      >
        {categories.map((category, index) => (
          <option value={category} key={index}>
            {category}
          </option>
        ))}
      </select>

      <div className="flex justify-between">
        <input
          type="number"
          placeholder="Quantity"
          className="h-[50px] w-[40%] border-2 border-blue-100 outline-none placeholder-blue-400 p-4 focus:border-blue-400"
          min={10}
          value={product.quantity}
          onChange={(event) => handleChange("quantity", event.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          className="h-[50px] w-[40%] border-2 border-blue-100 outline-none placeholder-blue-400 p-4 focus:border-blue-400"
          min={1000}
          value={product.price}
          onChange={(event) => handleChange("price", event.target.value)}
        />
      </div>

      <input
        type="text"
        placeholder="Product Image"
        className="h-[50px] border-2 border-blue-100 outline-none placeholder-blue-400 p-4 focus:border-blue-400"
        value={product.image}
        onChange={(event) => handleChange("image", event.target.value)}
      />

      <button
        type="submit"
        className="text-xl text-white font-bold bg-blue-400 transition-all hover:bg-blue-600 hover:text-3xl p-4"
      >
        CREATE PRODUCT
      </button>
    </form>
  );
};

export default CreateProduct;
