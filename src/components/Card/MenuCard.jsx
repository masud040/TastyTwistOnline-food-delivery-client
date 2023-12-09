import { IoMdAdd } from "react-icons/io";
const MenuCard = ({ item }) => {
  const { _id, name, price, description, image_url } = item || {};

  return (
    <div className="flex justify-between items-center text-dark-gray border gap-3 border-gray-300 rounded-lg p-2 group ">
      <div className="space-y-1 flex-1    ">
        <h2 className="text-lg text-gray-800 font-semibold">{name}</h2>
        <p className="text-gray-600 ">{description}</p>
        <h4 className="text-[18px] text-gray-800 font-semibold">
          Price: {price}
        </h4>
      </div>
      <div className="relative">
        <img
          src={image_url}
          className="rounded-lg mx-auto h-[120px] group-hover:scale-110 
          transition w-[120px]"
          alt=""
        />
        <button className="absolute bottom-2 right-1 hover:bg-pink-100 transition-all delay-100  text-3xl bg-pink-50  rounded-full text-primary">
          <IoMdAdd />
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
