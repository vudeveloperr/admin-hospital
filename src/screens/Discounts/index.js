import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Table, Checkbox, Row, Col, Form, Input, Button, Modal, InputNumber  } from 'antd';
import styled from 'styled-components';
import discountactions from '../../redux/actions/discount'
import moment from 'moment';

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

function Discounts(props) {

    const columns = [
        {
            title: 'Rank',
            dataIndex: 'rank',
            key: 'rank',
        },
        {
            title: 'Rate',
            dataIndex: 'rate',
            key: 'rate',
        },
        {
            title: 'Time Create Discount',
            dataIndex: '',
            render : (record)=>(
                moment.unix(record.last_up_date).format('dddd, MMMM Do, YYYY h:mm:ss A')
            )
        },
        ,
        {
            render: (text, record, index) => (
                <ButtonWrapper
                    onClick={() => {
                        editClick(record);
                        setRank(record.rank);
                        setEditData(true);
                    }}
                >
                    Edit
                </ButtonWrapper>
            )
        },
    ];

    useEffect(() => {
        props.fetchDiscount()
    }, [])

    const formUpdate = (values) => {
		props.updateDiscount({ ...values, rank: rank}, 
			() => { 
				setVisible(false);
				props.fetchDiscount();
			});
	}
    const formCreate = (values) => {
        props.createDiscount({ ...values},
            () => {
                setVisibleADD(false);
                props.fetchDiscount();
            });
    }

    const [visible, setVisible] = useState(false);
    const [visibleADD, setVisibleADD] = useState(false);
    const [ editData, setEditData ] = useState(0)
    const [addDiscount, setAddDiscount] = useState(false);
    const [rank, setRank] = useState(0);
    let [form] = Form.useForm()

    const modalOk = () => {
        setVisible(false);
    }
    const modalCancel = () => {
        setVisible(false);
    }
    const editClick = (record) => {
        setVisible(true);
        form.setFieldsValue(record);
    }



    const hideModalADD = () => {
        setVisibleADD(false);
    }
    const modalOkADD = () => {
        setVisibleADD(false);
    }

    const addClick = (record) => {
        setVisibleADD(true);
        setAddDiscount(true);
        form.resetFields();
    }


    return (
        <div>
            
            <div className="btn-discounts">
                <Row className="">
                    <Col span={20} className=''>
                        Discounts
                    </Col>
                    <Col span={4} className=''>
                    <CenterWrapper>
                        <Button className="btn-create-sale" onClick={addClick}>CREATE DISCOUNT</Button>
                    </CenterWrapper>
                    </Col>
                </Row>
                <hr/>
                <Spacing>
                    <Modal
                        title="Add New Discount"
                        visible={visibleADD}
                        onCancel={hideModalADD}
                        onOk={modalOkADD}
                    >
                        <Form {...layout} form={form} onFinish={formCreate} name="control-ref">
                            <Form.Item name="rank" label="Rank" rules={[{ required: true }]}>
                                <InputNumber min={1} max={10} defaultValue={1}/>
                            </Form.Item>
                            <Form.Item name="accumulate" label="Accumulate" rules={[{ required: true }]}>
                                <InputNumber min={1} />
                            </Form.Item>
                            <Form.Item name="rate" label="Rate" rules={[{ required: true }]}>
                                <InputNumber min={1} max={10} defaultValue={1}/>
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>

                    <Modal title="Detail Vendors" visible={visible} onOk={modalOk} onCancel={modalCancel}>
                        <Form {...layout} form={form} onFinish={formUpdate} name="control-ref">
                            <Form.Item name="rank" label="Rank" rules={[{ required: true }]}>
                                <Input disabled/>
                            </Form.Item>
                            <Form.Item name="rate" label="Rate" rules={[{ required: true }]}>
                                <InputNumber />
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                </Spacing>
            </div>
            <Table dataSource={props.discount} columns={columns} />
        </div>
    )
}


const mapStateToProps = (state) => {
    return{
        discount: state.discount.discount
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchDiscount: () => {
            dispatch(discountactions.onFetchDiscount())
        },
        updateDiscount: (data, callback) => {
            dispatch(discountactions.onUpdateDiscount(data, callback))
        },
        createDiscount: (data, callback) => {
            dispatch(discountactions.onCreateDiscount(data, callback))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Discounts)