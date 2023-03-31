import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    const { _id, picture, blogTitle, authorName, authorImg, publishDate, readTime } = props.card;
    return (
        <div>
            <div className="card max-w-2xl mt-3 mx-8 p-4 bg-base-100 shadow-xl">
                <figure><img className='w-full h-3/4' src={picture} /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={authorImg} />
                                    </div>
                                </label>

                            </div>
                            <div className='text-lg mx-4'>
                                <p >{authorName}</p>
                                <p>{publishDate}(4 Days ago)</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <p className='mr-4 '>{readTime} min read</p>
                            <FontAwesomeIcon onClick={() => props.addToBookmark(blogTitle, _id)} icon={faBookmark} />
                        </div>
                    </div>
                    <p className='text-3xl text-white'>{blogTitle}</p>
                    <button className='text-gray-700 w-28 mt-3 bg-orange-200 text-lg' onClick={() => props.addToTime(readTime)}>mark as read</button>

                </div>
            </div>
        </div>
    );
};

export default Card;