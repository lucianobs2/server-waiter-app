import { Product } from '../../models/Product.js';

export async function listProducts() {
  const products = await Product.find();
  return { products };
}
