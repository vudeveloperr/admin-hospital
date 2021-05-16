import { Table } from 'antd';
import React, { useState } from 'react'
import styled from 'styled-components';
import actions from "../../../../redux/actions/admin";
import { connect } from "react-redux";

const ButtonWrapper = styled.div`
    color: #1890ff;
    &:hover{
        cursor: pointer;
    }
`

function Account(props) {

  const [id, setId] = useState(0);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'UserName',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
      
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
			render: (text, record, index) => (
				<ButtonWrapper
					onClick={() => {
						editClick(record);
						setId(record.id);
					}}
				>
					Deactivate
				</ButtonWrapper>
			)
		},
  ];

  const editClick = (record) => {
    console.log(record)
    props.updateAdmin(record)
  }

    return (
      
        <div className='jss736'>
            <h2>DANH SÁCH TÀI KHOẢN</h2>
            <Table dataSource={props.account} columns={columns} />
            
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAdmin: (data, callback) => {
			dispatch(actions.updateAdmin(data, callback))
		},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account)