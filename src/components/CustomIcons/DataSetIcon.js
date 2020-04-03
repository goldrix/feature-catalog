import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './Style.css';
import Icon from '@ant-design/icons';

const DataSetSVG = () => (
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256.5,45,10,128.78V376.56l246.5,81.23L503,378.6V127.25Zm-18,377.52-197.21-64V162.33l197.21,63Zm-167.31-286L256,73.54l185.86,63L257,197.44ZM473.25,359.59,272.8,424.65V224.21l200.45-64Z"/></svg>
);


const DataSetIcon = props => <Icon component={DataSetSVG} {...props} />;





export default DataSetIcon

