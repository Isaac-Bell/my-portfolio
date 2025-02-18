import prisma from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const messages = await prisma.message.findMany({ orderBy: { createdAt: "desc" } });
    return res.status(200).json(messages);
  }
  if (req.method === "POST") {
    const { name, email, content } = req.body;
    const message = await prisma.message.create({ data: { name, email, content } });
    return res.status(201).json(message);
  }
  if (req.method === "DELETE") {
    const { id } = req.query;
    await prisma.message.delete({ where: { id: String(id) } });
    return res.status(200).json({ message: "Deleted successfully" });
  }
}
