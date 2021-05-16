import { Table } from 'antd';
import {connect} from 'react-redux';
import {useEffect } from 'react';

import statisticactions from '../../../../redux/actions/statistic'

const dataSource = [
   
  ];
  
  const columns = [
    {
      title: 'Image',
      render:  (text) => <img className="MuiAvatar-root MuiAvatar-circle jss1040" src={text} />,
      dataIndex: 'image',
      key: 'image',
      
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Category',
      dataIndex: 'unit',
      key: 'unit',
    },
    {
      title: 'Unit',
      dataIndex: 'unit',
      key: 'unit',
    },
    {
      title: 'Remaining',
      dataIndex: 'remaining',
      key: 'remaining',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ];

function TopSale(props) {
  useEffect(()=> {
    props.fetchTopSale()
  },[])

    return (
        <div className='jss736'>
            <h2>Top Sale</h2>
            <Table dataSource={props.topsale} columns={columns} />
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    topsale: state.statistic.topsale
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTopSale: () => {
      dispatch(statisticactions.onFetchTopSale())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopSale)