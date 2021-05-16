import { useEffect, useState } from "react";
import {
  Form,
  Select,
  Table,
  Button,
  Modal,
  InputNumber,
  Row,
  Col,
  Spin,
  notification
} from "antd";
import {DeleteOutlined} from '@ant-design/icons'
import _ from 'lodash';
import styled from "styled-components";
import { connect } from 'react-redux';

import importactions from "../../../../redux/actions/import";
import productactions from '../../../../redux/actions/product';



const Bold = styled.span`
  font-weight:bold;
  float: right
`
const Center = styled.div`
  text-align: center;
`;

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};


function ImportForm(props) {
  const [visible, setVisible] = useState(false);
  const [vendor, setVendor] = useState(0);
  const [importProduct, setImportproduct] = useState([]);

  const [form] = Form.useForm();

  useEffect(()=>{
    setVendor(props.vendors[0].id);
  },[props.vendors])

  const changeVendor = (value) => {
    setVendor(value);
  }
  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    form.resetFields();
    setVisible(false);
  };

  const handleSearch = _.debounce((value) => {
    if (value.length > 0) {
      props.searchProduct({ word: value })
    }
  }, 1000)

  const formFinish = (values) => {
    let temp  = [...importProduct]
    values.name = props.search.find((item) =>( item.id === values.product_id)).name
    temp.push(values);
    setImportproduct(temp);
    hideModal();
  }

  const modalOk = () => {
    form.submit();
  }

  const submitImport = () => {
    let data = {
      detail: importProduct,
      vendor_id: vendor,
    }
    props.createImport(data,()=> {
      setImportproduct([])
      notification['success']({
        message: 'Import succeeded',
        description:
          'Your import is succeded',
      })
    })
  }

  const removeItem = (id) => {

    setImportproduct(importProduct.filter((item) => (item.product_id !== id)))
  }

  const productTable = [
    {
      title: 'ID',
      dataIndex: 'product_id',
      key: 'product_id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      render: (text,record) => (
        <DeleteOutlined onClick={()=>{removeItem(record.product_id)}}/>
      )
    },
  ]

  return (
    <>
      <Row style={{ width: '100%', marginBottom: '10px' }}>
        <Col span={8} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: '10px',
        }}>Vendor:</Col>
        <Col span={16}>
          <Select
            style={{ width: '80%' }}
            value={vendor}
            onChange={changeVendor}
          >
            {props.vendors.map((item) => (
              <Option key={parseInt(item.id)} value={parseInt(item.id)}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>

      <Table
        columns={productTable}
        dataSource={importProduct}
        pagination={false}
        footer={() => (
          <Center>
            <Button onClick={showModal}>Add Product</Button>
          </Center>
        )}
      />

      <Modal
        title="Select product"
        visible={visible}
        onCancel={hideModal}
        onOk={modalOk}
      >
        <Form
          {...layout}
          form={form}
          onFinish={formFinish}
          initialValues={
            {
              price: 0,
              quantity: 1,

            }
          }
        >
          <Form.Item name="product_id" label="Product" rules={[{ required: true }]}>
            <Select
              showSearch
              showArrow={false}
              onSearch={(value) => {
                props.searchProductSuccess([])
                handleSearch(value)
              }}
              notFoundContent={<Center><Spin /></Center>}
              filterOption={false}
            >
              {props.search.map((item) =>
              (
                <Option key={parseInt(item.id)} value={parseInt(item.id)}>
                  {item.name} <Bold> Remaining: {item.remaining}</Bold>
                </Option>
              )
              )
              }
            </Select>
          </Form.Item>
          <Form.Item
            name="price"
            label="Import Money"
            rules={[{ required: true }]}
          >
            <InputNumber
              style={{
                width: 200,
              }}
              min="0"
              max="50"
              step="0.01"
              precision={2}
            />
          </Form.Item>

          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[{ required: true }]}
          >
            <InputNumber
              min="1"
              max="100"
              precision={0} />
          </Form.Item>
        </Form>
      </Modal>
      <p />
      <Center>
        <Button onClick={submitImport} type="primary">Accept Import</Button>
      </Center>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    vendors: state.vendors.vendors,
    search: state.product.search,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createImport: (data,callback) => {
      dispatch(importactions.onCreateImport(data,callback));
    },
    searchProduct: (data) => {
      dispatch(productactions.onSearchProduct(data))
    },
    searchProductSuccess: () => {
      dispatch(productactions.onSearchProductSuccess([]))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImportForm);
