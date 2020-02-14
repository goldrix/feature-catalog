import React, {useState} from 'react'
import Card from './components/Card/index'
import './app.css'
import 'antd/dist/antd.css';
import CustomHeader from './components/Header/index'
import ExportLeftFilter from './components/ExploreLeftFilter/index'
import { Layout, Menu } from 'antd';
import ViewOptions from './components/ViewOptions/index'
import Test from './components/test3/index'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;






const App = (props) =>{

      
    return(
        
   <Layout>
      <CustomHeader/>
    
    <Content>
      
            <ExportLeftFilter/>
      <Layout>
        

        
            <ViewOptions
            renderCard={()=>
            <div><Card/></div>}
            
            renderTable={()=>
            <div>TABLE!!!!</div>}/> 
            <Content/>
            
            
      </Layout>
            
    </Content>
    
 
  </Layout>

            
            
            
            
            
            )
        }
        
export default App
        
        
        
        
        
        
        
        
        
        
        
        {/* <CardContainer renderCard={()=><Card/>} renderTable={()=><div>TABLE!!!</div>}/> */}