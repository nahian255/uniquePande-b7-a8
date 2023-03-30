import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import "./Blog.css"

const Blog = ({ handelAddToBook }) => {
    const [blog, setBlog] = useState([])
    console.log(blog);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div className='bg-red-200 w-9/12'>
            {
                blog.map((card) => <Card
                    card={card}
                    handelAddToBook={handelAddToBook}
                ></Card>)
            }
        </div>
    );
};

export default Blog;