import { render } from 'react-dom';
import { Navation, Code } from './components';
import Demo from './demo';
import './styles.less';

const homepage = 'https://github.com/jameshsu1125/lesca-react-loading';
const name = 'lesca-react-loading';
const description = 'simple exsample';

const Page = () => {
	return (
		<>
			<Navation />
			<div className='content'>
				<div>
					<h1>{name}</h1>
					<figcaption>{description}</figcaption>
				</div>
				<div>
					<h2>install</h2>
					<Code code={`npm install ${name} --save`} theme='markup' />
				</div>
				<Demo />
				<div>
					<h2>Usage</h2>
					<a href={homepage}>Documentation</a>
				</div>
			</div>
		</>
	);
};

render(<Page />, document.getElementById('app'));
