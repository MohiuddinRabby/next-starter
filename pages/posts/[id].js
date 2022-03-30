/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getSingleBlogPost } from "../api/_helper";

const id = () => {
  const [getSinglePost, setGetSinglePost] = useState();
  const [loader, setLoader] = useState(true);
  const router = useRouter();
  useEffect(() => {
    getSingleBlogPost(setGetSinglePost, router?.query?.id);
    setLoader(false);
  }, [router.query.id]);
  return (
    <div className="container">
      {loader ? (
        <h1 className="text-center text-success">Loading...</h1>
      ) : (
        <div>
          <h5>ID: {router?.query?.id}</h5>
          <h4>{getSinglePost?.title}</h4>
          <h4>{getSinglePost?.body}</h4>
        </div>
      )}
    </div>
  );
};

export default id;
