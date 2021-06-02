import React from 'react';
import BlogView from './BlogView';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

function BlogList() {

    // fetch all blogs from store
    const blogs = useSelector(state => state.blogs);

    return (
        <div className='container'>
            <Link to='/create'><button className="btn btn-outline-primary">New Blog</button></Link>
            <br />
            <br />
            <div>
                {
                    blogs.map((blog, index) => (
                        <BlogView key={index} blog={blog} />
                    ))
                }

            </div>
        </div>
    )
}

export default BlogList;