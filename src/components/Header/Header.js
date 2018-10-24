import React from 'react';

export class Header extends React.Component {
	toggleSidebar() {
		this.props.toggleSidebar();
	}

	render() {
		return (
			<header>
				<div className="container">
					<h1>Saatva News</h1>
					<i className="fas fa-bars" onClick={this.toggleSidebar.bind(this)}></i>
				</div>
			</header>
		);
	}
}
