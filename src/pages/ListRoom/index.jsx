import { useEffect, useState } from "react";
import { Button } from "antd";
import { getListRoom } from "../../services/roomsService";
import { UnorderedListOutlined, SwitcherOutlined } from "@ant-design/icons";
import RoomGrid from "./RoomGrid";
import RoomTable from "./RoomTable";

function ListRoom() {
  const [rooms, setRooms] = useState([]);
  const [isGrid, setIsGrid] = useState(true);

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
      <Button onClick={() => setIsGrid(!isGrid)}>
        {isGrid ? <SwitcherOutlined /> : <UnorderedListOutlined />}
      </Button>
      {isGrid ?
        (<>
          <RoomGrid rooms={rooms}/>
        </>) :
        (<>
          {/* table */}
          <RoomTable rooms={rooms} />
        </>)}


    </>
  )
}

export default ListRoom;