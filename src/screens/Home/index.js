import React , {useState, useEffect}from 'react';
import { connect } from 'react-redux';
import { TopSale, TotalOrderToday, TotalRevenueToday } from './components';
import { Row, Col } from 'antd';
import statisticactions from '../../redux/actions/statistic'

function Home(props) {
    useEffect(
		() => {
			props.fetchTotalRevenu()
            props.fetchTotalOrder()
            props.fetchTopSale()
		}, [])
    return (
        <div>
            Trang Chủ
            <hr/>
            <div>
                <TopSale />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
	return {
        totalrevenu: state.statistic.totalrevenu,
        totalorder: state.statistic.totalorder,
        topsale: state.statistic.topsale,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchTotalRevenu: (params, callback) => {
			dispatch(statisticactions.onFetchTotalRevenu(params, callback))
		},
        fetchTotalOrder: (params, callback) => {
            dispatch(statisticactions.onFetchTotalOrder(params, callback))
        },
        fetchTopSale: (params, callback) => {
            dispatch(statisticactions.onFetchTopSale(params, callback))
        }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);