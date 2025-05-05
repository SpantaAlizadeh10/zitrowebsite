import NewProducts from "./NewProducts";
import { getProductsByCategory } from "@/data/data";

const Mobile = () => {
  const mobileProducts = getProductsByCategory("mobile");

  return (
    <NewProducts 
      title="موبایل"
      products={mobileProducts}
    />
  );
};

export default Mobile;