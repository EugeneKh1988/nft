import type { NextApiRequest, NextApiResponse } from 'next';
import { IReqOpt, nft } from '@/lib/dbNft';


const nftHandle: (req:NextApiRequest, res: NextApiResponse) => Promise<void> = async (req, res) => {
    if (req.method === 'GET') {
      const { type, verified, lazyMinted, sortField, sortDirection } = req.query;
      let options:IReqOpt = {} as any;
      if (type && !Array.isArray(type)) {
        options.type = type;
      }
      if (verified && !Array.isArray(verified)) {
        options.verified = verified === "1" ? true : false;
      }
      if (lazyMinted && !Array.isArray(lazyMinted)) {
        options.lazyMinted = lazyMinted === "1" ? true : false;
      }
      if (sortField && sortDirection === "asc" || sortDirection === "desc" && !Array.isArray(sortField)) {
        options.sortBy = {
            field: sortField as string,
            direction: sortDirection
        };
      }
      
      const retNft = await nft(options);
        if (Array.isArray(retNft)) {
          return res.json({nft: retNft});
        } 
        else {
          return res.json({error: true});
        }
    }
    return res.json({error: true});
};

export default nftHandle;
