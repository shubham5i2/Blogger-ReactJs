import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry 😢 404 Page Not Found!</h2>
      <Link to="/">Back to homepage...</Link>
    </div>
  );
};

export default NotFound;
