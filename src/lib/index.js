import React from 'react';
import './main.less';

const defaultProps = {
	text: '',
	position: 'fixed',
};

const BasicLoading = (props) => {
	const opt = { ...defaultProps, ...props };

	const { style, text, position } = opt;

	console.log(opt);

	return (
		<div id={style || ''} className='lesca-loading' style={{ position }}>
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

export default BasicLoading;
