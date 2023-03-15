import { ICol } from "@/lib/dbCols";
import React from "react";

interface ICollectionItem {
    index: number;
    item: ICol;
};

const CollectionItem: React.FC<ICollectionItem> = ({ index, item }) => {
  return (
    <div className="bg-white px-4 py-2 w-full">
        <div className="relative">
            <img src={item.img_path} alt={item.name} />
        </div>
    </div>
  );
};

export default CollectionItem;
