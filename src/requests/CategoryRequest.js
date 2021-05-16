import BaseRequest from "./BaseRequest";

const prefix = "/category";

class CategoryRequest extends BaseRequest {
  fetchCategories() {
    const url = `${prefix}/`;
    return this.get(url);
  }
  createCategory(data) {
    const url = `${prefix}/`;
    return this.post(url, data);
  }
  updateCategory(data) {
    const url = `${prefix}/`;
    return this.put(url, data);
  }
}

export default CategoryRequest;
