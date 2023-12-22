import { useHistory } from 'react-router-dom';

const NotFound = () => {
    const history = useHistory();

    const handleGoHome = () => {
        history.push('/');
    }

    return (
        <div className="not-found">
            <div className="ins">
                <div>
                    <h1 className="ta-c mt-4">Sorry</h1>
                    <p>This page was not found!</p>
                </div>
            </div>
            <div className='ins mt-2'>
                <button className='btn-violet t-white' onClick={handleGoHome}>Take me home</button>
            </div>
        </div>
    );
}

export default NotFound;