import Link from "next/link";
import { getProducts, getProduct } from "../../lib/products";
import ApiError from "../../lib/api";
import Page from "../../components/Page";
import Image from "next/image";
import { useUser } from "../../hooks/user";
import AddToCartWidget from "../../components/AddToCartWidget";
export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map((product) => ({
      params: { id: product.id.toString() },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params: { id } }) {
  try {
    const product = await getProduct(id);
    return {
      props: { product },
    };
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) {
      return { notFound: true };
    }
    throw err;
  }
}
function ProductPage({ product }) {
  const user = useUser();
  console.log("user", user);
  return (
    <Page title={product.title}>
      <div className="flex flex-col lg:flex-row">
        <div>
          <Image src={product.pictureUrl} alt="" width={640} height={480} />
        </div>
        {/* show image {640*480} */}
        <div className="flex-1 lg:ml-4">
          <p className="text-sm">{product.description}</p>
          <p className="text-lg font-bold mt-2">{product.price}</p>
          {user && <AddToCartWidget productId={product.id} />}
        </div>
      </div>
    </Page>
  );
}
export default ProductPage;
