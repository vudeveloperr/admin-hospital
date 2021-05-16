import BaseRequest from "./BaseRequest";

const prefix = "/discount";

export default class DiscountRequest extends BaseRequest {
  fetchDiscount() {
    const url = `${prefix}`;
    return this.get(url);
  }

  createDiscount(data) {
    const url = `${prefix}/`;
    return this.post(url, data);
  }

  updateDiscount(data) {
    const url = `${prefix}/`;
    return this.put(url, data);
  }
}
