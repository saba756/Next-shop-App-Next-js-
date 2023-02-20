import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Page from "../components/Page";
import { fetchJson } from "../lib/api";
import CartTable from "../components/CartTable";
function CartItem() {
  const query = useQuery("cartItems", () => fetchJson("/api/cart"));
  const cartItems = query.data;

  return (
    <Page title="Cart">{cartItems && <CartTable cartItems={cartItems} />}</Page>
  );
}
export default CartItem;
