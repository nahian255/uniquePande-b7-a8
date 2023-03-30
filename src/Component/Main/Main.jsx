import React from 'react';
import Blog from '../Blog/Blog';
import BookMark from '../Bookmark/BookMark';
import './Main.css'

const Main = () => {

    const handelAddToBook = () => {
        console.log('clicked');
    }
    return (
        <div className=''>
            <div className='flex'>
                <Blog handelAddToBook={handelAddToBook}></Blog>
                <BookMark></BookMark>
            </div>
        </div>
    );
};

export default Main;