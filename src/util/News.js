export var News = {
	getNews() {
		return fetch('https://cors-anywhere.herokuapp.com/https://s3-us-west-2.amazonaws.com/saatva-hiring/news.json').then(response => {
			if (response.ok) {
				return response.json();
			}
			throw new Error('Request failed!');
		}, networkError => {
			console.log(networkError.message);
		}).then(jsonResponse => {
			return jsonResponse.articles.map(article => ({
				title: article.title,
				copy: article.long_description,
				image: article.urlToImage
			}));
		});
	}
}