import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Menu, Dropdown, Button, message, Tooltip } from 'antd';
import { DownOutlined, UserOutlined, WifiOutlined, TagsOutlined} from '@ant-design/icons';
import HeartIcon from '../CustomIcons/index'
import DataSetIcon from '../CustomIcons/DataSetIcon'
import FeatureColumnIcon from '../CustomIcons/FeatureColumn'
import FeatureCatalogIcon from '../CustomIcons/FeatureCatalogIcon'
import TimeColumnIcon from '../CustomIcons/TimeColumn'



// import TestIcon from '../CustomIcons/TestIcon'

function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <FeatureColumnIcon />
      Feature Column
    </Menu.Item>
    <Menu.Item key="4">
     <img className="svgStyle" src={require("../../Icons/FeatureColumn-2.svg")} alt="logo"/>
     Feature Column v2
    </Menu.Item>
    <Menu.Item key="2">
      <DataSetIcon />
      Data Set
    </Menu.Item>
    <Menu.Item key="3">
      <FeatureCatalogIcon />
      Feature Set
    </Menu.Item>
 
    <Menu.Item key="4">
     <img className="svgStyle" src={require("../../Icons/TimeColumn.svg")} alt="logo"/>
     Time Column
    </Menu.Item>
    
    <Menu.Item key="5">
     <img className="svgStyle" src={require("../../Icons/KeyColumn.svg")} alt="logo"/>
     Key Column
    </Menu.Item>
    <Menu.Item key="6">
     <img className="svgStyle" src={require("../../Icons/namespace.svg")} alt="logo"/>
     Namespaces
    </Menu.Item>
    <Menu.Item key="6">
     <img className="svgStyle" src={require("../../Icons/masked.svg")} alt="logo"/>
     Masked Feature
    </Menu.Item>

   
  </Menu>
);

const DropdownMenu=()=>{
    return(
        <div>
                <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{color:'white'}}>
                <DownOutlined />
                </a>
                </Dropdown>
        </div>
    )
}

  

export default DropdownMenu