import React from 'react'
import './style.css'
import { Layout, Menu, Icon } from 'antd';
// const { Header, Button, Breadcrumb, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;

class ExploreLeftFilter extends React.Component {
  state = {
    collapsed: false,
  };

  render() {
    return (
      <div style={{ width: '256px' }}>
        
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="profile" />
            <span>News feed</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="database" />
            <span>My data sets</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="star" />
            <span>Starred</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Catalog</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}



export default ExploreLeftFilter