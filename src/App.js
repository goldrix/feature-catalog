import React, {useState} from 'react'
import Card from './components/Card/index'
import './app.css'
import 'antd/dist/antd.css';
import CustomHeader from './components/Header/index'
import ExportLeftFilter from './components/ExploreLeftFilter/index'
import { Layout, Menu, Spin } from 'antd';
import ViewOptions from './components/ViewOptions/index'
import Test from './components/test3/index'
import CardTableView from '../src/components/Table/index'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;






const App = (props) =>{

      
    return(

    
    <div className="content-container">
    <Layout>
      <CustomHeader/>
    <Layout>
        <Sider theme="light" width="256">
          <ExportLeftFilter/>
        </Sider>
        
        
        <Content>
         <ViewOptions
            renderCard={()=>
            <div><Card/></div>}
            
            renderTable={()=>
            <div>
              <CardTableView/>
              
              </div>}/> 
            <Content/>
              
          </Content>
      </Layout>
      
    </Layout>

    </div>




        


            
            
            
            
            
            )
        }
        
export default App
        
        
        
        
        
        
        
        
        
        
        
        {/* <CardContainer renderCard={()=><Card/>} renderTable={()=><div>TABLE!!!</div>}/> */}