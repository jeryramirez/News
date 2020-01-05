import React, {Component} from 'react';

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
            <div className="container">
                <h1>Document Ready</h1>
            </div>
        );
    }
}
 
export default App;