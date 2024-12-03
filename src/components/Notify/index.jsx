import { Button, Dropdown } from "antd";
import { BellOutlined } from "@ant-design/icons";
import "./Notify.css";

function Notify() {
  const items = [
    {
      label: <div className="notify_item">
        <div className="notify_item-icon">
          <BellOutlined/>
        </div>
        <div className="notify_item-content">
          <div className="notify_item-title">
            Item1
          </div>
          <div className="notify_item-time">
            8 phut truoc
          </div>
        </div>
      </div>,
      key: '1',
    },
    {
      label: <div className="notify_item">
        <div className="notify_item-icon">
          <BellOutlined />
        </div>
        <div className="notify_item-content">
          <div className="notify_item-title">
            Item2
          </div>
          <div className="notify_item-time">
            2 phut truoc
          </div>
        </div>
      </div>,
      key: '2',
    },
    {
      label: <div className="notify_item">
        <div className="notify_item-icon">
          <BellOutlined />
        </div>
        <div className="notify_item-content">
          <div className="notify_item-title">
            Item3
          </div>
          <div className="notify_item-time">
            3 phut truoc
          </div>
        </div>
      </div>,
      key: '3',
    },
    {
      label: <div className="notify_item">
        <div className="notify_item-icon">
          <BellOutlined />
        </div>
        <div className="notify_item-content">
          <div className="notify_item-title">
            Item4
          </div>
          <div className="notify_item-time">
            4 phut truoc
          </div>
        </div>
      </div>,
      key: '4',
    },
    {
      label: <div className="notify_item">
        <div className="notify_item-icon">
          <BellOutlined />
        </div>
        <div className="notify_item-content">
          <div className="notify_item-title">
            Item5
          </div>
          <div className="notify_item-time">
            5 phut truoc
          </div>
        </div>
      </div>,
      key: '5',
    },
    {
      label: <div className="notify_item">
        <div className="notify_item-icon">
          <BellOutlined />
        </div>
        <div className="notify_item-content">
          <div className="notify_item-title">
            Item6
          </div>
          <div className="notify_item-time">
            6 phut truoc
          </div>
        </div>
      </div>,
      key: '6',
    }
    
  ];
  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
        //-co nhieu optin lam vao trang chu doc
        trigger={['click']}

        //-nó nhận dữ liệu là từ menu bên trên kia kìa.Và ở đây custom lại
        dropdownRender={(menu) => (
          <>
            <div className="notify__dropdown">
              <div className="notify__header">
                <div className="notify__header-title">
                  <BellOutlined /> Notification
                </div>
                <Button type="link">View All</Button>
              </div>
              <div className="notify__body">
                {menu}
              </div>

            </div>
          </>
        )}
      >
        <Button type="text" icon={<BellOutlined />}></Button>
      </Dropdown>
    </>
  )
}

export default Notify;