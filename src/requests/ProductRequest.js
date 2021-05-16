import BaseRequest from "./BaseRequest";

const prefix = "/product";

export default class ProductRequest extends BaseRequest {
  fetchProducts(params) {
    const url = `${prefix}/list`;
    return this.get(url, params);
  }
  createProduct(data) {
    const url = `${prefix}/`;
    return this.post(url, data);
  }
  updateProduct(data) {
    const url = `${prefix}/`;
    return this.put(url, data);
  }
  searchProduct(data) {
    const url = `${prefix}/search`;
    return this.get(url, data);
  }
}
