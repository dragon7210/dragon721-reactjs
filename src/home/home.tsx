import axios from "axios";
import { useState, useEffect } from "react";
import token from "../data/token";
import { Product } from "../components/product/product";
import { ProductModal } from "../components/modal/ProductModal";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { setProducts } from "../store/slices/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((store: RootState) => store.products);
  const [view, setView] = useState(false);
  const [id, setId] = useState(-1);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClick = (id: number) => {
    openModal();
    setId(id);
  };

  const handleView = () => {
    setView(true);
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://upayments-studycase-api.herokuapp.com/api/products",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(setProducts(response.data.products));
    })();
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 md:px-8 py-6 md:py-10">
      {products.map((product, index) => (
        <Product
          product={product}
          key={index}
          handleClick={() => handleClick(index)}
        />
      ))}
      {/* <ViewProduct open={view} closeHandle={() => setView(false)} id={id} /> */}
      <ProductModal id={id} isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default Home;
