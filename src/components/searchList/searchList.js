import React from 'react';

import SectionTitle from '../sectionTitle/sectionTitle';
import Loading from '../loading/loading';
import CardItem from '../cardItem/cardItem';

import './searchList.css';

export default function SearchList(props) {
    let { loading, filteredItems } = props;

    filteredItems = filteredItems.map(item => {
        return <CardItem key={item.name} item={item} />
    })

    const unfoundMess = 'Not found! Please enter other keywords!';
    let list = filteredItems;

    if(filteredItems.length === 0) {
        list = unfoundMess;
    }

    return (
        <section className='itemList'>
            <SectionTitle title="Your search" />
            <div className='wrapper'>
                <div className='itemList-center'>
                    {loading ? <Loading /> : list}
                </div>
            </div>
        </section>
    )
}