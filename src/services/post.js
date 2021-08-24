import adapter from "../adapter/adapter";
const uri = "posts";

const all = async () => {
  const posts = await adapter.get(uri);
  return posts.data;
};

const getById = async (postId) => {
  const post = await adapter.getById(uri, postId);
  return post.data;
};

export default {
  all,
  getById,
};
