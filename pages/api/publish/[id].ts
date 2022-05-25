import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../../data.json'
// import prisma from '../../../lib/prisma'

// PUT /api/publish/:id
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const postId = req.query.id;
  const post = data.filter(post => post.id === postId)

  const { id, title, content, author } = post[0]
  res.json({ id, title, content, author, published: true });
}
