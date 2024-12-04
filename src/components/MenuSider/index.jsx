import { Menu } from "antd";
import { PieChartOutlined, SketchOutlined, HomeOutlined, LineChartOutlined, RadarChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function MenuSider() {

  const items =[
    //-key o day phai theo tk ant da DNghia
    {
      label: "Menu 1",
      icon: <PieChartOutlined />,
      key: "Menu-1",
      children: [
        {
          label: <Link to="/">Dashboard</Link>,
          key: "/",
        },
        {
          label: "Menu 1-2",
          key: "Menu-1-2",
        },
        {
          label: "Menu 1-3",
          key: "Menu-1-3",
        },
      ]
    },
    {
      label: "Menu 2",
      icon: <LineChartOutlined />,
      key: "Menu-2",
      children: [
        {
          label: "Menu 2-1",
          key: "Menu-2-1",
        },
        {
          label: "Menu 2-2",
          key: "Menu-2-2",
        }
      ]
    },
    {
      label: "Menu 3",
      icon: <RadarChartOutlined />,
      key: "Menu-3"
    },
    {
      label: <Link to="/book-room">Book Room</Link>,
      icon: <HomeOutlined />,
      key: "/book-room",
    },
    {
      label: <Link to="/create-room">Create Room</Link>,
      icon: <SketchOutlined />,
      key: "/create-room",
    }
  ]
  return (
    <>
      <Menu
        //-định dạng hiển thị mode
        mode="inline"
        items={items}
        //-mặc định hiển thị cái nào nhưng sẽ chưa được mở
        defaultSelectedKeys={["/"]}
        //-mở cái nào
        defaultOpenKeys={["Menu-1"]}
      />
    </>
  )
}

export default MenuSider;