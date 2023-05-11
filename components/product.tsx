import Image from "next/image";
import { MdShoppingCart } from "react-icons/md";

import { FC } from "react";


export interface Product {


  id: string;
  image: string;
  category: string;
  name: string;
  inStock: boolean;
  price: number;
  quantity: number;
}


interface ProductProps {
  product: Product;
}
const Product: FC<ProductProps> = ({ product }) => {
  return (
    <div className="flex flex-col space-y-4 rounded-md p-10 transition-all hover:shadow-lg ">
      <div>
        <Image
          src="/images/productimage.jpg"
          className="h-full w-full"
          alt="product-image"
          width="100"
          height="100"
        />
      </div>

      <div className="flex flex-col items-center">
        <p className="font-bold">{product.name}</p>
        {product.inStock ? (
          <p className="text-blue-500">In Stock</p>
        ) : (
          <p className="text-red-500">Out of Stock</p>
        )}
        <p> NGN {product.price} </p>
      </div>

      <button
        className="bg-blue-400 snipcart-add-item text-white py-2 px-4 rounded-lg transition-all hover:-translate-y-3 hover:shadow-md"
        data-item-url={`/`}
        data-item-id={product.id}
        data-item-price={product.price}
        data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
        data-item-image="/images/productimage.jpg"
        data-item-name={product.name}
        disabled = {!product.inStock}
      >
        Add to Cart <MdShoppingCart className="text-2xl inline" />
      </button>
    </div>
  );
};

export default Product;
