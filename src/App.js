import React from 'react';
import { Header } from './components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { Article } from './components/Article/Article';
import { News } from './util/News';

export class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			articles: [],
			currentArticle: 0
		};

		this.getNews = this.getNews.bind(this);
		this.updateCurrentArticle = this.updateCurrentArticle.bind(this);
	}

	getNews() {
		News.getNews().then(articles => {
			this.setState({
				articles: articles
			});
		});
	}

	updateCurrentArticle(articleIndex) {
		this.setState({
			currentArticle: articleIndex
		});
	}

	componentDidMount() {
		this.getNews();
	}

	render() {
		return (
			<div className="App">
				<Header />
				<div className="container">
					<SideBar articles={this.state.articles} toggleArticle={this.updateCurrentArticle} />
					<Article articles={this.state.articles} currentArticle={this.state.currentArticle} />
				</div>
			</div>
		);
	}
}
