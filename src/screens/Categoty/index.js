import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Table, Modal, Row, Col, Button, Form, Input, InputNumber,Upload } from 'antd'
import styled from 'styled-components';
import categoryactions from '../../redux/actions/category'
import { UploadOutlined } from "@ant-design/icons";

const CenterWrapper = styled.div`
  width: 100%;
  text-align: center;
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


function Category(props){

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
        },
        {
            render: (text, record, index) => (
                <ButtonWrapper
                    onClick={() => {
                        editClick(record);
                        setId(record.id);
                        setEditData(true);
                    }}
                >
                    Edit
                </ButtonWrapper>
            )
        },
    ];

    const [modalVisble, setModalVisible] = useState(false)
    const [modalVisbleNew, setModalVisibleNew] = useState(false)
    const [addCategory, setAddCategory] = useState(false);
    const [editData, setEditData] = useState(0)
    const [id, setId] = useState(0);

    let [form] = Form.useForm()

    const formUpdate = (values) => {
		props.updateCategory({ ...values, id: id }, 
			() => { 
				setModalVisible(false);
				props.fetchCategory();
			});		
	}

    const formCreate = (values) => {
        props.createCategory({ ...values},
            () => {
                setModalVisibleNew(false);
                props.fetchCategory();
            });
    }

    useEffect(
		() => {
			props.fetchCategory()
	}, [])

    const editClick = (record) => {
        setModalVisible(true);
        form.setFieldsValue(record);
    }

    const modalOk = () => {
        setModalVisible(false);
    }

    const modalCancel = () => {
        setModalVisible(false);
    }


    const newCategoryClick = () =>{
        setModalVisibleNew(true);
        setAddCategory(true);
        form.resetFields();
    }

    const modalOkNew = () => {
        setModalVisibleNew(false);
    }

    const modalCancelNew = () => {
        setModalVisibleNew(false);
    }
    
    return (
        <div>
            <Row className="">
				<Col span={19} className=''>
					List Category
				</Col>
				<Col span={5} className=''>
					<CenterWrapper>
					<Button className="btn-create-sale" onClick={newCategoryClick}>CREATE NEW CATEGORY</Button>
					</CenterWrapper>
				</Col>
			</Row> 
			<hr/>
            <Table dataSource={props.category} columns={columns}/>

            <Modal title="Create New Category" visible={modalVisbleNew} onOk={modalOkNew} onCancel={modalCancelNew}>
                <Form {...layout} form={form} onFinish={formCreate} name="control-ref">
                    
                    <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

            <Modal title="Detail Category" visible={modalVisble} onOk={modalOk} onCancel={modalCancel}>
                <Form {...layout} form={form} onFinish={formUpdate} name="control-ref">
                    <Form.Item name="id" label="Id" rules={[{ required: true }]}>
                        <Input disabled/>
                    </Form.Item>

                    <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="total" label="Total" rules={[{ required: true }]}>
                        <Input disabled/>
                    </Form.Item>
                    
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        category: state.category.category
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchCategory: () => {
            dispatch(categoryactions.onFetchCategory())
        },
        updateCategory: (data, callback) => {
            dispatch(categoryactions.onUpdateCategory(data, callback))
        },
        createCategory: (data, callback) => {
            dispatch(categoryactions.onCreateCategory(data, callback))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
