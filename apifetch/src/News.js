import React, { useEffect, useState } from "react";
import axios from "axios";
const News = () => {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4af101e429a64033981d6ff9410cb6b2"
      )
      .then((res) => setMyData(res.data.articles)); //will get data from api
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-[40px]">
      <h1 className="font-semibold text-[42px]">Ambula News</h1>
      {/* map to get display all the data in api */}
      {myData.map((post) => {
        const { id, author, title, description, urlToImage } = post;
        return (
          <div
            key={id}
            className="flex flex-col  w-[60%] h-fit border-2 border-black p-[10px]"
          >
            <h1 className="text-xl font-semibold mb-[10px]">{title}</h1>
            <h3 className="text-xl font-medium mb-[10px]">{author}</h3>
            <p className="text-xl mb-[10px]">{description}</p>
            <img
              src={urlToImage}
              alt="img"
              className="w-[80%] h-[400px] m-auto"
            />
          </div>
        );
      })}
    </div>
  );
};

export default News;
