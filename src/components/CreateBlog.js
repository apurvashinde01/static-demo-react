import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'

function CreateBlog() {

    // for pushing next page
    const url = useHistory();

    const dispatch = useDispatch();

    // fetch all blogs from store
    const blogs = useSelector(state => state.blogs);
    
    const new_index = blogs.length + 1;

    // find blog requested based on id
    const blog = blogs.find(blog => blog.index == 1);       //TBR takes a blog based on id for reference

    // maintained for content's value
    var [content, setcontent] = useState('');
    var [title, settitle] = useState('');

    const handleContent = (event) => {
        console.log(event.target.value);
        setcontent({ content: event.target.value });
    }

    const handleTitle = (event) => {
        console.log(event.target.value);
        settitle({ title: event.target.value });
    }

    const handleSubmit = () => {
        var our_blog = Object.create(blog);
        
        // console.log(our_blog);

        our_blog.title = title.title;
        our_blog.content = content.content;
        console.log(our_blog);
        dispatch({ type: "CREATE_BLOG", blog: our_blog });/*title: title.title, content: content.content }); */
        
        // console.log(url);
        url.push('/read/'+ new_index);
    }

    return (
        <div>
            <form>
                <div className="form-group">
                    <label>Blog Title</label>
                    <input type="text" onChange={handleTitle} className="form-control" id="" placeholder="Title" />
                </div>
                <div className="form-group">
                    <label>Contents</label>
                    <textarea className="form-control" id="example" rows="15" onChange={handleContent}></textarea>
                </div>
            </form>
            {/* Onsubmit->edit's dispatch->readview of same blog*/}
            <button onClick={handleSubmit} type='submit' className='btn btn-primary'>Create</button>
        </div>
    )
}

export default CreateBlog;