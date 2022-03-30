import Axios from "axios";

export const getBlogPosts = async (setter) => {
  try {
    const res = await Axios.get(`https://jsonplaceholder.typicode.com/posts`);

    if (res.status === 200 && res?.data) {
      setter(res?.data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const getSingleBlogPost = async (setter, id) => {
  try {
    const res = await Axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (res.status === 200 && res?.data) {
      setter(res?.data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
