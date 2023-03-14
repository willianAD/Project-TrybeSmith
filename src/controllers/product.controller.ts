import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  public service;

  constructor() {
    this.service = new ProductService();
  }

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    console.log(this.service);

    const newProduct = await this.service.create(product);

    return res.status(201).json(newProduct);
  };
}
