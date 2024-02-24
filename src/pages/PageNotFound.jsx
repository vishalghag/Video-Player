import React from "react";
import pageNotFoundImg from "../images/notFound.jpg";
import { Link } from "react-router-dom";
import routes from "../routes/routes.json";
// import pageNotFoundImg1 from "../notFound.jpg";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <Link to={routes.HOME}>
        {" "}
        <img src={pageNotFoundImg} alt="not_found" className=" bg-cover" />
      </Link>
    </div>
  );
};

export default PageNotFound;
