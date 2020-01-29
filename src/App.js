import React from 'react'
import Card from './components/Card/index'
import './app.css'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Row, Col } from 'antd';

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
                <Col className="colStyle" span={6}>
                    <img  src={require("./assets/fc-logo.svg")} alt="logo"/>
                </Col>
                    
                <Col className="colStyle" span={14}>
                    <ul className="navbar">
                        <li>
                            <a href="#"><Icon type="compass" className="menuIcon"/>Explore</a>
                        </li>
                        <li>
                            <a href="#"><Icon type="compass" className="menuIcon"/>Explore</a>
                        </li>
                        <li>
                            <a href="#"><Icon type="compass" className="menuIcon"/>Explore</a>
                        </li>
                        <li>
                            <a href="#"><Icon type="compass" className="menuIcon"/>Explore</a>
                        </li>
                     
                    </ul>
                </Col>
                <Col className="colStyle" span={4}>col-3</Col>
                
            </Row>
        </div>
    )
}

export default App