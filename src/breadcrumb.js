import React, { Component } from 'react'
import { Breadcrumb, Icon} from 'antd';


class BreadcrumbCustom extends Component{
    render(){
        return(
            <Breadcrumb>
            <Breadcrumb.Item >
              <span style={{paddingRight:'8px'}}>Aliase:</span>
              <Icon type="user" />
            </Breadcrumb.Item>
            <Breadcrumb.Item >
              <span>user</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href=""><span>equities</span></Breadcrumb.Item>
          </Breadcrumb>
        )
    }
}

export default BreadcrumbCustom