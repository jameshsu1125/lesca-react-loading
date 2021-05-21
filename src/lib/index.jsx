import React from 'react';
import './main.less';

const BasicLoading = (props) => {
	const { style, text } = props;
	const appendLines = () => {
		return [...new Array(18).keys()].map((e) => <div key={e} />);
	};

	return (
		<div id={style || ''} className='lesca-loading'>
			<div className='background' />
			<div className='ico'>{appendLines()}</div>
			<div className='text'>{text}</div>
		</div>
	);
};
export default BasicLoading;
