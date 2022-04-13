import { Form, Input, Modal, Select, Upload, Button as Btn, notification } from 'antd'
import { UploadOutlined } from "@ant-design/icons";
import Button from "../Button";
import React, {useState, useEffect} from 'react'
import axios from '../../utils/axios';

function AddModal({ isAddModal, setIsAddModal, api }) {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        axios.get("/categories").then((response) => setCats(response.data.payload));
    }, [])

    const { Option } = Select;

    const handleOk = () => {
        setIsAddModal(false);
      };

    const handleCancel = () => {
        setIsAddModal(false);
      };
    
    // const [api, contextHolder] = notification.useNotification();

    const openNotification = () => {
        api.info({
        message: `Successfully`,
        description: <p>Product created</p>,
        });
    };

    const onFinish = (values) => {
        console.log("Success:", values);
        const categoryName = cats.find((i) => values.categoryId == i._id);
        //let data = {...values, categoryName: categoryName.name}
        let formData = new FormData();
        formData.append("categoryName", categoryName.name);
        formData.append("categoryId", values.categoryId);
        formData.append("name", values.name);
        formData.append("price", values.price);
        formData.append("description", values.description);
        formData.append("brand", values.brand);
        formData.append("quantity", values.quantity);
        formData.append("quantityType", values.quantityType);
        formData.append("img", values.upload[0]?.originFileObj);
    
        axios
          .post("./products", formData)
          .then((response) => {
            openNotification();
          })
          .catch((err) => {
            console.log(err);
          });
        handleOk();
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const normFile = (e) => {
        console.log("Upload event:", e);
    
        if (Array.isArray(e)) {
          return e;
        }
    
        return e && e.fileList;
    };

  return (
    <div>
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
                    {
                      required: true,
                      message: "Please input product quantity!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Quantity type"
                  name="quantity-type"
                  rules={[
                    {
                      required: true,
                      message: "Please input product quantity type!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="categoryId"
                  label="Categories"
                  rules={[
                    { required: true, message: "Please select categories!" },
                  ]}
                >
                  <Select placeholder="select categories">
                    {cats.map((cat) => (
                      <Option value={cat._id} key={cat._id}>
                        {cat.name}
                      </Option>
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
    </div>
  )
}

export default AddModal