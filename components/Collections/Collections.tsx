import React, { useEffect, useState } from "react";
import useSWR from "swr";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { ICol } from "@/lib/dbCols";
import CollectionItem from "./CollectionItem";


const Collections: React.FC = () => {
  const [days, setDays] = useState(1);
  const [daysText, setDaysText] = useState(
    days === 1 ? "Last 24 Hours" : `Last ${days} Days`
  );
  const daysItems = [
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

  return (
    <div className="bg-[#fcfafd]">
      <div className="text-[#131740] flex justify-center items-center">
        <p className="text-3xl font-bold">Top collections over</p>
        <div className="dropdown">
          <label
            tabIndex={0}
            className="text-[#8358ff] text-3xl font-bold ml-2"
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
                <li
                  key={item.days}
                  onClick={() => {
                    setDays(item.days);
                    setDaysText(item.text);
                  }}
                >
                  <a className="active:bg-[#ccc] active:text-[#131740]">
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {
            collections.map((col, index) => <CollectionItem item={col} index={index} />)
        }
      </div>
    </div>
  );
};

export default Collections;

