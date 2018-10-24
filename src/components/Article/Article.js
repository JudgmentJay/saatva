import React from 'react';

export class Article extends React.Component {
	renderCopy(copy) {
		return {__html: copy};
	}

	render() {
		if (this.props.articles.length > 0) {
			var currentArticle = this.props.articles[this.props.currentArticle];

			return (
				<article className={this.props.isVisible ? '' : 'hidden'}>
					<h1>{currentArticle.title}</h1>
					<img alt={currentArticle.title} src={currentArticle.image} />
					<div className="socialIcons">
						<i className="fas fa-envelope-square"></i>
						<i className="fab fa-twitter"></i>
						<i className="fab fa-facebook-square"></i>
						<i className="fas fa-rss"></i>
					</div>
					<div dangerouslySetInnerHTML={this.renderCopy(currentArticle.copy)} />
				</article>
			);
		} else {
			return <article></article>;
		}
	}
}
