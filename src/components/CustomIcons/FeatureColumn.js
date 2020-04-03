import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Icon from '@ant-design/icons';
import "./Style.css"

const FeatureColumnSVG = () => (
  <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 512 512"><defs></defs><rect x="306.23" y="34" width="184.77" height="100.45" rx="23.4"/><rect class="cls-1" x="44" y="39" width="174.77" height="90.45" rx="18.4"/><path d="M200.37,44a13.41,13.41,0,0,1,13.4,13.4v53.65a13.41,13.41,0,0,1-13.4,13.4H62.4A13.41,13.41,0,0,1,49,111.05V57.4A13.41,13.41,0,0,1,62.4,44h138m0-10H62.4A23.4,23.4,0,0,0,39,57.4v53.65a23.4,23.4,0,0,0,23.4,23.4h138a23.39,23.39,0,0,0,23.4-23.4V57.4A23.4,23.4,0,0,0,200.37,34Z"/><rect x="348.39" y="162.11" width="100.45" height="184.77" rx="23.4" transform="translate(653.11 -144.11) rotate(90)"/><rect class="cls-1" x="44" y="209.27" width="174.77" height="90.45" rx="18.4"/><path d="M200.37,214.27a13.41,13.41,0,0,1,13.4,13.4v53.66a13.41,13.41,0,0,1-13.4,13.4H62.4A13.41,13.41,0,0,1,49,281.33V227.67a13.41,13.41,0,0,1,13.4-13.4h138m0-10H62.4A23.4,23.4,0,0,0,39,227.67v53.66a23.4,23.4,0,0,0,23.4,23.4h138a23.4,23.4,0,0,0,23.4-23.4V227.67a23.4,23.4,0,0,0-23.4-23.4Z"/><rect x="348.39" y="332.39" width="100.45" height="184.77" rx="23.4" transform="translate(823.39 26.16) rotate(90)"/><rect class="cls-1" x="44" y="379.55" width="174.77" height="90.45" rx="18.4"/><path d="M200.37,384.55a13.41,13.41,0,0,1,13.4,13.4V451.6a13.41,13.41,0,0,1-13.4,13.4H62.4A13.41,13.41,0,0,1,49,451.6V398a13.41,13.41,0,0,1,13.4-13.4h138m0-10H62.4A23.4,23.4,0,0,0,39,398V451.6A23.4,23.4,0,0,0,62.4,475h138a23.4,23.4,0,0,0,23.4-23.4V398a23.39,23.39,0,0,0-23.4-23.4Z"/></svg>
);


const FeatureColumnIcon = props => <Icon component={FeatureColumnSVG} {...props} />;





export default FeatureColumnIcon

