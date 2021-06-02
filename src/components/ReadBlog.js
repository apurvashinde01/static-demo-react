import React from 'react'
import { Link, useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function ReadBlog() {
    // fetch id of blog from url
    const id = useParams().blog_id;
    // console.log(id);
    // dispatch obj creation
    const dispatch = useDispatch();
    // fetch all blogs from store
    const blogs = useSelector(state => state.blogs);
    // find blog requested based on id
    const blog = blogs.find(blog => blog.index == id);
    // fetch all routing history
    const url = useHistory();

    const callDelete = () => {
        dispatch({ type: "DELETE_BLOG", id: blog.index});
        url.push('/');
    }

    return (
        <div className="container">
            {
                blog ? (
                    <div>
                        <h2>{blog.title}</h2>
                        <p>{blog.content}</p>
                        <div class="card-footer text-muted text-right">
                            {blog.views}  <i className="fa fa-eye" aria-hidden="true"></i>
                            {blog.likes}  <i className="fa fa-heart" aria-hidden="true"></i>
                            {blog.shares} <i className="fa fa-share" aria-hidden="true"></i>
                        2 days ago

                        <Link to= {'/edit/' + blog.index } >
                        <button className="btn btn-primary" style={{ marginLeft: '1em' }}>Update</button>
                        </Link>

                        <button onClick={callDelete}
                                className="btn btn-danger" style={{ marginLeft: '1em' }}>Delete</button>
                        </div>
                    </div>)
                    :
                    (
                        <div className="center">No blog found...</div>
                    )
            }
        </div>
    )
}

export default ReadBlog;