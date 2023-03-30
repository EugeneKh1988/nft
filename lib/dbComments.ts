import clientPromise from "./mongodb";

export interface IComment {
    _id?: string;
    name: string;
    position: string;
    comment: number;
    img_path: string;
    rate: number;
};

// get some count of comments 
const comments: (last: number) => Promise<IComment> = async (last) => {
    try {
        const client = await clientPromise;
        const db = client.db("nft")
        const collection = db.collection("comments")
        const resArr = await collection.find().sort({_id: -1}).limit(last).toArray();
        return resArr;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export {comments};