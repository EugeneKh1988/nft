import type { NextApiRequest, NextApiResponse } from 'next';
import { biggestLikes as likes } from '@/lib/dbNft';


const biggestLikes: (req:NextApiRequest, res: NextApiResponse) => Promise<void> = async (req, res) => {
    if (req.method === 'GET') {
      const { count } = req.query;
      if (count && !Array.isArray(count)) {
        const retNft = parseInt(count) > 0 ? await likes(parseInt(count)) : [];
        if (Array.isArray(retNft)) {
          return res.json({nft: retNft});
        } 
        else {
          return res.json({error: true});
        }
      }
    }
    return res.json({error: true});
};

export default biggestLikes;
