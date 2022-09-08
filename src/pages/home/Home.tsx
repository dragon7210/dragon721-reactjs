import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AppLayout from "../../layout/AppLayout";
import { Product } from "../../components/product/product";
import { ProductModal } from "../../components/modal/ProductModal";
import { RootState } from "../../store";
import axios from "axios";
import LOGIN_TOKEN from "../../config/token";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const products = useSelector((store: RootState) => store.products);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("https://upayments-studycase-api.herokuapp.com/api/categories/", {
        headers: {
          Authorization: `Bearer ${LOGIN_TOKEN}`,
        },
      })
      .then((response) => setCategories(response.data.categories));
  }, []);

  useEffect(() => {
    return () => {
      console.log(categories);
    };
  }, [categories]);

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
  const handleChange = (e: any) => {
    setFilter(e.target.value);
  };

  return (
    <AppLayout>
      <div className="flex flex-col sm:flex-row w-full sm:w-auto justify-end align-middle gap-4 mx-6 sm:mx-12 mt-4">
        <select onChange={handleChange}>
          {categories.map((category: any) => (
            <option key={category.name}>{category.name}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 md:px-8 py-6 md:py-10">
        {products.map((product, index) =>
          filter !== "" ? (
            filter === product.category && (
              <Product
                product={product}
                key={index}
                handleClick={() => handleClick(index)}
              />
            )
          ) : (
            <Product
              product={product}
              key={index}
              handleClick={() => handleClick(index)}
            />
          )
        )}
        <ProductModal id={id} isOpen={isOpen} closeModal={closeModal} />
      </div>
    </AppLayout>
  );
};

export default Home;
