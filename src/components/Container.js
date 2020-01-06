import React from 'react';
import NewsList from './NewsList';
import Form from './Form'

const Container = ({news}) => (
    <section className="row card p-3">
        <Form/>
        <NewsList
            news={news}
        />
    </section>
);
 
export default Container;