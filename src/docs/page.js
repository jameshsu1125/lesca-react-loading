import React, { useEffect, useState } from 'react';
import Loading from './../lib/index';

const Page = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {}, [loading]);
	return (
		<div className='page'>
			<button
				onClick={() => {
					setLoading(true);
					new Promise((res, rej) => {
						console.log('sending data...');
						setTimeout(() => res(), 3000);
					}).then(() => {
						setLoading(false);
						console.log('success');
					});
				}}
			>
				submite something
			</button>
			{loading && <Loading text='update now...' />}
		</div>
	);
};
export default Page;
