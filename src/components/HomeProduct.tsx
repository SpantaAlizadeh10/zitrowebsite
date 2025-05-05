import NewProducts from "./NewProducts";
import { getProductsByCategory } from "@/data/data";

const HomeProduct = () => {
  const homeProducts = getProductsByCategory("appliance");

  return (
    <NewProducts 
      title="لوازم خانگی"
      products={homeProducts}
    />
  );
};

export default HomeProduct;
