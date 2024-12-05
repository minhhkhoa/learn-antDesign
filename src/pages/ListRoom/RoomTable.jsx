/* eslint-disable react/prop-types */
import { Table, Popconfirm, Tag, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
function RoomTable(props) {

  // eslint-disable-next-line no-unused-vars
  const handleDelete = (key) => {
    alert("Xóa r do");
  };

  const rooms = props.rooms;
  rooms.forEach(element => {
    element.utils = Array.isArray(element.utils) ? element.utils.join(", ") : element.utils;
    element.status = element.status ? "Còn phòng" : "Hết phòng";
  });


  const columns = [
    {
      title: "Tên phòng",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số giường",
      dataIndex: "quantityBed",
      key: "quantityBed",
    },
    {
      title: "Số người tối đa",
      dataIndex: "quantityPeople",
      key: "quantityPeople",
    },
    {
      title: "Tiện ích",
      dataIndex: "utils",
      key: "utils",
    },
    {
      title: "Loại phòng",
      dataIndex: "typeRoom",
      key: "typeRoom",
      // -cach dung render cx dc hoac chuan hao du lieu nhu ben tren
      render: (_, record) => {
        return (
          <>
            {
              record.typeRoom ?
                <Tooltip title="Vip chuẩn 5 sao">
                  <Tag Tag color="red">Vip</Tag>
                </Tooltip> :
                <Tooltip title="Ở được">
                  <Tag Tag color="gray">Normal</Tag>
                </Tooltip>
            }
          </>
        )
      }
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      // eslint-disable-next-line no-unused-vars
      render: (_, record) =>
        <Popconfirm title="Sure to delete?" onConfirm={handleDelete}>
          <DeleteOutlined style={{ color: "red", fontSize: "20px", display: "flex", justifyContent: "center" }} />
        </Popconfirm >

    },
  ];

  return (
    <>
      <Table rowKey="id" dataSource={rooms} columns={columns} />
    </>
  )
}

export default RoomTable;