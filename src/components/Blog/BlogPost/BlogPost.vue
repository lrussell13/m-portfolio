<template>
  <div class="blog-post-container">
    <h1>{{ blogPost.title }}</h1>
    <hr>
    <p class="blog-date">{{ blogPost.date.toDateString() }}</p>
    <img :src="getImgUrl(blogPost.img)" class="blog-img">
    <div v-html="blogPost.content"></div>
  </div>
</template>

<script>
import blogPosts from '../../../store/blogposts'

export default {
  data () {
    return {
      blogPost: blogPosts[this.$route.params.id]
    }
  },
  methods: {
    getImgUrl (img) {
      return require('@/assets/blog-imgs/' + img)
    }
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
    margin: 0px;
  }
  hr {
    width: 100%;
    margin: 0 auto;
  }
  .blog-date {
    text-align: right;
    margin-bottom: 12px;
  }
  .blog-post-container {
    padding: 24px;
  }
  .blog-img {
    width: 100%;
  }
</style>
