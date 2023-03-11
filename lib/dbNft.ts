import clientPromise from "./mongodb";

export interface INft {
    _id?: string;
    name: string;
    cost: number;
    current_bid: number;
    likes: number;
    img_path: string;
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
    }
    return [];
};

export {
    biggestLikes,
};

