import React from 'react';

import './cardItem.css';

export default function CardItem(data) {
    const { name, delivery_price, image, online, description } = data.item;
    return (
        <section className='cards'>
            <article className='item'>
                <div className='img_container'>
                    <img src={image} alt='food_image' />
                    <div className='card_infor'>
                        <div className='price'>
                            <div className='price_num'>delivery: {(delivery_price/100).toFixed(2)} €</div>
                        </div>
                        <p className='item_description'>{description}</p>
                        <div>
                            <p className='item_name'>{name}</p>
                            <div className={online ? 'online' : 'clock icon'}></div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}
