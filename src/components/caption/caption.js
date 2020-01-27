import React from 'react';

import './caption.css';

export default function Caption({input, handleInput, showFilteredItems, doSearch}) {
    return (
        <div className='searchbar'>
            <h1 className='title'>Discover and get great food!</h1>
            <h4 className='description'>
                We deliver fresh food to your door
                </h4>
            <form onSubmit={showFilteredItems}>
                <input
                    type='text'
                    value={input}
                    onChange={handleInput}
                    className='inputStyle'
                    placeholder='discover your food'
                    style={{ paddingLeft: 10 }} />
                <button
                    type='submit'
                    className='button'
                >{doSearch ? 'Show All' : 'Search'}
                </button>
            </form>
        </div>
    )
} 