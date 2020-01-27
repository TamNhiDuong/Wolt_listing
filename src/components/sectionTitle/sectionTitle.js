import React from 'react';
import './sectionTitle.css';

export default function SectionTitle({title}) {
    return (
        <div className='sectionTitle'>
            <h4>{title}</h4>
            <div></div>
        </div>
    )
}