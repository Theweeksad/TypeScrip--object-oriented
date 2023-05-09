import axios from "axios";

import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";
import { ProductService } from "../models/produtc-service-model";

export class ProductHttpService implements ProductService{

  private url = 'https://api.escuelajs.co/api/v1/products';

  async getAll() {
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }

  async update(id: Product['id'], changes: UpdateProductDto) {
    const { data } = await axios.put(`${this.url}/${id}`, changes); //put para modificar el id como parte de la url
    return data;
  }

  async create(dto: CreateProductDto) {
    const { data } = await axios.post(this.url, dto); //envio los cambios a la url, para crear
    return data;
  }

  async findOne(id: Product['id']) {
    const { data } = await axios.get(`${this.url}/${id}`); //get para concatenar el id
    return data;
  }

}
