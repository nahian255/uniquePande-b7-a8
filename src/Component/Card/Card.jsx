import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBookmark } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    const { picture, blogTitle, authorName, authorImg, publishDate, readTime } = props.card;
    return (
        <div>
            <div className="card max-w-2xl mt-3 mx-8 p-4 bg-base-100 shadow-xl">
                <figure><img className='' src={picture} /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <div className="w-10 mr-3 rounded-full">
                                <img src={authorImg} />
                            </div>
                            <div>
                                <p className='text-lg'>{authorName}</p>
                                <p>{publishDate}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <p className='mr-4 '>{readTime} min read</p>
                            <FontAwesomeIcon onClick={() => props.addToBookmark(blogTitle)} icon={faBookmark} />
                            <button  >ooo</button>
                        </div>
                    </div>
                    <p className='text-3xl text-white'>{blogTitle}</p>
                    <button onClick={() => props.addToTime(readTime)}>mark as read</button>

                </div>
            </div>
        </div>
    );
};

export default Card;