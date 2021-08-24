<template>
  <div class="about">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
import PostService from "../services/post";

export default {
  props: {
    postId: {
      type: [Number, String],
    },
  },
  data() {
    return {
      post: [],
    };
  },
  methods: {
    async fetchPost() {
      try {
        const singlePost = await PostService.getById(this.postId);
        this.post = singlePost;
      } catch (error) {
        // can show errors to user via error-boundry
        console.log(error);
      }
    },
  },

  created() {
    this.fetchPost();
  },
};
</script>
