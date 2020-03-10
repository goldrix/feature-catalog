
import React, {useState} from 'react'
import './style.css'
import { Radio } from 'antd';

const ViewOptions = (props) =>{
    
    
  const [view, setView] = React.useState('card')

  const handleViewChange = (e) =>{
    setView(e.target.value)
  }
    
    
    return(
        <div className="viewOptionsContainer">
        <Radio.Group value={view} onChange={handleViewChange}>
          <Radio.Button value="card">Card view</Radio.Button>
          <Radio.Button value="table">Table view</Radio.Button>
        </Radio.Group>
            {view === 'card'? props.renderCard():props.renderTable()}
        </div>

    )
}



export default ViewOptions


































// const TableView = (props) =>{

//     const [view, setView] = React.useState('card')

//     const handleViewChange = (e) =>{
//         setView(e.target.value)
//     }

//     return(
//         <div>
//             <Radio.Group value={view} onChange={handleViewChange}>
//                     <Radio.Button value="card">card view</Radio.Button>
//                     <Radio.Button value="table">Table view</Radio.Button>
//             </Radio.Group>
//         {view === 'card'? props.renderCard():props.renderTable()}
        
//         </div>

       
//     )
// }
