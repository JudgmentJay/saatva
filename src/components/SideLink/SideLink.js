import React from 'react';

export class SideLink extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isActive: false
		};
	}

	toggleActive() {
		this.setState({
			isActive: !this.state.isActive
		});
	}

	getBackground(image) {
		if (this.state.isActive === true) {
			return ({
				background: `url('${image}')`,
				backgroundSize: 'cover'
			});
		} else {
			return {background: '#fff'};
		}
	}

	updateCurrentArticle(articleIndex) {
		this.props.toggleArticle(articleIndex);
	}

	render() {
		return (
			<div onClick={this.updateCurrentArticle.bind(this, this.props.articleIndex)} onMouseEnter={this.toggleActive.bind(this)} onMouseLeave={this.toggleActive.bind(this)} style={this.getBackground(this.props.article.image)}>
				<span>{this.props.article.title}</span>
			</div>
		);
	}
}
