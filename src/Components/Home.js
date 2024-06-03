import { useEffect, useState } from "react";
import Card from "./Card";

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
        <Card filteredData={filteredData} />
      </div>
    </div>
  );
};

export default Home;
