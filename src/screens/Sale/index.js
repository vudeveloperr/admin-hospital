import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Table, Row, Col, Form, Button, Modal, InputNumber, Space, Select, Spin } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import saleactions from '../../redux/actions/sale'
import productactions from '../../redux/actions/product';


import moment from 'moment';
import _ from 'lodash';

const { Option } = Select;


const CenterWrapper = styled.div`
  width: 100%;
  text-align: center;
`
const Spacing = styled.div`
  &>*{
    margin-bottom: 10px;
  }
`
const ButtonWrapper = styled.div`
    color: #1890ff;
    &:hover{
        cursor: pointer;
    }
`

const Center = styled.div`
  text-align: center;
`;


function Sale(props) {

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'People',
            dataIndex: 'name_admin',
            key: 'name_admin',
        },
        {
            title: 'Time Create Discount',
            dataIndex: '',
            render: (record) => (
                moment.unix(record.last_up_date).format('dddd, MMMM Do, YYYY h:mm:ss A')
            )
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text, record) => (
                <div>
                    {record.status ? <p>On</p> : <p>Off</p>}
                </div>)
        },
        {
            title: 'Detail',
            dataIndex: 'detail',
            render: (text, record) => (
                <div>
                    {record.detail.map((item) => (
                        <>
                            <p>- {item.name}</p>
                            <p>Sale Price: {item.sale_price}</p>
                        </>
                    ))}
                </div>)
        },
        {
            title: 'Action',
            render: (text, record, index) => (
                <ButtonWrapper
                    onClick={() => { editClick({ id: record.id }) }}
                >
                    {record.status ? <p>Deactivate</p> : <p></p>}
                </ButtonWrapper>
            )
        },
    ];

    const editClick = (record) => {
        props.updateSale(record)
    }

    useEffect(() => {
        props.fetchSale()
    }, [])

    const [visibleADD, setVisibleADD] = useState(false);

    let [form] = Form.useForm()

    const hideModalADD = () => {
        setVisibleADD(false);
    }
    const modalOkADD = () => {
        setVisibleADD(false);
    }
    const addClick = () => {
        setVisibleADD(true);
        form.resetFields();
    }

    const onFinish = values => {
        props.createSale(values)
        hideModalADD()
    };

    const handleSearch = _.debounce((value) => {
        if (value.length > 0) {
            props.searchProduct({ word: value })
        }
    }, 1000)

    return (
        <div>
            <div className="btn-discounts">
                <Row className="">
                    <Col span={19} className=''>
                        Sale Off
                    </Col>
                    <Col span={5} className=''>
                        <CenterWrapper>
                            <Button className="btn-create-sale" onClick={addClick}>CREATE SALE CAMPAIGN</Button>
                        </CenterWrapper>
                    </Col>
                </Row>
                <hr />
                <Spacing>
                    <Modal
                        title="Add New Discount"
                        visible={visibleADD}
                        onCancel={hideModalADD}
                        onOk={modalOkADD}
                        footer={false}
                    >
                        <Form 
                        onFinish={onFinish}
                        form ={form}
                        >
                            <Form.List name="detail">
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(field => (
                                            <Space key={field.key} align="baseline">
                                                <Form.Item 
                                                name={[field.name, 'product_id']}
                                                label="Product" rules={[{ required: true }]}
                                                fieldKey={[field.fieldKey, 'product_id']}
                                                >
                                                    <Select
                                                        showSearch
                                                        showArrow={false}
                                                        onSearch={(value) => {
                                                            props.searchProductSuccess([])
                                                            handleSearch(value)
                                                        }}
                                                        notFoundContent={<Center><Spin /></Center>}
                                                        filterOption={false}
                                                        style={{ width: '200px' }}
                                                    >
                                                        {props.search.map((item) =>
                                                        (
                                                            <Option key={parseInt(item.id)} value={parseInt(item.id)}>
                                                                {item.name}
                                                            </Option>
                                                        )
                                                        )
                                                        }
                                                    </Select>
                                                </Form.Item>
                                                <Form.Item
                                                    name={[field.name, 'sale_price']}
                                                    label='Price'
                                                    fieldKey={[field.fieldKey, 'sale_price']}
                                                >
                                                    <InputNumber min={0} />
                                                </Form.Item>
                                                <MinusCircleOutlined onClick={() => remove(field.name)} />
                                            </Space>
                                        ))}
                                        <Form.Item>
                                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                Add product
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                            <Form.Item
                                style={{ textAlign: 'center' }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                </Spacing>
            </div>
            <Table dataSource={props.sale} columns={columns} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        sale: state.sale.sale,
        search: state.product.search,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSale: () => {
            dispatch(saleactions.onFetchSales())
        },
        updateSale: (data) => {
            dispatch(saleactions.onUpdateSale(data))
        },
        createSale: (data) => {
            dispatch(saleactions.onCreateSale(data))
        },
        searchProduct: (data) => {
            dispatch(productactions.onSearchProduct(data))
        },
        searchProductSuccess: () => {
            dispatch(productactions.onSearchProductSuccess([]))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sale)