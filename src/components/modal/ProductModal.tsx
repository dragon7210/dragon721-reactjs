import Modal from "react-modal";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useDispatch } from "react-redux";
import { addFavouritePro } from "../../store/slices/productSlice";

type Props = {
  id: number;
  isOpen: boolean;
  closeModal: () => void;
};

const customStyles = {
  content: {},
};

export const ProductModal: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { id, isOpen, closeModal } = props;
  const products = useSelector((store: RootState) => store.products);

  const addProduct = async () => {
    await dispatch(addFavouritePro(products[id]));
    closeModal();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="top-2/4 left-2/4 right-auto bottom-auto w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all opacity-100 border-none mx-auto mt-16 lg:mt-24 outline-none"
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Example Modal"
    >
      <div className="flex flex-col">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Product View
        </h3>
        {id !== -1 && (
          <div className="mt-2">
            <img
              className="object-cover w-full max-h-96"
              src={products[id].avatar}
              alt="img"
            />
            <div className="mt-1">
              <span className="font-semibold text-sm">Name</span>:{" "}
              {products[id].name}
            </div>
            <div className="mt-1">
              <span className="font-semibold text-sm">Category</span>:{" "}
              {products[id].category}
            </div>
            <div className="mt-1">
              <span className="font-semibold text-sm">Price:</span>{" "}
              {products[id].price}
            </div>
            <div className="mt-1">
              <span className="font-semibold text-sm">Description:</span>{" "}
              {products[id].description}
            </div>
          </div>
        )}

        <div className="mt-2 flex justify-end">
          <button
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-20"
            onClick={addProduct}
          >
            Add
          </button>
          <button
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 w-20"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};
