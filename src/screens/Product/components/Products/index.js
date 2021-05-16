import { useState, useEffect } from 'react';
import { Table, Form, Input, Modal } from 'antd';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    color: #1890ff;
    &:hover{
        cursor: pointer;
    }
`

function Products(props) {
    const [modalVisble, setModalVisible] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalCount, setTotalCount] = useState(0)

    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            render:  (text) => <img className="MuiAvatar-root MuiAvatar-circle jss1040" src={text} />,
            key: 'image'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Unit',
            dataIndex: 'unit',
            key: 'unit'
        },
        {
            title: 'Category',
            dataIndex: 'category_id',
            key: 'category_id',
            // render: () => props.category_id.find((dataIndex) => {return dataIndex}).name
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'AVGRate',
            dataIndex: 'rate_avg',
            key: 'rate_avg',
        },
        {
            title: 'Remaining',
            dataIndex: 'remaining',
            key: 'remaining',
        },
        {
            render: () => (
                <ButtonWrapper
                    onClick={editClick}
                >
                    Edit
                </ButtonWrapper>
            )
        },
    ];

    const editClick = () => {
        setModalVisible(true);
    }

    const modalOk = () => {
        setModalVisible(false);
    }

    const modalCancel = () => {
        setModalVisible(false);
    }

    useEffect(() => {
        setTotalCount(props.totalCount)
    }, [props.totalCount])


    return (
        <div>
            <Table dataSource={props.products} columns={columns}
                pagination={{
                    current: currentPage,
                    onChange: ((page, pageSize) => {
                        props.fetchProducts({page, size: pageSize})
                        setCurrentPage(page)
                    }),
                    total: totalCount
                }}
            />
            <Modal
                title="Edit Product"
                visible={modalVisble}
                onOk={modalOk}
                onCancel={modalCancel}
            >
                <Form>

                </Form>
            </Modal>
        </div>
    )
}

export default Products;