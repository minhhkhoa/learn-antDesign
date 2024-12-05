/* eslint-disable react/prop-types */
import { Card, Col, Row, Badge } from "antd";

function RoomGrid(props) {
  const rooms = props.rooms;

  return (
    <>
      <Row gutter={[20, 20]}>
        {rooms.map((item) => (
          <Col key={item.id} span={12}>
            <Badge.Ribbon
              text={item.typeRoom ? "VIP" : "Normal"}
              color={item.typeRoom ? "red" : "gray"}
            >
              <Card title={item.name}>
                <p>Số giường: <strong>{item.quantityBed}</strong></p>
                <p>Số người: <strong>{item.quantityPeople}</strong></p>
                {Array.isArray(item.utils) ? <p>Tiện ích: <strong>{(item.utils).join(", ")}</strong></p> : <p><strong>{item.utils}</strong></p>}
                <p>Trạng thái: {(item.status) ?
                  <Badge status="success" text="Còn phòng" /> :
                  <Badge status="error" text="Hết phòng" />}
                </p>
              </Card>
            </Badge.Ribbon>
          </Col>

        ))}
      </Row>
    </>
  )
}

export default RoomGrid;