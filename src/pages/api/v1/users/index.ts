// pages/api/list.ts
import { NextApiRequest, NextApiResponse } from 'next';

let list: string[] = ['Item 1', 'Item 2', 'Item 3'];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(list);
  } else if (req.method === 'POST') {
    const { item } = req.body;
    if (item && typeof item === 'string') {
      list.push(item);
      res.status(201).json({ message: 'Item added' });
    } else {
      res.status(400).json({ message: 'Invalid item' });
    }
  } else if (req.method === 'DELETE') {
    const { item } = req.body;
    list = list.filter((i) => i !== item);
    res.status(200).json({ message: 'Item deleted' });
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
