import { ICol } from "@/lib/dbCols";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface ICollectionItem {
    index: number;
    item: ICol;
};

const CollectionItem: React.FC<ICollectionItem> = ({ index, item }) => {
  return (
    <div className="bg-white px-6 py-4 rounded-[20px] border border-[#ccc] hover:shadow-lg flex">
      <div className="relative rounded-[12px]">
        <img src={item.img_path} alt={item.name} className="rounded-[12px]" />
        <p
          className="w-6 h-6 rounded-full bg-[#131740] text-white border border-white 
            absolute p-1 text-center text-[10px] top-[25%] right-3/4"
        >
          {index + 1}
        </p>
        {item.verified ? (
          <p
            className="w-6 h-6 rounded-full bg-[#10b981] text-white border border-white 
            absolute p-1 text-center text-[10px] top-[60%] right-3/4"
          >
            <FontAwesomeIcon icon={faCheck} className="w-4" />
          </p>
        ) : null}
      </div>
      <div className="ml-3">
        <p className="text-[#131740] text-lg font-medium">{item.name}</p>
        <p>{item.sum} ETH</p>
      </div>
    </div>
  );
};

export default CollectionItem;
