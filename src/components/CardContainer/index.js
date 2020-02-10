import React, {useState} from 'react'
import { Radio } from 'antd';

const TableView = (props) =>{
    
    
  const [view, setView] = React.useState('card')

  const handleViewChange = (e) =>{
    setView(e.target.value)
  }
    
    
    return(
        <div>
        <Radio.Group value={view} onChange={handleViewChange}>
          <Radio.Button value="card">Large</Radio.Button>
          <Radio.Button value="table">table</Radio.Button>
        </Radio.Group>
            {view === 'card'? props.renderCard():props.renderTable()}
        </div>

    )
}



export default TableView


































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
