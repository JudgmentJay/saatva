import React from 'react';
import { SideLink } from '../SideLink/SideLink';

export class SideBar extends React.Component {
	render() {
		return (
			<div id="sideBar">
				{
					this.props.articles.map((article, index) => {
						return <SideLink article={article} key={index} articleIndex={index} toggleArticle={this.props.toggleArticle} />
					})
				}
			</div>
		);
	}
}
