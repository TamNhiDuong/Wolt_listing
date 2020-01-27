import React from 'react';

import SectionTitle from '../sectionTitle/sectionTitle';
import Loading from '../loading/loading';
import CardItem from '../cardItem/cardItem';

import './itemList.css';

export default function ItemList(props) {

    let { value, handleOptions, data, loading, items, sortedItems, doSort, onSort } = props;

    items = items.map(item => {
        return <CardItem key={item.name} item={item} />
    })
    sortedItems = sortedItems.map(item => {
        return <CardItem key={item.name} item={item} />
    })
    
    return (
        <section className='itemList'>
            <SectionTitle title="Explore restaurants in Helsinki" />
            <div className='wrapper'>
                <form onSubmit={onSort} className='form'>
                    <select onChange={handleOptions} value={value} className='dropdown'>
                        {data.map(item => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    <button type='submit'  className='btn'>Sort</button>
                </form>
                <div className='itemList-center'>
                    {loading ? <Loading /> : (doSort ? sortedItems : items)}
                </div>
            </div>
        </section>
    )
}