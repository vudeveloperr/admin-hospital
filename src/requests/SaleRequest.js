import BaseRequest from "./BaseRequest";

const prefix = "/sale";

export default class SaleRequest extends BaseRequest {
  fetchSales() {
    const url = `${prefix}`;
    return this.get(url);
  }
  createSale(data) {
    const url = `${prefix}/`;
    return this.post(url, data);
  }
  updateSale(params) {
    const url = `${prefix}/${params.id}`;
    return this.put(url);
  }
}
