// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, price, stock, description } = req.body;

    const newProduct = await prisma.product.create({
      data: {
        name,
        price,
        stock,
        description,
      },
    });

    if (newProduct) {
      return res.status(200).json({ newProduct });
    }

    return res.status(301).json({ message: 'error' });
  }
  const product = await prisma.product.findMany();

  res.status(200).json({ product });
}
