import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBlogPosts } from "./api/_helper";

export default function Home() {
  const [blogsData, setBlogsData] = useState();
  useEffect(() => {
    getBlogPosts(setBlogsData);
  }, []);
  return (
    <div>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Basic bootstrap with next js blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        {blogsData?.slice(0, 5)?.map((posts) => (
          <li key={posts?.id}>
            <Link href={`/posts/${posts?.id}`}>{posts?.title}</Link>
          </li>
        ))}
      </div>
    </div>
  );
}
