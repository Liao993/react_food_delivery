import { Data } from "../data/Data";

import { useState } from "react";
const Food = () => {
  const [food, setFood] = useState(Data);

  return (
    <div className="max-w-[1640px] m-auto my-12 px-4">
      <h1 className="text-orange-600 font-bold text-center text-4xl mb-10">
        Top Rated Meau
      </h1>
      {/* Filter Row */}
      <div className="flex flex-col  lg:flex-row ">
        {/* Filter Type */}
        <div className="mb-5">
          <p className="font-bold text-lg text-gray-600 pb-2">Filter Type</p>
          <div className="flex  w-full">
            <button className="m-1 px-4 rounded-xl  bg-white border-orange-600 border-2 text-orange-600 hover:bg-orange-600 hover:text-white">
              All
            </button>
            <button className="m-1 px-4 rounded-xl  bg-white border-orange-600 border-2 text-orange-600 hover:bg-orange-600 hover:text-white">
              Burgers
            </button>
            <button className="m-1 px-4 rounded-xl  bg-white border-orange-600 border-2 text-orange-600 hover:bg-orange-600 hover:text-whitem-1 border-orange text-orange-600 hover:bg-orange-600 hover:text-white">
              Pizza
            </button>
            <button className="m-1 px-4 rounded-xl  bg-white border-orange-600 border-2 text-orange-600 hover:bg-orange-600 hover:text-white">
              Salads
            </button>
            <button className="m-1 px-4 rounded-xl  bg-white border-orange-600 border-2 text-orange-600 hover:bg-orange-600 hover:text-white">
              Chicken
            </button>
          </div>
        </div>
        {/* Filter Price */}
        <div className="mb-5 lg:mx-5">
          <p className="font-bold text-lg text-gray-600 pb-2">Filter Price</p>
          <div className="flex  w-full">
            <button className="m-1 px-4 rounded-xl  bg-white border-orange-600 border-2 text-orange-600 hover:bg-orange-600 hover:text-white">
              $
            </button>
            <button className="m-1 px-4 rounded-xl  bg-white border-orange-600 border-2 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$
            </button>
            <button className="m-1 px-4 rounded-xl  bg-white border-orange-600 border-2 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$
            </button>
            <button className="m-1 px-4 rounded-xl  bg-white border-orange-600 border-2 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/*display food data */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {food.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-110 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold text-lg">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-2 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
