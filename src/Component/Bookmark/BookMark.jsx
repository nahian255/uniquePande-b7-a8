import React from 'react';
import Title from '../Title/Title';

const BookMark = ({ card, time }) => {

    return (
        <div className='bg-green-100 w-1/4 sticky top-0 h-52'>
            <p className='py-8 bg-lime-200 px-4 text-xl'>Spent time on read :{time} min</p>
            {/* <p className='bg-yellow-100 py-3'>..{card}</p> */}
            <p className='py-8 bg-slate-300 px-4 text-xl'>BookMark Blog: {card.length}</p>
            {
                card.map((singleCard => <Title singleCard={singleCard}></Title>))
            }

        </div>
    );
};

export default BookMark;