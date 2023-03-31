import React, { useState } from 'react';
import Blog from '../Blog/Blog';
import BookMark from '../Bookmark/BookMark';
import './Main.css'

const Main = () => {
    const [card, setCard] = useState([])
    const [time, setTime] = useState(0)


    // bookmark button
    const addToBookmark = (blogTitle) => {
        setCard(blogTitle)
    }


    // read more button
    const addToTime = (readTime) => {
        const readingTime = JSON.parse(localStorage.getItem('readingTime'))
        if (readingTime) {
            const sum = readingTime + readTime;
            localStorage.setItem('readingTime', sum)
            setTime(sum)
        } else {
            localStorage.setItem('readingTime', readTime)
            setTime(readTime)
        }
    }

    return (
        <div className=''>
            <div className='flex'>
                <Blog
                    addToBookmark={addToBookmark}
                    addToTime={addToTime}
                ></Blog>
                <BookMark
                    time={time}
                    card={card}></BookMark>
            </div>
        </div>
    );
};

export default Main;