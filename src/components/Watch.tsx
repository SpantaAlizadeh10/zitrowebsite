import NewProducts from "./NewProducts";
import { getProductsByCategory } from "@/data/data";

const Watch = () => {
  const watchProducts = getProductsByCategory("watch");

  return (
    <NewProducts 
      title="ساعت هوشمند"
      products={watchProducts}
    />
  );
};

export default Watch;