import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [showAvailable, setShowAvailable] = useState(false);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredData = showAvailable
    ? data.filter((coffee) => coffee.available)
    : data;

  return (
    <div className="homepage bg-[#111315] h-[1100px] font-sans">
      <img
        src={`${process.env.PUBLIC_URL}/bg-cafe.jpg`}
        alt="bg-cafe"
        className="w-full h-66 absolute"
      />

      <div className="collection bg-[#1B1D1F] h-fit w-[85%] mx-24 my-40 rounded-lg absolute">
        <div
          className="pt-10 mx-[280px] bg-contain bg-no-repeat bg-right mt-8"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/vector.svg)`,
            backgroundSize: "50% 80%",
          }}
        >
          <h2 className="text-3xl text-white font-semibold">Our Collection</h2>
          <p className="text-[#6F757C] pt-4 font-semibold">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <button
            type="button"
            className="bg-[#6F757C] mt-5 text-white px-4 py-1.5 rounded-lg"
            onClick={() => setShowAvailable(false)}
          >
            All Products
          </button>
          <button type="button" onClick={() => setShowAvailable(true)}>
            <span className="text-white ml-2">Available Now</span>
          </button>
        </div>
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
                    <img
                      src={`${process.env.PUBLIC_URL}/Star.svg`}
                      alt="star"
                    />
                    <span className="ml-1 text-[#6F757C]">No ratings</span>
                  </div>
                )}
                {coffee.available ? (
                  ""
                ) : (
                  <p className="text-[#ED735D] font-semibold text-sm">
                    Sold out
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
