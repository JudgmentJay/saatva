import React from 'react';

export class Article extends React.Component {
	render() {
		if (this.props.articles.length > 0) {
			var currentArticle = this.props.articles[this.props.currentArticle];

			return (
				<article>
					<h2>{currentArticle.title}</h2>
					<img alt={currentArticle.title} src={currentArticle.image} />
					{currentArticle.copy}
				</article>
			);
		} else {
			return <article></article>;
		}
	}
}
