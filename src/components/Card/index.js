import React, { Component, useState }from 'react';
import { Icon, PageHeader, Divider, Tag } from 'antd';
import 'antd/dist/antd.css';

import { Button, Breadcrumb } from 'antd';
import './style.css';

const Card = (props) => {





  // const  [isMoreDescription, setIsMoreDescription] = React.useState(false);
    
  // const moreDescription = () =>{
  //   setIsMoreDescription(!isMoreDescription)
  // }
  
  const [isMoreTaxonomy, setIsMoreTaxomomy] = useState(false)
 
  const moreTaxonomy = () =>{
    setIsMoreTaxomomy(!isMoreTaxonomy)
  }
 
  const [isMoreProprties, setIsMoreProprties] = useState(false)
 
  const MoreProprties = () =>{
    setIsMoreProprties(!isMoreProprties)
  }



React.state={
   toggle:false
 }
  function moreDescription(){
    const newState = !this.state.toggle;
    this.setState({toggle:newState})
  }

  const {toggle} = this.state;
  const textValue = toggle?"ON":"OF"
       
     
     
     
return(
  
        

<div className="CardContainer">
  <div className="internalContainer">

      <div className="bread-crumb-container">

          <Breadcrumb style={{paddingBottom:'16px'}}>
                <Breadcrumb.Item >
                  {/* <span style={{paddingRight:'8px'}}>Aliase:</span> */}
                  {/* <Icon type="user" /> */}
                </Breadcrumb.Item>
                <Breadcrumb.Item >
                  <span>user</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item href=""><span>equities</span></Breadcrumb.Item>
          </Breadcrumb>

          <div>
            <a href="#"> <span>Organize to bookmarks...</span></a>
          </div>
      </div>

      <h2>
        <Icon type="star" theme="filled" style={{paddingRight:'16px'}}/>Equity Returns from China market </h2>
        <div className="data-information">
            <p style={{borderBottom:'2px solid #3277A5', width:'auto'}}>Feature set</p> &nbsp; &#8226; &nbsp;
            <p style={{fontFamily:"Ropa Sans",  fontStyle: 'italic', fontWeight:'400'}}>Curated</p>&nbsp; &#8226; &nbsp;
            <p>Created Feb 25, 2018 </p>&nbsp; &#8226; &nbsp;
            <p>WLS:</p><span style={{color:'#F6C35D', fontWeight:'500', fontSize:'1.2em'}}>&nbsp;8.48</span>&nbsp; &#8226; &nbsp;
            <p>RF:</p><span style={{color:'#52C41A', fontWeight:'500', fontSize:'1.2em'}}>&nbsp;84.26</span>&nbsp; &#8226; &nbsp;
            <p>DQ:&nbsp;n/a</p>
        </div>
        
        
        <div className="data-information">
            <p style={{fontWeight:'500'}}>Source IRI:</p>&nbsp;
            <p>Source IRI: tsdata:/equity-modelstate-v1/ts/celfs-dc/20200122/US/5/u.ACTIVE_3000_US</p>
            <Icon style={{paddingLeft:'8px'}}type="copy" theme="filled" />
        </div>


        <div className="description-container">
            <span class="ant-page-header-heading-sub-title"><p>Fugiat labore nulla sunt nulla ea. Non laboris sint minim exercitation voluptate est ea adipisicing. Nisi irure aliquip officia ex. Incididunt proident consectetur esse mollit velit. Eu ex dolor velit cillum cillum enim. Amet non est sint excepteur fugiat ea do veniam id ex.
              {/* {isMoreDescription && (<span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat blanditiis recusandae labore facilis magnam? Quod non vero esse alias sequi libero saepe. Deleniti ipsum perferendis molestiae aspernatur eius expedita praesentium.</span>)} */}
            

            <a href='#' style={{paddingLeft:'8px'}} onClick={this.moreDescription}>{textValue}</a></p></span>
         </div>


       
       
      <Divider orientation="left"><span className="divider-text">Refine Search Results></span></Divider>
      
      <div className="taxonomy-style">

      <span >
          <Tag color="blue" style={{marginBottom:'8px'}}><a href="" style={{paddingLeft:'8px'}}>Transaction</a></Tag>
          <Tag color="blue" style={{marginBottom:'8px'}}><a href="" style={{paddingLeft:'8px'}}>Security</a></Tag>
          <Tag color="blue" style={{marginBottom:'8px'}} ><a href="" style={{paddingLeft:'8px'}}>Transaction</a></Tag>
          <Tag color="blue" style={{marginBottom:'8px'}}><a href="" style={{paddingLeft:'8px'}}>Currency</a></Tag>
          <Tag color="blue" style={{marginBottom:'8px'}}><a href="" style={{paddingLeft:'8px'}}>Security</a></Tag>
          <Tag color="blue" style={{marginBottom:'8px'}}><a href="" style={{paddingLeft:'8px'}}>Transaction</a></Tag>
          <Tag color="blue" style={{marginBottom:'8px'}}><a href="" style={{paddingLeft:'8px'}}>Currency</a></Tag>
          
          
          
          {isMoreTaxonomy && (
            

            <span style={{marginTop:'16px'}}>
              <Tag color="blue"><a href="" style={{paddingLeft:'8px'}}>Transaction</a></Tag>
              <Tag color="blue"><a href="" style={{paddingLeft:'8px'}}>Security</a></Tag>
              <Tag color="blue"><a href="" style={{paddingLeft:'8px'}}>Transaction</a></Tag>
              <Tag color="blue"><a href="" style={{paddingLeft:'8px'}}>Currency</a></Tag>
              <Tag color="blue"><a href="" style={{paddingLeft:'8px'}}>Security</a></Tag>
              <Tag color="blue"><a href="" style={{paddingLeft:'8px'}}>Transaction</a></Tag>
              <Tag color="blue"><a href="" style={{paddingLeft:'8px'}}>Currency</a></Tag>
            </span>
          )}
          
          
          <a href="#" style={{paddingLeft:'8px'}} onClick={moreTaxonomy}>+ 7 more</a>
          </span>


      </div>    
          


      <span style={{fontWeight:'500'}} >Property:</span>
      
      
      <span style={{paddingLeft:'8px'}}>
            <a href="#" className="property-style">curated:core_modelling</a> <Divider type="vertical" />
            <a href="#" className="property-style">snapshot_date:202001</a> <Divider type="vertical" />
            <a href="#" className="property-style">Equity</a><Divider type="vertical" />
            <a href="#" className="property-style">interval:1d</a><Divider type="vertical" />
            <a href="#" className="property-style">region:US</a>
            
      </span>
           

            {isMoreProprties && (
              <span>
                  <a href="#" className="property-style">curated:core_modelling</a> <Divider type="vertical" />
                  <a href="#" className="property-style">snapshot_date:202001</a> <Divider type="vertical" />
                  <a href="#" className="property-style">Equity</a><Divider type="vertical" />
                  <a href="#" className="property-style">interval:1d</a><Divider type="vertical" />
                  <a href="#" className="property-style">region:US</a>
              </span>
             
            )}
            <a style={{paddingLeft:'8px'}} href="#" onClick={MoreProprties}>+5 more</a>

     

  </div>
</div>


    )
    
  }
  
  export default Card;