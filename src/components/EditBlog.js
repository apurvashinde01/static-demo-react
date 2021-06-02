import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'

function EditBlog() {

    // for pushing next page
    const url = useHistory();
    // for accessing params passed
    const url_index = useParams().blog_id;
    // to access store's state
    const blogs = useSelector(state => state.blogs);
    // finding requested blog from blogs
    var blog = blogs.find(blog => blog.index == url_index);
    const dispatch = useDispatch();

    // maintained for content's value
    var [value, setvalue] = useState('');

    const handleChange = (event) => {
        // console.log(event.target.value);
        setvalue({value: event.target.value});
    }

    const handleSubmit = () =>{
        
        // console.log(blog.content);
        if (value.value) {
            blog.content = value.value; 
            dispatch({ type: "EDIT_BLOG", blog: blog});
            console.log(url);
            url.push('/read/'+ url_index);
            //enable create btn
        } else {
            // disable create btn
            // blog.content = value.value;
        }
    }

    const callDelete = () => {
        dispatch({ type: "DELETE_BLOG", id: blog.index});
        url.push('/');
    }

    return (
        <div className='container'>
            {/* keep title non editable initially(muted), upon change enable update btn */}   
            {/* <div class="input-group mb-3"> */}
                {/* <input type="text" class="form-control" value={blog.title} />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">Update</button>
                </div>
            </div> */}

            <h2>{blog.title}</h2>

            <div class="form-group">
                <label for="content">Content:</label>
                {/* Keep num of rows based on screen later or split paras into small content boxes */}
                <textarea className="form-control" rows="15" id="content" onChange={handleChange}>{blog.content}</textarea>
                
                {/* Onsubmit->edit's dispatch->readview of same blog*/}
                <button onClick={handleSubmit} type='submit' className='btn btn-primary'>Update</button>
            </div>

            <div class="card-footer text-muted text-right">
                {blog.views}  <i className="fa fa-eye" aria-hidden="true"></i>
                {blog.likes}  <i className="fa fa-heart" aria-hidden="true"></i>
                {blog.shares} <i className="fa fa-share" aria-hidden="true"></i>
                                     2 days ago
            </div>

            <button onClick={callDelete} class="btn btn-danger" style={{ marginLeft: '1em' }}>Delete</button>
        </div>
    )
}

export default EditBlog