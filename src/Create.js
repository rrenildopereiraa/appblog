import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Renildo Pereira');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs', { 
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('A new blog has been added');
      setIsPending(false);
      history.push('/');
    })
  }

  return (
    <div className="p-4">
      <h2 className="mb-4 ta-c">Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="dis-b t-6-gray-4">Blog title:</label>
          <input className="w-full p-1 bc-l-gray-6 rad-1 bs-bb" type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-2">
          <label className="dis-b t-6-gray-4">Blog body:</label>
          <textarea className="w-full p-1 bc-l-gray-6 rad-1 bs-bb" required rows={15} value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <label className="dis-b t-6-gray-4">Blog author:</label>
        <div className="mb-2">
          <select className="w-full p-1 bc-l-gray-6 rad-1" value={author} onChange={(e) => setAuthor(e.target.value)} >
            <option value="Renildo Pereira">Renildo Pereira</option>
            <option value="Ren Eats Pears">Ren Eats Pears</option>
          </select>
        </div>
        {!isPending && <button className="btn-violet w-full t-white">Add blog</button>}
        {isPending && <button className="btn-gray w-full t-black" disabled>Adding blog...</button>}
      </form>
    </div>
  );
}
 
export default Create;