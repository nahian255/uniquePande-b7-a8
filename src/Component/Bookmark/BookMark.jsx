import React from 'react';

const BookMark = ({ card }) => {
    console.log(card);
    return (
        <div className='bg-green-100 w-1/4 sticky top-0 h-52'>
            <p>Spent time on read :min</p>
            <p>{card}</p>
        </div>
    );
};

export default BookMark;