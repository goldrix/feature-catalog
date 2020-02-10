import React, {useState} from 'react'
import Card from './components/Card/index'
import './app.css'
import 'antd/dist/antd.css';
import CustomHeader from './components/Header/index'
import ExportLeftFilter from './components/ExploreLeftFilter/index'
import { Layout, Menu } from 'antd';
import CardContainer from './components/CardContainer/index'
import Test from './components/test3/index'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;






const App = (props) =>{

      
    return(
        
   <Layout>
      <CustomHeader/>
    
    <Content>
      
      <Layout>
        <Sider>
            <ExportLeftFilter/>

        </Sider>
            <Content>
                <CardContainer renderCard={()=><Card/>} renderTable={()=><div>TABLE!!!!</div>}/> 
            </Content>
      </Layout>
            
    </Content>
    
  {/* <Test/> */}
  </Layout>

            
            
            
            
            
            )
        }
        
        export default App
        
        
        
        
        
        
        
        
        
        
        
        {/* <CardContainer renderCard={()=><Card/>} renderTable={()=><div>TABLE!!!</div>}/> */}