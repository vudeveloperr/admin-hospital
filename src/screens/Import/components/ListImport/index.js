import React, { useState, useEffect } from "react";
import {
  Form,
  message,
  Table,
  Modal,
  Select,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import _ from 'lodash';
import styled from "styled-components";
import moment from "moment";
import { connect } from "react-redux";

const { Option } = Select;

const Bold = styled.span`
  font-weight:bold;
  float: right
`
const Center = styled.div`
  text-align: center;
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

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function ListImport(props) {
 

  const [modalVisble, setModalVisible] = useState(false);
  let [form] = Form.useForm()

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "vendorsName",
      dataIndex: "vendor_name",
      key: "vendor_name",
    },
    {
      title: "Import Time",
      dataIndex: "",
      key: "last_up_date",
      render: (record) =>
        moment
          .unix(record.last_up_date)
          .format("dddd, MMMM Do, YYYY h:mm:ss A"),
    },
    {
      title: "Importer",
      dataIndex: "name_admin",
      key: "name_admin",
    },
    {
      title: "Detail",
      dataIndex: "detail",
      render: (text, record) => (
        <div>
          {record.detail.map((item) => (
            <>
              <p>
                {item.name}
              </p>
              <p>
                Quantity: {item.quantity}, Price: {item.price} $
              </p>
            </>
          ))}
        </div>
      ),
    },
    {
      title: "Total",
      dataIndex: "",
      key: "total",
      render: (record) => <>{record.total} $</>,
    },
  ];

  const detailClick = () => {
    setModalVisible(true);
  };

  const modalOk = () => {
    setModalVisible(false);
  };

  const modalCancel = () => {
    setModalVisible(false);
  };

  const handleSearch = _.debounce((value) => {
    if (value.length > 0) {
      props.searchProduct({ word: value })
    }
  }, 1000)

  return (
    <div>
          <Table dataSource={props.import} columns={columns} />
          <Modal
            title="Detail Import"
            visible={modalVisble}
            onOk={modalOk}
            onCancel={modalCancel}
          >
            <p> {(props.import.detail || {}).name} </p>
          </Modal>
    </div>
  );
}

export default ListImport;
