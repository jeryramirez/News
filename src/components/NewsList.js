import React from 'react';
import News from './News';

const NewsList = ({news}) => (
    <div className="newList row">
        {
            news.map(news => (
                <News
                    news={news}
                    key={news.url}
                />
            ))
        }
    </div>
)
 
export default NewsList;