import React, { useEffect, useState } from "react";
import { Wrapper } from "../../style";
import ShopSty from "./style";
import { Breadcrumb } from "antd";
import { Card } from "antd";
import suit from "../../assets/suit.jpg";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import { Modal, Button as Btn, Form, Input, Upload, message, Select } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import axios from "../../utils/axios";

function Shop() {
  const { Meta } = Card;
  const [form] = Form.useForm();
  const { Option } = Select;
  const user = useSelector((state) => state.auth.token);

  const [isAddModal, setIsAddModal] = useState(false);
  const [isCatModal, setIsCatModal] = useState(false);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    axios.get('/categories')
      .then(response => setCats(response.data.payload))
  }, [])

  const showModal = () => {
    setIsAddModal(true);
  };
  const showCatModal = () => {
    setIsCatModal(true);
  };

  const handleOk = () => {
    setIsAddModal(false);
  };
  const handleCatOk = () => {
    setIsCatModal(false);
  };

  const handleCancel = () => {
    setIsAddModal(false);
  };
  const handleCatCancel = () => {
    setIsCatModal(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    const categoryName = cats.find(i => values.categoryId == i._id)
    let data = {...values, categoryName: categoryName.name}
    axios.post('./products', data)
      .then(response => {console.log(response)})
      .catch(err => {console.log(err)});
    handleOk();
  };

  const onCatFinish = (values) => {
    console.log("Success:", values);
    axios.post('./categories', values)
      .then(response => {console.log(response)})
      .catch(err => {console.log(err)});
    form.setFieldsValue({name: ""});
    handleCatOk();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onCatFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const normFile = (e) => {
    console.log('Upload event:', e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e && e.fileList;
  };

  return (
    <ShopSty>
      <Wrapper>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
        <div className="shop__content">
          <div className="shop__category">
            <h4>Shop by categories</h4>
            <ul className="shop__cats">
              <li>&rarr; Men</li>
              <li>&rarr; Women</li>
              <li>&rarr; Kids</li>
              <li>&rarr; Trending</li>
            </ul>
          </div>
          <div className="shop_cards">
            <div className="shop__action">
              {user && (
                <><Button
                  title="Add product"
                  type="secondary"
                  onClick={ showModal }
                />
                <Button 
                  title="Add categories"
                  type="secondary"
                  onClick={ showCatModal }
                  />
                </>
              )}
            </div>
            <Modal
              title="Add a product"
              visible={isAddModal}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please input product name!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Price"
                  name="price"
                  rules={[
                    { required: true, message: "Please input product price!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Brand"
                  name="brand"
                  rules={[
                    { required: true, message: "Please input product brand!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Quantity"
                  name="quantity"
                  rules={[
                    { required: true, message: "Please input product quantity!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Quantity type"
                  name="quantity-type"
                  rules={[
                    { required: true, message: "Please input product quantity type!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                  
                <Form.Item
                  name="categoryId"
                  label="Categories"
                  rules={[{ required: true, message: 'Please select categories!' }]}
                >
                  <Select placeholder="select categories">
                    {cats.map(cat => (
                      <Option value={cat._id} key={cat._id}>{cat.name}</Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  name="upload"
                  label="Upload"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  extra=""
                >
                  <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                  </Upload>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Btn type="primary" htmlType="submit">
                    Submit
                  </Btn>
                </Form.Item>
              </Form>
            </Modal>
            <Modal title="Add categories" visible={isCatModal} onOk={handleCatOk} onCancel={handleCatCancel}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ name: '' }}
              onFinish={onCatFinish}
              onFinishFailed={onCatFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Category name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Btn type="primary" htmlType="submit">
                  Submit
                </Btn>
              </Form.Item>
            </Form>
            </Modal>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={suit} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={suit} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={suit} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={suit} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={suit} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
        </div>
      </Wrapper>
    </ShopSty>
  );
}

export default Shop;
