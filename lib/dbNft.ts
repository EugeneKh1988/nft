import clientPromise from "./mongodb";

export interface INft {
    _id?: string;
    name: string;
    cost: number;
    current_bid: number;
    likes: number;
    img_path: string;
    desc: string;
    lazy_minted: boolean;
    type: string;
    verified: boolean;
    creator: string;
};

export interface IReqOpt {
    type?: string;
    sortBy?: {
        field: string;
        direction: "asc" | "desc";
    };
    verified?: boolean;
    lazyMinted?: boolean; 
};

// get some count of nft with the biggest likes
const biggestLikes: (nftCount: number) => Promise<INft> = async (nftCount) => {
    try {
        const client = await clientPromise;
        const db = client.db("nft")
        const collection = db.collection("nft")
        const resArr = await collection.find().sort({likes: -1}).limit(nftCount).toArray();
        return resArr;
    } catch (error) {
        console.log(error);
        return null;
    }
};

// get some count of nft with the options
const nft: (options: IReqOpt) => Promise<INft> = async (options) => {
    try {
        const client = await clientPromise;
        const db = client.db("nft")
        const collection = db.collection("nft")
        let queryObj =  {} as any;
        if (options?.type !== "all") {
            queryObj.type = options?.type;
        }
        if (options?.verified) {
            queryObj.verified = options?.verified;
        }
        if (options?.lazyMinted) {
            queryObj.lazy_minted = options?.lazyMinted;
        }
        let sortBy = {};
        if (options.sortBy) {
            const field = options.sortBy?.field;
            if (field === "id") {
                sortBy = options.sortBy?.direction === "asc" ? {_id: 1} : {_id: -1}; 
            } else if (field === "price") {
                sortBy = options.sortBy?.direction === "asc" ? {cost: 1} : {cost: -1}; 
            }
        }
        const resArr = await collection.find(queryObj).sort(sortBy).limit(20).toArray();
        return resArr;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export {
    biggestLikes,
    nft,
};

