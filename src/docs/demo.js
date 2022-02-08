import { useState } from 'react';
import LoadingProcess from '../lib';
import { Code } from './components';

const uploadToServer = () => new Promise((res) => setTimeout(() => res(), 1000));

const code = `import { useState } from 'react';
import LoadingProcess from 'lesca-react-loading';

const uploadToServer = () => new Promise((res) => setTimeout(() => res(), 1000));

const Demo = () => {
	const [uploading, setUploading] = useState(false);

	return (
		<div>
			{uploading && <LoadingProcess text='uploading...' />}
			<button
				onClick={() => {
					setUploading(true);
					uploadToServer().then(() => setUploading(false));
				}}
			>
				Update Something
			</button>
		</div>
	);
};
export default Demo;
`;

const code2 = `import { useState } from 'react';
import LoadingProcess from 'lesca-react-loading';

const Demo = () => {
	const [loading, setLoading] = useState(true);
	return (
		<picture style={{ position: 'relative', width: '800px', height: '500px' }}>
			{loading && <LoadingProcess position='absolute' />}
			<img
				src='https://fakeimg.pl/800x500/?text=Big%20Size&font=lobster'
				onLoad={() => {
					setLoading(false);
				}}
			/>
		</picture>
	)
}
export default Demo;
`;

const Demo = () => {
	const [uploading, setUploading] = useState(false);
	const [loading, setLoading] = useState(true);

	return (
		<>
			<div>
				<h2>position absolute</h2>
				<Code code={code2} />
				<picture style={{ position: 'relative', width: '800px', height: '500px' }}>
					{loading && <LoadingProcess position='absolute' />}
					<img
						src='https://fakeimg.pl/1600x1000/?text=Big%20Size&font=lobster'
						style={{ width: '800px', height: '500px' }}
						onLoad={() => {
							setLoading(false);
						}}
					/>
				</picture>
			</div>
			<div>
				<h2>position fixed</h2>
				<Code code={code} />
				{uploading && <LoadingProcess text='uploading...' />}
				<button
					onClick={() => {
						setUploading(true);
						uploadToServer().then(() => setUploading(false));
					}}
				>
					Upload Something
				</button>
			</div>
		</>
	);
};
export default Demo;
