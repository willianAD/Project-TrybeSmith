import ProductModel from '../models/product.model';
import IProduct from '../interfaces/product.interface';
import IProductAll from '../interfaces/productAll.interface';
import connection from '../models/connection';

export default class ProductService {
  public model;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create = async (product: IProduct): Promise<IProduct> => {
    const newProduct = await this.model.create(product);
    return newProduct;
  };

  public getAll = async (): Promise<IProductAll[]> => {
    const allProducts = await this.model.getAll();
    return allProducts;
  };
}
