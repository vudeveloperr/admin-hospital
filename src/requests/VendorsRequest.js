import BaseRequest from "./BaseRequest";

const prefix = "/vendor";

export default class VendorsRequest extends BaseRequest {
  fetchVendors() {
    const url = `${prefix}`;
    return this.get(url);
  }
  createVendor(data) {
    const url = `${prefix}/`;
    return this.post(url, data);
  }
  updateVendor(data) {
    const url = `${prefix}/`;
    return this.put(url, data);
  }
}
