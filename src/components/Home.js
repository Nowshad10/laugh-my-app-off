import { useState } from 'react';
import PostList from './PostList';
const Home = () => {

    const [posts, setPosts] = useState([
        { title: 'Forever Alone', body: 'Today, my sad ass got walked in on by a relative while I was having an imaginary conversation, with an imaginary friend, and I was talking out loud.', author: 'marioooo', id: 1 },
        { title: 'Life is Pain', body: 'Today, since my family and friends always make fun of me for being a wuss when it comes to pain, when I stubbed my toe, I made a point to not scream or complain in any way. Instead, I vomited and fainted.', author: 'homeyy', id: 2 },
        { title: 'Gas Giant', body: "Today, I learned that the average human farts 15 times a day. I fart more than that within the first hour of the day, and thats even after not eating anything for three days.", author: 'blogman77', id: 3 }
    ]);

    return (
        <div className="home">
            <PostList posts={posts} title="All Posts!" />
        </div>
    );
}
 
export default Home;
