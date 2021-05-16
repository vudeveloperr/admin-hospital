import BaseRequest from "./BaseRequest";

const prefix = "/import";

export default class ImportRequest extends BaseRequest {
  createImport(data) {
    const url = `${prefix}`;
    return this.post(url, data);
  }

  fetchImport() {
    const url = `${prefix}`;
    return this.get(url);
  }
}
