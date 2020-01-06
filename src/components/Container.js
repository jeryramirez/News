import React from 'react';
import NewsList from './NewsList';

const Container = ({news}) => (
    <section className="row card bg-white p-5">
        <NewsList
            news={news}
        />
    </section>
);
 
export default Container;