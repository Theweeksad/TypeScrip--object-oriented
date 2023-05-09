import axios from 'axios';
import { UpdateProductDto } from '../dtos/product.dto';

import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export class BaseHttpService<Typeclass> {
  // data: Typeclass[] = [];

  constructor(
    protected url: string
  ) {}

  async getAll() {
    const { data } = await axios.get<Typeclass[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes); //put para modificar el id como parte de la url
    return data;
  }
}

// const service = new BaseHttpService<string>();
// service.getAll()

// const service1 = new BaseHttpService<number>();
// service.getAll

(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url1);

  const rta1 = await productService.getAll();
  console.log('products', rta1.length);
  productService.update<Product['id'], UpdateProductDto>(1, {
    title: 'new',
  })

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url2);

  const rta2 = await categoryService.getAll();
  console.log('categories', rta2.length);
})();
