import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Post from "../views/Post.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/posts",
    name: "Home",
    component: Home,
  },
  {
    name: "post",
    path: "/post/:postId",
    component: Post,
    props: ({ params }) => {
      return {
        postId: params.postId,
      };
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
