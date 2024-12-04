import { Form, Input, Button, InputNumber, Switch, Select } from "antd";
const { Option } = Select;

function CreateRoom() {
  const rules = [
    {
      required: true,
      message: 'Bắt buộc',
    },
  ]

  const handleSubmit = (values) => {
    console.log(values); //- nó sẽ có hết tất cả dữ liệu là key:value của các thẻ
  }
  return (
    <>
      <h2>Thêm phòng mới</h2>
      {/* nó có sk tự định nghĩa khi form dc gửi đi là onFinish */}
      <Form name="create-room" layout="vertical" onFinish={handleSubmit}>
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
          <Input.TextArea showCount maxLength={100}/>
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
          name="status" 
          label="Trạng thái"
          >
            {/* ko ấn thì giá trị là false còn có ấn thì là true */}
          <Switch/>
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