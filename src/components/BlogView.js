import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function BlogView({ blog }) {

    const url = useHistory();
    const dispatch = useDispatch();

    const callDelete = () => {
        dispatch({ type: "DELETE_BLOG", id: blog.index});
        url.push('/');
    }

    return (
        <div className="container">
            <div className="card border-primary">
                <div className="card-header text-left">
                   By { blog.author }
                </div>
                <div className="card-body text-left">
                    <h5 className="card-title">{ blog.title }</h5>
                    <p className="card-text">{ blog.desc }</p>
                    
                    <Link to = {'/read/' + blog.index } >
                    <button className="btn btn-primary">Read</button>
                    </Link>

                    <Link to = {'/edit/' + blog.index } >
                    <button className="btn btn-primary" style={{ marginLeft: '1em' }}>Update</button>
                    </Link>

                    <button onClick={callDelete}
                    className="btn btn-primary" style={{ marginLeft: '1em' }}>Delete</button>
                </div>
                <div className="card-footer text-muted text-right">
                { blog.views }  <i className="fa fa-eye" aria-hidden="true"></i>        
                { blog.likes }  <i className="fa fa-heart" aria-hidden="true"></i>
                { blog.shares } <i className="fa fa-share" aria-hidden="true"></i>
                    2 days ago
                </div>
            </div>
            <br/>
        </div>
    )
}

export default BlogView;