import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Table,
  Modal,
  Row,
  Col,
  Button,
  Form,
  Input,
  InputNumber,
  Upload,
} from "antd";
import styled from "styled-components";
import vendoractions from "../../redux/actions/vendors";
import { UploadOutlined } from "@ant-design/icons";

const CenterWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  color: #1890ff;
  &:hover {
    cursor: pointer;
  }
`;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function Vendors(props) {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      render: (text, record, index) => (
        <ButtonWrapper
          onClick={() => {
            editClick(record);
            setId(record.id);
            setEditData(true);
          }}
        >
          Edit
        </ButtonWrapper>
      ),
    },
  ];

  const [modalVisble, setModalVisible] = useState(false);
  const [modalVisbleNew, setModalVisibleNew] = useState(false);
  const [addVendor, setAddVendor] = useState(false);
  const [editData, setEditData] = useState(0);
  const [id, setId] = useState(0);

  let [form] = Form.useForm();

  const formUpdate = (values) => {
    props.updateVendors({ ...values, id: id }, () => {
      setModalVisible(false);
      props.fetchVendors();
    });
  };

  const formCreate = (values) => {
    props.createVendors({ ...values }, () => {
      setModalVisibleNew(false);
      props.fetchVendors();
    });
  };

  useEffect(() => {
    props.fetchVendors();
  }, []);

  const editClick = (record) => {
    setModalVisible(true);
    form.setFieldsValue(record);
  };

  const modalOk = () => {
    setModalVisible(false);
  };

  const modalCancel = () => {
    setModalVisible(false);
  };

  const newVendorsClick = () => {
    setModalVisibleNew(true);
    setAddVendor(true);
    form.resetFields();
  };

  const modalOkNew = () => {
    setModalVisibleNew(false);
  };

  const modalCancelNew = () => {
    setModalVisibleNew(false);
  };

  return (
    <div>
      <Row className="">
        <Col span={19} className="">
          List Vendors
        </Col>
        <Col span={5} className="">
          <CenterWrapper>
            <Button className="btn-create-sale" onClick={newVendorsClick}>
              CREATE NEW VENDORS
            </Button>
          </CenterWrapper>
        </Col>
      </Row>
      <hr />
      <Table dataSource={props.vendors} columns={columns} />

      <Modal
        title="Create New Vendors"
        visible={modalVisbleNew}
        onOk={modalOkNew}
        onCancel={modalCancelNew}
      >
        <Form {...layout} form={form} onFinish={formCreate} name="control-ref">
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Detail Vendors"
        visible={modalVisble}
        onOk={modalOk}
        onCancel={modalCancel}
      >
        <Form {...layout} form={form} onFinish={formUpdate} name="control-ref">
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    vendors: state.vendors.vendors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVendors: () => {
      dispatch(vendoractions.onFetchVendors());
    },
    updateVendors: (data, callback) => {
      dispatch(vendoractions.onUpdateVendor(data, callback));
    },
    createVendors: (data, callback) => {
      dispatch(vendoractions.onCreateVendor(data, callback));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vendors);
