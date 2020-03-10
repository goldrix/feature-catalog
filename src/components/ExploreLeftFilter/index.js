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
          defaultSelectedKeys={['2']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="2">
            <Icon type="database" />
            <span>My data sets</span>
          </Menu.Item>
          <Menu.Item key="1">
            <Icon type="profile" />
            <span>News feed</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="star" />
            <span>Starred</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="team" />
                <span>My Teams</span>
              </span>
            }
          >
            <Menu.Item key="5">Johnny Depp</Menu.Item>
            <Menu.Item key="6">Nicole Kidman</Menu.Item>
            <Menu.Item key="7">John Travolta</Menu.Item>
            <Menu.Item key="8">Steven Spielberg</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="share-alt" />
                <span>Shared</span>
              </span>
            }
          >
            <Menu.Item key="9">Shared to me</Menu.Item>
            <Menu.Item key="10">Shared by me</Menu.Item>
            <Menu.Item key="11">Team Bookmarks</Menu.Item>
            <Menu.Item key="12">Public</Menu.Item>
            
          </SubMenu>
        </Menu>
      </div>
    );
  }
}



export default ExploreLeftFilter