import React from 'react';
import './main.less';

const BasicLoading = (props) => {
	const { style, text } = props;

	return (
		<div id={style || ''} className='lesca-loading'>
			<div className='background' />
			<div className='ico'>{[...new Array(18).keys()].map((e) => <div key={e} />)}</div>
			<div className='text'>{text}</div>
		</div>
	);
};
export default BasicLoading;
