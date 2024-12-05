import { Form, Input, Button, InputNumber, Switch, Select, message } from "antd";
import { createRoom } from "../../services/roomsService";
const { Option } = Select;

function CreateRoom() {

  //-use massage antd
  const [messageApi, contextHolder] = message.useMessage();

  const [form] = Form.useForm();
  const rules = [
    {
      required: true,
      message: 'Bắt buộc',
    },
  ]

  const handleSubmit = async (values) => {
    //console.log(values); //- nó sẽ có hết tất cả dữ liệu là key:value của các thẻ
    const response = await createRoom(values);
    if(response){
      form.resetFields();

      //-neu thanh cong
      messageApi.open({
        type: 'success',
        content: 'Tạo phòng thành công',
        duration: 4 //- thành công thì show thông báo trong 4s
      });
    } else{
      //- that bai
      messageApi.open({
        type: 'error',
        content: 'Tạo phòng thất bại',
      });
    }
  }
  return (
    <>
    {/* Nho them tk nay de show len thong bao */}
      {contextHolder} 
      <h2>Thêm phòng mới</h2>
      {/* nó có sk tự định nghĩa khi form dc gửi đi là onFinish */}
      <Form form={form} name="create-room" layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Tên phòng"
          name="name"
          rules={rules}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Số lượng giường"
          name="quantityBed"
          rules={rules}
        >
          <InputNumber min={1} max={10} />
        </Form.Item>

        <Form.Item
          label="Số người tối đa"
          name="quantityPeople"
          rules={rules}
        >
          <InputNumber min={1} max={10} />
        </Form.Item>

        <Form.Item
          label="Mô tả"
          name="description"
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>

        <Form.Item
          name="utils"
          label="Tiện ích"
          rules={rules}
        >
          {/* chọn nhiều mode="multiple"*/}
          <Select mode="multiple" allowClear>
            <Option value="Wifi">Wifi</Option>
            <Option value="Nóng lạnh">Nóng lạnh</Option>
            <Option value="Điều hòa">Điều hòa</Option>
            <Option value="Tủ lạnh">Tủ lạnh</Option>
            <Option value="Tủ quần áo">Tủ quần áo</Option>
            <Option value="Ghế massage">Ghế massage</Option>
          </Select>
        </Form.Item>

        <Form.Item
          valuePropName="checked"
          name="status"
          label="Trạng thái"
        >
          {/* ko ấn thì giá trị là false còn có ấn thì là true */}
          <Switch checkedChildren="Còn phòng" unCheckedChildren="Hết phòng" />
        </Form.Item>

        <Form.Item
          valuePropName="checked"
          name="typeRoom"
          label="Loại phòng"
        >
          <Switch checkedChildren="VIP" unCheckedChildren="Normal"/>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Tạo mới
          </Button>
        </Form.Item>

      </Form>
    </>
  )
}

export default CreateRoom;