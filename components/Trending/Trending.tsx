import React, { useState } from "react";
import useSWR from "swr";

// icons
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TrendingMenu from "./TrendingMenu";
import { INft } from "@/lib/dbNft";
import TrendingItem from "./TrendingItem";


const Trending: React.FC = () => {
  const [nftType, setNftType] = useState("all");
  const [sortType, setSortType] = useState("id");
  const [verified, setVerified] = useState(false);
  const [lazyMinted, setLazyMinted] = useState(false);

  // collection data from server
  const fetcher = (args: string) => fetch(args).then((res) => res.json());
  // build query
  let query = `/api/nft?type=${nftType}`;
  query = verified === true ? `${query}&verified=1` : `${query}&verified=0`;
  query =
    lazyMinted === true ? `${query}&lazyMinted=1` : `${query}&lazyMinted=0`;
  if (sortType === "id") {
    query = `${query}&sortField=id&sortDirection=asc`;
  } else if (sortType === "priceUp") {
    query = `${query}&sortField=price&sortDirection=asc`;
  } else if (sortType === "priceDown") {
    query = `${query}&sortField=price&sortDirection=desc`;
  }
  const { data, error, isLoading } = useSWR(
    query,
    fetcher
  );
  const nft: INft[] = data && data.nft ? data.nft : [];

  return (
    <div className="bg-white">
      <h2 className="text-center text-[#131740] text-lg sm:text-3xl font-bold pt-14 pb-8">
        <FontAwesomeIcon
          icon={faBoltLightning}
          color="#f2ee54"
          className="inline w-4 mr-1"
        />
        Trending Categories
      </h2>
      <TrendingMenu
        nftType={nftType}
        sortType={sortType}
        verified={verified}
        lazyMinted={lazyMinted}
        onNftTypeChange={(type: string) => setNftType(type)}
        onSortTypeChange={(type: string) => setSortType(type)}
        onVerifiedChange={(verified: boolean) => setVerified(verified)}
        onShowLazyMintedChange={(lazyMinted: boolean) =>
          setLazyMinted(lazyMinted)
        }
      />
      <div className="py-3 lg:px-[100px] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {nft.map((nftItem) => (
          <TrendingItem key={nftItem._id} item={nftItem} />
        ))}
      </div>
    </div>
  );
};

export default Trending;

