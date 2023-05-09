import { ProductMemoryService } from "./service/product.memory-service";

const productService = new ProductMemoryService();

productService.create({
  title: 'Product1',
  price: 100,
  description: 'bla bla bla bla',
  categoryId: 12,
  images: []
});

const products = productService.getAll();
const productId = products[0].id;

productService.update(productId, {
  title: 'Change name'
});

const rta = productService.findOne(productId);
console.log(rta);
