import React, { useState, useEffect } from 'react';

import Header from './header/header';
import ItemList from '../components/itemList/itemList';
import Caption from '../components/caption/caption';
import NavBar from '../components/navBar/navBar';
import SearchList from '../components/searchList/searchList';

export default function Main() {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [sortedItems, setSortedItems] = useState([]);
    const [option, setOption] = useState('Choose sort option');
    const [doSort, setDoSort] = useState(false);
    const [input, setInput] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [doSearch, setDoSearch] = useState(false);

    
    const selectData = ['Sort A-Z', 'Sort Z-A', 'Choose sort option']

    useEffect(() => {
        fetchData();
    }, [])
  
    const fetchData = () => {
        setLoading(true);
        fetch('https://raw.githubusercontent.com/woltapp/summer2020/master/restaurants.json')
            .then(response => response.json())
            .then(data => {
                setItems(data.restaurants);
                setLoading(false);
            })
            .catch(err => console.log(err));
    };

    const handleInput = (event) => {
        const value = event.target.value;
        setInput(value);
    };

    const onSort = (event) => {
        event.preventDefault();
        const cloneData = [...items];
        if (option === 'Sort A-Z') {
            const sortedData = cloneData.sort(function (a, b) {
                var textA = a.name.toUpperCase();
                var textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            setSortedItems(sortedData);
            setDoSort(true);
        }
        else if (option === 'Sort Z-A'){
            const sortedData = cloneData.sort(function (a, b) {
                var textA = a.name.toUpperCase();
                var textB = b.name.toUpperCase();
                return (textA < textB) ? 1 : (textA > textB) ? -1 : 0;
            });
            setSortedItems(sortedData);
            setDoSort(true)
        }
        else {
            setDoSort(false);
        }
    }

    const showFilteredItems = (event) => {
        if(input) {
            setFilteredItems(filteredList);
            setDoSearch(true);
            setInput('');
        }
        else {
            setDoSearch(false);
        }
        event.preventDefault();
    }

    const filteredList =
        items.filter(entry =>
            Object.values(entry).some(
                val => typeof val === "string" && val.includes(input)));

    return (
        <div>
            <Header>
                <Caption
                    input={input}
                    handleInput={handleInput}
                    showFilteredItems={showFilteredItems}
                    doSearch={doSearch} />
            </Header>
            <NavBar />
            {doSearch ? 
            <SearchList
                loading={loading}
                filteredItems={filteredItems} /> :
            <ItemList
                loading={loading}
                items={items}
                handleOptions={e => setOption(e.target.value)}
                value={option}
                data={selectData}
                sortedItems={sortedItems}
                doSort={doSort}
                onSort={onSort}/>
                }
        </div>
    );
}
