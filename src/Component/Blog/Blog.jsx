import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import "./Blog.css"

const Blog = ({ addToBookmark, addToTime }) => {

    const [blog, setBlog] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div className=' w-9/12'>
            {
                blog.map((card) => <Card
                    key={card._id}
                    addToBookmark={addToBookmark}
                    addToTime={addToTime}
                    card={card}
                ></Card>)
            }
        </div>
    );
};

export default Blog;