import BaseRequest from "./BaseRequest";

const prefix = "/order";

export default class OrderRequest extends BaseRequest {
  fetchOrders() {
    const url = `${prefix}/listAll`;
    return this.get(url);
  }
  acceptOrder(params) {
    const url = `${prefix}/${params.id}`;
    return this.put(url);
  }
}
