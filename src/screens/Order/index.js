import { useState, useEffect } from "react";
import { Table, Modal } from "antd";
import { connect } from "react-redux";
import styled from "styled-components";
import orderactions from "../../redux/actions/order";
import moment from "moment";

const ButtonWrapper = styled.div`
  color: #1890ff;
  &:hover {
    cursor: pointer;
  }
`;
function Order(props) {
  const [modalVisble, setModalVisible] = useState(false);
  const dataSource = [];

  useEffect(() => {
    props.fetchOrders();
    // props.acceptOrder()
  }, []);

  const columns = [
    {
      title: "OrderId",
      dataIndex: "id",
    },
    {
      title: "CusName ",
      dataIndex: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Time Order",
      dataIndex: "",
      render: (record) =>
        moment.unix(record.last_update).format("dddd, MMMM Do, YYYY h:mm:ss A"),
    },
    {
      title: "Order's state",
      dataIndex: "current_status",
    },
    {
      title: "Phone",
      dataIndex: "number",
    },
    {
      title: "Detail",
      dataIndex: "detail",
      render: (text, record) => (
        <div>
          {record.detail.map((item) => (
            <>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
            </>
          ))}
        </div>
      ),
    },
    {
      title: "Action",
      render: (text, record) => (
        record.current_status !== "Done" 
        ?
        <ButtonWrapper
          onClick={() => {
            detailClick({ id: record.id });
          }}
        >
          Accept
        </ButtonWrapper>
        :<></>
      ),
    },
  ];

  const detailClick = (record) => {
    props.acceptOrder(record);
  };

  return (
    <div>
      Order
      <hr />
      <Table dataSource={props.order} columns={columns} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    order: state.order.order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: () => {
      dispatch(orderactions.onFetchOrders());
    },
    acceptOrder: (data) => {
      dispatch(orderactions.onUpdateOrder(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
