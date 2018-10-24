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
						<i class="fas fa-envelope-square"></i>
						<i class="fab fa-twitter"></i>
						<i class="fab fa-facebook-square"></i>
						<i class="fas fa-rss"></i>
					</div>
					<div dangerouslySetInnerHTML={this.renderCopy(currentArticle.copy)} />
				</article>
			);
		} else {
			return <article></article>;
		}
	}
}
