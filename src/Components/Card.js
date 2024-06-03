const Card = ({ filteredData }) => {
  return (
    <div className="grid grid-cols-3 gap-6 mx-24 mt-10">
      {filteredData.map((coffee) => (
        <a
          href={`#${coffee.id}`}
          id={coffee.id}
          className="group mb-10 transition duration-300 hover:scale-110 hover:shadow-2xl rounded-xl hover:bg-[#1b1d1fcb]"
          key={coffee.id}
        >
          <div
            style={{
              backgroundImage: `url(${coffee.image})`,
              backgroundSize: "cover",
              height: "171px",
              width: "100%",
              borderRadius: "16px",
              padding: "10px",
            }}
          >
            {coffee.popular && (
              <p className="bg-[#F6C768] text-[#1B1D1F] text-xs w-fit font-bold px-2 py-1 rounded-xl text-left">
                Popular
              </p>
            )}
          </div>
          <div className="text-white flex justify-between mt-2">
            <h3 className="font-semibold">{coffee.name}</h3>
            <p className="bg-[#BEE3CC] text-[#111315] font-bold rounded-md p-1 text-xs">
              {coffee.price}
            </p>
          </div>

          <div className="rating_available flex justify-between mt-3">
            {coffee.rating ? (
              <div className="flex text-white text-sm font-semibold">
                <img
                  src={`${process.env.PUBLIC_URL}/Star_fill.svg`}
                  alt="star"
                />
                <span className="ml-1">
                  {parseFloat(coffee.rating).toFixed(2)}
                </span>
                <span className="ml-1 text-[#6F757C]">
                  ({coffee.votes} votes)
                </span>
              </div>
            ) : (
              <div className="flex text-white text-sm font-semibold">
                <img src={`${process.env.PUBLIC_URL}/Star.svg`} alt="star" />
                <span className="ml-1 text-[#6F757C]">No ratings</span>
              </div>
            )}
            {coffee.available ? (
              ""
            ) : (
              <p className="text-[#ED735D] font-semibold text-sm">Sold out</p>
            )}
          </div>
        </a>
      ))}
    </div>
  );
};

export default Card;
