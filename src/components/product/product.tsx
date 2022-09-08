type Props = {
  product: any;
  handleClick: any;
};

export const Product: React.FC<Props> = ({ product, handleClick }) => {
  return (
    <div
      className="flex flex-col w-full rounded cursor-pointer p-2 md:p-4 lg:p-8"
      onClick={handleClick}
    >
      <div className="flex w-full h-full min-h-[528px]">
        <img
          src={product.avatar}
          className="object-cover w-full h-full"
          alt="img"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <h5 className="text-base md:text-lg font-bold text-lime-600">
          {product.name}
        </h5>
        <span className="text-base md:text-lg font-semibold text-violet-800">
          {product.price}
        </span>
      </div>
    </div>
  );
};
