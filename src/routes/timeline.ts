import { Router, Request, Response } from 'express';
import Tweet from '../models/tweet';
import Tag from './feeds';

const router = Router();

router.get('/timeline', async (req: Request, res: Response) => {
  const userId = parseInt(req.query.userId as string, 10);

  const tweets = await Tweet.findAll({
    where: { userId },
    include: [{
      model: Tag,
      where: { taggedUserId: userId },
      required: false,
    }],
    order: [['createdAt', 'DESC']],
  });

  res.json(tweets);
});

export default router;
