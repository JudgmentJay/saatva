import React from 'react';
import { SideLink } from '../SideLink/SideLink';

export class SideBar extends React.Component {
	render() {
		return (
			<div id="sideBar" class={this.props.isVisible ? 'visible' : ''}>
				{
					this.props.articles.map((article, index) => {
						return <SideLink article={article} key={index} articleIndex={index} currentArticle={this.props.currentArticle} toggleSidebar={this.props.toggleSidebar} toggleArticle={this.props.toggleArticle} />
					})
				}
			</div>
		);
	}
}
