import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Icon from '@ant-design/icons';
import "./Style.css"

const TimeColumnSVG = () => (
    <svg className="svgStyle" >
<g>
	<g>
		<g>
			<path d="M0,0v512h256v-32h-64V352h32v-32h-32V192h128v32h32v-32h96v-32h-96V32h128v96h32V0H0z M160,480H32V352h128V480z M160,320
				H32V192h128V320z M160,160H32V32h128V160z M320,160H192V32h128V160z"/>
			<path d="M384,256c-70.692,0-128,57.308-128,128s57.308,128,128,128s128-57.308,128-128C511.921,313.34,454.66,256.079,384,256z
				 M384,480c-53.019,0-96-42.981-96-96s42.981-96,96-96s96,42.981,96,96C479.947,436.997,436.997,479.947,384,480z"/>
			<polygon points="400,336 368,336 368,368 336,368 336,400 368,400 368,432 400,432 400,400 432,400 432,368 400,368 			"/>
			<rect x="480" y="224" width="32" height="32"/>
			<rect x="480" y="160" width="32" height="32"/>
		</g>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
);


const TimeColumnIcon = props => <Icon component={TimeColumnSVG} {...props} />;





export default TimeColumnIcon

