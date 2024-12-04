import { useEffect, useState } from "react";
import { getListRoom } from "../../services/roomsService";
import { Card, Col, Row, Badge } from "antd";

function ListRoom() {
  const [rooms, setRooms] = useState([]);

  //-call api
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListRoom();
      setRooms(response);
    }

    //-goi ham
    fetchApi();
  }, []);

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
                <p>Tiện ích: <strong>{(item.utils).join(", ")}</strong></p>
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

export default ListRoom;