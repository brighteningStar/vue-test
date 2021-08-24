<template>
  <div>
    <h1>Posts</h1>
    <table>
      <thead>
        <th>ID</th>
        <th>Title</th>
        <th>Action</th>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.title">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>
            <router-link
              :to="{
                name: 'post',
                params: { postId: post.id },
              }"
              >View</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import PostService from "../services/post";
export default {
  name: "Posts",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async fetchAll() {
      try {
        const allPosts = await PostService.all();
        this.posts = allPosts;
      } catch (error) {
        // can show errors to user via error-boundry
        console.log(error);
      }
    },
  },
  mounted() {
    this.fetchAll();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
