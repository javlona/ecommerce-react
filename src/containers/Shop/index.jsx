import React, { useState } from "react";
import { Wrapper } from "../../style";
import ShopSty from "./style";
import { Breadcrumb } from "antd";
import { Card } from "antd";
import suit from "../../assets/suit.jpg";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import { Modal, Button as Btn, Checkbox, Form, Input } from "antd";

function Shop() {
  const { Meta } = Card;
  const user = useSelector((state) => state.auth.token);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
                <Button
                  title="Add product"
                  type="secondary"
                  onClick={showModal}
                />
              )}
            </div>
            <Modal
              title="Basic Modal"
              visible={isModalVisible}
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
                  label="Image"
                  name="image"
                  rules={[
                    { required: true, message: "Please input product image!" },
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
                  label="Quantity"
                  name="quantity"
                  rules={[
                    { required: true, message: "Please input product quantity!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
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
