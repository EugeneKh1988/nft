import type { NextApiRequest, NextApiResponse } from 'next';
import { collections as cols } from '@/lib/dbCols';


const collections: (req:NextApiRequest, res: NextApiResponse) => Promise<void> = async (req, res) => {
    if (req.method === 'GET') {
      const { days } = req.query;
      if (days && !Array.isArray(days)) {
        let startDate = new Date(2023, 2, 14, 18);
        const endDate = new Date(2023, 2, 14, 18);
        if (days === "1") {
          startDate.setDate(startDate.getDate() - 1);
        } else if (days === "7") {
          startDate.setDate(startDate.getDate() - 7);
        } else if (days === "30") {
          startDate.setDate(startDate.getDate() - 30);
        }
        const retCols = await cols(startDate, endDate);
        if (Array.isArray(retCols)) {
          return res.json({cols: retCols});
        } 
        else {
          return res.json({error: true});
        }
      }
    }
    return res.json({error: true});
};

export default collections;
