import React, { useState } from "react";
import { fishingRegulations } from "../../lib/Data";

const Fishing = () => {
  const [fishData, setFishData] = useState(() => fishingRegulations);
  return (
    <div className="h-screen w-full relative">
      <ul className="w-full absolute mx-auto text-center">
        {fishData.map((data, index) => (
          <li key={index} className="pt-10 px-10 text-left">
            <p>{data.species}</p>
            <p>{data.nicknames ? `${data.nicknames},` : <>*none*</>}</p>
            <div>
              {data.seasons.map((date) => (
                <div className="flex">
                  Opens: {date.opening} - Closes:{" "}
                  <p>
                    {date.opening || date.close ? (
                      date.close && date.close
                    ) : (
                      <>*Open Season</>
                    )}{" "}
                  </p>
                </div>
              ))}
            </div>
            <div>
              {data.seasons.map((size) => (
                <div className="flex">
                  Min: {size.minimumSize ? size.minimumSize + '"' : <>*no size limit*</>}{" "}
                  - Max:{" "}
                  <p>
                    {size.maximumSize ? size.maximumSize + '"' : <>*no size limit*</>}{" "}
                  </p>
                </div>
              ))}
            </div>
            <div>
              {data.seasons.map((bag) => (
                <div className="flex">
                  Bag Limit: {bag.bagLimit ? bag.bagLimit : <>*no bag limit*</>}{" "}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fishing;
