import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  public service;

  constructor() {
    this.service = new ProductService();
  }

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const newProduct = await this.service.create(product);

    return res.status(201).json(newProduct);
  };

  public getAll = async (req: Request, res: Response) => {
    const allProducts = await this.service.getAll();

    return res.status(200).json(allProducts);
  };
}
