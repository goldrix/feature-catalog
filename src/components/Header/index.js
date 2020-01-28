import React,{useState} from 'react'
import { Icon } from 'antd';
import './style.css';



const Header = (props) => {
    const [isContentCollapsed, isContentExtended] = React.useState(false);
    const extendContent = () =>{
        isContentExtended(!isContentCollapsed);
    }

    const enterField = (e) =>{
        e.preventDefault();
        alert('WORKS!!!!');
    }

    
    //Input
    const [inputValue, setInputValua] = useState(false);
        const openSearch = ()=>{
            setInputValua (true);
        }

    const StyleClass = inputValue? 'input active':'input';


    return(

    
        <div>


            <p> ContentProident minim esse esse voluptate id pariatur reprehenderit ea laborum officia.<span><a href="#" onClick={extendContent}>Show more</a></span></p>

            {isContentCollapsed && (

                    <div>
                        <form onSubmit={enterField}>
                            <input type="text" className={StyleClass} placeholder="Enter more content"></input>
                            <Icon type="search" onClick={openSearch}/>
                    
                        </form>
                        
                    </div>
            )}

        </div>
    )
}

export default Header