const initState = {

    blogs: [
        {
            index: 1,
            author: 'Ms. Apurva Shinde',
            title: 'Blog 1',
            desc: 'Some desciption..........fhsghfj',
            content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
            views: 200,
            likes: 150,
            shares: 80
        },
        {
            index: 2,
            author: 'Mr. Aryan Shinde',
            title: 'Blog 2',
            desc: '2 Some desciption..........fhsghfj',
            content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
            views: 200,
            likes: 150,
            shares: 80
        },
        {
            index: 3,
            author: 'Mr. 3 Aryan Shinde',
            title: 'Blog 3',
            desc: '2 Some desciption..........fhsghfj',
            content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
            views: 200,
            likes: 150,
            shares: 80
        },
        {
            index: 4,
            author: 'Mr. Aryan',
            title: 'Blog 4',
            desc: '2 Some desciption..........fhsghfj',
            content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
            views: 200,
            likes: 150,
            shares: 80
        }
    ]

}

const rootReducer = (state = initState, action) => {
    console.log(action);

    if (action.type === 'CREATE_BLOG') {
        console.log(action.blog); 
        var index = state.blogs.length + 1;
        var blog = Object.create(state.blogs[0]);

        blog.index = index;
        blog.author = 'Ms. Apurva Shinde';
        blog.title = action.blog.title;
        blog.desc = 'Some desciption...'+ index ;
        blog.content = action.blog.content;
        blog.views= 0;
        blog.likes= 0;
        blog.shares= 0;

        console.log(blog); 
        
        let newblogs = state.blogs.filter(blog => {
            return blog.index !== action.id
        });

        newblogs = [...newblogs, blog];

        console.log(newblogs);

        return {
            ...state,
            blogs: newblogs
        }
    }

    if (action.type === 'DELETE_BLOG') {
        let newblogs = state.blogs.filter(blog => {
            return blog.index !== action.id
        });
        return {
            ...state,
            blogs: newblogs
        }
    }

    if (action.type === 'EDIT_BLOG') {
        // placing blog obj passed on index passed (being edited)
        // console.log(action.blog); 
        state.blogs[action.blog.index - 1] = action.blog;
        // console.log(state.blogs);
        console.log(state.blogs[action.blog.index]);

        return {
            ...state,
        }
    }

    return state;
}

export default rootReducer;