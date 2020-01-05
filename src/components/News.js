import React from 'react';

const News = ({ news }) => (
    <div className="col-lg-4">
        {news.description}
    </div>
);
 
export default News;