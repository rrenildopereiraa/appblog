import './index.css';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="home">
            { error && <div className="ta-c mt-4 t-red">{ error }</div> }
            {isPending && <div className="ta-c mt-4">Please wait...</div> }
            { blogs && <BlogList blogs={blogs} title="All blogs!" /> }
        </div>
     );
}
 
export default Home;