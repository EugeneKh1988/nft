import clientPromise from "./mongodb";

export interface ICol {
    _id?: string;
    name: string;
    sum: number;
    verified: boolean;
    modify_date: Date;
    img_path: string;
};

// get collection by modify date
const collections: (startDate: Date, endDate: Date) => Promise<ICol[] | null> = async (startDate, endDate) => {
    try {
        const client = await clientPromise;
        const db = client.db("nft")
        const collection = db.collection("ethcollection")
        const resArr = await collection.find({modify_date: {$gte: startDate, $lte: endDate}}).toArray();
        return resArr;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export {
    collections,
};

