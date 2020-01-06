import React from 'react';
import NewsList from './NewsList';
import Form from './Form'
import PropTypes from 'prop-types';

const Container = ({news, callNewsApi}) => (
    <section className="row card p-3">
        <Form
            callNewsApi={callNewsApi}
        />
        <NewsList
            news={news}
        />
    </section>
);
 
Container.propTypes = {
    news: PropTypes.array.isRequired,
    callNewsApi: PropTypes.func.isRequired
}

export default Container;