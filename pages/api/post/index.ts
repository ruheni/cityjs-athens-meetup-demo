import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import data from '../../../data.json'


// POST /api/post
// Required fields in body: title
// Optional fields in body: content
// Optional field in body: author: name
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { title, content, author } = req.body;

  const post = { title, content, author }

  res.json(post);

}
