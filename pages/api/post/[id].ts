import type { NextApiRequest, NextApiResponse } from 'next'
// import prisma from '../../../lib/prisma'
import data from '../../../data.json'


// DELETE /api/post/:id
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const postId = req.query.id;

  if (req.method === "DELETE") {
    
    // retrieve post by id
    const post = data.filter(post => post.id === postId)
    res.status(200).json({ success: true, post: post[0] });

  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
