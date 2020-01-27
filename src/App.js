import React, { Component } from 'react';
import { Icon, PageHeader, Divider, Tag } from 'antd';
import 'antd/dist/antd.css';

import { Button } from 'antd';
import './App.css';
import BreadcrumbCustom from './breadcrumb'

  const App = () => {
    const [isMoreDescritionDisplayed, setIsMoreDescritionDisplayed] = React.useState(false);
      return(

<div className="CardContainer">

  <div className="internalContainer">

      <h2><Icon type="star" theme="outlined" style={{paddingRight:'16px'}}/>Equity Returns from China market </h2>
      <BreadcrumbCustom/>
      <span class="ant-page-header-heading-sub-title">Fugiat labore nulla sunt nulla ea. Non laboris sint minim exercitation voluptate est ea adipisicing. Nisi irure aliquip officia ex. Incididunt proident consectetur esse mollit velit. Eu ex dolor velit cillum cillum enim. Amet non est sint excepteur fugiat ea do veniam id ex.
        <span style={{paddingLeft:'8px'}}><a onClick={() => {
          setIsMoreDescritionDisplayed(!isMoreDescritionDisplayed)
          }}>Show more...</a></span>
        </span>
      {isMoreDescritionDisplayed && (<div>MORE!!!</div>)}
      <span>Column matched:</span><span style={{paddingLeft:'8px', fontWeight:'500'}}>Canada <Divider type="vertical" />Macro <Divider type="vertical" /> Equity<Divider type="vertical" />Returns</span>
      

      <Divider orientation="left"><span className="divider-text">Refine Search results</span></Divider>
      <Tag color="blue" style={{marginBottom:'8px'}}><a href="">Market</a><Icon type="search" style={{paddingLeft:'8px'}}/></Tag>
      <Tag color="blue"><a href="">Market</a><Icon type="search" style={{paddingLeft:'8px'}}/></Tag>
      <Tag color="blue"><a href="">Market</a><Icon type="search" style={{paddingLeft:'8px'}}/></Tag>
      <Tag color="blue"><a href="">Market</a><Icon type="search" style={{paddingLeft:'8px'}}/></Tag>
      <Tag color="blue"><a href="">Market</a><Icon type="search" style={{paddingLeft:'8px'}}/></Tag>
      <Tag color="blue"><a href="">Market</a><Icon type="search" style={{paddingLeft:'8px'}}/></Tag>
      <Tag color="blue"><a href="">Market</a><Icon type="search" style={{paddingLeft:'8px'}}/></Tag>
      <span style={{paddingLeft:'8px'}}><a href="">Show more...</a></span>

  </div>
</div>



      )
    
  }
  
  export default App;