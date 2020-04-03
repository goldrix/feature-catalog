import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Icon from '@ant-design/icons';
import "./Style.css"

const FeatureCatalogSVG = () => (
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs></defs><rect class="cls-2" x="184.98" y="51.42" width="142.04" height="142.04" transform="translate(-11.6 216.88) rotate(-45)"/><rect class="cls-2" x="321.54" y="184.98" width="142.04" height="142.04" transform="translate(-66.04 352.56) rotate(-45)"/><rect class="cls-2" x="49.42" y="184.98" width="142.04" height="142.04" transform="translate(-145.74 160.14) rotate(-45)"/><rect class="cls-2" x="184.98" y="321.54" width="142.04" height="142.04" transform="translate(-202.6 296) rotate(-45)"/></svg>
);


const FeatureCatalogIcon = props => <Icon component={FeatureCatalogSVG} {...props} />;





export default FeatureCatalogIcon

