import React, { Component, Fragment } from 'react';

import Header from './src/components/Header';
import Container from './src/components/Container';

class App extends Component {
    state = {
        news: []
    }
    componentDidMount() {
        this.callNewsApi();
    }

    callNewsApi = async (category = 'general') => {

        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=bb59d49fde4c44a3b98ec85aab089ea4`;

        const response = await fetch(url);
        const news = await response.json();

        this.setState({
            news: news.articles
        })
    }
    
    render() { 
        return ( 
            <Fragment>
                <Header
                    title='NEWS API'
                />
                <Container
                    news={this.state.news}
                    callNewsApi={this.callNewsApi}
                />
                
            </Fragment>
        );
    }
}
 
export default App;