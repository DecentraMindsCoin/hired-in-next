import React, { useState } from 'react'
import { fishingRegulations } from '../../lib/Data'

const Fishing = () => {
  const [fishData, setFishData] = useState(() => fishingRegulations)
  return (
    <div className="relative h-screen w-full">
      <ul className="absolute mx-auto w-full text-center">
        {fishData.map((data, index) => (
          <li key={index} className="px-10 pt-10 text-left">
            <p>{data.species}</p>
            <p>{data.nicknames ? `${data.nicknames},` : <>*none*</>}</p>
            <div>
              {data.seasons.map((date, index) => (
                <div key={index} className="flex">
                  Opens: {date.opening} - Closes:{' '}
                  <p>
                    {date.opening || date.close ? (
                      date.close && date.close
                    ) : (
                      <>*Open Season</>
                    )}{' '}
                  </p>
                </div>
              ))}
            </div>
            <div>
              {data.seasons.map((size, index) => (
                <div key={index} className="flex">
                  Min:{' '}
                  {size.minimumSize ? (
                    size.minimumSize + '"'
                  ) : (
                    <>*no size limit*</>
                  )}{' '}
                  - Max:{' '}
                  <p>
                    {size.maximumSize ? (
                      size.maximumSize + '"'
                    ) : (
                      <>*no size limit*</>
                    )}{' '}
                  </p>
                </div>
              ))}
            </div>
            <div>
              {data.seasons.map((bag, index) => (
                <div key={index} className="flex">
                  Bag Limit: {bag.bagLimit ? bag.bagLimit : <>*no bag limit*</>}{' '}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Fishing
