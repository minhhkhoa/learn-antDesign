import { Button, DatePicker, Checkbox, Radio, Col, Input, Row, Space, Select } from "antd";
const { RangePicker } = DatePicker;
import { useState } from "react";
import { bookRoom } from "../../services/bookRoomService";

function BookRoom() {
  const [data, setData] = useState({
    time: "14 giờ"
  });


  const optionTime = [];

  for (let i = 7; i <= 24; i++) {
    optionTime.push({
      value: i > 9 ? `${i} giờ` : `0${i} giờ`,
      label: i > 9 ? `${i} giờ` : `0${i} giờ`,
    })
  }

  const handleSubmit = async () => {
    const response = await bookRoom(data)
    if(response){
      alert("Chúc mừng bạn đặt phòng thành công!");
    } else{
      alert("Vui lòng đặt lại sau");

    }
    
  }

  const handleChangeInput = (e) => {
    // e.target.name; //-lay ra name cua o input hay no la key
    const obj = {
      ...data,
      [e.target.name]: e.target.value
    }
    setData(obj);
  }

  const handleChangeCheckbox = (e) => {
    setData({
      ...data,
      services: e
    })
  }

  //- tk nay se nhan vao 2 tham so(dates,dateStrings) nm minh se chu tam toi tham so thu 2 thoi
  const handleChangeDate = (_, dateStrings) => {
    setData({
      ...data,
      date: dateStrings
    })
  }

  const handleChangeSelect = (e) => {
    setData({
      ...data,
      time: e
    })
  }

  return (
    <>
      <h2>Đặt phòng</h2>

      <Row gutter={[20, 20]}>
        <Col span={24}>
          <p>Họ tên</p>
          <Input name="fullName" placeholder="Nhập họ tên" onChange={handleChangeInput} />
        </Col>
        <Col span={12}>
          <p>Số điện thoại</p>
          <Input name="phone" placeholder="Nhập số điện thoại" onChange={handleChangeInput} />
        </Col>
        <Col span={12}>
          <p>Email</p>
          <Input name="email" placeholder="Nhập email" onChange={handleChangeInput} />
        </Col>
        <Col span={12}>
          <p>Dịch vụ thêm</p>
          {/* checkbox */}
          <Checkbox.Group onChange={handleChangeCheckbox}>
            {/* the space giup cho cac khoi ben trong nam theo huong ma option direction co */}
            <Space direction="vertical">
              <Checkbox value="Thuê xe máy">Thuê xe máy</Checkbox>
              <Checkbox value="Thuê ô tô 4 chỗ">Thuê ô tô 4 chỗ</Checkbox>
              <Checkbox value="Thuê ô tô 7 chỗ">Thuê ô tô 7 chỗ</Checkbox>
              <Checkbox value="Thuê ô tô 16 chỗ">Thuê ô tô 16 chỗ</Checkbox>
            </Space>
          </Checkbox.Group>
        </Col>

        <Col span={12}>
          <p>Quà tặng</p>
          {/* Radio data no tra ra giong the input*/}
          <Radio.Group name="gift" onChange={handleChangeInput}>
            <Space direction="vertical">
              <Radio value="Áo cộc">Áo cộc</Radio>
              <Radio value="Mũ">Mũ</Radio>
              <Radio value="Kem chống nắng">Kem chống nắng</Radio>
            </Space>
          </Radio.Group>
        </Col>

        <Col span={12}>
          <p>Chọn ngày</p>
          <RangePicker format="DD/MM/YYYY" placeholder={["Ngày đến", "Ngày đi"]} onChange={handleChangeDate} />
        </Col>

        <Col span={12}>
          <p>Chọn giờ</p>
          <Select defaultValue={data.time} style={{ width: "100%" }} options={optionTime} onChange={handleChangeSelect}/>
        </Col>

        <Col span={24}>
          <Button type="primary" onClick={handleSubmit}>Đặt phòng</Button>
        </Col>
      </Row>
    </>
  )
}

export default BookRoom;