import React, { useState } from 'react';
import Blog from '../Blog/Blog';
import BookMark from '../Bookmark/BookMark';
import './Main.css'

const Main = () => {
    const [card, setCard] = useState([])

    const addToBookmark = (blogTitle) => {
        setCard(blogTitle)
    }
    const addToTime = () => {
        console.log('payci');
    }

    return (
        <div className=''>
            <div className='flex'>
                <Blog
                    addToBookmark={addToBookmark}
                    addToTime={addToTime}
                ></Blog>
                <BookMark card={card}></BookMark>
            </div>
        </div>
    );
};

export default Main;