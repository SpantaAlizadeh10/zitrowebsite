import NewProducts from "./NewProducts";
import { getProductsByCategory } from "@/data/data";

const Tablet = () => {
  const tabletProducts = getProductsByCategory("tablet");

  return (
    <NewProducts 
      title="تبلت"
      products={tabletProducts}
    />
  );
};

export default Tablet;
