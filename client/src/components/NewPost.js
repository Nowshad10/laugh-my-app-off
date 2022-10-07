import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const NewPost = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = { title, body, author };
        setIsLoading(true);
        fetch('http://localhost:4000/posts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        })
        .then(() => {
            console.log('New post successfully added.');
            setIsLoading(false);
            // This is how you back to the previous page
            // navigate(-1);
            navigate('/');
        })
    };

    return (
        <div className="create">
            <h2>Add a new story</h2>
            <form onSubmit={handleSubmit}>
                <label>Post Title:</label>
                <input
                    type="text"
                    required
                    value={ title }
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Post Entry:</label>
                <textarea
                    required
                    value={ body }
                    onChange = {(e) => setBody(e.target.value)}
                >
                </textarea>
                <label>Your Name:</label>
                <input
                    type="text"
                    required
                    value={ author }
                    onChange = {(e) => setAuthor(e.target.value)}
                />
                { !isLoading && <button>Add Post</button>}
                { isLoading && <button disabled>Adding Post...</button>}
            </form>
        </div>
    );
}
 
export default NewPost;

