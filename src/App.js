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
			currentArticle: 0,
			sidebarVisible: false,
			articleVisible: true
		};

		this.getNews = this.getNews.bind(this);
		this.updateCurrentArticle = this.updateCurrentArticle.bind(this);
		this.toggleSidebar = this.toggleSidebar.bind(this);
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

	toggleSidebar() {
		if (this.state.sidebarVisible === false) {
			this.setState({
				sidebarVisible: true
			});
			setTimeout(() => {
				this.setState({
					articleVisible: false
				})
			}, 250);
		} else {
			this.setState({
				sidebarVisible: !this.state.sidebarVisible,
				articleVisible: !this.state.articleVisible
			});
		}
	}

	componentDidMount() {
		this.getNews();
	}

	render() {
		return (
			<div className="App">
				<Header toggleSidebar={this.toggleSidebar} />
				<div className="container">
					<SideBar
						articles={this.state.articles}
						currentArticle={this.state.currentArticle}
						toggleSidebar={this.toggleSidebar}
						toggleArticle={this.updateCurrentArticle}
						isVisible={this.state.sidebarVisible}
					/>
					<Article
						articles={this.state.articles}
						currentArticle={this.state.currentArticle}
						isVisible={this.state.articleVisible}
					/>
				</div>
			</div>
		);
	}
}
