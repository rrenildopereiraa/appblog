import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2 className="ta-c mt-4">{title}</h2>
      {blogs.map(blog => (
        <div className="mt-2 p-2 rad-2 bs-xlg" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2 className="t-h-magenta">{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;