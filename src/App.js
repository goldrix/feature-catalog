import React, {useState} from 'react'
import Card from './components/Card/index'
import './app.css'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon, Button, Avatar } from 'antd';
import { Row, Col } from 'antd';
import classNames from 'classnames'

const { SubMenu } = Menu;


// state = {
//     current: 'mail',
//   };

// handleClick = e => {
//     console.log('click ', e);
//     this.setState({
//       current: e.key,
//     });
//   };


const App = (props) =>{

   
      
    return(
        <div>
            
            <Row className="headerRow">
                <Col className="colStyleNavigation" span={18}>
                    <div className="logo-container">
                        <img className="logoImage" src={require("./assets/fc-icon.svg")} alt="logo"/>
                        <img className="logoWords" src={require("./assets/feature-catalog.svg")} alt="logo"/>
                    </div>
                
                    <ul className="navbar">
                        <li>
                            
                            <a href="#" className="menu-item"><Icon type="home" className="menuIcon"/>Home</a>
                            <div className="simple-menu-container"><a href="#" className="menu-item-simple"><img src={require("./assets/home.svg")} className="simple-icon"></img></a>
                            </div>
                        </li>
                            
                        <li>
                            <a href="#" className="menu-item"><Icon type="compass" className="menuIcon"/>Explore</a>
                            <div className="simple-menu-container"><a href="#" className="menu-item-simple"><img src={require("./assets/explore.svg")} className="simple-icon"></img></a>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="menu-item"><Icon type="book" className="menuIcon"/>Bookmarks</a>
                            <div className="simple-menu-container"><a href="#" className="menu-item-simple"><img src={require("./assets/bookmarks.svg")} className="simple-icon"></img></a>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="menu-item"><Icon type="line-chart" className="menuIcon"/>Reports</a>
                            <div className="simple-menu-container"><a href="#" className="menu-item-simple"><img src={require("./assets/reports.svg")} className="simple-icon"></img></a>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="menu-item"><Icon type="link" className="menuIcon"/>Aliases</a>
                            <div className="simple-menu-container"><a href="#" className="menu-item-simple"><img src={require("./assets/aliases.svg")} className="simple-icon"></img></a>
                            </div>
                        </li>
                     
                    </ul>
                </Col>
                <Col className="colStyle" span={6}>
                <span><Button type="primary" shape="round" icon="plus" className='add-feature-button'>Add Feature Set</Button></span>
                <span><Button type="primary" shape="circle" icon="plus" className='add-feature-button-small'/></span>

                <span><Button type="link" shape="round" icon="eye" className='secureIPButton'>Secure IP</Button></span>
                <span><Icon type="question-circle" theme="outlined" style={{color:'#E8E8E8'}} /></span>
                <span className="avatar"><Avatar icon={<Icon type="user" />} /></span>
                </Col>
                
            </Row>
        </div>
    )
}

export default App