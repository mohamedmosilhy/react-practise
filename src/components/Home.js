import useFetch from "../custom_hooks/useFetch";
import Bloglist from "./Bloglist";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading ....</div>}
      {blogs && <Bloglist blogs={blogs} title={"All Blogs!"} />}
    </div>
  );
};

export default Home;
