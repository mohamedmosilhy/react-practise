import { useParams } from "react-router-dom";
import useFetch from "../custom_hooks/useFetch";
import { useHistory } from "react-router-dom";
const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory();

  const handelDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "Delete",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading ....</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handelDelete}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
