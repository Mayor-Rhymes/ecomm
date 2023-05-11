import Image from "next/image";
import { Inter } from "next/font/google";
// import products from '../lib/products.json'
import Product from "@/components/product";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";


interface IProduct {


  id: string;
  image: string;
  category: string;
  name: string;
  inStock: boolean;
  price: number;
  quantity: number;
}


const inter = Inter({ subsets: ["latin"] });


interface ProductProps{

   products: IProduct[]
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    
       const response = await axios.get(`/api/products`);
      

       if(response.status !== 200) {

          const {message} = response.data
          const products: IProduct[] = []
          return {

            props: {
               products
            }
          }
       }

       const {products} = response.data



       return {
        props: {
          products
        }
       }
    

}

export default function Home({products}: ProductProps) {



  if(products.length == 0) {

    return (<main className="flex flex-col items-center justify-between bg-white">
    

      {/* {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))} */}

      <h3 className="text-6xl text-center my-10">There is no Product</h3>


    
  </main>)
  }
  return (
    <main className="flex flex-col items-center justify-between bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-content-center">

        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
