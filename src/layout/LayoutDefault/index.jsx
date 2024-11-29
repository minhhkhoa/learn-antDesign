import { Layout } from "antd";
import LearnGrid from "../../components/LearnGrid";
import "./LayoutDefault.css";
import Logo from "../../images/logo.png";
import LogoFold from "../../images/logo-fold.png";
import { SearchOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Sider, Content } = Layout

function LayoutDefault() {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout className="layout-default">
        <header className="header">
          <div className={"header__logo " + (collapsed && "header__logo--collapsed")}>
            <img src={(collapsed ? LogoFold : Logo)} alt="Logo" />
          </div>
          <div className="header__nav">
            <div className="header__nav-left">
              <div className="header__collapse" onClick={() => setCollapsed(!collapsed)}>
                <MenuUnfoldOutlined />
              </div>
              <div className="header__search">
                <SearchOutlined />
              </div>
            </div>
            <div className="header__nav-right">
              Noi Dung
            </div>
          </div>
        </header>
        <Layout>
          {/* attribute: collapsed: thu mo sider */}
          <Sider collapsed={collapsed} theme="light" className="sider">
            Sider
          </Sider>

          <Content className="content">
            <LearnGrid />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default LayoutDefault;