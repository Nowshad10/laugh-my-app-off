// import { useState, useEffect } from 'react';
import PostList from './PostList';
import useFetch from './useFetch';
const Home = () => {
    const { data: posts, isLoading, error } = useFetch('http://localhost:8000/posts');

    return (
        <div className="home">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
           { posts && <PostList posts={posts} title="All Posts!" />}
        </div>
    );
}
 
export default Home;
