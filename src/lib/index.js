import React from 'react';
import './style.less';

const LoadingProcess = (props) => {
	const { theme, text, position, style } = props;

	return (
		<div id={theme} className='lesca-loading' style={{ position, ...style }}>
			<div className='background' />
			<div className='ico'>
				{[...new Array(18).keys()].map((e) => (
					<div key={e} />
				))}
			</div>
			<div className='text'>{text}</div>
		</div>
	);
};

LoadingProcess.defaultProps = {
	text: '',
	position: 'fixed',
	theme: 'dark',
	style: {},
};

export default LoadingProcess;
