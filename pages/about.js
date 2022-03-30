import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="Basic bootstrap with next js blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>This is about page</h1>
    </div>
  );
};

export default about;
