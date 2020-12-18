import React from 'react';
import Loading from './../lib/index';

export default class page extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loading: false };
	}

	submite() {
		this.setState({ loading: true });
		new Promise((res, rej) => {
			console.log('sending data...');
			setTimeout(() => res(), 3000);
		}).then(() => {
			this.setState({ loading: false }, () => {
				console.log('success');
			});
		});
	}

	append() {
		if (this.state.loading) return <Loading style='dark' text='update now...' />;
	}

	render() {
		return (
			<div className='page'>
				<button onClick={this.submite.bind(this)}> submite something </button>
				{this.append()}
			</div>
		);
	}
}
