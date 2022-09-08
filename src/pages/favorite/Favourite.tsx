import AppLayout from "../../layout/AppLayout";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Product } from "../../components/product/product";

const Favourite = () => {
  const products = useSelector((store: RootState) => store.products);
  const handleClick = (index: number) => {
    console.log(index);
  };
  return (
    <AppLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 md:px-8 py-6 md:py-10">
        {products.map(
          (product, index) =>
            product.favourited === true && (
              <Product
                product={product}
                key={index}
                handleClick={() => handleClick(index)}
              />
            )
        )}
      </div>
    </AppLayout>
  );
};

export default Favourite;
