const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overalay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-3xl px-4 pt-4">Sun`s Out & BOGO`s Out</p>
          <p className="text-2xl px-4 pt-2">Through 8/26</p>
          <button className="border-white bg-white text-black p-2 mx-4 rounded-lg absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md: max-h-[280px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="/"
        />
      </div>
      {/*Cards */}
      <div className="rounded-xl relative">
        {/*Overlays */}
        <div className="absolute w-full h-full bg-black/50 text-white  rounded-xl">
          <p className="font-bold text-3xl px-4 pt-4">New Restaurant</p>
          <p className="text-2xl px-4 pt-2">Gold</p>
          <button className="bg-white border-white text-black p-2 mx-4 rounded-lg absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md: max-h-[280px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        />
      </div>
      {/*Cards */}
      <div className="rounded-xl relative">
        {/*Overlays */}
        <div className="absolute w-full h-full text-white bg-black/50 rounded-xl">
          <p className="font-bold text-3xl px-4 pt-4">Nice Job</p>
          <p className="text-2xl px-4 pt-2">Nice Restaurant</p>
          <button className="bg-white border-white  text-black rounded-lg p-2 mx-4 absolute bottom-4">
            Order Now
          </button>
        </div>

        <img
          className="max-h-[160px] md: max-h-[280px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
