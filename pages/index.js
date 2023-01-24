//Option1a: fetch products on the server side
//but with incremental static regeneration (in getStaticProp)
import Head from "next/head";
import Title from "../components/Title";
import Link from "next/link";
import { getProducts } from "../lib/products";
import ProductCard from "../components/ProductCard";

export async function getStaticProps() {
  console.log("HomePage getStaticProps");
  const products = await getProducts();
  return {
    props: { products },
  };
}
function HomePage({ products }) {
  console.log("product", products);
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>Next shop</Title>
        <ul className="grid  grid-cols-1 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
export default HomePage;
