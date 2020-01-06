import React from 'react';

import PropTypes from 'prop-types';

const News = ({ news }) => {
    const {author, content, description, publishedAt, title, url, urlToImage} = news
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 my-1">
            <div className="card">
                <img className="card-img-top" src={urlToImage} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} target="_blank" className="btn btn-block btn-primary"> go to news</a>
                </div>
            </div>
        </div>
    )
};

News.propTypes = {
    news: PropTypes.object.isRequired
}
 
export default News;