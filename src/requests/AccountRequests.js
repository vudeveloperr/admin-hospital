import BaseRequest from "./BaseRequest";

const schema = "account";

class AccountRequest extends BaseRequest {
  login(data) {
    const url = `${schema}/login`;
    return this.post(url, data);
  }
}

export default AccountRequest;
