import React from 'react';
import News from './News';

import PropTypes from 'prop-types';


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

NewsList.propTypes = {
    news: PropTypes.array.isRequired
}
 
export default NewsList;