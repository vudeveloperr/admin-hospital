import BaseRequest from "./BaseRequest";

const schema = "admin";

class AdminRequest extends BaseRequest {
  fetchAdmin() {
    const url = `${schema}/`;
    return this.get(url);
  }
  updateAdmin(data) {
    const url = `${schema}/`;
    return this.put(url,data);
  }
}

export default AdminRequest;
