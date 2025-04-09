import express from 'express';
import { verifyDownloadToken } from '../middleware/auth';
import { orders, products } from '../mock/mockData';

const router = express.Router();

router.get('/download', verifyDownloadToken, (req: any, res: any) => {
  const { userId, productId } = req.body.user;

  const order = orders.find(order => order.purchaser_id === userId && order.product_id === productId);
  if (!order) {
    return res.status(403).json({ message: 'Access denied. Product not purchased.' });
  }

  const product = products.find(product => product.id === productId);
  if (!product) {
    console.log('❌ Product not found.');
    return res.status(404).json({ message: 'Product not found.' });
  }

  res.setHeader('Content-Disposition', `attachment; filename=${product.private_file}`);
  res.send(`Pretend this is the content of ${product.private_file}`);
});

export default router;
