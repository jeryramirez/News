import React, {Component, Fragment} from 'react';
import Header from './src/components/Header';
class App extends Component {

    componentDidMount() {
        this.callNewsApi();
    }

    callNewsApi = async () => {

        const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bb59d49fde4c44a3b98ec85aab089ea4`;

        const response = await fetch(url);
        const news = await response.json();

        console.log(news);
    }
    
    render() { 
        return ( 
            <Fragment>
                <Header/>
            </Fragment>
        );
    }
}
 
export default App;