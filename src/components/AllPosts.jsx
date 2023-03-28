import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/counter/posts/postsSlice';

const AllPosts = () => {
    const posts = useSelector((state) => state.posts.posts);
    const disPatch = useDispatch();

    useEffect(() => {
        disPatch(fetchPosts())
    }, [])

    return (
        <section className='posts'>
            {
                posts.map(post => <div key={post.id}>
                    <small>{post?.id}</small>
                    <h1>{post?.title}</h1>
                    <p>{post?.body}</p>
                </div>)
            }

        </section>
    );
};

export default AllPosts;