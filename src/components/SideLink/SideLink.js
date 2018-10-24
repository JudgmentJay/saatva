import React from 'react';

export class SideLink extends React.Component {
	getBackground(image) {
		return ({
			background: `url('${image}')`,
			backgroundSize: 'cover',
		});
	}

	updateCurrentArticle(articleIndex) {
		this.props.toggleArticle(articleIndex);

		window.scroll(0, 0);

		var windowWidth = window.matchMedia("(max-width: 519px)");

		if (windowWidth.matches) {
			this.props.toggleSidebar();
		}
	}

	render() {
		return (
			<div className={this.props.currentArticle === this.props.articleIndex ? 'active' : ''} onClick={this.updateCurrentArticle.bind(this, this.props.articleIndex)} style={this.getBackground(this.props.article.image)}>
				<span>{this.props.article.title}</span>
			</div>
		);
	}
}
