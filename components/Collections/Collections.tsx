import React, { useEffect, useState } from "react";
import useSWR from "swr";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { ICol } from "@/lib/dbCols";
import CollectionItem from "./CollectionItem";

type Days = {
  text: string;
  days: number;
};


const Collections: React.FC = () => {
  const [days, setDays] = useState(1);
  const [daysText, setDaysText] = useState(
    days === 1 ? "Last 24 Hours" : `Last ${days} Days`
  );
  const daysItems: Days[] = [
    { text: "Last 24 Hours", days: 1 },
    { text: "Last 7 Days", days: 7 },
    { text: "Last 30 Days", days: 30 },
  ];

  // collection data from server
  const fetcher = (args: string) => fetch(args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `/api/collections?days=${days}`,
    fetcher
  );
  const collections: ICol[] = data && data.cols ? data.cols : [];

 /*  useEffect(() => {
    setDaysText(days === 1 ? "Last 24 Hours" : `Last ${days} Days`);
  }, [days]); */

  const onDaysClick: (daysItem: Days) => void = (daysItem) => {
    setDays(daysItem.days);
    setDaysText(daysItem.text);

    // close on click
    const elem = document.activeElement;
    if (elem) {
      (elem as any)?.blur();
    }
  };

  return (
    <div className="bg-[#fcfafd]">
      <div className="text-[#131740] flex justify-center items-center pt-20 pb-10">
        <p className="text-lg sm:text-3xl font-bold">Top collections over</p>
        <div className="dropdown">
          <label
            tabIndex={0}
            className="text-[#8358ff] text-lg sm:text-3xl font-bold ml-2"
          >
            {daysText}
            <FontAwesomeIcon
              icon={faChevronDown}
              className="w-4 inline-block ml-2"
            />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-xl w-48 text-[#131740]"
          >
            {daysItems.map((item) => {
              return (
                <li key={item.days}>
                  <a
                    className="active:bg-[#ccc] active:text-[#131740]"
                    onClick={() => {
                      onDaysClick(item);
                    }}
                  >
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-[60px] lg:px-[75px] md:gap-8 pb-10">
        {collections.map((col, index) => (
          <CollectionItem key={col._id} item={col} index={index} />
        ))}
      </div>
      <div className="flex justify-center pt-3 pb-14">
        <button className="btn rounded-[12px] text-white bg-[#8358ff] hover:bg-[#6c3ef5] normal-case border-none">
          Go To Rankings
        </button>
      </div>
    </div>
  );
};

export default Collections;

