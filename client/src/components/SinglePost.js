import { useParams, useNavigate } from "react-router-dom";
import useFetch from './useFetch';


const SinglePost = () => {

    const { id } = useParams();
    const { data: post, error, isLoading } = useFetch(`http://localhost:4000/posts/${id}`);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch(`http://localhost:4000/posts/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            navigate('/');
        })
    };

    return (
        <div className="post-details">
            { isLoading && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { post && (
                <article>
                    <h2>{ post.title }</h2>
                    <p>Written by { post.author }</p>
                    <div>{ post.body }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default SinglePost;
