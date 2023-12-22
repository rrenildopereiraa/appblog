import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    
    const handleClick = () => { 
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div className="mt-4">Please wait...</div>}
            {error && <div>{error}</div>}
            {blog &&
                <article>
                    <h2 className="mt-4">{blog.title}</h2>
                    <div>{blog.body}</div>
                    <p className="fs-sm mt-2">Written by {blog.author}</p>
                    <button className="btn-violet t-white mt-2" onClick={handleClick}>Delete blog</button>
                </article>
            }
        </div>
    );
}

export default BlogDetails;