import React, { useEffect, useRef, useState } from "react";
import { Wrapper } from "../../style";
import ShopSty from "./style";
import { Breadcrumb } from "antd";
import { Card } from "antd";
import suit from "../../assets/suit.jpg";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import {
  Modal,
  Button as Btn,
  Form,
  Input,
  message,
  Select,
  notification, 
 
} from "antd";
import axios from "../../utils/axios";
import AddModal from "../../components/AddModal";

function Shop() {
  const { Meta } = Card;
  const [form] = Form.useForm();
  const { Option } = Select;
  const user = useSelector((state) => state.auth.token);

  const [isAddModal, setIsAddModal] = useState(false);
  const [isCatModal, setIsCatModal] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/products")
      .then((response) => {
      console.log(response, 'products')
      setProducts(response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.info({
      message: `Successfully`,
      description: <p>Category added</p>,
    });
  };

  const formRef = useRef(null)

  const showModal = () => {
    setIsAddModal(true);
  };
  const showCatModal = () => {
    setIsCatModal(true);
  };
  
  const handleCatOk = () => {
    setIsCatModal(false);
  };

  const handleCatCancel = () => {
    setIsCatModal(false);
  };

  const onCatFinish = (values) => {
    console.log("Success:", values);
    axios
      .post("./categories", values)
      .then((response) => {
        openNotification()
      })
      .catch((err) => {
        console.log(err);
      });
      //formRef.current.resetFields({ name: "" });
      console.log(formRef.current)
    handleCatOk();
  };

  const onCatFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <ShopSty>
      <Wrapper>
        { contextHolder }
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
            <div className="shop__action">
              {user && (
                <>
                  <Button
                    title="Add product"
                    type="secondary"
                    onClick={showModal}
                  />
                  <Button
                    title="Add categories"
                    type="secondary"
                    onClick={showCatModal}
                  />
                </>
              )}
            </div>
          </div>

          <div className="shop__modals">
            {isAddModal && <AddModal 
              setIsAddModal={ setIsAddModal } 
              setFormSuccess={ setFormSuccess }
              isAddModal={ isAddModal }
              />}
            <Modal
              title="Add categories"
              visible={isCatModal}
              onOk={handleCatOk}
              onCancel={handleCatCancel}
            >
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ name: "" }}
                onFinish={onCatFinish}
                onFinishFailed={onCatFinishFailed}
                autoComplete="off"
                ref={ formRef }
              >
                <Form.Item
                  label="Category name"
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
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
          </div>

          <div className="shop_cards">
            {
              products.map(product => (
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src={product.img ? product.img : suit} />}
                >
                  <Meta
                    title={product.name}
                    description={product.description}
                  />
                  <p>{'$' + product.price}</p>
                </Card>
              ))
            }
          </div>
        </div>
      </Wrapper>
    </ShopSty>
  );
}

export default Shop;
