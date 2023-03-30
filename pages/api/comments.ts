import type { NextApiRequest, NextApiResponse } from 'next';
import { comments as dbComments } from '@/lib/dbComments';


const comments: (req:NextApiRequest, res: NextApiResponse) => Promise<void> = async (req, res) => {
    if (req.method === 'GET') {
      const { last } = req.query;
      if (last && !Array.isArray(last)) {
        const retComments = parseInt(last) > 0 ? await dbComments(parseInt(last)) : [];
        if (Array.isArray(retComments)) {
          return res.json({com: retComments});
        } 
        else {
          return res.json({error: true});
        }
      }
    }
    return res.json({error: true});
};

export default comments;
