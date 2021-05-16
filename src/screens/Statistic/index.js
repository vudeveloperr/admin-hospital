import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Button, Radio, DatePicker, Space, Row, Col } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import moment from "moment";

import statisticactions from "../../redux/actions/statistic";
const { RangePicker } = DatePicker;

function Statistic(props) {

  const [datePicker, setDatePicker] = useState({});
  const [datePicker1, setDatePicker1] = useState({});

  const handleChange = (date) => {
    if (!!!date){
        setDatePicker({})
    } else {
    setDatePicker({
        startTime:date[0].unix(),
        endTime: date[1].unix(),
    })
    }
  };

  const downloadExportReport = () =>{
      console.log(datePicker)
    props.fetchExportOrder(datePicker);
  };

  const handleChange1 = (date) => {
    if (!!!date){
        setDatePicker1({})
    } else {
    setDatePicker1({
        startTime:date[0].unix(),
        endTime: date[1].unix(),
    })
    }
  };

  const downloadImportReport = () =>{
      console.log(datePicker1)
    props.fetchImport(datePicker1);
  };

  return (
    <div>
      Statistic
      <hr />
      <div>
        <p />
        <Row>
          <Col span={1}></Col>
          <Col span={5}>
              Export Report
            </Col>
          <Col span={10}>
            <RangePicker showTime onChange={handleChange}/>
          </Col>
          <Col span={8}>
            <Button type="primary" shape="round" icon={<DownloadOutlined />} onClick={downloadExportReport}>
              Download
            </Button>
          </Col>
        </Row>
      </div>
      <p />
      <div>
        <p />
        <Row>
          <Col span={1}></Col>
          <Col span={5}>Import Report</Col>
          <Col span={10}>
            <RangePicker showTime onChange={handleChange1}/>
          </Col>
          <Col span={8}>
            <Button type="primary" shape="round" icon={<DownloadOutlined />} onClick={downloadImportReport}>
              Download
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchExportOrder: (params, callback) => {
      dispatch(statisticactions.onFetchExportOrder(params, callback));
    },
    fetchImport: (params, callback) => {
        dispatch(statisticactions.onFetchImport(params, callback))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Statistic);
