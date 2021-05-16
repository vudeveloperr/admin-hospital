import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react';
import productactions from '../../redux/actions/product'
import categoryactions from '../../redux/actions/category'
import { Row, Col, Form, Input, Upload, Button, Modal, Table, Select } from 'antd';
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import styled from 'styled-components';

const { Option } = Select;

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


function Product(props){

	const [modalVisble, setModalVisible] = useState(false);
	const [addProduct, setAddProduct] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [id, setId] = useState(0);
	const [imgUrl, setImgUrl] = useState('');

	let [form] = Form.useForm()

	const editClick = (record) => {
		setModalVisible(true);
		form.setFieldsValue(record);
		setImgUrl(record.image);
	}

	const modalCancel = () => {
		setModalVisible(false);
	}

	const getData = (page = 1, size = 10) => {
		props.fetchProducts({ page, size })
	}

	const showModal = () => {
		setModalVisible(true);
		setImgUrl('');
		setAddProduct(true);
		form.resetFields();
	}

	const formFinish = (values) => {
		if (addProduct) {
			props.addProduct({ ...values, image: imgUrl }, 
				() => { 
					setModalVisible(false); 
				});
		}
		else {
			props.updateProduct({ ...values, image: imgUrl, id: id }, 
				() => { 
					setModalVisible(false);
					props.fetchProducts({ page:currentPage, size: 10 });
				});
		}
		;
	}

	useEffect(
		() => {
			props.fetchCategory()
			getData()
		},
		[])

	const columns = [
		{
			title: 'Image',
			dataIndex: 'image',
			render: (text) => <img className="MuiAvatar-root MuiAvatar-circle jss1040" src={text} />,
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
			render: (text) => ((props.category || []).find((item) => { return item.id === text.toString() }) || {}).name
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
			render: (text, record, index) => (
				<ButtonWrapper
					onClick={() => {
						editClick(record);
						setId(record.id);
						setAddProduct(false);
					}}
				>
					Edit
				</ButtonWrapper>
			)
		},
	];

	const handleChange = info => {
		if (info.file.status === 'done') {
			setImgUrl(window.upload_url + info.file.response)
		}
	};

	return (
		<>
			<section class="ftco-section">
				<div className="btn-discounts">
					<Row className="">
						<Col span={19} className=''>
							List Product
						</Col>
						<Col span={5} className=''>
							<CenterWrapper>
								<Button className="btn-create-sale" onClick={showModal}>CREATE NEW PRODUCT</Button>
							</CenterWrapper>
						</Col>
					</Row>
					<hr />
				</div>
				<div class="container">
					<Table dataSource={props.product} columns={columns}
						pagination={{
							current: currentPage,
							showSizeChanger: false,
							onChange: ((page, pageSize) => {
								setCurrentPage(page)
								props.fetchProducts({ page, size: pageSize })
							}),
							total: props.total_count
						}}
					/>
					<Modal
						title={addProduct ? "Add Product" : "Edit Product"}
						visible={modalVisble}
						onCancel={modalCancel}
						footer={false}
					>
						<Form
							{...layout}
							form={form}
							onFinish={formFinish}
						>
							<Form.Item
								name="name"
								label="Name"
								rules={[{ required: true }]}
							>
								<Input />
							</Form.Item>
							<Form.Item
								name="price"
								label="Price on Page"
								rules={[{ required: true }]}
							>
								<Input />
							</Form.Item>
							<Form.Item
								name="unit"
								label="Unit"
								rules={[{ required: true }]}
							>
								<Input />
							</Form.Item>
							<Form.Item
								name="description"
								label="Description"
								rules={[{ required: true }]}
							>
								<Input />
							</Form.Item>
							<Form.Item
								name="category_id"
								label="Category"
							>
								<Select>
									{props.category.map((item) => (
										<Option key={parseInt(item.id)} value={parseInt(item.id)}>{item.name}</Option>
									))}
								</Select>
							</Form.Item>
							<Form.Item label="Image">
								<Upload
									listType="picture-card"
									showUploadList={false}
									onChange={handleChange}
									action={window.upload_url + '/upload'}
								>
									{imgUrl ? <img src={imgUrl} alt="avatar" style={{ width: '100%' }} /> : <PlusOutlined />}
								</Upload>
							</Form.Item>
							<Form.Item {...tailLayout}>
								<Button type="primary" htmlType="submit">
									Submit
                                </Button>
							</Form.Item>
						</Form>
					</Modal>
				</div>
			</section>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		category: state.category.category,
		product: state.product.product,
		total_count: state.product.total_count
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchProducts: (params, callback) => {
			dispatch(productactions.onFetchProducts(params, callback))
		},
		fetchCategory: () => {
			dispatch(categoryactions.onFetchCategory())
		},
		createProduct: (data, callback) => {
			dispatch(productactions.onCreateProduct(data, callback))
		},
		updateProduct: (data, callback) => {
			dispatch(productactions.onUpdateProduct(data, callback))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
