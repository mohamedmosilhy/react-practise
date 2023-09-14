import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>sorry</h2>
      <p>That page not found</p>
      <Link to="/">Go to home page</Link>
    </div>
  );
};

export default NotFound;
