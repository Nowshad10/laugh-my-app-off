import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const SinglePost = () => {

    const { id } = useParams();
    const { data: post, error, isLoading } = useFetch(`http://localhost:8000/posts/${id}`);

    return (
        <div className="post-details">
            { isLoading && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { post && (
                <article>
                    <h2>{ post.title }</h2>
                    <p>Written by { post.author }</p>
                    <div>{ post.body }</div>
                </article>
            )}
        </div>
    );
}
 
export default SinglePost;